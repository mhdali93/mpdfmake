const Page_10 = ({
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
                350,
                60,
                100
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
                        text:"Do you recommend the acceptance of the proposal?",
                        style: ["left", {fontSize: 10}, "Times"]
                      },
                    ],colSpan:2 
                  },{},
                  {
                    layout: 'noBorders',
                    margin:[-5,-1,0,-5],
                    table:{
                      widths:['*','*','*','*'],
                      body:[
                        [
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/check.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"Yes",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                          {
                            border:[true,true,false,true],
                            image : "./assets/images/uncheck.png",
                            width: 8,
                            alignment: 'center',
                          },
                          {
                            text:"no",
                            style: ["left", {fontSize: 8}, "Times"]
                          },
                        ],
                      ],
                    }, 
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
                        text:convertTextToRtl("أؤكد بموجب ذلك أن إستمارة العرض قد تم تعبئتھا وتوقیعھا من قبل مقدم الطلب في وجودي بعد مناقشات حول الجوانب ذات الصلة فیما یتعلق بھ بما في ذلك لوائح"),
                        style: ["right", {fontSize: 9.25}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("مكافحة غسل الأموال وتمویل الإرھاب وقانون مكافحة غسل الأموال وتمویل الإرھاب. أنا راضٍ عن شحصیة العمیل وأؤكد عدم إشتراكھ في أي نشاط یعتبر غیر "),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("قانوني بموجب تشریعات ولوائح مكافحة غسل الأموال والأموال المودعة كودیعة للطلب في خطة التقاعد الآجل المستقبلیة الآمنة ھي عائدات المعاملات القانونیة"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("والمشروعة ."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("وعلاوة على ذلك، أؤكد أیضاً على أن العمیل ھو عمیل بنكي، وقد تم إجراء العنایة الواجبة اللازمة من قبل البنك فیما یتعلق بلوائح مكافحة غسل الأموال وتمویل"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الإرھاب، قوانین الإمتثال الضریبي الأمریكیة، نموذج التصدیق الذاتي للعملاء."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("أعلن بموجب ھذا أن البیانات والمعلومات الواردة في الطلب أعلاه صحیحة وصادقة إلى حد علمي ومعرفتي، ولقد تحققت شخصیاً أیضاً من ال تفاصیل وأؤكد على"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("صحتھا."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("تم التأكد من تفاصیل نموذج التصدیق الذاتي للعملاء المقدم من قبل العمیل والتحقق منھا من قبلي ."),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\ngap",
                        style: ["left", {fontSize: 11}, "Times","header"]
                      },
                      {
                        text:"\nI hereby confirm that proposal form is filled and signed by the proposer in my presence after discussions on relevant aspects concerning the proposal including AML/CFT, FATCA and CRS regulations. I am satisfied with the client’s identity and he is not engaged in any activity considered as illegal under anti-money laundering legislations and regulations and the funds deposited as proposal deposit towards the Immediate Future Secure Pension Plan proposal are the proceeds of legal and legitimate transactions.",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\nFurther it is also confirmed that the Client being a bank-customer, necessary due diligence has been conducted by the bank with regard to AML/CFT, FATCA, CRS.",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\nI hereby declare that the forgoing statements and information provided in above questionnaire are true and correct to the best of my knowledge and belief. I have also personally verified the particulars and I confirm the same to be correct.",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\nThe CRS details provided by the Customer are checked and verified by me.",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("التاریخ:"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\nDate:",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("المكان:"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\nPlace:",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n______________________________________________",
                        style: ["right", {fontSize: 11}, "Times","bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("أخر ى"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:" / MDRT/ COT/ TOT/ ",
                        style: ["right", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("إسم وتوقیع الموظف المعتمد للبنك أو الإستشاري"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\n______________________________________________________________________",
                        style: ["left", {fontSize: 11}, "Times","bold"]
                      },
                      {
                        text:"\nName and Signature of Authorized official of Bank Or Consultant MDRT/ COT/ TOT/ Other",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\ngap",
                        style: ["left", {fontSize: 11}, "Times","header"]
                      },
                      {
                        text:"\n___________",
                        style: ["right", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("سنوات البقاء:"),
                        style: ["right", {fontSize: 9.5}, "arabic", ]
                      },
                      {
                        text:"\nNo of years standing: ______",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("توقیع المدیر المقیم"),
                        style: ["right", {fontSize: 9.5}, "arabic","bold" ]
                      },
                      {
                        text:"\nSignature of Resident Manager",
                        style: ["left", {fontSize: 11}, "Times","bold"]
                      },
                      {
                        text:"\n",
                        style: ["left", {fontSize: 11}, "Times"]
                      },
                      {
                        text:convertTextToRtl("یتعین المصادقة على التوقیع في حالة كانت أعمال بنكی ة"),
                        style: ["right", {fontSize: 9.5}, "arabic","bold" ]
                      },
                      {
                        text:"\nCountersigning required in case of business from Banks",
                        style: ["left", {fontSize: 11}, "Times","bold"]
                      },
                      {
                        text:"\n______________________________________________________________________________________",
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
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 0
            },
            margin:[0,200,0,0],
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 10 of 11",
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

module.exports = Page_10