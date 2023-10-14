const Page_7 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 9,
    table : {
      body : [
        [
          {
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            table: {
              widths: [280,260],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("بيان شخصي حول الحالة الصحية الحالية"),
                        style: ["right", {fontSize: 12}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الجزء ب:"),
                        style: ["right", {fontSize: 15}, "arabic", "bold"]
                      },
                      {
                        text:"\nPart B: ",
                        style: ["left", {fontSize: 14}, "Arial", "bold"]
                      },
                      {
                        text:"Personal Statement about present state of health",
                        style: ["left", {fontSize: 12}, "Arial", "bold"]
                      }
                    ],
                    colSpan:2
                  },{}
                ],
                [
                  {
                    border: [false, false, false, false],
                    canvas: [
                      {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 550, y2: 0,
                        lineWidth: 1
                      },
                    ],
                    colSpan:2
                  },{}
                ],
                [
                  {
                    text:"Note: - Please read carefully and answer every Question. Do not use dots, dashes, or Ditto Marks. In case answer is yes please give full details in the space provided or attach separate sheet.",
                    style:["justify",{fontSize:10}],
                    border: [false, false, false, false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("احظة: يُرجى قراءة كل سؤال بعناية لا تستخدم النقاط أو الخطوط"),
                        style: ["right", {fontSize: 10}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الفاصلة، في حالة الإجابة بنعم، يُرجى سرد التفاصيل الكاملة في"),
                        style: ["right", {fontSize: 10}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("المساحة المتوفرة أو إرفاق ورقة منفصلة"),
                        style: ["right", {fontSize: 10}, "arabic", "bold"]
                      }
                    ],
                    border: [false, false, false, false],
                  }
                ],
                [
                  {
                    stack:[
                      {
                        text:convertTextToRtl(")لا يلزم ملء هذا الجزء في حالة عدم وجود وثائق تأمين لتغطية المخاطر("),
                        style: ["center", {fontSize: 12}, "arabic", "bold"]
                      },
                      {
                        text:"(This part need not be filled in case of without risk cover policies)",
                        style: ["center", "bold",{fontSize: 10}]
                      }
                    ],
                    border: [false, false, false, false],
                    colSpan:2
                  },{}
                ]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,420,100
              ],
              body: [
                [
                  {
                    text:"no.",style:"header"
                  },
                  {
                    border:[true, true, true, true],
                    text:[
                      {
                        text:"Question  ",style:"center"
                      },
                      {
                        text:convertTextToRtl("السؤال"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    // border:[true, true, false, true],
                    style:"header",
                  },
                  {
                    text:[
                      {
                        text:"Answer  ",style:"center"
                      },
                      {
                        text:convertTextToRtl("الإجابة "),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],style:"header",
                  },
                ],
                [
                  {
                    text:"1.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {text:[
                                {
                                  text:convertTextToRtl("الطول"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                                {text:"\t\t\t\t\t\t\t\t\t"},
                                {
                                  text:convertTextToRtl("سم"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                              ]},
                              {text:[
                                {text:"Height"},
                                {text:"__________________"},
                                {text:"Cms"},
                              ], style:"center"},
                              {
                                text:"\nHas your weight changed by more than 5kg in the last 12 months?", 
                                style: "justify"
                              },
                              {
                                text:"If yes, please provide reasons"
                              }
                            ],
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {text:[
                                {
                                  text:convertTextToRtl("الوزن"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                                {text:"\t\t\t\t\t\t\t\t\t"},
                                {
                                  text:convertTextToRtl("كجم"),
                                  style: ["center", {fontSize: 10}, "arabic"]
                                },
                              ]},
                              {text:[
                                {text:"Weight"},
                                {text:"__________________"},
                                {text:"Kgs"},
                              ], style:"center"},
                              {text:"\n", style:{fontSize:7}},
                              {
                                text:convertTextToRtl("هل تغير وزنك بأكثر من ۵ كجم في آخر ١۲ "),
                                style: ["center", {fontSize: 9.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("شهرا؟ اذا كانت الإجابة نعم يرجى ذكر السبب"),
                                style: ["center", {fontSize: 9.5}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"2.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: [220,180],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Have you smoked tobacco, e-cigarettes (Vape) or any other substance or used nicotine product within last 12 months?", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("بتدخين السجائر، السجائر هل قمت"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الإلكترونية )الشيشة الإلكترونية( أو"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                            ]
                          },
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            colSpan:2,
                            stack:[
                              {
                                text:convertTextToRtl("إذا كانت الإجابة بنعم ، يرجى تقديم النوع والكمية في اليوم"),
                                style: ["left", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"If yes, please provide the type and quantity per day:_________________"
                              },
                              {
                                text:convertTextToRtl("إذا كنت مدخنا سابقا ، فيرجى التأكيد عند التوقف عن التدخين"),
                                style: ["left", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"If you are ex-smoker, please confirm when you stopped smoking:",
                              },
                            ]
                          },{}
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            text:""
                          },{
                            border:[false,false,false,false],
                            table: {
                              widths:[45,10,10,10,10],
                              body: [
                                [
                                  {text:'',border:[false,false,true,false]},
                                  '', '', '\n', '\n'
                                ]
                              ]
                            },
                          }
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"3.",
                  },{
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Do you consume alcohol?", 
                            style:"left"
                          },
                          {
                            border:[false,false,false,false],
                            text:convertTextToRtl("هل تستهلك الكحول؟"),
                            style: ["right", {fontSize: 9}, "arabic"]
                          },
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            colSpan:2,
                            stack:[
                              {
                                text:convertTextToRtl("إذا كانت الإجابة بنعم ، فيرجى تقديم عدد الوحدات المستهلكة في الأسبوع"),
                                style: ["left", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"If yes, please provide the number of units consumed per week:__________________"
                              }
                            ],
                          },{}
                        ],
                        [
                          {
                            border:[false,false,false,false],
                            text:"1 unit = single measure of spirits or 125 ml glass of wine or 250 ml of beer", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("١ وحدة =  قياس واحد من المشروبات الروحية أو"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("  125 مل من كأس النبيذ أو 250 مل من البيرة"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              }
                            ],
                          },
                        ],
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"4.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Have you ever been advised to give up tobacco and/or alcohol for a specific reason?", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل تم نصحك من قبل بالتخلي عن التبغ و / أو "),
                                style: ["right", {fontSize: 7}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الكحول لسبب محدد؟"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              }
                            ],
                          },
                        ],
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"5.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Have you ever had, been treated for or had symptoms for the following conditions?", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل سبق لك أن عانيت أو عولجت أو عانيت من"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أعراض من الحالات التالية؟"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              }
                            ],
                          },
                        ],
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"a.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            text:"Diabetes or raised blood sugar?", 
                            style:"justify"
                          },
                          {
                            border:[false,false,false,false],
                            text:convertTextToRtl("مرض السكري أو ارتفاع السكر في الدم؟ "),
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"b.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Any disease, disorder or condition related to heart or circulatory system?",
                              },
                              {
                                text:"(including high blood pressure, chest pain heart attack, murmur, palpitations etc.)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي مرض أو اضطراب أو حالة تتعلق بالقلب أو"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الدورة الدموية؟"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("بما في ذلك ارتفاع ضغط الدم ، ألم الصدر ، النوبة"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("القلبية ، النفخات ، الخفقان ، الخ("),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              }
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"c.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Any type of cancer, pre-cancerous conditions, tumor, lump, cyst or enlarged glands?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي نوع من السرطان ، حالات ما قبل السرطان ،"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("ورم، كتل ، كيس أو تضخم الغدد؟"),
                                style: ["right", {fontSize: 7}, "arabic"]
                              }
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"d.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Any disease or disorder of lung or respiratory system?"
                              },
                              {
                                text:"(Including shortness of breath, asthma, bronchitis, persistent cough, tuberculosis etc.)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي مرض أو اضطراب في الرئة أو الجهاز التنفسي؟"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("بما في ذلك ضيق التنفس ، والربو ، والتهاب"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الشعب الهوائية ، والسعال المستمر ، والسل ، إلخ"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              }
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"e.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Any condition affecting your bowel or digestive system?"
                              },
                              {
                                text:"(including reflux, ulcers, hernia, recurrent indigestion, persistent constipation or diarrhea, gastric banding or sleeve etc.)"
                              },
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أى حالة تؤثر على الأمعاء أو الجهاز الهضمي؟"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl(")بما في ذلك الارتجاع أو القرحة أو الفتق أو عسر"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الهضم المتكرر أو الإمساك أو الإسهال المستمر أو ربط"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("المعدة أو التكميم وما إلى ذلك ("),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"f.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Any disease, disorder or condition related to kidneys or bladder? (including blood or protein in urine, kidney or bladder stones etc.)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي مرض أو اضطراب أو حالة تتعلق بالكلى أو "),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("ثانة؟ ) بما في ذلك الدم أو البروتين في البول أو "),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("حصوات الكلى أو المثانة وما إلى ذلك("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"g.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Any condition affecting your liver or pancreas  (including fatty liver, hepatitis etc.)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي حالة تؤثر على الكبد أو البنكرياس ) بما في"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("لك الكبد الدهني والتهاب الكبد وما إلى ذلك("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
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
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 7",
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

module.exports = Page_7