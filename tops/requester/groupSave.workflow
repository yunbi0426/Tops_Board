{
  "file": {
    "version": "1.0",
    "package": "tops.requester",
    "name": "groupSave",
    "alias": "groupSave"
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
        "x": 1185,
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
      "target": "ds_group",
      "output": "",
      "sql": "",
      "insertquery": "INSERT INTO requester_group (display_name, company, updated_at)\nVALUES (IFNULL(NULLIF(#{ds_group.display_name}, ''), ''), #{ds_group.company}, NOW())",
      "updatequery": "UPDATE requester_group\r\nSET display_name = IFNULL(NULLIF(#{ds_group.display_name}, ''), display_name),\r\n    company = #{ds_group.company}, updated_at = NOW()\r\nWHERE group_id = #{ds_group.group_id}",
      "deletequery": "DELETE FROM requester_group WHERE group_id = #{ds_group.group_id}",
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
          "targetTable": {
            "name": "requester_group"
          },
          "insert": {
            "columnMappings": [
              {
                "dbColumn": "group_id",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "display_name",
                "datasetColumn": "display_name",
                "use": true
              },
              {
                "dbColumn": "company",
                "datasetColumn": "company",
                "use": true
              },
              {
                "dbColumn": "updated_at",
                "datasetColumn": "",
                "use": true
              }
            ]
          },
          "update": {
            "setMappings": [
              {
                "dbColumn": "group_id",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "display_name",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "company",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "updated_at",
                "datasetColumn": "",
                "use": false
              }
            ],
            "keyMappings": [
              {
                "dbColumn": "group_id",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "display_name",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "company",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "updated_at",
                "datasetColumn": "",
                "use": false
              }
            ]
          },
          "delete": {
            "keyMappings": [
              {
                "dbColumn": "group_id",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "display_name",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "company",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "updated_at",
                "datasetColumn": "",
                "use": false
              }
            ]
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 555,
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
        "name": "ds_group",
        "description": "",
        "columns": [
          {
            "name": "group_id",
            "type": "INT",
            "datasize": 10,
            "tablename": "requester_map",
            "isconstant": false,
            "key": "tops_board.requester_map.group_id"
          },
          {
            "name": "display_name",
            "type": "STRING",
            "datasize": 100,
            "tablename": "requester_group",
            "isconstant": false,
            "key": "tops_board.requester_group.display_name"
          },
          {
            "name": "company",
            "type": "STRING",
            "datasize": 100,
            "tablename": "requester_group",
            "isconstant": false,
            "key": "tops_board.requester_group.company"
          }
        ],
        "datasource": "tops_board"
      }
    ]
  },
  "response": {
    "variables": [],
    "datasets": []
  },
  "_test": {
    "datasets": [
      {
        "name": "ds_group",
        "columns": [
          {
            "name": "group_id",
            "type": "INT",
            "datasize": 10,
            "tablename": "requester_map",
            "isconstant": false,
            "key": "tops_board.requester_map.group_id"
          },
          {
            "name": "display_name",
            "type": "STRING",
            "datasize": 100,
            "tablename": "requester_group",
            "isconstant": false,
            "key": "tops_board.requester_group.display_name"
          },
          {
            "name": "company",
            "type": "STRING",
            "datasize": 100,
            "tablename": "requester_group",
            "isconstant": false,
            "key": "tops_board.requester_group.company"
          }
        ],
        "rows": [
          {
            "group_id": "s",
            "_RowType_": "N",
            "display_name": "test",
            "company": "tobe"
          }
        ]
      }
    ]
  }
}