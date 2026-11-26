(function()
{
	return function()
	{

		nexacro._setCSSMaps(
		{
			"hscrollbar" : 
			{
				"parent" : 
				{
					"Grid" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("2px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("2px")
							}
						}
					}
				}
			},
			"monthitem" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"color" : nexacro.ColorObject("#FFFFFF")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					}
				}
			},
			"spinedit" : 
			{
				"parent" : 
				{
					"SpinControl" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 6px 0px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 6px 0px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 6px 0px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"nulltext" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 6px 0px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					},
					"Spin" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							},
							"nulltext" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							}
						}
					},
					"monthspin" : 
					{
						"parent" : 
						{
							"head" : 
							{
								"parent" : 
								{
									"datepicker" : 
									{
										"parent" : 
										{
											"Calendar" : 
											{
												"class" : [
												{
													"cal_MF_Cal" : 
													{
														"self" : 
														{
															"mouseover" : 
															{
																"padding" : nexacro.PaddingObject("2px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
															},
															"focused" : 
															{
																"padding" : nexacro.PaddingObject("2px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
															},
															"enabled" : 
															{
																"padding" : nexacro.PaddingObject("2px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
															}
														}
													}
												}
												]
											}
										}
									}
								}
							}
						}
					},
					"yearspin" : 
					{
						"parent" : 
						{
							"head" : 
							{
								"parent" : 
								{
									"datepicker" : 
									{
										"parent" : 
										{
											"Calendar" : 
											{
												"class" : [
												{
													"cal_MF_Cal" : 
													{
														"self" : 
														{
															"mouseover" : 
															{
																"padding" : nexacro.PaddingObject("2px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
															},
															"focused" : 
															{
																"padding" : nexacro.PaddingObject("2px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
															},
															"enabled" : 
															{
																"padding" : nexacro.PaddingObject("2px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
															}
														}
													}
												}
												]
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"trailingbutton" : 
			{
				"parent" : 
				{
					"box" : 
					{
						"parent" : 
						{
							"TextField" : 
							{
								"self" : 
								{
									"valid" : 
									{
									},
									"invalid" : 
									{
									}
								}
							}
						}
					}
				}
			},
			"Edit" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
						"color" : nexacro.ColorObject("#18181B")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							}
						}
					}
				},
				{
					"error" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"nulltext" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							}
						}
					}
				},
				{
					"output" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							}
						}
					}
				},
				{
					"edt_LOGIN_ID" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #404040")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #404040")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED"),
								"padding" : nexacro.PaddingObject("0px 10px 0px 80px"),
								"color" : nexacro.ColorObject("#18181B")
							}
						}
					}
				},
				{
					"edt_LOGIN_PW" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #404040")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #404040")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED"),
								"padding" : nexacro.PaddingObject("0px 10px 0px 80px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"edt_LF_MenuSearch" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 5px 0px 0px")
							}
						}
					}
				}
				]
			},
			"DatePickerGroupControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none"),
						"padding" : nexacro.PaddingObject("0px")
					}
				}
			},
			"startdate" : 
			{
				"parent" : 
				{
					"PickerHeadLineControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
							}
						}
					}
				}
			},
			"MaskEdit" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 6px 0px 0px"),
						"color" : nexacro.ColorObject("#18181B")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							}
						}
					}
				},
				{
					"error" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"nulltext" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							}
						}
					}
				},
				{
					"output" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 0px")
							}
						}
					}
				}
				]
			},
			"monthstatic" : 
			{
				"parent" : 
				{
					"head" : 
					{
						"parent" : 
						{
							"datepicker" : 
							{
								"parent" : 
								{
									"Calendar" : 
									{
										"class" : [
										{
											"cal_MF_Cal" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#18181B"),
														"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
													}
												}
											}
										}
										]
									}
								}
							}
						}
					}
				}
			},
			"multicombotext" : 
			{
				"parent" : 
				{
					"MultiCombo" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"cellexpandbutton" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							}
						}
					},
					"cell" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"class" : [
												{
													"grd_LF_MenuList" : 
													{
														"self" : 
														{
															"mouseover" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
															},
															"focused" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
															},
															"enabled" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
															},
															"selected" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
															}
														}
													}
												}
												]
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"progressbartext" : 
			{
				"parent" : 
				{
					"ProgressBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					},
					"ProgressBar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 8px 0px 8px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				}
			},
			"FileDownload" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"pushed" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
						"color" : nexacro.ColorObject("#18181B"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					}
				}
			},
			"Button" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8"),
						"color" : nexacro.ColorObject("#18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
						"color" : nexacro.ColorObject("#18181B"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"pushed" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8"),
						"color" : nexacro.ColorObject("#18181B")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
						"color" : nexacro.ColorObject("#18181B"),
						"letterSpacing" : nexacro.CSSValueObject("-0.3px"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					},
					"selected" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8"),
						"color" : nexacro.ColorObject("#18181B")
					}
				},
				"class" : [
				{
					"btn_WF_Page" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#18181B")
							}
						}
					}
				},
				{
					"btn_WF_PageOn" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"btn_WF_TextReset" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_TextResetO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_TextReset.png')"),
								"iconPosition" : "left",
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"pushed" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_TextResetO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_TextReset.png')"),
								"iconPosition" : "left",
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"btn_LOGIN_Start" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"letterSpacing" : nexacro.CSSValueObject("0px"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"letterSpacing" : nexacro.CSSValueObject("0px"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"letterSpacing" : nexacro.CSSValueObject("0px"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"letterSpacing" : nexacro.CSSValueObject("0px"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"btn_TF_Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#A1A1AA"),
								"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#A1A1AA"),
								"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"btn_TF_Logout" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_TF_User" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_TF_Setting" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_TF_MenuPrev" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid RGBA(255,255,255,0.05)")
							}
						}
					}
				},
				{
					"btn_TF_MenuNext" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid RGBA(255,255,255,0.05)")
							}
						}
					}
				},
				{
					"btn_LF_Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Menu.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuD.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Menu.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							}
						}
					}
				},
				{
					"btn_LF_MenuS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_MenuS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							}
						}
					}
				},
				{
					"btn_LF_Fav" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Fav.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavD.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Fav.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							}
						}
					}
				},
				{
					"btn_LF_FavS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_FavS.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 1px 8px")
							}
						}
					}
				},
				{
					"btn_LF_Sch" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Sch.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,0px none,0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Sch.png')")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_SchD.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Sch.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,0px none,0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Sch.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_LF_Sch.png')")
							}
						}
					}
				},
				{
					"btn_RF_Weather" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_WeatherS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Weather.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_Schedule" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_ScheduleS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Schedule.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_Approval" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_ApprovalS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Approval.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_Noti" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_NotiS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Noti.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_Sales" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#71717A"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_RF_SalesS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_RF_Sales.png')"),
								"iconPosition" : "top",
								"textPadding" : nexacro.PaddingObject("10px 0px 0px 0px")
							}
						}
					}
				},
				{
					"btn_MDI_Close" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					}
				},
				{
					"btn_MDI_Open" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					}
				},
				{
					"btn_MDI_Home" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					}
				},
				{
					"btn_MDI_HomeS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					}
				},
				{
					"btn_MDI_Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #EDEDED,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"btn_MDI_MenuS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #18181B,0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,1px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 40px 0px 20px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"btn_MDI_TabClose" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					}
				},
				{
					"btn_MF_More" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_WF_Bookmark" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				},
				{
					"btn_WF_BookmarkS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px")
							}
						}
					}
				},
				{
					"btn_WF_EdiSch" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
							}
						}
					}
				},
				{
					"btn_WF_Expand" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Expand.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Expand.png')")
							}
						}
					}
				},
				{
					"btn_WF_Collapse" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Collapse.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED"),
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Collapse.png')")
							}
						}
					}
				},
				{
					"btn_WF_Up" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleUpN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleUpD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleUpN.png')")
							}
						}
					}
				},
				{
					"btn_WF_Down" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleDownN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleDownD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleDownN.png')")
							}
						}
					}
				},
				{
					"btn_WF_Left" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleLeftN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleLeftD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleLeftN.png')")
							}
						}
					}
				},
				{
					"btn_WF_Right" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleRightN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleRightD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_ShttleRightN.png')")
							}
						}
					}
				},
				{
					"btn_WF_PageL" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagePrevN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagePrevD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PagePrevN.png')")
							}
						}
					}
				},
				{
					"btn_WF_PageR" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageNextN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageNextD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageNextN.png')")
							}
						}
					}
				},
				{
					"btn_WF_PageP" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageDoublePrevN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageDoublePrevD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageDoublePrevN.png')")
							}
						}
					}
				},
				{
					"btn_WF_PageN" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageDoubleNextN.png')")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageDoubleNextD.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_PageDoubleNextN.png')")
							}
						}
					}
				},
				{
					"btn_WF_GridBtn" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
								"color" : nexacro.ColorObject("#18181B"),
								"letterSpacing" : nexacro.CSSValueObject("-0.3px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							}
						}
					}
				},
				{
					"btn_POP_Cancel" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #D4D4D8"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Bold\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #D4D4D8"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #D4D4D8"),
								"color" : nexacro.ColorObject("#18181B")
							}
						}
					}
				},
				{
					"btn_WF_Search" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D4D4D8"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							}
						}
					}
				},
				{
					"btn_POP_Confirm" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D4D4D8"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							}
						}
					}
				},
				{
					"btn_WF_Crud" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D4D4D8"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							}
						}
					}
				},
				{
					"btn_Primary" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #D4D4D8"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46"),
								"color" : nexacro.ColorObject("#FFFFFF")
							}
						}
					}
				},
				{
					"btn_WF_Add" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Add.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Add.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
							}
						}
					}
				},
				{
					"btn_WF_Delete" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Delete.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
							}
						}
					}
				},
				{
					"btn_WF_Save" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Save.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 10px 1px 10px"),
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Save.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 3px")
							}
						}
					}
				},
				{
					"btn_Ghost" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#71717A")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#71717A")
							}
						}
					}
				},
				{
					"btn_TF_MenuS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #FFFFFF,0px none"),
								"padding" : nexacro.PaddingObject("0px 16px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"btn_TF_3Depth" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							}
						}
					}
				},
				{
					"btn_TF_3DepthS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 7px")
							}
						}
					}
				},
				{
					"btn_WF_PageS" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				}
				]
			},
			"cancelbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"datetimepicker" : 
					{
						"parent" : 
						{
							"DateField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 10px 0px 10px"),
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					}
				}
			},
			"delimiter" : 
			{
				"parent" : 
				{
					"TimePickerControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				}
			},
			"HScrollBarControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED,0px none,0px none,0px none"),
						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED,0px none,0px none,0px none")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED,0px none,0px none,0px none"),
						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
					}
				}
			},
			"ProgressBarControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"startsubdate" : 
			{
				"parent" : 
				{
					"PickerHeadLineControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				}
			},
			"spinupbutton" : 
			{
				"parent" : 
				{
					"SpinControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							}
						}
					},
					"Spin" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							}
						}
					}
				}
			},
			"treeitembutton" : 
			{
				"parent" : 
				{
					"celltreeitem" : 
					{
						"parent" : 
						{
							"GridCellControl" : 
							{
								"self" : 
								{
									"expand" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_TreeExpand.png')")
									},
									"collapse" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/btn_WF_TreeColl.png')")
									}
								}
							}
						}
					}
				}
			},
			"splitline" : 
			{
				"parent" : 
				{
					"TimePickerGroupControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					},
					"DatePickerGroupControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					},
					"PickerHeadLineControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				}
			},
			"datepicker" : 
			{
				"parent" : 
				{
					"datepickergroup" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none")
									}
								}
							}
						}
					},
					"Calendar" : 
					{
						"class" : [
						{
							"cal_MF_Cal" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#18181B")
									}
								}
							}
						}
						]
					}
				}
			},
			"incbutton" : 
			{
				"parent" : 
				{
					"HScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HincO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HincO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HincD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HincO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hinc.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HincO.png')")
							}
						}
					},
					"vscrollbar" : 
					{
						"parent" : 
						{
							"Grid" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								},
								"class" : [
								{
									"grd_LF_Menu" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"focused" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"selected" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											}
										}
									}
								},
								{
									"grd_LF_MenuList" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"focused" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"selected" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											}
										}
									}
								},
								{
									"grd_MF_Notice" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"focused" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"selected" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											}
										}
									}
								},
								{
									"grd_MF_Todo" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("none")
											}
										}
									}
								}
								]
							}
						}
					},
					"hscrollbar" : 
					{
						"parent" : 
						{
							"Grid" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								}
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VincO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VincO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VincD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VincO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vinc.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VincO.png')")
							}
						}
					}
				}
			},
			"StepControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : nexacro.PaddingObject("0px 0px 20px 0px")
					}
				}
			},
			"groupboxtitle" : 
			{
				"parent" : 
				{
					"GroupBox" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"textPadding" : nexacro.PaddingObject("0px 5px 0px 5px"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				}
			},
			"enddate" : 
			{
				"parent" : 
				{
					"PickerHeadLineControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
							}
						}
					}
				}
			},
			"selection" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"datepicker" : 
							{
								"parent" : 
								{
									"datepickergroup" : 
									{
										"parent" : 
										{
											"DateRangePicker" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"border" : nexacro.BorderObject("1px solid #EDEDED")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"timetabbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,1px solid #E4E4E7"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/dtf_WF_TimeDropO.png')")
							}
						}
					}
				}
			},
			"MultiCombo" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#18181B")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							}
						}
					}
				}
				]
			},
			"tabbuttonitem" : 
			{
				"parent" : 
				{
					"Tab" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none"),
								"padding" : nexacro.PaddingObject("8px 4px 8px 4px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"mouseover_selected" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #18181B,0px none"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none"),
								"padding" : nexacro.PaddingObject("8px 4px 8px 4px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,2px solid #18181B,0px none"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						},
						"class" : [
						{
							"tab_WF_RecordDetail" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#2C2C2A")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#5F5E5A"),
										"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"color" : nexacro.ColorObject("#B4B2A9")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px"),
										"color" : nexacro.ColorObject("#5F5E5A"),
										"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
									},
									"selected" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,2px solid #2C2C2A,0px none"),
										"color" : nexacro.ColorObject("#2C2C2A"),
										"font" : nexacro.FontObject("700 13px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
						]
					}
				}
			},
			"multicombotagbox" : 
			{
				"parent" : 
				{
					"MultiCombo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("2px 5px 2px 6px")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("2px 5px 2px 6px")
							}
						}
					}
				}
			},
			"detail" : 
			{
				"parent" : 
				{
					"ListView" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#EDEDED")
							}
						}
					}
				}
			},
			"progressbaritem" : 
			{
				"parent" : 
				{
					"ProgressBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					},
					"ProgressBar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"fileuploaditembutton" : 
			{
				"parent" : 
				{
					"fileuploaditem" : 
					{
						"parent" : 
						{
							"FileUpload" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #E4E4E7"),
										"color" : nexacro.ColorObject("#A1A1AA")
									},
									"pushed" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #E4E4E7"),
										"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
									},
									"selected" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									}
								}
							}
						}
					}
				}
			},
			"ListBox" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"comboedit" : 
			{
				"parent" : 
				{
					"Combo" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"nulltext" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							},
							"nulltext" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							}
						}
					}
				}
			},
			"postfixtext" : 
			{
				"parent" : 
				{
					"box" : 
					{
						"parent" : 
						{
							"TextField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 24px 0px 0px"),
										"color" : nexacro.ColorObject("#A1A1AA"),
										"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
									}
								}
							}
						}
					}
				}
			},
			"Spin" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#18181B")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							}
						}
					}
				},
				{
					"error" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							}
						}
					}
				},
				{
					"output" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
				]
			},
			"TagBoxControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
					}
				}
			},
			"Grid" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#18181B"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					}
				},
				"class" : [
				{
					"grd_LF_Menu" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED,0px none,0px none,0px none")
							}
						}
					}
				},
				{
					"grd_LF_MenuList" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #EDEDED,0px none")
							}
						}
					}
				},
				{
					"grd_MF_Notice" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#FFFFFF")
							}
						}
					}
				},
				{
					"grd_MF_Todo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"color" : nexacro.ColorObject("#18181B")
							}
						}
					}
				},
				{
					"grd_WF_List2" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED")
							}
						}
					}
				},
				{
					"grd_Card" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
				]
			},
			"minbutton" : 
			{
				"parent" : 
				{
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Min.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Min.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_MinD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Min.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Min.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Min.png')")
							},
							"deactivate" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Min.png')")
							}
						}
					}
				}
			},
			"calendaredit" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"nulltext" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"nulltext" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 6px 0px 6px")
							}
						}
					}
				}
			},
			"overlaybottom" : 
			{
				"parent" : 
				{
					"secspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					},
					"hourspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					},
					"ampmspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					},
					"minspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					}
				}
			},
			"PickerHeadLineControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
					}
				}
			},
			"cell" : 
			{
				"parent" : 
				{
					"row" : 
					{
						"parent" : 
						{
							"head" : 
							{
								"parent" : 
								{
									"Grid" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"color" : nexacro.ColorObject("#18181B")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none"),
												"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
												"color" : nexacro.ColorObject("#71717A"),
												"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
											}
										},
										"class" : [
										{
											"grd_Card" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											}
										}
										]
									}
								}
							},
							"summary" : 
							{
								"parent" : 
								{
									"Grid" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
												"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
												"color" : nexacro.ColorObject("#71717A"),
												"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
											}
										}
									}
								}
							},
							"body" : 
							{
								"parent" : 
								{
									"Grid" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"color" : nexacro.ColorObject("#18181B")
											},
											"disabled" : 
											{
												"color" : nexacro.ColorObject("#A1A1AA")
											},
											"mouseover_selected" : 
											{
												"color" : nexacro.ColorObject("#18181B")
											},
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px none,0px none,1px solid #F0F0F0,0px none"),
												"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
												"color" : nexacro.ColorObject("#18181B")
											},
											"selected" : 
											{
												"color" : nexacro.ColorObject("#18181B")
											}
										},
										"class" : [
										{
											"grd_LF_Menu" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 20px"),
														"color" : nexacro.ColorObject("#71717A"),
														"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"color" : nexacro.ColorObject("#FFFFFF")
													}
												}
											}
										},
										{
											"grd_LF_MenuList" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"padding" : nexacro.PaddingObject("0px 0px 0px 32px")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 0px 32px")
													},
													"selected" : 
													{
														"padding" : nexacro.PaddingObject("0px 0px 0px 32px")
													}
												}
											}
										},
										{
											"grd_MF_Notice" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"border" : nexacro.BorderObject("0px none")
													},
													"focused" : 
													{
														"border" : nexacro.BorderObject("0px none")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none")
													}
												}
											}
										},
										{
											"grd_MF_Todo" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"color" : nexacro.ColorObject("#18181B")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"color" : nexacro.ColorObject("#18181B")
													}
												}
											}
										},
										{
											"grd_WF_List2" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											}
										}
										]
									}
								}
							}
						}
					},
					"body" : 
					{
						"parent" : 
						{
							"ListView" : 
							{
								"self" : 
								{
									"readonly" : 
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"head" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"blinked" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"readonly" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"mouseover" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"focused" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"disabled" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													},
													"selected" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_LF_Lev" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"class" : [
												{
													"grd_LF_Menu" : 
													{
														"self" : 
														{
															"enabled" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 0px 10px"),
																"color" : nexacro.ColorObject("#FAFCFE"),
																"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
															}
														}
													}
												}
												]
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_MF_NoticeTitle" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"class" : [
												{
													"grd_MF_Notice" : 
													{
														"self" : 
														{
															"mouseover" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 0px 13px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
															},
															"focused" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 0px 13px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
															},
															"enabled" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 0px 13px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
															},
															"selected" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 0px 13px"),
																"color" : nexacro.ColorObject("#18181B"),
																"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
															}
														}
													}
												}
												]
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_MF_NoticeDate" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"class" : [
												{
													"grd_MF_Notice" : 
													{
														"self" : 
														{
															"mouseover" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 10px 13px"),
																"color" : nexacro.ColorObject("#9D9D9D"),
																"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
															},
															"focused" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 10px 13px"),
																"color" : nexacro.ColorObject("#9D9D9D"),
																"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
															},
															"enabled" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 10px 13px"),
																"color" : nexacro.ColorObject("#9D9D9D"),
																"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
															},
															"selected" : 
															{
																"padding" : nexacro.PaddingObject("0px 0px 10px 13px"),
																"color" : nexacro.ColorObject("#9D9D9D"),
																"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
															}
														}
													}
												}
												]
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_MF_Label01" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"readonly" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"mouseover" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"focused" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_MF_Label02" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"readonly" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"mouseover" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"focused" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_MF_Label03" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"readonly" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"mouseover" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"focused" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_MF_Label04" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"readonly" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"mouseover" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"focused" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_MF_Label05" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"readonly" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"mouseover" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"focused" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"padding" : nexacro.PaddingObject("0px 0px 1px 0px"),
														"color" : nexacro.ColorObject("#FFFFFF"),
														"font" : nexacro.FontObject("400 10px \"NotoSansKR-Regular\"")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_WF_Left" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_WF_Right" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_WF_LstvTitle" : 
					{
						"parent" : 
						{
							"body" : 
							{
								"parent" : 
								{
									"ListView" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_Num" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"summary" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#18181B"),
														"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
													}
												}
											}
										}
									},
									"head" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											}
										}
									},
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_SelBar" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"mouseover_selected" : 
													{
														"border" : nexacro.BorderObject("0px none,0px none,1px solid #F0F0F0,2px solid #18181B")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("0px none,0px none,1px solid #F0F0F0,2px solid #18181B")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_ID" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#71717A"),
														"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"color" : nexacro.ColorObject("#18181B")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_Strong" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_Sub" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#71717A")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_Status" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 8px 0px 8px")
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_StDone" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
													},
													"mouseover_selected" : 
													{
													},
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 12px 0px 26px")
													},
													"selected" : 
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_StProgress" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
													},
													"mouseover_selected" : 
													{
													},
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 12px 0px 26px")
													},
													"selected" : 
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_StWait" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
													},
													"mouseover_selected" : 
													{
													},
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 12px 0px 26px")
													},
													"selected" : 
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				},
				{
					"cell_StStop" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
													},
													"mouseover_selected" : 
													{
													},
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px 12px 0px 26px")
													},
													"selected" : 
													{
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
				]
			},
			"extrabutton" : 
			{
				"parent" : 
				{
					"tabbuttonitem" : 
					{
						"parent" : 
						{
							"Tab" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
									},
									"focused" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
									},
									"pushed" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
									},
									"selected" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 0px"),
										"icon" : nexacro.UrlObject("url('theme://images/tab_WF_Close.png')")
									}
								}
							}
						}
					}
				}
			},
			"endsubdate" : 
			{
				"parent" : 
				{
					"PickerHeadLineControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				}
			},
			"DateRangePicker" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"trackbar" : 
			{
				"parent" : 
				{
					"HScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					},
					"vscrollbar" : 
					{
						"parent" : 
						{
							"Grid" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
									},
									"pushed" : 
									{
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								},
								"class" : [
								{
									"grd_LF_Menu" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
											},
											"focused" : 
											{
											},
											"disabled" : 
											{
											},
											"pushed" : 
											{
											},
											"enabled" : 
											{
											},
											"selected" : 
											{
											}
										}
									}
								},
								{
									"grd_LF_MenuList" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
											},
											"focused" : 
											{
											},
											"pushed" : 
											{
											},
											"enabled" : 
											{
											},
											"selected" : 
											{
											}
										}
									}
								},
								{
									"grd_MF_Notice" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
											},
											"focused" : 
											{
											},
											"disabled" : 
											{
											},
											"pushed" : 
											{
											},
											"enabled" : 
											{
											},
											"selected" : 
											{
											}
										}
									}
								},
								{
									"grd_MF_Todo" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
											},
											"focused" : 
											{
											},
											"pushed" : 
											{
											},
											"enabled" : 
											{
											},
											"selected" : 
											{
											}
										}
									}
								}
								]
							}
						}
					},
					"hscrollbar" : 
					{
						"parent" : 
						{
							"Grid" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
									},
									"pushed" : 
									{
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"prevbutton" : 
			{
				"parent" : 
				{
					"head" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalPrevO.png')")
									},
									"focused" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalPrevN.png')")
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalPrevD.png')")
									},
									"pushed" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalPrevO.png')")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalPrevN.png')")
									},
									"selected" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalPrevO.png')")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"Calendar" : 
									{
										"class" : [
										{
											"cal_MF_Cal" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalPrevO.png')")
													},
													"focused" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalPrev.png')")
													},
													"disabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalPrev.png')")
													},
													"pushed" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalPrevO.png')")
													},
													"enabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalPrev.png')")
													},
													"selected" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalPrevO.png')")
													}
												}
											}
										}
										]
									}
								}
							}
						}
					},
					"Tab" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PreBtnO.png')")
							},
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("3px"),
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PreBtnN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PreBtnD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PreBtnO.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("3px"),
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PreBtnN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_PreBtnO.png')")
							}
						}
					},
					"menupopupmenu" : 
					{
						"parent" : 
						{
							"Menu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
									},
									"focused" : 
									{
									},
									"disabled" : 
									{
									},
									"pushed" : 
									{
									},
									"enabled" : 
									{
									},
									"selected" : 
									{
									}
								}
							}
						}
					},
					"Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_PrevN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_PrevD.png')")
							},
							"pushed" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_PrevN.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_PrevN.png')")
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"FieldBaseTextControl" : 
			{
				"self" : 
				{
					"valid" : 
					{
						"color" : nexacro.ColorObject("#6D6D6D")
					},
					"mouseover" : 
					{
						"color" : nexacro.ColorObject("#71717A"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					},
					"focused" : 
					{
						"color" : nexacro.ColorObject("#71717A"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					},
					"invalid" : 
					{
						"color" : nexacro.ColorObject("#EF4444")
					},
					"enabled" : 
					{
						"color" : nexacro.ColorObject("#71717A"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					},
					"selected" : 
					{
						"color" : nexacro.ColorObject("#71717A"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					}
				}
			},
			"nulltext" : 
			{
				"parent" : 
				{
					"DateFieldControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
								"color" : nexacro.ColorObject("#A1A1AA")
							}
						}
					},
					"TextFieldControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
								"color" : nexacro.ColorObject("#A1A1AA")
							}
						}
					},
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
								"color" : nexacro.ColorObject("#A1A1AA")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
								"color" : nexacro.ColorObject("#A1A1AA")
							}
						}
					},
					"DateField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 8px"),
								"color" : nexacro.ColorObject("#A1A1AA")
							}
						}
					},
					"MultiLineTextFieldControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
								"color" : nexacro.ColorObject("#A1A1AA")
							}
						}
					}
				}
			},
			"Menu" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"padding" : nexacro.PaddingObject("0px 5px")
					},
					"focused" : 
					{
						"padding" : nexacro.PaddingObject("0px 5px")
					},
					"enabled" : 
					{
						"padding" : nexacro.PaddingObject("0px 5px")
					}
				}
			},
			"ProgressBar" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"tagboxedit" : 
			{
				"parent" : 
				{
					"multicombotagbox" : 
					{
						"parent" : 
						{
							"MultiCombo" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #E4E4E7"),
										"padding" : nexacro.PaddingObject("0px 5px")
									}
								}
							},
							"MultiComboControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #18181B")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #E4E4E7"),
										"padding" : nexacro.PaddingObject("0px 5px")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditemedit" : 
			{
				"parent" : 
				{
					"fileuploaditem" : 
					{
						"parent" : 
						{
							"FileUpload" : 
							{
								"self" : 
								{
									"readonly" : 
									{
									},
									"mouseover" : 
									{
									},
									"focused" : 
									{
									},
									"nulltext" : 
									{
										"color" : nexacro.ColorObject("#A1A1AA")
									},
									"enabled" : 
									{
									}
								}
							}
						}
					}
				}
			},
			"tabbuttonitemtext" : 
			{
				"parent" : 
				{
					"tabbuttonitem" : 
					{
						"parent" : 
						{
							"Tab" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 10px 0px 10px")
									}
								},
								"class" : [
								{
									"tab_WF_RecordDetail" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 0px 0px 0px")
											}
										}
									}
								}
								]
							}
						}
					}
				}
			},
			"Calendar" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#18181B")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							}
						}
					}
				},
				{
					"error" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							}
						}
					}
				},
				{
					"cal_MF_Cal" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
				]
			},
			"datetabbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							}
						}
					},
					"DateRangePickerControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,1px solid #E4E4E7,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							}
						}
					}
				}
			},
			"popupmenuitem" : 
			{
				"parent" : 
				{
					"menupopupmenu" : 
					{
						"parent" : 
						{
							"Menu" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								}
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"color" : nexacro.ColorObject("#171717")
							},
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 10px 0px 0px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				}
			},
			"titleicon" : 
			{
				"parent" : 
				{
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"disabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"deactivate" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 16px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				}
			},
			"calendarspinupbutton" : 
			{
				"parent" : 
				{
					"Calendar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_UpO.png')")
							}
						}
					}
				}
			},
			"Div" : 
			{
				"self" : 
				{
					"enabled" : 
					{
					}
				},
				"class" : [
				{
					"div_WF_Search" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				},
				{
					"div_Card" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				},
				{
					"div_POP_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
				]
			},
			"normalbutton" : 
			{
				"parent" : 
				{
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Normal.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Normal.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_NormalD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Normal.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Normal.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Normal.png')")
							},
							"deactivate" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Normal.png')")
							}
						}
					}
				}
			},
			"cellbutton" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
								"color" : nexacro.ColorObject("#18181B"),
								"letterSpacing" : nexacro.CSSValueObject("-0.3px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							}
						}
					},
					"cell" : 
					{
						"parent" : 
						{
							"row" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"Grid" : 
											{
												"class" : [
												{
													"grd_LF_Menu" : 
													{
														"self" : 
														{
															"mouseover" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px"),
																"icon" : nexacro.UrlObject("url('theme://images/grd_LF_Delete.png')")
															},
															"focused" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px"),
																"icon" : nexacro.UrlObject("url('theme://images/grd_LF_Delete.png')")
															},
															"pushed" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px"),
																"icon" : nexacro.UrlObject("url('theme://images/grd_LF_Delete.png')")
															},
															"enabled" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px"),
																"icon" : nexacro.UrlObject("url('theme://images/grd_LF_Delete.png')")
															},
															"selected" : 
															{
																"border" : nexacro.BorderObject("0px none"),
																"padding" : nexacro.PaddingObject("0px"),
																"icon" : nexacro.UrlObject("url('theme://images/grd_LF_Delete.png')")
															}
														}
													}
												}
												]
											}
										}
									}
								}
							}
						},
						"class" : [
						{
							"cell_WF_LstvSerach" : 
							{
								"parent" : 
								{
									"body" : 
									{
										"parent" : 
										{
											"ListView" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"padding" : nexacro.PaddingObject("0px"),
														"icon" : nexacro.UrlObject("url('theme://images/btn_WF_InputSearchN.png')")
													}
												}
											}
										}
									}
								}
							}
						}
						]
					},
					"ListViewCellControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
								"color" : nexacro.ColorObject("#18181B"),
								"letterSpacing" : nexacro.CSSValueObject("-0.3px")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							}
						}
					}
				}
			},
			"tagtext" : 
			{
				"parent" : 
				{
					"TagBoxControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
								"color" : nexacro.ColorObject("#18181B")
							}
						}
					}
				}
			},
			"CheckBoxControl" : 
			{
				"self" : 
				{
					"readonly_selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSD.png')")
					},
					"readonly" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxD.png')")
					},
					"mouseover" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxO.png')")
					},
					"disabled_selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSD.png')")
					},
					"focused" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
						"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA"),
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxD.png')")
					},
					"mouseover_selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSO.png')")
					},
					"enabled" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
						"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
					},
					"selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSN.png')")
					}
				}
			},
			"TextArea" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("4px 6px 0px 6px"),
						"color" : nexacro.ColorObject("#18181B"),
						"wordWrap" : "char",
						"font" : nexacro.FontObject("400 12px/16px \"NotoSansKR-Regular\"")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							}
						}
					}
				},
				{
					"error" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"nulltext" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							}
						}
					}
				},
				{
					"output" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("6px 0px 0px 6px")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("6px 0px 0px 6px")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("6px 0px 0px 6px")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("6px 0px 0px 6px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("6px 0px 0px 6px")
							}
						}
					}
				},
				{
					"txt_POP_Text" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
				]
			},
			"combolist" : 
			{
				"parent" : 
				{
					"Combo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				}
			},
			"celltreeline" : 
			{
				"parent" : 
				{
					"GridCellControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED")
							}
						}
					}
				}
			},
			"dropbutton" : 
			{
				"parent" : 
				{
					"CalendarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							}
						}
					},
					"MultiCombo" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							}
						}
					},
					"Calendar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cal_WF_DropO.png')")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							}
						}
					},
					"Combo" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							}
						}
					},
					"box" : 
					{
						"parent" : 
						{
							"DateField" : 
							{
								"self" : 
								{
									"mouseover_invalid" : 
									{
									},
									"valid" : 
									{
									},
									"mouseover" : 
									{
									},
									"invalid" : 
									{
									},
									"disabled" : 
									{
									},
									"pushed" : 
									{
									},
									"focused_invalid" : 
									{
									},
									"focused_valid" : 
									{
									},
									"enabled" : 
									{
									},
									"selected" : 
									{
									},
									"mouseover_valid" : 
									{
									}
								}
							}
						}
					},
					"DateFieldBoxControl" : 
					{
						"self" : 
						{
							"mouseover_invalid" : 
							{
							},
							"valid" : 
							{
							},
							"mouseover" : 
							{
							},
							"invalid" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"focused_invalid" : 
							{
							},
							"focused_valid" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							},
							"mouseover_valid" : 
							{
							}
						}
					},
					"ComboControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/cbo_WF_DropO.png')")
							}
						}
					}
				}
			},
			"menupopupmenu" : 
			{
				"parent" : 
				{
					"Menu" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"Combo" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#18181B")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #F59E0B")
							}
						}
					}
				},
				{
					"error" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							}
						}
					}
				}
				]
			},
			"body" : 
			{
				"parent" : 
				{
					"ListView" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #EDEDED,0px none"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #EDEDED,0px none"),
								"color" : nexacro.ColorObject("#18181B")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,1px solid #EDEDED,0px none"),
								"color" : nexacro.ColorObject("#18181B")
							}
						}
					},
					"DatePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					},
					"datepicker" : 
					{
						"parent" : 
						{
							"Calendar" : 
							{
								"class" : [
								{
									"cal_MF_Cal" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px none"),
												"color" : nexacro.ColorObject("#18181B")
											}
										}
									}
								}
								]
							}
						}
					}
				}
			},
			"EditControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #D4D4D8")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"color" : nexacro.ColorObject("#71717A")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
						"color" : nexacro.ColorObject("#18181B")
					}
				}
			},
			"PopupMenuControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #171717")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #171717")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #171717")
					}
				}
			},
			"PopupDiv" : 
			{
				"self" : 
				{
					"enabled" : 
					{
					}
				},
				"class" : [
				{
					"pdiv_TF_2DepthBg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #3F3F46")
							}
						}
					}
				}
				]
			},
			"yearitem" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"color" : nexacro.ColorObject("#FFFFFF")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					}
				}
			},
			"SpinControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"ListView" : 
			{
				"self" : 
				{
					"readonly" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED")
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #EDEDED")
					}
				}
			},
			"PopupDateRangePicker" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"tagbutton" : 
			{
				"parent" : 
				{
					"TagBoxControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_CloseO.png')")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_CloseO.png')")
							},
							"pushed" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_CloseO.png')")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_Close.png')")
							},
							"selected" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 3px"),
								"icon" : nexacro.UrlObject("url('theme://images/mcbo_WF_CloseO.png')")
							}
						}
					}
				}
			},
			"prefixtext" : 
			{
				"parent" : 
				{
					"box" : 
					{
						"parent" : 
						{
							"TextField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#A1A1AA"),
										"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
									}
								}
							}
						}
					}
				}
			},
			"DateRangePickerControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"overlaytop" : 
			{
				"parent" : 
				{
					"secspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					},
					"hourspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					},
					"ampmspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					},
					"minspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
					}
				}
			},
			"tagboxitem" : 
			{
				"parent" : 
				{
					"multicombotagbox" : 
					{
						"parent" : 
						{
							"MultiCombo" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #EDEDED")
									}
								}
							}
						}
					}
				}
			},
			"VScrollBarControl" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #EDEDED"),
						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
					},
					"disabled" : 
					{
						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #EDEDED")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #EDEDED"),
						"padding" : nexacro.PaddingObject("1px 1px 1px 1px")
					}
				}
			},
			"TimePickerControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"padding" : nexacro.PaddingObject("10px")
					}
				}
			},
			"TextFieldBoxControl" : 
			{
				"self" : 
				{
					"valid" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					},
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"invalid" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 24px 0px 6px")
					}
				}
			},
			"progressstartcap" : 
			{
				"parent" : 
				{
					"ProgressBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					},
					"ProgressBar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"MultiLineTextFieldBoxControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
						"font" : nexacro.FontObject("400 12px/16px \"NotoSansKR-Regular\"")
					}
				}
			},
			"okbutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"datetimepicker" : 
					{
						"parent" : 
						{
							"DateField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 10px 0px 10px"),
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					}
				}
			},
			"vscrollbar" : 
			{
				"parent" : 
				{
					"Grid" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("2px")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("2px")
							}
						},
						"class" : [
						{
							"grd_LF_Menu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 3px 0px 0px")
									},
									"disabled" : 
									{
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 3px 0px 0px")
									}
								}
							}
						},
						{
							"grd_LF_MenuList" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 3px 0px 0px")
									},
									"disabled" : 
									{
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 3px 0px 0px")
									}
								}
							}
						},
						{
							"grd_MF_Notice" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px")
									},
									"disabled" : 
									{
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px")
									}
								}
							}
						},
						{
							"grd_MF_Todo" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px 5px")
									}
								}
							}
						}
						]
					}
				}
			},
			"leadingbutton" : 
			{
				"parent" : 
				{
					"box" : 
					{
						"parent" : 
						{
							"TextField" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								}
							}
						}
					}
				}
			},
			"nextbutton" : 
			{
				"parent" : 
				{
					"head" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalNextO.png')")
									},
									"focused" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalNextN.png')")
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalNextD.png')")
									},
									"pushed" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalNextO.png')")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalNextN.png')")
									},
									"selected" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/cal_WF_CalNextO.png')")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"Calendar" : 
									{
										"class" : [
										{
											"cal_MF_Cal" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalNextO.png')")
													},
													"focused" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalNext.png')")
													},
													"disabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalNext.png')")
													},
													"pushed" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalNextO.png')")
													},
													"enabled" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalNext.png')")
													},
													"selected" : 
													{
														"icon" : nexacro.UrlObject("url('theme://images/btn_MF_CalNextO.png')")
													}
												}
											}
										}
										]
									}
								}
							}
						}
					},
					"Tab" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnO.png')")
							},
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("3px"),
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnO.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("3px"),
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tab_WF_NextBtnO.png')")
							}
						}
					},
					"menupopupmenu" : 
					{
						"parent" : 
						{
							"Menu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
									},
									"focused" : 
									{
									},
									"disabled" : 
									{
									},
									"pushed" : 
									{
									},
									"enabled" : 
									{
									},
									"selected" : 
									{
									}
								}
							}
						}
					},
					"Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					},
					"PopupMenuControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_NextN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_NextD.png')")
							},
							"pushed" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_NextN.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("5px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_NextN.png')")
							}
						}
					},
					"PopupMenu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"focused" : 
							{
							},
							"disabled" : 
							{
							},
							"pushed" : 
							{
							},
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"CheckBox" : 
			{
				"self" : 
				{
					"readonly_selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSD.png')")
					},
					"readonly" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxD.png')")
					},
					"mouseover" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxO.png')")
					},
					"disabled_selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSD.png')")
					},
					"focused" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
						"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA"),
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxD.png')")
					},
					"mouseover_selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSO.png')")
					},
					"enabled" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
						"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
					},
					"selected" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSN.png')")
					}
				},
				"class" : [
				{
					"essential" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxEO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxEN.png')")
							},
							"mouseover_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxESO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxEN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxESN.png')")
							}
						}
					}
				},
				{
					"chk_LOGIN_Id" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_LOGIN_IdN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"focused" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_LOGIN_IdN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"focused_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_LOGIN_IdS.png')")
							},
							"mouseover_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_LOGIN_IdS.png')")
							},
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_LOGIN_IdN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 0px 0px 8px"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_LOGIN_IdS.png')")
							}
						}
					}
				}
				]
			},
			"TitleBarControl" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
					},
					"deactivate" : 
					{
					}
				}
			},
			"yearstatic" : 
			{
				"parent" : 
				{
					"head" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"Calendar" : 
									{
										"class" : [
										{
											"cal_MF_Cal" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#18181B"),
														"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
													}
												}
											}
										}
										]
									}
								}
							}
						}
					}
				}
			},
			"timepicker" : 
			{
				"parent" : 
				{
					"timepickergroup" : 
					{
						"parent" : 
						{
							"DateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none")
									}
								}
							},
							"PopupDateRangePicker" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none")
									}
								}
							},
							"DateRangePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none")
									}
								}
							}
						}
					}
				}
			},
			"DatePickerControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"listboxitem" : 
			{
				"parent" : 
				{
					"combolist" : 
					{
						"parent" : 
						{
							"Combo" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("4px 0px 4px 6px"),
										"color" : nexacro.ColorObject("#18181B")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#FFFFFF")
									}
								}
							},
							"ComboControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 10px"),
										"color" : nexacro.ColorObject("#18181B")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					},
					"ListBox" : 
					{
						"self" : 
						{
							"readonly" : 
							{
								"padding" : nexacro.PaddingObject("4px 0px 4px 6px")
							},
							"mouseover" : 
							{
								"color" : nexacro.ColorObject("#18181B")
							},
							"disabled_selected" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("4px 0px 4px 6px")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("4px 0px 4px 6px")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF")
							}
						}
					}
				}
			},
			"radioitem" : 
			{
				"parent" : 
				{
					"Radio" : 
					{
						"self" : 
						{
							"readonly_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemSD.png')")
							},
							"readonly" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemD.png')")
							},
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemO.png')")
							},
							"disabled_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemSD.png')")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA"),
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemD.png')")
							},
							"mouseover_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemSO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 16px 0px 6px")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemS.png')")
							}
						},
						"class" : [
						{
							"essential" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemEO.png')")
									},
									"mouseover_selected" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemESO.png')")
									},
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemE.png')")
									},
									"selected" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/rdo_WF_ItemESN.png')")
									}
								}
							}
						}
						]
					}
				}
			},
			"Static" : 
			{
				"self" : 
				{
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"enabled" : 
					{
						"wordWrap" : "char"
					}
				},
				"class" : [
				{
					"sta_LOGIN_Logo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_LOGIN_ID" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_LOGIN_PW" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_LOGIN_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_TF_User" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#D4E2E9"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_LF_Expand" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED,0px none,0px none,0px none")
							}
						}
					}
				},
				{
					"sta_LF_Title" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED,0px none,0px none,0px none"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_MDI_Line" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_MF_BoxColor" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_MF_Approval" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_MF_title" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_MF_TodoTitle" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#404040"),
								"font" : nexacro.FontObject("700 13px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_MF_Name" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 18px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_MF_Position" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_MF_Company" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#9D9D9D"),
								"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_MF_ConTitle" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_MF_ConNum" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 30px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_MF_ConText" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_MF_ApprBar" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_MF_Temp" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 48px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_MF_WeatherTxt" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_Center" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_GSize" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"Dotum\"")
							}
						}
					}
				},
				{
					"sta_WF_GBar" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 55px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 35px \"Tahoma\"")
							}
						}
					}
				},
				{
					"sta_WF_GBg01" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_GBg02" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EEEEEE"),
								"padding" : nexacro.PaddingObject("40px 30px"),
								"font" : nexacro.FontObject("400 14px/22px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_GLine" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_GLine01" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_GLineH" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"edge" : nexacro.EdgeImageObject("url('theme://images/sta_WF_GLineH.png') 5px 2px")
							}
						}
					}
				},
				{
					"sta_WF_GLineV" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"edge" : nexacro.EdgeImageObject("url('theme://images/sta_WF_GLineV.png') 5px 2px")
							}
						}
					}
				},
				{
					"sta_WF_GNum" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 30px \"Tahoma\"")
							}
						}
					}
				},
				{
					"sta_WF_GTxt01" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 25px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_WF_GTxt02" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_WF_GTxt03" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("100 12px \"NotoSansKR-Thin\"")
							}
						}
					}
				},
				{
					"sta_WF_GTxt04" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#EF4444"),
								"font" : nexacro.FontObject("400 11px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_GTxt05" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 0px 7px"),
								"color" : nexacro.ColorObject("#EF4444"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_GTxt06" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#787878"),
								"font" : nexacro.FontObject("400 12px/22px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_GuideBg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_GuideBox" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_WF_GuideDetail" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA"),
								"wordWrap" : "english",
								"font" : nexacro.FontObject("100 20px \"NotoSansKR-Thin\"")
							}
						}
					}
				},
				{
					"sta_WF_GuideTitle" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 50px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_WF_GuideTop" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_TF_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				},
				{
					"sta_TF_Line" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_TF_Logo" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 17px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_TF_2Depth" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_WF_Title" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 20px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_WF_SubTitle" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 15px \"NotoSansKR-Bold\"")
							}
						}
					}
				},
				{
					"sta_WF_Location" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA"),
								"wordWrap" : "none",
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_SchLabel" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 7px 0px 26px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_Label" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED"),
								"padding" : nexacro.PaddingObject("0px 14px 0px 14px"),
								"color" : nexacro.ColorObject("#71717A"),
								"wordWrap" : "english",
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				},
				{
					"sta_WF_LabelBg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 14px"),
								"color" : nexacro.ColorObject("#71717A")
							}
						}
					}
				},
				{
					"sta_WF_Box" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				},
				{
					"sta_Card" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				},
				{
					"sta_Divider" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"sta_PageTitle" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none"),
								"padding" : nexacro.PaddingObject("0px 24px 0px 24px"),
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("400 13px \"NotoSansKR-Regular\"")
							}
						}
					}
				}
				]
			},
			"ImageViewer" : 
			{
				"self" : 
				{
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				},
				"class" : [
				{
					"img_MF_Profile" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"img_WF_BorderNone" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
				]
			},
			"ComboControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"multicombolist" : 
			{
				"parent" : 
				{
					"MultiCombo" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					},
					"MultiComboControl" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				}
			},
			"PopupMenu" : 
			{
				"self" : 
				{
					"enabled" : 
					{
					}
				}
			},
			"popupmenuitemhotkeytext" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
										"color" : nexacro.ColorObject("#A1A1AA")
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
										"color" : nexacro.ColorObject("#A1A1AA")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
										"color" : nexacro.ColorObject("#A1A1AA")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
										"color" : nexacro.ColorObject("#A1A1AA")
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
										"color" : nexacro.ColorObject("#A1A1AA")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px 5px 0px 10px"),
										"color" : nexacro.ColorObject("#A1A1AA")
									}
								}
							}
						}
					}
				}
			},
			"spinneritem" : 
			{
				"parent" : 
				{
					"secspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"enabled" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					},
					"hourspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"enabled" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					},
					"ampmspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"enabled" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					},
					"minspinner" : 
					{
						"parent" : 
						{
							"TimePickerControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"enabled" : 
									{
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					}
				}
			},
			"fileuploaditem" : 
			{
				"parent" : 
				{
					"FileUpload" : 
					{
						"self" : 
						{
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						}
					}
				}
			},
			"Form" : 
			{
				"self" : 
				{
					"contents" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none"),
						"color" : nexacro.ColorObject("#18181B"),
						"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
					}
				},
				"class" : [
				{
					"frm_LOGIN_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"frm_POP_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				}
				]
			},
			"weekband" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"Calendar" : 
									{
										"class" : [
										{
											"cal_MF_Cal" : 
											{
												"self" : 
												{
													"enabled" : 
													{
													}
												}
											}
										}
										]
									}
								}
							}
						}
					}
				}
			},
			"MaskEditControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 6px 0px 0px"),
						"color" : nexacro.ColorObject("#18181B")
					}
				}
			},
			"decbutton" : 
			{
				"parent" : 
				{
					"HScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HdecO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HdecO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HdecD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HdecO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Hdec.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_HdecO.png')")
							}
						}
					},
					"vscrollbar" : 
					{
						"parent" : 
						{
							"Grid" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								},
								"class" : [
								{
									"grd_LF_Menu" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"focused" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"selected" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											}
										}
									}
								},
								{
									"grd_LF_MenuList" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"focused" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"selected" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											}
										}
									}
								},
								{
									"grd_MF_Notice" : 
									{
										"self" : 
										{
											"mouseover" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"focused" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"disabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"pushed" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											},
											"selected" : 
											{
												"icon" : nexacro.UrlObject("url('theme://images/btn_WF_None.png')")
											}
										}
									}
								},
								{
									"grd_MF_Todo" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"icon" : nexacro.UrlObject("none")
											}
										}
									}
								}
								]
							}
						}
					},
					"hscrollbar" : 
					{
						"parent" : 
						{
							"Grid" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								}
							}
						}
					},
					"VScrollBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VdecO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VdecO.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VdecD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VdecO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_Vdec.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/btn_WF_VdecO.png')")
							}
						}
					}
				}
			},
			"calendarspindownbutton" : 
			{
				"parent" : 
				{
					"Calendar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							}
						}
					}
				}
			},
			"box" : 
			{
				"parent" : 
				{
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"readonly" : 
							{
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px"),
								"font" : nexacro.FontObject("400 12px/16px \"NotoSansKR-Regular\"")
							}
						},
						"class" : [
						{
							"essential" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #FAD69C")
									}
								}
							}
						},
						{
							"error" : 
							{
								"self" : 
								{
									"readonly" : 
									{
										"border" : nexacro.BorderObject("1px solid #EF4444")
									},
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("1px solid #EF4444")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("1px solid #EF4444")
									},
									"disabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #EF4444")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #EF4444")
									}
								}
							}
						},
						{
							"output" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none"),
										"padding" : nexacro.PaddingObject("0px")
									}
								}
							}
						}
						]
					},
					"TextField" : 
					{
						"self" : 
						{
							"valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							},
							"readonly" : 
							{
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"invalid" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 24px 0px 6px")
							}
						},
						"class" : [
						{
							"essential" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #F59E0B")
									}
								}
							}
						}
						]
					},
					"DateField" : 
					{
						"self" : 
						{
							"valid" : 
							{
								"border" : nexacro.BorderObject("1px solid #22C55E")
							},
							"readonly" : 
							{
							},
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B")
							},
							"invalid" : 
							{
								"border" : nexacro.BorderObject("1px solid #EF4444")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#A1A1AA")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7"),
								"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
							}
						},
						"class" : [
						{
							"essential" : 
							{
								"self" : 
								{
									"enabled" : 
									{
										"border" : nexacro.BorderObject("1px solid #F59E0B")
									}
								}
							}
						}
						]
					}
				}
			},
			"checkboxsetitem" : 
			{
				"parent" : 
				{
					"CheckBoxSetControl" : 
					{
						"self" : 
						{
							"readonly_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSD.png')")
							},
							"readonly" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxD.png')")
							},
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxO.png')")
							},
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("2px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
							},
							"mouseover_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSO.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("2px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSN.png')")
							}
						}
					},
					"checkboxset" : 
					{
						"parent" : 
						{
							"multicombolist" : 
							{
								"parent" : 
								{
									"MultiCombo" : 
									{
										"self" : 
										{
											"readonly" : 
											{
												"padding" : nexacro.PaddingObject("0px 0px 4px 6px")
											},
											"mouseover" : 
											{
												"color" : nexacro.ColorObject("#18181B")
											},
											"focused" : 
											{
												"padding" : nexacro.PaddingObject("0px 0px 4px 6px")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 0px 4px 6px")
											},
											"selected" : 
											{
												"color" : nexacro.ColorObject("#FFFFFF")
											}
										}
									},
									"MultiComboControl" : 
									{
										"self" : 
										{
											"readonly" : 
											{
												"padding" : nexacro.PaddingObject("0px 0px 4px 6px")
											},
											"mouseover" : 
											{
												"color" : nexacro.ColorObject("#18181B")
											},
											"focused" : 
											{
												"padding" : nexacro.PaddingObject("0px 0px 4px 6px")
											},
											"enabled" : 
											{
												"padding" : nexacro.PaddingObject("0px 0px 4px 6px")
											},
											"selected" : 
											{
												"color" : nexacro.ColorObject("#FFFFFF")
											}
										}
									}
								}
							}
						}
					},
					"CheckBoxSet" : 
					{
						"self" : 
						{
							"readonly_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSD.png')")
							},
							"readonly" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxD.png')")
							},
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxO.png')")
							},
							"focused" : 
							{
								"padding" : nexacro.PaddingObject("2px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
							},
							"mouseover_selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSO.png')")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("2px 0px 5px 0px"),
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxN.png')"),
								"textPadding" : nexacro.PaddingObject("0px 16px 2px 6px")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxSN.png')")
							}
						},
						"class" : [
						{
							"essential" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxEO.png')")
									},
									"focused" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxEN.png')")
									},
									"mouseover_selected" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxESO.png')")
									},
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxEN.png')")
									},
									"selected" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/chk_WF_BoxESN.png')")
									}
								}
							}
						}
						]
					}
				}
			},
			"progressendcap" : 
			{
				"parent" : 
				{
					"ProgressBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					},
					"ProgressBar" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					}
				}
			},
			"head" : 
			{
				"parent" : 
				{
					"Grid" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						},
						"class" : [
						{
							"grd_Card" : 
							{
								"self" : 
								{
									"enabled" : 
									{
									}
								}
							}
						}
						]
					},
					"DatePickerControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#18181B"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"datepicker" : 
					{
						"parent" : 
						{
							"Calendar" : 
							{
								"class" : [
								{
									"cal_MF_Cal" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"border" : nexacro.BorderObject("0px none"),
												"color" : nexacro.ColorObject("#18181B")
											}
										}
									}
								}
								]
							}
						}
					}
				}
			},
			"popupmenuitemcheckbox" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"padding" : nexacro.PaddingObject("5px 0px 5px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/mnu_WF_PmnuChk.png')")
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 0px 5px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/mnu_WF_PmnuChk.png')")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 0px 5px 5px"),
										"icon" : nexacro.UrlObject("url('theme://images/mnu_WF_PmnuChk.png')")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"icon" : nexacro.UrlObject("url('theme:://images/mnu_WF_PmnuChk.png')")
									},
									"disabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme:://images/mnu_WF_PmnuChk.png')")
									},
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme:://images/mnu_WF_PmnuChk.png')")
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemexpandimage" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_Next.png')")
									},
									"disabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_Next.png')")
									},
									"enabled" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_Next.png')")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"padding" : nexacro.PaddingObject("0px"),
										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ItemSelect.png')")
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("0px"),
										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ItemSelect.png')")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("0px"),
										"icon" : nexacro.UrlObject("url('theme://images/pmnu_WF_ItemSelect.png')")
									}
								}
							}
						}
					}
				}
			},
			"treeitemimage" : 
			{
				"parent" : 
				{
					"celltreeitem" : 
					{
						"parent" : 
						{
							"GridCellControl" : 
							{
								"self" : 
								{
									"expand" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/img_WF_TreeExpand.png')")
									},
									"leaf" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/img_WF_TreeLeaf.png')")
									},
									"collapse" : 
									{
										"icon" : nexacro.UrlObject("url('theme://images/img_WF_TreeColl.png')")
									}
								}
							},
							"cell" : 
							{
								"parent" : 
								{
									"row" : 
									{
										"parent" : 
										{
											"body" : 
											{
												"parent" : 
												{
													"Grid" : 
													{
														"class" : [
														{
															"grd_LF_Menu" : 
															{
																"self" : 
																{
																	"expand" : 
																	{
																		"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeOpen.png')")
																	},
																	"leaf" : 
																	{
																		"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')")
																	},
																	"enabled" : 
																	{
																		"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeItem.png')")
																	},
																	"collapse" : 
																	{
																		"icon" : nexacro.UrlObject("url('theme://images/grd_LF_TreeClose.png')")
																	}
																}
															}
														}
														]
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			},
			"treeitemtext" : 
			{
				"parent" : 
				{
					"celltreeitem" : 
					{
						"parent" : 
						{
							"cell" : 
							{
								"parent" : 
								{
									"row" : 
									{
										"parent" : 
										{
											"body" : 
											{
												"parent" : 
												{
													"Grid" : 
													{
														"class" : [
														{
															"grd_LF_Menu" : 
															{
																"self" : 
																{
																	"mouseover" : 
																	{
																	}
																}
															}
														}
														]
													}
												}
											}
										}
									}
								},
								"class" : [
								{
									"cell_LF_Lev" : 
									{
										"parent" : 
										{
											"row" : 
											{
												"parent" : 
												{
													"body" : 
													{
														"parent" : 
														{
															"Grid" : 
															{
																"class" : [
																{
																	"grd_LF_Menu" : 
																	{
																		"self" : 
																		{
																			"mouseover" : 
																			{
																			}
																		}
																	}
																}
																]
															}
														}
													}
												}
											}
										}
									}
								}
								]
							}
						}
					}
				}
			},
			"groupboxcontents" : 
			{
				"parent" : 
				{
					"GroupBox" : 
					{
						"self" : 
						{
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				}
			},
			"maxbutton" : 
			{
				"parent" : 
				{
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Max.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Max.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_MaxD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Max.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Max.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Max.png')")
							},
							"deactivate" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Max.png')")
							}
						}
					}
				}
			},
			"multicomboedit" : 
			{
				"parent" : 
				{
					"multicombolist" : 
					{
						"parent" : 
						{
							"MultiCombo" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #18181B,0px none")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #18181B,0px none")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none")
									}
								}
							},
							"MultiComboControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #18181B,0px none")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #18181B,0px none")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none")
									}
								}
							}
						}
					}
				}
			},
			"tabpage" : 
			{
				"parent" : 
				{
					"Tab" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("0px none")
							},
							"disabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #18181B,0px none,0px none,0px none")
							},
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none")
							}
						},
						"class" : [
						{
							"tab_WF_RecordDetail" : 
							{
								"self" : 
								{
									"disabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none")
									}
								}
							}
						}
						]
					}
				}
			},
			"selectallcheckbox" : 
			{
				"parent" : 
				{
					"multicombolist" : 
					{
						"parent" : 
						{
							"MultiCombo" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"selected" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							},
							"MultiComboControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"focused" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"enabled" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"selected" : 
									{
										"border" : nexacro.BorderObject("0px none,0px none,0px none,0px none"),
										"padding" : nexacro.PaddingObject("2px 0px 4px 6px"),
										"textPadding" : nexacro.PaddingObject("0px 0px 2px 6px"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							}
						}
					}
				}
			},
			"closebutton" : 
			{
				"parent" : 
				{
					"DateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"PopupDateRangePicker" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							}
						}
					},
					"TitleBarControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Close.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Close.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_CloseD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Close.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Close.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Close.png')")
							},
							"deactivate" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/tib_WF_Close.png')")
							}
						}
					}
				}
			},
			"FileUpload" : 
			{
				"self" : 
				{
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none")
					},
					"selected" : 
					{
						"border" : nexacro.BorderObject("0px none")
					}
				}
			},
			"dayitem" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"focused_saturday" : 
									{
										"color" : nexacro.ColorObject("#3B82F6")
									},
									"sunday" : 
									{
										"color" : nexacro.ColorObject("#EF4444")
									},
									"saturday" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									},
									"mouseover" : 
									{
										"color" : nexacro.ColorObject("#FFFFFF")
									},
									"today" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									},
									"trailingday" : 
									{
										"color" : nexacro.ColorObject("#A1A1AA")
									},
									"day" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									},
									"mouseover_saturday" : 
									{
										"color" : nexacro.ColorObject("#3B82F6")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									},
									"selected" : 
									{
										"color" : nexacro.ColorObject("#18181B"),
										"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"Calendar" : 
									{
										"class" : [
										{
											"cal_MF_Cal" : 
											{
												"self" : 
												{
													"mouseover" : 
													{
														"border" : nexacro.BorderObject("1px solid #FFFFFF"),
														"color" : nexacro.ColorObject("#18181B"),
														"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
													},
													"today" : 
													{
														"border" : nexacro.BorderObject("0px none"),
														"color" : nexacro.ColorObject("#404040"),
														"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
													},
													"day" : 
													{
														"border" : nexacro.BorderObject("1px solid #FFFFFF"),
														"color" : nexacro.ColorObject("#18181B")
													},
													"enabled" : 
													{
														"border" : nexacro.BorderObject("1px solid #FFFFFF"),
														"font" : nexacro.FontObject("400 15px \"NotoSansKR-Regular\"")
													},
													"selected" : 
													{
														"border" : nexacro.BorderObject("1px solid #A1A7B1"),
														"color" : nexacro.ColorObject("#18181B"),
														"font" : nexacro.FontObject("700 15px \"NotoSansKR-bold\"")
													}
												}
											}
										}
										]
									}
								}
							}
						}
					}
				}
			},
			"summary" : 
			{
				"parent" : 
				{
					"Grid" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7,0px none,0px none,0px none"),
								"padding" : nexacro.PaddingObject("0px 12px 0px 12px"),
								"color" : nexacro.ColorObject("#71717A"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				}
			},
			"FieldBaseLabelControl" : 
			{
				"self" : 
				{
					"floating" : 
					{
						"padding" : nexacro.PaddingObject("0px 2px"),
						"color" : nexacro.ColorObject("#18181B")
					},
					"mouseover" : 
					{
						"color" : nexacro.ColorObject("#18181B")
					},
					"focused" : 
					{
						"color" : nexacro.ColorObject("#18181B")
					},
					"floatingvalid" : 
					{
						"color" : nexacro.ColorObject("#22C55E")
					},
					"mouseover_floating" : 
					{
						"color" : nexacro.ColorObject("#18181B")
					},
					"focused_floating" : 
					{
						"color" : nexacro.ColorObject("#18181B")
					},
					"floatinginvalid" : 
					{
						"color" : nexacro.ColorObject("#EF4444")
					},
					"enabled" : 
					{
						"padding" : nexacro.PaddingObject("0px 2px"),
						"color" : nexacro.ColorObject("#18181B"),
						"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
					}
				}
			},
			"MultiComboControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"DateFieldBoxControl" : 
			{
				"self" : 
				{
					"valid" : 
					{
						"border" : nexacro.BorderObject("1px solid #22C55E")
					},
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"invalid" : 
					{
						"border" : nexacro.BorderObject("1px solid #EF4444")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("0px 0px 0px 6px")
					}
				}
			},
			"datetimepicker" : 
			{
				"parent" : 
				{
					"DateField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 0px 5px 0px")
							}
						}
					}
				}
			},
			"View" : 
			{
				"self" : 
				{
					"enabled" : 
					{
					}
				},
				"class" : [
				{
					"view_LOGIN_Box" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"view_LF_Sch" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED")
							}
						}
					}
				},
				{
					"view_LF_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,1px solid #EDEDED,0px none,0px none")
							}
						}
					}
				},
				{
					"view_RF_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("0px none,0px none,0px none,1px solid #EDEDED")
							}
						}
					}
				},
				{
					"view_MDI_Bg" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"view_MF_Box" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #EDEDED")
							}
						}
					}
				},
				{
					"view_MF_H" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"border" : nexacro.BorderObject("1px solid #eaeaeb")
							},
							"focused" : 
							{
								"border" : nexacro.BorderObject("1px solid #eaeaeb")
							},
							"disabled" : 
							{
							},
							"enabled" : 
							{
							}
						}
					}
				},
				{
					"view_WF_Search" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				},
				{
					"view_Card" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"border" : nexacro.BorderObject("1px solid #E4E4E7")
							}
						}
					}
				}
				]
			},
			"stepitem" : 
			{
				"parent" : 
				{
					"StepControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
							},
							"selected" : 
							{
							}
						}
					}
				}
			},
			"TimePickerGroupControl" : 
			{
				"self" : 
				{
					"enabled" : 
					{
						"border" : nexacro.BorderObject("0px none,0px none,1px solid #E4E4E7,0px none"),
						"padding" : nexacro.PaddingObject("0px")
					}
				}
			},
			"CalendarControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7")
					}
				}
			},
			"TextAreaControl" : 
			{
				"self" : 
				{
					"readonly" : 
					{
					},
					"mouseover" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"focused" : 
					{
						"border" : nexacro.BorderObject("1px solid #18181B")
					},
					"nulltext" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"disabled" : 
					{
						"color" : nexacro.ColorObject("#A1A1AA")
					},
					"enabled" : 
					{
						"border" : nexacro.BorderObject("1px solid #E4E4E7"),
						"padding" : nexacro.PaddingObject("4px 6px 0px 6px"),
						"color" : nexacro.ColorObject("#18181B"),
						"wordWrap" : "char",
						"font" : nexacro.FontObject("400 12px/16px \"NotoSansKR-Regular\"")
					}
				}
			},
			"charcounttext" : 
			{
				"parent" : 
				{
					"TextFieldControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 3px"),
								"color" : nexacro.ColorObject("#A1A1AA"),
								"letterSpacing" : nexacro.CSSValueObject("-0.3px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					},
					"MultiLineTextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 3px"),
								"color" : nexacro.ColorObject("#6D6D6D"),
								"letterSpacing" : nexacro.CSSValueObject("-0.3px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					},
					"TextField" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 3px"),
								"color" : nexacro.ColorObject("#A1A1AA"),
								"letterSpacing" : nexacro.CSSValueObject("-0.3px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					},
					"MultiLineTextFieldControl" : 
					{
						"self" : 
						{
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 3px"),
								"color" : nexacro.ColorObject("#6D6D6D"),
								"letterSpacing" : nexacro.CSSValueObject("-0.3px"),
								"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
							}
						}
					}
				}
			},
			"weekitem" : 
			{
				"parent" : 
				{
					"body" : 
					{
						"parent" : 
						{
							"DatePickerControl" : 
							{
								"self" : 
								{
									"sunday" : 
									{
										"color" : nexacro.ColorObject("#EF4444")
									},
									"saturday" : 
									{
										"color" : nexacro.ColorObject("#3B82F6")
									},
									"enabled" : 
									{
										"color" : nexacro.ColorObject("#18181B")
									}
								}
							},
							"datepicker" : 
							{
								"parent" : 
								{
									"Calendar" : 
									{
										"class" : [
										{
											"cal_MF_Cal" : 
											{
												"self" : 
												{
													"enabled" : 
													{
														"color" : nexacro.ColorObject("#9D9D9D"),
														"font" : nexacro.FontObject("400 12px \"NotoSansKR-Regular\"")
													}
												}
											}
										}
										]
									}
								}
							}
						}
					}
				}
			},
			"popupmenuitemtext" : 
			{
				"parent" : 
				{
					"popupmenuitem" : 
					{
						"parent" : 
						{
							"menupopupmenu" : 
							{
								"parent" : 
								{
									"Menu" : 
									{
										"self" : 
										{
											"enabled" : 
											{
												"color" : nexacro.ColorObject("#FFFFFF")
											}
										}
									}
								}
							},
							"PopupMenuControl" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 0px 5px 10px")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 0px 5px 10px")
									}
								}
							},
							"PopupMenu" : 
							{
								"self" : 
								{
									"mouseover" : 
									{
									},
									"disabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 0px 5px 10px")
									},
									"enabled" : 
									{
										"padding" : nexacro.PaddingObject("5px 0px 5px 10px")
									}
								}
							}
						}
					}
				}
			},
			"spindownbutton" : 
			{
				"parent" : 
				{
					"SpinControl" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							}
						}
					},
					"Spin" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							},
							"focused" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownN.png')")
							},
							"disabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownD.png')")
							},
							"pushed" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							},
							"enabled" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownN.png')")
							},
							"selected" : 
							{
								"icon" : nexacro.UrlObject("url('theme://images/spn_WF_DownO.png')")
							}
						}
					}
				}
			},
			"ListViewBandExpandbarControl" : 
			{
				"self" : 
				{
					"expand" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_Expand.png')")
					},
					"collapse" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_Collapse.png')")
					},
					"enabled" : 
					{
						"icon" : nexacro.UrlObject("url('theme://images/lstv_WF_Expand.png')")
					}
				}
			},
			"menuitem" : 
			{
				"parent" : 
				{
					"Menu" : 
					{
						"self" : 
						{
							"mouseover" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"focused" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"disabled" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF")
							},
							"enabled" : 
							{
								"padding" : nexacro.PaddingObject("0px 25px 0px 25px"),
								"color" : nexacro.ColorObject("#FFFFFF"),
								"font" : nexacro.FontObject("700 12px \"NotoSansKR-Bold\"")
							},
							"selected" : 
							{
								"color" : nexacro.ColorObject("#FFFFFF")
							}
						}
					}
				}
			}

		},
		{
			"includeStatusMap" : true,
			"hasListViewExpandStatus" : true,
			"applyMarkupValidation" : true
		}
		);

		var imgcache = nexacro._getImageCacheMaps();
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Fav.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_FavD.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_FavS.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Grip.png")] = { width:5, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Menu.png")] = { width:15, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MenuD.png")] = { width:15, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_MenuS.png")] = { width:15, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_Sch.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_LF_SchD.png")] = { width:16, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Close.png")] = { width:7, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_CloseO.png")] = { width:7, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Home.png")] = { width:13, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_Open.png")] = { width:7, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MDI_OpenO.png")] = { width:7, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalNext.png")] = { width:13, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalNextO.png")] = { width:13, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalPrev.png")] = { width:13, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_CalPrevO.png")] = { width:13, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_MoreN.png")] = { width:18, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_MoreO.png")] = { width:18, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_RestoreN.png")] = { width:22, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_MF_RestoreO.png")] = { width:22, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_POP_Close.png")] = { width:12, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_POP_CloseN.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_POP_CloseO.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/btn_RF_Approval.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/btn_RF_Noti.png")] = { width:16, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/btn_RF_Sales.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/btn_RF_Schedule.png")] = { width:18, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/btn_RF_Weather.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_LogoutD.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_LogoutN.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_LogoutO.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MenuNextD.png")] = { width:8, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MenuNextN.png")] = { width:8, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MenuPrevD.png")] = { width:8, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_MenuPrevN.png")] = { width:8, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Next.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_Prev.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_SettingD.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_SettingN.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_SettingO.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_UserD.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_UserN.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_TF_UserO.png")] = { width:32, height:32 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Add.png")] = { width:14, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookmarkN.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookmarkND.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookmarkO.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookmarkS.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_BookmarkSD.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalClose.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalNext.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalNextO.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalOpen.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalPrev.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalPrevO.png")] = { width:10, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearNext.png")] = { width:16, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearNextO.png")] = { width:16, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearPrev.png")] = { width:16, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_CalYearPrevO.png")] = { width:16, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Collapse.png")] = { width:10, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Delete.png")] = { width:14, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Expand.png")] = { width:10, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hdec.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecD.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HdecO.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Hinc.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincD.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_HincO.png")] = { width:3, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_InputSearchD.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_InputSearchN.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_LeadingN.png")] = { width:11, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_None.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageDoubleNextD.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageDoubleNextN.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageDoublePrevD.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageDoublePrevN.png")] = { width:9, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageNextD.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PageNextN.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagePrevD.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_PagePrevN.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Refresh.png")] = { width:14, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RefreshD.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Reset.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ResetD.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Right.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RightD.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_RowCopy.png")] = { width:11, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Save.png")] = { width:12, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Search.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchD.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_SearchO.png")] = { width:15, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleDownD.png")] = { width:10, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleDownN.png")] = { width:10, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleLeftD.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleLeftN.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleRightD.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleRightN.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleUpD.png")] = { width:10, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_ShttleUpN.png")] = { width:10, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_TempSave.png")] = { width:12, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_TextReset.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_TextResetO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_TreeColl.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_TreeExpand.png")] = { width:15, height:15 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vdec.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VdecO.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_Vinc.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincD.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/btn_WF_VincO.png")] = { width:5, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/cal_MF_Dot.png")] = { width:5, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_CalNextD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_CalNextN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_CalNextO.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_CalPrevD.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_CalPrevN.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_CalPrevO.png")] = { width:5, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropD.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropINV.png")] = { width:15, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropN.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropO.png")] = { width:11, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/cal_WF_DropV.png")] = { width:16, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropD.png")] = { width:9, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropN.png")] = { width:9, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/cbo_WF_DropO.png")] = { width:9, height:5 };
		imgcache[nexacro._getImageLocation("theme://images/cell_MF_NoticeTitle.png")] = { width:7, height:2 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_IdN.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/chk_LOGIN_IdS.png")] = { width:18, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxD.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxEN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxEO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxESN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxESO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxSD.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxSN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/chk_WF_BoxSO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/div_WF_TstCustom.png")] = { width:71, height:29 };
		imgcache[nexacro._getImageLocation("theme://images/div_WF_TstError.png")] = { width:71, height:29 };
		imgcache[nexacro._getImageLocation("theme://images/div_WF_TstInfo.png")] = { width:71, height:29 };
		imgcache[nexacro._getImageLocation("theme://images/div_WF_TstSuccess.png")] = { width:71, height:29 };
		imgcache[nexacro._getImageLocation("theme://images/div_WF_TstWarning.png")] = { width:71, height:29 };
		imgcache[nexacro._getImageLocation("theme://images/dot_done.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/dot_progress.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/dot_stop.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/dot_wait.png")] = { width:20, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/dtf_WF_TimeDropN.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/dtf_WF_TimeDropO.png")] = { width:12, height:12 };
		imgcache[nexacro._getImageLocation("theme://images/edt_LOGIN_ID.png")] = { width:57, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/edt_LOGIN_PW.png")] = { width:57, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/essential.png")] = { width:4, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_Delete.png")] = { width:7, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeClose.png")] = { width:20, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeItem.png")] = { width:12, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeItem2.png")] = { width:26, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/grd_LF_TreeOpen.png")] = { width:20, height:26 };
		imgcache[nexacro._getImageLocation("theme://images/grd_MF_MegaMenu.png")] = { width:6, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/grd_WF_Nodata.png")] = { width:45, height:44 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Label01.png")] = { width:41, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Label02.png")] = { width:41, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Label03.png")] = { width:41, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Label04.png")] = { width:41, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Label05.png")] = { width:41, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Profile.png")] = { width:70, height:70 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather01.png")] = { width:90, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather02.png")] = { width:109, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather03.png")] = { width:137, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather04.png")] = { width:90, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather05.png")] = { width:90, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather06.png")] = { width:109, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather07.png")] = { width:100, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather08.png")] = { width:90, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_MF_Weather09.png")] = { width:90, height:90 };
		imgcache[nexacro._getImageLocation("theme://images/img_POP_Confirm.png")] = { width:39, height:39 };
		imgcache[nexacro._getImageLocation("theme://images/img_POP_Error.png")] = { width:39, height:39 };
		imgcache[nexacro._getImageLocation("theme://images/img_POP_Warning.png")] = { width:39, height:40 };
		imgcache[nexacro._getImageLocation("theme://images/img_POP_Work.png")] = { width:39, height:39 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Invalid.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Subtitle.png")] = { width:4, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_TreeColl.png")] = { width:16, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_TreeExpand.png")] = { width:16, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_TreeLeaf.png")] = { width:12, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/img_WF_Valid.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/loadingimage.gif")] = { width:86, height:85 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Collapse.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Expand.png")] = { width:24, height:24 };
		imgcache[nexacro._getImageLocation("theme://images/lstv_WF_Image.png")] = { width:53, height:53 };
		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_Close.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/mcbo_WF_CloseO.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_NextD.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_NextN.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PmnuChk.png")] = { width:16, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PrevD.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/mnu_WF_PrevN.png")] = { width:6, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/pill_cancel.png")] = { width:47, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pill_delay.png")] = { width:47, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pill_done.png")] = { width:47, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pill_hold.png")] = { width:47, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pill_progress.png")] = { width:47, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pill_received.png")] = { width:47, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pill_wait.png")] = { width:47, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_ItemSelect.png")] = { width:4, height:6 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextD.png")] = { width:14, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextN.png")] = { width:14, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_NextO.png")] = { width:14, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevD.png")] = { width:14, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevN.png")] = { width:14, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_PrevO.png")] = { width:14, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_SelBtn.png")] = { width:4, height:7 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemD.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemE.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemEO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemESN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemESO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemN.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemS.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemSD.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/rdo_WF_ItemSO.png")] = { width:14, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownD.png")] = { width:8, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownN.png")] = { width:8, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_DownO.png")] = { width:8, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpD.png")] = { width:8, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpN.png")] = { width:8, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/spn_WF_UpO.png")] = { width:8, height:4 };
		imgcache[nexacro._getImageLocation("theme://images/sta_LF_Expand.png")] = { width:17, height:13 };
		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_ID.png")] = { width:57, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_Logo.png")] = { width:116, height:107 };
		imgcache[nexacro._getImageLocation("theme://images/sta_LOGIN_PW.png")] = { width:57, height:16 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineH.png")] = { width:17, height:9 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GLineV.png")] = { width:9, height:17 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_GuideTxt.png")] = { width:3, height:11 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SchLabel.png")] = { width:23, height:3 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_SubTitle.png")] = { width:6, height:14 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_Title.png")] = { width:6, height:18 };
		imgcache[nexacro._getImageLocation("theme://images/sta_WF_ToggleLine.png")] = { width:1, height:22 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_Close.png")] = { width:8, height:8 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnD.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnN.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_NextBtnO.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PreBtnD.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PreBtnN.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/tab_WF_PreBtnO.png")] = { width:5, height:10 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Close.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseD.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_CloseO.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Max.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MaxD.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MaxO.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Min.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinD.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_MinO.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_Normal.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalD.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme://images/tib_WF_NormalO.png")] = { width:22, height:20 };
		imgcache[nexacro._getImageLocation("theme:://images/mnu_WF_PmnuChk.png")] = { width:0, height:0 };
		imgcache[nexacro._getImageLocation("theme://images/pmnu_WF_Next.png")] = { width:0, height:0 };
		imgcache[nexacro._getImageLocation("theme://images/dark/spt_WF_H.png")] = { width:0, height:0 };
	};
}
)();
