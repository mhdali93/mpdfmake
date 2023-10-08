const Page_13 = ({
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
            layout:{
              paddingBottom: (i, node) => 0,
              paddingTop: (i, node) => 1,
            },
            table: {
              widths: [
                "*",200,"*","*","*"
              ],
              body: [
                [
                  {
                    stack:[
                      {
                        text:convertTextToRtl("رقم وثيقة التأمين"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Policy No.", style:"center" },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("شركات التأمين التي تم شراء وثائق"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("التأمين السابقة منها وعنوانها"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Insurance companies from where previous policy / policies have been purchased with address*", style:"center" },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مبلغ التأمين"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Sum Assured", style:"center" },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الخطة والمدة"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Plan and Term", style:"center" },
                    ],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("الوضع الحالي"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("لوثيقة التأمين"),
                        style: ["center", {fontSize: 10}, "arabic"]
                      },
                      { text:"Present status of the policy", style:"center" },
                    ],
                  },
                ],
                [
                  {text:"\n\n"},{},{},{},{}
                ],
                [
                  {text:"\n\n"},{},{},{},{}
                ],
                [
                  {text:"\n\n"},{},{},{},{}
                ],
                [
                  {text:"\n\n"},{},{},{},{}
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => -3,
              paddingTop: (i, node) => -2,
            },
            table: {
              widths: [
                "*","*"
              ],
              body: [
                [
                  {
                    border:[false,false,false,false],
                    text:"*If previous policies from LIC (International) BSC (C) please give name of the branch office"
                  },
                  {
                    border:[false,false,false,false],
                    stack:[
                      {
                        text:convertTextToRtl("إذا كانت البوالص السابقة من شركة التأمين على الحياة العالمية( ش.م.ب"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:[
                          {text: "("},
                          {text: "مقفلة"},
                          {text: ")"},
                          {text: "أذكر اسم مكتب الفرع"},
                        ],
                        style: ["right", {fontSize: 10}, "arabic"]
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
            layout:{
              paddingBottom: (i, node) => 0,
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [
                12,"*","*"
              ],
              body: [
                [
                  {text:"17" },
                  {
                    text:"Do you agree to the condition that the policy if issued on the basis of this proposal, will be automatically vest in the life to be assured on the deferred date (Applicable only in case of proposal on the life of minor)",
                    style: "justify",
                    border:[true,true,false,true],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("هل توافق على شرط أن البوليصة في حالة إصدارها على أساس هذا الطلب،"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("سوف تكون مستحقة تلقائيا للشخص المراد التأمين على حياته في التاريخ"),
                        style: ["right", {fontSize: 10}, "arabic"]
                      },
                      {text:[
                        {text:"("},
                        {text:"ينطبق فقط في حالة تقديم طلب تامين على حياة شخص قاصر"},
                        {text:") "},
                        {text:"المؤجل"},
                      ],style: ["right", {fontSize: 10}, "arabic"]}
                    ],
                    border:[false,true,true,true],
                  },
                ],
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:"Part C: ",
                        style: ["left", {fontSize: 14}, "Arial", "bold"]
                      },
                      {
                        text:"Declaration by Proposer/Life to be Assured",
                        style: ["left", {fontSize: 11}, "Arial", "bold"]
                      }
                    ],
                    colSpan:2
                  },{},
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("إقرار مقدم الطلب / المؤمن على حياته العرض "),
                        style: ["right", {fontSize: 12}, "arabic", "bold"]
                      },
                      {
                        text:convertTextToRtl("الجزء جـ:"),
                        style: ["right", {fontSize: 15}, "arabic", "bold"]
                      }
                    ]
                  }
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 0,
              paddingTop: (i, node) => -3,
            },
            table: {
              widths: [ 550 ],
              body: [
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:"("},
                        {text:convertTextToRtl("اسم مقدم الطلب")},
                        {text:")_________________________________"},
                        {text:"__________________________________"},
                        {text:"__________________________________"},
                        {text:"أقر ۱ "}
                      ]},
                      { text :[
                        {text:convertTextToRtl("بموجب هذا أن البيانات والإجابات السابقة الواردة في جزء أ وب أعلاه قد قمت بتقديمها بعد فهمي الكامل لها وأقر بصحتها، كما أقر بعدم حجبي لأي معلومات ")},
                      ]},
                      { text :[
                        {text:"("},
                        {text:convertTextToRtl("المشار إليها فيما بعد باسم الشركة")},
                        {text:")"},
                        {text:"("},
                        {text:"مقفلة"},
                        {text:")"},
                        {text:"ش.م.ب"},
                        {text:"("},
                        {text:"العالمية"},
                        {text:")"},
                        {text:convertTextToRtl("وأوافق أن تشكل هذه البيانات وهذا الإقرار أساسًا لعقد الضمان بيني وبين شركة التأمين على الحياة")},
                      ]},
                      { text :[
                        {text:convertTextToRtl(" ، وكذلك جزءًا من أي عقد لوثيقة التأمين يُصدر بموجبها. كما أنني أدرك تماما وأوافق على أنه في وجود أي معلومات غير صحيحة في هذا العقد، يكون العقد")},
                      ]},
                      { text :[
                        {text:convertTextToRtl("المذكور باطلا، ويحق للشركة مصادرة الأموال المدفوعة")},
                      ]},
                      { text :[
                        { text: "1. I/we ______________________" },
                        { text: "______________________________" },
                        { text: "______________________________" },
                        { text: "(Name of the proposer/s)," },
                        { text:"do hereby declare that the foregoing statements and answers in part A and part B above have been given by me after fully understanding the questions and the same are true and complete in every particular and that I have not withheld any information and do hereby agree and declare that these statements and this declaration shall be basis of the contract of assurance between me and Life Insurance Corporation (International) B.S.C.(C) (referred as 'the Company' hereinafter). I agree that they shall form a part of any Policy contract that may be issued on the strength thereof. I am also fully aware and agreeing that if any untrue information be contained therein, the said contract shall be absolutely Null and Void and moneys which shall have been paid in respect thereof shall stand forfeited to the Company." },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                    ],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:convertTextToRtl(". لقد فهمت بالكامل شروط وأحكام الخطة المقترحة ومزايا الاستحقاق والوفاة المتاحة في إطار الخطة المقترحة.")},
                        {text:"۲"},
                      ]},
                      { text :[
                        { text: "2. I/we have fully understood the terms and conditions of the proposed plan and maturity and death benefits available under the proposed plan." },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                    ],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:convertTextToRtl("أوافق على أن الضمانات المقترحة في هذه الوثيقة لن يسري العمل بها إلا على أساس الاتصال الرسمي لتحمل المخاطر من قبل الشركة وفقًا لهذا الاقتراح والبيان")},
                        {text:"۳"},
                      ]},
                      { text :[
                        {text:convertTextToRtl("الشخصي والتقارير الطبية الخاصة بحالتي الصحية التي قد تطلبها الشركة")},
                      ]},
                      { text :[
                        { text: "3. I/we further agree that the assurance proposed herein shall commence only on formal communication of assumption of risk by the Company on the basis of this proposal and personal statement and such medical reports on my state of health as may be required by the Company." },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                    ],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:convertTextToRtl("وأوافق كذلك أن أبلغ الشركة على الفور، بعد تاريخ تقديم الطلب وقبل إصدار إيصال الاستلام الأول، كتابة بأي تغيير يطرأ على مهنتي أو مركزي المالي أو صحتي ")},
                        {text:"۴"},
                      ]},
                      { text :[
                        {text:convertTextToRtl("العامة أو أي تغيير يطرأ على أي فرد من أفراد أسرتي، لإعادة النظر في شروط قبول الضمان أي تقصير من جانبي في أداء ذلك يجعل هذا الضمان باطلا ويحق")},
                      ]},
                      { text :[
                        {text:convertTextToRtl("ويحق للشركة مصادرة كافة الأموال المدفوعة")},
                      ]},
                      { text :[
                        { text: "4. I/we further agree that after the date of submission of the proposal but before the issue of First Premium Receipt, any change in my occupation, financial position and the general health or that of any member of my family occur, I shall forthwith intimate the same to the Company in writing to reconsider the terms of acceptance of assurance. Any omission on my part to do so shall render this assurance invalid and all money which shall have been paid in respect thereof shall stand forfeited to the company." },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                    ],
                    style: ["right", {fontSize: 10}, "arabic"]
                  },
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:convertTextToRtl("أفوض بموجب هذا أي طبيب أو مستشفى أو شركة تأمين أو أي منظمة أخرى لديها أي سجلات أو معلومات ذات صلة بصحتي بتقديم أي وجميع هذه المعلومات")},
                        {text:"۵"},
                      ]},
                      { text :[
                        {text:convertTextToRtl("إلى الشركة على أن تكون صورة هذا التفويض مطابقة للأصل")},
                      ]},
                      { text :[
                        { text: "5. I/we hereby authorize any medical practitioner, physician, hospital, Insurance Company or any other organization, which has any records or knowledge of me or my health to provide any and all such information to the Company. A photocopy of this authorization shall be as valid as the original." },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                    ],
                    style: ["right", {fontSize: 10}, "arabic"]
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
                    text:"Page 13",
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

module.exports = Page_13