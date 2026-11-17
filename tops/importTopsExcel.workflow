{
  "file": {
    "version": "1.0",
    "package": "tops",
    "name": "importTopsExcel",
    "alias": "importTopsExcel"
  },
  "workflow": [
    {
      "name": "start",
      "type": "start",
      "alias": "Start",
      "description": "",
      "next": "ExcelImport1",
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
        "x": 5670,
        "y": 225
      }
    },
    {
      "alias": "Import Excel1",
      "description": "",
      "type": "excelimport",
      "position": {
        "x": 510,
        "y": 225
      },
      "name": "ExcelImport1",
      "next": "Select1",
      "sheetname": "",
      "filepassword": "",
      "output": "ds_excel"
    },
    {
      "alias": "saveUploadLog",
      "description": "",
      "type": "sql",
      "position": {
        "x": 1080,
        "y": 225
      },
      "name": "Select1",
      "next": "Select3",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_input",
      "output": "",
      "sql": "",
      "insertquery": "INSERT INTO upload_log\n(\n    base_date,\n    file_name,\n    row_count\n)\nVALUES\n(\n    #{ds_input.base_date},\n    #{ds_input.file_name},\n    0\n)",
      "updatequery": "",
      "deletequery": "",
      "executiontype": "rowtype",
      "modulename": "workflow.Save",
      "actiontype": "save",
      "sqltype": "",
      "usegeneratedkey": true,
      "generatedkeycolumn": "upload_id",
      "generatedkeyoutput": "#{vUploadId}",
      "_designer": {
        "mode": "sql",
        "activeTab": "update",
        "isCustomSql": true,
        "designerModel": {
          "targetTable": {
            "name": "upload_log"
          },
          "insert": {
            "columnMappings": [
              {
                "dbColumn": "upload_id",
                "datasetColumn": "",
                "use": true
              },
              {
                "dbColumn": "base_date",
                "datasetColumn": "base_date",
                "use": true
              },
              {
                "dbColumn": "uploader",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "file_name",
                "datasetColumn": "file_name",
                "use": true
              },
              {
                "dbColumn": "row_count",
                "datasetColumn": "",
                "use": true
              },
              {
                "dbColumn": "new_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "changed_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "uploaded_at",
                "datasetColumn": "",
                "use": true
              }
            ]
          },
          "update": {
            "setMappings": [
              {
                "dbColumn": "upload_id",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "base_date",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "uploader",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "file_name",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "row_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "new_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "changed_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "uploaded_at",
                "datasetColumn": "",
                "use": false
              }
            ],
            "keyMappings": [
              {
                "dbColumn": "upload_id",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "base_date",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "uploader",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "file_name",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "row_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "new_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "changed_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "uploaded_at",
                "datasetColumn": "",
                "use": false
              }
            ]
          },
          "delete": {
            "keyMappings": [
              {
                "dbColumn": "upload_id",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "base_date",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "uploader",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "file_name",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "row_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "new_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "changed_count",
                "datasetColumn": "",
                "use": false
              },
              {
                "dbColumn": "uploaded_at",
                "datasetColumn": "",
                "use": false
              }
            ]
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 840,
        "height": 825
      }
    },
    {
      "alias": "upsertReqMaster",
      "description": "",
      "type": "sql",
      "position": {
        "x": 2205,
        "y": 225
      },
      "name": "Select3",
      "next": "Select2",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_excel",
      "output": "",
      "sql": "",
      "insertquery": "INSERT INTO req_master (\r\n    rp, rc, status, req_type, bug_type, product_module, requester,\r\n    work_patch, deploy_patch, reg_user, worker, developer, inspector,\r\n    reg_date, last_work_date, inspect_date, title,\r\n    txt_reg, txt_receipt, txt_analysis, txt_design, txt_impl, txt_impl_detail, txt_inspect,\r\n    upload_id\r\n) VALUES (\r\n    #{ds_excel.rp}, #{ds_excel.rc}, #{ds_excel.status}, #{ds_excel.req_type}, #{ds_excel.bug_type},\r\n    #{ds_excel.product_module}, #{ds_excel.requester},\r\n    #{ds_excel.work_patch}, #{ds_excel.deploy_patch}, #{ds_excel.reg_user}, #{ds_excel.worker},\r\n    #{ds_excel.developer}, #{ds_excel.inspector},\r\n    DATE_ADD('1899-12-30', INTERVAL FLOOR(#{ds_excel.reg_date}) DAY),\r\n    CASE WHEN CAST(#{ds_excel.last_work_date} AS DECIMAL(12,4)) >= 1\r\n         THEN DATE_ADD('1899-12-30', INTERVAL FLOOR(#{ds_excel.last_work_date}) DAY) END,\r\n    CASE WHEN CAST(#{ds_excel.inspect_date} AS DECIMAL(12,4)) >= 1\r\n         THEN DATE_ADD('1899-12-30', INTERVAL FLOOR(#{ds_excel.inspect_date}) DAY) END,\r\n    #{ds_excel.title},\r\n    #{ds_excel.txt_reg}, #{ds_excel.txt_receipt}, #{ds_excel.txt_analysis}, #{ds_excel.txt_design},\r\n    #{ds_excel.txt_impl}, #{ds_excel.txt_impl_detail}, #{ds_excel.txt_inspect},\r\n    #{vUploadId}\r\n)\r\nON DUPLICATE KEY UPDATE\r\n    rc = VALUES(rc), status = VALUES(status), req_type = VALUES(req_type), bug_type = VALUES(bug_type),\r\n    product_module = VALUES(product_module), requester = VALUES(requester),\r\n    work_patch = VALUES(work_patch), deploy_patch = VALUES(deploy_patch), reg_user = VALUES(reg_user),\r\n    worker = VALUES(worker), developer = VALUES(developer), inspector = VALUES(inspector),\r\n    reg_date = VALUES(reg_date), last_work_date = VALUES(last_work_date), inspect_date = VALUES(inspect_date),\r\n    title = VALUES(title),\r\n    txt_reg = VALUES(txt_reg), txt_receipt = VALUES(txt_receipt), txt_analysis = VALUES(txt_analysis),\r\n    txt_design = VALUES(txt_design), txt_impl = VALUES(txt_impl), txt_impl_detail = VALUES(txt_impl_detail),\r\n    txt_inspect = VALUES(txt_inspect), upload_id = VALUES(upload_id)",
      "updatequery": "",
      "deletequery": "",
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
          "insert": {
            "columnMappings": []
          },
          "update": {
            "setMappings": [],
            "keyMappings": []
          },
          "delete": {
            "keyMappings": []
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 1245,
        "height": 870
      }
    },
    {
      "alias": "selectResult",
      "description": "",
      "type": "sql",
      "position": {
        "x": 4910,
        "y": 225
      },
      "name": "Select4",
      "next": "end",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "",
      "output": "ds_output",
      "sql": "SELECT upload_id, row_count, new_count, changed_count\r\nFROM upload_log\r\nWHERE upload_id = #{vUploadId}",
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
      "alias": "saveSnapshot",
      "description": "",
      "type": "sql",
      "position": {
        "x": 3570,
        "y": 225
      },
      "name": "Select2",
      "next": "Select5",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_excel",
      "output": "",
      "sql": "",
      "insertquery": "INSERT INTO req_snapshot (upload_id, rp, status)\r\nVALUES (#{vUploadId}, #{ds_excel.rp}, #{ds_excel.status})",
      "updatequery": "",
      "deletequery": "",
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
          "insert": {
            "columnMappings": []
          },
          "update": {
            "setMappings": [],
            "keyMappings": []
          },
          "delete": {
            "keyMappings": []
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 585
      }
    },
    {
      "alias": "updateCounts",
      "description": "",
      "type": "sql",
      "position": {
        "x": 4240,
        "y": 225
      },
      "name": "Select5",
      "next": "Select4",
      "usecurrentrow": true,
      "datasource": "tops_board",
      "target": "ds_input",
      "output": "",
      "sql": "",
      "insertquery": "UPDATE upload_log\r\nSET row_count = (\r\n        SELECT COUNT(*) FROM req_snapshot\r\n        WHERE upload_id = #{vUploadId}\r\n    ),\r\n    new_count = (\r\n        SELECT COUNT(*) FROM req_snapshot c\r\n        WHERE c.upload_id = #{vUploadId}\r\n          AND NOT EXISTS (\r\n              SELECT 1 FROM req_snapshot p\r\n              WHERE p.rp = c.rp\r\n                AND p.upload_id = (SELECT MAX(upload_id) FROM req_snapshot WHERE #{vUploadId} > upload_id)\r\n          )\r\n    ),\r\n    changed_count = (\r\n        SELECT COUNT(*) FROM req_snapshot c\r\n        JOIN req_snapshot p\r\n          ON p.rp = c.rp\r\n         AND p.upload_id = (SELECT MAX(upload_id) FROM req_snapshot WHERE #{vUploadId} > upload_id)\r\n        WHERE c.upload_id = #{vUploadId}\r\n          AND c.status != p.status\r\n    )\r\nWHERE upload_id = #{vUploadId}",
      "updatequery": "",
      "deletequery": "",
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
          "insert": {
            "columnMappings": []
          },
          "update": {
            "setMappings": [],
            "keyMappings": []
          },
          "delete": {
            "keyMappings": []
          }
        },
        "generatedSqlExpanded": true
      },
      "nodesize": {
        "width": 550,
        "height": 585
      }
    }
  ],
  "comments": [],
  "localvariables": {
    "variables": [
      {
        "name": "vUploadId",
        "description": "",
        "defaultvalue": ""
      }
    ],
    "datasets": [
      {
        "name": "ds_excel",
        "description": "",
        "columns": [
          {
            "name": "rc",
            "type": "STRING",
            "datasize": 10,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.rc"
          },
          {
            "name": "rp",
            "type": "STRING",
            "datasize": 10,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.rp",
            "options": ""
          },
          {
            "name": "status",
            "type": "STRING",
            "datasize": 20,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.status"
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
            "name": "bug_type",
            "type": "STRING",
            "datasize": 20,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.bug_type"
          },
          {
            "name": "product_module",
            "type": "STRING",
            "datasize": 100,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.product_module"
          },
          {
            "name": "requester",
            "type": "STRING",
            "datasize": 200,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.requester"
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
            "name": "occur_patch",
            "type": "STRING",
            "datasize": "50",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "work_patch",
            "type": "STRING",
            "datasize": 50,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.work_patch"
          },
          {
            "name": "deploy_patch",
            "type": "STRING",
            "datasize": 50,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.deploy_patch"
          },
          {
            "name": "urgent",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "on_schedule",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "f_runtime",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "f_html5",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "f_mobile",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "f_tool",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "f_server",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "f_manual",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "f_install",
            "type": "STRING",
            "datasize": "10",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "reject_type",
            "type": "STRING",
            "datasize": "20",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "hope_date",
            "type": "STRING",
            "datasize": "30",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "reg_date",
            "type": "STRING",
            "datasize": "30",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.reg_date"
          },
          {
            "name": "last_work_date",
            "type": "STRING",
            "datasize": "30",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.last_work_date"
          },
          {
            "name": "reg_user",
            "type": "STRING",
            "datasize": "50",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.reg_user",
            "options": ""
          },
          {
            "name": "worker",
            "type": "STRING",
            "datasize": "50",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.worker"
          },
          {
            "name": "analyst",
            "type": "STRING",
            "datasize": "50",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "developer",
            "type": "STRING",
            "datasize": 50,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.developer"
          },
          {
            "name": "reviewer",
            "type": "STRING",
            "datasize": "50",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "inspector",
            "type": "STRING",
            "datasize": "50",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.inspector"
          },
          {
            "name": "inspect_date",
            "type": "STRING",
            "datasize": "30",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.inspect_date"
          },
          {
            "name": "txt_reg",
            "type": "STRING",
            "datasize": "10000",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.txt_reg"
          },
          {
            "name": "txt_receipt",
            "type": "STRING",
            "datasize": "10000",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.txt_receipt"
          },
          {
            "name": "txt_analysis",
            "type": "STRING",
            "datasize": 32767,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.txt_analysis"
          },
          {
            "name": "txt_design",
            "type": "STRING",
            "datasize": 32767,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.txt_design"
          },
          {
            "name": "txt_impl",
            "type": "STRING",
            "datasize": 32767,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.txt_impl"
          },
          {
            "name": "txt_impl_detail",
            "type": "STRING",
            "datasize": "10000",
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.txt_impl_detail"
          },
          {
            "name": "txt_manual",
            "type": "STRING",
            "datasize": "10000",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "txt_inspect",
            "type": "STRING",
            "datasize": 32767,
            "tablename": "req_master",
            "isconstant": false,
            "key": "tops_board.req_master.txt_inspect"
          },
          {
            "name": "txt_deploy",
            "type": "STRING",
            "datasize": "10000",
            "tablename": "",
            "isconstant": false
          }
        ],
        "datasource": "tops_board"
      }
    ]
  },
  "request": {
    "variables": [],
    "datasets": [
      {
        "name": "ds_input",
        "description": "",
        "columns": [
          {
            "name": "base_date",
            "type": "DATE",
            "datasize": 100,
            "tablename": "",
            "isconstant": false,
            "key": "tops_board.upload_log.base_date",
            "required": "true"
          },
          {
            "name": "file_name",
            "type": "STRING",
            "datasize": "200",
            "tablename": "",
            "isconstant": false,
            "options": "",
            "key": "tops_board.upload_log.file_name"
          }
        ],
        "datasource": "tops_board"
      },
      {
        "name": "_FileMetaInfo",
        "description": "",
        "columns": [
          {
            "name": "filekey",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "filename",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "filesize",
            "type": "INT",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "fileext",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "contenttype",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "nailurl",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "storedfilename",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "filepath",
            "type": "STRING",
            "datasize": "1024",
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
        "name": "ds_output",
        "description": "",
        "columns": [
          {
            "name": "row_count",
            "type": "INT",
            "datasize": 10,
            "tablename": "upload_log",
            "isconstant": false,
            "key": "tops_board.upload_log.row_count"
          },
          {
            "name": "new_count",
            "type": "INT",
            "datasize": 10,
            "tablename": "upload_log",
            "isconstant": false,
            "key": "tops_board.upload_log.new_count"
          },
          {
            "name": "changed_count",
            "type": "INT",
            "datasize": 10,
            "tablename": "upload_log",
            "isconstant": false,
            "key": "tops_board.upload_log.changed_count"
          },
          {
            "name": "upload_id",
            "type": "INT",
            "datasize": 10,
            "tablename": "upload_log",
            "isconstant": false,
            "key": "tops_board.upload_log.upload_id"
          }
        ],
        "datasource": "tops_board"
      }
    ]
  },
  "_test": {
    "datasets": [
      {
        "name": "ds_input",
        "columns": [
          {
            "name": "base_date",
            "type": "DATE",
            "datasize": 100,
            "tablename": "",
            "isconstant": false,
            "key": "tops_board.upload_log.base_date",
            "required": "true"
          },
          {
            "name": "file_name",
            "type": "STRING",
            "datasize": "200",
            "tablename": "",
            "isconstant": false,
            "options": "",
            "key": "tops_board.upload_log.file_name"
          }
        ],
        "rows": [
          {
            "base_date": "20261117",
            "_RowType_": "I",
            "file_name": "ExcelExportFile.xlsx"
          }
        ]
      },
      {
        "name": "_FileMetaInfo",
        "columns": [
          {
            "name": "filekey",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "filename",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "filesize",
            "type": "INT",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "fileext",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "contenttype",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "nailurl",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "storedfilename",
            "type": "STRING",
            "datasize": "255",
            "tablename": "",
            "isconstant": false
          },
          {
            "name": "filepath",
            "type": "STRING",
            "datasize": "1024",
            "tablename": "",
            "isconstant": false
          }
        ],
        "rows": [
          {
            "_RowType_": "N",
            "filekey": "e1347d91-8b94-4c28-8ec7-55dfdf9275a6.xlsx"
          }
        ]
      }
    ]
  }
}