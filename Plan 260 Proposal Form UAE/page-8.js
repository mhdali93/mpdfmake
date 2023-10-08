const Page_8 = ({
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
            margin:[10,5,50,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:"7. I authorize the company to send the correspondence through e-mail/ SMS to my email ids or mobile numbers provided in this form and any subsequent changes in e-mail-ids or mobile numbers will be notified to the company.",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                    ]
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
                                text:convertTextToRtl("وأقر أیضا أنني في الوقت الحالي لست أحد مواطني الولایات المتحدة الأمریكیة أو مقیم في الولایات المتحدة الأمریكیة. وفي حال حصولي على جنسیة"),
                                style: ["right", {fontSize: 10}, "arabic", ]
                              },
                              {
                                text:" .8",
                                style: ["right", {fontSize: 11.5}, "Times",]
                              },
                              {
                                text:"\n",
                                style: ["right", {fontSize: 9}, "Times",]
                              },
                              {
                                text:convertTextToRtl("الولایات المتحدة الأمریكیة أو أصبحت مقیماً في الولایات المتحدة الأمریكیة، سأبلغ المكتب على الفور وسوف ألتزم بأي متطلبات بموجب لوائح الإمتثال"),
                                style: ["right", {fontSize: 10}, "arabic", ]
                              },
                              {
                                text:" .1",
                                style: ["right", {fontSize: 10.5}, "Times","header"]
                              },
                              {
                                text:"\n",
                                style: ["right", {fontSize: 9}, "Times",]
                              },
                              {
                                text:convertTextToRtl("الضریبي الأمریكي، إن وجدت * ."),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:" .1",
                                style: ["right", {fontSize: 10.5}, "Times","header"]
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
                    text:[
                      {
                        text:"8. I also declare that presently I am not citizen of USA or the resident of USA. In case I take citizenship of USA or become resident of USA I will inform the office immediately and will comply with any requirement under FATCA regulations, if applicable.*",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                    ]
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
                                text:convertTextToRtl("لقد قمت بشرح إستحقاق المعاش / المعاش السنوي والخیار الذي تم إختیاره لزوجتي / زوجي والمستفید حسب مقتضى الحال ."),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:" .9",
                                style: ["right", {fontSize: 11.5}, "Times",]
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
                    text:[
                      {
                        text:"9. I have explained the pension/annuity benefit and option selected to my spouse and beneficiary as applicable.",
                        style: ["justify", {fontSize: 12}, "Times",]
                      },
                    ]
                  }
                ],
                [
                  {
                    border: [false, false, false, false],
                    
                    table: {
                      widths: [530],
                      body: [
                        [
                          {
                            border: [false, false, false, false],
                            text:[
                              {
                                text:convertTextToRtl("التاریخ: -"),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 9}, "Times",]
                              },
                              {
                                text:convertTextToRtl("المكان: -"),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:"\nDate: -",
                                style: ["left", {fontSize: 11}, "Times",]
                              },
                              {
                                text:"\nPlace:-",
                                style: ["left", {fontSize: 11}, "Times",]
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
                                text:"________________________________",
                                style: ["right", {fontSize: 10}, "Times"]
                              },
                              {
                                text:convertTextToRtl("توقیع مقدم الطلب:"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"\nSignature of Witness _____________________________",
                                style: ["left", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                          {
                            text:[
                              {
                                text:"________________________________",
                                style: ["right", {fontSize: 10}, "Times"]
                              },
                              {
                                text:convertTextToRtl("توقیع الشاھد"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"\nSignature of Proposer _____________________________",
                                style: ["left", {fontSize: 10}, "Times"]
                              },
                          ],
                         },
                        ],
                        [
                          {
                            text:[
                              {
                                text:"________________________________",
                                style: ["right", {fontSize: 10}, "Times"]
                              },
                              {
                                text:convertTextToRtl("إسم مقدم الطلب:"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                            ],
                          },
                          {
                            text:[
                              {
                                text:"_________________________________________",
                                style: ["right", {fontSize: 10}, "Times"]
                              },
                              {
                                text:convertTextToRtl("إسم الشاھد:"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 10}, "Times"]
                              },
                              {
                                text:"_________________________________________",
                                style: ["right", {fontSize: 10}, "Times"]
                              },
                              {
                                text:convertTextToRtl("عنوان الشاھد"),
                                style: ["right", {fontSize: 9}, "arabic"]
                              },
                          ],
                         },
                        ],
                        [
                          {
                            text:[
                              {
                                text:"Name of Witness: _______________________________",
                                style: ["left", {fontSize: 10}, "Times"]
                              },
                              {
                                text:"\nAddress of Witness: _____________________________",
                                style: ["left", {fontSize: 10}, "Times"]
                              },
                            ],
                          },
                          {
                            text:[
                              {
                                text:"Name of Proposer- _____________________________",
                                style: ["left", {fontSize: 10}, "Times"]
                              },
                              {
                                text:"\n_______________________________________________",
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
                                text:convertTextToRtl("نموذج من عینات توقیعات مقدم الطلب :"),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:"\nSpecimen Signatures of proposer:",
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
                    margin:[0,5,0,0],
                    table: {
                      widths: [
                        265,265
                      ],
                      body: [
                        [
                          {
                            text:[
                              {
                                text:"\n",
                                style: ["right", {fontSize: 10}, "Times","header"]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 10}, "Times", "header"]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 10}, "Times", "header"]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 10}, "Times", "header"]
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
                    margine:[0,10,0,0],
                    table: {
                      widths: [530],
                      body: [
                        [
                          {
                            border: [false, false, false, false],
                            text:[
                              {
                                text:convertTextToRtl("إذا كان توقیع مقدم الطلب و / أو الإجابة عن الأسئلة المتضمنة ھنا بلغة غیر تلك المحرر بھا ھذه الإستمارة، فإنھ یتعین علیھ / علیھا الإقرار بخط یدھم فوق التوقیع"),
                                style: ["right", {fontSize: 9.5}, "arabic", ]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 11}, "Times"]
                              },
                              {
                                text:convertTextToRtl("بأنھ قد تم شرح جمیع الأسئلة وأن الإجابات بعد فھمھا فھماً صحیحاً ."),
                                style: ["right", {fontSize: 9.5}, "arabic", ]
                              },
                              {
                                text:"\nIf answer to the questions and/or signature of the proposer is in language other than from the proposal, he should declare in his own handwriting above his signature that all questions were explained to him and that his replies are given after fully and properly understanding the same.",
                                style: ["left", {fontSize: 11}, "Times"]
                              },
                              {
                                text:"\n______________________________________________________________________________________",
                                style: ["left", {fontSize: 11}, "Times","bold"]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 11}, "Times"]
                              },
                              {
                                text:convertTextToRtl("طاب تفویض لتسلیم مستندات وثیقة التأمی ن ."),
                                style: ["left", {fontSize: 10}, "arabic", "bold"]
                              },
                              {
                                text:"\nAUTHORISATION LETTER FOR HANDING OVER POLICY DOCUMENT",
                                style: ["center", {fontSize: 13}, "Times","bold"]
                              },
                              {
                                text:"\ngap",
                                style: ["left", {fontSize: 11}, "Times","header"]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 11}, "Times"]
                              },
                              {
                                text:convertTextToRtl(")إسم الإستشاري( لإستلام مستندات وثیقة / وثائق التأمین"),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:"__________________________________________________",
                                style: ["right", {fontSize: 10}, "Times"]
                              },
                              {
                                text:convertTextToRtl("أفوض بموجب ھذا"),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:"\n",
                                style: ["left", {fontSize: 11}, "Times"]
                              },
                              {
                                text:convertTextToRtl("نیابة عني عقب الموافقة على التأمین ضد المخاطر تحت ھذا الطلب ."),
                                style: ["right", {fontSize: 10.5}, "arabic", ]
                              },
                              {
                                text:"\nI hereby authorize ___________________________________________________________ (Name of consultant) to collect policy document/s on my behalf subsequent to the acceptance of risk under the subject proposal.",
                                style: ["left", {fontSize: 11}, "Times"]
                              },
                              {
                                text:"\ngap",
                                style: ["left", {fontSize: 11}, "Times","header"]
                              },
                              {
                                text:"\ngap",
                                style: ["left", {fontSize: 11}, "Times","header"]
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
                    table: {
                      widths: [550],
                      body: [
                        [
                          {
                            border: [false, false, false, false],
                            text:"Page 8 of 11",
                            style: ["center", {fontSize: 10}, "Times", "bold"]
                          }
                        ]
                      ],
                    },
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

module.exports = Page_8