const Page_16 = ({
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
              widths: [ 275,275 ],
              body: [
                [
                  { 
                    stack:[
                      { 
                        text:"I hereby confirm that the information provided above is true, accurate and complete.",
                      },
                      { 
                        text:"Subject to applicable local laws, I hereby consent for the LIC International) BSC(C) or any of its affiliates (including branches) (collectively 'the Company') to share my information with domestic or overseas regulators or tax authorities where necessary to establish our tax liability in any jurisdiction.",
                      },
                      { 
                        text:"I agree and undertake to notify the Company within 30 calendar days if there is a change in any information which I have provided to the Company.",
                      },
                    ], 
                    style: "justify",
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("اقر بموجبه ان المعلومات المدرجة صحيحة ودقيقة وكاملة"),
                      },
                      { 
                        text:convertTextToRtl("بالخضوع لأحكام القوانين المحلية السارية، أقر بموافقتي على ان تشارك شركة "),
                      },
                      { 
                        text:convertTextToRtl("التأمين على الحياة) العالمية( ش. م.ب )مقفلة( او أي من التابعين لها )بما في"),
                      },
                      { 
                        text:convertTextToRtl("ذلك الافرع( )والمشار إليهم اجمالاً باصطلاح الشركة ( المعلومات مع المنظمين"),
                      },
                      { 
                        text:convertTextToRtl("او سلطات الضرائب المحلية او الخارجية عند معلومات الضرورة لتحديد "),
                      },
                      { 
                        text:convertTextToRtl("لتحديد التزاماتي الضريبية في أي ولاية قضائية"),
                      },
                      { 
                        text:convertTextToRtl("وأقر واتحمل مسؤولية اخطار الشركة خلال ٣٠ يوم ميلادي في حالة حدوث"),
                      },
                      { 
                        text:convertTextToRtl("تغيير في أي من المعلومات التي قدمتها للشركة"),
                      },
                      {text:"\n", style:{fontSize:6}}
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic"]
                  }
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 2,
              paddingTop: (i, node) => 2,
            },
            fontSize : 10,
            table: {
              widths: [ 200, 200, 140 ],
              body: [
                [
                  {
                    text:"الاسم\tName",
                    style:["center",{fillColor: '#f8eff2'}]
                  },
                  {
                    text:"التوقيع\tSignature",
                    style:["center",{fillColor: '#f8eff2'}]
                  },
                  {
                    text:"التاريخ\tDate",
                    style:["center",{fillColor: '#f8eff2'}]
                  }
                ],
                [
                  {text:"\n\n\n"},//DYNAMIC
                  {text:"\n\n\n"},//DYNAMIC
                  {text:"\n\n\n"},//DYNAMIC
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => -5,
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [ 275,275 ],
              body: [
                [
                  { 
                    stack:[
                      { 
                        text:"List of the documents attached with proposal Form (Please tick mark the appropriate box): ",
                      },
                    ], 
                    style: ["justify", "bold"],
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("قائمة الوثائق المرفقة مع نموذج الطلب: )يرجى وضع علامة في المربع "),
                      },
                      { 
                        text:convertTextToRtl("المناسب(:"),
                      }
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic", "bold"]
                  }
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 2,
              paddingTop: (i, node) => 2,
            },
            table: {
              widths: [15,155,155,60,60,60],
              body: [
                [
                  {
                    stack:[
                      {
                        text:"\n",
                        style: {fontSize: 4}
                      },
                      {
                        text:"A",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,true,false,true],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"\n",
                        style: {fontSize: 4}
                      },
                      {
                        text:"Proof of identity",
                        style: ["center", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,true],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("إثبات الهوية"),
                        style: ["center", {fontSize: 9}, "Times"]
                      },
                    ], 
                    border:[false,true,false,true],
                    style:["arabic","right"]
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مقدم الطلب ۱"),
                        style: ["center", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"Proposer 1",
                        style: ["center", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,true],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مقدم الطلب ۲"),
                        style: ["center", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"Proposer 2",
                        style: ["center", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,true],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("معين"),
                        style: ["center", {fontSize: 9.5}, "arabic"]
                      },
                      {
                        text:"Appointee",
                        style: ["center", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,true],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"\n",
                        style: {fontSize: 4}
                      },
                      {
                        text:"1",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,true,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Photocopy of CPR / Emirate ID /",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:"National ID Card (both sides)",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نسخة من البطاقة السكانية / بطاقة الهوية"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الإماراتية / بطاقة الهوية الوطنية )كلا الجانبين"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,false],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,true,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,true,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,true,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"2",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Photocopy of Passport\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نسخة من جواز السفر"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"3",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,true],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Others (please specify)\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,true],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("أخرى / يرجى التحديد"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,true],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,true],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,true],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,true],
                    style:"center"
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
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [ 275,275 ],
              body: [
                [
                  { 
                    stack:[
                      { 
                        text:"B. Proofs of Permanent Address and Present Residential Address (if it is different from that of permanent address): ",
                      },
                    ], 
                    style: ["justify", "bold"],
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("إثباتات العنوان الدائم وعنوان السكن الحالي )يرجى تقديم دليل على"),
                      },
                      { 
                        text:convertTextToRtl("العنوان الدائم وإذا كان مختلفا عن العنوان الدائم(:"),
                      }
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic", "bold"]
                  }
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 2,
              paddingTop: (i, node) => 2,
            },
            table: {
              widths: [15,155,155,60,60,60],
              body: [
                [
                  {
                    stack:[
                      {
                        text:"\n",
                        style: {fontSize: 4}
                      },
                      {
                        text:"1",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,true,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Photocopy of Passport with VISA &",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:"Permanent Address pages",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نسخة من جواز السفر مع صفحات فيزا والعنوان"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                      {
                        text:convertTextToRtl("الدائم"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,false],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,true,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,true,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,true,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"2",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Information printout of National ID Card",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("نسخه من البطاقة الذكية لبطاقة الهوية الوطنية"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ],
                    border:[false,false,false,false],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"3",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Latest Electricity Bill or Telephone Bill / Bank Statement",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("حدث فاتورة كهرباء أو فاتورة هاتف / كشف"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("حساب بنكي" ),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ],
                    border:[false,false,false,false],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"4",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Photocopy of Valid driving license (Bahrain only)",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("رخصة قيادة سارية - البحرين فقط"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ],
                    border:[false,false,false,false],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"5",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,true],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Others (please specify)\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,true],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("أخرى / يرجى التحديد"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,true],
                    style:["arabic","right"]
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,true],
                    style:"center"
                  },
                  {
                    image : "./assets/images/uncheck.png",
                    width: 10,
                    border:[false,false,false,true],
                    style:"center"
                  },
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,true],
                    style:"center"
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
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [ 275,275 ],
              body: [
                [
                  { 
                    stack:[
                      { 
                        text:"C. Proof for Source of income /funds for payment of premium",
                      },
                    ], 
                    style: ["justify", "bold"],
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("مصدر الدخل المعلن / المقدم لدفع قسط التأمين"),
                      }
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic", "bold"]
                  }
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => 2,
              paddingTop: (i, node) => 2,
            },
            table: {
              widths: [15,225,155,10,40,60],
              body: [
                [
                  {
                    stack:[
                      {
                        text:"\n",
                        style: {fontSize: 4}
                      },
                      {
                        text:"1",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,true,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"For salaried income: Copy of latest Salary Certificate/ Pay slip or Bank Account Statement etc.,",
                        style: ["justify", {fontSize: 9}, "Times"]
                      }
                    ],
                    border:[false,true,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("للراتب: كشف للحساب البنكي أو نسخة من أحدث شهادة راتب"),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,true,false,false],
                    style:["arabic","right"],
                    colSpan:3
                  },{},{},
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,true,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"2",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"For self-employed/Business Person:",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:"a. Copy of Bank Statement for last 3/6 months",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                      {
                        text:"b. Copies of Audited financial statement of accounts for last 3 years & CR or Trade License copy",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("صاحب العمل :"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("ا. نسخة من كشف الحساب البنكي لآخر ٦/٣ أشهر "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("ب. أشهر كشف الحساب المالي المدقق لآخر ٣ سنوات ونسخة من السجل  "),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                      {
                        text:convertTextToRtl("التجاري أو الرخصة التجارية"),
                        style: ["right", {fontSize: 9}, "arabic"]
                      },
                    ],
                    border:[false,false,false,false],
                    style:["arabic","right"],
                    colSpan:3
                  },{},{},
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
                  },
                ],
                [
                  {
                    stack:[
                      {
                        text:"3",
                        style: ["center", {fontSize: 9}, "Times", "bold"]
                      },
                    ], 
                    border:[false,false,false,false],
                    style:"center"
                  },
                  {
                    stack:[
                      {
                        text:"Other Source / Income (please specify and provide documentory proof)\n",
                        style: ["left", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                  },
                  {
                    stack:[
                      {
                        text:convertTextToRtl("مصدر / مدخول آخر ) الرجاء تحديد وتقديم وثائق الإثبات("),
                        style: ["right", {fontSize: 9}, "Times"]
                      },
                    ],
                    border:[false,false,false,false],
                    style:["arabic","right"],
                    colSpan:3
                  },{},{},
                  {
                    image : "./assets/images/check.png",
                    width: 10,
                    border:[false,false,false,false],
                    style:"center"
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
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [ 270,270 ],
              body: [
                [
                  { 
                    stack:[
                      "\n","\n",
                      "_______________________________________________________",
                      { 
                        text:"\nSignature of the Consultant / Authorised Official of Broker / Bank",
                      },
                    ], 
                    style: ["center", "bold"],
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      "\n","\n",
                      "_______________________________________________________",
                      { 
                        text:"\nSignature of the Proposer / Life to be Assured",
                      }
                    ],
                    border: [false, false, false, false],
                    style: ["center", "bold"],
                  }
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 10
            },
            table: {
              widths: [550],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Page 16",
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

module.exports = Page_16