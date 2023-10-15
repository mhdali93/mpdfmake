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
                    image : "./assets/images/head2.png",
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
                    stack:[
                      {
                        text:convertTextToRtl("إستمارة خطة معاشات التأمين الآجلة"),
                        style: ["center", {fontSize: 14}, "arabic", "bold", "header"]
                      },
                      {
                        text:"Proposal for New Deferred Future Secure Pension Plan  (260)",
                        style: ["center", {fontSize: 14}, "Times", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl("يرجى كتابة جميع الإجابات بخط عريض"),
                        style: ["center", {fontSize: 9}, "arabic", "bold", "header"]
                      },
                      {
                        text:"Please write all answers in BLOCK capital Letters.",
                        style: ["center", {fontSize: 9}, "Times", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl("يرجى المصادقة على التعديلات / التصحيحات يرجى التوقيع على الجزء السفلي من كل صفحة من الأقسام A وB"),
                        style: ["center", {fontSize: 9}, "arabic", "bold", "header"]
                      },
                      {
                        text:"Kindly authenticate alternations/corrections. Kindly sign at the bottom of each page of sections A & B",
                        style: ["center", {fontSize: 9}, "Arial", "header"]
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
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\nInward No",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                    ], border: [true, true, false, true],
                  },{text:":",border: [false, true, true, true],colSpan:2},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("تاريخ الإدخال"),
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\nDate of inward",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                    ], border: [true, true, false, true],
                  },{text:":",border: [false, true, true, true],colSpan:2},{}
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("اسم الاستشاري"),
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\nName of Consultant",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                    ], border: [true, true, false, true],
                  },{text:":",border: [false, true, true, true],colSpan:2},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("رقم كود الاستشاري"),
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\nConsultant Code No",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                    ], border: [true, true, false, true],
                  },{text:":",border: [false, true, true, true],colSpan:2},{}
                ],
                [
                  {
                    text:[
                      {
                        text:"Chief Agent Name and Code NO:",
                        style: ["left", {fontSize:8}, "Times"]
                      },
                    ],border: [true, true, false, true],colSpan:3
                  },{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl(":"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("رقم الوكيل الرئيسي"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                    ],border: [false, true, true, true],colSpan:3
                  },{},{},
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
            margin:[0,10,0,10],
            table: {
              widths: [
                270,
                267
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("عملة إيداع الطلب"),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("                 "),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("دينار   بحريني  /   دولار  أمريكي  /   درهم"),
                        style: ["right", {fontSize: 11}, "arabic"]
                      },
                      
                      {
                        text:"\nProposal Deposit   :",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("    "),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("إماراتي / دينار كويتي / ريالي عماني / ريال"),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },

                      {
                        text:"\nCurrency",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("                           "),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("قطري"),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },

                      {
                      text:"\nBD/  USD/  AED/  KD/  OR/  QR/",
                      style: ["right", {fontSize: 11}, "Times"]
                      },

                      {
                      text:"\n______",
                      style: ["center", {fontSize: 11}, "Times"]
                      },


                    ], 
                  },
                  {
                    text:[
                    {
                      text:convertTextToRtl("طريقة مبلغ و  مبلغ إبداع الطل "),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nProposal Deposit Amount        :",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\nPayment Mode",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\nCash / Cheque / Telex Transfer",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\n/ Demand Draft",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:convertTextToRtl("نقدًا / شيك / تحويل عبر التلكس / كمبيالة "),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:convertTextToRtl("تحت الطلب "),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                  ],
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("تریخ إیداع الطل ب"),
                        style: ["left", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(":                 "),
                        style: ["left", {fontSize: 9}, "arabic"]
                      },
                      
                      {
                        text:"\nDate of Proposal",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      
                      {
                        text:"\nDeposit",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      
                    ], 
                  },
                  {
                    text:[
                    {
                      text:convertTextToRtl("رقم الطل ب "),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nProposal Deposit Amount       :",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:"\nProposal Number",
                      style: ["left", {fontSize: 9}, "Times"]
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
                        text:convertTextToRtl("البیانات الشخصیة لمقدم طلب شراء خطة المعاش"),
                        style: ["center", {fontSize: 16}, "arabic", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl(" :A "),
                        style: ["center", {fontSize: 14}, "Times", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl("الجزء"),
                        style: ["center", {fontSize: 14}, "arabic", "bold", "header"]
                      },
                      {
                        text:"\nPart A:",
                        style: ["center", {fontSize: 16}, "Times", "bold", "header"]
                      },
                      {
                        text:"Personal Details of Person proposing to purchase the Annuity",
                        style: ["center", {fontSize: 14}, "Times", "bold", "header"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 14}, "Times", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl(")من فضلك اذكر التفاصیل حسب الأسئلة المذكورة أدناه("),
                        style: ["center", {fontSize: 9}, "arabic", "bold", "header"]
                      },
                      {
                        text:"\n(Please provide details as per questions mentioned therein)",
                        style: ["center", {fontSize: 9}, "Times", "bold", "header"]
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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            margin:[0,-2,0,0],
            table: {
              widths: [
                19,
                228,
                128,
                11,
                11,
                11,
                11,
                11,
                11,
                11,
                11
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("1."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ], rowSpan:2,
                  },
                  {
                    layout: 'noBorders',
                    table:{
                      widths:[60,12,20,12,20,12,100,20,12,25,12,20,12,60,],
                      body:[
                        [
                          {
                            text:"Full Name:  ",
                            style: ["left", {fontSize: 11}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:"Mr.  ",
                            style: ["left", {fontSize: 11}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:"Mrs.  ",
                            style: ["left", {fontSize: 11}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:" Ms.",
                            style: ["left", {fontSize: 11}, "Times"]
                          },
                          {
                            text:convertTextToRtl("لأنسة  "),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("السیدة  "),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("السید  "),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 11,
                            alignment: 'center',
                          },
                          {
                            text:convertTextToRtl("الإسم بالكامل"),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                        ],
                      ],
                    },colSpan:10,border:[true,true,true,false],
                  },{},{},{},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("1."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                    {
                      text:"\nFirst                                                              Middle                                        Last",
                      style: ["left", {fontSize: 11}, "Times","bold",],
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:convertTextToRtl("الأسم الأول  "),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:convertTextToRtl("                                                                           "),
                      style: ["left", {fontSize: 9}, "times"]
                    },
                    {
                      text:convertTextToRtl("الأسم الوسط  "),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:convertTextToRtl("                                          "),
                      style: ["left", {fontSize: 11}, "times"]
                    },
                    {
                      text:convertTextToRtl("الأسم الجد  "),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                  ],colSpan:10,border:[true,false,true,true],
                  },{},{},{},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("2."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("أنثى  "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("          /       "),
                        style: ["right", {fontSize: 11}, "times"]
                      },
                      {
                        text:convertTextToRtl("ذكر  "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(":          "),
                        style: ["right", {fontSize: 11}, "times"]
                      },
                      {
                        text:convertTextToRtl("النوع "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nGender :     Male   /     Female",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                    ],
                   },
                   { text:[
                    {
                      text:convertTextToRtl("تاریخ المیلاد:"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nDate of birth:",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                  ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ي"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nD",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ي"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nD",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ش"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nM",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ش"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nM",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 11}, "arabic"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 13}, "Times"]
                    },
                    ],
                   },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("3."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                    {
                      text:convertTextToRtl("سنة"),
                      style: ["justify", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:convertTextToRtl(":   ______________ "),
                      style: ["justify", {fontSize: 11}, "times"]
                    },
                    {
                      text:convertTextToRtl("لكي  "),
                      style: ["justify", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:convertTextToRtl(" / "),
                      style: ["justify", {fontSize: 11}, "times"]
                    },
                    {
                      text:convertTextToRtl("السن في آخر عید میلاد لك"),
                      style: ["justify", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nAge at last birthday :    ________ Years",
                      style: ["justify", {fontSize: 11}, "Times"]
                    },
                    
                   ],
                  },
                  {text:[
                    {
                      text:convertTextToRtl("دلیل السن:"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nAge proof:",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                   ],colSpan:9,
                  },
                  {},{},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("4."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                    {
                      text:convertTextToRtl("محل المیلاد:"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nPlace of Birth:",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    
                   ],
                  },
                  {text:[
                    {
                      text:convertTextToRtl("بلد المیلاد:"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nCountry of Birth:",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                   ],colSpan:9,
                  },
                  {},{},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("5."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                    {
                      text:convertTextToRtl("عنوان الاتصال )یرجى تقدیم دلیل مناسب للعنوان(: -"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nAddress for Communication (Kindly provide proper address proof for this): -",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:"\nEmirates/ ",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    {
                      text:convertTextToRtl("الإمارات"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:": ",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                    
                   ],
                  },
                  {text:[
                    {
                      text:convertTextToRtl("العنوان الدائم في الدولة الأم:-"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nPermanent Address in Home Country: -",
                      style: ["left", {fontSize: 11}, "Times"]
                    },
                   ],colSpan:9,
                  },
                  {},{},{},{},{},{},{},{},
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 2,
              paddingBottom: (i, node) => 2
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:"Page 1 of 11",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ]
                  }
                ],
              ]
            },
          }
        ],
      ]
    }
  }
}

module.exports = Page_1


