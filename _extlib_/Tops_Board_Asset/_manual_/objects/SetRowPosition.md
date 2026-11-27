<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>SetRowPosition</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔹SetRowPosition
> 데이터의 선택 행을 첫 행 또는 마지막 행으로 이동하는 Action

<br/>

#### 1. 기능 정의
`targetdataset`의 현재 행(rowposition)을 `position`에 따라 첫 행 또는 마지막 행으로 **이동**한다.

데이터가 없으면 이동하지 않고 성공(onsuccess)으로 끝난다.

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
      <td>targetdataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>행을 이동할 데이터 오브젝트 설정</td>
    </tr>
    <tr>
      <td>position</td>
      <td><code>Enum</code></td>
      <td>first | last</td>
      <td>이동할 위치 설정 (first: 첫 행, last: 마지막 행)</td>
    </tr>
  </tbody>
</table>
