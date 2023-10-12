const Page_18 = ({
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
            margin:[0,-10,0,0],
            table: {
              widths: [
                20,
                180,
                180,
                150
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"16.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Does the Proposer/Life to be Assured have any deformity,impaired sight?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], border:[true,true,false,true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل يعاني مقدم الطلب / المؤمن على حياته من أية"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("عاهات أو ضعف بالنظر أو السمع أو بتر أي من أطرافه ؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ], border:[false,true,true,true],
                  },
                  {
                    text:"" 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"17.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Do you have knowledge of any proposal on his/her life was deferred, declined dropped or accepted at terms other than those proposed?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], border:[true,true,false,true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل لديك علم عن مقدم الطلب إذا ما تم تأجيل أو"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("إلغاء أيا من طلبات التأمين أو قبولها بشروط غير"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تلك المطلوبة؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ], border:[false,true,true,true],
                  },
                  {
                    text:"" 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"18.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Do you have knowledge of any unfavorable information about the health, habits, character, financial social position occupation, hospitalization of the Proposer/ Life to be Assured? If YES, give details",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], border:[true,true,false,true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل لديك أية معلومات سلبية تخص صحة مقدم"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الطلب أو عاداته أو شخصيته أو وضعه"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("المالي / الاجتماعي أو وظيفته أو تاريخ دخوله إلى"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("المستشفيات مقدم الطلب / المؤمن على حياته؟ إذا"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("كانت الإجابة بنعم، يرجى ذكر التفاصيل."),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ], border:[false,true,true,true],
                  },
                  {
                    text:"" 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"19.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Have you explained fully the terms and conditions of the plan to the proposer?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], border:[true,true,false,true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل أوضحت جميع شروط وأحكام هذه الخطة "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("لمقدم الطلب؟"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ], border:[false,true,true,true],
                  },
                  {
                    text:"" 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"20.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], 
                  },
                  {
                    text:[
                      {
                        text:"Do you recommend the acceptance of the proposal?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], border:[true,true,false,true],
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("هل توصي بقبول مقدم الطلب ؟ "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ], border:[false,true,true,true],
                  },
                  {
                    text:"" 
                  },
                ],
                [
                  {
                    text:[
                      {
                        text:"21.",
                        style: ["center", {fontSize: 11}, "Times", "bold"]
                      },
                    ], rowSpan:2
                  },
                  {
                    text:[
                      {
                        text:"Kindly mention the height and weight of the Life to be assured",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], border:[true,true,false,true], rowSpan:2
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("يرجى ذكر طول ووزن الشخص المعني"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ], border:[false,true,true,true],rowSpan:2,
                  },
                  {
                    text:[
                      {
                        text:convertTextToRtl("سم                                                           الطول"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nHeight                                   Cms",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ], 
                  },
                ],
                [
                  {},{},{},
                  {
                    text:[
                      {
                        text:convertTextToRtl("كجم                                                           الوزن"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:"\nWeight                                   Kgs",
                        style: ["left", {fontSize: 10}, "Times"]
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
            margine:[0,10,0,0],
            table: {
              widths: [530],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("أقر بموجب هذا أنه قد تم تعبئة بيانات هذا الطلب والتوقيع عليه من قبل مقدمه بعد إجراء ما لزم من مناقشات تتعلق بشروطه وأحكامه وتشريعات"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("مكافحة غسيل الأموال وقواعد معرفة عميلك ومتطلبات قانون الامتثال الضريبي الأمريكي، وأقر بمعرفتي بشخصية العميل وأنه لا يشارك في أي نشاط"),
                        style: ["right", {fontSize: 10}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("يمكن اعتباره غير قانوني بموجب تشريعات مكافحة غسيل الأموال وأن الأموال التي أودعها لسداد أقساط هذا التأمين هي من عائدات معاملات قانونية"),
                        style: ["right", {fontSize: 10}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("ومشروعة وأن البيانات الواردة أعلاه صحيحة إلى حد علمي ومعرفتي وأنني قد تحققت شخصيًا من الحالة البدنية للشخص المؤمن عليه، وكذلك أقر"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("بصحة جميع ما ورد أعلاه."),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:"\nI hereby confirm that proposal form is filled and signed by the proposer after discussions on relevant aspects concerning the proposal, anti-money laundering legislations, know your customer regulations (KYC) and FATCA regulations. I am satisfied with the client's identity and he is not engaged in any activity considered as illegal under anti-money laundering legislations and regulations and the funds deposited as proposal deposit towards the life insurance proposal are the proceeds of legal and legitimate transactions.",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n\nI hereby declare that the forgoing statements are true and correct to the best of my knowledge and belief. I have also personally verified the particulars and checked the physical measurements of the life to be assured mentioned in the personal statements and I confirm the same to be correct.",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n\n\nDate:  _____________________________________",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("التاريخ"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:"\nPlace:  _____________________________________",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("المكان"),
                        style: ["right", {fontSize: 10.5}, "arabic", ]
                      },
                      {
                        text:"\n",
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
            margin:[0,5,0,0],
            layout: 'noBorders',
            table: {
              widths: [
                265,265
              ],
              body: [
                [
                  {
                    text:[
                      {
                        text:"\nMember of: TOT/COT/MDRT/Other",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n\n_____________________________",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\nNo of years' experience",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("وات الخبرة "),
                        style: ["right", {fontSize: 10}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
                  {
                    text:[
                      {
                        text:"_________________________________________________",
                        style: ["right", {fontSize: 10}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("توقيع الإستشاري"),
                        style: ["right", {fontSize: 10}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                      {
                        text:convertTextToRtl("المفوض الرسمي من البنك / سمسار / المدير المقيم"),
                        style: ["right", {fontSize: 10}, "arabic", ]
                      },
                      {
                        text:"\nSignature of the Consultant/",
                        style: ["right", {fontSize: 10}, "Times", ]
                      },
                      {
                        text:"\nAuthorized official of Bank / Broker",
                        style: ["right", {fontSize: 10}, "Times", ]
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
            margine:[0,10,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:"\n\n",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("وقيع المدير المقيم"),
                        style: ["center", {fontSize: 12}, "arabic","bold" ]
                      },
                      {
                        text:"\nSignature of Resident Manager",
                        style: ["center", {fontSize: 13}, "Times","bold"]
                      },
                      {
                        text:"\n",
                        style: ["center", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("يتعين المصادقة على التوقيع في حالة كانت أعمال بنكية"),
                        style: ["center", {fontSize: 12}, "arabic",]
                      },
                      {
                        text:"\nCountersigning required in case of business from banks",
                        style: ["center", {fontSize: 11}, "Times"]
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
            margin:[0,0,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 18",
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

module.exports = Page_18