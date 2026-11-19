{
  "file": {
    "version": "1.0",
    "package": "tops.requester",
    "name": "mapSave",
    "alias": "mapSave",
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
      "target": "ds_mapped",
      "output": "",
      "sql": "",
      "insertquery": "INSERT INTO requester_map (requester, group_id)\nVALUES (#{ds_mapped.requester}, #{ds_mapped.group_id})\nON DUPLICATE KEY UPDATE group_id = #{ds_mapped.group_id}",
      "updatequery": "UPDATE requester_map SET group_id = #{ds_mapped.group_id}\r\nWHERE requester = #{ds_mapped.requester}",
      "deletequery": "DELETE FROM requester_map WHERE requester = #{ds_mapped.requester}",
      "executiontype": "rowtype",
      "modulename": "workflow.Save",
      "actiontype": "save",
      "sqltype": "",
      "usegeneratedkey": false,
      "generatedkeycolumn": "",
      "generatedkeyoutput": "",
      "_designer": {
        "mode": "sql",
        "activeTab": "update",
        "isCustomSql": true,
        "designerModel": {
          "targetTable": {
            "name": "requester_map"
          },
          "insert": {
            "columnMappings": [
              {
                "dbColumn": "requester",
                "datasetColumn": "requester",
                "use": true
              },
              {
                "dbColumn": "group_id",
                "datasetColumn": "group_id",
                "use": true
              }
            ]
          },
          "update": {
            "setMappings": [
              {
                "dbColumn": "requester",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "group_id",
                "datasetColumn": "",
                "use": false
              }
            ],
            "keyMappings": [
              {
                "dbColumn": "requester",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "group_id",
                "datasetColumn": "",
                "use": false
              }
            ]
          },
          "delete": {
            "keyMappings": [
              {
                "dbColumn": "requester",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "group_id",
                "datasetColumn": "",
                "use": false
              }
            ]
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 600
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
        "name": "ds_mapped",
        "description": "",
        "columns": [
          {
            "name": "requester",
            "type": "STRING",
            "datasize": 200,
            "tablename": "requester_map",
            "isconstant": false,
            "key": "tops_board.requester_map.requester"
          },
          {
            "name": "group_id",
            "type": "INT",
            "datasize": 10,
            "tablename": "requester_map",
            "isconstant": false,
            "key": "tops_board.requester_map.group_id"
          }
        ],
        "datasource": "tops_board"
      }
    ]
  },
  "response": {
    "variables": [],
    "datasets": []
  }
}