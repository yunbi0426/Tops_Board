<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Viewtemplates</strong>
  <span style="color:#d0d7de;">›</span>
  <span>ExcelUploadView</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔸ExcelUploadView
 > 기준일·엑셀 파일 선택·업로드 버튼으로 구성된 업로드 ViewTemplate

![image](../images/ExcelUploadView.png)


<br/>

#### 1. 기능 정의
기준일 Calendar, 파일명 표시칸, 파일 선택 버튼, 선택 취소(✕) 버튼, 업로드 버튼을 한 줄로 배치하는 ViewTemplate입니다.

파일을 선택하면 파일명을 `File name field`에 넣고 선택한 파일을 View Form의 `oUploadFileList`에 보관합니다. 실제 업로드는 업로드 버튼(`btnUpload`)의 Click 이벤트에 FileUploadTransfer Action을 연결해 수행합니다.

<br/>

#### 2. View Property
<table>
  <thead>
    <tr>
      <th style="text-align:center; min-width:100px;">그룹</th>
      <th style="text-align:center; min-width:100px;">Property명</th>
      <th style="text-align:center; min-width:80px;">유형</th>
      <th style="text-align:center; min-width:80px;">값</th>
      <th style="text-align:center; min-width:200px;">설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3" style="align:center;">Field</td>
      <td>Base date field</td>
      <td><code>String</code></td>
      <td></td>
      <td>기준일로 사용할 Model 필드 ID (기본값: base_date)</td>
    </tr>
    <tr>
      <td>File name field</td>
      <td><code>String</code></td>
      <td></td>
      <td>선택한 파일명을 넣을 Model 필드 ID (기본값: file_name)</td>
    </tr>
    <tr>
      <td>File filter</td>
      <td><code>String</code></td>
      <td></td>
      <td>파일 선택 창 필터 (기본값: Excel(*.xlsx)|*.xlsx|)</td>
    </tr>
    <tr>
      <td rowspan="2" style="align:center;">Button</td>
      <td>Select button text</td>
      <td><code>String</code></td>
      <td></td>
      <td>파일 선택 버튼 문구 (기본값: 파일 선택)</td>
    </tr>
    <tr>
      <td>Upload button text</td>
      <td><code>String</code></td>
      <td></td>
      <td>업로드 버튼 문구 (기본값: 엑셀 업로드)</td>
    </tr>
  </tbody>
</table>
