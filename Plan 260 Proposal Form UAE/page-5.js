const Page_5 = ({
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
            
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("_____________________________________"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:convertTextToRtl("توقیع المعین )إن أمكن("),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:convertTextToRtl("_____________________________________"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:convertTextToRtl("توقیع مقدم الطلب"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"\nSignature of Proposer",
                        style: ["left", {fontSize: 13}, "Times",]
                      },
                      {
                        text:convertTextToRtl("__________________________"),
                        style: ["left", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"Signature of Appointee (If applicable)",
                        style: ["left", {fontSize: 13}, "Times",]
                      },
                      {
                        text:convertTextToRtl("____________"),
                        style: ["left", {fontSize: 11}, "arabic", ]
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
                        text:convertTextToRtl("إعلان الاعتماد الذاتي للعمیل :"),
                        style: ["right", {fontSize: 16}, "arabic", "bold", "header"]
                      },
                      {
                        text:":B",
                        style: ["right", {fontSize: 16}, "Times", "bold", "header"]
                      },
                      {
                        text:convertTextToRtl("الجزء"),
                        style: ["right", {fontSize: 16}, "arabic", "bold", "header"]
                      },
                      {
                        text:"\nPart B: CRS Self-Certification Declaration:",
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
                        text:"Please complete and sign this form. For Joint Life Policies, each life assured will have to complete a separate form.",
                        style: ["left", {fontSize: 10}, "Times",]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times",]
                      },
                      {
                        text:convertTextToRtl("یرجى ملئ وتوقیع الاستمارة. بولیصات التأمین على الحیاة المشترك،ة یجب على كل حیاة مؤًمن علیھا ان یكون لھا استمارة كاملة مستقلة."),
                        style: ["right", {fontSize: 10}, "arabic", ]
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
            margin:[0,10,0,0],
            table: {
              widths: [
                70,
                70,
                70,
                70,
                35,
                35,
                70,
                70,
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"\nFull Name",
                        style: ["left", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الاسم بالكامل"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                    ], colSpan:2,style:{fillColor: "#D3D3D3"}
                  },{},
                  {
                    text:"", colSpan:3
                  },{},{},
                  {
                    text:[
                      {
                        text:"Date of Birth",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n(DD/MM/YYYY)",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تاریخ المیلاد )یوم/ شھر/ سنة("),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ], colSpan:2,
                  },{},
                  {
                    text:"" },
                ],
                [
                  {
                    text:[
                      {
                        text:"Place of Birth",
                        style: ["left", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("محل المیلاد"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                    ], style:{fillColor: "#D3D3D3"}
                  },
                  {
                    text:[
                      {
                        text:"Town or City",
                        style: ["left", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("المدینة او البلدة"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                    ], style:{fillColor: "#D3D3D3"} 
                  },
                  {
                    text:""
                  },
                  {
                    text:[
                      {
                        text:"\nCountry",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الدولة"),
                        style: ["center", {fontSize: 9}, "arabic", "bold"]
                      },
                    ], style:{fillColor: "#D3D3D3"}
                  },
                  {
                    text:" ",colSpan:2
                  },{},
                  {
                    text:[
                      {
                        text:"\nNationality",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الجنسیة"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], style:{fillColor: "#D3D3D3"}
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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            margin:[0,10,0,0],
            table: {
              widths: [
                260,260
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"Present Country of Residence",
                        style: ["left", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("دولة الإقامة الحالیة"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                    ],style:{fillColor: "#ddd9c3"}
                  },{text:" "},
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
                        text:"Are you a tax resident in any other country other than present country mentioned above?       □ Yes        □ No",
                        style: ["left", {fontSize: 10}, "Times","bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times",]
                      },
                      {
                        text:convertTextToRtl("لا"),
                        style: ["right", {fontSize: 10}, "arabic", "bold" ]
                      },
                      {
                        text:" □ ",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["right", {fontSize: 10}, "arabic", "bold" ]
                      },
                      {
                        text:" □ ؟",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("ھل انت مسدد لضریبة اقامة في أي دولة أخرى خارج دولة الامارات العربیة المتحدة"),
                        style: ["right", {fontSize: 10}, "arabic", "bold" ]
                      },
                      {
                        text:"\n(For details on tax residency of a country please refer to OECD site ",
                        style: ["left", {fontSize: 10}, "Times",]
                      },
                      {
                        text:"http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-residency",
                        link:"http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-residency",
                        style: ["left", {fontSize: 10}, "Times", "blue",], decoration: 'underline'
                      },
                      {
                        text:")",
                        style: ["left", {fontSize: 10}, "Times",]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times",]
                      },
                      {
                        text:convertTextToRtl(")لمزید من التفاصیل عن ضریبة إقامة الدول یرجى الاطلاع على الموقع الالكتروني الخاص بمنظمة التعاون الاقتصادي والتنمیة على الرابط التالي"),
                        style: ["right", {fontSize: 10}, "arabic", "bold" ]
                      },
                      {
                        text:"\n(",
                        style: ["right", {fontSize: 10}, "Times",]
                      },
                      {
                        text:"http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-residency",
                        link:"http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-residency",
                        style: ["right", {fontSize: 10}, "Times", "blue",], decoration: 'underline'
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
            margin:[0,10,0,0],
            layout: 'noBorders',
            table: {
              widths: [
                270,270
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"If Yes Please complete the following table indicating:",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:"\n~ where the Account Holder is tax resident and",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n~ The Account Holder’s TIN (Tax Identification Number e.g.",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n~ ",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"PAN) for each country/jurisdiction indicated.",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {text:[
                    {
                      text:convertTextToRtl("في حالة الإجابة بنعم یرجى اكمال الجدول التالي الذي یوضح:"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("المحل الذي یسدد فیھ صاحب الحساب ضریبة الإقامة"),
                      style: ["right", {fontSize: 9}, "arabic",]
                    },
                    {
                      text:convertTextToRtl("  #   "),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("الرقم التعریفي الضریبي لصاحب الحساب موضحاً كل دولة / ولایة"),
                      style: ["right", {fontSize: 9}, "arabic" ]
                    },
                    {
                      text:convertTextToRtl("  #    "),
                      style: ["right", {fontSize:9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("قضائیة."),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:convertTextToRtl("  #   "),
                      style: ["right", {fontSize: 9}, "arabic", "header" ]
                    },
                  ],
                 },
                ],
                [
                  {
                    text:[
                      {
                        text:"If a TIN is unavailable please provide the appropriate reason ",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:"A, B ",
                        style: ["left", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"or ",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:"C where indicated below:",
                        style: ["left", {fontSize: 11}, "Times", "bold"]
                      },
                    ],
                  },
                  {text:[
                    {
                      text:convertTextToRtl("في حالة عدم توفر الرقم التعریفي الضریبي یرجى توضیح السبب الملائم من أ،"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("ب ،أو ت فیما یلي:"),
                      style: ["right", {fontSize: 9}, "arabic", "bold"]
                    },
                  ],
                 },
                ],
                [
                  {
                    text:[
                      {
                        text:"Reason A",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                      {
                        text:"gapga",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"The country/jurisdiction where the Account",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nReason Agapga",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"Holder is resident does not issue TINs to its",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nReason Agapga",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"residents",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nReason B",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                      {
                        text:"gapga",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"The Account Holder is otherwise unable to",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nReason Agapga",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"obtain a TIN or equivalent number (Please",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nReason Agapga",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"explain)",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nReason C",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                      {
                        text:"gapga",
                        style: ["left", {fontSize: 10}, "Times", "header"]
                      },
                      {
                        text:"No TIN is required.",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {text:[
                    {
                      text:convertTextToRtl("الدولة / الولایة القضائیة التي یقیم فیھا صاحب الحساب لا تصدر"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"gap",
                      style: ["right", {fontSize: 9}, "Times", "header"]
                    },
                    {
                      text:convertTextToRtl("السبب أ:"),
                      style: ["right", {fontSize: 9}, "arabic", "bold"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("رقم تعریفي ضریبي للمقیمین فیھا"),
                      style: ["right", {fontSize: 9}, "arabic" ]
                    },
                    {
                      text:"gap",
                      style: ["right", {fontSize: 9}, "Times", "header"]
                    },
                    {
                      text:convertTextToRtl("السبب أ:"),
                      style: ["right", {fontSize: 9}, "arabic", "bold", "header"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("صاحب الحساب غیر قادر على الحصول على الرقم التعریفي"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"ga",
                      style: ["right", {fontSize: 9}, "Times", "header"]
                    },
                    {
                      text:convertTextToRtl("السبب ب:"),
                      style: ["right", {fontSize: 9}, "arabic", "bold"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("الضریبي أو ما یعادلھ )یرجى التوضیح(."),
                      style: ["right", {fontSize: 9}, "arabic" ]
                    },
                    {
                      text:"gap",
                      style: ["right", {fontSize: 9}, "Times", "header"]
                    },
                    {
                      text:convertTextToRtl("السبب أ:"),
                      style: ["right", {fontSize: 9}, "arabic", "bold", "header"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("غیر مطلوب رقم تعریفي ضریبي"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"ga",
                      style: ["right", {fontSize: 9}, "Times", "header"]
                    },
                    {
                      text:convertTextToRtl("السبب ج:"),
                      style: ["right", {fontSize: 9}, "arabic", "bold"]
                    },
                  ],
                 },
                ],
                [
                  {
                    text:[
                      {
                        text:"(Note. Only select this reason if the domestic law of the relevant jurisdiction does not require the collection of the TIN issued by such jurisdiction)",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                    ],
                  },
                  {text:[
                    {
                      text:convertTextToRtl(")ملحوظة: یتم اختیار ھذا السبب فقط في حالة لم یستلزم القانون المحلي او التشریعات"),
                      style: ["right", {fontSize: 8}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 8}, "Times"]
                    },
                    {
                      text:convertTextToRtl("ذات الصلة الحصول على الرقم التعریفي الضریبي الصادر من الولایة القضائیة ذات"),
                      style: ["right", {fontSize: 8}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 8}, "Times"]
                    },
                    {
                      text:convertTextToRtl("الصلة(."),
                      style: ["right", {fontSize: 8}, "arabic",]
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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            margin:[0,10,0,0],
            table: {
              widths: [
                140,120,25,25,25,180
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"\nCountry/Jurisdiction of tax residence",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("دولة / جھة الضریبة على الإقامة"),
                        style: ["left", {fontSize: 9}, "arabic"]
                      },
                    ],rowSpan:2,
                  },
                  {
                    text:[
                      {
                        text:"\nTIN or equivalent",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الرقم التعریفي الضریبي او ما یعادلھ"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ],rowSpan:2, 
                  },
                  {
                    text:[
                      {
                        text:"If no TIN available tick the Reason",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("في حالة عدم توفر رقم"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تعریفي ضریبي یرجى"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("اختیار السبب"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ], colSpan:3,
                  },
                  {},{},
                  {
                    text:[
                      {
                        text:"Please explain in the following boxes why you are unable to obtain a TIN if you selected Reason ",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"B",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("یرجى توضیح أسباب عدم توفر رقم تعریفي ضریبي في ھذه"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("الخانات في حالة اختیار السبب )ب("),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ],rowSpan:2,
                  },  
                ],
                [
                  {},{},
                  {
                    text:[
                      {
                        text:"A",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("أ"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"B",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("ب"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"C",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("ج"),
                        style: ["center", {fontSize: 9}, "arabic"]
                      },
                    ],
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
            layout:{
              paddingTop: (i, node) => 0
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 5 of 11",
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

module.exports = Page_5


