//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.SetRowPosition
// Group : Action
//==============================================================================
if (!nexacro.SetRowPosition)
{
    nexacro.SetRowPosition = function (id, parent)
    {
        nexacro.Action.call(this, id, parent);
    };

    nexacro.SetRowPosition.prototype = nexacro._createPrototype(nexacro.Action, nexacro.SetRowPosition);
    nexacro.SetRowPosition.prototype._type_name = "SetRowPosition";

    //===============================================================
    // nexacro.SetRowPosition : Method
    //===============================================================
    nexacro.SetRowPosition.prototype.run = function ()
    {
        let oForm = this._p_parent ? this._p_parent : this.parent;
        let ds = oForm[this._p_targetdataset];
        if (!ds) { this.on_fire_onerror("dataset not found"); return; }
        if (ds.rowcount == 0) { this.on_fire_onsuccess(-1); return; }

        let nRow = (this._p_position == "last") ? ds.rowcount - 1 : 0;
        ds.set_rowposition(nRow);
        this.on_fire_onsuccess(nRow);
    };

    //===============================================================
    // nexacro.SetRowPosition : Contents
    //===============================================================
    nexacro.SetRowPosition.prototype._p_contents = "";
    nexacro.SetRowPosition.prototype.set_contents = function (v)
    {
        if (this._p_contents != v)
        {
            this._p_contents = v;
            this._setContents(this._p_contents);
        }
    };

    Object.defineProperty(nexacro.SetRowPosition.prototype, "contents", {
        get: new Function("return this._p_contents"),
        set: nexacro.SetRowPosition.prototype["set_contents"],
        enumerable: true,
        configurable: true
    });

    nexacro.SetRowPosition.prototype._setContents = function (v)
    {
        // This function is necessary to apply contents in the run environment.
        nexacro.Action.prototype._setContents.call(this, v);

        // TODO : enter your code here.
    };

    //===============================================================
    // nexacro.SetRowPosition : Declared Properties
    //===============================================================
    nexacro.SetRowPosition.prototype._p_targetdataset = "";
    nexacro.SetRowPosition.prototype.set_targetdataset = function (v)
    {
        if (this._p_targetdataset != v)
        {
            this._p_targetdataset = v;
            // TODO : enter your code here.
        }
    };

    nexacro.SetRowPosition.prototype._p_position = "";
    nexacro.SetRowPosition.prototype.set_position = function (v)
    {
        if (this._p_position != v)
        {
            this._p_position = v;
            // TODO : enter your code here.
        }
    };

    nexacro.SetRowPosition.prototype._properties = [{name: "targetdataset"}, {name: "position"}];
    nexacro._defineProperties(nexacro.SetRowPosition.prototype, nexacro.SetRowPosition.prototype._properties);

}