{
  "file": {
    "version": "1.0",
    "package": "tops.requirement",
    "name": "detailSelect",
    "alias": "detailSelect",
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
      "output": "ds_detail",
      "sql": "SELECT r.*,\n       COALESCE(s.dev_result, 'REMAIN') AS dev_result,\n       COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name\nFROM req_master r\nLEFT JOIN req_status s ON s.status = r.status\nLEFT JOIN requester_map m ON m.requester = r.requester\nLEFT JOIN requester_group g ON g.group_id = m.group_id\nWHERE r.rp = #{ds_param.rp}",
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
              "value": "#{ds_param.rp}"
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
        "name": "ds_param",
        "description": "",
        "columns": [
          {
            "name": "rp",
            "type": "STRING",
            "datasize": 10,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.rp"
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
        "name": "ds_detail",
        "description": "",
        "columns": [
          {
            "name": "rp",
            "type": "string",
            "datasize": 10,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "rc",
            "type": "string",
            "datasize": 10,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "status",
            "type": "string",
            "datasize": 20,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "req_type",
            "type": "string",
            "datasize": 10,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "bug_type",
            "type": "string",
            "datasize": 20,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "product_module",
            "type": "string",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "requester",
            "type": "string",
            "datasize": 200,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "work_patch",
            "type": "string",
            "datasize": 50,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "deploy_patch",
            "type": "string",
            "datasize": 50,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "reg_user",
            "type": "string",
            "datasize": 50,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "worker",
            "type": "string",
            "datasize": 50,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "developer",
            "type": "string",
            "datasize": 50,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "inspector",
            "type": "string",
            "datasize": 50,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "reg_date",
            "type": "date",
            "datasize": 10,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "last_work_date",
            "type": "date",
            "datasize": 10,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "inspect_date",
            "type": "date",
            "datasize": 10,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "title",
            "type": "string",
            "datasize": 500,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_reg",
            "type": "string",
            "datasize": 65535,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_receipt",
            "type": "string",
            "datasize": 65535,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_analysis",
            "type": "string",
            "datasize": 65535,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_design",
            "type": "string",
            "datasize": 65535,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_impl",
            "type": "string",
            "datasize": 65535,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_impl_detail",
            "type": "string",
            "datasize": 65535,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_inspect",
            "type": "string",
            "datasize": 65535,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "upload_id",
            "type": "int",
            "datasize": 11,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "updated_at",
            "type": "datetime",
            "datasize": 19,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "dev_result",
            "type": "string",
            "datasize": 10,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "req_name",
            "type": "string",
            "datasize": 200,
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
        "name": "ds_param",
        "columns": [
          {
            "name": "rp",
            "type": "STRING",
            "datasize": 10,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.rp"
          }
        ],
        "rows": [
          {
            "_RowType_": "N",
            "rp": "106647"
          }
        ]
      }
    ]
  }
}