const Page_4 = ({
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
              widths: [
                84, 
                84,
                84,
                84,
                84,
                84
              ],
              body: [
                [
                  {
                    text: '7. Family History',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 6
                  },
                  {},{},{},{},{}
                ],
                [
                  {
                    text: '',
                    style: {"fontSize": 2}, 
                    colSpan: 6
                  },
                  {},{},{},{},{}
                ],
                [
                  {
                    text: '', 
                    style:['cellHeader']
                  },
                  {
                    text:'LIVING',
                    style:['cellHeader'],
                    colSpan:2
                  },{},
                  {
                    text:'DECEASED',
                    style:['cellHeader'],
                    colSpan:3
                  },{},{}
                ],
                [
                  {
                    text: 'MEMBERS', 
                    style:['cellHeader']
                  },
                  {
                    text:'PRESENT AGE',
                    style:['cellHeader']
                  },
                  {
                    text:'STATE OF HEALTH',
                    style:['cellHeader']
                  },
                  {
                    text:'YEAR OF DEATH',
                    style:['cellHeader']
                  },
                  {
                    text:'AGE AT DEATH',
                    style:['cellHeader']
                  },
                  {
                    text:'CAUSE OF DEATH',
                    style:['cellHeader']
                  },
                ],
                [
                  {
                    text: 'FATHER', 
                    style:['cellHeader']
                  },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                ],
                [
                  {
                    text: 'MOTHER', 
                    style:['cellHeader']
                  },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                ],
                [
                  {
                    text: 'BROTHERS', 
                    style:['cellHeader']
                  },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                ],
                [
                  {
                    text: 'SISTERS', 
                    style:['cellHeader']
                  },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                ],
                [
                  {
                    text: 'WIFE/HUSBAND', 
                    style:['cellHeader']
                  },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                ],
                [
                  {
                    text: 'CHILDREN', 
                    style:['cellHeader']
                  },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                  { text:'' },
                ]
                
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                10, 
                "*",
                "*",
                "*",
                "*",
                "*"
              ],
              body: [
                [
                  {
                    text: '8. To be answered if Life to be assured is a female:',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 6
                  },{},{},{},{},{}
                ],  
                [
                  { text: 'A.', style:["center", "cellHeader"], border:[true, true, true, false] },
                  { text: 'Husband’s Full Name', style:["left", "cellHeader"]},
                  { text: '', colSpan: 4},{},{},{}
                ],
                [
                  { text: '', style:["cellHeader"], border:[true, false, true, true] },
                  { text: 'Husband’s Occupation', style:["left", "cellHeader"]},
                  { text: '', colSpan:2},{},
                  { text: 'Annual Income', style:["left", "cellHeader"]},
                  { text: ''}
                ], 
                [
                  { text: 'B.', style:["center", "cellHeader"], border:[true, true, true, false] },
                  { text: 'Details of Husband’s Insurance', style:["left", "cellHeader"], colSpan: 5},{},{},{},{}
                ], 
                [
                  { text: '', style:["cellHeader"]},
                  { text: 'Policy No', style:["left", "cellHeader"]},
                  { text: 'Name of the Insurer / Company', style:["left", "cellHeader"]},
                  { text: 'Sum Assured', style:["left", "cellHeader"]},
                  { text: 'Plan & Term', style:["left", "cellHeader"]},
                  { text: 'Present Status of the Policies', style:["left", "cellHeader"]},
                ],
                [
                  { text: '', style:["cellHeader",{"fontSize":10}]},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''}
                ],   
                [
                  { text: '', style:["cellHeader"]},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''}
                ],   
                [
                  { text: '', style:["cellHeader"]},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''}
                ],   
                [
                  { text: '', style:["cellHeader"]},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''}
                ],   
                [
                  { text: 'C.', style:["center", "cellHeader"] },
                  { text: 'Are you Pregnant now?', style:["center", "cellHeader"]},
                  { text: 'Date of last Delivery', style:["center", "cellHeader"]},
                  { text: 'Have you had any abortion or miscarriage or Caesarean Section? If so, give details.', style:["center", "cellHeader"], colSpan:2},
                  {},
                  { text: 'Date of last menstruation', style:["center", "cellHeader"]}
                ],
                [
                  { text: '', style:["cellHeader"]},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''},
                  { text: ''}
                ],            
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                10,
                85,
                "*",
                "*",
                "*",
                "*",
                "*",
                "*",
              ],
              body: [
                [
                  {
                    text: '9. Plan Details',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 8
                  },
                  {},{},{},{},{},{},{}
                ],
                [
                  { text: 'A.', style: ['cellHeader', 'center'] },
                  { text: 'Plan Name', style: ['cellHeader', 'center'] },
                  { text: '', colSpan: 3 },{},{},
                  { text: 'Plan No', style: ['cellHeader', 'center'] },
                  { text: '', colSpan: 2 },{}
                ],  
                [
                  { text: 'B.', style: ['cellHeader', 'center'] },
                  { text: 'Policy Term (years)', style: ['cellHeader', 'center'] },
                  { text: '', colSpan: 2 },{},
                  { text: 'Payment Term (years)', style: ['cellHeader', 'center'], colSpan:2 },{},
                  { text: '', colSpan: 2 },{}
                ],    
                [
                  { text: 'C.', style: ['cellHeader', 'center'] },
                  { text: 'Premium Type', style: ['cellHeader', 'center'] },
                  { text: 'Single', style: ['cellHeader', 'center'] },
                  { text: '$', style: ['left'] },
                  { text: 'Top-up', style: ['cellHeader', 'center'] },
                  { text: '$', style: ['left'] },
                  { text: 'Regular', style: ['cellHeader', 'center'] },
                  { text: '$', style: ['left'] },
                ],  
                [
                  { text: 'D.', style: ['cellHeader', 'center'] },
                  { text: 'Frequency (If regular)', style: ['cellHeader', 'center'] },
                  { text: 'Yearly\t\t\t\t\t\t\t\tHalf Yearly\t\t\t\t\t\t\t\t\tQuarterly\t\t\t\t\t\t\t\t\tMonthly', style: ['left'], colSpan:6 },
                  {},{},{},{},{}
                ],   
                [
                  { text: 'E.', style: ['cellHeader', 'center'] },
                  { text: 'Investment Amount', style: ['cellHeader', 'center'] },
                  { text: 'In words:', style: ['readOnly', 'left'], colSpan:4},{},{},{},
                  { text: 'USD (In figure)', style: ['cellHeader', 'center'] },
                  { text: '$', style: ['left'] },
                ],          
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                22,
                "*",
                "*",
                "*"
              ],
              body: [
                [
                  {
                    text: '10. Fund Details',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 4
                  },
                  {},{},{}
                ],
                [
                  {
                    text: 'Please use additional sheet in case of more No. of fund details.',
                    style: ['cellHeader'], 
                    colSpan: 4
                  },
                  {},{},{}
                ],
                [
                  { text: 'S.No.', style: ['cellHeader', 'center'] },
                  { text: 'ISIN', style: ['cellHeader', 'center'] },
                  { text: 'Fund Name', style: ['cellHeader', 'center'] },
                  { text: '% Of Allocation', style: ['cellHeader', 'center'] }
                ],
                [
                  { text: '1.', style: ['cellHeader', 'center']},
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '2.', style: ['cellHeader', 'center']},
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '3.', style: ['cellHeader', 'center']},
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '4.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '5.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '6.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '7.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '8.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '9.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '10.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '11.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '12.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '13.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '14.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: '15.', style: ['cellHeader', 'center'] },
                  { text: ''}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'Total', style: ['cellHeader', 'right'], colSpan:3 },
                  {}, {}, { text: '100%', style: ['cellHeader', 'center']}
                ],
                [
                  {
                    text: 'Risk Disclaimer: Investments in unit linked plans are subject to various risks including market and investment risks. This product is a unit linked insurance plan. All such risks are borne by the proposed life assured / policy owner. Life Insurance Corporation (International) B.S.C.( c) does not guarantee on the return of the invested funds ',
                    style: ['cellHeader'], 
                    colSpan: 4
                  },
                  {},{},{}
                ],
              ],
            }
          }
        ],
      ]
    }
  }
}

module.exports = Page_4