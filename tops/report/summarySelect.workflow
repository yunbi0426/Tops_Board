{
    "file": {
        "version": "1.0",
        "package": "tops.report",
        "name": "summarySelect",
        "alias": "summarySelect",
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
                "x": 3855,
                "y": 225
            }
        },
        {
            "alias": "전체 요약 가저오기",
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
            "alias": "요구처별 목록 가져오기",
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
            "output": "ds_requester",
            "sql": "SELECT '0' AS chk,\r\n       COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\r\n       SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END) AS total_cnt,\r\n       SUM(CASE WHEN s.dev_result = 'DONE' THEN 1 ELSE 0 END) AS done_cnt,\r\n       SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'REMAIN' THEN 1 ELSE 0 END) AS remain_cnt,\r\n       ROUND(SUM(CASE WHEN s.dev_result = 'DONE' THEN 1 ELSE 0 END) * 100\r\n             / NULLIF(SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END), 0)) AS done_rate,\r\n       SUM(CASE WHEN s.dev_result = 'EXCLUDE' THEN 1 ELSE 0 END) AS exclude_cnt\r\nFROM req_master r\r\nLEFT JOIN req_status s ON s.status = r.status\r\nLEFT JOIN requester_map m ON m.requester = r.requester\r\nLEFT JOIN requester_group g ON g.group_id = m.group_id\r\nGROUP BY COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1))\r\nHAVING SUM(CASE WHEN COALESCE(s.dev_result, 'REMAIN') = 'EXCLUDE' THEN 0 ELSE 1 END) > 0\r\nORDER BY remain_cnt DESC, req_name",
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
            "alias": "단계별 갯수 가져오기",
            "description": "",
            "type": "sql",
            "position": {
                "x": 1845,
                "y": 225
            },
            "name": "Select3",
            "next": "Select4",
            "usecurrentrow": true,
            "datasource": "tops_board",
            "target": "",
            "output": "ds_stage",
            "sql": "SELECT r.req_type,\r\n       SUM(CASE WHEN s.stage_no = 1 THEN 1 ELSE 0 END) AS st1,\r\n       SUM(CASE WHEN s.stage_no = 2 THEN 1 ELSE 0 END) AS st2,\r\n       SUM(CASE WHEN s.stage_no = 3 THEN 1 ELSE 0 END) AS st3,\r\n       SUM(CASE WHEN s.stage_no = 4 THEN 1 ELSE 0 END) AS st4,\r\n       SUM(CASE WHEN s.stage_no = 5 THEN 1 ELSE 0 END) AS st5,\r\n       SUM(CASE WHEN s.stage_no = 6 THEN 1 ELSE 0 END) AS st6,\r\n       SUM(CASE WHEN s.stage_no = 7 THEN 1 ELSE 0 END) AS st7,\r\n       COUNT(*) AS total_cnt\r\nFROM req_master r\r\nLEFT JOIN req_status s ON s.status = r.status\r\nGROUP BY r.req_type\r\nORDER BY total_cnt DESC",
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
            "alias": "그룹 기준으로 단계 별 갯수 가져오기",
            "description": "",
            "type": "sql",
            "position": {
                "x": 2515,
                "y": 225
            },
            "name": "Select4",
            "next": "Select5",
            "usecurrentrow": true,
            "datasource": "tops_board",
            "target": "",
            "output": "ds_group_stage",
            "sql": "SELECT COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\r\n       r.req_type,\r\n       SUM(CASE WHEN s.stage_no = 1 THEN 1 ELSE 0 END) AS st1,\r\n       SUM(CASE WHEN s.stage_no = 2 THEN 1 ELSE 0 END) AS st2,\r\n       SUM(CASE WHEN s.stage_no = 3 THEN 1 ELSE 0 END) AS st3,\r\n       SUM(CASE WHEN s.stage_no = 4 THEN 1 ELSE 0 END) AS st4,\r\n       SUM(CASE WHEN s.stage_no = 5 THEN 1 ELSE 0 END) AS st5,\r\n       SUM(CASE WHEN s.stage_no = 6 THEN 1 ELSE 0 END) AS st6,\r\n       SUM(CASE WHEN s.stage_no = 7 THEN 1 ELSE 0 END) AS st7,\r\n       COUNT(*) AS total_cnt\r\nFROM req_master r\r\nLEFT JOIN req_status s ON s.status = r.status\r\nLEFT JOIN requester_map m ON m.requester = r.requester\r\nLEFT JOIN requester_group g ON g.group_id = m.group_id\r\nGROUP BY COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)), r.req_type\r\nORDER BY req_name, total_cnt DESC",
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
            "alias": "잔여 항목",
            "description": "",
            "type": "sql",
            "position": {
                "x": 3185,
                "y": 225
            },
            "name": "Select5",
            "next": "end",
            "usecurrentrow": true,
            "datasource": "tops_board",
            "target": "",
            "output": "ds_remain",
            "sql": "SELECT COALESCE(g.display_name, SUBSTRING_INDEX(r.requester, ' -- ', 1)) AS req_name,\r\n       r.rp, r.req_type, r.status, r.title, r.reg_date, r.developer,\r\n       DATEDIFF(CURDATE(), r.reg_date) AS elapsed_days\r\nFROM req_master r\r\nLEFT JOIN req_status s ON s.status = r.status\r\nLEFT JOIN requester_map m ON m.requester = r.requester\r\nLEFT JOIN requester_group g ON g.group_id = m.group_id\r\nWHERE COALESCE(s.dev_result, 'REMAIN') = 'REMAIN'\r\nORDER BY req_name, elapsed_days DESC, r.rp",
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
                "name": "ds_summary",
                "description": "",
                "columns": [
                    {
                        "name": "total_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": "",
                        "isconstant": false
                    },
                    {
                        "name": "done_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": "",
                        "isconstant": false
                    },
                    {
                        "name": "remain_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": "",
                        "isconstant": false
                    },
                    {
                        "name": "done_rate",
                        "type": "bigdecimal",
                        "datasize": 28,
                        "tablename": "",
                        "isconstant": false
                    },
                    {
                        "name": "exclude_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": "",
                        "isconstant": false
                    }
                ],
                "datasource": ""
            },
            {
                "name": "ds_requester",
                "description": "",
                "columns": [
                    {
                        "name": "chk",
                        "type": "string",
                        "datasize": 1,
                        "tablename": ""
                    },
                    {
                        "name": "req_name",
                        "type": "string",
                        "datasize": 200,
                        "tablename": ""
                    },
                    {
                        "name": "total_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "done_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "remain_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "done_rate",
                        "type": "bigdecimal",
                        "datasize": 28,
                        "tablename": ""
                    },
                    {
                        "name": "exclude_cnt",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    }
                ],
                "datasource": ""
            },
            {
                "name": "ds_stage",
                "description": "",
                "columns": [
                    {
                        "name": "req_type",
                        "type": "string",
                        "datasize": 10,
                        "tablename": ""
                    },
                    {
                        "name": "st1",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st2",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st3",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st4",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st5",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st6",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st7",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "total_cnt",
                        "type": "bigdecimal",
                        "datasize": 21,
                        "tablename": ""
                    }
                ],
                "datasource": ""
            },
            {
                "name": "ds_group_stage",
                "description": "",
                "columns": [
                    {
                        "name": "req_name",
                        "type": "string",
                        "datasize": 200,
                        "tablename": ""
                    },
                    {
                        "name": "req_type",
                        "type": "string",
                        "datasize": 10,
                        "tablename": ""
                    },
                    {
                        "name": "st1",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st2",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st3",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st4",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st5",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st6",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "st7",
                        "type": "bigdecimal",
                        "datasize": 24,
                        "tablename": ""
                    },
                    {
                        "name": "total_cnt",
                        "type": "bigdecimal",
                        "datasize": 21,
                        "tablename": ""
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
                        "name": "req_type",
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
                        "name": "title",
                        "type": "string",
                        "datasize": 500,
                        "tablename": ""
                    },
                    {
                        "name": "reg_date",
                        "type": "date",
                        "datasize": 10,
                        "tablename": ""
                    },
                    {
                        "name": "developer",
                        "type": "string",
                        "datasize": 50,
                        "tablename": ""
                    },
                    {
                        "name": "elapsed_days",
                        "type": "int",
                        "datasize": 8,
                        "tablename": ""
                    }
                ],
                "datasource": ""
            }
        ]
    }
}