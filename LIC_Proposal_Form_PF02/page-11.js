const Page_11 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 8,
    table : {
      body : [
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
              widths: [10,200,125,48,47,48,47],
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
                    colSpan:2,
                    style:["center","header", {fontSize: 9.5}]
                  },{},
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ١"),
                        style: ["center", {fontSize: 8}, "arabic"]
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
                        style: ["center", {fontSize: 8}, "arabic"]
                      },
                      { text:"Proposer / Life to be Assured 2", style:["center", {fontSize: 7}] },
                    ],
                    style:"header",
                  },{}
                ],
                [
                  {},{},{},
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
                  {text:"8."},
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
                              {
                                text:"In the past 5 years, have you ever been admitted to a hospital or been absent from work for a period of more than five days due to any illness or injury?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("في السنوات الخمس الماضية ، هل سبق لك أن "),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("دخلت المستشفى أو تغيبت عن العمل لمدة تزيد عن"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("خمسة أيام بسبب أي مرض أو إصابة؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:2,
                  },{},
                  {},{},{},{}
                ],
                [
                  {text:"9."},
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
                              {
                                text:"In the past 12 months, have you had any medical symptom, change in your physical or mental health for which you have not consulted a doctor, hospital or medical practitioner?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("خلال الاثني عشر شهرًا الماضية ، هل عانيت من"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أي أعراض طبية أو تغير في صحتك البدنية أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("العقلية لم تستشر طبيبًا أو مستشفى أو ممارسا"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("طبيا بسببه؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:2,
                  },{},
                  {},{},{},{}
                ],
                [
                  {text:"10."},
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
                              {
                                text:"Are you awaiting the result of any medical investigation, procedure follow up or any other medical or blood test?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل تنتظر نتيجة أي فحص طبي أو متابعة إجراء أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أي فحص طبي أو فحص دم؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:2,
                  },{},
                  {},{},{},{}
                ],
                [
                  {text:"11."},
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
                              {
                                text:"In the next 12 months, do you intend to have any consultation or check up in connection with any medical symptom or condition or are you waiting for the result of any medical investigation?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("في الاثني عشر شهرًا القادمة ، هل تنوي إجراء أي"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("استشارة أو فحص فيما يتعلق بأي أعراض أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("حالة طبية أم أنك تنتظر نتيجة أي فحص طبي؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:2,
                  },{},
                  {},{},{},{}
                ],
                [
                  {text:"12."},
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
                              {
                                text:"What has been your usual state of health?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("ماهي حالتك الصحية المعتادة؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:2,
                  },{},
                  {},{},{},{}
                ],
                [
                  {text:"13.", rowSpan:4},
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    colSpan:5,
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Please provide details of the doctor/clinic / hospital you are visiting for your well-being (even if it is in a country other than your current country of residence)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("يرجى تقديم تفاصيل عن الطبيب / العيادة / المستشفى الذي تزوره"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("من أجل صحتك )حتى لو كانت في بلد آخر غير بلد إقامتك الحالي("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:6,
                  },{},
                  {},{},{},{}
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Name of Doctor / ",
                        style: ["center", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("اسم الطبيب"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      }
                    ],
                  },{text:"", colSpan:5},
                  {},{},{},{}
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Name of Clinic / Hospital  ",
                        style: ["center", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("المستشفى / اسم العيادة"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      }
                    ],
                  },{text:"", colSpan:5},
                  {},{},{},{}
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Address / ",
                        style: ["center", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("العنوان"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      }
                    ],
                  },{text:"", colSpan:5},
                  {},{},{},{}
                ],
              ]
            }
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
              widths: [10,80,70,75,80,90,120],
              body: [
                [
                  {
                    text:"*Q. No. 15 and 16 are not applicable for minor lives.",
                    colSpan:4,
                    border:[true,true,false,true]
                  },{},{},{},
                  {
                    text:convertTextToRtl("سؤال رقم ١٥ و ١٦ لا ينطبق على حياة القاصرين"),
                    style: ["right", {fontSize: 8}, "arabic"],
                    colSpan:3,
                    border:[false,true,true,true]
                  },{},{}
                ],
                [
                  {
                    text:"14.", rowSpan:9
                  },
                  {
                    text:"Family History of Proposer/Life to be assured 1\nPlease provide details of your family history below. Particular importance is where your father, mother or any of your brothers or sisters had died or suffered from heart disease, cancer, stroke, multiple sclerosis, diabetes or any neurological disorders before age of 60 years or from a familial / hereditary disorder.",
                    colSpan:3,
                    style:"justify",
                    border:[true,true,false,true]
                  },{},{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl(" التاريخ العائلي لمقدم الطلب / المؤمن على حياته ١"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("يرجى تقديم تفاصيل تاريخ عائلتك أدناه من الأهمية بمكان أن"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("يكون والدك أو والدتك أو أي من إخوتك أو أخواتك قد مات أو عانى من"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("أمراض القلب أو السرطان أو السكتة الدماغية أو التصلب المتعدد أو"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("مرض السكري أو أي اضطرابات عصبية قبل سن 60 عاما أو بسبب"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("اضطراب عائلي / وراثي"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                    ],
                    colSpan:3,
                    border:[false,true,true,true]
                  },{},{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("صلة القرابة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Relationship", style:"center" },
                    ],
                    style:["center","header", {fontSize: 9.5}]
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الحي"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Living", style:"center" },
                    ],
                    style:["center","header", {fontSize: 9.5}],
                    colSpan:3
                  },{},{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("المتوفى"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Dead", style:"center" },
                    ],
                    style:["center","header", {fontSize: 9.5}],
                    colSpan:2
                  },{}
                ],
                [
                  {},
                  {
                    text:"",
                    style:["center","header"]
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("السن"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Age", style:"center" },
                    ],
                    style:["center","header", {fontSize: 9.5}]
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الحالة الصحية المعتادة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Present State of Health", style:"center" },
                    ],
                    style:["center","header", {fontSize: 9.5}],
                    colSpan:2
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("السن عند الوفاة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Age at Death", style:"center" },
                    ],
                    style:["center","header", {fontSize: 9.5}]
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("سبب الوفاة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Cause of death", style:"center" },
                    ],
                    style:["center","header", {fontSize: 9.5}]
                  }
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الأب"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Father", style:"center" },
                    ],
                    style:["center", {fontSize: 9.5}]
                  },{},
                  { text:"", colSpan:2 },{},{},{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الأم"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Mother", style:"center" },
                    ],
                    style:["center", {fontSize: 9.5}]
                  },{},
                  { text:"", colSpan:2 },{},{},{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الاخ"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Brother", style:"center" },
                    ],
                    style:["center", {fontSize: 9.5}]
                  },{},
                  { text:"", colSpan:2 },{},{},{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الاخ"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Brother", style:"center" },
                    ],
                    style:["center", {fontSize: 9.5}]
                  },{},
                  { text:"", colSpan:2 },{},{},{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الأخت"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Sister", style:"center" },
                    ],
                    style:["center", {fontSize: 9.5}]
                  },{},
                  { text:"", colSpan:2 },{},{},{}
                ],
                [
                  {},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الأخت"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Sister", style:"center" },
                    ],
                    style:["center", {fontSize: 9.5}]
                  },{},
                  { text:"", colSpan:2 },{},{},{}
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
                    text:"Page 11",
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

module.exports = Page_11