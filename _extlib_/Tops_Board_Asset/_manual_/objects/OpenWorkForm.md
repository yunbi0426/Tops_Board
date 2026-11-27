<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>OpenWorkForm</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔹OpenWorkForm
> 지정한 Form을 Work 영역에 표시하는 Action

<br/>

#### 1. 기능 정의
메인 프레임부터 프레임 트리를 따라 내려가며 `div_work`를 가진 화면을 찾고, 그 Work 영역에 `formUrl`의 Form을 **표시**한다.

Work 영역 경로를 고정하지 않으므로 Top 템플릿처럼 프레임 구조가 달라도 동작한다. Work 영역을 찾지 못하거나 `formUrl`이 비어 있으면 실패(onerror)로 끝난다.

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
      <td>formUrl</td>
      <td><code>URL</code></td>
      <td></td>
      <td>Work 영역에 표시할 Form URL 설정</td>
    </tr>
  </tbody>
</table>
