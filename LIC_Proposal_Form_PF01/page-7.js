const Page_7 = ({
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
            layout:{
              paddingBottom: (i, node) => 0,
              paddingTop: (i, node) => 1,
            },
            table: {
              widths: [
                10,"*","*","*","*","*"
              ],
              body: [
                [
                  {text:"30."},
                  {
                    text:[
                      {
                        text:"Are you a member of the armed forces, either full time or part time?\t\t\t",
                      },
                      {
                        text:convertTextToRtl("هل أنت من أفراد القوات المسلحة، سواء بدوام كامل أو جزئي؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    // border:[true, true, false, true],
                    style:"justify",
                    colSpan:5
                  },{},{},{},{}
                ],
                [
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    colSpan:3,
                    style: "center"
                  },{},{},
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    style: "center",
                    colSpan:3
                  },{},{}
                ],
                [
                  {text:"31."},
                  {
                    text:[
                      {
                        text:"Do you take part in or have definite plans to take part in any sports, recreations, pastime or activities that may be considered hazardous? For example Scuba diving, motor racing, rock climbing, private flying etc.?",
                      }
                    ],
                    border:[true, true, false, true],
                    style:"justify",
                    colSpan:2
                  },{},
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
                    border:[false, true, true, true],
                    style:"justify",
                    colSpan:3
                  },{},{}
                ],
                [
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    colSpan:3,
                    style: "center"
                  },{},{},
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    style: "center",
                    colSpan:3
                  },{},{}
                ],
                [
                  {text:"32."},
                  {
                    text:[
                      {
                        text:"Are you holding any honorary or regulatory or legisla- tive, government authority or position?",
                      }
                    ],
                    border:[true, true, false, true],
                    style:"justify",
                    colSpan:2
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل تتقلد أي سلطة أو منصب حكومي فخري أو تنظيمي أو تشريعي؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      }
                    ],
                    border:[false, true, true, true],
                    style:"justify",
                    colSpan:3
                  },{},{}
                ],
                [
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    colSpan:3,
                    style: "center"
                  },{},{},
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    style: "center",
                    colSpan:3
                  },{},{}
                ],
                [
                  {text:"33."},
                  {
                    text:[
                      {
                        text:"Are any of your close relatives - parents, spouse, children brothers, sisters are holding any Government, Judiciary or Military position or holding a political position?",
                      }
                    ],
                    border:[true, true, false, true],
                    style:"justify",
                    colSpan:2
                  },{},
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
                    border:[false, true, true, true],
                    style:"justify",
                    colSpan:3
                  },{},{}
                ],
                [
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    colSpan:3,
                    style: "center"
                  },{},{},
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    style: "center",
                    colSpan:3
                  },{},{}
                ],
                [
                  {text: "Name: ", colSpan:3},{},{},
                  {text: "Name: ", colSpan:3},{},{}
                ],
                [
                  {text: "Relation: ", colSpan:2},{},
                  {text: "Position: "},
                  {text: "Relation: ", colSpan:2},{},
                  {text: "Position: "},
                ],
                [
                  {text:"34."},
                  {
                    text:[
                      {
                        text:"Have you in previous 12 months travelled or in the following 12 months intend to undertake travel outside the country of residence?",
                      }
                    ],
                    border:[true, true, false, true],
                    style:"justify",
                    colSpan:2
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل سافرت خلال ١٢ شهرًا الماضية أو تنوي السفر خارج بلد الإقامة في ١٢ شهرا القادمة؟"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      }
                    ],
                    border:[false, true, true, true],
                    style:"justify",
                    colSpan:3
                  },{},{}
                ],
                [
                  {
                    text:"YES / NO\tIf yes, please provide details.",
                    colSpan:3,
                    style: "center"
                  },{},{},
                  {
                    text:"YES / NO\tIf yes, please provide details.\n\n",
                    style: "center",
                    colSpan:3
                  },{},{}
                ],
                [
                  {
                    text:[
                      {
                        text:"Details of travel that you have taken over the last 12 months\t\t\t\t\t\t\t\t\t\t",
                      },
                      {
                        text:convertTextToRtl("تفاصيل السفر التي قمت بها خلال الـ 12 شهرا الماضية."),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    style:"justify",
                    colSpan:6
                  },{},{},{},{},{}
                ],
                [
                  {
                    text:"",
                    colSpan:2
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("المدينة و الدولة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Country & City",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مدة البقاء خلال الرحلة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Duration of stay per visit",
                        style: "center"
                      },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("عدد الرحلات خلال السنة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Number of visits per year", style: "center" },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الهدف من السفر"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(")عمل / سياحة("),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      { text:"Purpose of travel"},
                      { text:"(Business / Vacation)"},
                    ],
                    style: "center"
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ١"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nProposer / Life to be Assured 1",
                        style: ["center"]
                      },
                    ],
                    colSpan:2,
                    rowSpan:2
                  },{},
                  {},{},{},{text:"\n\n"}
                ],
                [
                  {},{},
                  {text:"\n\n"},{},{},{}
                ],
                [
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
                    colSpan:2,
                    rowSpan:2
                  },{},
                  {},{},{},{text:"\n\n"}
                ],
                [
                  {},{},
                  {text:"\n\n"},{},{},{}
                ],
                [
                  {
                    text:[
                      {
                        text:"Details of Travel that you intend to undertake in following 12 months",
                      },
                      {
                        text:convertTextToRtl("تفاصيل السفر خارج بلد الإقامة اذا كنت تنوي السفر في 12 شهرا القادمة "),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],
                    style:"justify",
                    colSpan:6
                  },{},{},{},{},{}
                ],
                [
                  {
                    text:"",
                    colSpan:2
                  },{},
                  {
                    stack:[
                      {
                        text:convertTextToRtl("المدينة و الدولة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Country & City",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مدة البقاء خلال الرحلة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"Duration of stay per visit",
                        style: "center"
                      },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("عدد الرحلات خلال السنة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Number of visits per year", style: "center" },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الهدف من السفر"),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl(")عمل / سياحة("),
                        style: [{fontSize: 10}, "arabic"]
                      },
                      { text:"Purpose of travel"},
                      { text:"(Business / Vacation)"},
                    ],
                    style: "center"
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("مقدم الطلب / المؤمن على حياته ١"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nProposer / Life to be Assured 1",
                        style: ["center"]
                      },
                    ],
                    colSpan:2,
                    rowSpan:2
                  },{},
                  {},{},{},{text:"\n\n"}
                ],
                [
                  {},{},
                  {text:"\n\n"},{},{},{}
                ],
                [
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
                    colSpan:2,
                    rowSpan:2
                  },{},
                  {},{},{},{text:"\n\n"}
                ],
                [
                  {},{},
                  {text:"\n\n"},{},{},{}
                ]
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