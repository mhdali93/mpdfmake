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
            
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    stack:[
                      {
                        text:convertTextToRtl(".32 یرجى تقدیم تفاصیل عن البنوك التي تتعامل معھا في الإمارات العربیة المتحدة:"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"32. Please provide details of Banks you are dealing with in UAE:",
                        style: ["left", {fontSize: 11}, "Times",]
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
            margin:[0,-5,0,0],
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
                        text:convertTextToRtl("إسم البنك"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nName of the Bank",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("نوع الحساب"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nType of Account",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"",
                  },
                ],
              ],
            }
          }
        ],
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
                        text:convertTextToRtl("لا"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"          □             ",
                        style: ["right", {fontSize: 11}, "Times",]
                      },
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"          □             :؟",
                        style: ["right", {fontSize: 11}, "Times",]
                      },
                      {
                        text:convertTextToRtl(".33 ھل حصلت أنت / شركتك على قرض أو تسھیل ائتماني من أي بنك"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"\n33. Have you/ your company has availed loan or credit facility from any bank?: □ Yes □ No",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:"\n_______________.",
                        style: ["right", {fontSize: 11}, "Times",]
                      },
                      {
                        text:convertTextToRtl("الفرع"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"،_________________________________",
                        style: ["right", {fontSize: 11}, "Times",]
                      },
                      {
                        text:convertTextToRtl("إذا كانت الإجابة بنعم، یرجى تقدیم التفاصیل: اسم البنك"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"\nIf yes please provide details: Name of Bank _________________________________, Branch: _______________.",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 11}, "Times",]
                      },
                      {
                        text:convertTextToRtl(".33 تفاصیل المرشح / المستفید :أقوم أنا بموجب ھذه البولیصة بتعیین شخص یلي كمرشح / مستفید بموجب ھذه البولیصةوالذي سیتم دفع ."),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 11}, "Times",]
                      },
                      {
                        text:convertTextToRtl(" أموال البولیصة إلیھ في حالة وفاة صاحب المعاش "),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"\n34. Details of Nominee/ Beneficiary: I hereby appoint following person as nominee/beneficiary under this policy to whom policy monies will be paid in case of death of annuitant.",
                        style: ["left", {fontSize: 11}, "Times",]
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
            margin:[0,15,0,10],
            table: {
              widths: [
                180,
                180,
                180
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"\nPaticulars",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("التفاصیل"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"\nDetails of Nominee",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تفاصیل المرشح ) بطاقة الھویة للمرشح)"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Details of Appointee (Appointee details are required only if the Nominee is minor)",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تفاصیل الوصي إذا كان المرشح قاصرًا"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"Name",
                        style: ["center", {fontSize: 13}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الأس م"),
                        style: ["center", {fontSize: 11}, "arabic"]
                      },
                    ], 
                  },
                  {
                    text:"", 
                  },
                  {
                    text:"", 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"Is the address is as same as given for",
                        style: ["center", {fontSize: 10}, "Times", "blue"]
                      },
                      {
                        text:"\nproposer. If ",
                        style: ["center", {fontSize: 10}, "Times", "blue"]
                      },
                      {
                        text:"not",
                        style: ["center", {fontSize: 10}, "Times", "blue", "bold"]
                      },
                      {
                        text:", please",
                        style: ["center", {fontSize: 10}, "Times", "blue"]
                      },
                      {
                        text:"\nmention the address",
                        style: ["center", {fontSize: 10}, "Times", "blue"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("ل م یك ن"),
                        style: ["center", {fontSize: 9}, "arabic", "blue","bold"]
                      },
                      {
                        text:convertTextToRtl("ھل العنوان ھ و نفسھ عنوان مقدم الطلب؟ إذ ا"),
                        style: ["center", {fontSize: 9}, "arabic", "blue"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("، یرجى ذكر العنوا ن"),
                        style: ["center", {fontSize: 9}, "arabic", "blue"]
                      },
                      {
                        text:convertTextToRtl("كذل ك"),
                        style: ["center", {fontSize: 9}, "arabic", "blue", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"", 
                  },
                  {
                    text:"", 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"Age",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("السن"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], 
                  },
                  {
                    text:"", 
                  },
                  {
                    text:"", 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"Relation to Life Assured",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("صلتھ بالمؤمن علی ھ"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], 
                  },
                  {
                    text:"", 
                  },
                  {
                    text:"", 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"Nationality/ Passport Number/ Date of Expiry",
                        style: ["center", {fontSize: 10}, "Times", "blue"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الجنسیة/ رق م جوا ز السف ر/ تاریخ الانتھاء"),
                        style: ["center", {fontSize: 9}, "arabic", "blue"]
                      },
                    ], 
                  },
                  {
                    text:"", 
                  },
                  {
                    text:"", 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"CPR/ Citizen Card/ and Expiry Date",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("رقم البطاقة التعریفی/ة بطاق ة الإقام ة/ بطاق ة المو"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("اطن ة/بطاق ة ھوی ة المقیم وتاریخ الانتھاء"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], 
                  },
                  {
                    text:"", 
                  },
                  {
                    text:"", 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"Telephone/ Mobile number in home country",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("رق م الھات ف/ الجوا ل ف ي البلد الأ م"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], 
                  },
                  {
                    text:"", 
                  },
                  {
                    text:"", 
                  },
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
                20,
                340,
                180
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"35.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("ما ھي حالتك الصحیة المعتادة )لصاحب المعاش(؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhat has been your usual state of health (for Annuitant)?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"" },
                ],
                [
                  {
                    text:[
                      {
                        text:"36.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("ما ھي الحالة الصحیة المعتادة لزوجك / زوجتك؟ )في حالة الخیار 2 الحیاة المشتركة("),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWhat has been usual state of health of your Spouse? (In case of Option 2 (Joint Life)",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                  {
                    text:"" },
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
                    text:"Page 4 of 11",
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

module.exports = Page_4