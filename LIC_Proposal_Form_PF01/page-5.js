const Page_5 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageOrientation: 'landscape',
    pageBreak : "before",
    fontSize : 9.5,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 2,
              paddingTop: (i, node) => 2,
            },
            table: {
              widths: [
                10,50,50,55,"*","*","*","*","*","*"
              ],
              body: [
                [
                  {text:"21."},
                  {
                    columns:[
                      {text:"Particulars of the Plan/s proposed for Life Insurance"},
                      {
                        text:convertTextToRtl("تفاصيل الخطة / الخطط المقترحة من أجل التأمين على الحياة"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    colSpan:9
                  },{},{},{},{},{},{},{},{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الخطة"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Plan"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("المدة"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(")السنوات("),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Term"},
                      {text:"(Years)"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مدة دفع"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("القسط"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Premium"},
                      {text:"paying term"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("طريقة الدفع"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("سنوي / نصف سنوي /"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("ربع سنوي /"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("شهرية / قسط واحد"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Mode: Yly/ Hly/ "},
                      {text:"Qly/Mly/S.P."},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مبلغ التأمين"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(")بالدولار الأمريكي("),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Sum Assured USD ($)"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("القسط"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(")بالدولار الأمريكي("),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Premium USD ($)"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("إضافة قسط"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(")بالدولار الأمريكي("),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Top Up Premium\nUSD ($)"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مزايا تغطية الحوادث )يرجى"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("ذكرمبلغ التأمين لتغطية)"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Double Accident benefits required (please state the Sum Assured)"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("إذا التاريخ بتاريخ "),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("سابق مطلوب"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Date of commencement (if back dating required)"},
                    ], 
                    style:"center"
                  }
                ],
                [
                  {},{text:"\n\n"},{},{},{},{},{},{},{},{}
                ],
                [
                  {},{text:"\n\n"},{},{},{},{},{},{},{},{}
                ],
                [
                  {},
                  {
                    columns:[
                      {stack:[
                        {
                          text:convertTextToRtl("المزايا الإضافية للتأمين، عند الإختيار:"),
                          style: [{fontSize: 10}, "arabic"]
                        },
                        {
                          text:"For additional insurance riders,if opted"
                        }
                      ]},
                      {stack:[
                        {
                          text:convertTextToRtl(")لا / نعم( ميزة حماية الأسرة مطلوبة"),
                          style: [{fontSize: 10}, "arabic"]
                        },
                        {
                          text:"A) Premium Waiver benefit required"
                        }
                      ]},
                    ],
                    colSpan:5,
                    border:[true, true, false, true]
                  },{},{},{},{},
                  {
                    columns:[
                      {stack:[
                        {
                          text:"YES",
                          style: [{fontSize: 10}]
                        },
                        {
                          text:"NO",
                          style: [{fontSize: 10}]
                        },
                      ]},
                      {stack:[
                        {
                          image : "./assets/images/uncheck.png",
                          width: 10,
                          border:[false,false,false,false],
                          style:"center"
                        },
                        {text:"\n", style:{fontSize:3}},
                        {
                          image : "./assets/images/uncheck.png",
                          width: 10,
                          border:[false,false,false,false],
                          style:"center"
                        }
                      ]},
                    ],
                    border:[false, true, false, true]
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl(")لا / نعم( ميزة حماية الأسرة مطلوبة"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:"B) Family Protection benefit required"
                      }
                    ],
                    colSpan:2,
                    border:[false, true, false, true]
                  },{},
                  {
                    columns:[
                      {stack:[
                        {
                          text:"YES",
                          style: [{fontSize: 10}]
                        },
                        {
                          text:"NO",
                          style: [{fontSize: 10}]
                        },
                      ]},
                      {stack:[
                        {
                          image : "./assets/images/uncheck.png",
                          width: 10,
                          border:[false,false,false,false],
                          style:"center"
                        },
                        {text:"\n", style:{fontSize:3}},
                        {
                          image : "./assets/images/uncheck.png",
                          width: 10,
                          border:[false,false,false,false],
                          style:"center"
                        }
                      ]}
                    ],
                    border:[false, true, true, true]
                  }
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
            margin:[0,10],
            table: {
              widths: [
                10,"*","*","*","*","*","*","*","*","*"
              ],
              body: [
                [
                  {text:"22."},
                  {
                    columns:[
                      {text:"Details of the previous insurance including policies with disability or critical illness cover with any insurance company worldwide."},
                      {
                        stack:[
                          {
                            text:convertTextToRtl("تفاصيل التأمين السابق الخاصة بالإعاقة أو تغطية الأمراض الخطيرة مع أي شركة تأمين في جميع"),
                            style: ["right", {fontSize: 10}, "arabic"]
                          },
                          {
                            text:convertTextToRtl("أنحاء العالم؟ إذا كانت الإجابة بنعم ، يرجى إكمال التفاصيل أدناه"),
                            style: ["right", {fontSize: 10}, "arabic"]
                          },
                        ]
                      }
                    ],
                    colSpan:9
                  },{},{},{},{},{},{},{},{}
                ],
                [
                  {},{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("أرقام بوليصة التأمين"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Policy Numbers"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("اسم شركة التأمين"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Name of"},
                      {text:"Insurance Company"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("سنة الإصدار"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Year Of Issue"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("المزايا و مبلغ تغطية التأمين"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(")بالدولار الأمريكي("),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Sum Assured USD ($)"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مع أو بدون التأمين"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("ضد الحوادث"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Accident Benefit\nYES/NO"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("فترة البوليصة"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Policy Term"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("سبب تغطية التأمين"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Purpose for Cover"},
                    ], 
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الوضع الحالي"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("لوثيقة التأمين"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"Present Status"},
                      {text:"of the policy"},
                    ], 
                    style:"center"
                  },
                ],
                [
                  {},{text:"\n\n"},{},{},{},{},{},{},{},{}
                ],
                [
                  {},{text:"\n\n"},{},{},{},{},{},{},{},{}
                ],
                [
                  {},
                  {
                    columns:[
                      {stack:[
                        {
                          text:"Please Note: The Company does not entertain any fresh proposal for insurance where a policy has lapsed or has been converted into paid up policy within the last three years or surrendered in last year."
                        }
                      ]},
                      {stack:[
                        {
                          text:convertTextToRtl("ملاحظة : يُرجى العلم أن الشركة لا تقدم أي طلب جديد للتأمين في حالة انقضاء أحد وثائق التأمين أو"),
                          style: [{fontSize: 10}, "arabic"]
                        },
                        {
                          text:convertTextToRtl("إذا تم تحويلها إلى وثيقة مدفوعة خلال السنوات الثلاث الأخيرة أو تسليمها في العام الماضي."),
                          style: [{fontSize: 10}, "arabic"]
                        },
                      ], style:"right"},
                    ],
                    colSpan:9,
                  },
                  {},{},{},{},{},{},{},{}
                ]
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
              widths: [750],
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


