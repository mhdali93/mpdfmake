const Page_2 = ({
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
            layout:{
              paddingTop: (i, node) => 0,
              paddingBottom: (i, node) => 0
            },
            border: [false, false, false, false],
            margin:[0,-2,0,0],
            table: {
              widths: [
                19,
                103,
                23,
                23,
                23,
                23,
                125,
                85,
                50
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("6."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("أرقام الھاتف في مكان الإقامة الحال ي"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nContact Phone numbers at present place of residence",
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
                    ],colSpan:5
                   },
                   {},{},{},{},
                   {text:[
                    {
                      text:convertTextToRtl("أرقام الھاتف في البلد الأ م"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nContact Phone numbers in Home Country",
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
                      text:"\nResidence / ",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:convertTextToRtl("- :الإقامة"),
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
                    ],colSpan:3
                   },
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("7."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("البرید الإلكتروني: -"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nEmail-ids: -",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("8."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("الحالة الاجتماعیة: - أعزب / متزوج"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nMarital Status:- Single / Married",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("9."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("إسم الأب بالكامل )اللقب أولاً(: -"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nFather’s full Name (Surname first): -",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("10."),
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
                        text:"\nNationality/ Citizenship/s:",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:5
                   },
                   {},{},{},{},
                   {text:" ",colSpan:3
                   },
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("11."),
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
                        text:"\nPassport Number-",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
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
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("دولة الإصدار :"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nCountry of issue:",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:5
                   },
                   {},{},{},{},
                   {text:[
                    {
                      text:convertTextToRtl("رقم البطاقة التعریفیة / بطاقة الإقامة / بطاقة المواطنة:-"),
                      style: ["right", {fontSize: 10}, "arabic"]
                    },
                    {
                      text:"\nCPR/Resident/Citizenship Card No. –",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:convertTextToRtl("تاریخ الإنتھاء:"),
                      style: ["right", {fontSize: 10}, "arabic"]
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
                      text:convertTextToRtl("صدر بواسطة الإمارات"),
                      style: ["right", {fontSize: 10}, "arabic"]
                    },
                    {
                      text:"\nIssued by Emirates :",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    ],colSpan:3
                   },
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("12."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("الدخل السنوي من كافة المصادر: -"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nAnnual Income from all Sources: -",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nUSD/ BD / AED/ KD/ OR/ QR",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:5
                   },
                   {},{},{},{},
                   {text:[
                    {
                      text:convertTextToRtl("مصدر / مصادر الدخل لدفع قسط التأمین- :"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:convertTextToRtl("دخل الراتب / دخل الأعمال التجاریة / مصادر أخر ى"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nSource/s of Income for payment of premium for this policy (please specify and provide documentary proof)",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:"\nSalary Income / Business Income /",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    {
                      text:"\nOther sources",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    ],colSpan:3
                   },
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("13."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("المؤھلات الدراسیة:-"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nEducational Qualifications: -",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:5
                   },
                   {},{},{},{},
                   {text:[
                    {
                      text:convertTextToRtl("إسم وعنوان صاحب العمل:-"),
                      style: ["right", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nName and address of Employer: -",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    ],colSpan:3,rowSpan:2
                   },
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("14."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("الوظیفة / المھنة:"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nOccupation/Profession: -",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],colSpan:5
                   },
                   {},{},{},{},{},
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("15."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("نظام القسط السنوي:"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nMode of Annuity Instalment:",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                   },
                   { text:[
                    {
                      text:convertTextToRtl("سنوي"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:"\nYly",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                  ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("نصف"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl(" سنوي"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"Hly",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("ربع"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:convertTextToRtl("سنوي"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nQly",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl("شھري"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["left", {fontSize: 9}, "Times"]
                    },
                    {
                      text:"\nMly",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    ],
                   },
                   {text:[
                    {
                      text:convertTextToRtl(":سعر الشراء بالدولار الأمریكي"),
                      style: ["left", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\nPurchase Price in USD:",
                      style: ["left", {fontSize: 10}, "Times"]
                    },
                    ],
                   },
                   {text:" ",colSpan:2
                   },
                   {},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("16."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("فترة التأجیل"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nDeferment Period",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:5
                   },
                   {},{},{},{},
                   {text:[
                    {
                      text:convertTextToRtl("سنة:-"),
                      style: ["center", {fontSize: 9}, "arabic"]
                    },
                    {
                      text:"\n",
                      style: ["center", {fontSize: 9}, "Times"]
                    },
                    {
                      text:"          Years",
                      style: ["center", {fontSize: 10}, "Times"]
                    },
                    ],border:[true,true,false,true]
                   },
                   {text:" ",colSpan:2,border:[false,true,true,true]},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("17."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],rowSpan:3,
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("یرجى تحدید أي من خیارات خطط المعاش التالیة المتاحة وضع علامة ( ) أمام الخیار المحدد :"),
                        style: ["right", {fontSize: 9}, "arabic", "bold"]
                      },
                      {
                        text:"\nPlease select any of the following available Pension Options and tick ( ) against the option selected:",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                    ],colSpan:8,
                   },
                   {},{},{},{},{},
                   {},{},
                ],
                [
                  {},
                   {
                    text:[
                      {
                        text:convertTextToRtl(" 1"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الخیار"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                      {
                        text:"            :                                                                      ",
                        style: ["left", {fontSize: 9}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("تأجیل المعاش للحیاة الواحدة مع إرجاع سعر الشراء"),
                        style: ["left", {fontSize: 9}, "arabic", ]
                      },
                      {
                        text:"\nOption 1      :    ",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                      {
                        text:"Deferred Annuity for Single Life with return of Purchase Price",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:7,
                   },
                   {},{},{},{},{},{},
                   {text:" "},
                ],
                [
                  {},
                   {
                    text:[
                      {
                        text:convertTextToRtl(" 2"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الخیار"),
                        style: ["left", {fontSize: 9}, "arabic", "bold"]
                      },
                      {
                        text:"            :                                                                    ",
                        style: ["left", {fontSize: 9}, "Times", "bold"]
                      },
                      {
                        text:convertTextToRtl("تأجیل المعاش للحیاة المشتركة مع إرجاع سعر الشراء"),
                        style: ["left", {fontSize: 9}, "arabic", ]
                      },
                      {
                        text:"\nOption 2      :    ",
                        style: ["left", {fontSize: 10}, "Times", "bold"]
                      },
                      {
                        text:"Deferred Annuity for Joint Life with return of Purchase Price",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:7,
                   },
                   {},{},{},{},{},{},
                   {text:" "},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("18."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("مصدر الأموال لدفع الأقساط المذكورة أعلاه الخاصة بخطة التقاعد"),
                        style: ["right", {fontSize: 10}, "arabic", "red"]
                      },
                      {
                        text:"\nSource of Funds for paying above premium for pension plan:",
                        style: ["left", {fontSize: 11}, "Times", "red"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("19."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"□      ",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"□      ؟",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("ھل تحتفظ بأي سلطة حكومیة فخریة أو تنظیمیة أو تشریعیة"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\nAre you holding any honorary or regulatory or legislative government authority?        □ Yes □ No",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},
                   {},{},
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("20."),
                        style: ["left", {fontSize: 11}, "times", "bold"]
                      },
                    ],
                   },
                   {
                    text:[
                      {
                        text:convertTextToRtl("ھل أي من أقربائك المقربین - الوالدین أو الزوج / الزوجة أو الأطفال أو الإخوة أو الأخوات - یحتفظون بأي سلطة أو منصب حكومي شرفي"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("لا"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:" □ ",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:" □ ؟",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("أو تنظیمي أو تشریعي"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                    ],colSpan:8
                   },
                   {},{},{},{},{},
                   {},{},
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
                        text:"Page 2 of 11",
                        style: ["center", {fontSize: 11}, "Times","bold"]
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

module.exports = Page_2


