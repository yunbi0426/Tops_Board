<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>ExportExcelReport</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔹ExportExcelReport
> 화면의 Grid들을 모아 엑셀 리포트 파일로 내보내는 Action

<br/>

#### 1. 기능 정의
`mainviews`의 Grid들을 첫 번째 시트에 위에서 아래로 배치하고, `splitdataset`의 행마다 시트를 하나씩 만들어 `splitviews`의 Grid들을 해당 행 값으로 **필터링해 배치**한 뒤 엑셀 파일 하나로 **내보낸다**.

View 안의 첫 번째 Grid의 포맷과 데이터를 임시 Grid로 복사해서 내보내므로 화면의 Grid에는 영향이 없다. 파일 이름 뒤에는 `_YYMMDD`가 자동으로 붙는다.

<br/>

#### 2. Action Property
<table>
  <thead>
    <tr>
      <th width="150">Property명</th>
      <th width="100">유형</th>
      <th width="100">값</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>exportfilename</td>
      <td><code>String</code></td>
      <td></td>
      <td>파일 이름 설정 (기본값: Report)</td>
    </tr>
    <tr>
      <td>sheettitle</td>
      <td><code>String</code></td>
      <td></td>
      <td>시트 맨 위에 넣을 제목 설정. <code>{sheet}</code>는 시트 이름, <code>{date}</code>는 오늘 날짜로 치환. 비우면 제목 없음</td>
    </tr>
    <tr>
      <td>rowgap</td>
      <td><code>Number</code></td>
      <td></td>
      <td>Grid 사이 빈 행 수 설정 (기본값: 1)</td>
    </tr>
    <tr>
      <td>mainsheet</td>
      <td><code>String</code></td>
      <td></td>
      <td>첫 번째 시트 이름 설정 (기본값: 요약)</td>
    </tr>
    <tr>
      <td>mainviews</td>
      <td><code>MultiViewObjList</code></td>
      <td></td>
      <td>첫 번째 시트에 넣을 View 설정 (선택한 순서대로 배치)</td>
    </tr>
    <tr>
      <td>splitdataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>시트를 나눌 기준 데이터 오브젝트 설정 (행 1개 = 시트 1개)</td>
    </tr>
    <tr>
      <td>splitcheck</td>
      <td><code>ColumnID</code></td>
      <td></td>
      <td>시트를 만들 행을 고르는 체크 컬럼 설정. 값이 1인 행만 시트 생성, 비우면 전체 행</td>
    </tr>
    <tr>
      <td>splitkey</td>
      <td><code>ColumnID</code></td>
      <td></td>
      <td>시트 이름이자 필터 값으로 쓸 컬럼 설정</td>
    </tr>
    <tr>
      <td>splitviews</td>
      <td><code>MultiViewObjList</code></td>
      <td></td>
      <td>나눈 시트마다 넣을 View 설정. 각 Grid 데이터에 <code>splitkey</code>와 같은 이름의 컬럼이 있으면 그 값으로 필터링</td>
    </tr>
  </tbody>
</table>

<br/>

#### 3. 참고
- 내보내기에 XENI를 사용하므로 Resources에 XENI 연결이 있어야 한다. 없으면 실패(onerror)로 끝난다.
- 시트 이름은 엑셀 규칙에 맞춰 금지 문자(`[ ] : * ? / \`)를 지우고 31자로 자른다.
