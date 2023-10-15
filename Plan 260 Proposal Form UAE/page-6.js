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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            margin:[0,10,0,0],
            table: {
              widths: [
                16,120,120,22,22,22,180
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"1",
                        style: ["center", {fontSize: 12}, "Times", "bold"]
                      },
                    ], 
                  },
                  {},{},
                  {
                    border:[true,true,false,true],
                    image : "./assets/images/check.png",
                    width: 15,
                    alignment: 'center',
                  },
                  {
                    border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                  },
                  {
                    border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"2",
                        style: ["center", {fontSize: 12}, "Times", "bold"]
                      },
                    ], 
                  },
                  {},{},
                  {
                    border:[true,true,false,true],
                    image : "./assets/images/check.png",
                    width: 15,
                    alignment: 'center',
                  },
                  {
                    border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                  },
                  {
                    border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                  },
                  {},
                ],
                [
                  {
                    text:[
                      {
                        text:"3",
                        style: ["center", {fontSize: 12}, "Times", "bold"]
                      },
                    ], 
                  },
                  {},{},
                  {
                    border:[true,true,false,true],
                    image : "./assets/images/check.png",
                    width: 15,
                    alignment: 'center',
                  },
                  {
                    border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                  },
                  {
                    border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                  },
                  {},
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
                        text:"I hereby confirm the information provided above is true, accurate and complete. Subject to applicable local laws, I hereby consent for the LIC (International) BSC(C) or any of its affiliates (including branches) (collectively “the Company”) to share my information with domestic or overseas regulators or tax authorities where necessary to establish our tax liability in any jurisdiction",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:"\nI agree and undertake to notify the Company within 30 calendar days if there is a change in any in formation which I have provided to the Company.",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("اقر بموجبھ ان المعلومات المدرجة صحیحة ودقیقة وكاملة."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("بالخضوع لأحكام القوانین المحلیة الساریة، اقر بموافقتي على ان تشارك شركة التأمین على الحیاة )العالمیة( ش.م.ب )مقفلة( او أي من التابعین لھا )بما في ذلك الافرع(."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("قضائیة."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:convertTextToRtl(')والمشار إلیھم اجمالاً باصطلاح "الشركة"( معلومات مع المنظمین او سلطات الضرائب المحلیة او الخارجیة عند الضرورة لتحدید التزاماتي الضریبیة في أي ولایة'),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("وأقر واتحمل مسؤولیة اخطار الشركة خلال 30 یوم میلادي في حالة حدوث تغییر في أيً من المعلومات التي قدمتھا للشركة."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
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
            margin:[0,5,0,0],
            table: {
              widths: [
                230,230,80
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"\n",
                        style: ["center", {fontSize: 12}, "Times", "bold","header"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 12}, "Times", "bold","header"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 12}, "Times", "bold","header"]
                      },
                    ], 
                  },
                  {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:"Name/",
                        style: ["center", {fontSize: 12}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("الاس م"),
                        style: ["center", {fontSize: 12}, "arabic","bold" ]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Signature/",
                        style: ["center", {fontSize: 12}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("التوقی ع"),
                        style: ["center", {fontSize: 12}, "arabic","bold" ]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Date/",
                        style: ["center", {fontSize: 12}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("التاری خ"),
                        style: ["center", {fontSize: 12}, "arabic","bold" ]
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
                        text:convertTextToRtl("الإقرار:"),
                        style: ["right", {fontSize: 16}, "arabic", "bold", "header"]
                      },
                      {
                        text:":C",
                        style: ["right", {fontSize: 16}, "Times", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl("الجزء"),
                        style: ["right", {fontSize: 16}, "arabic", "bold", "header"]
                      },
                      {
                        text:"\nPart C: Declaration:",
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
            
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("أقر أنا ______________________________________________________________ )اسم مقدم الطلب(، وأعلن بموجب ھذا أن"),
                        style: ["right", {fontSize: 11.5}, "arabic", ]
                      },
                      {
                        text:" .1",
                        style: ["right", {fontSize: 11.5}, "Times",]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("قد قمت بتقدیمھا بعد فھمي الكامل لھا وأقر بصحتھا، وأُقر بنفس الشيء في كل التفاصیل"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:" B",
                        style: ["right", {fontSize: 10.5}, "Times",]
                      },
                      {
                        text:convertTextToRtl("والجزء"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:" A",
                        style: ["right", {fontSize: 10.5}, "Times",]
                      },
                      {
                        text:convertTextToRtl("البیانات والإجابات السابقة الواردة في الجزء"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:" .1",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("الخاصة التي قدمتھا كما أقر بعدم حجب أي معلومات وأوافق أن تشكل ھذه البیانات وھذا الإقرار، بالإضافة إلى الإضافة إلى استمارة الطلب، إن وجدت ،"),
                        style: ["right", {fontSize: 10}, "arabic", ]
                      },
                      {
                        text:" .1",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl('أساساً لعقد الضمان بیني وبین شركة التأمین على الحیاة )العالمیة( ش.م.ب. )مقفلة( )والمشار إلیھا فیما بعد باسم "الشركة"(. وكذلك جزء اً من أي عقد'),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:" .1",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("بولیصة قد یصدر بموجبھا. كما أنني أدرك تماماً وأوافق على أنھ في حالة وجود أي معلومات غیر صحیحة في ھذا العقد، یكون العقد المذكور باطلاً"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:" .1",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("ولاغیاً، كما یحق للشركة مصادرة الأموال المدفوعة."),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:" .1",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
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
            margin:[5,5,10,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:"1. I ______________________________________________________________ (Name of the proposer), do ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"hereby declare that the foregoing statements and answers in part A and part B have been given by me after fully ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"understanding the questions and the same are true and complete in every particular and that I have not withheld ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"any information and do hereby agree and declare that these statements and this declaration along with addendum ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"to the proposal form, if any, shall be basis of the contract of assurance between me and Life Insurance ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"Corporation (International) B.S.C.(C) (referred as “the Company” hereinafter). I agree that they shall form a part ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"of any Policy contract that may be issued on the strength thereof. I am also fully aware and agreeing that if any ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"untrue information be contained therein, the said contract shall be absolutely Null and Void and moneys which ",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                      {
                        text:"shall have been paid in respect thereof shall stand forfeited to the Company.",
                        style: ["justify", {fontSize: 12}, "Times",]
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
            
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("خطة التقاعد / المعاش المقترحة ھي حسب متطلباتي واحتیاجاتي. لقد فھمت بالكامل شروط وأحكام الخطة المقترحة والخیار الذي اخترتھ من قبل ومزایا"),
                        style: ["right", {fontSize: 10}, "arabic", ]
                      },
                      {
                        text:" .2",
                        style: ["right", {fontSize: 11.5}, "Times",]
                      },
                      {
                        text:"\n",
                        style: ["right", {fontSize: 9}, "Times",]
                      },
                      {
                        text:convertTextToRtl("الإستحقاق والوفاة المتاحة، إن وجدت، في إطار الخیار المحدد ."),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:" .1",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\ngap",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\ngap",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\ngap",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
                      },
                      {
                        text:"\ngap",
                        style: ["right", {fontSize: 10.5}, "Times","header"]
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
            layout:{
              paddingTop: (i, node) => 0
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 6 of 11",
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

module.exports = Page_6