const Page_2 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 8.5,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0,
              paddingLeft: (i, node) => -23
            },
            table: {
              body: [
                [
                  {
                    border: [false, false, false, false],
                    image : "./assets/images/head1.png",
                    width: 600,
                    alignment: 'center',
                  }
                ],
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              layout:{
                paddingTop: (i, node) => -10,
                paddingBottom: (i, node) => -10
              },
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Form No. PF 01",
                    style: ["right", {fontSize: 10}, "bold", "Times"]
                  }
                ]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => -20,
              paddingBottom: (i, node) => -5
            },
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("طلب للتأمين على الحياة"),
                        style: ["center", {fontSize: 18}, "arabic", "bold"]
                      },
                      {
                        text:"\nProposal for Life Insurance",
                        style: ["center", {fontSize: 18}, "Times", "bold"]
                      },
                    ]
                  }
                ],
              ]
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("يُرجى المصادقة على التعديلات / التصحيحات، والتوقيع أسفل كل صفحة"),
                        style: ["center", {fontSize: 11}, "arabic", "bold"]
                      },
                      {
                        text:"\nPlease write all answers in BLOCK capital Letters. Kindly authenticate alterations/corrections",
                        style: ["center", {fontSize: 11}, "Arial"]
                      },
                    ]
                  }
                ]
              ],
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
            table: {
              widths: [
                95,
                77,
                80,
                77,
                95,
                77
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("رقم الإدخال"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nInward No",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("تاريخ الإدخال"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nDate of inward",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("تاريخ الطلب"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nDate of Proposal",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{}
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("اسم الاستشاري"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nName of Consultant",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{text:"", colSpan:3},{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("رقم كود الاستشاري"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nConsultant Code No",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{}
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("اسم الوكيل الرئيسي"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nChief Agent Name",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{text:"", colSpan:3},{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("رقم الوكيل الرئيسي"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nChief Agent Code No",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{}
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
              widths: [
                75,
                75,
                70,
                70,
                115,
                96
              ],
              body: [
                [
                  {
                    stack:[
                      {
                        text:convertTextToRtl("عملة إيداع الطلب: دينار بحريني/دولار أمريكي/درهم إماراتي/دينار كويتي/ريال قطري"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Proposal Deposit Currency : BD / USD / AED / KD / OR / QR",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                    colSpan:4
                  },{},{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("مبلغ إيداع الطلب"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nProposal Deposit Amount",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{}
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("تاريخ إيداع الطلب"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nDate of Proposal Deposit",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                    colSpan:2
                  },{},{text:"", colSpan:2},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("رقم الطلب"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nProposal Number",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },{}
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("طريقة دفع مبلغ إيداع الطلب"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nProposal Deposit Payment Mode",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                    colSpan:2
                  },{},
                  {
                    border: [false, true, false, true],
                    text:[
                      {
                        text:convertTextToRtl("نقدا"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nCash",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ]
                  },
                  {
                    border: [false, true, false, true],
                    text:[
                      {
                        text:convertTextToRtl("شيك"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nCheque",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ]
                  },
                  {
                    border: [false, true, false, true],
                    text:[
                      {
                        text:convertTextToRtl("تاريخ إيداع الطلب"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nTelex Transfer",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ]
                  },
                  {
                    border: [false, true, true, true],
                    text:[
                      {
                        text:convertTextToRtl("كمبيالة تحت الطلب"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nDemand Draft",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ]
                  }
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
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("من فضلك اذكر التفاصيل حسب "),
                        style: ["right", {fontSize: 14}, "arabic", "bold"]
                      },
                      {text:")", style: ["right", {fontSize: 14}, "arabic", "bold"]},
                      {
                        text:convertTextToRtl("البيانات الشخصية لمقدم الطلب / المؤمن على حياته حسب الحالة"),
                        style: ["right", {fontSize: 14}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الجزء ا:"),
                        style: ["right", {fontSize: 16}, "arabic", "bold"]
                      },
                      {text:"\n(", style: ["right", {fontSize: 14}, "arabic", "bold"]},
                      {
                        text:convertTextToRtl("الأسئلة المذكورة أدناه"),
                        style: ["right", {fontSize: 14}, "arabic", "bold"]
                      },
                      {
                        text:"\nPart A: ",
                        style: ["left", {fontSize: 14}, "Arial", "bold"]
                      },
                      {
                        text:"Personal Details of Proposer/Life to be Assured (Please provide details as per questions mentioned therein)",
                        style: ["justify", {fontSize: 11}, "Arial", "bold"]
                      },
                    ]
                  }
                ]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                10, 60,
                20,20,20,20,20,20,20,20,
                20,20,20,20,20,20,20,20,
              ],
              body: [
                [
                  {
                    text:"1.",
                    rowSpan:4
                  },
                  {
                    text:[
                      {
                        text:"Particulars:",
                      },
                      {
                        text:"Full Name of the proposer/life to be assured",
                        style: ["bold"]
                      },
                      {
                        text:"\n(Please mention as appearing in the passport)"
                      },
                    ],
                    border:[true,true,false,true],
                    colSpan:9
                  },{},{},{},{},{},{},{},{},
                  {
                    text:[
                      { text:convertTextToRtl("الاسم بالكامل للمقدم / للتأمين على الحياة") },
                      { text:"\n"},
                      { text:convertTextToRtl(")كما هو مذكور في جواأز السفر(") },
                    ],
                    style: ["right", {fontSize: 10}, "arabic"],
                    colSpan:8
                  },{},{},{},{},{},{},{},
                ],
                [
                  {},
                  {
                    text:[
                      { text:convertTextToRtl("  إسم العائلة  \t\t\t\t\t\t\t\t\t\t إسم الأب والجد \t\t\t\t\t\t\t\t\t\t الأسم الأول") },
                      { text:"\n"},
                      { text:"First Name\t\t\t\t\t\t\t\t\t\t Middle Name \t\t\t\t\t\t\t\t\t\t Last Name" },
                      { text:"\n\n\n" },
                    ],colSpan:17
                  },{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Particulars:",
                      },
                      {
                        text:" Proposer / Life to be Assured 2",
                        style: ["bold"]
                      },
                      {
                        text:"\nName (As appearing in the Passport)"
                      },
                    ],
                    colSpan:9
                  },{},{},{},{},{},{},{},{},
                  {
                    text:[
                      { text:convertTextToRtl("مقدم الطلب/ المؤمن على حياته ٢") },
                      { text:convertTextToRtl("التفاصيل :") },
                      { text:"\n"},
                      { text:convertTextToRtl("الاسم )حسبما يظهر في جواز السفر(") },
                    ],
                    colSpan:8
                  },{},{},{},{},{},{},{},
                ],
                [
                  {},
                  {
                    text:[
                      { text:convertTextToRtl("  إسم العائلة  \t\t\t\t\t\t\t\t\t\t إسم الأب والجد \t\t\t\t\t\t\t\t\t\t الأسم الأول") },
                      { text:"\n"},
                      { text:"First Name\t\t\t\t\t\t\t\t\t\t Middle Name \t\t\t\t\t\t\t\t\t\t Last Name" },
                      { text:"\n\n\n" },
                    ],colSpan:17
                  },{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
                ],
                [
                  {text:"",colSpan:2, style: {fillColor: '#f8eff2'}},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ١"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nProposer / Life to be Assured 1",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                    colSpan:8,
                    style: {fillColor: '#f8eff2'},
                  },{},{},{},{},{},{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ٢"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nProposer / Life to be Assured 2",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                    colSpan:8,
                    style: {fillColor: '#f8eff2'},
                  },{},{},{},{},{},{},{},
                ],
                [
                  {text:"2."},
                  {
                    text:[
                      {
                        text:convertTextToRtl("الجنس"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nGender",
                      },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("أنثى \t\t\t\t\t\t\t\t\t ذكر  "),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Male \t\t\t\t\t\t\t\t Female",
                      },
                    ],colSpan:8
                  },
                  {},{},{},{},{},{},{},
                  {
                    columns:[
                      {
                        stack:[
                          {
                            text:convertTextToRtl("أنثى"),
                            style: ["left", {fontSize: 10}, "arabic"]
                          },
                          {
                            text:"Male",
                          },
                        ]
                      },
                      {
                        image : "./assets/images/check.png",
                        width: 10,
                      }
                    ],
                    border:[true, true, false, true],
                    colSpan:4
                  },
                  {},{},{},
                  {
                    columns:[
                      {
                        stack:[
                          {
                            text:convertTextToRtl("ذكر"),
                            style: ["left", {fontSize: 10}, "arabic"]
                          },
                          {
                            text:"Female",
                          },
                        ]
                      },
                      {
                        image : "./assets/images/check.png",
                        width: 10,
                      }
                    ],
                    border:[false, true, true, true],
                    colSpan:4
                  },{},{},
                ],
                [
                  {text:"3.", rowSpan:2},
                  {
                    text:[
                      {
                        text:convertTextToRtl("تاريخ الميلاد"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nDate of Birth",
                      },
                    ],
                    rowSpan:2
                  },
                  {text:"D", style:"center"},
                  {text:"D", style:"center"},
                  {text:"M", style:"center"},
                  {text:"M", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"D", style:"center"},
                  {text:"D", style:"center"},
                  {text:"M", style:"center"},
                  {text:"M", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                ],
                [
                  {},{},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 10
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 2",
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

module.exports = Page_2


