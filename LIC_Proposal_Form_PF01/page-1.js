const Page_1 = ({
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
                    rowSpan:2
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
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10, 524,
              ],
              body: [
                [
                  {
                    text:"2.",
                  },
                  {
                    text:[
                      {
                        text:"Father's full Name   ",
                      },
                      { text:convertTextToRtl("اسم الأب بالكامل ") },
                      {
                        text:"\n\n\n\n",
                      },
                    ]
                  },
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,130,129,55,
                15,15,15,15,15,15,15,15
              ],
              body: [
                [
                  {
                    text:"3.",border:[true,true,true,false],
                    rowSpan:2
                  },
                  {
                    text:[
                      {
                        text:"Place of Birth   ",
                      },
                      { text:convertTextToRtl("مكان الميلاد") },
                      {
                        text:"\n\n",
                      },
                    ],rowSpan:2
                  },
                  {
                    text:[
                      {
                        text:"Country of Birth   ",
                      },
                      { text:convertTextToRtl("بلد الميلاد") },
                      {
                        text:"\n\n\n",
                      },
                    ],rowSpan:2
                  },
                  {
                    text:[
                      {
                        text:"\n",
                      },
                      { text:convertTextToRtl("تاريخ الميلاد") },
                      {
                        text:"\nDate of Birth",
                      },
                    ],rowSpan:2
                  },
                  {
                    text:[
                      {
                        text:"D ",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"D ",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"M ",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"M ",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Y ",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Y ",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Y ",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Y ",
                      },
                    ],
                  },
                ],
                [
                  {},{},{},{},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},
                  {text:"\n"},                  
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,25,20,25,20,25,108,55,
                50,52,63
              ],
              body: [
                [
                  {
                    text:" ",border:[true,false,true,true],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("الجنس") },
                      {
                        text:"\nGender",style: ["left", {fontSize: 7},]
                      },
                    ],
                  },
                  {
                    border:[true,true,false,true],
                    image : "./assets/images/uncheck.png",
                    width: 15,
                    alignment: 'center',
                    
                  },
                  {
                    text:[
                      { text:convertTextToRtl("ذكر") },
                      {
                        text:"\nMale",
                      },
                    ],border:[false,true,false,true],
                  },
                  {
                    border:[false,true,false,true],
                    image : "./assets/images/uncheck.png",
                    width: 15,
                    alignment: 'center',
                    
                  },
                  {
                    text:[
                      { text:convertTextToRtl("أنثى") },
                      {
                        text:"\nFemale",style: ["left", {fontSize: 7},]
                      },
                    ],border:[false,true,false,true],
                  },
                  {
                    text:[
                      {
                        text:"Age proof   ",
                      },
                      { text:convertTextToRtl("دليل السن") },
                      {
                        text:"\n\n",
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("سنوات : السن") },
                      {
                        text:"\nAge: Years",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("شهور") },
                      {
                        text:"\nMonths",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
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
            margin:[0,-5,0,0],
            table: {
              widths: [
                10, 258,257
              ],
              body: [
                [
                  {
                    text:"4.",
                  },
                  {
                    text:[
                      {
                        text:"Address for Communication  \t\t\t\t\t ",
                      },
                      { text:convertTextToRtl("عنوان التواصل (يرجى تقديم") },
                      {
                        text:"\n(please submit address proof)  \t\t\t\t\t\t\t ",
                      },
                      { text:convertTextToRtl("دليل لإثبات للعنوان(") },
                      {
                        text:"\n\n\n\n\n",
                      },
                      { text:convertTextToRtl("البلدة / الإمارة") },
                      {
                        text:"\nCountry/Emirate :  \t\t\t\t\t\t\t ",
                      },
                    ]
                  },
                  {
                    text:[
                      {
                        text:"Permanent Address in Home Country   ",
                      },
                      { text:convertTextToRtl("العنوان الدائم في البلد الأم ") },
                      {
                        text:"\n(please submit address proof)  \t ",
                      },
                      { text:convertTextToRtl(")يرجى تقديم دليل لإثبات العنوان ( ") },
                      {
                        text:"\n\n\n\n",
                      },
                    ]
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
              paddingTop: (i, node) => 10
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 1",
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

module.exports = Page_1


