const Page_14 = ({
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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("الجزء د: التقرير السرى للإسشارى )تقرير المخاطر الأخلاقية("),
                        style: ["center", {fontSize: 16}, "arabic", "bold"]
                      },
                      {
                        text:"\nPart D: Consultants' Confidential Report (Moral Hazard Report)",
                        style: ["center", {fontSize: 14}, "Times", "bold"]
                      },
                    ]
                  }
                ],
                [
                  {
                    border:[false, false, false, false],
                    text:[
                      { text:"Name of Proposer:",},
                      { text:"_________________",},
                      { text:"_________________",},
                      { text:"_________________",},
                      { text:"_________________",},
                      { text:"_________________",},
                      {
                        text:convertTextToRtl("اسم مقدم الطلب"),
                        style: ["center", {fontSize: 9}, "arabic", "bold"]
                      },
                    ],
                    style: "center"
                  }
                ]
              ]
            },
          }
        ],
        [
          {
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            margin:[0,0,0,0],
            table: {
              widths: [
                20,
                175,
                175,
                150
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"A.",
                        style: ["center", {fontSize: 11}, "Times", "bold",]
                      },
                    ], 
                    style:{fillColor: '#f8eff2'}
                  },
                  {
                    text:[
                      {
                        text:"Plan and Term proposed\t\t"
                      },
                      {
                        text:convertTextToRtl("الخطة والمدة"),
                        style: [{fontSize: 8.5}, "arabic"]
                      },
                    ], 
                    style:["center", {fillColor: '#f8eff2'}]
                  },
                  {
                    text:[
                      {
                        text:"Sum Assured Proposed\t\t",
                      },
                      {
                        text:convertTextToRtl("مبلغ التأمين"),
                        style: [{fontSize: 8.5}, "arabic"]
                      },
                      {
                        text: "\n\n\n\n"
                      }
                    ],
                    style:["center", {fillColor: '#f8eff2'}]
                  },
                  {
                    text:[
                      {
                        text:"Mode of Payment\t\t\t",
                      },
                      {
                        text:convertTextToRtl("ريقة الدفع"),
                        style: [{fontSize: 8.5}, "arabic"]
                      },
                    ],
                    style:["center", {fillColor: '#f8eff2'}]
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"1.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"How long have you known proposer/Life to be Assured?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("منذ متى وأنت تعرف مقدم الطلب / المؤمن على حياته؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {
                    text:"" 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"2.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"What is Educational Qualification of the Proposer/Life to be Assured?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("ما هي المؤهلات الدراسية الحاصل عليها مقدم الطلب /"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("المؤمن على حياته؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {
                    text:"" 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"3.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"What is Residential and Citizenship Status of the proposer/Life to be Assured?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هي جنسية مقدم الطلب ووضعه من حيث ما الإقامة"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"4.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Are you related to the proposer/Life to be Assured? If so how?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل لك صلة قرابة بمقدم الطلب / المؤمن على"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(" حياته؟ إن كان كذلك، أذكر هذه الصلة"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"5.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Did you personally see the proposer/Life to be Assured on the date of proposal?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل قابلت مقدم الطلب شخصيًا في تاريخ تقديم"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("الطلب / المؤمن على حياته؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"6.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    columns:[
                      {
                        stack:[
                          {
                            text:"Proposer's total monthly income by way of following sources:"
                          }
                        ]
                      },
                      {
                        stack:[
                          {
                            text:convertTextToRtl("إجمالي الدخل الشهري لمقدم الطلب في ضوء المصادر التالية"),
                            style: ["right", {fontSize: 9}, "arabic"]
                          }
                        ]
                      }
                    ], border:[false,true,true,true],
                    colSpan:3
                  },
                  {},{}
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"a. Employment",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الوظيفة المعين بها"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"b. Business or profession",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الأعمال الحرة والمهنة"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"c. Any other source",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مصادر دخل أخرى"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"d. Total",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الإجمالي"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"7.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Are you personally satisfied with the financial standing of the proposer / Life to be Assured?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل أنت راض شخصيًا عن الوضع المالي لمقدم"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("الطلب / المؤمن عليه؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"8.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Whether the insurance proposed is justified with the financial standing of the proposer/Life to be Assured?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل التأمين المطلوب يتناسب مع الوضع المالي"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("المقدم الطلب / المؤمن على حياته؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"9.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"What is the source of funds being used for payment of premiums of this proposal? Please specify clearly.",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("ما مصدر الأموال المستخدمة لسداد أقساط هذا التأمين؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"10.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"What proof of income has been verified by you in respect of the income Stated above?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("ما هي وثيقة إثبات الدخل التي قمتم بالتحقق منها "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("عن قيمة الدخل المذكورة أعلاه؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"11.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Are you aware of any intention of the proposer to assign the policy within 12 months of taking the policy for any reason other than for security against personal loan from bank or financial institution?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل تعلم أي شيء بشأن اعتزام مقدم الطلب"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("التنازل عن هذه الوثيقة خلال ۲۱ شهرًا من"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("تاريخها لأي سبب من الأسباب بخلاف"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("استخدامها كضمان مقابل قرض شخصي من أي"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("بنك أو مؤسسة مالية؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"12.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Whether all KYC/AML norms are fulfilled for the proposer/Life to be Assured?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل تم الوفاء معاير بجميع أعرف عميلك / مكافحة"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("غسيل الأموال لمقدم الطلب / المؤمن على حياته؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"13.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Whether the Country of Tax Residence declared?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل العميل غير مقيم؟ ، اذا كانت الاجابة نعم"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("يرجى توضيح تفاصيل الضريبية لبلد الإقامة"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"14.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Are you satisfied that the proposer/Life to be Assured is not connected with any terrorist activities?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل أنت متأكد أن مقدم الطلب / المؤمن على حياته"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("ليس له صلة بأية نشاطات أو أعمال إرهابية؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"15.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"What is the general state of health of the Proposer/Life to be Assured?",
                      },
                    ], border:[true,true,false,true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("ما هي الحالة الصحية العامة لمقدم الطلب / المؤمن"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("على حياته؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      }
                    ], border:[false,true,true,true],
                  },
                  {},
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
            margin:[0,0,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 14",
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

module.exports = Page_14