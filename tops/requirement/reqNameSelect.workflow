{
  "file": {
    "version": "1.0",
    "package": "tops.requirement",
    "name": "reqNameSelect",
    "alias": "reqNameSelect",
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
      "sql": "SELECT COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\r\n       CONCAT(COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)),\r\n              ' (', COUNT(*), ')')                                       AS req_label,\r\n       CAST(COUNT(*) AS SIGNED)                                          AS req_cnt\r\nFROM req_master r\r\nLEFT JOIN requester_map m   ON m.requester = r.requester\r\nLEFT JOIN requester_group g ON g.group_id = m.group_id\r\nGROUP BY COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1))\r\nORDER BY req_cnt DESC, req_name",
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
            "name": "req_name",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "req_label",
            "type": "string",
            "datasize": 224,
            "tablename": ""
          },
          {
            "name": "req_cnt",
            "type": "INT",
            "datasize": 21,
            "tablename": ""
          }
        ],
        "datasource": ""
      }
    ]
  }
}