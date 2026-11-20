//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.InputFilter
// Group : Action
//==============================================================================
if (!nexacro.InputFilter)
{
    nexacro.InputFilter = function (id, parent)
    {
        nexacro.Action.call(this, id, parent);
    };

    nexacro.InputFilter.prototype = nexacro._createPrototype(nexacro.Action, nexacro.InputFilter);
    nexacro.InputFilter.prototype._type_name = "InputFilter";

    //===============================================================
    // nexacro.InputFilter : Method
    //===============================================================
    nexacro.InputFilter.prototype.run = function ()
    {
        let oForm  = this._p_parent ? this._p_parent : this.parent;
        let oView  = this.getTargetView();
        let oScope = oView ? oView.form : oForm;            // 입력칸을 찾을 범위
        let oCols  = this.topsParseColumns(this._p_searchcolumns);
        if (!oCols) { 
            this.on_fire_onerror("invalid searchcolumns");
            return;
        }

        let oDs   = oForm[oCols.ds];
        let oEdit = oScope[this._p_sourcecomp];
        if (!oDs || !oEdit) { 
            this.on_fire_onerror("dataset or component not found");
            return;
        }

        if (nexacro._toBoolean(this._p_clearinput)) {
            oEdit.set_value("");
        }

        let sKey = String(oEdit.value == null ? "" : oEdit.value).trim().toLowerCase();
        if (sKey == "") {
            oDs.filter("");
            this.on_fire_onsuccess("cleared");
            return;
        }
        sKey = sKey.replace(/\\/g, "\\\\").replace(/'/g, "\\'");

        let arrCond = oCols.cols.map(function (c) {
            return "String(" + c + " == null ? '' : " + c + ").toLowerCase().indexOf('" + sKey + "') > -1";
        });

        oDs.filter(arrCond.join(" || "));
        this.on_fire_onsuccess("filtered");
    };

    //===============================================================
    // nexacro.InputFilter : Contents
    //===============================================================
    nexacro.InputFilter.prototype._p_contents = "";
    nexacro.InputFilter.prototype.set_contents = function (v)
    {
        if (this._p_contents != v)
        {
            this._p_contents = v;
            this._setContents(this._p_contents);
        }
    };

    Object.defineProperty(nexacro.InputFilter.prototype, "contents", {
        get: new Function("return this._p_contents"),
        set: nexacro.InputFilter.prototype["set_contents"],
        enumerable: true,
        configurable: true
    });

    nexacro.InputFilter.prototype._setContents = function (v)
    {
        // This function is necessary to apply contents in the run environment.
        nexacro.Action.prototype._setContents.call(this, v);

        // TODO : enter your code here.
    };

    //===============================================================
    // nexacro.InputFilter : Declared Properties
    //===============================================================
    nexacro.InputFilter.prototype._p_sourcecomp = "";
    nexacro.InputFilter.prototype.set_sourcecomp = function (v)
    {
        if (this._p_sourcecomp != v)
        {
            this._p_sourcecomp = v;
            // TODO : enter your code here.
        }
    };

    nexacro.InputFilter.prototype._p_searchcolumns = "";
    nexacro.InputFilter.prototype.set_searchcolumns = function (v)
    {
        if (this._p_searchcolumns != v)
        {
            this._p_searchcolumns = v;
            // TODO : enter your code here.
        }
    };

    nexacro.InputFilter.prototype._p_clearinput = false;
    nexacro.InputFilter.prototype.set_clearinput = function (v)
    {
        if (this._p_clearinput != v)
        {
            this._p_clearinput = v;
            // TODO : enter your code here.
        }
    };

    nexacro.InputFilter.prototype._properties = [{name: "sourcecomp"}, {name: "searchcolumns"}, {name: "clearinput"}];
    nexacro._defineProperties(nexacro.InputFilter.prototype, nexacro.InputFilter.prototype._properties);

}