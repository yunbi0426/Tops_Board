<div style="position:sticky; top:0; z-index:100; font-size:12px; background:var(--theia-editor-background, var(--vscode-editor-background, canvas)); padding:8px 0; display:flex; align-items:center; gap:8px;">
  <a href="../index.md" style="text-decoration:none; font-weight:bold; text-decoration:underline;">Home</a>
  <span style="color:#d0d7de;">›</span>
  <strong>Actions</strong>
  <span style="color:#d0d7de;">›</span>
  <span>ShuttleMove</span>
</div>
<hr/>

## 📦 Tops_Board_Asset Manual

### 🔹ShuttleMove
> 선택한 행을 다른 데이터 오브젝트로 옮기는 Action

<br/>

#### 1. 기능 정의
`source`의 선택 행(또는 보이는 행 전체)을 `target` 데이터 오브젝트에 새 행으로 **복사**한 뒤 원본에서 **삭제**한다.

`master`를 지정하면 Master 데이터의 현재 행 값을 `mastertarget` 컬럼에 함께 기록한다. 옮긴 뒤에는 대상 데이터의 마지막으로 추가된 행을 선택한다.

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
      <td>source</td>
      <td><code>MultiColumnID</code></td>
      <td></td>
      <td>옮길 원본 컬럼 설정. <code>데이터오브젝트.컬럼</code> 형식, 여러 개는 쉼표로 구분 (모두 같은 데이터 오브젝트)</td>
    </tr>
    <tr>
      <td>target</td>
      <td><code>MultiColumnID</code></td>
      <td></td>
      <td>값을 받을 대상 컬럼 설정. <code>source</code>와 같은 개수·순서로 지정</td>
    </tr>
    <tr>
      <td>master</td>
      <td><code>MultiColumnID</code></td>
      <td></td>
      <td>옮길 때 함께 기록할 Master 컬럼 설정 (선택)</td>
    </tr>
    <tr>
      <td>mastertarget</td>
      <td><code>MultiColumnID</code></td>
      <td></td>
      <td>Master 값을 받을 대상 컬럼 설정. <code>master</code>와 같은 개수·순서로 지정</td>
    </tr>
    <tr>
      <td>moveall</td>
      <td><code>Boolean</code></td>
      <td>true | false</td>
      <td>옮길 범위 설정 (true: 보이는 행 전체, false: 선택한 행 1개, 기본값: false)</td>
    </tr>
  </tbody>
</table>

<br/>

#### 3. 참고
- `master`를 지정했는데 Master에 선택된 행이나 값이 없으면 옮기지 않고 실패(onerror)로 끝난다.
- 되돌리는 방향(◀)처럼 Master 값이 필요 없을 때는 `master`, `mastertarget`을 모두 비운다.
