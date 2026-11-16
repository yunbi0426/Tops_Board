//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.OpenWorkForm
// Group : Action
//==============================================================================
if (!nexacro.OpenWorkForm)
{
    nexacro.OpenWorkForm = function (id, parent)
    {
        nexacro.Action.call(this, id, parent);
    };

    nexacro.OpenWorkForm.prototype = nexacro._createPrototype(nexacro.Action, nexacro.OpenWorkForm);
    nexacro.OpenWorkForm.prototype._type_name = "OpenWorkForm";

    //===============================================================
    // nexacro.OpenWorkForm : Method
    //===============================================================
    nexacro.OpenWorkForm.prototype.run = function ()
    {
        let bSucc = true;
        let oWorkDiv = this._findWorkDiv();                   // [변경] WorkFrame 하드코딩 → 탐색

        if (oWorkDiv && !this.gfnIsNull(this._p_formUrl)) {
            oWorkDiv.set_url(this._p_formUrl);
        } else {
            bSucc = false;
        }

        if (bSucc == true) {
            this.on_fire_onsuccess("success");
        } else {
            this.on_fire_onerror("error");
        }
    };

    //===============================================================
    // nexacro.OpenWorkForm : Contents
    //===============================================================
    nexacro.OpenWorkForm.prototype._p_contents = "";
    nexacro.OpenWorkForm.prototype.set_contents = function (v)
    {
        if (this._p_contents != v)
        {
            this._p_contents = v;
            this._setContents(this._p_contents);
        }
    };

    Object.defineProperty(nexacro.OpenWorkForm.prototype, "contents", {
        get: new Function("return this._p_contents"),
        set: nexacro.OpenWorkForm.prototype["set_contents"],
        enumerable: true,
        configurable: true
    });

    nexacro.OpenWorkForm.prototype._setContents = function (v)
    {
        // This function is necessary to apply contents in the run environment.
        nexacro.Action.prototype._setContents.call(this, v);

        // TODO : enter your code here.
    };

    //===============================================================
    // nexacro.OpenWorkForm : Declared Properties
    //===============================================================
    nexacro.OpenWorkForm.prototype._p_formUrl = "";
    nexacro.OpenWorkForm.prototype.set_formUrl = function (v)
    {
        if (this._p_formUrl != v)
        {
            this._p_formUrl = v;
            // TODO : enter your code here.
        }
    };

    nexacro.OpenWorkForm.prototype._properties = [{name: "formUrl"}];
    nexacro._defineProperties(nexacro.OpenWorkForm.prototype, nexacro.OpenWorkForm.prototype._properties);

    nexacro.OpenWorkForm.prototype._findWorkDiv = function () {
        let find = function (f) {
            if (!f) {
                return null;
            }

            if (f.form && f.form.div_work) {    // ChildFrame
                return f.form.div_work;
            }

            if (f.frames) {                                                // FrameSet
                for (let i = 0; i < f.frames.length; i++) {
                    let r = find(f.frames[i]);
                    if (r) return r;
                }
            }

            return f.frame ? find(f.frame) : null;                         // MainFrame
        };

        return find(nexacro.getApplication().mainframe);
    };

}