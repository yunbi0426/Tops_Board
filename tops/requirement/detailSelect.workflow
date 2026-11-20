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
      "sql": "SELECT *\nFROM req_master R\nWHERE\n  R.rp = #{ds_param.rp}",
      "insertquery": "",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "all",
      "modulename": "workflow.Select",
      "actiontype": "query",
      "sqltype": "select",
      "_designer": {
        "mode": "designer",
        "isCustomSql": false,
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
            "rp": "105080",
            "_RowType_": "N"
          }
        ]
      }
    ]
  }
}