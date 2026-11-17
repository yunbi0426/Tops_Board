{
  "file": {
    "version": "1.0",
    "package": "tops",
    "name": "reqMasterSelect",
    "alias": "reqMasterSelect",
    "description": ""
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
        "x": 1180,
        "y": 225
      }
    },
    {
      "alias": "SQL1",
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
      "output": "ds_output",
      "sql": "SELECT r.*\nFROM req_master r\nWHERE (IFNULL(#{ds_search.rp}, '') = '' OR r.rp LIKE CONCAT('%', #{ds_search.rp}, '%'))\n  AND (IFNULL(#{ds_search.status}, '') = '' OR FIND_IN_SET(r.status, #{ds_search.status}) > 0)\n  AND (IFNULL(#{ds_search.requester}, '') = '' OR r.requester LIKE CONCAT('%', #{ds_search.requester}, '%'))\n  AND (IFNULL(#{ds_search.title}, '') = '' OR r.title LIKE CONCAT('%', #{ds_search.title}, '%'))\nORDER BY r.reg_date DESC, r.rp DESC",
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
          "activeTab": "where",
          "selectedColumns": [],
          "joins": [],
          "conditions": [
            {
              "column": "R.rp",
              "operator": "=",
              "valueType": "workflowProperty",
              "value": "#{ds_search.rp}"
            },
            {
              "column": "R.rp",
              "operator": "=",
              "valueType": "workflowProperty",
              "value": ""
            }
          ],
          "orderBy": [],
          "tableSearch": "",
          "tablePanelsExpanded": true,
          "conditionLogical": "AND",
          "selectedTable": "req_master",
          "baseTable": {
            "name": "req_master",
            "alias": "R"
          },
          "selectAllColumns": true
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 570
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
        "name": "ds_search",
        "description": "",
        "columns": [
          {
            "name": "rp",
            "type": "STRING",
            "datasize": 10,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.rp"
          },
          {
            "name": "status",
            "type": "STRING",
            "datasize": 20,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.status"
          },
          {
            "name": "requester",
            "type": "STRING",
            "datasize": 200,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.requester"
          },
          {
            "name": "title",
            "type": "STRING",
            "datasize": 500,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.title"
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
            "name": "rp",
            "type": "string",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "rc",
            "type": "string",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "status",
            "type": "string",
            "datasize": 20,
            "tablename": ""
          },
          {
            "name": "req_type",
            "type": "string",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "bug_type",
            "type": "string",
            "datasize": 20,
            "tablename": ""
          },
          {
            "name": "product_module",
            "type": "string",
            "datasize": 100,
            "tablename": ""
          },
          {
            "name": "requester",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "work_patch",
            "type": "string",
            "datasize": 50,
            "tablename": ""
          },
          {
            "name": "deploy_patch",
            "type": "string",
            "datasize": 50,
            "tablename": ""
          },
          {
            "name": "reg_user",
            "type": "string",
            "datasize": 50,
            "tablename": ""
          },
          {
            "name": "worker",
            "type": "string",
            "datasize": 50,
            "tablename": ""
          },
          {
            "name": "developer",
            "type": "string",
            "datasize": 50,
            "tablename": ""
          },
          {
            "name": "inspector",
            "type": "string",
            "datasize": 50,
            "tablename": ""
          },
          {
            "name": "reg_date",
            "type": "date",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "last_work_date",
            "type": "date",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "inspect_date",
            "type": "date",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "title",
            "type": "string",
            "datasize": 500,
            "tablename": ""
          },
          {
            "name": "txt_reg",
            "type": "string",
            "datasize": 65535,
            "tablename": ""
          },
          {
            "name": "txt_receipt",
            "type": "string",
            "datasize": 65535,
            "tablename": ""
          },
          {
            "name": "txt_analysis",
            "type": "string",
            "datasize": 65535,
            "tablename": ""
          },
          {
            "name": "txt_design",
            "type": "string",
            "datasize": 65535,
            "tablename": ""
          },
          {
            "name": "txt_impl",
            "type": "string",
            "datasize": 65535,
            "tablename": ""
          },
          {
            "name": "txt_impl_detail",
            "type": "string",
            "datasize": 65535,
            "tablename": ""
          },
          {
            "name": "txt_inspect",
            "type": "string",
            "datasize": 65535,
            "tablename": ""
          },
          {
            "name": "upload_id",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "datasize": 19,
            "tablename": ""
          }
        ],
        "datasource": ""
      }
    ]
  }
}