/**
 * PaginationView 런타임 라이브러리
 * - PaginationView.viewtemplate 으로 생성한 View 가 실행 중에 쓰는 함수 모음
 * - nexa-integration-builder.json 의 runtime.libraryScripts 로 앱 시작 때 로드
 * - 모든 함수는 첫 번째 인자로 View 의 form(oView)을 받는다 → 화면마다 상태가 섞이지 않음
 * - 설정값은 템플릿이 생성 시 View Script 에 넣어 둔 oView.fvPager 를 사용
 *
 *   fvPager = {
 *     roles    : { index, size, total, pages },   // 역할별 컬럼 id (pagerole)
 *     pageSize : 50,                               // 한 페이지 건수 기본값
 *     count    : 5,                                // 번호 버튼 수
 *     format   : "총 {total}건 · {page} / {pages} 페이지",
 *     align    : "right" | "left" | "center",
 *     size, gap, cssclass,                         // 버튼 크기/간격/클래스 (현재 페이지 = cssclass + "On")
 *     ids      : { info, div, prev, next, page, change, center }
 *   }
 */
var topsPagination = {};

/**
 * View onload : 데이터셋/버튼 이벤트 연결 + 처음 값(index=1, size) 세팅
 */
topsPagination.init = function (oView, objForm)
{
    var c = oView.fvPager;
    var oDs = oView.parent.getViewDataset();
    oView._ownerForm = objForm;

    if (!oView._bPagerInit) {
        if (oDs) {
            oDs.addEventHandler("onload", topsPagination._onDataLoad, oView);
        }

        var oDivForm = oView[c.ids.div].form;
        var arrId = [c.ids.prev, c.ids.next];
        for (var i = 1; i <= c.count; i++) {
            arrId.push(c.ids.page + i);
        }
        for (var k = 0; k < arrId.length; k++) {
            if (oDivForm[arrId[k]]) {
                oDivForm[arrId[k]].addEventHandler("onclick", topsPagination._onButtonClick, oView);
            }
        }
        oView._bPagerInit = true;
    }

    if (oDs) {
        if (oDs.rowcount == 0) {
            oDs.addRow();
        }
        if (c.roles.index && !(Number(oDs.getColumn(0, c.roles.index)) > 0)) {
            oDs.setColumn(0, c.roles.index, 1);
        }
        if (c.roles.size && !(Number(oDs.getColumn(0, c.roles.size)) > 0)) {
            oDs.setColumn(0, c.roles.size, c.pageSize);
        }
    }
    topsPagination.refresh(oView);
};

/**
 * 현재 페이지 정보 { index, size, total, pages, start }
 * - pages 컬럼이 없으면 total / size 로 계산
 * - start = 지금 보이는 번호 묶음의 첫 페이지
 */
topsPagination.getInfo = function (oView)
{
    var c = oView.fvPager;
    var oDs = oView.parent.getViewDataset();
    var fnNum = function (sCol) {
        if (!oDs || !sCol || oDs.rowcount == 0) return 0;
        var n = parseInt(String(oDs.getColumn(0, sCol)), 10);   // bigdecimal 도 문자열로 바꿔서 처리
        return isNaN(n) ? 0 : n;
    };

    var nSize  = fnNum(c.roles.size) || c.pageSize;
    var nIndex = fnNum(c.roles.index) || 1;
    var nTotal = fnNum(c.roles.total);
    var nPages = fnNum(c.roles.pages) || Math.ceil(nTotal / nSize);
    if (nPages < 1) nPages = 1;

    var nStart = Math.floor((nIndex - 1) / c.count) * c.count + 1;
    return { index: nIndex, size: nSize, total: nTotal, pages: nPages, start: nStart };
};

/**
 * 화면 갱신 : 건수 문구, 번호 버튼(보이기/글자/현재 페이지), 이전/다음 활성화, 버튼 묶음 폭
 */
