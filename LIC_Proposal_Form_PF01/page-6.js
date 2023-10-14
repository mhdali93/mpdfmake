const Page_6 = ({
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
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,264,264
              ],
              body: [
                [
                  {
                    text:"22.",rowSpan:2
                  },
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
                        text:"\nfrom any banks?   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
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
                  {
                    text:" ",
                  },
                  {
                    border: [false, false, false, true],
                    margin:[0,5,0,30],
                    layout: 'noBorders',
                    table: {
                      widths: [
                        20,20,20,20,"*"
                      ],
                      body: [
                        [
                          {
                            text:"Yes",
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"/ No",
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"If yes, please provide details.",
                          },
                        ],
                      ],
                    }
                  },
                  {
                    text:[
                      { text:convertTextToRtl(" "),
                      style: ["right"],
                      },
                      {
                        text:"\n",
                      },
                    ],border:[false,false,true,true],
                  },
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
                      { text:"Name/s \n\n\n", style:"center" },
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
                      { text:"Whether the address is as same as given for proposer. YES / NO If not, please mention the address\n", style:"center" },
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
                      { text:"Nationality\n", style:"center" },
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
                      { text:"Age\n", style:"center" },
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
                      { text:"Relation to Life to be Assured\n", style:"center" },
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
                      { text:"Passport Number\n", style:"center" },
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
                      { text:"Date Of Expiry\n", style:"center" },
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
                      { text:"CPR / Civil ID / Citizen Card No.\n", style:"center" },
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
                      { text:"Expiry Date\n", style:"center" },
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
                    border:[false, true, false, false],
                    colSpan:4,
                    text:[
                      {text: "\n\n\n\n\n\n____________________________________________________", style:"right"},
                      {text: "\nSignature of Appointee (If applicable) ", style:"right"},
                      {
                        text:convertTextToRtl("إذا كان ينطبق توقيع المعين "),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                  },{},{},{},
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
                    text:"Page 6",
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

module.exports = Page_6