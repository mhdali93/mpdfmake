const Page_3 = ({
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
              paddingBottom: (i, node) => 1,
              paddingTop: (i, node) => 1,
            },
            table: {
              widths: [
                10,90,100,40,50,50,50,100
              ],
              body: [
                [
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
                    colSpan:4,
                    style: {fillColor: '#f8eff2'},
                  },{},{},{},
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
                    colSpan:4,
                    style: {fillColor: '#f8eff2'},
                  },{},{},{}
                ],
                [
                  {
                    text:"4."
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("السن"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nAge", style: "center"
                      },
                    ]
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("سنة"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nYears",
                      },
                    ]
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("شهر"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nMonths",
                      },
                    ],
                    colSpan:2
                  },{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("سنة"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nYears",
                      },
                    ],
                    colSpan: 2
                  },{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("شهر"),
                        style: ["left", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nMonths",
                      },
                    ]
                  }
                ],
                [
                  {
                    text:"5."
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("إثبات السن"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nAge Proof Submitted", style: "center"
                      },
                    ]
                  },
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 3 },{},{}
                ],
                [
                  { text:"6.", rowSpan:2 },
                  {
                    text:[
                      {
                        text:convertTextToRtl("مكان الميلاد"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nPlace of Birth", style: "center"
                      },
                    ]
                  },
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 3 },{},{}
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:convertTextToRtl("بلد الميلاد"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nCountry of Birth", style: "center"
                      },
                    ]
                  },
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 3 },{},{}
                ],
                [
                  {
                    text:"7."
                  },
                  { 
                    text:"Relationship with", 
                    style: "center",
                    border: [true, true, false, true] 
                  },
                  { border: [false, true, false, true], text:"", colSpan: 2 },{},
                  { 
                    text:convertTextToRtl("علاقته بـ"), 
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
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
                    colSpan:4,
                  },{},{},{},
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
                    colSpan:4,
                  },{},{},{}
                ],
                [
                  {
                    text:"8."
                  },
                  { 
                    text:"Father's full Name (Surname first)", 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:convertTextToRtl("اسم الأب بالكامل )اللقب أولاً("), 
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
                  {
                    text:"\n\n\n\n\n",
                    colSpan:4,
                  },{},{},{},
                  {
                    text:"",
                    colSpan:4,
                  },{},{},{}
                ],
                [
                  {
                    text:"9."
                  },
                  { 
                    text:[
                      {text:"Nationality/ Citizenship/s:"},
                      {text:"\nKindly mention names of Countries of which you are holding citizenship"}
                    ], 
                    style: "left",
                    colSpan:4,
                    border: [true, true, false, true] 
                  },{},{},{},
                  { 
                    text:[
                      {text:convertTextToRtl("الجنسية / المواطنة:")},
                      {text:"\n"},
                      {text:convertTextToRtl("يُرجى ذكر أسماء الدول التي تحمل جنسيتها")},
                    ], 
                    colSpan: 3,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{}
                ],
                [
                  {
                    text:"\n\n\n",
                    colSpan:4,
                  },{},{},{},
                  {
                    text:"",
                    colSpan:4,
                  },{},{},{}
                ],
                [
                  {
                    text:"10."
                  },
                  { 
                    text:"Passport Details", 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:convertTextToRtl("تفاصيل جواز السفر"), 
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
                  {
                    text:[
                      {text:"Number", style:"left"},
                      {text:"\t\t\t\t\t"},
                      {text:convertTextToRtl("رقم"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2,
                  },{},
                  {
                    text:[
                      {text:"Date of Expiry ", style:"left"},
                      {text:"\t\t\t"},
                      {text:convertTextToRtl("تاريخ الانتهاء"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2
                  },{},
                  {
                    text:[
                      {text:"Number", style:"left"},
                      {text:"\t\t\t\t\t"},
                      {text:convertTextToRtl("رقم"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2,
                  },{},
                  {
                    text:[
                      {text:"Date of Expiry ", style:"left"},
                      {text:"\t\t\t\t"},
                      {text:convertTextToRtl("تاريخ الانتهاء"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2
                  },{}
                ],
                [
                  {
                    text:[
                      {text:"Country of Issue", style:"center"},
                      {text:"\n"},
                      {text:convertTextToRtl("بلد الإصدار"),style: ["center", {fontSize: 10}, "arabic"]}
                    ],
                    colSpan:2,
                  },{},
                  {
                    text:"",
                    colSpan:2
                  },{},
                  {
                    text:[
                      {text:"Country of Issue", style:"center"},
                      {text:"\n"},
                      {text:convertTextToRtl("بلد الإصدار"),style: ["center", {fontSize: 10}, "arabic"]}
                    ],
                    colSpan:2,
                  },{},
                  {
                    text:"",
                    colSpan:2
                  },{}
                ],
                [
                  {
                    text:"11."
                  },
                  { 
                    text:"CPR / Emirate ID / Citizenship Card No Number", 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:convertTextToRtl("رقم البطاقة التعريفية / بطاقة الإقامة / بطاقة المواطنة"), 
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
                  {
                    text:[
                      {text:"Number", style:"left"},
                      {text:"\t\t\t\t\t"},
                      {text:convertTextToRtl("رقم"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2,
                  },{},
                  {
                    text:[
                      {text:"Date of Expiry ", style:"left"},
                      {text:"\t\t\t"},
                      {text:convertTextToRtl("تاريخ الانتهاء"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2
                  },{},
                  {
                    text:[
                      {text:"Number", style:"left"},
                      {text:"\t\t\t\t\t"},
                      {text:convertTextToRtl("رقم"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2,
                  },{},
                  {
                    text:[
                      {text:"Date of Expiry ", style:"left"},
                      {text:"\t\t\t\t"},
                      {text:convertTextToRtl("تاريخ الانتهاء"),style: ["right", {fontSize: 10}, "arabic"]},
                      {text:"\n\n\n",}
                    ],
                    colSpan:2
                  },{}
                ],
                [
                  {
                    text:"12."
                  },
                  { 
                    text:"VISA issued by Country / Emirate", 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:convertTextToRtl("تأشيرة الإقامة / مصدرة بواسطة"), 
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
                  {
                    text:"\n\n\n",
                    colSpan:4,
                  },{},{},{},
                  {
                    text:"",
                    colSpan:4,
                  },{},{},{}
                ],
                [
                  {
                    text:"13."
                  },
                  { 
                    text:[
                      {text: "Address for Communication at present place of residence"},
                      {text: "\n(Kindly provide address proof)"}
                    ], 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:[
                      {text: convertTextToRtl("عنوان الاتصال في محل الإقامة الحالي")},
                      {text: "\n("},
                      {text: convertTextToRtl("يرجى تقديم إثبات ملائم للعنوان")},
                      {text: ")"},
                    ],
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
                  {
                    text:[
                      {text: "\n\n\n\n\n\n"},
                      {text: convertTextToRtl("الدولة / الإمارة")},
                      {text: "\nCountry / Emirates :"},
                    ],
                    colSpan:4,
                  },{},{},{},
                  {
                    text:[
                      {text: "\n\n\n\n\n\n"},
                      {text: convertTextToRtl("الدولة / الإمارة")},
                      {text: "\nCountry / Emirates :"},
                    ],
                    colSpan:4,
                  },{},{},{}
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
                    text:"Page 3",
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

module.exports = Page_3