topsPagination.refresh = function (oView)
{
    var c = oView.fvPager;
    var p = topsPagination.getInfo(oView);
    var oDivForm = oView[c.ids.div].form;

    // 건수 문구
    var oInfo = oView[c.ids.info];
    if (oInfo && c.format) {
        var nFrom = p.total > 0 ? (p.index - 1) * p.size + 1 : 0;
        var nTo   = Math.min(p.index * p.size, p.total);
        var sText = c.format
            .replace(/\{total\}/g, topsPagination._comma(p.total))
            .replace(/\{page\}/g,  topsPagination._comma(p.index))
            .replace(/\{pages\}/g, topsPagination._comma(p.pages))
            .replace(/\{from\}/g,  topsPagination._comma(nFrom))
            .replace(/\{to\}/g,    topsPagination._comma(nTo));
        oInfo.set_text(sText);
    }

    // 버튼 : 보이는 것만 왼쪽부터 차례로 배치 (없는 페이지 번호는 숨김)
    var nLeft = 0;
    var fnPlace = function (oBtn, bShow) {
        oBtn.set_visible(bShow);
        if (bShow) {
            oBtn.set_left(nLeft);
            nLeft += c.size + c.gap;
        }
    };

    var oPrev = oDivForm[c.ids.prev];
    fnPlace(oPrev, true);
    oPrev.set_enable(p.start > 1);

    for (var i = 1; i <= c.count; i++) {
        var oBtn  = oDivForm[c.ids.page + i];
        var nPage = p.start + i - 1;
        fnPlace(oBtn, nPage <= p.pages);
        oBtn.set_text(String(nPage));
        oBtn.set_cssclass(nPage == p.index ? c.cssclass + "On" : c.cssclass);
    }

    var oNext = oDivForm[c.ids.next];
    fnPlace(oNext, true);
    oNext.set_enable(p.start + c.count <= p.pages);

    // 버튼 묶음 폭 (가운데 정렬이면 기준선에서 폭의 절반만큼 왼쪽으로)
    var oDiv = oView[c.ids.div];
    var nWidth = nLeft - c.gap;
    oDiv.set_width(nWidth);
    if (c.align == "center") {
        oDiv.set_left(c.ids.center + ":-" + Math.round(nWidth / 2));
    }
};

/**
 * 페이지 이동 : index 를 바꾸고 숨김 버튼 click → Interaction 에 연결된 조회 실행
 */
topsPagination.move = function (oView, nPage)
{
    var c = oView.fvPager;
    var oDs = oView.parent.getViewDataset();
    if (oDs && c.roles.index) {
        if (oDs.rowcount == 0) {
            oDs.addRow();
        }
        oDs.setColumn(0, c.roles.index, nPage);
        if (c.roles.size && !(Number(oDs.getColumn(0, c.roles.size)) > 0)) {
            oDs.setColumn(0, c.roles.size, c.pageSize);
        }
    }
    topsPagination.refresh(oView);
    oView[c.ids.change].click();
};

/**
 * 새로 검색할 때 : 1페이지부터 다시 조회 (폼 RunScript 에서 View 의 fn_paging_reset() 으로 호출)
 */
topsPagination.reset = function (oView)
{
    topsPagination.move(oView, 1);
};

/* ------------------------------------------------------------------------------------------
 * 내부 함수 (이벤트 핸들러는 addEventHandler 의 scope 로 this = View form)
 * ---------------------------------------------------------------------------------------- */

/* 조회 결과 도착 */
topsPagination._onDataLoad = function (obj, e)
{
    topsPagination.refresh(this);
};

/* 버튼 클릭 : 이전 = 앞 묶음 마지막 페이지, 다음 = 다음 묶음 첫 페이지, 번호 = 그 페이지 */
topsPagination._onButtonClick = function (obj, e)
{
    var c = this.fvPager;
    var p = topsPagination.getInfo(this);
    var nPage;

    if (obj.name == c.ids.prev) {
        nPage = p.start - 1;
    } else if (obj.name == c.ids.next) {
        nPage = p.start + c.count;
    } else {
        nPage = parseInt(obj.text, 10);
    }

    if (isNaN(nPage) || nPage < 1 || nPage > p.pages || nPage == p.index) return;
    topsPagination.move(this, nPage);
};

/* 1234567 → "1,234,567" */
topsPagination._comma = function (n)
{
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
