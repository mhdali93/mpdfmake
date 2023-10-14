const Page_5 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 9.5,
    table : {
      body : [  
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,258,258
              ],
              body: [
                [
                  {
                    text:"22.",rowSpan:2
                  },
                  {
                    text:"Is any application for revival of any of your policies or policies of Life to be assured is under Consideration?",
                    border:[true, true, false, false],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل يوجد أي طلب لإبقاء أي من البوالص الخاصة بك أو بوالص"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("التأمين على الحياة قيد النظر؟ إذا كانت الإجابة بنعم، اذكر التفاصيل"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, false],
                  }
                ],
                [
                  {
                    text:" ",
                  },
                  {
                    border: [false, false, false, true],
                    margin:[0,5,0,30],
                    layout: 'noBorders',
                    table: {
                      widths: [
                        20,20,20,20,"*"
                      ],
                      body: [
                        [
                          {
                            text:"Yes",
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"/ No",
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"If yes, please provide details.",
                          },
                        ],
                      ],
                    }
                  },
                  {
                    text:[
                      { text:convertTextToRtl(" "),
                      style: ["right"],
                      },
                      {
                        text:"\n",
                      },
                    ],border:[false,false,true,true],
                  },
                ],
                [
                  {
                    text:"23.",rowSpan:4
                  },
                  {
                    text:"Travel : a). Please provide details of travel that you have taken over the last 12 months:",
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("السفر يرجى تقديم تفاصيل السفر التي قمت بها خلال الـ 12 شهرًا "),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("الماضية"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, true],
                  }
                ],
                [
                  {
                    text:" ",
                  },
                  {
                    border: [false, false, false, true],
                    margin:[-5,-3,-5,0],
                    
                    table: {
                      widths: [
                        125,124
                      ],
                      body: [
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl("الدولة و المدينة١"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nCountry & City",
                                style: ["center", {fontSize: 8}, ]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl("مدة البقاء خلال الرحلة"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nDuration of Stay Per Visit",
                                style: ["center", {fontSize: 8}, "Times"]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(""),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                        ],
                      ],
                    }
                  },
                  {
                    border: [false, false, false, true],
                    margin:[-5,-3,-5,0],
                    
                    table: {
                      widths: [
                        100,149
                      ],
                      body: [
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl("عدد الرحلات سنويا"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nNumber of visits per year",
                                style: ["center", {fontSize: 8}, "Times"]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl("سبب السفر ( عمل ، سياحة)"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nPurpose of Travel (Business, Vacation)",
                                style: ["center", {fontSize: 8}, "Times"]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                        ],
                      ],
                    }
                  },
                ],
                [
                  {
                    text:"",
                  },
                  {
                    text:"Please provide details of travel that you intend to undertake in the following 12 months:",
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("اذا كنت تنوي السفر خلال الـ 12 شهراً القادمة. يرجى ذكر التفاصيل : "),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, true],
                  }
                ],
                [
                  {
                    text:" ",
                  },
                  {
                    border: [false, false, false, true],
                    margin:[-5,-3,-5,0],
                    
                    table: {
                      widths: [
                        125,124
                      ],
                      body: [
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl("الدولة و المدينة١"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nCountry & City",
                                style: ["center", {fontSize: 8}, ]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl("مدة البقاء خلال الرحلة"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nDuration of Stay Per Visit",
                                style: ["center", {fontSize: 8}, "Times"]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(""),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                        ],
                      ],
                    }
                  },
                  {
                    border: [false, false, false, true],
                    margin:[-5,-3,-5,0],
                    
                    table: {
                      widths: [
                        100,149
                      ],
                      body: [
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl("عدد الرحلات سنويا"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nNumber of visits per year",
                                style: ["center", {fontSize: 8}, "Times"]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl("سبب السفر ( عمل ، سياحة)"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\nPurpose of Travel (Business, Vacation)",
                                style: ["center", {fontSize: 8}, "Times"]
                              },
                            ],
                            style: {fillColor: '#f8eff2'},
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                          {
                            text:[
                              {
                                text:convertTextToRtl(" "),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {
                                text:"\n",
                                style: ["center", {fontSize: 10}, "Times"]
                              },
                            ],border:[true,true,true,false],
                          },
                        ],
                      ],
                    }
                  },
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 0,
              paddingTop: (i, node) => 1,
            },
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,140,376
              ],
              body: [
                [
                  {text:"24.", rowSpan:4},
                  {
                    stack:[
                      {text:[
                        {
                          text: "Please provide your Bank Account details, which you will \t\t\t\t\t\t"
                        },
                        {
                          text:convertTextToRtl("تفاصيل الحساب المصرفي للتسديد المباشر للحساب المصرفي ، ، والتي "),
                          style: ["right", {fontSize: 9}, "arabic"]
                        }
                      ]},
                      {text:[
                        {
                          text: "be using to pay the premium. Payment of premium by\t\t\t\t\t\t\t"
                        },
                        {
                          text:convertTextToRtl("ستستخدم لدفع قسط التأمين عمليات التحويل التلكس / الشيك يجب ان "),
                          style: ["right", {fontSize: 9}, "arabic"]
                        }
                      ]},
                      {text:[
                        {
                          text: "way of cheque and telex transfers must be in favor of\t\t\t\t\t\t\t\t"
                        },
                        {
                          text:convertTextToRtl("فقط"),
                          style: ["right", {fontSize: 9}, "arabic"]
                        },
                        {
                          text: " (LIC International) "
                        },
                        {
                          text:convertTextToRtl("تكون لصالح شركة التأمين على الحياة "),
                          style: ["right", {fontSize: 9}, "arabic"]
                        },
                      ]},
                      {
                        text: "LIC International only"
                      },
                    ],
                    style:"justify",
                    colSpan:2
                  },{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("اسم البنك"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Name of the Bank", style:"center" },
                    ],
                  },
                  {}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الفرع البنك"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Bank Branch", style:"center" },
                    ],
                  },
                  {}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("رقم الحساب المصرفي الدولي"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"IBAN", style:"center" },
                    ],
                  },
                  {}
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 2,
              paddingTop: (i, node) => 2,
            },
            table: {
              widths: [
                10,280,236
              ],
              body: [
                [
                  {text:""},
                  {
                    text:[
                      {
                        text:"(Question No. 25 & 26 are for UAE Customers) \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                      },
                      {
                        text:convertTextToRtl("لزبائن الإمارات العربية المتحدة فقط"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                    ],
                    border:[true, true, true, true],colSpan:2,
                    style:"justify"
                  },
                  {}
                ],
                [
                  {text:"25."},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("يرجى توضيح بيانات البنوك التي تتعامل معها / أو التي لديك حساب فيها، يرجى توضيح "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("اسم البنك ونوع الحساب المصرفي )جاري / ادخار( )في حالة كان الحساب غير شخصي "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("وكانت جميع المعاملات البنكية تتم من حساب شركة، يجب توضيح بيانات حساب الشركة "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"Please provide details of banks you are dealing with/holding account with. Please provide bank name and type of account maintained (current/savings) \nIn case no personal account is maintained and all transactions are being made from company account, details of company accounts should be provided."
                      }
                    ],
                    style:"justify"
                  },
                  {
                    stack:[
                      { text:"\n1. _______________________________________" },
                      { text:"\n_________________________________________" },
                      { text:"\n2. _______________________________________" },
                      { text:"\n_________________________________________" },
                    ],
                    style:{fontSize: 11},
                    border:[false, true, true, true],
                  }
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 0
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 5",
                    style: ["center", {fontSize: 10}, "bold", "Times"]
                  }
                ]
              ],
            },
          }
        ],
      ]
    }
  }
}

module.exports = Page_5