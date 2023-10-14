const Page_2 = ({
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
            margin:[0,-5,0,0],
            table: {
              widths: [
                10, 55,130,55,55,130,55,
              ],
              body: [
                [
                  {
                    text:"5.",rowSpan:5
                  },
                  {
                    text:[
                      { text:convertTextToRtl("أرقام الهاتف في مكان الإقامة الحالي"),
                      style: ["center" ]
                      },
                      {
                        text:"\nContact numbers at present place of residence ",
                        style: ["center" ]
                      },
                    ],colSpan:3
                  },{},{},
                  {
                    text:[
                      { text:convertTextToRtl("أرقام الهاتف في البلد الأم"),
                      style: ["center" ]
                      },
                      {
                        text:"\nContact numbers in Home Country ",
                        style: ["center" ]
                      },
                    ],colSpan:3
                  },{},{},
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"ISD Code",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("کرد"),
                      style: ["right" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"ISD Code",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("کرد"),
                      style: ["right" ]
                      },
                    ],
                  },
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Mobile",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("هاتف الجوال"),
                      style: ["right" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Mobile",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("هاتف الجوال"),
                      style: ["right" ]
                      },
                    ],
                  },
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Office",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("المكتب"),
                      style: ["right" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Office",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("المكتب"),
                      style: ["right" ]
                      },
                    ],
                  },
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:"Residence",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("الإقامة"),
                      style: ["right" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Residence",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
                      },
                    ],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("الإقامة"),
                      style: ["right" ]
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
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,70,446
              ],
              body: [
                [
                  {
                    text:"6.",
                  },
                  {
                    text:[
                      { text:convertTextToRtl("البريد الإلكتروني"),
                      style: ["right" ]
                      },
                      {
                        text:"\nEmail ID's ",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
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
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,70,446
              ],
              body: [
                [
                  {
                    text:"7.",
                  },
                  {
                    text:[
                      {
                        text:"Nationality/ Citizenship/s: \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t",
                        style: ["left" ]
                      },
                      { text:convertTextToRtl("الجنسية / المواطنة: يُرجى ذكر أسماء الدول التي تحمل جنسيتها"),
                      style: ["right" ]
                      },
                      {
                        text:"\nKindly mention names of Countries of which you are holding citizenship",
                        style: ["left" ]
                      },
                      {
                        text:"\n\n\n\n",
                        style: ["left" ]
                      },
                    ],colSpan:2
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
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
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,169,169,169,
              ],
              body: [
                [
                  {
                    text:"8.",
                  },
                  {
                    text:[
                      {
                        text:"Passport Number \t\t  ",
                      },
                      { text:convertTextToRtl("رقم جواز السفر") },
                      {
                        text:"\n\n",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Date of Expiry   \t\t\t\t\t",
                      },
                      { text:convertTextToRtl("تاريخ الانتهاء") },
                      {
                        text:"\n\n",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Country of Issue \t\t\t\t   ",
                      },
                      { text:convertTextToRtl("دولة الإصدار") },
                      {
                        text:"\n\n\n",
                      },
                    ],
                  },
                ],
                [
                  {
                    text:"9.",
                  },
                  {
                    text:[
                      {
                        text:"CPR/Emirate ID/Citizenship Card No",
                      },
                      { text:convertTextToRtl("رقم البطاقة التعريفية / بطاقة الإقامة بطاقة المواطنة "
                      ) },
                      {
                        text:"\n\n\n",
                      },
                    ],colSpan:2
                  },{},
                  {
                    text:[
                      {
                        text:"Date of Expiry   \t\t\t\t\t",
                      },
                      { text:convertTextToRtl("تاريخ الانتهاء") },
                      {
                        text:"\n\n",
                      },
                    ],
                  },
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,280,236
              ],
              body: [
                [
                  {
                    text:"10.",
                  },
                  {
                    text:[
                      {
                        text:"VISA issued by Country/Emirate \t\t",
                      },
                      { text:convertTextToRtl("تأشيرة الإقامة / مصدرة بواسطة  "
                      ) },
                      {
                        text:"\n\n\n",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"Educational Qualifications    \t\t\t\t",
                      },
                      { text:convertTextToRtl("المؤهلات الدراسية") },
                      {
                        text:"\n\n",
                      },
                    ],
                  },
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,258,258
              ],
              body: [
                [
                  {
                    text:"11.",rowSpan:3
                  },
                  {
                    text:[
                      {
                        text:"a. Occupation/Profession \t\t\t\t\t\t\t\t  ",
                      },
                      { text:convertTextToRtl("الوظيفة/ المهنة"
                      ) },
                      {
                        text:"\n\n\n",
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"b. Nature of Duties     \t\t\t\t\t\t\t\t\t\t",
                      },
                      { text:convertTextToRtl("طبيعة الالتزامات") },
                      {
                        text:"\n\n",
                      },
                    ],
                  },
                ],
                [
                  {
                    text:" ",
                  },
                  {
                    text:[
                      {
                        text:"c. Does your occupation require you to work at heights over 10 metre, work underground, offshore, a remote locations, handling or transporting hazardous materials or any other hazardous duties not mentioned here?",
                      },
                    ],border:[true,true,false,false],
                  },
                  {
                    text:[
                      { text:convertTextToRtl("هل تتطلب مهنتك العمل على ارتفاعات تزيد عن 10 أمتار أو العمل"),
                      style: ["right"],
                      },
                      {
                        text:"\n",
                      },
                      { text:convertTextToRtl("تحت الأرض أو في الخارج أو في مواقع بعيدة أو مناولة أو نقل المواد"),
                      style: ["right"],
                      },
                      {
                        text:"\n",
                      },
                      { text:convertTextToRtl("الخطرة أو أي واجبات خطرة أخرى غير مذكورة هنا؟"),
                      style: ["right"],
                      },
                      {
                        text:"\n",
                      },
                    ],border:[false,true,true,false],
                  },
                ],
                [
                  {
                    text:" ",
                  },
                  {
                    border: [false, false, false, true],
                    margin:[0,5,0,30],
                    layout: 'noBorders',
                    table: {
                      widths: [
                        20,20,20,20,"*"
                      ],
                      body: [
                        [
                          {
                            text:"Yes",
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"/ No",
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"If yes, please provide details.",
                          },
                        ],
                      ],
                    }
                  },
                  {
                    text:[
                      { text:convertTextToRtl(" "),
                      style: ["right"],
                      },
                      {
                        text:"\n",
                      },
                    ],border:[false,false,true,true],
                  },
                ],
                [
                  {
                    text:"12.",
                  },
                  {
                    text:[
                      { text:convertTextToRtl("الدخل السنوي من كافة المصادر") },
                      {
                        text:"\nAnnual Income from all Source: USD / BD / AED / KD / OR / OR",
                      },
                    ],colSpan:2
                  },
                  {},
                ],
                [
                  {
                    text:"13.",
                  },
                  {
                    text:[
                      { text:convertTextToRtl("اسم وعنوان صاحب العمل") },
                      {
                        text:"\na. Name and address of Employer",
                      },
                    ],
                  },
                  {
                    border: [false, false, true, true],
                    margin:[0,5,0,0],
                    layout: 'noBorders',
                    table: {
                      widths: [
                        20,"*",20,"*"
                      ],
                      body: [
                        [
                          {
                            text:"b. Sources of Income for payment of premium:",colSpan:4
                          },{},{},{},
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"Salary Income",
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"Business Income",
                          },
                        ],
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 15,
                            alignment: 'center',
                            
                          },
                          {
                            text:"Other Sources",
                          },
                          {
                            text:"\n\n ",
                          },
                          {
                            text:" ",
                          },
                        ],
                        [
                          {
                            text:[
                              {
                                text:"______________________________________________________",
                              },
                              {
                                text:"\n(Please specify the source of funds for payment of premium and submit self-attested documentary proof)",
                              },
                              {
                                text:"\n",
                              },
                              { text:convertTextToRtl(" جميع مصادر الدخل دخل الراتب / دخل الأعمال التجارية /"),
                              style:["right",],
                              },
                              {
                                text:"\n",
                              },
                              { text:convertTextToRtl("مصادر أخرى )يرجى تحديد مصدر الأموال لدفع قسط التأمين"),
                              style:["right"],
                              },
                              {
                                text:"\n",
                              },
                              { text:convertTextToRtl("وتقديم دليل موثق ذاتيا لمصدر الأموال("),
                              style:["right"],
                              },
                            ],colSpan:4
                          },{},{},{},
                        ],
                      ],
                    }
                  },
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,-5,0,0],
            table: {
              widths: [
                10,130,386
              ],
              body: [
                [
                  {
                    text:"14.",
                  },
                  {
                    text:[
                      { text:convertTextToRtl("هدف التأمين"),
                      style: ["left" ]
                      },
                      {
                        text:"\nObject/purpose of Insurance",
                        style: ["left" ]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:" ",
                        style: ["center" ]
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
                    text:"Page 2",
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

module.exports = Page_2