const Page_3 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 8,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                10, 
                125,
                125,
                125,
                125 
              ],
              layout: "innerTableLayout",
              body: [
                [
                  {
                    text: '4. Beneficiaries (shared equally unless otherwise stated)',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 5
                  },
                  {},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Primary Beneficiaries', style:["center", "cellHeader"]},
                  { text: 'Details of Nominee 1', style: ["center", "cellHeader"]},
                  { text: 'Details of Nominee 2', style:["center", "cellHeader"] },
                  { text: [
                      {text: 'Details of Appointee\n'},
                      {text: '(In case of Nominee is minor)\n', style:{fontSize: 7}}
                    ], 
                  style: ["center", "cellHeader"] },
                ],
                [
                  { text: 'A.', style:["center", "cellHeader"] },
                  { text: 'Name/s', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: ''}
                ],
                [
                  { text: 'B.', style:["center", "cellHeader"] },
                  { text: 'Gender / Nationality ', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: ''}
                ],
                [
                  { text: 'C.', style:["center", "cellHeader"] },
                  { text: 'Date of Birth / Age', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: ''}
                ],
                [
                  { text: 'D.', style:["center", "cellHeader"] },
                  { text: 'Relationship / % Share', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: ''}
                ],
                [
                  { text: 'E.', style:["center", "cellHeader"] },
                  { text: 'Passport No. / Emirates ID', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: ''}
                ],
                [
                  { text: 'F.', style:["center", "cellHeader"] },
                  { text: 'Mobile No. / Telephone No.', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: ''}
                ],
                [
                  { text: 'G.', style:["center", "cellHeader"] },
                  { text: 'Email Address', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: ''}
                ],
                [
                  { text: 'H.', style:["center", "cellHeader"] },
                  { text: 'Address', style:["left", "cellHeader"]},
                  { text: ''},
                  { text: ''}, 
                  { text: [
                      {text: '\n'},
                      {text: '\n'},
                      {text: 'Signature of Appointee\n', style:["center", "readOnly"]},
                    ],
                  }
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin:[0,5],
            fontSize: 7.5,
            table: {
              heights: 8,
              layout: "innerTableLayout",
              widths: [
                9, 
                "*",
                "*",
                "*",
                "*",
                60,
                170
              ],
              body: [
                [
                  {
                    text: '5. Other Proposal / Previous Policies Details',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 7
                  },
                  {},{},{},{},{},{}
                ],
                [
                  { text: 'A.', style:["center", "cellHeader"] },
                  { text: 'Is your life now being proposed for another assurance?', style:["left", "cellHeader"], colSpan: 4},
                  {},{},{},
                  { text: 'Yes / No'},
                  { text: 'If YES give details', style: ["readOnly"]}
                ],
                [
                  { text: 'B.', style:["center", "cellHeader"] },
                  { text: 'Is there any application for revival of policy on your life under consideration?', style:["justify", "cellHeader"], colSpan: 4},
                  {},{},{},
                  { text: 'Yes / No'},
                  { text: 'If YES give details', style: ["readOnly"]}
                ],
                [
                  { text: 'C.', style:["center", "cellHeader"] },
                  { text: 'Has a proposal or revival of policy on your life made to the company ever been Withdrawn / deferred / dropped / declined / Accepted with Extra Premium /lien / on terms otherwise', style:["justify", "cellHeader"], colSpan: 4},
                  {},{},{},
                  { text: 'Yes / No'},
                  { text: 'If YES give details', style: ["readOnly"]}
                ],
                [
                  { text: 'D.', style:["center", "cellHeader"] },
                  { text: 'Previous Policies Details', style:["left", "cellHeader"], colSpan: 6},
                  {},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Policy No', style:["center", "cellHeader"]},
                  { text: 'Sum Assured', style:["center", "cellHeader"]},
                  { text: 'Plan & Term', style:["center", "cellHeader"]},
                  { text: 'DOC', style:["center", "cellHeader"]},
                  { text: 'Medical/Non-Med', style: ["center", "cellHeader"]},
                  { text: 'Status / Date of Last Premium Paid / Surrendered', style: ["center", "cellHeader"]}
                ],
                [
                  { text: '', style:["center", "cellHeader"], border: [true, true, true, false] },
                  { text: '', border: [true, true, true, false]},
                  { text: '', border: [true, true, true, false]},
                  { text: '', border: [true, true, true, false]},
                  { text: '', border: [true, true, true, false]},
                  { text: '', border: [true, true, true, false]},
                  { text: '', border: [true, true, true, false]}
                ],
                [
                  { text: '', style:["center", "cellHeader"], border: [true, false, true, false] },
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]}
                ],
                [
                  { text: '', style:["center", "cellHeader"], border: [true, false, true, false] },
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]}
                ],
                [
                  { text: '', style:["center", "cellHeader"], border: [true, false, true, false] },
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]}
                ],
                [
                  { text: '', style:["center", "cellHeader"], border: [true, false, true, false] },
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]},
                  { text: '', border: [true, false, true, false]}
                ],
                [
                  { text: '', style:["center", "cellHeader"], border: [true, false, true, true] },
                  { text: '', border: [true, false, true, true]},
                  { text: '', border: [true, false, true, true]},
                  { text: '', border: [true, false, true, true]},
                  { text: '', border: [true, false, true, true]},
                  { text: '', border: [true, false, true, true]},
                  { 
                    text: 'for more policies attach separate sheet', 
                    border: [true, false, true, true],
                    style: ["center", "readOnly"]
                  }
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            // margin:[0,],
            table: {
              // heights: 13,l
              lineHeight: 0,
              layout: "innerTableLayout",
              margin: [ 0, 0, 0, 0 ],
              widths: [
                10, 
                "*",
                70,
                150
              ],
              body: [
                [
                  {
                    text: '6. Health details of Life to be Assured',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 4
                  },
                  {},{},{}
                ],
                [
                  { text: 'Personal History', style:["center", "cellHeader"], colSpan:2},
                  {},
                  { text: 'Answer Yes or No', style:["center", "cellHeader"]},
                  { text: 'If Yes give full Details', style:["center", "cellHeader"]}
                ],
                [
                  { text: 'A.', style:["center", "cellHeader"] },
                  { text: 'During last 5 years have you consulted a Medical Practitioner for any ailment requiring treatment for more than a week?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'B.', style:["center", "cellHeader"] },
                  { text: 'Have you ever been admitted to any hospital for treatment or operation?', style:["justify", "cellHeader"]},
                  { columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'C.', style:["center", "cellHeader"] },
                  { text: 'Have you remained absent from place of work on health grounds during the last 5 years?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'D.', style:["center", "cellHeader"] },
                  { text: 'Are you suffering from or have you ever suffered from High/low Blood Pressure, Rheumatic fever, Chest Pain, Breathing, Palpitation, Heart diseases, Lungs, Brain, or Nervous system? ', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'E.', style:["center", "cellHeader"] },
                  { text: 'Are you suffering from or have you ever suffered from Diabetes, TB, Cancer, Gout, enlarged glands or Tumors, Epilepsy, Hernia, Leprosy or any other disease of Stomach, Liver, Spleen, Gall Bladder, Pancreas, Kidney, Prostate, Urinary system?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'F.', style:["center", "cellHeader"] },
                  { text: 'Are you suffering from or have you ever suffered from Hydrocele, Fistula, Varicose Veins, Skin eruption, Filariasis, Goiter, Gonorrhea, Syphilis or any other venereal disease?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'G.', style:["center", "cellHeader"] },
                  { text: 'Are you suffering from or have you ever suffered from any disease of ear, nose throat or eyes including defective sight or hearing and discharge from ears?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'H.', style:["center", "cellHeader"] },
                  { text: 'Do you use or ever used Alcohol / Narcotics / Tobacco / any other drugs?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'I.', style:["center", "cellHeader"] },
                  { text: 'Have you ever received advice/treatment for Hepatitis B or AIDS condition?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'J.', style:["center", "cellHeader"] },
                  { text: 'Has any of your relations, living or dead suffered from any hereditary or infectious disease like diabetes, insanity, epilepsy, gout, asthma, cancer, tuberculosis, leprosy etc.? ', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'K.', style:["center", "cellHeader"] },
                  { text: 'Have you any bodily defect or deformity? If so, give details.', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'L.', style:["center", "cellHeader"] },
                  { text: 'Did you ever have any operation, accident, or injury?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'M.', style:["center", "cellHeader"] },
                  { text: 'Have you ever had ECG, X-Ray, Screening blood/urine/stool examination?', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'N.', style:["center", "cellHeader"] },
                  { text: 'Has your weight changed in the past year? If yes state with reason', style:["justify", "cellHeader"]},
                  {  columns:[
                    { text:"Yes"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t"},
                    { text:"No"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ]},
                  { text: '' }
                ],
                [
                  { text: 'O.', style:["center", "cellHeader"] },
                  { text: 'What has been your usual state of Health?', style:["justify", "cellHeader"]},
                  { text: '', colSpan: 2},{}
                ]
              ],
            }
          }
        ],
      ]
    }
  }
}

module.exports = Page_3