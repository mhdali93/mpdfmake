const Page_9 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 9,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 0,
              paddingTop: (i, node) => 1,
            },
            table: {
              widths: [
                10,140,380
              ],
              body: [
                [
                  {text:"37.", rowSpan:4},
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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            table: {
              widths: [280,260],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("البيان الشخصي لمقدم الطلب والشخص الذي يريد التأمين على حياته بشأن الحالة الصحية الحالية"),
                        style: ["right", {fontSize: 12}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الجزء ب:"),
                        style: ["right", {fontSize: 15}, "arabic", "bold"]
                      },
                      {
                        text:"\nPart B: ",
                        style: ["left", {fontSize: 14}, "Arial", "bold"]
                      },
                      {
                        text:"Personal Statement of Proposer and Life to be Assured about present state of health",
                        style: ["left", {fontSize: 12}, "Arial", "bold"]
                      }
                    ],
                    colSpan:2
                  },{}
                ],
                [
                  {
                    border: [false, false, false, false],
                    canvas: [
                      {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 550, y2: 0,
                        lineWidth: 1
                      },
                    ],
                    colSpan:2
                  },{}
                ],
                [
                  {
                    text:"Note: - Please read carefully and answer every Question. Do not use dots, dashes, or Ditto Marks. In case answer is yes please give full details in the space provided or attach separate sheet.",
                    style:["justify",{fontSize:10}],
                    border: [false, false, false, false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("احظة: يُرجى قراءة كل سؤال بعناية لا تستخدم النقاط أو الخطوط"),
                        style: ["right", {fontSize: 10}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الفاصلة، في حالة الإجابة بنعم، يُرجى سرد التفاصيل الكاملة في"),
                        style: ["right", {fontSize: 10}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("المساحة المتوفرة أو إرفاق ورقة منفصلة"),
                        style: ["right", {fontSize: 10}, "arabic", "bold"]
                      }
                    ],
                    border: [false, false, false, false],
                  }
                ],
                [
                  {
                    stack:[
                      {
                        text:convertTextToRtl(")لا يلزم ملء هذا الجزء في حالة عدم وجود وثائق تأمين لتغطية المخاطر("),
                        style: ["center", {fontSize: 12}, "arabic", "bold"]
                      },
                      {
                        text:"(This part need not be filled in case of without risk cover policies)",
                        style: ["center", "bold",{fontSize: 10}]
                      }
                    ],
                    border: [false, false, false, false],
                    colSpan:2
                  },{}
                ]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0,
              paddingLeft: (i, node) => 2,
              paddingRight: (i, node) => 2,
            },
            table: {
              widths: [10,325,48,47,48,47],
              body: [
                [
                  {
                    text:"\n\nNo.",
                    rowSpan:2,
                    style:["center","header"]
                  },
                  {
                    stack:[
                      {text:"\n"},
                      {
                        text:convertTextToRtl("السؤال"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Question", style:"center" },
                    ],
                    rowSpan:2,
                    style:["center","header", {fontSize: 9.5}]
                  },
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ١"),
                        style: ["center", {fontSize: 8.5}, "arabic"]
                      },
                      { text:"Proposer / Life to be Assured 1", style:["center", {fontSize: 7}] },
                    ],
                    style:"header",
                  },{},
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ۲"),
                        style: ["center", {fontSize: 8.5}, "arabic"]
                      },
                      { text:"Proposer / Life to be Assured 2", style:["center", {fontSize: 7}] },
                    ],
                    style:"header",
                  },{}
                ],
                [
                  {},{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Yes", style:"center" },
                    ],
                    style:"header",
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"No", style:"center" },
                    ],
                    style:"header",
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Yes", style:"center" },
                    ],
                    style:"header",
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"No", style:"center" },
                    ],
                    style:"header",
                  }
                ],
                [
                  {text:"1."},
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {text:"Proposer / Life to be Assured 1", style:"center"},
                              {text:[
                                {
                                  text:convertTextToRtl("الطول"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                                {text:"\t\t\t\t\t\t\t\t\t"},
                                {
                                  text:convertTextToRtl("سم"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                              ]},
                              {text:[
                                {text:"Height"},
                                {text:"__________________"},
                                {text:"Cms"},
                              ], style:"center"},
                              {text:"\n"},
                              {text:"Proposer / Life to be Assured 2", style:"center"},
                              {text:[
                                {
                                  text:convertTextToRtl("الطول"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                                {text:"\t\t\t\t\t\t\t\t\t"},
                                {
                                  text:convertTextToRtl("سم"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                              ]},
                              {text:[
                                {text:"Height"},
                                {text:"__________________"},
                                {text:"Cms"},
                              ], style:"center"},
                              {
                                text:"\nHas your weight changed by more than 5kg in the last 12 months?", 
                                style: "justify"
                              },
                              {
                                text:"If yes, please provide reasons"
                              }
                            ],
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("مقدم الطلب ١ / المؤمن على حياته"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {text:[
                                {
                                  text:convertTextToRtl("الوزن"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                                {text:"\t\t\t\t\t\t\t\t\t"},
                                {
                                  text:convertTextToRtl("كجم"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                              ]},
                              {text:[
                                {text:"Weight"},
                                {text:"__________________"},
                                {text:"Kgs"},
                              ], style:"center"},
                              {text:"\n"},
                              {
                                text:convertTextToRtl("مقدم الطلب ۲ / المؤمن على حياته"),
                                style: ["center", {fontSize: 10}, "arabic"]
                              },
                              {text:[
                                {
                                  text:convertTextToRtl("الوزن"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                                {text:"\t\t\t\t\t\t\t\t\t"},
                                {
                                  text:convertTextToRtl("كجم"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                              ]},
                              {text:[
                                {text:"Weight"},
                                {text:"__________________"},
                                {text:"Kgs"}
                              ], style:"center"},
                              {text:"\n", style:{fontSize:7}},
                              {
                                text:convertTextToRtl("هل تغير وزنك بأكثر من ۵ كجم في آخر ١۲ "),
                                style: ["center", {fontSize: 9.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("شهرا؟ اذا كانت الإجابة نعم يرجى ذكر السبب"),
                                style: ["center", {fontSize: 9.5}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"2."},
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: [180,130],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Have you smoked tobacco, e-cigarettes (Vape) or any other substance or used nicotine product within last 12 months?", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("بتدخين السجائر، السجائر هل قمت"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الإلكترونية )الشيشة الإلكترونية( أو"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                            ]
                          },
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            colSpan:2,
                            stack:[
                              {
                                text:convertTextToRtl("إذا كانت الإجابة بنعم ، يرجى تقديم النوع والكمية في اليوم"),
                                style: ["left", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"If yes, please provide the type and quantity per day:_________________"
                              },
                              {
                                text:convertTextToRtl("إذا كنت مدخنا سابقا ، فيرجى التأكيد عند التوقف عن التدخين"),
                                style: ["left", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"If you are ex-smoker, please confirm when you stopped smoking:",
                              },
                            ]
                          },{}
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            text:""
                          },{
                            border:[false,false,false,false],
                            table: {
                              widths:[45,10,10,10,10],
                              body: [
                                [
                                  {text:'',border:[false,false,true,false]},
                                  '', '', '\n', '\n'
                                ]
                              ]
                            },
                          }
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"3."},
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Do you consume alcohol?", 
                            style:"left"
                          },
                          {
                            border:[false,false,false,false],
                            text:convertTextToRtl("هل تستهلك الكحول؟"),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            colSpan:2,
                            stack:[
                              {
                                text:convertTextToRtl("إذا كانت الإجابة بنعم ، فيرجى تقديم عدد الوحدات المستهلكة في الأسبوع"),
                                style: ["left", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"If yes, please provide the number of units consumed per week:__________________"
                              }
                            ],
                          },{}
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            text:"1 unit = single measure of spirits or 125 ml glass of wine or 250 ml of beer", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("١ وحدة =  قياس واحد من المشروبات الروحية أو"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("  125 مل من كأس النبيذ أو 250 مل من البيرة"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              }
                            ],
                          },
                        ],
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"4."},
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Have you ever been advised to give up tobacco and/or alcohol for a specific reason?", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل تم نصحك من قبل بالتخلي عن التبغ و / أو "),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الكحول لسبب محدد؟"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              }
                            ],
                          },
                        ],
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"5."},
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Have you ever had, been treated for or had symptoms for the following conditions?", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل سبق لك أن عانيت أو عولجت أو عانيت من"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أعراض من الحالات التالية؟"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              }
                            ],
                          },
                        ],
                      ]
                    }
                  },
                  {},{},{},{}
                ]
              ]
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
                    text:"Page 9",
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

module.exports = Page_9