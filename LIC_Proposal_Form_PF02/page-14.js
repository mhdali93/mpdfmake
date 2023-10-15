const Page_14 = ({
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
              paddingBottom: (i, node) => -5,
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [ 550 ],
              body: [
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:convertTextToRtl("أؤكد بموجب ذلك أن نموذج الطلب هذا قد تم تعبئته وتوقيعه بعد فهم كامل للأحكام ذات الصلة من تشريعات ولوائح مكافحة غسيل الأموال / متطلبات اعرف")},
                        {text:"۶"},
                      ]},
                      { 
                        text:convertTextToRtl("عميلك والالتزام بها"),
                      },
                      { text :[
                        { text: "6. I/we hereby confirm that this proposal form is filled in and signed after understanding fully the relevant provisions of anti-money laundering legislations and regulations and know-your-customer (KYC) parameters/requirements and comply with the same." },
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
                        {text:convertTextToRtl("أقر أيضًا أنني لست مشاركًا في أي نشاط يمكن اعتباره غير قانوني بموجب تشريعات مكافحة غسيل الأموال، وأن الأموال التي أودعتها لسداد قسط وثيقة")},
                        {text:"۷"},
                      ]},
                      { text :[
                        {text:convertTextToRtl("التأمين هي من عائدات المعاملات القانونية والمشروعة. كما أخول الشركة للكشف عن المعلومات المتعلقة بي وبأموالي لدى أي سلطة تنظيمية. كما أنني أعلم")},
                      ]},
                      { text :[
                        {text:convertTextToRtl("حقيقة أن السلطات التنظيمية / الحكومية قد تحجب أي أموال متعلقة بي وأن المعاملات قد يتم تعليقها نتيجة لأي تحقيق من جانب هذه السلطات التنظيمية.")},
                      ]},
                      { text :[
                        {text:convertTextToRtl("وفي هذه الحالة، لن أحمل الشركة مسؤولية أي خسائر من أي نوع ناجمة عن هذا التعليق / تجميد الأموال / أموال وثيقة التأمين")},
                      ]},
                      { text :[
                        { text: "7. I/we also declare that I am not engaged in any activity that may be considered illegal under anti-money laundering legislations and that funds deposited by me towards the premium for the life insurance proposal/policy are the proceeds of legal and legitimate transactions. I also authorize the Company to disclose information relating to me and my funds to any regulatory authority. I also know the fact that regulatory/ Government authorities may withhold any policy moneys/ funds to my credit and that transactions may be suspended as a result of any enquiry by such regulatory authorities. In the happening of such event, I will not hold the Company responsible for any losses of any kind arising out of or consequent thereto such holding/ freezing of funds/ policy monies." },
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
                        {text:convertTextToRtl("أفوض الشركة بإرسال المراسلات من خلال البريد الإلكتروني / الرسائل النصية القصيرة إلى البريد الإلكتروني الخاص بي أو أرقام الهواتف المحمولة المذكورة في")},
                        {text:"۸"},
                      ]},
                      { text :[
                        {text:convertTextToRtl("هذه الإستمارة، وسيتم إبلاغ الشركة بأي تغييرات لاحقة في البريد الإلكتروني أو أرقام الهواتف المحمولة")},
                      ]},
                      { text :[
                        { text: "8. I/we authorize the company to send the correspondence through e-mail/ SMS to my email ids or mobile numbers provided in this form and any subsequent changes in e-mail-ids or mobile numbers will be notified to the company." },
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
                        {text:convertTextToRtl("أيضًا أنني في الوقت الحالي لست أحد مواطني الولايات المتحدة الأمريكية أو مقيماً في الولايات المتحدة الأمريكية. وفي حال حصولي على جنسية الولايات المتحدة")},
                        {text:"۹"},
                      ]},
                      { text :[
                        {text:convertTextToRtl("يمكنك شطب البند إذا")},
                        {text:convertTextToRtl(")*")},
                        {text:convertTextToRtl(" الأمريكية أو أصبحت مقيما بها، سأبلغ المكتب على الفور وسوف ألتزم بأي متطلبات بموجب لوائح قانون الامتثال الضريبي الأمريكي، إن وجدت.")},
                      ]},
                      { text :[
                        {text:"("},
                        {text:convertTextToRtl("كان لا ينطبق")},
                      ]},
                      { text :[
                        { text: "9. I/we also declare that presently I am not citizen of USA or the resident of USA. In case I take citizenship of USA or become resident of USA I will inform the office immediately and will comply with any requirement under FATCA regulations, if applicable.* (*strike off if not applicable)" },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                    ],
                    style: ["right", {fontSize: 9.5}, "arabic"]
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
              paddingBottom: (i, node) => -5,
              paddingTop: (i, node) => -5
            },
            table: {
              widths: [ 200,350 ],
              body: [
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :convertTextToRtl("التاريخ"), },
                      { text :"Date" },
                      { text :"-------------------------------------------------------------------" },
                      { text :convertTextToRtl("المكان"), },
                      { text :"Place" },
                      { text :"-------------------------------------------------------------------" },
                      { text :convertTextToRtl("توقيع الشاهد"), },
                      { text :"Signature of Witness" },
                      { text :"-------------------------------------------------------------------" },
                    ],
                    style: ["left", {fontSize: 9.5}, "arabic"]
                  },
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :convertTextToRtl("توقيع مقدم / مقدمي الطلب / المؤمن على حياته"), },
                      { text :"Signature of Proposer/s/Life to be Assured" },
                      { text:"\n" },
                      { text :[
                        { text :"---------------------------------------" },
                        { text :"---------------------------------------" },
                        { text :"---------------------------------------" },
                      ]},
                      { text :convertTextToRtl("اسم مقدم الطلب / المؤمن على حياته"), },
                      { text :"Name of Proposer/Life to Assured" },
                      { text:"\n" },
                      { text :[
                        { text :"---------------------------------------" },
                        { text :"---------------------------------------" },
                        { text :"---------------------------------------" },
                      ]},
                    ],
                    style: ["left", {fontSize: 9.5}, "arabic"]
                  }
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :convertTextToRtl("اسم وعنوان الشاهد"), },
                      { text :"Name & Address of Witness" },
                      { text :[
                        { text :"--------------------------------------" },
                        { text :"--------------------------------------" },
                        { text :"--------------------------------------" },
                        { text :"--------------------------------------" },
                        { text :"-------------------------------------" },
                      ]},
                    ],
                    style: ["left", {fontSize: 9.5}, "arabic"],
                    colSpan:2
                  },{}
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
              widths: [ 275,275 ],
              body: [
                [
                  {
                    text :"Specimen Signatures of proposer/s and Life to be assured",
                    border: [false, false, false, false],
                    style: ["left", {fontSize: 9.5}, "arial", "bold"]
                  },
                  {
                    text :convertTextToRtl("التوقيعات النموذجية لمقدم / مقدمي الطلب والمؤمن على حياته "),
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 9.5}, "arabic", "bold"]
                  }
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
                        style: ["center", {fontSize: 10}, "Times"]
                      },
                    ],
                  },
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
                      {
                        text:"\n(not required, if the life to be assured is minor)",
                        style: ["center", {fontSize: 8.5}, "Times"]
                      }
                    ],
                  }
                ],
                [
                  {text:"\n\n\n"},{}
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:"\n", style:{fontSize:3}},
                        {text:convertTextToRtl("إذا جاء توقيع مقدم الطلب و / أو الإجابة عن الأسئلة المتضمنة هنا بلغة غير تلك المحرر بها النموذج الماثل فإنه يتعين عليه عليها الإقرار بخط يدهم فوق التوقيع أنه قد تم")},
                      ]},
                      { text :[
                        {text:convertTextToRtl("شرح جميع الأسئلة وأن الإجابات جاءت بعد فهمها فهما صحيحًا")},
                      ]},
                      { text :[
                        { text: "If answer to the questions and/or signature of the proposer is in language other than from the proposal, he/she should declare in their own handwriting above their signature that all questions were explained and that their replies are given after fully and properly understanding the same." },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                    ],
                    style: ["right", {fontSize: 9.5}, "arabic"],
                    colSpan:2,
                  },{}
                ],
                [
                  {
                    border: [false, false, false, false],
                    canvas: [
                      {
                        type: 'line',
                        x1: 0, y1: 0,
                        x2: 555, y2: 0,
                        lineWidth: 1
                      },
                    ],
                    colSpan:2
                  },{}
                ],
                [
                  { 
                    border:[false,false,false,false],
                    text :[
                      {
                        text:"AUTHORISATION LETTER FOR HANDING OVER POLICY DOCUMENT \t\t\t\t\t\t\t\t\t\t\t\t\t", 
                        style:{fontSize:8.5}
                      },
                      {
                        text:convertTextToRtl("خطاب تفويض لتسليم وثيقة بوليصة التأمين"),
                        style: [{fontSize: 9.5}, "arabic"],
                      },
                    ],
                    style:"bold",
                    colSpan:2
                  },{}
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      {text:"\n",style:{fontSize:4}},
                      { text :[
                        { text: "I hereby authorize __________________________(Name of consultant) to collect policy document/s on my behalf subsequent to the acceptance of risk under the subject proposal." },
                      ], style: ["justify", "Arial", {fontSize: 8.5}]},
                      { text :[
                        {text:convertTextToRtl("لاستلام مستندات وثيقة/وثائق التأمين نيابة عني عقب الموافقة على التأمين ضد المخاطر تحت موضوع الطلب")},
                        {text:"("},
                        {text:convertTextToRtl("اسم الوكيل")},
                        {text:")__________________________"},
                        {text:convertTextToRtl("أفوض بموجب هذا")},
                      ]},
                    ],
                    style: ["right", {fontSize: 9}, "arabic"],
                    colSpan:2,
                  },{}
                ],
                [
                  {
                    border:[false,false,false,false],
                    stack:[
                      { text :[
                        {text:"\n",style:{fontSize:4}},
                        {text:"Signature of Proposer"},
                        {text:"__________________________"},
                        {text:"__________________________"},
                        {text:convertTextToRtl("توقيع مقدم الطلب")},
                      ]},
                    ],
                    style: ["right", {fontSize: 9}, "arabic"],
                    colSpan:2,
                  },{}
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
                    text:"Page 14",
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

module.exports = Page_14