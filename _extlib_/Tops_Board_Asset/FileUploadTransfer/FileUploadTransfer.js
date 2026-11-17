//==============================================================================
// Define the Action.
//==============================================================================
//==============================================================================
// Object : nexacro.FileUploadTransfer
// Group : Action
//==============================================================================
if (!nexacro.FileUploadTransfer)
{
    nexacro.FileUploadTransfer = function (id, parent)
    {
        nexacro.Action.call(this, id, parent);
    };

    nexacro.FileUploadTransfer.prototype = nexacro._createPrototype(nexacro.Action, nexacro.FileUploadTransfer);
    nexacro.FileUploadTransfer.prototype._type_name = "FileUploadTransfer";

    //===============================================================
    // nexacro.FileUploadTransfer : Method
    //===============================================================
    nexacro.FileUploadTransfer.prototype.run = function ()
    {
        let oView = this.getTargetView();
        let oViewForm = oView ? oView.form : null;
        let aFiles = oViewForm ? oViewForm.oUploadFileList : null;

        // 선택된 파일이 없으면 여기서 끝
        if (!aFiles || aFiles.length < 1) {
            this.on_fire_onerror();
            return;
        }

        let oUploader = this._getUploader();
        oUploader.clearFileList();
        oUploader.clearPostDataList();

        for (let i = 0; i < aFiles.length; i++) {
            oUploader.addFile("file" + i, aFiles[i]);
        }

        // @ts-ignore : TopsActionLib.js(runtime.libraryScripts)에 정의
        oUploader.setPostData("project", this.topsGetProjectName());
        // Excel Import 노드는 tempFiles 에서만 파일을 읽으므로 storagetype 을 지정하지 않는다

        oUploader.upload(this._UPLOAD_URL);
    };

    //===============================================================
    // nexacro.FileUploadTransfer : Contents
    //===============================================================
    nexacro.FileUploadTransfer.prototype._p_contents = "";
    nexacro.FileUploadTransfer.prototype.set_contents = function (v)
    {
        if (this._p_contents != v)
        {
            this._p_contents = v;
            this._setContents(this._p_contents);
        }
    };

    Object.defineProperty(nexacro.FileUploadTransfer.prototype, "contents", {
        get: new Function("return this._p_contents"),
        set: nexacro.FileUploadTransfer.prototype["set_contents"],
        enumerable: true,
        configurable: true
    });

    nexacro.FileUploadTransfer.prototype._setContents = function (v)
    {
        // This function is necessary to apply contents in the run environment.
        nexacro.Action.prototype._setContents.call(this, v);

        // TODO : enter your code here.
    };

    //===============================================================
    // nexacro.FileUploadTransfer : Declared Properties
    //===============================================================
    nexacro.FileUploadTransfer.prototype._p_resultdataset = "";
    nexacro.FileUploadTransfer.prototype.set_resultdataset = function (v)
    {
        if (this._p_resultdataset != v)
        {
            this._p_resultdataset = v;
            // TODO : enter your code here.
        }
    };

    nexacro.FileUploadTransfer.prototype._properties = [{name: "resultdataset"}];
    nexacro._defineProperties(nexacro.FileUploadTransfer.prototype, nexacro.FileUploadTransfer.prototype._properties);

    // NexaLAP Server 고정 업로드 경로 (FileUpDownloadController /file/upload)
    nexacro.FileUploadTransfer.prototype._UPLOAD_URL = "NexaLAPServer::file/upload";

    // 전송 객체는 Action이 속한 폼에 한 번만 만든다
    nexacro.FileUploadTransfer.prototype._getUploader = function ()
    {
        let oForm = this._p_parent ? this._p_parent : this.parent;
        let sId = "_" + this._p_name + "_uploader";

        if (!oForm[sId]) {
            let oUploader = new nexacro.FileUpTransfer(sId, oForm);
            oForm.addChild(sId, oUploader);
            oUploader.addEventHandler("onsuccess", this._onUploadSuccess, this);
            oUploader.addEventHandler("onerror", this._onUploadError, this);
        }
        return oForm[sId];
    };

    // 서버 응답 Dataset(_FileMetaInfo)을 resultdataset 으로 복사
    nexacro.FileUploadTransfer.prototype._onUploadSuccess = function (obj, e)
    {
        let oForm = this._p_parent ? this._p_parent : this.parent;
        let oResult = this._p_resultdataset ? oForm[this._p_resultdataset] : null;

        if (oResult && e.datasets && e.datasets.length > 0) {
            oResult.copyData(e.datasets[0], false);
        }
        this.on_fire_onsuccess();
    };

    nexacro.FileUploadTransfer.prototype._onUploadError = function (obj, e)
    {
        this.on_fire_onerror();
    };

}