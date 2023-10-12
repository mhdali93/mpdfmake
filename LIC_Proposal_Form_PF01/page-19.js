const Page_19 = ({
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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            margin:[0,-10,0,0],
            table: {
              widths: [
                210,20,20,210,20,20,
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"For LIC (International) Use Only",
                        style: ["left", {fontSize: 13}, "Times","bold",]
                      },
                    ],border:[true,true,false,true],colSpan:3,style: ["header"]
                  },{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("مخصص فقط لشركة التأمين على الحياة العالمية"),
                        style: ["right", {fontSize: 12}, "arabic","bold"]
                      },
                    ], border:[false,true,true,true],colSpan:3,style: ["header"]
                  },{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:"CRS Checklist",
                        style: ["left", {fontSize: 13}, "Times","bold",]
                      },
                    ],border:[true,true,false,true],colSpan:3,
                  },{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("قائمة التحقق الخاصة بخدمة العملاء"),
                        style: ["right", {fontSize: 12}, "arabic","bold"]
                      },
                    ], border:[false,true,true,true],colSpan:3,
                  },{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nyes",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nno",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ], border:[false,true,true,true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("في حال الإجابة بنعم يرجى الإجابة على ما يلي"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nIf Yes, answer the following",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ], border:[false,true,true,true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nyes",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nno",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ], border:[false,true,true,true],
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل العميل غير مقيم في دائرة صلاحية الفرع ؟"),
                        style: ["left", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nIs the Customer Non-Resident in Branch Jurisdiction?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل تم الإعلان عن دولة الإقامة الضريبية؟"),
                        style: ["left", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nCountry of Tax Residence declared?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"* If the answer is 'No', please contact the customer to provide the required information",
                        style: ["left", {fontSize: 12}, "Times",]
                      },
                    ],border:[true,true,false,true],colSpan:3,
                  },{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl('في حال كانت الإجابة "لا" يرجى التواصل مع العميل لتقديم المعلومات '),
                        style: ["right", {fontSize: 10.5}, "arabic","bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 12}, "Times","bold",]
                      },
                      {
                        text:convertTextToRtl('المطلوبة فيما يتعلق بنظام تسجيل العملاء '),
                        style: ["right", {fontSize: 10.5}, "arabic","bold"]
                      },
                    ], border:[false,true,true,true],colSpan:3,
                  },{},{},
                ],
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
            margin:[0,10,0,0],
            
            table: {
              widths: [
                110,165,120,120
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Name  ",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                      {
                        text:convertTextToRtl("الإس م"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Signature   ",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                      {
                        text:convertTextToRtl("التوقی ع"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Date  ",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                      {
                        text:convertTextToRtl("التاری خ"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                    ], 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("معد من قبل"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nProcessed by",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], style:["header"],
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("الضام ن"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nUnderwriter",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], style:["header"],
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
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
              paddingTop: (i, node) => 0
            },
            margin:[0,520,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 19",
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

module.exports = Page_19