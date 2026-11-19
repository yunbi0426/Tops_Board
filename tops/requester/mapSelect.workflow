{
  "file": {
    "version": "1.0",
    "package": "tops.requester",
    "name": "mapSelect",
    "alias": "mapSelect",
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
        "x": 2520,
        "y": 225
      }
    },
    {
      "alias": "매핑 요구처 표시명 목록",
      "description": "",
      "type": "sql",
      "position": {
        "x": 510,
        "y": 225
      },
      "name": "Select1",
      "next": "Select2",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_group",
      "sql": "SELECT g.group_id, g.display_name, g.company,\n       (SELECT COUNT(*) FROM requester_map m WHERE m.group_id = g.group_id) AS map_cnt\nFROM requester_group g\nORDER BY g.group_id",
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
          "selectedColumns": [
            {
              "table": "requester_group",
              "tableAlias": "g",
              "column": "group_id",
              "order": 0
            },
            {
              "table": "requester_group",
              "tableAlias": "g",
              "column": "display_name",
              "order": 1
            },
            {
              "table": "requester_group",
              "tableAlias": "g",
              "column": "company",
              "order": 2
            }
          ],
          "joins": [
            {
              "joinType": "LEFT JOIN",
              "table": "requester_map",
              "alias": "m",
              "leftColumn": "m.group_id",
              "operator": "=",
              "rightColumn": "g.group_id",
              "conditionGroup": {
                "id": "flat-root",
                "kind": "group",
                "logical": "AND",
                "children": [
                  {
                    "id": "flat-condition",
                    "kind": "condition",
                    "leftColumn": "m.group_id",
                    "operator": "=",
                    "rightColumn": "g.group_id"
                  },
                  {
                    "id": "cdf419d3-d13e-4747-8f8b-ffa2553a75a2",
                    "kind": "group",
                    "logical": "AND",
                    "joinWith": "AND",
                    "children": []
                  }
                ]
              }
            }
          ],
          "conditions": [],
          "orderBy": [
            {
              "column": "g.group_id",
              "direction": "ASC",
              "order": 0
            }
          ],
          "tableSearch": "",
          "tablePanelsExpanded": true,
          "conditionLogical": "AND",
          "selectedTable": "requester_group",
          "baseTable": {
            "name": "requester_group",
            "alias": "g"
          },
          "selectAllColumns": false
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 570
      }
    },
    {
      "alias": "미매핑 요구처 목록",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1185,
        "y": 225
      },
      "name": "Select2",
      "next": "Select3",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_unmapped",
      "sql": "SELECT r.requester, COUNT(*) AS req_cnt\r\nFROM req_master r\r\nLEFT JOIN requester_map m ON m.requester = r.requester\r\nWHERE m.requester IS NULL\r\nGROUP BY r.requester\r\nORDER BY req_cnt DESC",
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
      "alias": "매핑 요구처 목록",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1850,
        "y": 225
      },
      "name": "Select3",
      "next": "end",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_mapped",
      "sql": "SELECT m.requester, m.group_id, COUNT(r.rp) AS req_cnt\r\nFROM requester_map m\r\nLEFT JOIN req_master r ON r.requester = m.requester\r\nGROUP BY m.requester, m.group_id\r\nORDER BY m.requester",
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
        "name": "ds_group",
        "description": "",
        "columns": [
          {
            "name": "group_id",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          },
          {
            "name": "display_name",
            "type": "string",
            "datasize": 100,
            "tablename": ""
          },
          {
            "name": "company",
            "type": "string",
            "datasize": 100,
            "tablename": ""
          },
          {
            "name": "map_cnt",
            "type": "bigdecimal",
            "datasize": 21,
            "tablename": ""
          }
        ],
        "datasource": ""
      },
      {
        "name": "ds_unmapped",
        "description": "",
        "columns": [
          {
            "name": "requester",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "req_cnt",
            "type": "bigdecimal",
            "datasize": 21,
            "tablename": ""
          }
        ],
        "datasource": ""
      },
      {
        "name": "ds_mapped",
        "description": "",
        "columns": [
          {
            "name": "requester",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "group_id",
            "type": "int",
            "datasize": 11,
            "tablename": ""
          },
          {
            "name": "req_cnt",
            "type": "bigdecimal",
            "datasize": 21,
            "tablename": ""
          }
        ],
        "datasource": ""
      }
    ]
  }
}