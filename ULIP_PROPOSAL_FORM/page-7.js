const Page_7 = ({
  convertTextToRtl,
  innerTableLayouts
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 9,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            layout: innerTableLayouts['zeroPadding'],
            table: {
              widths: [
                "auto", 
                "*",
                "*",
                "*",
                "*",
                "*",
              ],
              body: [
                [
                  {
                    text: 'CRS Self-Certification Form ',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 6
                  },
                  {},{},{},{},{}
                ],
                [
                  {
                    text: 'Please complete and sign this form. For Joint Life Policies, each life assured will have to complete a separate form',
                    colSpan: 6
                  },
                  {},{},{},{},{}
                ],
                [
                  { text: 'Full Name', style:["cellHeader"] },
                  { text: '', colSpan:3 },
                  {},{},
                  { text: "Date of Birth", style:["cellHeader"]},
                  { text: "DD / MM / YYYY", style:["readOnly", "center"]}
                ],
                [
                  { text: "Place of Birth", style:["cellHeader"]},
                  { text: ""},
                  { text: "Country", style:["cellHeader"]},
                  { text: ""},
                  { text: "Nationality", style:["cellHeader"]},
                  { text: ""}
                ],
                [
                  { text: 'Present Country of Residence', style:["cellHeader"], colSpan:2 },{},
                  { text: '', colSpan:4 },
                  {},{},{}
                ],
                [
                  { text: 'Are you a tax resident in any other country outside UAE?', style:["cellHeader"], colSpan:3 },{},{},
                  { text: 'Yes\t\t\t\t\t\t\t\t\t\t\tNo     ', colSpan:3 },
                  {},{}
                ],
                [
                  { 
                    text: [
                      {text: '(For details on tax residency of a country please refer to OECD site'},
                      {
                        text: 'http://www.oecd.org/tax/automatic-exchange/crs-implementation-and- assistance/tax-residency', 
                        link: "http://www.oecd.org/tax/automatic-exchange/crs-implementation-and- assistance/tax-residency",
                        style:{"color": "blue"}
                      },
                      {text: ')'}
                    ], colSpan:6, style: {fontSize: 7.5},
                    border: [true, true, true, false]
                  },  
                  {},{},{},{},{}
                ],
                [
                  { 
                    text: 'If  Yes Please complete the following table indicating:', 
                    border: [true, false, false, false],
                    colSpan:3 
                  },{},{},
                  { 
                    text: [
                      {text: 'Where the Account Holder is tax resident and the Account Holder’s TIN\n'},
                      {text: '(Tax Identification Number e.g., PAN) for each country/jurisdiction indicated.'}
                    ], 
                    style:{fontSize: 7.5}, 
                    border: [false, false, true, false],
                    colSpan:3 
                  },{},{}
                ],
                [
                  { 
                    text: [
                      {text: 'If a TIN is unavailable, please provide the appropriate reason'},
                      {text: ' A, B', style:{"bold":true}},
                      {text: ' or '},
                      {text: 'C were indicated below:', style:{"bold":true}}
                    ], 
                    border: [true, false, true, false],
                    colSpan:6
                  },{},{},{},{},{}
                ],
                [
                  { 
                    text: "Reason A:", 
                    style: ["right"],
                    border: [true, false, false, false]
                  },
                  {
                    text: "The country/jurisdiction where the Account Holder is resident does not issue TINs to its residents, ", 
                    border: [false, false, true, false],
                    colSpan:5
                  },{},{},{}
                ],
                [
                  { 
                    text: "Reason B:", 
                    style: ["right"],
                    border: [true, false, false, false]
                  },
                  {
                    text: "The Account Holder is otherwise unable to obtain a TIN or equivalent number (Please explain) ", 
                    border: [false, false, true, false],
                    colSpan:5
                  },{},{},{}
                ],
                [
                  { 
                    text: "Reason C:", 
                    style: ["right"],
                    border: [true, false, false, false]
                  },
                  {
                    text: "No TIN is required. (Note. Only select this reason if the domestic law of the relevant jurisdiction does not require the collection of the TIN issued by such jurisdiction. ", 
                    border: [false, false, true, false],
                    colSpan:5
                  },{},{},{}
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout: innerTableLayouts['zeroPadding'],
            table: {
              widths: [
                10, 
                80,
                "auto",
                40,
                40,
                40,
                220,
              ],
              body: [
                [
                  {
                    colSpan: 2, 
                    rowSpan: 2, 
                    text: 'Country / Jurisdiction of Tax Residence'
                  }, {}, 
                  {
                    rowSpan: 2, 
                    text: 'TIN or Equivalent'
                  },
                  {
                    colSpan: 3,
                    text: 'If no TIN available tick the reason'
                  },{},{},
                  { 
                    rowSpan: 2, 
                    text: 'Please explain in the following boxes why you are unable to obtain a TIN if you selected Reason B above.'
                  }
                ],
                [
                  {},{},{},
                  {text: 'A', style:["center"]},
                  {text: 'B', style:["center"]},
                  {text: 'C', style:["center"]},
                  {}
                ],
                [
                  {text: '1', style:["center"]},
                  {},{},{},{},{},{}
                ],
                [
                  {text: '2', style:["center"]},
                  {},{},{},{},{},{}
                ],
                [
                  {text: '3', style:["center"]},
                  {},{},{},{},{},{}
                ],
                [
                  {text: '4', style:["center"]},
                  {},{},{},{},{},{}
                ],
                [
                  {
                    text:[
                      {text:"Declaration:\n", style:{"bold":true}},
                      {text:"I hereby confirm the information provided above is true, accurate, and complete. Subject to applicable local laws, I hereby consent for the  LIC  (International)  BSC(C)  or  any  of  its  affiliates  (including branches) (collectively “the Company”) to share my information with domestic or overseas regulators or tax authorities where necessary to establish our tax liability in any jurisdiction. \n"},
                      {text:"I  agree  and  undertake  to  notify  the  Company  within  30  calendar  days  if  there  is  a  change  in  any  information which I have provided to the Company. "}
                    ],
                    colSpan: 7,
                    border: [true,true,true,false]
                  },{},{},{},{},{},{}
                ],
                [
                  {text: '', colSpan:7, border: [true,false,true,false] },{},{},{},{},{},{}
                ],
                [
                  {text: 'Date:', style:["left"], colSpan: 4, border: [true, false,false,true]},{},{},{},
                  {text: 'Signature of Declarant', style:["right", "readOnly"], colSpan: 3, border: [false, false,true,true]},{},{}
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout: innerTableLayouts['zeroPadding'],
            table: {
              heights: 13,
              widths: [
                50, 
                "*", 
                "*", 
                "*", 
                "*"
              ],
              body: [
                [
                  {
                    text: [
                      {text:"FORM “A”\n"},
                      {text:"FATCA – Foreign Account Tax Compliance Act"},
                    ],
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 5
                  },
                  {},{},{},{}
                ],
                [
                  { 
                    text: [
                      {text:"The  Foreign  Account Tax  Compliance  Act  (FATCA)  is  a  United  States  (US)  law aimed at  foreign  financial  institutions  and  other financial intermediaries to prevent tax evasion by US citizens and residents through use of offshore accounts. The FATCA provisions are applicable to all business issued on or after 1 July 2014, therefore you are required to complete the questions below. \n"},
                      {text:"This form is mandatory for all nationalities. The information you give will be used in conjunction with your application form."}
                    ], 
                    style:["justify", "cellHeader"], 
                    colSpan: 5 
                  },
                  {},{},{},{}
                ]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout: innerTableLayouts['zeroPadding'],
            table: {
              widths: [
                10,10,"auto","auto"
              ],
              body: [
                [
                  {
                    text: '1. Customer Details',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 4
                  },
                  {},{},{}
                ],
                [
                  {text:'A.',style:["cellHeader", "center"]},
                  {text:'Application No / Policy No', style:["cellHeader", "left"], colSpan:2},
                  {},{}
                ],
                [
                  {text:'B.',style:["cellHeader", "center"]},
                  {text:'Name', style:["cellHeader", "left"], colSpan:2},{},
                  {text:''}
                ],
                [
                  {text:'C.',style:["cellHeader", "center"]},
                  {text:'Nationality (s)', style:["cellHeader", "left"], colSpan:2},{},
                  {text:''}
                ],
                [
                  {text:'D.',style:["cellHeader", "center"]},
                  {text:'Country of Birth', style:["cellHeader", "left"], colSpan:2},{},
                  {text:''}
                ],
                [
                  {
                    text:'E.',rowSpan:4,
                    style:["cellHeader", "center"]
                  },
                  {
                    text:[
                      {text:"If you are a US* national either by citizenship or residency, please respond to the following questions.\n"},
                      {text:"*The definition of US includes the 50 United States of America, the District of Columbia, Guam, Puerto Rico, US Virgin Islands, American Samoa, and the Northern Mariana Islands)"}
                    ],style:["cellHeader", "left"], colSpan:3
                  },{},{}
                ],
                [
                  {},
                  { text:"I.",style:["cellHeader", "center"]},
                  { text:"Are you a US Tax Payer?",style:["cellHeader", "left"]},
                  { text:"Yes\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo"}
                ],
                [
                  {},
                  { text:"II.",style:["cellHeader", "center"]},
                  { text:"Are you a US Citizen?",style:["cellHeader", "left"]},
                  { text:"Yes\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo"}
                ],
                [
                  {},
                  { text:"III.",style:["cellHeader", "center"]},
                  { text:"Do you have a US based Telephone No?",style:["cellHeader", "left"]},
                  { text:"Yes\t\t\t\t\t\t\t\t\t\t\t\t\t\tNo"}
                ],
                [
                  {text:'F.',style:["cellHeader", "center"]},
                  {text:'Where are you Resident for TAX purposes?', style:["cellHeader", "left"], colSpan:2},{},
                  {text:''}
                ],
                [
                  {text:'G.',style:["cellHeader", "center"]},
                  {text:'Country / Countries of Tax Residence:', style:["cellHeader", "left"], colSpan:2},{},
                  {text:''}
                ],
                [
                  {text:'H.',style:["cellHeader", "center"]},
                  {text:'Tax Reference Number(s):', style:["cellHeader", "left"], colSpan:2},{},
                  {text:''}
                ],
                [
                  {text:'I.',style:["cellHeader", "center"]},
                  {
                    text:'If you have answered ‘Yes’ to any of the above questions please complete requested additional details on Form B. If all the answers are ‘No’, simply read and sign the declaration below.', style:["cellHeader", "justify"], 
                    colSpan:3
                  },{},{}
                ],
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout: innerTableLayouts['zeroPadding'],
            table: {
              widths: [
                "*",
                "*"
              ],
              layout: "innerTableLayout",
              body: [
                [
                  {
                    text: '2. Declaration.',
                    style: ['header','defaultStyle',{"fontSize": 9}], colSpan:2
                  },{}
                ],
                [
                  { 
                    text: "I {name} acknowledge and declare that the above-mentioned information is correct and true and complete to the best of my knowledge and belief. I agree to provide supporting evidence and provide updates in case any of the aforementioned information changes. In case Life Insurance Corporation (International) B.S.C© (“the Insurer”) has any reason to believe that the disclosed information is incorrect, the Insurer reserves the right to take suitable action against me. ", 
                    colSpan:2,
                    style: ["justify", "cellHeader"]
                  },{}
                ],
                [
                  { 
                    text: [
                      {text:"Place:\n"},
                      {text:"Date:"}
                    ],
                  },
                  { 
                    text: [
                      {text:"\n"},
                      {text:"Signature of the Consultant"}
                    ], 
                    style:["readOnly","right"], 
                  }
                ]
              ],
            }
          }
        ]
      ]
    }
  }
}

module.exports = Page_7