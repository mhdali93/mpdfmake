const Page_8 = ({
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
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,207,207,100
              ],
              body: [
                [
                  {
                    text:"h.",
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
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("المفاصل أو الأطراف أو العمود الفقري؟ )بما في"),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("ذلك التهاب المفاصل والروماتيزم وانزلاق "),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("الغضروف والشلل وما إلى ذلك("),
                                style: ["right", {fontSize: 6.5}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    },colSpan:2
                  },{},
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
                    text:"i.",
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
                    },colSpan:2
                  },{},
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
                    text:"j.",
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
                    },colSpan:2
                  },{},
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
                    text:"k.",
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
                    },colSpan:2
                  },{},
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
                    text:"l.",
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
                    },colSpan:2
                  },{},
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
                    text:"m.",
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
                    },colSpan:2
                  },{},
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
                    text:"n.",
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
                    },colSpan:2
                  },{},
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
                    text:"6.",
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
                    },colSpan:2
                  },{},
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
                    text:"7.",
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
                                style: ["right", {fontSize: 6}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أو المتابعة مع أخصائي طبي أو خضعت لأي اختبار طبي أو"),
                                style: ["right", {fontSize: 6}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("فحص خاص مثل، على سبيل المثال لا الحصر تخطيط"),
                                style: ["right", {fontSize: 6}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("ب، واختبارات الدم والخزعات والتصوير بالرنين "),
                                style: ["right", {fontSize: 6}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("غناطيسي / التصوير المقطعي المحوسب، واختبار مستضد"),
                                style: ["right", {fontSize: 6}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("البروستاتا النوعي، والتصوير الشعاعي للثدي وما إلى ذلك."),
                                style: ["right", {fontSize: 6}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },colSpan:2
                  },{},
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
                    text:"8.",
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
                                text:"In the past 5 years, have you ever been admitted to a hospital or been absent from work for a period of more than five days due to any illness or injury?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("في السنوات الخمس الماضية ، هل سبق لك أن "),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("دخلت المستشفى أو تغيبت عن العمل لمدة تزيد عن"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("خمسة أيام بسبب أي مرض أو إصابة؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },colSpan:2
                  },{},
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
                    text:"9.",
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
                            stack:[
                              {
                                text:"In the past 12 months, have you had any medical symptom, change in your physical or mental health for which you have not consulted a doctor, hospital or medical practitioner?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("خلال الاثني عشر شهرًا الماضية ، هل عانيت من"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أي أعراض طبية أو تغير في صحتك البدنية أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("العقلية لم تستشر طبيبًا أو مستشفى أو ممارسا"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("طبيا بسببه؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },colSpan:2
                  },{},
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
                    text:"10.",
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
                                text:"Are you awaiting the result of any medical investigation, procedure follow up or any other medical or blood test?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("هل تنتظر نتيجة أي فحص طبي أو متابعة إجراء أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("أي فحص طبي أو فحص دم؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },colSpan:2
                  },{},
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
                    text:"11.",
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
                                text:"In the next 12 months, do you intend to have any consultation or check up in connection with any medical symptom or condition or are you waiting for the result of any medical investigation?"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("في الاثني عشر شهرًا القادمة ، هل تنوي إجراء أي"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("استشارة أو فحص فيما يتعلق بأي أعراض أو"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("حالة طبية أم أنك تنتظر نتيجة أي فحص طبي؟"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                            ],
                          },
                        ]
                      ]
                    },colSpan:2
                  },{},
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
                    text:"12.",
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    colSpan:5,
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Please provide details of the doctor/clinic / hospital you are visiting for your well-being (even if it is in a country other than your current country of residence)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("يرجى تقديم تفاصيل عن الطبيب / العيادة / المستشفى الذي تزوره"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("من أجل صحتك )حتى لو كانت في بلد آخر غير بلد إقامتك الحالي("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:3,
                  },{},
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
                    text:"12.",rowSpan:4,
                  },
                  {
                    layout:{
                      paddingTop: (i, node) => 0,
                      paddingBottom: (i, node) => 0,
                      paddingRight: (i, node) => 0,
                      paddingLeft: (i, node) => 0
                    },
                    colSpan:5,
                    table: {
                      widths: ["*","*"],
                      body: [
                        [
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:"Please provide details of the doctor/clinic / hospital you are visiting for your well-being (even if it is in a country other than your current country of residence)"
                              }
                            ],
                            style:["justify",{fontSize:8}]
                          },
                          {
                            border:[false,false,false,false],
                            stack:[
                              {
                                text:convertTextToRtl("يرجى تقديم تفاصيل عن الطبيب / العيادة / المستشفى الذي تزوره"),
                                style: ["right", {fontSize: 8}, "arabic"]
                              },
                              {
                                text:convertTextToRtl("من أجل صحتك )حتى لو كانت في بلد آخر غير بلد إقامتك الحالي("),
                                style: ["right", {fontSize: 8}, "arabic"]
                              }
                            ],
                          },
                        ]
                      ]
                    },
                    colSpan:3,
                  },{},
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],
                  },
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Name of Doctor / ",
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("اسم الطبيب"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      }
                    ],
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],colSpan:2
                  },{},
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Name of Clinic / Hospital  ",
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("المستشفى / اسم العيادة"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      }
                    ],
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],colSpan:2
                  },{},
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Address / ",
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("العنوان"),
                        style: ["center", {fontSize: 8}, "arabic"]
                      }
                    ],
                  },
                  {
                    text:[
                      {
                        text:"  ",style:"center"
                      },
                    ],colSpan:2
                  },{},
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
                    text:"Page 8",
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

module.exports = Page_8