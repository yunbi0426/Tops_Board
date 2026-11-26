{
  "file": {
    "version": "1.0",
    "package": "tops.upload",
    "name": "uploadDupCheck",
    "alias": "uploadDupCheck"
  },
  "workflow": [
    {
      "name": "start",
      "type": "start",
      "alias": "Start",
      "description": "",
      "next": "Select1",
      "position": {
        "x": 300,
        "y": 225
      }
    },
    {
      "name": "end",
      "type": "end",
      "alias": "End",
      "description": "",
      "position": {
        "x": 1620,
        "y": 225
      }
    },
    {
      "alias": "등록일을 기준으로 같은 날짜에 등록된 파일이 있는지 확인",
      "description": "",
      "type": "sql",
      "position": {
        "x": 510,
        "y": 225
      },
      "name": "Select1",
      "next": "end",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_dup",
      "sql": "SELECT CAST(COUNT(*) AS SIGNED)                              AS dup_cnt,\r\n       MAX(upload_id)                                        AS last_upload_id,\r\n       DATE_FORMAT(MAX(uploaded_at), '%Y-%m-%d %H:%i')       AS last_uploaded_at,\r\n       CASE WHEN #{ds_input.base_date} > CURDATE() THEN 1 ELSE 0 END AS future_yn\r\nFROM upload_log\r\nWHERE base_date = #{ds_input.base_date}",
      "insertquery": "",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "all",
      "modulename": "workflow.Select",
      "actiontype": "query",
      "sqltype": "select",
      "_designer": {
        "mode": "sql",
        "isCustomSql": true,
        "designerModel": {
          "activeTab": "select",
          "selectedColumns": [],
          "joins": [],
          "conditions": [],
          "orderBy": [],
          "tableSearch": "",
          "tablePanelsExpanded": true,
          "conditionLogical": "AND"
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 600,
        "height": 585
      }
    }
  ],
  "comments": [],
  "localvariables": {
    "variables": [],
    "datasets": []
  },
  "request": {
    "variables": [],
    "datasets": [
      {
        "name": "ds_input",
        "description": "",
        "columns": [
          {
            "name": "base_date",
            "type": "STRING",
            "datasize": 10,
            "tablename": "upload_log",
            "isconstant": false,
            "key": "tops_board.upload_log.base_date"
          }
        ],
        "datasource": "tops_board"
      }
    ]
  },
  "response": {
    "variables": [],
    "datasets": [
      {
        "name": "ds_dup",
        "description": "",
        "columns": [
          {
            "name": "dup_cnt",
            "type": "INT",
            "datasize": 21,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "last_upload_id",
            "type": "int",
            "datasize": 11,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "last_uploaded_at",
            "type": "string",
            "datasize": 21,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "future_yn",
            "type": "int",
            "datasize": 2,
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": ""
      }
    ]
  },
  "_test": {
    "datasets": [
      {
        "name": "ds_input",
        "columns": [
          {
            "name": "base_date",
            "type": "DATE",
            "datasize": 10,
            "tablename": "upload_log",
            "isconstant": false,
            "key": "tops_board.upload_log.base_date"
          }
        ],
        "rows": [
          {
            "base_date": "20261124",
            "_RowType_": "N"
          }
        ]
      }
    ]
  }
}