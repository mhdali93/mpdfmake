const Page_11 = ({
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
            margin:[0,20,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:"List of the documents attached with proposal Form: (Please tick mark the appropriate box)",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
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
            margin:[0,-10,0,0],
            layout: 'noBorders',
            table: {
              widths: [
                30,
                302,
                56,
                56,
                56
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"A. Proof of identity",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Proposer",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Nominee",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], 
                  },
                  {
                    text:[
                    {
                      text:"Appointee",
                      style: ["left", {fontSize: 10}, "Times","bold","purple"]
                    },
                  ],
                   },
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:" # Photocopy of CPR/Emirate ID/National ID Card (both sides)",
                        style: ["left", {fontSize: 11}, "Times","purple"]
                      },
                      {
                        text:"\n # Passport",
                        style: ["left", {fontSize: 12}, "Times","purple"]
                      },
                      {
                        text:"\n # Others",
                        style: ["left", {fontSize: 12}, "Times","purple"]
                      },
                    ], 
                  },
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"],
                        ["\n"],
                        ["\n"]
                      ]
                    }, 
                  },
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"],
                        ["\n"],
                        ["\n"]
                      ]
                    }, 
                  },
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"],
                        ["\n"],
                        ["\n"]
                      ]
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"B. Proofs of Permanent Address and Present Residential Address (please submit proof for permanent address and also for present residential address, if it is different from that of permanent of address)",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], colSpan:4
                  },{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Proposer",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Nominee",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], 
                  },
                  {
                    text:[
                    {
                      text:"Appointee",
                      style: ["left", {fontSize: 10}, "Times","bold","purple"]
                    },
                  ],
                   },
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:" # Passport with VISA & Permanent Address pages",
                        style: ["left", {fontSize: 11}, "Times","purple"]
                      },
                      {
                        text:"\n # Smart card printout of National ID Card",
                        style: ["left", {fontSize: 12}, "Times","purple"]
                      },
                      {
                        text:"\n # Latest Electricity Bill or Telephone Bill /Bank Statement",
                        style: ["left", {fontSize: 11}, "Times","purple"]
                      },
                      {
                        text:"\n # Valid driving license (Bahrain only)",
                        style: ["left", {fontSize: 12}, "Times","purple"]
                      },
                      {
                        text:"\n # Others(please specify)",
                        style: ["left", {fontSize: 12}, "Times","purple"]
                      },
                    ], 
                  },
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"],
                        ["\n"],
                        ["\n"],
                        ["\n"],
                        ["\n"]
                      ]
                    }, 
                  },
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"],
                        ["\n"],
                        ["\n"],
                        ["\n"],
                        ["\n"]
                      ]
                    }, 
                  },
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"],
                        ["\n"],
                        ["\n"],
                        ["\n"],
                        ["\n"]
                      ]
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"C. Source of income declared/submitied for payment of premium",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"]
                      },
                    ], colSpan:4
                  },{},{},{},
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"# For salaried income:",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"], decoration: 'underline'
                      },
                      {
                        text:"Copy of latest Salary Certificate/ Pay slip or Bank Account Statement",
                        style: ["left", {fontSize: 12}, "Times","purple"]
                      },
                    ], colSpan:3
                  },{},{},
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"]
                      ]
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"# For self-employed/Business Person: ",
                        style: ["left", {fontSize: 12}, "Times","bold","purple"], decoration: 'underline'
                      },
                      {
                        text:"Copy of Bank Statement for last 3 months & Audited financial statement of accounts for last 3 years /CR or Trade License copy",
                        style: ["left", {fontSize: 12}, "Times","purple"]
                      },
                    ], colSpan:3
                  },{},{},
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"]
                      ]
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"# Others (please specify)",
                        style: ["left", {fontSize: 12}, "Times","purple"],
                      },
                    ], colSpan:3
                  },{},{},
                  {
                    margin:[15,0,0,0],
                    table: {
                      widths: [
                        15
                      ],
                      body: [
                        ["\n"]
                      ]
                    }, 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"\nSignature of Proposer/life Assured:",
                        style: ["right", {fontSize: 12}, "Times","purple"],
                      },
                    ], colSpan:3
                  },{},{},
                  {
                    text:" ", 
                  },
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,10,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("للإستخدام من قبل شركة التأمین على الحیاة )العالمیة( فق ط"),
                        style: ["left", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"For LIC (International) Use Only",
                        style: ["left", {fontSize: 11}, "Times","bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("قائمة التحقق الخاصة بخدمة العملا ء"),
                        style: ["right", {fontSize: 9.25}, "arabic","bold" ]
                      },
                      {
                        text:"\nCRS Checklist",
                        style: ["left", {fontSize: 11}, "Times","bold"]
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
            margin:[0,-10,0,0],
            
            table: {
              widths: [
                205,20,20,205,20,20
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nYes",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("لا"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nNo",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("في حال الإجابة بنعم یرجى الإجابة على ما یلي"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nIf Yes, answer the following",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("نعم"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nYes",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("لا *"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nNo*",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:convertTextToRtl("ھل العمیل غیر مقیم؟"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"\nIs the Customer Non-Resident?",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"□",
                        style: ["center", {fontSize: 25}, "Times",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"□",
                        style: ["center", {fontSize: 25}, "Times",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("ھل تم الإعلان عن دولة الإقامة الضریبیة؟"),
                        style: ["right", {fontSize: 11}, "arabic", ]
                      },
                      {
                        text:"\nCountry of Tax Resident declared?",
                        style: ["left", {fontSize: 11}, "Times",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"□",
                        style: ["center", {fontSize: 25}, "Times",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"□",
                        style: ["center", {fontSize: 25}, "Times",]
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
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl('* في حال كانت الإجابة "لا" في أي من الأسئلة، یرجى التواصل مع العمیل لتقدیم المعلومات المطلوبة فیما یتعلق بنظام تسجیل العملاء .'),
                        style: ["right", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\n* If the any of the answer is ‘No’, please contact the customer to provide the required information in respect of CRS",
                        style: ["left", {fontSize: 11}, "Times"]
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
                90,110,110,90,90
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], border: [false, false, false, true],
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ],  border: [false, false, false, true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("الإس م"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nName",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ],  border: [false, false, false, true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("التوقی ع"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nSignature",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], border: [false, false, false, true], 
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("التاری خ"),
                        style: ["center", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nDate",
                        style: ["center", {fontSize: 11}, "Times","bold",]
                      },
                    ], border: [false, false, false, true], 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times","bold",]
                      },
                      {
                        text:convertTextToRtl("إن بي الضام ن"),
                        style: ["right", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nNB Underwriting",
                        style: ["left", {fontSize: 11}, "Times","bold",]
                      },
                    ], rowSpan:2,
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("معد من قب ل"),
                        style: ["right", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nSignature",
                        style: ["left", {fontSize: 11}, "Times","bold",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                ],
                [
                  {},
                  {
                    text:[
                      {
                        text:convertTextToRtl("الضام ن"),
                        style: ["right", {fontSize: 11}, "arabic","bold" ]
                      },
                      {
                        text:"\nUnderwriter",
                        style: ["left", {fontSize: 11}, "Times","bold",]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
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
            margin:[0,50,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 11 of 11",
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

module.exports = Page_11