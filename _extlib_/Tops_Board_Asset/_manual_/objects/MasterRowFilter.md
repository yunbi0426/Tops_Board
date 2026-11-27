<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>MasterRowFilter</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔹MasterRowFilter
> Master 데이터의 선택 행 값으로 대상 데이터를 필터링하는 Action

<br/>

#### 1. 기능 정의
`master` 데이터 오브젝트의 현재 행 값과 `target` 컬럼 값이 모두 같은 행만 보이도록 대상 데이터를 **필터링**한다.

Master에 선택된 행이 없거나 값이 비어 있으면(새 행 등) 대상 데이터의 모든 행을 숨긴다.

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
      <td>master</td>
      <td><code>MultiColumnID</code></td>
      <td></td>
      <td>기준이 되는 Master 컬럼 설정. <code>데이터오브젝트.컬럼</code> 형식, 여러 개는 쉼표로 구분 (모두 같은 데이터 오브젝트)</td>
    </tr>
    <tr>
      <td>target</td>
      <td><code>MultiColumnID</code></td>
      <td></td>
      <td>필터링할 대상 컬럼 설정. <code>master</code>와 같은 개수·순서로 지정</td>
    </tr>
  </tbody>
</table>
