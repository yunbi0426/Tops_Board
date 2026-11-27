<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>InputFilter</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔹InputFilter
> 입력칸의 검색어로 데이터를 필터링하는 Action

<br/>

#### 1. 기능 정의
`sourcecomp`에 입력된 검색어가 `searchcolumns` 중 하나라도 포함된 행만 남도록 데이터를 **필터링**한다.

대소문자를 구분하지 않고 부분 일치로 검색하며, 검색어가 비어 있으면 필터를 해제한다.

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
      <td>targetview</td>
      <td><code>ViewObjList</code></td>
      <td></td>
      <td>입력 컴포넌트가 있는 View 설정 (비우면 Form에서 찾음)</td>
    </tr>
    <tr>
      <td>sourcecomp</td>
      <td><code>ViewChildObjList</code></td>
      <td></td>
      <td>검색어를 입력하는 컴포넌트 설정 (예: Edit)</td>
    </tr>
    <tr>
      <td>searchcolumns</td>
      <td><code>MultiColumnID</code></td>
      <td></td>
      <td>검색할 컬럼 설정. <code>데이터오브젝트.컬럼</code> 형식, 여러 개는 쉼표로 구분 (모두 같은 데이터 오브젝트)</td>
    </tr>
    <tr>
      <td>clearinput</td>
      <td><code>Boolean</code></td>
      <td>true | false</td>
      <td>실행 전에 입력값을 비울지 설정. true면 입력칸을 비우고 필터를 해제 (지우기 버튼용, 기본값: false)</td>
    </tr>
  </tbody>
</table>
