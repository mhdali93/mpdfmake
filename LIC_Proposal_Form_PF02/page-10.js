const Page_10 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 8,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0,
              paddingLeft: (i, node) => 2,
              paddingRight: (i, node) => 2,
            },
            table: {
              widths: [10,325,48,47,48,47],
              body: [
                [
                  {
                    text:"\n\nNo.",
                    rowSpan:2,
                    style:["center","header"]
                  },
                  {
                    stack:[
                      {text:"\n"},
                      {
                        text:convertTextToRtl("السؤال"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Question", style:"center" },
                    ],
                    rowSpan:2,
                    style:["center","header", {fontSize: 9.5}]
                  },
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ١"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      },
                      { text:"Proposer / Life to be Assured 1", style:["center", {fontSize: 7}] },
                    ],
                    style:"header",
                  },{},
                  {
                    colSpan:2,
                    stack:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ۲"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      },
                      { text:"Proposer / Life to be Assured 2", style:["center", {fontSize: 7}] },
                    ],
                    style:"header",
                  },{}
                ],
                [
                  {},{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Yes", style:"center" },
                    ],
                    style:"header",
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"No", style:"center" },
                    ],
                    style:"header",
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Yes", style:"center" },
                    ],
                    style:"header",
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"No", style:"center" },
                    ],
                    style:"header",
                  }
                ],
                [
                  {text:"a."},
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
                  {},{},{},{}
                ],
                [
                  {text:"b."},
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
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الدورة الدموية؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("بما في ذلك ارتفاع ضغط الدم ، ألم الصدر ، النوبة"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("القلبية ، النفخات ، الخفقان ، الخ("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"c."},
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
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("ورم، كتل ، كيس أو تضخم الغدد؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"d."},
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
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("بما في ذلك ضيق التنفس ، والربو ، والتهاب"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الشعب الهوائية ، والسعال المستمر ، والسل ، إلخ"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"e."},
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
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("(بما في ذلك الارتجاع أو القرحة أو الفتق أو عسر"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الهضم المتكرر أو الإمساك أو الإسهال المستمر أو ربط"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("المعدة أو التكميم وما إلى ذلك"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                            style: ["right", {fontSize: 8}, "arabic"]
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"f."},
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
                  {},{},{},{}
                ],
                [
                  {text:"g."},
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
                  {},{},{},{}
                ],
                [
                  {text:"h."},
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
                                text:"Any disorder or disease of the muscles, bones, joints, limbs or spine ? (including arthritis, rheumatism, slipped disc, paralysis etc.)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي اضطراب أو مرض في العضلات أو العظام أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("المفاصل أو الأطراف أو العمود الفقري؟ )بما في"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("ذلك التهاب المفاصل والروماتيزم وانزلاق "),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الغضروف والشلل وما إلى ذلك("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"i."},
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
                                text:"Any neurological, psychiatric, mental illness? (Including epilepsy, fits, persistent headache, anxiety, depression, stroke etc)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي مرض عصبي أو نفسي أو عقلي؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl(")بما في ذلك النوبات والصرع والصداع المستمر"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("والقلق والاكتئاب والسكتة الدماغية وما إلى ذلك("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"j."},
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
                                text:"Any disorder of the blood, skin or auto immune disease? thalassemia, sickle cell disease, Lupus etc.)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("أي اضطراب في الدم أو الجلد أو أمراض المناعة"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الذاتية؟ )بما في ذلك فقر الدم، الثلاسيميا ، مرض"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("فقر الدم المنجلي ، الذئبة ، إلخ ("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"k."},
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
                                text:"Disease or disorder of thyroid, ear, eye, nose? (including partial or total hearing loss, tinnitus, partial or total loss of vision, optic neuritis etc.)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("مرض أو اضطراب الغدة الدرقية والأذن والعين والأنف؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl(" )بما في ذلك فقدان السمع الجزئي أو الكلي ، وطنين"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الأذن، وفقدان الرؤية الجزئي أو الكلي، والتهاب"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("العصب البصري ، إلخ("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"l."},
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
                                text:"Have you ever tested positive for Hepatitis B or C or HIV or are you awaiting the results of such tests ?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:[
                                  {text:convertTextToRtl("أو فيروس نقص المناعة البشرية أو")},
                                  {text:convertTextToRtl(" B أو C ")},
                                  {text:convertTextToRtl(" الكبد")},

                                ],
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("هل تنتظر نتائج هذه الاختبارات؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"m."},
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
                                text:"For male only : Have you ever had a prostate condition?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("للذكور فقط هل عانيت من قبل من حالة مرضية"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("في البروستاتا؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"n."},
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
                                text:"Any symptoms of illness, any physical defect or any condition not mentioned above?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل من أعراض مرضية أو عيب جسدي أو أي حالة"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("غير مذكورة أعلاه؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"o."},
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
                                text:"Did you ever have any accident or injury?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل تعرضت من قبل لأي حادث أو إصابة؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"6."},
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
                                text:"Are you currently taking any medication?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل تأخذ حاليا أي أدوية؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
                [
                  {text:"7."},
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
                                text:"In the past 5 years, have you been under medical review or follow ups with medical specialist or undergone any medical test or special examination such as but not limited to ECG, blood tests, biopsies, MRI/CT scan, PSA screening, mammography etc."
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("في السنوات الخمس الماضية، هل خضعت للمراجعة الطبية"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أو المتابعة مع أخصائي طبي أو خضعت لأي اختبار طبي أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("فحص خاص مثل، على سبيل المثال لا الحصر تخطيط"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("ب، واختبارات الدم والخزعات والتصوير بالرنين "),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("غناطيسي / التصوير المقطعي المحوسب، واختبار مستضد"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("البروستاتا النوعي، والتصوير الشعاعي للثدي وما إلى ذلك."),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    }
                  },
                  {},{},{},{}
                ],
              ]
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
                    text:"Page 10",
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

module.exports = Page_10