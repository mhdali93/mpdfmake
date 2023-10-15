const Page_9 = ({
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
            margin:[5,20,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    
                    table: {
                      widths: [550],
                      body: [
                        [
                          {
                            border: [false, false, false, false],
                            text:[
                              {
                                text:" _____________________________",
                                style: ["right", {fontSize: 11.5}, "Times",]
                              },
                              {
                                text:"\n",
                                style: ["right", {fontSize: 9}, "Times",]
                              },
                              {
                                text:convertTextToRtl("توقیع مقدم الطلب"),
                                style: ["right", {fontSize: 10}, "arabic", ]
                              },
                              {
                                text:" .1gapgap",
                                style: ["right", {fontSize: 10.5}, "Times","header"]
                              },
                              {
                                text:"\nSignature of Proposer",
                                style: ["right", {fontSize: 9}, "Times",]
                              },
                              {
                                text:" .1gap",
                                style: ["right", {fontSize: 10.5}, "Times","header"]
                              },
                            ]
                          }
                        ],
                      ]
                    },
                  }
                ],
              ]
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 2,
              paddingBottom: (i, node) => 2
            },
            style:{
              fillColor:"#34849a"
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("تقریر الإستشاري السر ي :"),
                        style: ["right", {fontSize: 16}, "arabic", "bold", "header"]
                      },
                      {
                        text:":D",
                        style: ["right", {fontSize: 16}, "Times", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl("الجزء"),
                        style: ["right", {fontSize: 16}, "arabic", "bold", "header"]
                      },
                      {
                        text:"\nPart D: Consultants’ Confidential Report",
                        style: ["left", {fontSize: 16}, "Times", "bold", "header"]
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
            margin:[-5,-5,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    
                    table: {
                      widths: [550],
                      body: [
                        [
                          {
                            border: [false, false, false, false],
                            text:[
                              {
                                text:" Name of Proposer:",
                                style: ["left", {fontSize: 13}, "Times","bold"]
                              },
                            ]
                          }
                        ],
                      ]
                    },
                  }
                ],
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
            margin:[0,-10,0,0],
            table: {
              widths: [
                20,
                350,
                60,
                100
              ],
              body: [
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
                        text:convertTextToRtl("منذ متى وأنت تعرف مقدم الطلب ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nHow long have you known the proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",colSpan:2 
                  },{},
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
                        text:convertTextToRtl("ما ھي المؤھلات الدراسیة الحاصل علیھا مقدم الطلب ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhat is Educational Qualification of the Proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",colSpan:2 
                  },{},
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
                        text:convertTextToRtl("ما ھي جنسیة مقدم الطلب ووضعھ من حیث الإقامة ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhat is Citizenship and Residential Status of the proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",colSpan:2 
                  },{},
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
                        text:convertTextToRtl("ھل لك صلة قرابة بمقدم الطلب؟ إن كان كذلك أذكر ھذه الصلة ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nAre you related to the proposer? If so how?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",colSpan:2 
                  },{},
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
                        text:convertTextToRtl("ھل قابلت مقدم الطلب شخصیاً في تاریخ تقدیم الطلب ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nHave you personally seen the proposer on the date of proposal?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    layout: 'noBorders',
                    table:{
                      widths:[12,20,12,13,15,12,20,12,],
                      body:[
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 11}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 11}, "Times"]
                          },
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                        ],
                      ],
                    },colSpan:2 
                  },{},
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
                    text:[
                      {
                        text:convertTextToRtl("ما ھي وظیفة ومصادر دخل مقدم الطلب ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhat is occupation and sources of income of the proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",colSpan:2 
                  },{},
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
                        text:convertTextToRtl("ما ھي وثیقة إثبات الدخل التي قمتم بالتحقق منھا فیما یتعلق بالدخل المذكور أعلاه ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhat proof of income has been verified by you in respect of the income Stated above?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:3 
                  },{},{},
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
                        text:convertTextToRtl("ھل أنت راض شخصیاً عن الوضع المالي لمقدم الطلب / المؤمن علیھ ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nAre you personally satisfied with the financial standing of the proposer / life assured?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
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
                        text:convertTextToRtl("ھل التأمین المطلوب یتناسب مع الوضع المالي لمقدم الطلب ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhether the pension plan proposed is justified with the financial standing of the proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
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
                        text:convertTextToRtl("ما مصدر الأموال المستخدمة لسداد أقساط ھذا التأمین؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhat is the source of funds being used for payment of premiums of this proposal?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    text:" "
                 },
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
                        text:convertTextToRtl("ھل تم الوفاء بجمیع معاییر أعرف عمیلك / مكافحة غسیل الأموال لمقدم الطلب ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhether all KYC/AML norms are fulfilled for the proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
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
                        text:convertTextToRtl("ھل تم الإعلان عن دولة الإقامة الضریبیة؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhether country of tax residence declared?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
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
                        text:convertTextToRtl("ھل العمیل أو أي من أقربائھ المقربین - الوالدین أو الزوجة أو الأبناء أو الأخوة أو الأخوات - یحتفظون بأي سلطو حكومیة أو"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("منصب تنظیمي أو سیاسي أو سلطة؟ إذا نعم، الرجاء تقدیم التفاصیل."),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"\nIs the client or any of his close relatives – parents, spouse, children, brothers or sisters are holding any Government, Regulatory, Political position or authority? If yes, please give details.",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
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
                        text:convertTextToRtl("ما ھي الصلة بین المستفید الذي تم ذكره من قبل مقدم الطلب ومقدم الطلب وما إذا كانت العلاقة غیر الزوج أو الأبناء أو الأبوین،"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("ما ھي نیة مقدم الطلب بتعیین مستفید آخر ؟"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"\nWhat is relationship of the beneficiary mentioned by the proposal and if the relationship is other than spouse or children or parents, what is intention of the proposer to appoint other beneficiary?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    text:" "
                 },
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
                        text:convertTextToRtl("ھل أنت مقتنع بأن مقدم الطلب غیر مرتبط بأي أنشطة غیر قانونیة ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nAre you satisfied that the proposer is not connected with any illegal activities?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"16.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("ھل لدیك معرفة بأیة معلومات غیر مرغوب فیھا سواء معلومات شخصیة أو خاصة بالوضع المالي أو الاجتماعي أو مھنة مقدم"),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl('الطلب؟ إذا أجبت "نعم" یرجى ذكر التفاصیل'),
                        style: ["right", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"\nDo you have knowledge of any unfavorable information about the character, financial/social position, and occupation of the Proposer? If “yes” give details",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"17.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("ھل شرحت بالكامل شروط وأحكام خطة المعاش التقاعدي إلى مقدم الطلب ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nHave you explained fully the terms and conditions of the pension plan to the proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"18.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("ھل توصي بقبول العرض ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            text:convertTextToRtl("لا"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("نعم"),
                            style: ["right", {fontSize: 7}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                        ],
                      ],
                    }, 
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
                    text:"Page 9 of 11",
                    style: ["center", {fontSize: 10}, "Times", "bold"]
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

module.exports = Page_9