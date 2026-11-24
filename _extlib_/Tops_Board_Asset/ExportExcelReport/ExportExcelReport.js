//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.ExportExcelReport
// Group : Action
//==============================================================================
if (!nexacro.ExportExcelReport)
{
    nexacro.ExportExcelReport = function (id, parent)
    {
        nexacro.Action.call(this, id, parent);
    };

    nexacro.ExportExcelReport.prototype = nexacro._createPrototype(nexacro.Action, nexacro.ExportExcelReport);
    nexacro.ExportExcelReport.prototype._type_name = "ExportExcelReport";

    //===============================================================
    // nexacro.ExportExcelReport : Method
    //===============================================================
    nexacro.ExportExcelReport.prototype.run = function ()
    {
        let oForm = this._p_parent ? this._p_parent : this.parent;
        let oAction = this;
        let arrTemp = [];
        let nSeq = 0;
        let sStamp = "_xr" + (new Date()).getTime();

        let fnPad = function (n) { return (n > 9 ? "" : "0") + n; };
        let dNow = new Date();
        let sDate = dNow.getFullYear() + "-" + fnPad(dNow.getMonth() + 1) + "-" + fnPad(dNow.getDate());
        let sFileDate = String(dNow.getFullYear()).substr(2) + fnPad(dNow.getMonth() + 1) + fnPad(dNow.getDate());
        let nGap = parseInt(this._p_rowgap, 10);
        if (isNaN(nGap) || nGap < 0) nGap = 1;

        /* 엑셀 시트 이름 규칙 : 금지 문자 제거, 31자 */
        let fnSheetName = function (s) {
            return String(s == null ? "" : s).replace(/[\[\]\:\*\?\/\\]/g, "").substr(0, 31) || "Sheet";
        };

        /* "A,B" 또는 "A B" → View 객체 목록 */
        let fnViews = function (sValue) {
            let arr = [];
            String(sValue || "").split(/[,\s]+/).forEach(function (sId) {
                if (sId && oForm[sId]) arr.push(oForm[sId]);
            });
            return arr;
        };

        /* View 안의 첫 번째 Grid */
        let fnGrid = function (oView) {
            let arrComp = oView.form ? oView.form.components : null;
            if (!arrComp) return null;
            for (let i = 0; i < arrComp.length; i++) {
                if (arrComp[i] && arrComp[i]._type_name == "Grid") return arrComp[i];
            }
            return null;
        };

        /* 임시 Dataset + Grid 생성 (화면 Grid는 건드리지 않음) */
        let fnTempGrid = function (sFormats, oSrcDs, sFilter) {
            nSeq++;
            let oDs = new Dataset(sStamp + "_ds" + nSeq, oForm);
            oForm.addChild(oDs.name, oDs);
            oDs.copyData(oSrcDs, false);
            if (sFilter) oDs.filter(sFilter);

            let oGrid = new Grid(sStamp + "_grd" + nSeq, 0, 0, 10, 10, null, null, null, null, null, null, oForm);
            oForm.addChild(oGrid.name, oGrid);
            oGrid.set_visible(false);
            oGrid.show();
            oGrid.set_binddataset(oDs.name);
            oGrid.set_formats(sFormats);

            /* 헤더 정렬 표시(⇅ ▼ ▲) 제거 */
            for (let i = 0; i < oGrid.getCellCount("head"); i++) {
                let sText = String(oGrid.getCellProperty("head", i, "text") || "");
                oGrid.setCellProperty("head", i, "text", sText.replace(/\s*[⇅▼▲]\s*$/, ""));
            }
            arrTemp.push(oGrid, oDs);
            return oGrid;
        };

        /* 제목용 1칸 Grid */
        let fnTitleGrid = function (sText) {
            nSeq++;
            let oDs = new Dataset(sStamp + "_ds" + nSeq, oForm);
            oForm.addChild(oDs.name, oDs);
            oDs.addColumn("t", "string", 256);
            oDs.setColumn(oDs.addRow(), "t", sText);
            let sFmt = '<Formats><Format id="default"><Columns><Column size="400"/></Columns>'
                     + '<Rows><Row size="28"/></Rows><Band id="body"><Cell text="bind:t" font="bold 14px/normal &quot;Malgun Gothic&quot;" border="0px none"/></Band></Format></Formats>';
            arrTemp.push(oDs);
            return fnTempGrid(sFmt, oDs, "");
        };

        /* Grid가 차지하는 행 수 = head + body × 행수 + summary */
        let fnRowCount = function (oGrid) {
            let nHead = 0, nBody = 0, nSumm = 0;
            for (let i = 0; i < oGrid.getFormatRowCount(); i++) {
                let sBand = oGrid.getFormatRowProperty(i, "band");
                if (sBand == "head") nHead++;
                else if (sBand == "summ" || sBand == "summary") nSumm++;
                else nBody++;
            }
            let oDs = oGrid.getBindDataset();
            return nHead + nBody * (oDs ? oDs.getRowCount() : 0) + nSumm;
        };

        let fnFormats = function (oGrid) {
            let s = oGrid.getFormatString();
            return s.indexOf("<Formats") == 0 ? s : "<Formats>" + s + "</Formats>";
        };

        let oExport = new ExcelExportObject(sStamp + "_export", oForm);
        let oXeni = nexacro.getEnvironment().services["xeni"];
        if (!oXeni) {
            this.on_fire_onerror("XENI 리소스가 없습니다. Resources에서 XENI 연결을 추가하세요.");
            return;
        }
        oExport.set_exporturl(String(oXeni.url));
        oExport.set_exporttype(nexacro.ExportTypes.EXCEL2007);
        oExport.set_exportfilename(fnSheetName(this._p_exportfilename || "Report") + "_" + sFileDate);

        /* 시트 하나 채우기 */
        let fnAddSheet = function (sSheet, arrView, sKeyCol, sKey) {
            let nRow = 1;
            if (oAction._p_sheettitle) {
                let sTitle = String(oAction._p_sheettitle).replace(/\{sheet\}/g, sSheet).replace(/\{date\}/g, sDate);
                oExport.addExportItem(nexacro.ExportItemTypes.GRID, fnTitleGrid(sTitle), sSheet + "!A" + nRow);
                nRow += 1 + nGap;
            }
            for (let i = 0; i < arrView.length; i++) {
                let oSrc = fnGrid(arrView[i]);
                if (!oSrc || !oSrc.getBindDataset()) continue;
                let oSrcDs = oSrc.getBindDataset();
                let sFilter = "";
                if (sKeyCol && oSrcDs.getColumnInfo(sKeyCol)) {
                    sFilter = sKeyCol + "=='" + String(sKey).replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'";
                }
                let oGrid = fnTempGrid(fnFormats(oSrc), oSrcDs, sFilter);
                oExport.addExportItem(nexacro.ExportItemTypes.GRID, oGrid, sSheet + "!A" + nRow,
                    "allband", "allrecord", "nosuppress", "allstyle", "image", "", "width", "cellline");
                nRow += fnRowCount(oGrid) + nGap;
            }
        };

        let fnClear = function () {
            arrTemp.forEach(function (o) {
                oForm.removeChild(o.name);
                o.destroy();
            });
            arrTemp = [];
        };

        /* 1) main 시트 */
        let arrMain = fnViews(this._p_mainviews);
        if (arrMain.length > 0) {
            fnAddSheet(fnSheetName(this._p_mainsheet || "Sheet1"), arrMain, "", "");
        }

        /* 2) split 시트 : 체크된 행마다 */
        let oSplitDs = oForm[this._p_splitdataset];
        let arrSplit = fnViews(this._p_splitviews);
        if (oSplitDs && arrSplit.length > 0 && this._p_splitkey) {
            for (let r = 0; r < oSplitDs.getRowCountNF(); r++) {
                if (this._p_splitcheck && String(oSplitDs.getColumnNF(r, this._p_splitcheck)) != "1") continue;
                let sKey = oSplitDs.getColumnNF(r, this._p_splitkey);
                fnAddSheet(fnSheetName(sKey), arrSplit, this._p_splitkey, sKey);
            }
        }

        if (arrTemp.length == 0) {
            this.on_fire_onerror("no grid to export");
            return;
        }

        oExport.addEventHandler("onsuccess", function (obj, e) {
            fnClear();
            oAction.on_fire_onsuccess(e.url);
        }, this);
        oExport.addEventHandler("onerror", function (obj, e) {
            fnClear();
            oAction.on_fire_onerror(e.errormsg);
        }, this);
        oExport.exportData();
    };

    //===============================================================
    // nexacro.ExportExcelReport : Contents
    //===============================================================
    nexacro.ExportExcelReport.prototype._p_contents = "";
    nexacro.ExportExcelReport.prototype.set_contents = function (v)
    {
        if (this._p_contents != v)
        {
            this._p_contents = v;
            this._setContents(this._p_contents);
        }
    };

    Object.defineProperty(nexacro.ExportExcelReport.prototype, "contents", {
        get: new Function("return this._p_contents"),
        set: nexacro.ExportExcelReport.prototype["set_contents"],
        enumerable: true,
        configurable: true
    });

    nexacro.ExportExcelReport.prototype._setContents = function (v)
    {
        // This function is necessary to apply contents in the run environment.
        nexacro.Action.prototype._setContents.call(this, v);

        // TODO : enter your code here.
    };

    //===============================================================
    // nexacro.ExportExcelReport : Declared Properties
    //===============================================================
    nexacro.ExportExcelReport.prototype._p_exportfilename = "Report";
    nexacro.ExportExcelReport.prototype.set_exportfilename = function (v)
    {
        if (this._p_exportfilename != v)
        {
            this._p_exportfilename = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_sheettitle = "";
    nexacro.ExportExcelReport.prototype.set_sheettitle = function (v)
    {
        if (this._p_sheettitle != v)
        {
            this._p_sheettitle = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_rowgap = 1;
    nexacro.ExportExcelReport.prototype.set_rowgap = function (v)
    {
        if (this._p_rowgap != v)
        {
            this._p_rowgap = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_mainsheet = "요약";
    nexacro.ExportExcelReport.prototype.set_mainsheet = function (v)
    {
        if (this._p_mainsheet != v)
        {
            this._p_mainsheet = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_mainviews = "";
    nexacro.ExportExcelReport.prototype.set_mainviews = function (v)
    {
        if (this._p_mainviews != v)
        {
            this._p_mainviews = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_splitdataset = "";
    nexacro.ExportExcelReport.prototype.set_splitdataset = function (v)
    {
        if (this._p_splitdataset != v)
        {
            this._p_splitdataset = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_splitcheck = "";
    nexacro.ExportExcelReport.prototype.set_splitcheck = function (v)
    {
        if (this._p_splitcheck != v)
        {
            this._p_splitcheck = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_splitkey = "";
    nexacro.ExportExcelReport.prototype.set_splitkey = function (v)
    {
        if (this._p_splitkey != v)
        {
            this._p_splitkey = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._p_splitviews = "";
    nexacro.ExportExcelReport.prototype.set_splitviews = function (v)
    {
        if (this._p_splitviews != v)
        {
            this._p_splitviews = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ExportExcelReport.prototype._properties = [{name: "exportfilename"}, {name: "sheettitle"}, {name: "rowgap"}, {name: "mainsheet"}, {name: "mainviews"}, {name: "splitdataset"}, {name: "splitcheck"}, {name: "splitkey"}, {name: "splitviews"}];
    nexacro._defineProperties(nexacro.ExportExcelReport.prototype, nexacro.ExportExcelReport.prototype._properties);

}