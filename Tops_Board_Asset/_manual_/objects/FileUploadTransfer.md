<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>FileUploadTransfer</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔹FileUploadTransfer
> View에서 선택한 파일을 NexaLAP Server로 업로드하는 Action

<br/>

#### 1. 기능 정의
`targetview`에서 선택한 파일을 NexaLAP Server 업로드 경로(`NexaLAPServer::file/upload`)로 **전송**하고, 서버가 돌려준 업로드 결과를 `resultdataset`에 **복사**한다.

선택한 파일이 없으면 전송하지 않고 실패(onerror)로 끝난다.

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
      <td>업로드할 파일을 선택한 View 설정 (ExcelUploadView로 만든 View)</td>
    </tr>
    <tr>
      <td>resultdataset</td>
      <td><code>DatasetID</code></td>
      <td></td>
      <td>업로드 결과(파일 정보)를 받을 데이터 오브젝트 설정</td>
    </tr>
  </tbody>
</table>

<br/>

#### 3. 참고
- 파일 목록은 `targetview` Form의 `oUploadFileList`에서 읽는다. ExcelUploadView가 파일을 선택할 때 이 목록을 채운다.
- 업로드한 파일은 서버의 임시 영역에 저장되며, Workflow의 Excel Import 노드에서 읽을 수 있다.
