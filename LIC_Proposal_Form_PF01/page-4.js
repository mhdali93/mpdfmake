const Page_4 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
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
                10,90,100,40,50,50,50,95
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
                    text:"14."
                  },
                  { 
                    text:"Permanent Address in Home country\nPlease provide address proof", 
                    style: "left",
                    border: [true, true, false, true] ,
                    colSpan:3
                  },{},{},
                  { 
                    text:convertTextToRtl("العنوان الدائم في البلد الأم"), 
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
                    text:"15."
                  },
                  { 
                    text:"Contact Phone Numbers (If multiple\nphone numbers are present, kindly provide the same.)", 
                    style: "left",
                    border: [true, true, false, true] ,
                    colSpan:3
                  },{},{},
                  { 
                    text:[
                      {text: "("},
                      {text: convertTextToRtl("أرقام هواتف الاتصال )في حالة وجود عدة أرقام هاتف، أذكرها.")},
                    ],
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
                  { 
                    text:"",
                    colSpan:3,
                    style:{fillColor:"#f8eff2"}
                  },{},{},
                  { 
                    text:[
                      {
                        text:convertTextToRtl(" رمز الاتصال الدولي بالمشتركين ورقم الجوال"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"\nISD Code and Mobile No."},
                    ], 
                    colSpan: 3,
                    style:[{fillColor:"#f8eff2"}, "center"]
                  },{},{},
                  { 
                    text:[
                      {
                        text:convertTextToRtl(" رمز الاتصال الدولي بالمشتركين ورقم الجوال"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {text:"\nISD Code and Mobile No."},
                    ], 
                    colSpan: 2,
                    style:[{fillColor:"#f8eff2"}, "center"]
                  },{},
                ],
                [
                  { 
                    text:[
                      {text:"a. Mobile Number/s at \t\t"},
                      {
                        text:convertTextToRtl("أ- رقم/أرقام الهاتف المحمول"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {text:"\npresent place of residence \t\t"},
                      {
                        text:convertTextToRtl("في محل الإقامة الحالي"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    colSpan:3,
                  },{},{},
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 2 },{},
                ],
                [
                  { 
                    text:[
                      {text:"b. Mobile Number \t\t\t\t"},
                      {
                        text:convertTextToRtl("ب - رقم الجوال في موطنك"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {text:"\nin home Country \t\t"}
                    ],
                    colSpan:3,
                  },{},{},
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 2 },{},
                ],
                [
                  { 
                    text:[
                      {text:"c. Office Telephone    \t\t\t\t"},
                      {
                        text:convertTextToRtl("ت - أرقام هاتف المكتب"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {text:"\nNumbers \t\t"}
                    ],
                    colSpan:3,
                  },{},{},
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 2 },{},
                ],
                [
                  { 
                    text:[
                      {text:"d. Residence Telephone   \t\t\t"},
                      {
                        text:convertTextToRtl("ث - رقم هاتف السكن"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {text:"\nnumber (Present Address) \t\t\t\t ("},
                      {
                        text:convertTextToRtl(")العنوان الحالي"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    colSpan:3,
                  },{},{},
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 2 },{},
                ],
                [
                  { 
                    text:[
                      {text:"e. Residence Telephone   \t\t\t"},
                      {
                        text:convertTextToRtl("ج - رقم هاتف السكن"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {text:"\nnumber (Home Country) \t\t\t\t\t\t("},
                      {
                        text:convertTextToRtl(")بلد الموطن"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    colSpan:3,
                  },{},{},
                  { text:"", colSpan: 3 },{},{},
                  { text:"", colSpan: 2 },{},
                ],
                [
                  {
                    text:"16."
                  },
                  { 
                    text:"Email-id/s", 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:convertTextToRtl("عنوان / عناوين البريد الإلكتروني"), 
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
                    text:"17."
                  },
                  { 
                    text:[
                      {text: "Educational Qualifications \t"},
                      {text:convertTextToRtl("مؤهلات التعليمية "),style: [{fontSize: 10}, "arabic"]},
                    ] ,
                    style: "left",
                    colSpan:2,
                    border: [true, true, false, true] 
                  },{},
                  { 
                    text:[
                      {text: "Class of Study for minor life to be assured"},
                      {text: "("},
                      {text:convertTextToRtl("فئة الدراسة)للمؤمن على حياته فقط"),style: [{fontSize: 10}, "arabic"]},
                    ] , 
                    colSpan: 5,
                    border: [false, true, true, true],
                  },{},{},{},{}
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
                    text:"18."
                  },
                  { 
                    text:"Annual Income from all sources:", 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:convertTextToRtl("الدخل السنوي من كافة المصادر"), 
                    colSpan: 4,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{},{}
                ],
                [
                  {
                    text:"USD\t\t\tBD\t\t\tAED\t\t\tKD\t\t\tOR\t\t\tQR\t\t\tUSD\t\t\tBD\t\t\tAED\t\t\tKD\t\t\tOR\t\t\tQR",
                    colSpan:8,
                  },{},{},{},{},{},{},{}
                ],
                [
                  {
                    text:"19."
                  },
                  { 
                    text:[
                      {text: "Sources of Income / Funds for payment of premium"},
                      {text: "\n(Please specify and submit self-attested documentary proof)"}
                    ], 
                    style: "left",
                    colSpan:4,
                    border: [true, true, false, true] 
                  },{},{},{},
                  { 
                    text:[
                      {text: convertTextToRtl("مصدر الدخل / الأموال لدفع مبلغ أو أقساط التأمين ")},
                      {text: "\n("},
                      {text: convertTextToRtl("يرجى تحديد مصدر وتقديم دليل موثق ذاتيا لمصدر الأموال")},
                      {text: ")"},
                    ],
                    colSpan: 3,
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },{},{}
                ],
                [
                  { text: "Salary Income\t\t\t\tBusiness Income\nOther sources .....................",
                    colSpan:4,
                  },{},{},{},
                  {
                    text: "Salary Income\t\t\t\tBusiness Income\nOther sources .....................",
                    colSpan:4,
                  },{},{},{}
                ],
                [
                  {
                    text:"20."
                  },
                  { 
                    text:"Occupation / Profession and Nature of Duties", 
                    style: "left",
                    colSpan:3,
                    border: [true, true, false, true] 
                  },{},{},
                  { 
                    text:convertTextToRtl("الوظيفة / المهنة وطبيعة الواجبات"), 
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
                    text:"Page 4",
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

module.exports = Page_4