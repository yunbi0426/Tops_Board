//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.MasterRowFilter
// Group : Action
//==============================================================================
if (!nexacro.MasterRowFilter)
{
    nexacro.MasterRowFilter = function (id, parent)
    {
        nexacro.Action.call(this, id, parent);
    };

    nexacro.MasterRowFilter.prototype = nexacro._createPrototype(nexacro.Action, nexacro.MasterRowFilter);
    nexacro.MasterRowFilter.prototype._type_name = "MasterRowFilter";

    //===============================================================
    // nexacro.MasterRowFilter : Method
    //===============================================================
    nexacro.MasterRowFilter.prototype.run = function ()
    {
        let oForm   = this._p_parent ? this._p_parent : this.parent;
        let oMaster = this.topsParseColumns(this._p_master);
        let oTarget = this.topsParseColumns(this._p_target);

        if (!oMaster || !oTarget || oMaster.cols.length != oTarget.cols.length) {
            this.on_fire_onerror("invalid master/target");
            return;
        }

        let dsMaster = oForm[oMaster.ds];
        let dsTarget = oForm[oTarget.ds];
        if (!dsMaster || !dsTarget) {
            this.on_fire_onerror("dataset not found");
            return;
        }

        let nRow = dsMaster.rowposition;
        let arrCond = [];

        for (let i = 0; i < oMaster.cols.length; i++) {
            let vValue = nRow < 0 ? null : dsMaster.getColumn(nRow, oMaster.cols[i]);
            if (vValue == null || vValue === "") {             // 선택 없음 / 새 행 → 대상 비움
                dsTarget.filter("false");
                this.on_fire_onsuccess("empty");
                return;
            }
            arrCond.push(oTarget.cols[i] + "=='" + String(vValue).replace(/'/g, "\\'") + "'");
        }

        dsTarget.filter(arrCond.join(" && "));
        this.on_fire_onsuccess("success");
    };

    //===============================================================
    // nexacro.MasterRowFilter : Contents
    //===============================================================
    nexacro.MasterRowFilter.prototype._p_contents = "";
    nexacro.MasterRowFilter.prototype.set_contents = function (v)
    {
        if (this._p_contents != v)
        {
            this._p_contents = v;
            this._setContents(this._p_contents);
        }
    };

    Object.defineProperty(nexacro.MasterRowFilter.prototype, "contents", {
        get: new Function("return this._p_contents"),
        set: nexacro.MasterRowFilter.prototype["set_contents"],
        enumerable: true,
        configurable: true
    });

    nexacro.MasterRowFilter.prototype._setContents = function (v)
    {
        // This function is necessary to apply contents in the run environment.
        nexacro.Action.prototype._setContents.call(this, v);

        // TODO : enter your code here.
    };

    //===============================================================
    // nexacro.MasterRowFilter : Declared Properties
    //===============================================================
    nexacro.MasterRowFilter.prototype._p_master = "";
    nexacro.MasterRowFilter.prototype.set_master = function (v)
    {
        if (this._p_master != v)
        {
            this._p_master = v;
            // TODO : enter your code here.
        }
    };

    nexacro.MasterRowFilter.prototype._p_target = "";
    nexacro.MasterRowFilter.prototype.set_target = function (v)
    {
        if (this._p_target != v)
        {
            this._p_target = v;
            // TODO : enter your code here.
        }
    };

    nexacro.MasterRowFilter.prototype._properties = [{name: "master"}, {name: "target"}];
    nexacro._defineProperties(nexacro.MasterRowFilter.prototype, nexacro.MasterRowFilter.prototype._properties);

}