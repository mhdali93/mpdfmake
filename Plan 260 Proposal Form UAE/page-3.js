const Page_3 = ({
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
              paddingBottom: (i, node) => 1,
              paddingTop: (i, node) => 1,
            },
            table: {
              widths: [
                19,228,27,27,27,27,27,27,27,27
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl(" "),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:"Any of your close relatives – parents or spouse or children or brothers or sisters are holding any honorary or regulatory or legislative government authority or position?           □ Yes □ No",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:9
                   },
                   {},{},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl(" "),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("یلزم الإجابة على الأسئلة من 21 إلى 29 في حالة إختیار الخیار 2 )الحیاة المشتركة("),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nAnswers to Q. Nos. 21 to 29 are mandatory in case of Option 2 (Joint life)",
                        style: ["left", {fontSize: 9}, "Times", "bold"]
                      },
                    ],colSpan:9
                   },
                   {},{},{},{},{},
                   {},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("21."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("إسم الزوج / الزوج ة"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nName of Spouse:",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],colSpan:9
                   },
                   {},{},{},{},{},
                   {},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("22."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   { text:[
                    {
                      text:convertTextToRtl("تاریخ المیلاد الزوج أو الزوجة :"),
                      style: ["left", {fontSize: 8}, "arabic"]
                    },
                    {
                      text:"\nDate of Birth of Spouse:",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                  ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ي"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nD",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ي"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nD",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ش"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nM",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ش"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nM",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("س"),
                      style: ["left", {fontSize: 8}, "arabic", "grey"]
                    },
                    {
                      text:"\nY",
                      style: ["left", {fontSize: 9}, "Times", "grey"]
                    },
                    
                    ],
                   },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("23."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("سن الزوج / الزوجة في آخر عید میلاد لھ / لھا : _____ سنة"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("_____ شھر"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\nAge of Spouse : _____ Years _____ Months",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("دلیل السن :"),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\nAge proof:",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("24."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("محل میلاد الزوج / الزوجة"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nPlace of Birth of Spouse:",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl('بلد المیلاد للزوج / الزوجة "'),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nCountry of Birth of Spuse:",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("25."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:"Address for Communication of Spouse (Kindly provide proper address proof for this): -",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                      {
                        text:"\nEmirates",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl('عنوان التواصل مع الزوج / الزوجة )یرجى تقدیم الدلیل المناسب عل ى '),
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                      {
                        text:convertTextToRtl(':)العنوان '),
                        style: ["left", {fontSize: 8}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 8}, "Times"]
                      },
                      {
                        text:convertTextToRtl('الإمارات'),
                        style: ["right", {fontSize: 8}, "arabic"]
                      },

                    ],colSpan:8
                   },
                   {},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("26."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("البرید الإلكتروني للزوج / الزوجة :"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nEmail ID of Spouse:-",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:9
                   },
                   {},{},{},{},{},
                   {},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("27."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("أرقام الھاتف للزوج / الزوجة في محل الإقامة الحال ي"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nContact Phone numbers of Spouse at present place of residence",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\nISD Code / ISD",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("- :كود"),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:"\nOffice / ",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("- :المكتب"),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:"\nResidence / ",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("- :الإقامة"),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:"\nMobile / ",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("- :الجوال"),
                        style: ["left", {fontSize: 11}, "arabic"]
                      },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("أرقام الھاتف للزوج / الزوجة في البلد الأ م"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nContact Phone numbers of Spouse in Home Country",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:"\nISD Code / ISD",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:convertTextToRtl("- :كود"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nMobile / ",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:convertTextToRtl("- :الجوال"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    ],colSpan:8
                   },
                   {},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("28."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("الجنسیة / المواطنة :"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nNationality/ Citizenship/s :",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                   },
                   {
                    text:" ",colSpan:8
                   },
                   {},{},{},{},{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("29."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("رقم جواز السفر :"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl(")یرجى توفیر نسخة منھ("),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nPassport Number-",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n(Please provide copy)",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تاریخ الإنتھاء:"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nDate of Expiry –",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("دولة الإصدار :"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nCountry of issue:",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("رقم البطاقة التعریفیة / بطاقة الإقامة / بطاقة المواطنة:-"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl(")یرجى توفیر نسخة من البطاقة("),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nCPR/Resident/Citizenship Card No. –",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n(Please provide copy)",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تاریخ الإنتھاء:"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nDate of Expiry –",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("صدر بواسطة الإمارات:"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nIssued by Emirates:",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},{},{},
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
                    stack:[
                      {
                        text:convertTextToRtl(".30 یرجى تقدیم المبلغ الإجمالي للقسط السنوي الذي تدفعھ بموجب البولیصات الحالیة المأخوذة من الشركة: __________________."),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"30. Please provide total amount of premium per annum being paid by you under existing policies taken from the Company: __________________.",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                      {
                        text:convertTextToRtl(".31  تفاصیل الحساب المصرفي لمدفوعات المعاش التقاعدي مباشرة إلى حساب مصرفي: -"),
                        style: ["right", {fontSize: 11}, "arabic"]
                      },
                      {
                        text:"31. Bank Account Details for crediting pension payments directly to bank account: -",
                        style: ["left", {fontSize: 11}, "Times", ]
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
                        text:"Name of the Bank",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("اسم البنك"),
                        style: ["left", {fontSize: 9}, "arabic"]
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
                        text:"Bank Branch",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الفرع"),
                        style: ["left", {fontSize: 9}, "arabic"]
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
                        text:"IBAN",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("رقم الحساب المصرفي الدول ي"),
                        style: ["left", {fontSize: 9}, "arabic"]
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
                        text:"Bank Account Number",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("رقم الحساب المصرف ي"),
                        style: ["left", {fontSize: 9}, "arabic"]
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
            layout:{
              paddingTop: (i, node) => 0
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 3 of 11",
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

module.exports = Page_3