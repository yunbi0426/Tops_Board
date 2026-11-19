//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.ShuttleMove
// Group : Action
//==============================================================================
if (!nexacro.ShuttleMove)
{
    nexacro.ShuttleMove = function (id, parent)
    {
        nexacro.Action.call(this, id, parent);
    };

    nexacro.ShuttleMove.prototype = nexacro._createPrototype(nexacro.Action, nexacro.ShuttleMove);
    nexacro.ShuttleMove.prototype._type_name = "ShuttleMove";

    //===============================================================
    // nexacro.ShuttleMove : Method
    //===============================================================
    nexacro.ShuttleMove.prototype.run = function ()
    {
        let oForm   = this._p_parent ? this._p_parent : this.parent;
        let oSrc    = this.topsParseColumns(this._p_source);
        let oTgt    = this.topsParseColumns(this._p_target);
        let oMst    = this.topsParseColumns(this._p_master);
        let oMstTgt = this.topsParseColumns(this._p_mastertarget);
        let bAll    = nexacro._toBoolean(this._p_moveall);

        if (!oSrc || !oTgt || oSrc.cols.length != oTgt.cols.length) {
            this.on_fire_onerror("invalid source/target");
            return;
        }

        if (!!oMst != !!oMstTgt || (oMst && oMst.cols.length != oMstTgt.cols.length)) {
            this.on_fire_onerror("invalid master/mastertarget");
            return;
        }

        let dsSrc = oForm[oSrc.ds];
        let dsTgt = oForm[oTgt.ds];
        if (!dsSrc || !dsTgt) { 
            this.on_fire_onerror("dataset not found");
            return;
        }

        // 옮길 행 목록: 전체(보이는 행 전부) 또는 선택 1행
        let arrRow = [];
        if (bAll) {
            for (let r = 0; r < dsSrc.rowcount; r++) arrRow.push(r);
            if (arrRow.length == 0) { 
                this.on_fire_onsuccess("nothing");
                return;
            }  // 옮길 게 없어도 성공
        } else {
            if (dsSrc.rowposition < 0) { 
                this.on_fire_onerror("no selected row");
                return;
            }
            arrRow.push(dsSrc.rowposition);
        }

        // master 값 (◀에서는 비어 있어서 건너뜀)
        let arrMstVal = [];
        if (oMst) {
            let dsMst = oForm[oMst.ds];
            let nMstRow = dsMst ? dsMst.rowposition : -1;
            for (let i = 0; i < oMst.cols.length; i++) {
                let v = nMstRow < 0 ? null : dsMst.getColumn(nMstRow, oMst.cols[i]);
                if (v == null || v === "") { 
                    this.on_fire_onerror("no master value");
                    return;
                }
                arrMstVal.push(v);
            }
        }

        // 복사
        let nNew = -1;
        for (let k = 0; k < arrRow.length; k++) {
            nNew = dsTgt.addRow();

            for (let i = 0; i < oSrc.cols.length; i++) {
                dsTgt.setColumn(nNew, oTgt.cols[i], dsSrc.getColumn(arrRow[k], oSrc.cols[i]));
            }
    
            for (let i = 0; i < arrMstVal.length; i++) {
                dsTgt.setColumn(nNew, oMstTgt.cols[i], arrMstVal[i]);
            }
        }

        // 삭제는 뒤에서부터 (앞에서 지우면 인덱스가 밀림)
        for (let k = arrRow.length - 1; k >= 0; k--) {
            dsSrc.deleteRow(arrRow[k]);
        }

        dsTgt.set_rowposition(nNew);
        this.on_fire_onsuccess("success");
    };

    //===============================================================
    // nexacro.ShuttleMove : Contents
    //===============================================================
    nexacro.ShuttleMove.prototype._p_contents = "";
    nexacro.ShuttleMove.prototype.set_contents = function (v)
    {
        if (this._p_contents != v)
        {
            this._p_contents = v;
            this._setContents(this._p_contents);
        }
    };

    Object.defineProperty(nexacro.ShuttleMove.prototype, "contents", {
        get: new Function("return this._p_contents"),
        set: nexacro.ShuttleMove.prototype["set_contents"],
        enumerable: true,
        configurable: true
    });

    nexacro.ShuttleMove.prototype._setContents = function (v)
    {
        // This function is necessary to apply contents in the run environment.
        nexacro.Action.prototype._setContents.call(this, v);

        // TODO : enter your code here.
    };

    //===============================================================
    // nexacro.ShuttleMove : Declared Properties
    //===============================================================
    nexacro.ShuttleMove.prototype._p_source = "";
    nexacro.ShuttleMove.prototype.set_source = function (v)
    {
        if (this._p_source != v)
        {
            this._p_source = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ShuttleMove.prototype._p_target = "";
    nexacro.ShuttleMove.prototype.set_target = function (v)
    {
        if (this._p_target != v)
        {
            this._p_target = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ShuttleMove.prototype._p_master = "";
    nexacro.ShuttleMove.prototype.set_master = function (v)
    {
        if (this._p_master != v)
        {
            this._p_master = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ShuttleMove.prototype._p_mastertarget = "";
    nexacro.ShuttleMove.prototype.set_mastertarget = function (v)
    {
        if (this._p_mastertarget != v)
        {
            this._p_mastertarget = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ShuttleMove.prototype._p_moveall = false;
    nexacro.ShuttleMove.prototype.set_moveall = function (v)
    {
        if (this._p_moveall != v)
        {
            this._p_moveall = v;
            // TODO : enter your code here.
        }
    };

    nexacro.ShuttleMove.prototype._properties = [{name: "source"}, {name: "target"}, {name: "master"}, {name: "mastertarget"}, {name: "moveall"}];
    nexacro._defineProperties(nexacro.ShuttleMove.prototype, nexacro.ShuttleMove.prototype._properties);

}