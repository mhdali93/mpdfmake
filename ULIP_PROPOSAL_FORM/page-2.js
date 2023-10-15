const Page_2 = ({
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
            table: {
              heights: 13,
              widths: [
                9, 
                80, 
                "*", 
                "*", 
                "*", 
                "*", 
                "*", 
                "*", 
                "*", 
                "*", 
                57, 
                "*", 
                "*", 
                "*", 
                "*", 
                "*", 
                "*",
                47,
                "*", 
                "*", 
                "*", 
                "*", 
                "*", 
                "*"
              ],
              body: [
                [
                  {
                    text: '2. Details of Life to be Assured (Applicable if different from the Proposer) ',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 24 
                  },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'A.', style:["center", "cellHeader"] },
                  { text: 'Full Name', style:["left", "cellHeader"] },
                  { text: 'First name', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Last name', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { 
                    columns:[
                      { text:"Mr"},
                      {
                        image : "./assets/images/check.png",
                        width: 10,
                      }
                    ], 
                    style:["left", "cellHeader"], colSpan: 2 
                  },
                  {},
                  { 
                    columns:[
                      { text:"Mrs"},
                      {
                        image : "./assets/images/check.png",
                        width: 10,
                      }
                    ], 
                    style:["left", "cellHeader"], colSpan: 2 
                  },
                  {},
                  { 
                    columns:[
                      { text:"Ms"},
                      {
                        image : "./assets/images/check.png",
                        width: 10,
                      }
                    ], 
                    style:["left", "cellHeader"], colSpan: 2 
                  },
                  {}
                ],
                [
                  { text: 'B.', style:["center", "cellHeader"] },
                  { text: 'Father Name', style:["left", "cellHeader"] },
                  { text: 'First name', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Last name', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { 
                    columns:[
                      { text:"Male"},
                      {
                        image : "./assets/images/check.png",
                        width: 10,
                      }
                    ], 
                    style:["left", "cellHeader"], colSpan: 3 
                  },
                  {},{},
                  { 
                    columns:[
                      { text:"Female"},
                      {
                        image : "./assets/images/check.png",
                        width: 10,
                      }
                    ], 
                    style:["left", "cellHeader"], colSpan: 3 
                  },
                  {},{}
                ],
                [
                  { text: 'C.', style:["center", "cellHeader"] },
                  { text: 'Nationality', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Place of Birth', style:["left", "cellHeader"] },
                  { text: '', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'D.', style:["center", "cellHeader"] },
                  { text: 'Date of Birth', style: ["left", "cellHeader"] },
                  { text: 'D', style: ["left"] },
                  { text: 'D', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Age', style: ["left", "cellHeader"] },
                  { text: '', colSpan: 7 },
                  {},{},{},{},{},{},
                  { text: 'years', style:["left", "cellHeader"], colSpan: 6 },
                  {},{},{},{},{}
                ],
                [
                  { text: 'E.', style:["center", "cellHeader"] },
                  { text: 'Emirates ID Number', style:["left", "cellHeader"] },
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Issue Date', style:["left", "cellHeader"] },
                  { text: 'D', style: ["left"] },
                  { text: 'D', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Expiry Date',style:["left", "cellHeader"] },
                  { text: 'D', style: ["left"] },
                  { text: 'D', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                ],
                [
                  { text: 'F.', style:["center", "cellHeader"] },
                  { text: 'Passport Number', style:["left", "cellHeader"] },
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Issue Date', style:["left", "cellHeader"] },
                  { text: 'D', style: ["left"] },
                  { text: 'D', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Expiry Date',style:["left", "cellHeader"] },
                  { text: 'D', style: ["left"] },
                  { text: 'D', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'M', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                  { text: 'Y', style: ["left"] },
                ],
                [
                  { text: 'G.', style:["center", "cellHeader"] },
                  { text: 'Qualification', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Annual Income', style:["left", "cellHeader"] },
                  { text: '', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'H.', style:["center", "cellHeader"] },
                  { text: 'Marital Status', style:["left", "cellHeader"]},
                  { columns:[
                    { text:"Single"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { columns:[
                    { text:"Married"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { columns:[
                    { text:"Widow"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style:["left", "cellHeader"], colSpan:4 },
                  {},{},{},
                  { columns:[
                    { text:"Divorced"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 10 },
                  {},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'I.', style:["center", "cellHeader"] },
                  { text: 'Relation with Proposer', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'J.', style:["center", "cellHeader"] },
                  { text: 'Email', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'Address (if different from Proposed Life Assured)', style:["left", "cellHeader"], colSpan: 24 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'K.', style:["center", "cellHeader"] },
                  { text: 'Residential', style:["left", "cellHeader"]},
                  { text: 'Building:', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'Street:', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'PO Box.', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'City: ', style:["left"] },
                  { text: 'Country:', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Mobile', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Telephone', style:["left", "cellHeader"] },
                  { text: '', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'L.', style:["center", "cellHeader"] },
                  { text: 'Office', style:["left", "cellHeader"]},
                  { text: 'Building:', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'Street:', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'PO Box.', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'City: ', style:["left"] },
                  { text: 'Country:', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Mobile', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Telephone', style:["left", "cellHeader"] },
                  { text: '', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'M.', style:["center", "cellHeader"] },
                  { text: 'Home Country', style:["left", "cellHeader"]},
                  { text: 'Building:', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'Street:', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: '', style:["left", "cellHeader"]},
                  { text: 'PO Box.', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'City: ', style:["left"] },
                  { text: 'Country:', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Mobile', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Telephone', style:["left", "cellHeader"] },
                  { text: '', style: ["left"], colSpan: 13 },
                  {},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'N. ', style:["center", "cellHeader"] },
                  { text: 'Correspondence Address', style:["left", "cellHeader"]},
                  { columns:[
                    { text:"Residential"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    },
                    { text: "\t\t\t\t\t"},
                    { text:"Office"},
                    {
                      image : "./assets/images/uncheck.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 9 },
                  {},{},{},{},{},{},{},{},
                  { text: '', style: ["left"], colSpan: 13 },
                  {},
                  {},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'O.', style:["center", "cellHeader"] },
                  { text: 'Occupation', style:["left", "cellHeader"]},
                  { columns:[
                    { text:"Salaried"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { columns:[
                    { text:"Business"},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 4 },
                  {},{},{},
                  { columns:[
                    { text:'Self Employed'},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style:["left", "cellHeader"], colSpan:6 },
                  {},{},{},{},{},
                  { columns:[
                    { text:'Other'},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 8 },
                  {},{},{},{},{},{},{}
                ],
                [
                  { text: 'P.', style:["center", "cellHeader"] },
                  { text: 'Job Title', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { text: 'Length of Service', style:["left", "cellHeader"], colSpan:4 },
                  {},{},{},
                  { text: 'years', style: ["right"], colSpan: 10 },
                  {},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'Q.', style:["center", "cellHeader"] },
                  { text: 'Company Name', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'R.', style:["center", "cellHeader"] },
                  { text: 'Name of Business', style:["left", "cellHeader"]},
                  { text: '', style: ["left"], colSpan: 22 },
                  {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
                ],
                [
                  { text: 'S.', style:["center", "cellHeader"] },
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
                  { text: 'T.', style:["center", "cellHeader"] },
                  { text: 'Are you a Politically Exposed Person*?', style:["left", "cellHeader"], colSpan: 7 },
                  {},{},{},{},{},{},
                  { columns:[
                    { text:'Yes'},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style: ["left", "cellHeader"], colSpan: 8 },
                  {},{},{},{},{},{},{},
                  { columns:[
                    { text:'No'},
                    {
                      image : "./assets/images/check.png",
                      width: 10,
                    }
                  ], style:["left", "cellHeader"], colSpan:8 },
                  {},{},{},{},{}
                ],
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            margin: [0,15],
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
                    text: '3. Declaration ',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 5
                  },
                  {},{},{},{}
                ],
                [
                  { 
                    border: [true, false, true, false],
                    text: 'I/We hereby declare that I/We am/are in good health and not suffering from any physical or mental or psychiatric diseases. I/We do not suffer from cancer or tumor, disease of heart, lungs, kidneys, liver, stomach, or intestines. Further, I/We also confirm that I/We have  never participated nor intend to participate in any hazardous sports or  activities. The statements above are complete and true. I/We  accept  that  this  declaration  shall  constitute  part  of  my  application  for  the  life  insurance  linked  to  my  investment.  I/We acknowledge that failure to disclose any material health information known to me on the date of signing this declaration   shall invalidate the contract from its inception. Life Insurance Corporation  (International)  B.S.C.(c) shall not be liable for the claim on account of my death, the cause of which was known prior to my/our signing this application for the life insurance cover. \n \n', 
                    style:["justify", "cellHeader"], 
                    colSpan: 5 
                  },
                  {},{},{},{}
                ],
                [
                  {
                    border: [true, false, false, true],
                    text: [
                      {text: '\n', style: ["center"]},
                      {text: 'Date\n', style: ["center"]},
                      {text: 'Place', style: ["center"]}
                    ],
                    style:["cellHeader"] 
                  },
                  {
                    border: [false, false, false, true],
                    text: [
                      {text: '\n'},
                      {text: '\n'},
                      {text: '\n'},
                      {text: ''}
                    ],
                    style: ['readOnly','center'], 
                  },
                  {
                    border: [false, false, false, true],
                    text: [
                      {text: '\n', style: ["center"]},
                      {text: '\n', style: ["center"]},
                      {text: 'Signature', style: ["center"]}
                    ],
                    style:["cellHeader"] 
                  },
                  {
                    border: [false, false, false, true],
                    text: [
                      {text: '\n'},
                      {text: '\n'},
                      {text: 'Proposer\n'},
                      {text: '\n'}
                    ],
                    style: ['readOnly','center'], 
                  },
                  {
                    border: [false, false, true, true],
                    text: [
                      {text: '\n'},
                      {text: '\n'},
                      {text: 'Life to be Assured\n'},
                      {text: '\n'}
                    ],
                    style: ['readOnly','center'], 
                  },
                ],
              ],
            },
          }
        ]
      ]
    }
  }
}

module.exports = Page_2