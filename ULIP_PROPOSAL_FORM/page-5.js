const Page_5 = ({
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
                10,
                140,
                170,
                200
              ],
              body: [
                [
                  {
                    text: '11. Premium Payment Details',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 4
                  },
                  {},{},{}
                ],
                [
                  { text: 'A.', style: ['cellHeader', 'center'] },
                  { text: 'Object of Insurance Contract?', style: ['cellHeader', 'center'] },
                  { text: '', colSpan: 2 },{}
                ],  
                [
                  { text: 'B.', style: ['cellHeader', 'center'] },
                  { text: 'Who will pay Premium?', style: ['cellHeader', 'center'] },
                  { text: 'Proposer', border:[true, true, false, true] },
                  { text: 'Life to be Assured', border:[false, true, true, true] }
                ],  
                [
                  { text: 'C.', style: ['cellHeader', 'center'] },
                  { text: 'Premium Currency', style: ['cellHeader', 'center'] },
                  { text: 'USD', border:[true, true, false, true] },
                  { text: 'AED', border:[false, true, true, true] }
                ],       
                [
                  {text: 'D',style: ['cellHeader', 'center']}, 
                  {text: 'Payment Method', style: ['cellHeader', 'center']}, 
                  {
                    text: [
                      {text: 'Bank Transfer\n', style:{bold:true}},
                      {text: 'Once the application is accepted, our bank details we will be provided through email'}
                    ],
                    colSpan: 2, 
                    style: ['left']
                  },{}
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
                140,
                '*','*','*','*','*',
                '*','*','*','*','*',
                '*','*','*','*','*',
                '*','*','*','*','*',
                '*','*','*'
              ],
              body: [
                [
                  {
                    text: '12. Bank Details for all Payment',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 25
                  },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{}
                ],
                [
                  { text: 'A.', style: ['cellHeader', 'center'] },
                  { text: 'Name Of Bank', style: ['cellHeader', 'left'] },
                  { text: '', colSpan: 23 },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{}
                ],  
                [
                  { text: '', style: ['cellHeader', 'center'] },
                  { text: 'Bank Branch & Address', style: ['cellHeader', 'left'] },
                  { text: '', colSpan: 23 },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{}
                ],
                [
                  { text: 'B.', style: ['cellHeader', 'center'] },
                  { text: 'Account Name', style: ['cellHeader', 'left'] },
                  { text: '', colSpan: 23 },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{}
                ],  
                [
                  { text: '', style: ['cellHeader', 'center'] },
                  { text: 'Account Number', style: ['cellHeader', 'left'] },
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''}
                ],
                [
                  { text: 'C.', style: ['cellHeader', 'center'] },
                  { text: 'IBAN Number (23 Digits)', style: ['cellHeader', 'left'] },
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''}
                ],
                [
                  { text: 'How long is the Account held for', style: ['cellHeader', 'left'], colSpan: 2 },{},
                  { text: 'Year(s)', colSpan: 11, style:["right"] },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  { text: 'Month(s)', colSpan: 12, style:["right"] },
                  {},{},{},{},{},{},
                  {},{},{},{},{}
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
                140,
                '*','*','*','*','*',
                '*','*','*','*','*',
                '*','*','*','*','*',
                '*','*','*','*','*',
                '*','*','*'
              ],
              body: [
                [
                  {
                    text: '13. Source of Funds (Same as Bank Details above        Yes         No – If different, please complete bank details)',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 25
                  },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{}
                ],
                [
                  { text: 'A.', style: ['cellHeader', 'center'] },
                  { text: 'Name Of Bank', style: ['cellHeader', 'left'] },
                  { text: '', colSpan: 23 },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{}
                ],  
                [
                  { text: '', style: ['cellHeader', 'center'] },
                  { text: 'Bank Branch & Address', style: ['cellHeader', 'left'] },
                  { text: '', colSpan: 23 },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{}
                ],
                [
                  { text: 'B.', style: ['cellHeader', 'center'] },
                  { text: 'Account Name', style: ['cellHeader', 'left'] },
                  { text: '', colSpan: 23 },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{},{},{},{},
                  {},{}
                ],  
                [
                  { text: '', style: ['cellHeader', 'center'] },
                  { text: 'Account Number', style: ['cellHeader', 'left'] },
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''}
                ],
                [
                  { text: 'C.', style: ['cellHeader', 'center'] },
                  { text: 'IBAN Number (23 Digits)', style: ['cellHeader', 'left'] },
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''},{ text: ''},{ text: ''},
                  { text: ''},{ text: ''},{ text: ''}
                ],
                [
                  { text: 'How long is the Account held for', style: ['cellHeader', 'left'], colSpan: 2 },{},
                  { text: 'Year(s)', colSpan: 11, style:["right"] },
                  {},{},{},{},{},
                  {},{},{},{},{},
                  { text: 'Month(s)', colSpan: 12, style:["right"] },
                  {},{},{},{},{},{},
                  {},{},{},{},{}
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
                125, 
                "*",
                "*",
                "*",
                "*" 
              ],
              layout: "innerTableLayout",
              body: [
                [
                  {
                    text: '14. Source of Income (Where the source is from, give a breakdown of your annual earnings from all sources for the last 3 years) ',
                    style: ['header','defaultStyle',{"fontSize": 9}], 
                    colSpan: 5,
                  },
                  {},{},{},{}
                ],
                [
                  { text: '', style:["center", "cellHeader"] },
                  { text: 'Earned Income', style:["center", "cellHeader"]},
                  { text: 'Investment Income', style: ["center", "cellHeader"]},
                  { text: 'Other Income', style:["center", "cellHeader"] },
                  { text: 'Currency of Income', style:["center", "cellHeader"] },
                ],
                [
                  { text: 'A. Current year’s income to date', style:["left", "cellHeader"] },
                  { text: ''},
                  { text: ''}, 
                  { text: ''},
                  { text: ''}
                ],
                [
                  { text: 'B. Last year', style:["left", "cellHeader"] },
                  { text: ''},
                  { text: ''}, 
                  { text: ''},
                  { text: ''}
                ],
                [
                  { text: 'C. Previous year', style:["left", "cellHeader"] },
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
                "auto", 
                "*",
                "*",
              ],
              layout: "innerTableLayout",
              body: [
                [
                  {
                    text: 'Source of Wealth (Origin of wealth acquired)',
                    style: ['header','defaultStyle',{"fontSize": 9}]
                  },
                  {
                    text: 'Proposer',
                    style: ['header','defaultStyle',{"fontSize": 9}]
                  },
                  {
                    text: 'Life to be Assured',
                    style: ['header','defaultStyle',{"fontSize": 9}]
                  }
                ],
                [
                  { text: 'Savings from income /salary /company profits/bonus', colSpan:3},{},{}
                ],
                [
                  { text: 'A. Employer’s / Company Name ' },
                  { text: ''}, { text: ''}
                ],
                [
                  { text: 'B. Job Title / Nature of company business ' },
                  { text: ''}, { text: ''}
                ],
                [
                  { text: 'C. Number of years employed with company / Saving ' },
                  { text: ''}, { text: ''}
                ],
                [
                  { text: 'D. Annual Income (In USD) / Bonus (In USD)' },
                  { text: ''}, { text: ''}
                ],
                [
                  { text: 'Other (proceeds from shares / investment holdings / property sale', colSpan:3},{},{}
                ],
                [
                  { text: 'E. Please include full details of where funds are from dates, currency and Amount' },
                  { text: ''}, { text: ''}
                ],
                [
                  { text: '', colSpan:3},{},{}
                ],
                [
                  { text: 'Please provide the below documentary evidence for Source of Premium / Income / Wealth', colSpan:3, style:["cellHeader", {"bold": true}]},{},{}
                ],
                [
                  { 
                    text: [
                      {text: 'Employees: ', style:{bold:true}},
                      {text: 'Certified Salary Certificate (or) Last 3 months Bank Statement showing balance'}
                    ], colSpan:3
                  },{},{}
                ],
                [
                  { 
                    text: [
                      {text: 'Business / Self Employed / Others: ', style:{bold:true}},
                      {text: 'Certified Last 3 months bank statement (or) audited financial accounts.'}
                    ], colSpan:3
                  },{},{}
                ],
              ],
            }
          }
        ]
      ]
    }
  }
}

module.exports = Page_5


