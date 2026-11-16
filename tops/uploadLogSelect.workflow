{
  "file": {
    "version": "1.0",
    "package": "tops",
    "name": "uploadLogSelect",
    "alias": "uploadLogSelect",
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
      "sql": "SELECT\n    U.upload_id,\n    U.base_date,\n    U.file_name,\n    U.row_count,\n    U.new_count,\n    U.changed_count,\n    U.uploaded_at\nFROM upload_log U\nORDER BY\n    U.upload_id DESC",
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
          "activeTab": "orderBy",
          "selectedColumns": [
            {
              "table": "upload_log",
              "tableAlias": "U",
              "column": "upload_id",
              "order": 0
            },
            {
              "table": "upload_log",
              "tableAlias": "U",
              "column": "base_date",
              "order": 1
            },
            {
              "table": "upload_log",
              "tableAlias": "U",
              "column": "file_name",
              "order": 2
            },
            {
              "table": "upload_log",
              "tableAlias": "U",
              "column": "row_count",
              "order": 3
            },
            {
              "table": "upload_log",
              "tableAlias": "U",
              "column": "new_count",
              "order": 4
            },
            {
              "table": "upload_log",
              "tableAlias": "U",
              "column": "changed_count",
              "order": 5
            },
            {
              "table": "upload_log",
              "tableAlias": "U",
              "column": "uploaded_at",
              "order": 6
            }
          ],
          "joins": [],
          "conditions": [],
          "orderBy": [
            {
              "column": "U.upload_id",
              "direction": "DESC",
              "order": 0
            }
          ],
          "tableSearch": "",
          "tablePanelsExpanded": true,
          "conditionLogical": "AND",
          "selectedTable": "upload_log",
          "baseTable": {
            "name": "upload_log",
            "alias": "U"
          },
          "selectAllColumns": false
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 525
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
    "datasets": []
  },
  "response": {
    "variables": [],
    "datasets": [
      {
        "name": "ds_output",
        "description": "",
        "columns": [
          {
            "name": "upload_id",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          },
          {
            "name": "base_date",
            "type": "date",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "file_name",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "row_count",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          },
          {
            "name": "new_count",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          },
          {
            "name": "changed_count",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          },
          {
            "name": "uploaded_at",
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