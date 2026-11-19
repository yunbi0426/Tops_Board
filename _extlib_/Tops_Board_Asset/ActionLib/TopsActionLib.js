/**
 * Tops_Board_Asset 공통 Action 함수
 * - nexacro.Action.prototype 에 붙여 모든 Action 에서 this.xxx() 로 사용
 * - BasePack(gfn*) 과 이름이 겹치지 않도록 tops 접두어 사용
 */
var pTopsAction = nexacro.Action.prototype;

/**
 * 현재 프로젝트명 (BasePack LibCommon 과 같은 규칙)
 * nexacro.NexaLAP._projectNo 우선, 없으면 Application.projectName
 */
pTopsAction.topsGetProjectName = function ()
{
    var sProject = nexacro.getApplication().projectName;
    if (nexacro.NexaLAP && nexacro.NexaLAP._projectNo) {
        sProject = nexacro.NexaLAP._projectNo;
    }
    return sProject;
};

/**
 * MultiColumnID 값 파싱
 * "ds.colA,ds.colB" → { ds: "ds", cols: ["colA","colB"] }
 * 비어 있거나, 형식이 틀리거나, 다른 Dataset이 섞이면 null
 */
pTopsAction.topsParseColumns = function (sValue)
{
    var arrItem = String(sValue || "").split(",");
    var sDs = "";
    var arrCol = [];

    for (var i = 0; i < arrItem.length; i++) {
        var sItem = arrItem[i].trim();
        if (sItem == "") continue;

        var nPos = sItem.lastIndexOf(".");
        if (nPos <= 0) return null;

        var sItemDs  = sItem.substring(0, nPos);
        var sItemCol = sItem.substring(nPos + 1);

        if (sDs == "") sDs = sItemDs;
        else if (sDs != sItemDs) return null;

        arrCol.push(sItemCol);
    }
    return arrCol.length > 0 ? { ds: sDs, cols: arrCol } : null;
};