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