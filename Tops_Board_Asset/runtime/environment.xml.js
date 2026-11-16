if (nexacro.Environment)
{
    var env = nexacro._environment = new nexacro.Environment();

    env.on_init = function ()
    {
        this.set_datatyperule("2.0");
        this.set_themeid("theme::blue");
    };

    env.on_initEvent = function ()
    {
        // add event handler

    };

    env.loadTypeDefinition = function ()
    {
        nexacro._setTypeDefinitionURL("typedefinition.xml");
        nexacro._addService("theme", "file", "./_resource_/_theme_/", "session", null, "", "0", "");
        nexacro._addService("initvalue", "file", "./_resource_/_initvalue_/", "session", null, "", "0", "");
        nexacro._addService("xcssrc", "file", "./_resource_/_xcss_/", "session", null, "", "0", "");
        nexacro._addService("imagerc", "file", "./_resource_/_images_/", "session", null, "", "0", "");
        nexacro._addService("font", "file", "./_resource_/_font_/", "session", null, "", "0", "");
        nexacro._addService("nexaFrame", "file", "./_resource_/_frame_/", "session", null, "", "0", "0");
        nexacro._addService("stringrc", "file", "./_resource_/_stringrc_/", "session", null, "", "0", "");
        nexacro._addService("extlib", "file", "./_extlib_/", "session", null, "", "0", "");

    	nexacro._component_uri = (nexacro._arg_compurl ? nexacro._arg_compurl : "./nexacrolib/component/");
    	nexacro._theme_uri = "./_resource_/_theme_/";

    	// load components
        var registerclass = [
        		{"id":"Button", "classname":"nexacro.Button", "type":"JavaScript"},
        		{"id":"Combo", "classname":"nexacro.Combo", "type":"JavaScript"},
        		{"id":"Edit", "classname":"nexacro.Edit", "type":"JavaScript"},
        		{"id":"MaskEdit", "classname":"nexacro.MaskEdit", "type":"JavaScript"},
        		{"id":"TextArea", "classname":"nexacro.TextArea", "type":"JavaScript"},
        		{"id":"Static", "classname":"nexacro.Static", "type":"JavaScript"},
        		{"id":"Div", "classname":"nexacro.Div", "type":"JavaScript"},
        		{"id":"PopupDiv", "classname":"nexacro.PopupDiv", "type":"JavaScript"},
        		{"id":"Radio", "classname":"nexacro.Radio", "type":"JavaScript"},
        		{"id":"CheckBox", "classname":"nexacro.CheckBox", "type":"JavaScript"},
        		{"id":"ListBox", "classname":"nexacro.ListBox", "type":"JavaScript"},
        		{"id":"Grid", "classname":"nexacro.Grid", "type":"JavaScript"},
        		{"id":"Spin", "classname":"nexacro.Spin", "type":"JavaScript"},
        		{"id":"Menu", "classname":"nexacro.Menu", "type":"JavaScript"},
        		{"id":"PopupMenu", "classname":"nexacro.PopupMenu", "type":"JavaScript"},
        		{"id":"Tab", "classname":"nexacro.Tab", "type":"JavaScript"},
        		{"id":"GroupBox", "classname":"nexacro.GroupBox", "type":"JavaScript"},
        		{"id":"Calendar", "classname":"nexacro.Calendar", "type":"JavaScript"},
        		{"id":"ImageViewer", "classname":"nexacro.ImageViewer", "type":"JavaScript"},
        		{"id":"ProgressBar", "classname":"nexacro.ProgressBar", "type":"JavaScript"},
        		{"id":"Plugin", "classname":"nexacro.Plugin", "type":"JavaScript"},
        		{"id":"Dataset", "classname":"nexacro.NormalDataset", "type":"JavaScript"},
        		{"id":"ListView", "classname":"nexacro.ListView", "type":"JavaScript"},
        		{"id":"DataObject", "classname":"nexacro.DataObject", "type":"JavaScript"},
        		{"id":"CheckBoxSet", "classname":"nexacro.CheckBoxSet", "type":"JavaScript"},
        		{"id":"WebBrowser", "classname":"nexacro.WebBrowser", "type":"JavaScript"},
        		{"id":"MultiCombo", "classname":"nexacro.MultiCombo", "type":"JavaScript"},
        		{"id":"Panel", "classname":"nexacro.Panel", "type":"JavaScript"},
        		{"id":"TextField", "classname":"nexacro.TextField", "type":"JavaScript"},
        		{"id":"MultiLineTextField", "classname":"nexacro.MultiLineTextField", "type":"JavaScript"},
        		{"id":"DateField", "classname":"nexacro.DateField", "type":"JavaScript"},
        		{"id":"DateRangePicker", "classname":"nexacro.DateRangePicker", "type":"JavaScript"},
        		{"id":"PopupDateRangePicker", "classname":"nexacro.PopupDateRangePicker", "type":"JavaScript"},
        		{"id":"View", "classname":"nexacro.View", "type":"JavaScript"},
        		{"id":"Graphics", "classname":"nexacro.Graphics", "type":"JavaScript"},
        		{"id":"FileDialog", "classname":"nexacro.FileDialog", "type":"JavaScript"},
        		{"id":"FileDownload", "classname":"nexacro.FileDownload", "type":"JavaScript"},
        		{"id":"FileDownTransfer", "classname":"nexacro.FileDownTransfer", "type":"JavaScript"},
        		{"id":"FileUpload", "classname":"nexacro.FileUpload", "type":"JavaScript"},
        		{"id":"FileUpTransfer", "classname":"nexacro.FileUpTransfer", "type":"JavaScript"},
        		{"id":"Sketch", "classname":"nexacro.Sketch", "type":"JavaScript"},
        		{"id":"WebView", "classname":"nexacro.WebView", "type":"JavaScript"},
        		{"id":"GoogleMap", "classname":"nexacro.GoogleMap", "type":"JavaScript"},
        		{"id":"ExcelExportObject", "classname":"nexacro.ExcelExportObject", "type":"JavaScript"},
        		{"id":"ExcelImportObject", "classname":"nexacro.ExcelImportObject", "type":"JavaScript"},
        		{"id":"VideoPlayer", "classname":"nexacro.VideoPlayer", "type":"JavaScript"},
        		{"id":"VirtualFile", "classname":"nexacro.VirtualFile", "type":"JavaScript"},
        		{"id":"Acceleration", "classname":"nexacro.Acceleration", "type":"JavaScript"},
        		{"id":"AudioPlayer", "classname":"nexacro.AudioPlayer", "type":"JavaScript"},
        		{"id":"AudioRecorder", "classname":"nexacro.AudioRecorder", "type":"JavaScript"},
        		{"id":"Camera", "classname":"nexacro.Camera", "type":"JavaScript"},
        		{"id":"Contact", "classname":"nexacro.Contact", "type":"JavaScript"},
        		{"id":"ContactAddress", "classname":"nexacro.ContactAddress", "type":"JavaScript"},
        		{"id":"ContactField", "classname":"nexacro.ContactField", "type":"JavaScript"},
        		{"id":"ContactOrganization", "classname":"nexacro.ContactOrganization", "type":"JavaScript"},
        		{"id":"ContactPhoto", "classname":"nexacro.ContactPhoto", "type":"JavaScript"},
        		{"id":"ContactSet", "classname":"nexacro.ContactSet", "type":"JavaScript"},
        		{"id":"ExternalAPI", "classname":"nexacro.ExternalAPI", "type":"JavaScript"},
        		{"id":"NexaGeolocation", "classname":"nexacro.Geolocation", "type":"JavaScript"},
        		{"id":"ImagePicker", "classname":"nexacro.ImagePicker", "type":"JavaScript"},
        		{"id":"LiteDBConnection", "classname":"nexacro.LiteDBConnection", "type":"JavaScript"},
        		{"id":"LiteDBStatement", "classname":"nexacro.LiteDBStatement", "type":"JavaScript"},
        		{"id":"Network", "classname":"nexacro.Network", "type":"JavaScript"},
        		{"id":"Sms", "classname":"nexacro.Sms", "type":"JavaScript"},
        		{"id":"Phone", "classname":"nexacro.Phone", "type":"JavaScript"},
        		{"id":"Vibrator", "classname":"nexacro.Vibrator", "type":"JavaScript"},
        		{"id":"TCPClientSocket", "classname":"nexacro.TCPClientSocket", "type":"JavaScript"},
        		{"id":"BluetoothLE", "classname":"nexacro.BluetoothLE", "type":"JavaScript"},
        		{"id":"SpinField", "classname":"nexacro.SpinField", "type":"JavaScript"},
        		{"id":"SelectField", "classname":"nexacro.SelectField", "type":"JavaScript"}
        ];
    	nexacro._addClasses(registerclass);
    };

    env.on_loadVariables = function ()
    {
        // Variables


        // Cookies


        // HTTP Header

    };

	env.on_loadDeviceAdaptors = function ()
	{
        // load device adatpor

	};
	
    // StringResource Information

	
    // User Script

					
    env = null;

    nexacro._getExtUserCssScreenType = nexacro._getCurrentScreenType;
}
