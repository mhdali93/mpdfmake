const Page_4 = ({
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
                10,258,258
              ],
              body: [
                [
                  {
                    text:" ",rowSpan:2
                  },
                  {
                    text:"b. Have you ever had an application for life, disability or critical illness insurance declined, postponed or accepted at other than normal terms?",
                    border:[true, true, false, false],
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
                    border:[false, true, true, false],
                  }
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
                  {
                    text:"17.",rowSpan:2
                  },
                  {
                    text:"Have you cancelled (under cooling off provision or otherwise) any policy of the Company during past one year as the same was not acceptable to you?",
                    border:[true, true, false, false],
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
                    border:[false, true, true, false],
                  }
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
                  {
                    text:"18.",rowSpan:2
                  },
                  {
                    text:"Have you submitted any other proposal for insurance on your life or on the life of life to assured?",
                    border:[true, true, false, false],
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
                    border:[false, true, true, false],
                  }
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
                  {
                    text:"19.",rowSpan:4
                  },
                  {
                    text:"a). Are you a member of the armed forces, either full time or part time?\t\t\t",
                    border:[true, true, false, false],
                    style:"justify"
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل أنت من أفراد القوات المسلحة، سواء بدوام كامل أو جزئي؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      
                    ],
                    border:[false, true, true, false],
                  }
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
                  {
                    text:" ",
                  },
                  {
                    text:[
                      {
                        text:"Do you take part in or have definite plans to take part in any sports, recreations, pastime or activities that may be considered hazardous? For example Scuba diving, motor racing, rock climbing, private flying etc.?",
                      }
                    ],
                    border:[true, true, false, false],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل تشارك في أو لديك خطط محددة للمشاركة في أي رياضة أو"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(" تسلية أو أنشطة يمكن اعتبارها خطرة؟ على سبيل المثال"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("غوص سكوبا، أو سباق السيارات أو تسلق الصخور أو الطيران الخاص"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(" ذلك؟ إذا كانت الإجابة بنعم، أكمل الاستبيان ذي الصلة."),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    border:[false, true, true, false],
                    style:"justify",
                  },
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
                  {
                    text:"20.",rowSpan:2
                  },
                  {
                    text:[
                      {
                        text:"Are you holding any honorary or regulatory or legisla- tive, government authority or position?",
                      }
                    ],
                    border:[true, true, false, false],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل تتقلد أي سلطة أو منصب حكومي فخري أو تنظيمي أو تشريعي؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      }
                    ],
                    border:[false, true, true, false],
                    style:"justify",
                  }
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
                  {
                    text:"21.",rowSpan:3
                  },
                  {
                    text:[
                      {
                        text:"Are any of your close relatives - parents, spouse, children brothers, sisters are holding any Government, Judiciary or Military position or holding a political position?",
                      }
                    ],
                    border:[true, true, false, false],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل يعمل أي من اقربائك من الدرجة الأولى -  الوالدين"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("الزوج الزوجة، الأبناء، الاخوة ، أو الاخوات في أي وظيفة قضائية أو"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("عسكرية أو لهم منصب سياسي؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      }
                    ],
                    border:[false, true, true, false],
                    style:"justify",
                  },
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
                  {
                    text:" ",
                  },
                  {
                    text:[
                      {
                        text:"Name \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Relation",
                      }
                    ],
                    border:[true, true, false, true],
                    style:"justify"
                  },
                  {
                    stack:[
                      {
                        text:"Position",
                      }
                    ],
                    border:[false, true, true, true],
                    style:"center",
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