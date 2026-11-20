{
  "file": {
    "version": "1.0",
    "package": "tops.dashboard",
    "name": "statSelect",
    "alias": "statSelect"
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
        "x": 3190,
        "y": 225
      }
    },
    {
      "alias": "요구처별 전체·완료·잔여",
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
      "output": "ds_requester",
      "sql": "SELECT COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\n       SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END) AS total_cnt,\n       SUM(CASE WHEN s.dev_result = 'DONE' THEN 1 ELSE 0 END) AS done_cnt,\n       SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'REMAIN' THEN 1 ELSE 0 END) AS remain_cnt,\n       ROUND(SUM(CASE WHEN s.dev_result = 'DONE' THEN 1 ELSE 0 END) * 100\n             / NULLIF(SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END), 0)) AS done_rate\nFROM req_master r\nLEFT JOIN req_status s ON s.status = r.status\nLEFT JOIN requester_map m ON m.requester = r.requester\nLEFT JOIN requester_group g ON g.group_id = m.group_id\nGROUP BY COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1))\nHAVING SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END) > 0\nORDER BY remain_cnt DESC, req_name",
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
        "height": 582
      }
    },
    {
      "alias": "잔여 요구사항 목록",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1180,
        "y": 225
      },
      "name": "Select2",
      "next": "Select3",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_remain",
      "sql": "SELECT COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\r\n       r.rp, r.title, r.status, r.reg_date, r.requester\r\nFROM req_master r\r\nLEFT JOIN req_status s ON s.status = r.status\r\nLEFT JOIN requester_map m ON m.requester = r.requester\r\nLEFT JOIN requester_group g ON g.group_id = m.group_id\r\nWHERE COALESCE(s.dev_result, 'REMAIN') = 'REMAIN'\r\nORDER BY req_name, r.reg_date, r.rp",
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
      "alias": "전체 현황 요약",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1850,
        "y": 225
      },
      "name": "Select3",
      "next": "Select4",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_summary",
      "sql": "SELECT SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END) AS total_cnt,\r\n       SUM(CASE WHEN s.dev_result = 'DONE' THEN 1 ELSE 0 END) AS done_cnt,\r\n       SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'REMAIN' THEN 1 ELSE 0 END) AS remain_cnt,\r\n       ROUND(SUM(CASE WHEN s.dev_result = 'DONE' THEN 1 ELSE 0 END) * 100\r\n             / NULLIF(SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END), 0)) AS done_rate,\r\n       SUM(CASE WHEN s.dev_result = 'EXCLUDE' THEN 1 ELSE 0 END) AS exclude_cnt\r\nFROM req_master r\r\nLEFT JOIN req_status s ON s.status = r.status",
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
      "alias": "상위 N + 기타 현황 요약",
      "description": "",
      "type": "sql",
      "position": {
        "x": 2520,
        "y": 225
      },
      "name": "Select4",
      "next": "end",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_rank",
      "sql": "WITH x AS (\r\n    SELECT COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\r\n           COUNT(*) AS remain_cnt\r\n    FROM req_master r\r\n    LEFT JOIN req_status s ON s.status = r.status\r\n    LEFT JOIN requester_map m ON m.requester = r.requester\r\n    LEFT JOIN requester_group g ON g.group_id = m.group_id\r\n    WHERE COALESCE(s.dev_result, 'REMAIN') = 'REMAIN'\r\n    GROUP BY COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1))\r\n), t AS (\r\n    SELECT x.req_name, x.remain_cnt,\r\n           ROW_NUMBER() OVER (ORDER BY x.remain_cnt DESC, x.req_name) AS rn\r\n    FROM x\r\n)\r\nSELECT t.req_name, t.remain_cnt, 'N' AS etc_yn, t.rn\r\nFROM t\r\nWHERE COALESCE(#{ds_option.top_n}, 5) >= t.rn\r\nUNION ALL\r\nSELECT CONCAT('기타 ', COUNT(*), '곳'), SUM(t.remain_cnt), 'Y', 999\r\nFROM t\r\nWHERE t.rn > COALESCE(#{ds_option.top_n}, 5)\r\nHAVING COUNT(*) > 0\r\nORDER BY rn",
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
    "datasets": [
      {
        "name": "ds_option",
        "description": "",
        "columns": [
          {
            "name": "top_n",
            "type": "INT",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": ""
      }
    ]
  },
  "response": {
    "variables": [],
    "datasets": [
      {
        "name": "ds_requester",
        "description": "",
        "columns": [
          {
            "name": "req_name",
            "type": "string",
            "datasize": 200,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "total_cnt",
            "type": "float",
            "datasize": 24,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "done_cnt",
            "type": "float",
            "datasize": 24,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "remain_cnt",
            "type": "float",
            "datasize": 24,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "done_rate",
            "type": "float",
            "datasize": 28,
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": ""
      },
      {
        "name": "ds_remain",
        "description": "",
        "columns": [
          {
            "name": "req_name",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "rp",
            "type": "string",
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
            "name": "status",
            "type": "string",
            "datasize": 20,
            "tablename": ""
          },
          {
            "name": "reg_date",
            "type": "date",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "requester",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          }
        ],
        "datasource": ""
      },
      {
        "name": "ds_summary",
        "description": "",
        "columns": [
          {
            "name": "total_cnt",
            "type": "float",
            "datasize": 24,
            "tablename": ""
          },
          {
            "name": "done_cnt",
            "type": "float",
            "datasize": 24,
            "tablename": ""
          },
          {
            "name": "remain_cnt",
            "type": "float",
            "datasize": 24,
            "tablename": ""
          },
          {
            "name": "done_rate",
            "type": "float",
            "datasize": 28,
            "tablename": ""
          },
          {
            "name": "exclude_cnt",
            "type": "float",
            "datasize": 24,
            "tablename": ""
          }
        ],
        "datasource": ""
      },
      {
        "name": "ds_rank",
        "description": "",
        "columns": [
          {
            "name": "req_name",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "remain_cnt",
            "type": "float",
            "datasize": 43,
            "tablename": ""
          },
          {
            "name": "etc_yn",
            "type": "string",
            "datasize": 1,
            "tablename": ""
          },
          {
            "name": "rn",
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