{
  "file": {
    "version": "1.0",
    "package": "tops.requirement",
    "name": "listSelect",
    "alias": "listSelect",
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
        "x": 1850,
        "y": 225
      }
    },
    {
      "alias": "전체 건수",
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
      "output": "ds_pageinfo",
      "sql": "SELECT CAST(#{ds_page.page_index} AS SIGNED)                  AS page_index,\r\n       CAST(#{ds_page.page_size}  AS SIGNED)                  AS page_size,\r\n       CAST(COUNT(*) AS SIGNED)                               AS total_cnt,\r\n       CAST(CEIL(COUNT(*) / #{ds_page.page_size}) AS SIGNED)  AS page_cnt\r\nFROM req_master r\r\nLEFT JOIN req_status s      ON s.status = r.status\r\nLEFT JOIN requester_map m   ON m.requester = r.requester\r\nLEFT JOIN requester_group g ON g.group_id = m.group_id\r\nWHERE (IFNULL(#{ds_search.rp}, '') = ''         OR r.rp LIKE CONCAT('%', #{ds_search.rp}, '%'))\r\n  AND (IFNULL(#{ds_search.title}, '') = ''      OR r.title LIKE CONCAT('%', #{ds_search.title}, '%'))\r\n  AND (IFNULL(#{ds_search.status}, '') = ''     OR FIND_IN_SET(r.status, #{ds_search.status}) > 0)\r\n  AND (IFNULL(#{ds_search.req_name}, '') = ''   OR COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) LIKE CONCAT('%', #{ds_search.req_name}, '%'))\r\n  AND (IFNULL(#{ds_search.req_type}, '') = ''   OR r.req_type = #{ds_search.req_type})\r\n  AND (IFNULL(#{ds_search.dev_result}, '') = '' OR FIND_IN_SET(COALESCE(s.dev_result, 'REMAIN'), #{ds_search.dev_result}) > 0)\r\n  AND (IFNULL(#{ds_search.reg_from}, '') = ''   OR r.reg_date >= #{ds_search.reg_from})\r\n  AND (IFNULL(#{ds_search.reg_to}, '') = ''     OR #{ds_search.reg_to} >= r.reg_date)",
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
      "alias": "SQL2",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1180,
        "y": 225
      },
      "name": "Select2",
      "next": "end",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_list",
      "sql": "SELECT t.*\r\nFROM (\r\n  SELECT ROW_NUMBER() OVER (ORDER BY r.reg_date DESC, r.rp DESC) AS rn,\r\n         r.rp,\r\n         r.rc,\r\n         r.status,\r\n         COALESCE(s.dev_result, 'REMAIN') AS dev_result,\r\n         r.req_type,\r\n         COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\r\n         r.product_module,\r\n         r.title,\r\n         r.developer,\r\n         r.reg_date\r\n  FROM req_master r\r\n  LEFT JOIN req_status s      ON s.status = r.status\r\n  LEFT JOIN requester_map m   ON m.requester = r.requester\r\n  LEFT JOIN requester_group g ON g.group_id = m.group_id\r\n  WHERE (IFNULL(#{ds_search.rp}, '') = ''         OR r.rp LIKE CONCAT('%', #{ds_search.rp}, '%'))\r\n    AND (IFNULL(#{ds_search.title}, '') = ''      OR r.title LIKE CONCAT('%', #{ds_search.title}, '%'))\r\n    AND (IFNULL(#{ds_search.status}, '') = ''     OR FIND_IN_SET(r.status, #{ds_search.status}) > 0)\r\n    AND (IFNULL(#{ds_search.req_name}, '') = ''   OR COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) LIKE CONCAT('%', #{ds_search.req_name}, '%'))\r\n    AND (IFNULL(#{ds_search.req_type}, '') = ''   OR r.req_type = #{ds_search.req_type})\r\n    AND (IFNULL(#{ds_search.dev_result}, '') = '' OR FIND_IN_SET(COALESCE(s.dev_result, 'REMAIN'), #{ds_search.dev_result}) > 0)\r\n    AND (IFNULL(#{ds_search.reg_from}, '') = ''   OR r.reg_date >= #{ds_search.reg_from})\r\n    AND (IFNULL(#{ds_search.reg_to}, '') = ''     OR #{ds_search.reg_to} >= r.reg_date)\r\n) t\r\nWHERE t.rn >  (#{ds_page.page_index} - 1) * #{ds_page.page_size}\r\n  AND #{ds_page.page_index} * #{ds_page.page_size} >= t.rn",
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
            "datasize": "50",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.status",
            "options": ""
          },
          {
            "name": "req_type",
            "type": "STRING",
            "datasize": 10,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.req_type"
          },
          {
            "name": "title",
            "type": "STRING",
            "datasize": 500,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.title"
          },
          {
            "name": "dev_result",
            "type": "STRING",
            "datasize": "50",
            "tablename": "req_status",
            "isconstant": false,
            "key": "tops_board.req_status.dev_result",
            "options": ""
          },
          {
            "name": "reg_from",
            "type": "STRING",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "reg_to",
            "type": "STRING",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "req_name",
            "type": "STRING",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": "tops_board"
      },
      {
        "name": "ds_page",
        "description": "",
        "columns": [
          {
            "name": "page_index",
            "type": "INT",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "page_size",
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
        "name": "ds_pageinfo",
        "description": "",
        "columns": [
          {
            "name": "page_index",
            "type": "int",
            "datasize": 2,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "page_size",
            "type": "int",
            "datasize": 2,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "total_cnt",
            "type": "bigdecimal",
            "datasize": 21,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "page_cnt",
            "type": "bigdecimal",
            "datasize": 20,
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": ""
      },
      {
        "name": "ds_list",
        "description": "",
        "columns": [
          {
            "name": "rn",
            "type": "bigdecimal",
            "datasize": 21,
            "tablename": ""
          },
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
            "name": "dev_result",
            "type": "string",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "req_type",
            "type": "string",
            "datasize": 10,
            "tablename": ""
          },
          {
            "name": "req_name",
            "type": "string",
            "datasize": 200,
            "tablename": ""
          },
          {
            "name": "product_module",
            "type": "string",
            "datasize": 100,
            "tablename": ""
          },
          {
            "name": "title",
            "type": "string",
            "datasize": 500,
            "tablename": ""
          },
          {
            "name": "developer",
            "type": "string",
            "datasize": 50,
            "tablename": ""
          },
          {
            "name": "reg_date",
            "type": "date",
            "datasize": 10,
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
        "name": "ds_page",
        "columns": [
          {
            "name": "page_index",
            "type": "INT",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "page_size",
            "type": "INT",
            "datasize": 100,
            "tablename": "",
            "isconstant": false
          }
        ],
        "rows": [
          {
            "_RowType_": "N",
            "page_index": "1",
            "page_size": "50"
          }
        ]
      }
    ]
  }
}