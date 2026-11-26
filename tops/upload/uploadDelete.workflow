{
  "file": {
    "version": "1.0",
    "package": "tops.upload",
    "name": "uploadDelete",
    "alias": "최근 회차 삭제",
    "description": ""
  },
  "workflow": [
    {
      "name": "start",
      "type": "start",
      "alias": "Start",
      "description": "",
      "next": "Select5",
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
        "x": 3915,
        "y": 225
      }
    },
    {
      "alias": "삭제 가능 여부 조회",
      "description": "",
      "type": "sql",
      "position": {
        "x": 510,
        "y": 225
      },
      "name": "Select5",
      "next": "Select6",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_output",
      "sql": "SELECT CASE WHEN #{ds_input.upload_id} = MAX(upload_id) THEN 1 ELSE 0 END AS deleted_yn,\r\n       MAX(upload_id) AS latest_id\r\nFROM upload_log",
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
        "width": 550,
        "height": 582
      }
    },
    {
      "alias": "새 요구사항 삭제",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1180,
        "y": 225
      },
      "name": "Select6",
      "next": "Select1",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_input",
      "output": "",
      "sql": "",
      "insertquery": "DELETE FROM req_master\r\nWHERE upload_id = #{ds_input.upload_id}\r\n  AND #{ds_input.upload_id} = (SELECT MAX(upload_id) FROM upload_log)\r\n  AND NOT EXISTS (\r\n      SELECT 1 FROM req_snapshot p\r\n      WHERE p.rp = req_master.rp\r\n        AND #{ds_input.upload_id} > p.upload_id\r\n  )",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "rowtype",
      "modulename": "workflow.Save",
      "actiontype": "save",
      "sqltype": "",
      "usegeneratedkey": false,
      "generatedkeycolumn": "",
      "generatedkeyoutput": "",
      "_designer": {
        "mode": "sql",
        "activeTab": "insert",
        "isCustomSql": true,
        "designerModel": {
          "insert": {
            "columnMappings": []
          },
          "update": {
            "setMappings": [],
            "keyMappings": []
          },
          "delete": {
            "keyMappings": []
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 585
      }
    },
    {
      "alias": "요구사항 상태 되돌리기",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1850,
        "y": 225
      },
      "name": "Select1",
      "next": "Select2",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_input",
      "output": "",
      "sql": "",
      "insertquery": "UPDATE req_master m\r\nJOIN req_snapshot p\r\n  ON p.rp = m.rp\r\n AND p.upload_id = (\r\n     SELECT MAX(s.upload_id) FROM req_snapshot s\r\n     WHERE s.rp = m.rp AND #{ds_input.upload_id} > s.upload_id\r\n )\r\nSET m.status = p.status,\r\n    m.upload_id = p.upload_id\r\nWHERE m.upload_id = #{ds_input.upload_id}\r\n  AND #{ds_input.upload_id} = (SELECT MAX(upload_id) FROM upload_log)",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "rowtype",
      "modulename": "workflow.Save",
      "actiontype": "save",
      "sqltype": "",
      "usegeneratedkey": false,
      "generatedkeycolumn": "",
      "generatedkeyoutput": "",
      "_designer": {
        "mode": "sql",
        "activeTab": "insert",
        "isCustomSql": true,
        "designerModel": {
          "insert": {
            "columnMappings": []
          },
          "update": {
            "setMappings": [],
            "keyMappings": []
          },
          "delete": {
            "keyMappings": []
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 585
      }
    },
    {
      "alias": "회차 상태 삭제",
      "description": "",
      "type": "sql",
      "position": {
        "x": 2520,
        "y": 225
      },
      "name": "Select2",
      "next": "Select3",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_input",
      "output": "",
      "sql": "",
      "insertquery": "DELETE FROM req_snapshot\r\nWHERE upload_id = #{ds_input.upload_id}\r\n  AND #{ds_input.upload_id} = (SELECT MAX(upload_id) FROM upload_log)",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "rowtype",
      "modulename": "workflow.Save",
      "actiontype": "save",
      "sqltype": "",
      "usegeneratedkey": false,
      "generatedkeycolumn": "",
      "generatedkeyoutput": "",
      "_designer": {
        "mode": "sql",
        "activeTab": "insert",
        "isCustomSql": true,
        "designerModel": {
          "insert": {
            "columnMappings": []
          },
          "update": {
            "setMappings": [],
            "keyMappings": []
          },
          "delete": {
            "keyMappings": []
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 585
      }
    },
    {
      "alias": "회차 기록 삭제",
      "description": "",
      "type": "sql",
      "position": {
        "x": 3190,
        "y": 225
      },
      "name": "Select3",
      "next": "end",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_input",
      "output": "",
      "sql": "",
      "insertquery": "DELETE FROM upload_log\r\nWHERE upload_id = #{ds_input.upload_id}\r\n  AND #{ds_input.upload_id} = (SELECT MAX(t.upload_id) FROM (SELECT upload_id FROM upload_log) t)",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "rowtype",
      "modulename": "workflow.Save",
      "actiontype": "save",
      "sqltype": "",
      "usegeneratedkey": false,
      "generatedkeycolumn": "",
      "generatedkeyoutput": "",
      "_designer": {
        "mode": "sql",
        "activeTab": "insert",
        "isCustomSql": true,
        "designerModel": {
          "insert": {
            "columnMappings": []
          },
          "update": {
            "setMappings": [],
            "keyMappings": []
          },
          "delete": {
            "keyMappings": []
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
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
            "name": "upload_id",
            "type": "INT",
            "datasize": 10,
            "tablename": "upload_log",
            "isconstant": false,
            "key": "tops_board.upload_log.upload_id"
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
        "name": "ds_output",
        "description": "",
        "columns": [
          {
            "name": "deleted_yn",
            "type": "int",
            "datasize": 2,
            "tablename": ""
          },
          {
            "name": "latest_id",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          }
        ],
        "datasource": ""
      }
    ]
  }
}