const Page_8 = ({
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
              paddingBottom: (i, node) => 2,
              paddingTop: (i, node) => 2,
            },
            table: {
              widths: [
                10,280,240
              ],
              body: [
                [
                  {text:"34."},
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
                        text:"Please provide details of banks you are dealing with/holding account with. Please provide bank name and type of account maintained (current/savings) (for UAE Customers) \nIn case no personal account is maintained and all transactions are being made from company account, details of company accounts should be provided."
                      }
                    ],
                    style:"justify"
                  },
                  {
                    stack:[
                      { text:"\n1. _________________________________________" },
                      { text:"\n___________________________________________" },
                      { text:"\n2. _________________________________________" },
                      { text:"\n___________________________________________" },
                    ],
                    style:{fontSize: 11},
                    border:[false, true, true, true],
                  }
                ],
                [
                  { border:[true, true, true, false],text:"30."},
                  {
                    border:[true, true, true, false],
                    text:[
                      {
                        text:"Have you or your company availed any loan facility\t\t\t\t\t\t",
                      },
                      {
                        text:convertTextToRtl("هل حصلت انت او شركتك على اي تسهيلات اقتراض من اي بنك اذا كان"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nfrom any banks? (for UAE Customers)\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                      },
                      {
                        text:convertTextToRtl("كذلك، يرجى توضيح التفاصيل"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    // border:[true, true, false, true],
                    style:"justify",
                    colSpan:2
                  },{}
                ],
                [
                  {text:"", border:[true, false, true, true]},
                  {
                    border:[true, false, true, true],
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    colSpan:2,
                    style: "left"
                  },{}
                ],
                [
                  {text:"36."},
                  {
                    text:[
                      {
                        text:"Details of Nominee/ Beneficiary: I/we hereby appoint following person/s as nominee/beneficiary under this policy to whom policy monies will be paid in case of death of Life to be Assured.",
                      }
                    ],
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("تفاصيل المرشح / المستفيد أنا / نحن أعين بموجبه هذا الشخص /"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("الأشخاص التالي بيانه / بيانهم كمرشح / مستفيد بموجب هذه البوليصة"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("والذي سيتم دفع أموال البوليصة إليه في حالة وفاة المؤمن على حياته"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      }
                    ],
                    border:[false, true, true, true],
                    style:"justify"
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
              widths: [70,115,"*","*"],
              body: [
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("التفاصيل"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Particulars",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                    style:"header",
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl(")تفاصيل المرشح ) بطاقة الهوية للمرشح"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Details of Nominee",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                    style:"header",
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("تفاصيل الوصي إذا كان المرشح قاصرًا"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Details of Appointee (Appointee is required only if the Nominee is minor)",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                    style:"header",
                  }
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      { text:"\n" },
                      {
                        text:convertTextToRtl("الأسم"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Name/s \n\n", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("هل العنوان هو نفسه عنوان مقدم الطلب؟"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("إذا لم يكن كذلك ، يرجى ذكر العنوان "),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Whether the address is as same as given for proposer. YES / NO If not, please mention the address", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("الجنسية"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Nationality", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("السن / تاريخ الانتهاء"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Age", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("صلته بالمؤمن عليه"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Relation to Life to be Assured", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("رقم جواز السفر"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Passport Number", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("تاريخ الانتهاء"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Date Of Expiry", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("رقم البطاقة التعريفية / بطاقة الإقامة / بطاقة المواطنة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"CPR / Civil ID / Citizen Card No.", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("بطاقة هوية المقيم وتاريخ الانتهاء "),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Expiry Date", style:"center" },
                    ],
                  },{},{},{}
                ],
                [
                  {
                    rowSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("الهاتف / الجوال"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Tel./ Mob.", style:"center" },
                    ],
                  },
                  {
                    text:[
                      { text:"Local Number", style:"center" },
                      {
                        text:convertTextToRtl("الرقم المحلي"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                    ],
                  },{},{}
                ],
                [
                  {},
                  {
                    text:[
                      { text:"Home Country", style:"center" },
                      {
                        text:convertTextToRtl("البلد الأم"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                    ],
                  },{},{}
                ],
                [
                  {
                    border:[true, true, false, true],
                    colSpan:3,
                    stack:[
                      {text: "\n"},
                      {
                        text:convertTextToRtl("تفاصيل المرشح )بطاقة الهوية للمرشح("),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Signature of Appointee (If nominee is minor) :", style:"center" },
                    ],
                  },{},{},
                  {
                    border:[false, true, true, true],
                    text:"\n\n\n................................................................."
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
              paddingTop: (i, node) => 0
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 8",
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

module.exports = Page_8