const Page_6 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageOrientation: 'portrait',
    pageBreak : "before",
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
                10,255,265
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
                    colSpan:2,
                    style: {fillColor: '#f8eff2'},
                  },{},
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
                    style: {fillColor: '#f8eff2'},
                  },
                ],
                [
                  {text:"23."},
                  {
                    text:"Have you ever had an application for life, disability or critical illness insurance declined, postponed or accepted at other than normal terms?",
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل سبق لك أن تم رفض أو تأجيل أو قبول طلب تأمين على الحياة"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("أو العجز أو الأمراض الخطيرة بسبب خلاف للشروط العادية؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, true],
                  }
                ],
                [
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                    },colSpan:2
                  },{},
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                ],
                [
                  {text:"24."},
                  {
                    text:"Have you cancelled (under cooling off provision or otherwise) any policy of the Company during past one year as the same was not acceptable to you?",
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل ألغيت (بموجب بند السماح أو غير ذلك) أي بوليصة تأمين للشركة"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("خلال العام الماضي لأنها لم تكن مقبولة لك؟ إذا كانت"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("م، أذكر التفاصيل الإجابة بنعم"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, true],
                  }
                ],
                [
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                    },colSpan:2
                  },{},
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                ],
                [
                  {text:"25."},
                  {
                    text:"Have you submitted any other proposal for insurance on your life or on the life of life to assured?",
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل قدمت أي طلب آخر للتأمين على حياتك أو على حياة المؤمن عليه؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("إذا كانت الإجابة بنعم، أذكر التفاصيل"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, true],
                  }
                ],
                [
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                    },colSpan:2
                  },{},
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                ],
                [
                  {text:"26."},
                  {
                    text:"Is any application for revival of any of your policies or policies of Life to be assured is under Consideration?",
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل يوجد أي طلب لإبقاء أي من البوالص الخاصة بك أو بوالص"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("التأمين على الحياة قيد النظر؟ إذا كانت الإجابة بنعم، اذكر التفاصيل"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, true],
                  }
                ],
                [
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                    },colSpan:2
                  },{},
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                ],
                [
                  {text:"27."},
                  {
                    text:"Does your occupation require you to work at heights over 10 meter, work underground, offshore, at remote locations, handling or transporting hazardous material or any other hazardous duties not mentioned here?",
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل تتطلب مهنتك العمل على ارتفاعات تزيد عن 10 أمتار، أو العمل تحت"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("أو في الخارج، أو في مواقع بعيدة، أو مناولة أو نقل المواد الخطرة"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      { text:"\n" },
                      {
                        text:convertTextToRtl("أو أي مهام خطرة أخرى غير مذكورة هنا؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, true],
                  }
                ],
                [
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                    },colSpan:2
                  },{},
                  {
                    border: [true, true, true, true],
                    margin:[0,5,0,25],
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
                ],
                [
                  {
                    text:"28."
                  },
                  { 
                    text:"Name and address of Employer", 
                    style: "left",
                    border: [true, true, false, true] 
                  },
                  { 
                    text:convertTextToRtl("اسم وعنوان الموظف"), 
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  }
                ],
                [
                  {
                    text:"\n\n\n\n\n\n\n\n",
                    colSpan:2,
                  },{},
                  { text:"" }
                ],
                [
                  {
                    text:"29."
                  },
                  { 
                    text:"Object of Insurance", 
                    style: "left",
                    border: [true, true, false, true] 
                  },
                  { 
                    text:convertTextToRtl("هدف التأمين"), 
                    border: [false, true, true, true],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },
                ],
                [
                  {
                    text:"\n\n\n\n\n",
                    colSpan:2,
                  },{},
                  { text:"" }
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
            margin:[0,0,0,30],
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