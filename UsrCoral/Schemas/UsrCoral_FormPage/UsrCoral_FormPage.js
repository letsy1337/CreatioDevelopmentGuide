define("UsrCoral_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTab",
				"values": {
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrCoral"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "67187cca-7621-4f54-9e91-ec4647babc91",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_dnpu0qp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_dnpu0qp_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RunAvgTicketPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(RunAvgTicketPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAvgTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "CoralYachtId"
						}
					},
					"icon": "process-button-icon"
				},
				"parentName": "Button_dnpu0qp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CallMaxPriceWebServiceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CallMaxPriceWebServiceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceRequest"
					},
					"icon": "bars-button-icon"
				},
				"parentName": "Button_dnpu0qp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "flag-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_fgs6kur",
					"labelPosition": "auto",
					"control": "$PDS_UsrPrice_fgs6kur"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "RegNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn11_eyetk3m",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn11_eyetk3m",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_luam1mi",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_luam1mi",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_62q91mj",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_62q91mj",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_4f65cbl",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_4f65cbl_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "City",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_xegwzdy",
					"labelPosition": "auto",
					"control": "$PDS_UsrDriveType_xegwzdy",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtStatus",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_7k7qq3l",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_7k7qq3l",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_2vbn0ft",
					"labelPosition": "auto",
					"control": "$PDS_UsrLength_2vbn0ft",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_aa2rpyp",
					"labelPosition": "auto",
					"control": "$PDS_UsrCaptain_aa2rpyp",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_s6xk7fp",
					"labelPosition": "auto",
					"control": "$PDS_UsrCrewCount_s6xk7fp"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_ezxl2lb",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_ezxl2lb",
					"listActions": [],
					"showValueAsLink": false,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_2fh09tb",
					"labelPosition": "auto",
					"control": "$PDS_UsrPassengersCount_2fh09tb"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_UsrManagerEmail_qx3dhom",
					"control": "$PDS_UsrManagerEmail_qx3dhom",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(ManagerEmail_caption)#",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_96oj69i",
					"labelPosition": "auto",
					"control": "$PDS_UsrTicketPrice_96oj69i",
					"visible": false,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_bufaibd",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_bufaibd",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "CategoryMultiSelect",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(CategoryMultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrCategoryInCoralYacht",
					"selectColumnName": "UsrCoraYachtInCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_3m40w2s",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_3m40w2s_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_ht6rggs",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3m40w2s",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_3ec9ma8",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_ht6rggs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_y5mnsy5",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_y5mnsy5_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrCoralRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentCoralYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_3ec9ma8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_wfvhvyr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_wfvhvyr_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_8oworipDS"
						}
					}
				},
				"parentName": "FlexContainer_3ec9ma8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_yqwy8yx",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_yqwy8yx_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_3ec9ma8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_15espqz",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_15espqz_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_8oworip"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yqwy8yx",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_ubbccs7",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_ubbccs7_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrCoralRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yqwy8yx",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_tjy4yqf",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_tjy4yqf_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_tjy4yqf_GridDetail_8oworip",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_8oworip"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_tjy4yqf_SearchValue",
							"GridDetailSearchFilter_tjy4yqf_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_3ec9ma8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_1td52ub",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_3m40w2s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_8oworip",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_8oworip",
					"primaryColumnName": "GridDetail_8oworipDS_Id",
					"columns": [
						{
							"id": "e0271d4d-913a-8558-0da4-514759be8706",
							"code": "GridDetail_8oworipDS_UsrRentalStartDate",
							"caption": "#ResourceString(GridDetail_8oworipDS_UsrRentalStartDate)#",
							"dataValueType": 8,
							"width": 147
						},
						{
							"id": "72ee984d-b3b5-fc77-d3d8-79119533cd7a",
							"code": "GridDetail_8oworipDS_UsrRentalEndDate",
							"caption": "#ResourceString(GridDetail_8oworipDS_UsrRentalEndDate)#",
							"dataValueType": 8,
							"width": 131
						},
						{
							"id": "65f1ea70-c483-5c3b-26af-f67d16d569d1",
							"code": "GridDetail_8oworipDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_8oworipDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 152
						},
						{
							"id": "4d605050-2272-783d-44be-302f6d35f625",
							"code": "GridDetail_8oworipDS_UsrManager",
							"caption": "#ResourceString(GridDetail_8oworipDS_UsrManager)#",
							"dataValueType": 10,
							"width": 153
						},
						{
							"id": "ec15bd67-bf50-4145-5e43-0edcb5d5fcdb",
							"code": "GridDetail_8oworipDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_8oworipDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_1td52ub",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MoreDataTabContainer",
				"values": {
					"type": "crt.TabContainer",
					"items": [],
					"caption": "#ResourceString(MoreDataTabContainer_caption)#",
					"iconPosition": "only-text",
					"visible": false
				},
				"parentName": "Tabs",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_a1kse0o",
				"values": {
					"type": "crt.GridContainer",
					"items": [],
					"rows": "minmax(32px, max-content)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					}
				},
				"parentName": "MoreDataTabContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_fgs6kur": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 20,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_xegwzdy": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrStatus_7k7qq3l": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrLength_2vbn0ft": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 3,
									"message": "#ResourceString(LengthCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCrewCount_s6xk7fp": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(CrewCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPassengersCount_2fh09tb": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrManager_ezxl2lb": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrCaptain_aa2rpyp": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrComment_bufaibd": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrColumn11_eyetk3m": {
						"modelConfig": {
							"path": "PDS.UsrColumn11"
						}
					},
					"PDS_UsrCountry_luam1mi": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_62q91mj": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrTicketPrice_96oj69i": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_qx3dhom": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_qx3dhom"
						}
					},
					"GridDetail_8oworip": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_8oworipDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_tjy4yqf_GridDetail_8oworip",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_8oworipDS_UsrRentalStartDate": {
									"modelConfig": {
										"path": "GridDetail_8oworipDS.UsrRentalStartDate"
									}
								},
								"GridDetail_8oworipDS_UsrRentalEndDate": {
									"modelConfig": {
										"path": "GridDetail_8oworipDS.UsrRentalEndDate"
									}
								},
								"GridDetail_8oworipDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_8oworipDS.UsrCustomer"
									}
								},
								"GridDetail_8oworipDS_UsrManager": {
									"modelConfig": {
										"path": "GridDetail_8oworipDS.UsrManager"
									}
								},
								"GridDetail_8oworipDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_8oworipDS.CreatedOn"
									}
								},
								"GridDetail_8oworipDS_Id": {
									"modelConfig": {
										"path": "GridDetail_8oworipDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_8oworipDS": [
							{
								"attributePath": "UsrParentCoralYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrCoral",
							"attributes": {
								"UsrManagerEmail_qx3dhom": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_8oworipDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrCoralRental",
							"attributes": {
								"UsrRentalStartDate": {
									"path": "UsrRentalStartDate"
								},
								"UsrRentalEndDate": {
									"path": "UsrRentalEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrManager": {
									"path": "UsrManager"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_fgs6kur;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_bufaibd = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_fgs6kur' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassengersCount_2fh09tb' ) { 		// or Passenger count changed
						var price = await request.$context.PDS_UsrPrice_fgs6kur;
						var passengers = await request.$context.PDS_UsrPassengersCount_2fh09tb;
						var ticket_price = price / passengers;
						request.$context.PDS_UsrTicketPrice_96oj69i = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "usr.RunWebServiceRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Run web service button works...");

					// get id from drive type lookup type object
					var typeObject = await request.$context.PDS_UsrDriveType_xegwzdy;
					var driveTypeId = "";
					if (typeObject) {
						driveTypeId = typeObject.value;
					}
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();/* Specify the URL to run web service method. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "YachtService";
					const methodName = "GetMaxPriceByDriveTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					
					//const endpoint = "http://localhost/LocalDEV/0/rest/YachtService/GetMaxPriceByDriveTypeId";
					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
					var params = {
						driveTypeId: driveTypeId
					};
					const response = await httpClientService.post(endpoint, params);
					
					console.log("response max price = " + response.body.GetMaxPriceByDriveTypeIdResult);
					
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});