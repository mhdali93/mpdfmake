const Page_1 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 8.5,
    table : {
      widths : [220, '*'],
      body : [
        [
          {
            border: [false, false, false, false],
            table: {
              body: [
                [
                  {
                    border: [false, false, false, false],
                    image : "./assets/images/logo1.png",
                    width: 130
                  }
                ],
                [
                  {
                    border: [false, false, false, false],
                    text: 'Proposal Form',
                    style: {"fontSize": 22, font: 'Times'},
                    margin: [0,7,0,0]
                  }
                ],
                [
                  {
                    border: [false, false, false, false],
                    text: 'Unit Linked Life Insurance',
                    style: {"fontSize": 14, font: 'Times'},
                    margin: [0,-3,0,0]
                  }
                ],
              ]
            }
          },
          {
            border: [false, false, false, false],
            table: {
              widths : [120, '*'],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text : "Life Insurance Corporation (International) B.S.C.(c)",
                    width: 130,
                    style: {"bold": true, "fontSize": 12},
                    colSpan : 2,
                    align: "left"
                  },
                  {}
                ],
                [
                  {
                    text: 'For Office use only',
                    margin: [0, 0, 0, 0],
                    style: ['header','defaultStyle'],
                    colSpan: 2
                  },{}
                ],
                [
                  {
                    text: 'Agents Name & Code No',
                    fillColor: '#C5D9F0'
                  },
                  {
                    text: '',
                  },
                ],
                [
                  {
                    text: 'Chief Agent Name & Code',
                    style: 'cellHeader'
                  },
                  {
                    text: '',
                  },
                ],
                [
                  {
                    text: 'Broker / Bank Name & Code',
                    style: 'cellHeader'
                  },
                  {
                    text: '',
                  },
                ],
                [
                  {
                    text: 'Inward No & Date',
                    style: 'cellHeader'
                  },
                  {
                    text: '',
                  },
                ],
                [
                  {
                    text: 'Proposal Number',
                    style: 'cellHeader'
                  },
                  {
                    text: '',
                  },
                ],
              ]
            }
          },
        ],
        [ 
          {
            border: [false, false, false, false],
            canvas: [
              {
                type: 'line',
                x1: 0, y1: 0,
                x2: 555, y2: 0,
                lineWidth: 3
              },

            ],
            colSpan: 2
          },
          {}
        ],
        [
          {
            border: [false, false, false, false],
            text:"Please complete this form using black or blue ink. Write in BLOCK LETTERS and tick the relevant items. If your application is incomplete, it might cause a delay. Kindly ensure that you submit a fully filled form together with the signed illustration. The proposed life assured and policy owner are required to disclose all information requested. Please retain a copy of this proposal form and other correspondences with us for your future reference.",
            colSpan: 2,
            style: ["justify", {fontSize: 8}]
          },
          {}
        ],
        [
          {
            border: [false, false, false, false],
            colSpan: 2,
            table: {
              heights: 13,
              widths: [9,80,"*","*","*","*","*","*","*","*",60,"*","*","*","*","*","*",50,"*","*","*","*","*","*"],
              body: [
                [
                  {
                    text: '1. Details of Proposer / Life to be Assured ',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 24 
                  },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'A.', style:["center", "cellHeader"] },
                  { text: 'Full Name', style:["left", "cellHeader"] },
                  { text: 'First name', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Last name', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Mr.', style:["left", "cellHeader"], colSpan: 2 },
                  {},
                  { text: 'Mrs.', style:["left", "cellHeader"], colSpan: 2 },
                  {},
                  { text: 'Ms.', style:["left", "cellHeader"], colSpan: 2 },
                  {}
                ],
                [
                  { text: 'B.', style:["center", "cellHeader"] },
                  { text: 'Father Name', style:["left", "cellHeader"] },
                  { text: 'First name', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Last name', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Male', style:["left", "cellHeader"], colSpan: 3 },
                  {},{},
                  { text: 'Female', style:["left", "cellHeader"], colSpan: 3 },
                  {},{}
                ],
                [
                  { text: 'C.', style:["center", "cellHeader"] },
                  { text: 'Nationality', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Place of Birth', style:["left", "cellHeader"] },
                  { text: '', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'D.', style:["center", "cellHeader"] },
                  { text: 'Date of Birth', style: ["left", "cellHeader"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Age', style: ["left", "cellHeader"] },
                  { text: '', colSpan: 7 },
                  {},{},{},{},{},{},
                  { text: 'years', style:["left", "cellHeader"], colSpan: 6 },
                  {},{},{},{},{}
                ],
                [
                  { text: 'E.', style:["center", "cellHeader"] },
                  { text: 'Emirates ID Number', style:["left", "cellHeader"] },
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Issue Date', style:["left", "cellHeader"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Expiry Date',style:["left", "cellHeader"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                ],
                [
                  { text: 'F.', style:["center", "cellHeader"] },
                  { text: 'Passport Number', style:["left", "cellHeader"] },
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Issue Date', style:["left", "cellHeader"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Expiry Date',style:["left", "cellHeader"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'D', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'M', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                  { text: 'Y', style: ["left", "readOnly"] },
                ],
                [
                  { text: 'G.', style:["center", "cellHeader"] },
                  { text: 'Qualification', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Annual Income', style:["left", "cellHeader"] },
                  { text: '', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'H.', style:["center", "cellHeader"] },
                  { text: 'Marital Status', style:["left", "cellHeader"]},
                  { text: 'Single', style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { text: 'Married', style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { text: 'Widow', style:["left", "cellHeader"], colSpan:4 },
                  {},{},{},
                  { text: 'Divorced', style: ["left", "cellHeader"], colSpan: 10 },
                  {},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'I.', style:["center", "cellHeader"] },
                  { text: 'Email Address', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'Address', style:["left", "cellHeader"], colSpan: 24 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'J.', style:["center", "cellHeader"] },
                  { text: 'Residential', style:["left", "cellHeader"]},
                  { text: 'Building:', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'Street:', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'PO Box.', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'City: ', style:["left", "readOnly"] },
                  { text: 'Country:', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Mobile', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Telephone', style:["left", "cellHeader"] },
                  { text: '', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'K.', style:["center", "cellHeader"] },
                  { text: 'Office', style:["left", "cellHeader"]},
                  { text: 'Building:', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'Street:', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'PO Box.', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'City: ', style:["left", "readOnly"] },
                  { text: 'Country:', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Mobile', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Telephone', style:["left", "cellHeader"] },
                  { text: '', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'L.', style:["center", "cellHeader"] },
                  { text: 'Home Country', style:["left", "cellHeader"]},
                  { text: 'Building:', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'Street:', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'PO Box.', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'City: ', style:["left", "readOnly"] },
                  { text: 'Country:', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Mobile', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Telephone', style:["left", "cellHeader"] },
                  { text: '', style: ["left", "readOnly"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'M. ', style:["center", "cellHeader"] },
                  { text: 'Correspondence Address', style:["left", "cellHeader"]},
                  { text: 'Residential                        Office', style: ["left", "cellHeader"], colSpan: 9 },
                  {},{},{},{},{},{},{},{},
                  { text: '', style: ["left", "readOnly"], colSpan: 13 },
                  {},
                  {},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'N.', style:["center", "cellHeader"] },
                  { text: 'Occupation', style:["left", "cellHeader"]},
                  { text: 'Salaried', style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { text: 'Business', style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { text: 'Self Employed', style:["left", "cellHeader"], colSpan:6 },
                  {},{},{},{},{},
                  { text: 'Other', style: ["left", "cellHeader"], colSpan: 8 },
                  {},{},{},{},{},{},{}
                ],
                [
                  { text: 'O.', style:["center", "cellHeader"] },
                  { text: 'Job Title', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Length of Service', style:["left", "cellHeader"], colSpan:4 },
                  {},{},{},
                  { text: 'years', style: ["right"], colSpan: 10 },
                  {},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'P.', style:["center", "cellHeader"] },
                  { text: 'Company Name', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'Q.', style:["center", "cellHeader"] },
                  { text: 'Name of Business', style:["left", "cellHeader"]},
                  { text: '', style: ["left", "readOnly"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'R.', style:["center", "cellHeader"] },
                  { text: 'Physical Measurements', style:["left", "cellHeader"]},
                  { text: 'Height (In Cms)', style: ["left", "cellHeader"], colSpan: 5 },
                  {},{},{},{},
                  { text: '', style: ["left"], colSpan: 4 },
                  {},{},{},
                  { text: 'Weight (In Kgs)', style:["left", "cellHeader"], colSpan:6 },
                  {},{},{},{},{},
                  { text: '', style: ["left"], colSpan: 7 },
                  {},{},{},{},{},{}
                ],
                [
                  { text: 'S.', style:["center", "cellHeader"] },
                  { text: 'Are you a Politically Exposed Person*?', style:["left", "cellHeader"], colSpan: 7 },
                  {},{},{},{},{},{},
                  { text: 'Yes', style: ["left", "cellHeader"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'No', style:["left", "cellHeader"], colSpan:8 },
                  {},{},{},{},{}
                ],
              ],
            },
          },
          {}
        ],
        [
          {
            border: [false, false, false, false],
            text:"* A Politically Exposed Person is a natural person, who is currently in public office or who left public office within the last two years, such as, heads  of  state  or  government;  senior  government,  judicial,  legislative,  or  military  officials;  senior executives  of  state-owned  corporations;  high  ranking  politicians; and important political officials at the national level.",
            colSpan: 2,
            style: ["justify", {fontSize: 8}]
          },
          {}
        ]
      ]
    }
  }
}

module.exports = Page_1