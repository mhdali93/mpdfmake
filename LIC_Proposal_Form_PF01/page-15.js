const Page_15 = ({
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
                    border:[false,false,false,false],
                    stack:[
                      { 
                        text:convertTextToRtl("التصديق الذاتي للعملاء"),
                      },
                      { 
                        text : "Common Reporting Standard - (CRS) Certification Declaration",
                        style: ["center", "Times", {fontSize: 12}]
                      },
                    ],
                    style: ["center", "bold",{fontSize: 14}, "arabic"],
                    colSpan:2
                  },{}
                ],
                [
                  { 
                    text:"Please complete and sign this form. For Joint Life Policies, each Life to be Assured will have to complete a separate form.", 
                    style: "left",
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("يرجى ملئ وتوقيع الاستمارة. بوليصات التأمين على الحياة المشتركة، يجب على"),
                      },
                      { 
                        text:convertTextToRtl("كل حياة مؤمن عليها ان يكون لها استمارة كاملة مستقلة"),
                      },
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
              paddingBottom: (i, node) => 0,
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [ 70,10,10,10,10,10,10,10,10,"*","*","*","*" ],
              body: [
                [
                  {
                    stack:[
                      { 
                        text:convertTextToRtl("لاسم بالكامل"),
                      },
                      { 
                        text : "Full Name",
                        style: ["center", "Times", {fontSize: 8}]
                      },
                    ],
                    style: ["center",{fontSize: 9.5,fillColor: '#f8eff2'}, "arabic"],
                  },{
                    text:"",colSpan:12
                  },{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  {
                    stack:[
                      { 
                        text:convertTextToRtl("تاريخ الميلاد"),
                      },
                      { 
                        text : "Date of Birth",
                        style: ["center", "Times", {fontSize: 8}]
                      },
                    ],
                    style: ["center",{fontSize: 9.5,fillColor: '#f8eff2'}, "arabic"],
                    rowSpan:2
                  },{text:"\n"},{},{},{},{},{},{},{},
                  {
                    stack:[
                      { 
                        text:convertTextToRtl("محل الميلاد"),
                      },
                      { 
                        text : "Place  of Birth",
                        style: ["center", "Times", {fontSize: 8}]
                      },
                    ],
                    style: ["center",{fontSize: 9.5,fillColor: '#f8eff2'}, "arabic"],
                    rowSpan:2
                  },
                  {text:"\n", colSpan:3, rowSpan:2},{},{}
                ],
                [
                  {},
                  {text:"D", style:"center"},
                  {text:"D", style:"center"},
                  {text:"M", style:"center"},
                  {text:"M", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {text:"Y", style:"center"},
                  {},{},{},{}
                ],
                [
                  {
                    stack:[
                      { 
                        text:convertTextToRtl("المدينة او البلدة"),
                      },
                      { 
                        text : "Town or City",
                        style: ["center", "Times", {fontSize: 8}]
                      },
                    ],
                    style: ["center",{fontSize: 9.5,fillColor: '#f8eff2'}, "arabic"],
                  },{
                    text:"",colSpan:8
                  },{},{},{},{},{},{},{},
                  {
                    stack:[
                      { 
                        text:convertTextToRtl("الدولة"),
                      },
                      { 
                        text : "Country",
                        style: ["center", "Times", {fontSize: 8}]
                      },
                    ],
                    style: ["center",{fontSize: 9.5,fillColor: '#f8eff2'}, "arabic"], 
                  },{},{
                    stack:[
                      { 
                        text:convertTextToRtl("الجنسية"),
                      },
                      { 
                        text : "Nationality",
                        style: ["center", "Times", {fontSize: 8}]
                      },
                    ],
                    style: ["center",{fontSize: 9.5,fillColor: '#f8eff2'}, "arabic"], 
                  },{}
                ],
                [
                  {
                    stack:[
                      { 
                        text:convertTextToRtl("دولة الإقامة الحالية"),
                      },
                      { 
                        text : "Present Country of Residence",
                        style: ["center", "Times", {fontSize: 8}]
                      },
                    ],
                    style: ["center",{fontSize: 9.5,fillColor: '#f8eff2'}, "arabic"],
                    colSpan:5
                  },{},{},{},{},
                  {
                    text:"",colSpan:8
                  },{},{},{},{},{},{},{}
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingBottom: (i, node) => -2,
              paddingTop: (i, node) => 0,
            },
            table: {
              widths: [ 275,275 ],
              body: [
                [
                  { 
                    text:"Are you a tax resident in any other country other than present country mentioned above?", 
                    style: "left",
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("هل انت مسدد لضريبة اقامة في أي دولة أخرى غير المذكورة أعلاه؟"),
                      },
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic"]
                  }
                ],
                [
                  { 
                    stack:[
                      { 
                        text:"Yes", 
                        style: "right",
                        border: [false, false, false, false] ,
                      },
                      { 
                        text:convertTextToRtl("نعم"),
                      },
                    ],
                    border: [false, false, false, false],
                    style: ["right"],
                  },
                  { 
                    stack:[
                      { 
                        text:"No", 
                        style: "left",
                        border: [false, false, false, false] ,
                      },
                      { 
                        text:convertTextToRtl("لا"),
                      },
                    ],
                    border: [false, false, false, false],
                    style: ["left"]
                  }
                ],
                [
                  { 
                    text:"For details on tax residency of a country please refer to OECD site:", 
                    style: "left",
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("لمزيد من التفاصيل عن ضريبة إقامة الدول يرجى الاطلاع على الموقع "),
                      },
                      { 
                        text:convertTextToRtl("الالكتروني الخاص بمنظمة التعاون الاقتصادي والتنمية على الرابط التالي"),
                      },
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic"]
                  }
                ],
                [
                  {
                    text:"(http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-residency)",
                    link:"http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/tax-residency",
                    colSpan:2,
                    border: [false, false, false, false],
                    style:"center"
                  },{}
                ],
                [
                  { 
                    stack:[
                      { text:"\n", style:{fontSize:4}},
                      { text:"If Yes Please complete the following table indicating:"},
                      { text:"- where the Account Holder is tax resident and"},
                      { text:"- The Account Holder's TIN (Tax Identification Number e.g. PAN) for each country/jurisdiction indicated."},
                    ],
                    style: "justify",
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { text:"\n", style:{fontSize:4}},
                      { 
                        text:convertTextToRtl("في حالة الإجابة بنعم يرجى اكمال الجدول التالي الذي يوضح:"),
                      },
                      { 
                        text:[
                          {text:convertTextToRtl("المحل الذي يسدد فيه صاحب الحساب ضريبة الإقامة")},
                          {text:" -"}
                        ]
                      },
                      { 
                        text:[
                          {text:convertTextToRtl("الرقم التعريفي الضريبي لصاحب الحساب موضحا كل دولة / ولاية قضائية")}, 
                          {text:" -"}
                        ]
                      },
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic"]
                  }
                ],
                [
                  {
                    text:"\n",colSpan:2,
                    border: [false, false, false, false],
                  },
                  {}
                ],
                [
                  { 
                    stack:[
                      { text:"If a TIN is unavailable please provide the appropriate reason A, B or C where indicated below:"},
                      { text:"Reason A The country/jurisdiction where the Account Holder is resident does not issue TINs to its residents"},
                      { text:"Reason B The Account Holder is otherwise unable to obtain a TIN or equivalent number (Please explain)"},
                      { text:"Reason C No TIN is required."},
                    ],
                    style: "justify",
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl(" في حالة عدم توفر الرقم التعريفي الضريبي يرجى توضيح السبب الملائم من"),
                      },
                      { 
                        text:convertTextToRtl("أ، ب، أو ت فيما يلي"),
                      },
                      { 
                        text:convertTextToRtl("السبب أ الدولة / الولاية القضائية التي يقيم فيها صاحب الحساب لا تصدر "),
                      },
                      { 
                        text:convertTextToRtl("رقم تعريفي ضريبي للمقيمين فيها"),
                      },
                      { 
                        text:convertTextToRtl("السبب ب صاحب الحساب غير قادر على الحصول على الرقم التعريفي الضريبي"),
                      },
                      { 
                        text:convertTextToRtl("أو ما يعادله يرجى التوضيح"),
                      },
                      { 
                        text:convertTextToRtl("السبب ج غير مطلوب رقم تعريفي ضريبي"),
                      },
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic"]
                  }
                ],
                [
                  { 
                    text:"(Note. Only select this reason if the domestic law of the relevant jurisdiction does not require the collection of the TIN issued by such jurisdiction)", 
                    style: "left",
                    border: [false, false, false, false] ,
                  },
                  { 
                    stack:[
                      { 
                        text:convertTextToRtl("ملحوظة : يتم اختيار هذا السبب فقط في حالة لم يستلزم القانون المحلي او"),
                      },
                      { 
                        text:convertTextToRtl("التشريعات ذات الصلة الحصول على الرقم التعريفي الضريبي الصادر من الولاية"),
                      },
                      { 
                        text:convertTextToRtl("القضائية ذات الصلة"),
                      },
                    ],
                    border: [false, false, false, false],
                    style: ["right", {fontSize: 10}, "arabic"]
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
              paddingTop: (i, node) => 0
            },
            table: {
              widths: [15,"*","*",20,20,20,175],
              body: [
                [
                  {
                    stack:[
                      { text:"\n\n" },
                      { text:convertTextToRtl("دولة / جهة الضريب") },
                      { text:convertTextToRtl("على الإقامة") },
                      { text:"Country/Jurisdiction of" },
                      { text:"Tax Residence" },
                    ],
                    style: ["center"],
                    colSpan:2,
                    rowSpan:2
                  },{},
                  {
                    stack:[
                      { text:"\n\n" },
                      { text:convertTextToRtl("الرقم التعريفي الضريبي") },
                      { text:convertTextToRtl("او ما يعادله") },
                      { text:"TIN or Equivalent" },
                    ],
                    style: ["center"],
                    rowSpan:2
                  },
                  {
                    stack:[
                      { text:convertTextToRtl("في حالة عدم") },
                      { text:convertTextToRtl("توفر رقم تعريفي") },
                      { text:convertTextToRtl("ضريبي يرجى") },
                      { text:convertTextToRtl("اختيار السبب") },
                      { text:"If no TIN available" },
                      { text:"tick the Reason" },
                    ],
                    style: ["center"],
                    colSpan:3,
                  },{},{},
                  {
                    stack:[
                      { text:"\n" },
                      { text:convertTextToRtl("يرجى توضيح أسباب عدم توفر رقم تعريفي الضريبي") },
                      { text:convertTextToRtl("في هذه الخانات في حالة اختيار السبب)ب(") },
                      { text:"Please explain in the following boxes why you are unable to obtain a TIN if you selected Reason B" },
                    ],
                    style: ["center"],
                    rowSpan:2
                  },
                ],
                [
                  {},{},{},
                  {
                    stack:[
                      { text:convertTextToRtl("أ") },
                      { text:"A" },
                    ],
                    style: ["center"],
                  }, 
                  {
                    stack:[
                      { text:convertTextToRtl("ب") },
                      { text:"B" },
                    ],
                    style: ["center"],
                  },
                  {
                    stack:[
                      { text:convertTextToRtl("ج") },
                      { text:"C" },
                    ],
                    style: ["center"],
                  },
                  {}
                ],
                [
                  {text:"\n"},{},{},{},{},{},{}
                ],
                [
                  {text:"\n"},{},{},{},{},{},{}
                ],
                [
                  {text:"\n"},{},{},{},{},{},{}
                ],
                [
                  {text:"\n"},{},{},{},{},{},{}
                ]
              ],
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
                    text:"Page 15",
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

module.exports = Page_15