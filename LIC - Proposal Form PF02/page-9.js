const Page_9 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    // pageBreak : "after",
    fontSize : 9,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                20, 
                "auto", 
                380,  
                50
              ],
              body: [
                [
                  {
                    text: 'LIST OF FUNDS - EQUITY',
                    style: ['header','defaultStyle','center',{"fontSize": 11}], 
                    colSpan: 4
                  },{},{},{}
                ],
                [
                  { text: 'S.No.', style: ["center", "cellHeader"] },
                  { text: 'ISIN', style: ["center", "cellHeader"] },
                  { text: 'Fund Name', style: ["center", "cellHeader"] },
                  { text: '% Of Allocation', style: ["center", "cellHeader"] }
                ],
                [{ text: '41', style: 'center' }, { text: 'LU0863494851' }, { text: 'KOTAK INDIA MIDCAP "C" (USD) ACC' }, {}],
                [{ text: '42', style: 'center' }, { text: 'LU0863495239' }, { text: 'KOTAK INDIA ESG "C" (USD) ACC' }, {}],
                [{ text: '43', style: 'center' }, { text: 'LU0106261539' }, { text: 'SCHRODER ISF US LARGE CAP "C" ACC' }, {}],
                [{ text: '44', style: 'center' }, { text: 'LU1713307699' }, { text: 'SCHRODER ISF CHINA A "C" (USD) ACC' }, {}],
                [{ text: '45', style: 'center' }, { text: 'LU0302446132' }, { text: 'SCHRODER ISF GLOBAL CLIMATE CHANGE EQUITY "C" ACC' }, {}],
                [{ text: '46', style: 'center' }, { text: 'LU0106259988' }, { text: 'SCHRODER ISF ASIAN OPPORTUNITIES "C" ACC' }, {}],
                [{ text: '47', style: 'center' }, { text: 'LU0205193807' }, { text: 'SCHRODER ISF US SMALL & MID-CAP EQUITY "C" (USD) ACC' }, {}],
                [{ text: '48', style: 'center' }, { text: 'LU0140637140' }, { text: 'SCHRODER ISF GREATER CHINA "C" ACC' }, {}],
                [{ text: '49', style: 'center' }, { text: 'LU0106259392' }, { text: 'SCHRODER ISF LATIN AMERICAN "C" ACC' }, {}],
                [{ text: '50', style: 'center' }, { text: 'LU0228660014' }, { text: 'SCHRODER ISF BRIC "C" ACC' }, {}]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                20, 
                "auto", 
                380,  
                50
              ],
              body: [
                [
                  {
                    text: 'LIST OF FUNDS - MULTI ASSETS',
                    style: ['header','defaultStyle','center',{"fontSize": 11}], 
                    colSpan: 4
                  },{},{},{}
                ],
                [{ text: '51', style: 'center' }, { text: 'LU1255915586' }, { text: 'ALLIANZ INCOME AND GROWTH "RT" (USD) ACC' }, {}],
                [{ text: '52', style: 'center' }, { text: 'LU0329592538' }, { text: 'BGF GLOBAL ALLOCATION "D" `ACC' }, {}],
                [{ text: '53', style: 'center' }, { text: 'LU1797663298' }, { text: 'FIDELITY GLOBAL MULTI ASSET INCOME "Y" (USD) ACC' }, {}],
                [{ text: '54', style: 'center' }, { text: 'LU1586275312' }, { text: 'FRANKLIN INCOME "W" (USD) ACC' }, {}],
                [{ text: '55', style: 'center' }, { text: 'LU0858296709' }, { text: 'GS US REAL ESTATE BALANCED PORTFOLIO "R" (USD) ACC' }, {}],
                [{ text: '56', style: 'center' }, { text: 'LU1057461136' }, { text: 'GS GLOBAL MULTI ASSET CONSERVATIVE PORTFOLIO "I" (USD) ACC' }, {}],
                [{ text: '57', style: 'center' }, { text: 'LU1252826018' }, { text: 'INVESCO PAN EUROPEAN HIGH INCOME "Z" (USDHDG) ACC' }, {}]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                20, 
                "auto", 
                380,  
                50
              ],
              body: [
                [
                  {
                    text: 'LIST OF FUNDS - FIXED INCOME',
                    style: ['header','defaultStyle','center',{"fontSize": 11}], 
                    colSpan: 4
                  },{},{},{}
                ],
                [{ text: '58', style: 'center' }, { text: 'LU0552552704' }, { text: 'BGF USD HIGH YIELD BOND "D2" (USD) ACC' }, {}],
                [{ text: '59', style: 'center' }, { text: 'LU0297941899' }, { text: 'BGF GLOBAL HIGH YIELD BOND "D2" ACC' }, {}],
                [{ text: '60', style: 'center' }, { text: 'LU0719319435' }, { text: 'BGF CHINA BOND "D2" (USD) ACC' }, {}],
                [{ text: '61', style: 'center' }, { text: 'LU0935944362' }, { text: 'FIDELITY GLOBAL INFLATION-LINKED BOND "Y" (USD) ACC' }, {}],
                [{ text: '62', style: 'center' }, { text: 'LU0370788753' }, { text: 'FIDELITY US HIGH YIELD "Y" (USD) ACC' }, {}],
                [{ text: '63', style: 'center' }, { text: 'LU0346392482' }, { text: 'FIDELITY US DOLLAR BOND "Y" ACC' }, {}],
                [{ text: '64', style: 'center' }, { text: 'IE00BDRTCJ31' }, { text: 'FIDELITY ENHANCED RESERVE "Y" (USD) ACC' }, {}],
                [{ text: '65', style: 'center' }, { text: 'LU2251237132' }, { text: 'FRANKLIN GULF WEALTH BOND "W" (USD) ACC' }, {}],
                [{ text: '66', style: 'center' }, { text: 'LU0830646419' }, { text: 'GS EMERGING MARKETS CORPORATE BOND PORTFOLIO"R"(USD)ACC' }, {}],
                [{ text: '67', style: 'center' }, { text: 'LU0996347828' }, { text: 'KOTAK INDIA FIXED INCOME "C" (USD) ACC' }, {}],
                [{ text: '68', style: 'center' }, { text: 'IE00BZ1CSP00' }, { text: 'LEGG MASON BRANDYWINE GLOBAL INCOME OPTIMISER"X"(USD)ACC' }, {}],
                [{ text: '69', style: 'center' }, { text: 'LU0189893794' }, { text: 'SCHRODER ISF GLOBAL HIGH YIELD "C" ACC' }, {}],
                [{ text: '70', style: 'center' }, { text: 'LU0106258741' }, { text: 'SCHRODER ISF GLOBAL CORPORATE BOND "C" ACC' }, {}],
                [
                  {
                    text: '', style: ['header','defaultStyle'], colSpan: 3
                  },{},{},
                  {
                    text: '100%',
                    style: ['header','defaultStyle','center',{"fontSize": 11}]
                  }
                ],
                [
                  {
                    text:"Risk Disclaimer: Investments in unit linked plans are subject to various risks including market and investment risks. This product is a unit linked insurance plan. All such risks are borne by the proposed life assured / policy owner. Life Insurance Corporation (International) B.S.C.(c) does not guarantee on the return of the invested funds ",
                    colSpan: 4
                  },{},{},{}
                ]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              height:15,
              widths: [
                "auto", 
                120, 
                185,  
                185
              ],
              body: [
                [
                  {text: "\nDate", style:['header','defaultStyle','left',{"fontSize": 11}]},
                  {},
                  {
                    rowSpan:2,
                    text: "\n\n\nSignature of the Consultant",
                    style: "center"
                  },
                  {
                    rowSpan:2,
                    text: "\n\n\nSignature of the Consultant",
                    style: "center"
                  }
                ],
                [
                  {text: "\nPlace", style:['header','defaultStyle','left',{"fontSize": 11}]},
                  {},{},{}
                ]
              ],
            },
          }
        ]
      ]
    }
  }
}

module.exports = Page_9