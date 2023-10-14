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
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,420,103
              ],
              body: [
                [
                  {
                    text:"13.",
                  },
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
                            text:"Did you ever have any accident or injury? YES/NO If yes please provide details", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل سبق لك أن تعرضت لأي حادث أو إصابة؟"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("اذا كانت الإجابة نعم يرجى ذكر التفاصيل."),
                                style: ["right", {fontSize: 7}, "arabic"]
                              }
                            ],
                          },
                        ],
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"14.",
                  },
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
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
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
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0,
              paddingLeft: (i, node) => 2,
              paddingRight: (i, node) => 2,
            },
            margin:[0,-5,0,0],
            table: {
              widths: [10,80,70,75,80,90,120],
              body: [
                [
                  {
                    text:"15.", rowSpan:9
                  },
                  {
                    text:"Family History of Proposer/Life to be assured 2\nPlease provide details of your family history below. Particular importance is where your father, mother or any of your brothers or sisters had died or suffered from heart disease, cancer, stroke, multiple sclerosis, diabetes or any neurological disorders before age of 60 years or from a familial / hereditary disorder.",
                    colSpan:3,
                    style:"justify",
                    border:[true,true,false,true]
                  },{},{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("التاريخ العائلي لمقدم الطلب / المؤمن على حياته ٢"),
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
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0,
              paddingLeft: (i, node) => 2,
              paddingRight: (i, node) => 2,
            },
            table: {
              widths: [10,"*",100,"*",100],
              body: [
                [
                  {
                    text:"16.", rowSpan: 10
                  },
                  {
                    text:[
                      {text: "For Female Proposer only: ", style:"bold"},
                      {text: "(Kindly fill in if applicable)"},
                    ],
                    colSpan:2,
                    style:"justify",
                    border:[true, true, false, true]
                  },{},
                  {
                    text:[
                      {text:"("},
                      {
                        text:convertTextToRtl("يُرجى ملء هذا الطلب، إن أمكن"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                      {text:")"},
                      {
                        text:convertTextToRtl("فقط لمقدمي الطلب النساء"),
                        style: [{fontSize: 9}, "arabic", "bold"]
                      },
                    ],
                    colSpan:2,
                    style:"right",
                    border:[false, true, true, true]
                  },{}
                ],
                [
                  {},
                  {
                    text:[
                      {text: "a. Personal Details:"},
                    ],
                    colSpan:2,
                    style:["justify", "header"],
                    border:[true, true, false, true]
                  },{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("أ - البيانات الشخصية"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                    ],
                    colSpan:2,
                    style:["right", "header"],
                    border:[false, true, true, true]
                  },{}
                ],
                [
                  {},
                  {
                    stack:[
                      {text:[
                        {
                          text:convertTextToRtl("إذا كانت الإجابة"),
                          style: [{fontSize: 9}, "arabic"]
                        },
                        { text:")" },
                        {
                          text:convertTextToRtl("هل أنت حامل الآن؟"),
                          style: [{fontSize: 9}, "arabic"]
                        },
                      ]},
                      {text:[
                        { text:"(" },
                        {
                          text:convertTextToRtl("نعم، يُرجى ذكر عدد أشهر الحمل"),
                          style: [{fontSize: 9}, "arabic"]
                        },
                      ]},
                      {
                        text:"Are you pregnant now? (If yes, how many months)"
                      }
                    ],
                    style:["center"],
                  },
                  {
                    stack:[
                      {text:"\n"},
                      {
                        text:convertTextToRtl("تاريخ آخر ولادة"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                      {
                        text:"State date of last delivery"
                      }
                    ],
                    style:["center"],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل أجريت أي عملية إجهاض أو عملية قيصرية؟"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("إذا كان الأمر كذلك، يُرجى إعطاء التفاصيل"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                      {
                        text:"Have you had any abortion or miscarriage or Caesarian section? If so please give details.",
                      }
                    ],
                    style:["center"],
                    border:[false, true, true, true]
                  },
                  {
                    stack:[
                      {text:"\n"},
                      {
                        text:convertTextToRtl("تاريخ آخر حيض"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                      {
                        text:"Date of last Menstruation",
                      }
                    ],
                    style:["center"],
                    border:[false, true, true, true]
                  }
                ],
                [
                  {},{text:"\n\n"},{},{},{}
                ],
                [
                  {},
                  {
                    text:"b. Any Disease or disorder of the breasts, cervix, uterus, ovaries or fallopian tubes? (Yes/No) If yes, please provide details.",
                    colSpan:2,
                    border:[true, true, false, true]
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("ب. أي مرض أو اضطراب في الثدي أو عنق الرحم أو الرحم أو"),
                      },
                      {
                        text:[
                          {text:convertTextToRtl(")نعم / لا(")},
                          {text:convertTextToRtl("المبايض أو قناتي فالوب؟")},
                        ],
                      },
                      {text:"\n\n"}
                    ],
                    colSpan:2,
                    style: [{fontSize: 9}, "arabic", "right"],
                    border:[false, true, true, true]
                  },{}
                ],
                [
                  {},
                  {
                    text:"c. Any complication of pregnancy or childbirth or a child with congenital abnormalities? (Yes/No) If yes, please provide details.",
                    colSpan:2,
                    border:[true, true, false, true]
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("ج. هل من مضاعفات الحمل أو الولادة أو إصابة الطفل بتشوهات خلقية؟ "),
                      },
                      {
                        text:convertTextToRtl(")نعم / لا(")
                      },
                      {text:"\n\n"}
                    ],
                    colSpan:2,
                    style: [{fontSize: 9}, "arabic", "right"],
                    border:[false, true, true, true]
                  },{}
                ],
                [
                  {},
                  {
                    text:[
                      {text: "d. If you are married, kindly furnish following details."},
                    ],
                    colSpan:2,
                    style:["justify", "header"],
                    border:[true, true, false, true]
                  },{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("د - إذا كنت متزوجة، يُرجى ذكر التفاصيل التالية:"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                    ],
                    colSpan:2,
                    style:["right", "header"],
                    border:[false, true, true, true]
                  },{}
                ],
                [
                  {},
                  {
                    stack:[
                      {text: "\ni. Husband's full name:"},
                      {text: "\n"}
                    ],
                    colSpan:2,
                    style:["justify"],
                    border:[true, true, false, true]
                  },{},
                  {
                    stack:[
                      {text: "\n", style:{fontSize:6}},
                      {
                        text:convertTextToRtl("ا. اسم الزوج بالكامل:"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                    ],
                    colSpan:2,
                    style:["right"],
                    border:[false, true, true, true]
                  },{}
                ],
                [
                  {},
                  {
                    stack:[
                      {text: "\nii. His occupation:"},
                      {text: "\n"}
                    ],
                    colSpan:2,
                    style:["justify"],
                    border:[true, true, false, true]
                  },{},
                  {
                    stack:[
                      {text: "\n", style:{fontSize:6}},
                      {
                        text:convertTextToRtl("اا. مهنته:"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                    ],
                    colSpan:2,
                    style:["right"],
                    border:[false, true, true, true]
                  },{}
                ],
                [
                  {},
                  {
                    stack:[
                      {text: "\niii. His annual Income:"},
                      {text: "\n"}
                    ],
                    colSpan:2,
                    style:["justify"],
                    border:[true, true, false, true]
                  },{},
                  {
                    stack:[
                      {text: "\n", style:{fontSize:6}},
                      {
                        text:convertTextToRtl("ااا.دخله السنوي:"),
                        style: [{fontSize: 9}, "arabic"]
                      },
                    ],
                    colSpan:2,
                    style:["right"],
                    border:[false, true, true, true]
                  },{}
                ],
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