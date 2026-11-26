{
    "file": {
        "version": "1.0",
        "package": "tops.requirement",
        "name": "reqStatusSelect",
        "alias": "reqStatusSelect",
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
            "sql": "SELECT *\nFROM req_status R\nORDER BY\n    R.sort_no ASC",
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
                    "selectedColumns": [],
                    "joins": [],
                    "conditions": [],
                    "orderBy": [
                        {
                            "column": "R.sort_no",
                            "direction": "ASC",
                            "order": 0
                        }
                    ],
                    "tableSearch": "",
                    "tablePanelsExpanded": true,
                    "conditionLogical": "AND",
                    "selectedTable": "req_status",
                    "baseTable": {
                        "name": "req_status",
                        "alias": "R"
                    },
                    "selectAllColumns": true
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
                        "name": "status",
                        "type": "string",
                        "datasize": 20,
                        "tablename": ""
                    },
                    {
                        "name": "sort_no",
                        "type": "int",
                        "datasize": 11,
                        "tablename": ""
                    }
                ],
                "datasource": ""
            }
        ]
    }
}