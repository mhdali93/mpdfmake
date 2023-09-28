const Page_8 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 9,
    table : {
      widths : [220, '*'],
      body : [
        [
          {
            border: [false, false, false, false],
            image : "./assets/images/logo1.png",
            width: 130
          },
          {
            border: [false, false, false, false],
            text:[
              {
                text: "Life Insurance Corporation (International) B.S.C.(c)\n",
                style: ["center", {fontSize: 14, font: 'Times'}],
              },
              {
                text: "Single Premium Wealth Creator - 268\n",
                style: ["center", {fontSize: 18, font: 'Times'}],
              },
              {
                text: "Annexure (List of Funds)",
                style: ["center", {fontSize: 14, bold: true, font: 'Times'}],
              }
            ]
          },
        ],
        [
          {
            border: [false, false, false, false],
            colSpan:2,
            table: {
              widths: [
                20, 
                "auto", 
                "*",  
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
                [{ text: '1', style:'center' }, { text: "LU2286301283" }, { text: ' ALLIANZ CYBER SECURITY "RT" (USD) ACC ' }, {}],
                [{ text: '2', style:'center' }, { text: "LU2009012233" }, { text: ' ALLIANZ THEMATICA "RT" (USD) ACC ' }, {}],
                [{ text: '3', style:'center' }, { text: "LU1698898050" }, { text: ' ALLIANZ GLOBAL ARTIFICIAL INTELLIGENCE "RT" (USD) ACC ' }, {}],
                [{ text: '4', style:'center' }, { text: "LU1997245508" }, { text: ' ALLIANZ CHINA A-SHARES "RT" (USD) ACC A ' }, {}],
                [{ text: '5', style:'center' }, { text: "LU0329593262" }, { text: ' BGF WORLD FINANCIALS "D2" ACC ' }, {}],
                [{ text: '6', style:'center' }, { text: "LU0252968341" }, { text: ' BGF WORLD MINING "D2" ACC ' }, {}],
                [{ text: '7', style:'center' }, { text: "LU0341384864" }, { text: ' BGF US SMALL & MIDCAP OPPORTUNITIES "D2" (USD) ' }, {}],
                [{ text: '8', style:'center' }, { text: "LU0252969661" }, { text: ' BGF SUSTAINABLE ENERGY "D2" (USD) ACC ' }, {}],
                [{ text: '9', style:'center' }, { text: "LU0368268198" }, { text: ' BGF GLOBAL DYNAMIC EQUITY "D2" (USD) ' }, {}],
                [{ text: '10', style:'center' }, { text:  "LU0252969232" }, { text: ' BGF US FLEXIBLE EQUITY "D2" (USD) ACC ' }, {}],
                [{ text: '11', style:'center' }, { text:  "LU0252969075" }, { text: ' BGF WORLD ENERGY "D2" ACC ' }, {}],
                [{ text: '12', style:'center' }, { text:  "LU0724618193" }, { text: ' BGF INDIA "D2" (USD) ACC ' }, {}],
                [{ text: '13', style:'center' }, { text:  "LU0368268602" }, { text: ' BGF SYSTEMATIC GLOBAL EQUITY HIGH INCOME "D2"(USD) ACC ' }, {}],
                [{ text: '14', style:'center' }, { text:  "LU1861214903" }, { text: ' BGF FUTURE OF TRANSPORT "D2" (USD) ACC ' }, {}],
                [{ text: '15', style:'center' }, { text:  "LU0724618946" }, { text: ' BGF WORLD TECHNOLOGY "D2" (USD) ACC ' }, {}],
                [{ text: '16', style:'center' }, { text:  "LU0368270509" }, { text: ' BGF GLOBAL LONG-HORIZON EQUITY "D2" (USD) ACC ' }, {}],
                [{ text: '17', style:'center' }, { text:  "LU0329593007" }, { text: ' BGF WORLD HEALTHSCIENCE "D2" ACC ' }, {}],
                [{ text: '18', style:'center' }, { text:  "LU0702159939" }, { text: 'FIDELITY ASIAN SMALLER COMPANIES "Y" (USD) ACC' }, {}],
                [{ text: '19', style:'center' }, { text:  "LU1560650563" }, { text: 'FIDELITY GLOBAL TECHNOLOGY "Y" (USD) ACC' }, {}],
                [{ text: '20', style:'center' }, { text:  "LU1731833213" }, { text: 'FIDELITY EUROPEAN DYNAMIC GROWTH "Y" (USDHDG) ACC' }, {}],
                [{ text: '21', style:'center' }, { text:  "LU0346390510" }, { text: 'FIDELITY ASEAN "Y"' }, {}],
                [{ text: '22', style:'center' }, { text:  "LU0318939179" }, { text: 'FIDELITY AMERICA "Y" (USD) ACC' }, {}],
                [{ text: '23', style:'center' }, { text:  "LU0370789132" }, { text: 'FIDELITY FUNDS GLOBAL THEMATIC OPPORTUNITIES "Y" (USD) ACC' }, {}],
                [{ text: '24', style:'center' }, { text:  "LU0346391245" }, { text: 'FIDELITY INDIA FOCUS "Y" (USD)' }, {}],
                [{ text: '25', style:'center' }, { text:  "LU0346390866" }, { text: 'FIDELITY CHINA FOCUS "Y"' }, {}],
                [{ text: '26', style:'center' }, { text:  "LU0605515963" }, { text: 'FIDELITY GLOBAL DIVIDEND "Y" (USD) ACC' }, {}],
                [{ text: '27', style:'center' }, { text:  "LU0318941159" }, { text: 'FIDELITY FUNDS SUSTAINABLE ASIA EQUITY "Y" (USD) ACC' }, {}],
                [{ text: '28', style:'center' }, { text:  "LU0346391831" }, { text: 'FIDELITY PACIFIC "Y" ACC' }, {}],
                [{ text: '29', style:'center' }, { text:  "LU0792612466" }, { text: 'FRANKLIN U.S. OPPORTUNITIES "W" (USD) ACC' }, {}],
                [{ text: '30', style:'center' }, { text:  "LU0976566736" }, { text: 'FRANKLIN TECHNOLOGY "W" (USD) ACC' }, {}],
                [{ text: '31', style:'center' }, { text:  "LU0792612383" }, { text: 'FRANKLIN INDIA "W" (USD) ACC' }, {}],
                [{ text: '32', style:'center' }, { text:  "LU0959060798" }, { text: 'TEMPLETON EMERGING MARKETS "W" (USD) ACC' }, {}],
                [{ text: '33', style:'center' }, { text:  "LU2404266335" }, { text: 'FRANKLIN GOLD & PRECIOUS METALS "W" (USD) ACC' }, {}],
                [{ text: '34', style:'center' }, { text:  "LU0830625926" }, { text: 'GS GLOBAL CORESM EQUITY PORTFOLIO "R" (USD) ACC SNAP' }, {}],
                [{ text: '35', style:'center' }, { text:  "LU0830624010" }, { text: 'GS INDIA EQUITY PORTFOLIO "R" (USD) ACC' }, {}],
                [{ text: '36', style:'center' }, { text:  "LU0858289241" }, { text: 'GOLDMAN GLOBAL MILLENNIALS EQUITY PORTFOLIO "R" (USD) ACC' }, {}],
                [{ text: '37', style:'center' }, { text:  "LU1981114066" }, { text: 'INVESCO JAPANESE EQUITY ADVANTAGE FUND "Z" (USD) ACC ' }, {}],
                [{ text: '38', style:'center' }, { text:  "LU1590492648" }, { text: 'INVESCO GLOBAL CONSUMER TRENDS "Z" (USD) ACC ' }, {}],
                [{ text: '39', style:'center' }, { text:  "LU1252825630" }, { text: 'INVESCO PAN EUROPEAN EQUITY "Z" (USDHDG) ACC ' }, {}],
                [{ text: '40', style:'center' }, { text:  "IE00BYPC7S51" }, { text: 'UTI INDIA DYNAMIC EQUITY "RDR" (USD) ACC ' }, {}],
              ],
            },
          },{}
        ]

      ]
    }
  }
}

module.exports = Page_8



// LIST OF FUNDS - EQUITY
// S No ISIN Fund Name % Of 
// Allocation 
// 1 LU2286301283  ALLIANZ CYBER SECURITY "RT" (USD) ACC 
// 2 LU2009012233  ALLIANZ THEMATICA "RT" (USD) ACC 
// 3 LU1698898050  ALLIANZ GLOBAL ARTIFICIAL INTELLIGENCE "RT" (USD) ACC 
// 4 LU1997245508  ALLIANZ CHINA A-SHARES "RT" (USD) ACC A 
// 5 LU0329593262  BGF WORLD FINANCIALS "D2" ACC 
// 6 LU0252968341  BGF WORLD MINING "D2" ACC 
// 7 LU0341384864  BGF US SMALL & MIDCAP OPPORTUNITIES "D2" (USD) 
// 8 LU0252969661  BGF SUSTAINABLE ENERGY "D2" (USD) ACC 
// 9 LU0368268198  BGF GLOBAL DYNAMIC EQUITY "D2" (USD) 
// 10 LU0252969232  BGF US FLEXIBLE EQUITY "D2" (USD) ACC 
// 11 LU0252969075  BGF WORLD ENERGY "D2" ACC 
// 12 LU0724618193  BGF INDIA "D2" (USD) ACC 
// 13 LU0368268602  BGF SYSTEMATIC GLOBAL EQUITY HIGH INCOME "D2"(USD) ACC 
// 14 LU1861214903  BGF FUTURE OF TRANSPORT "D2" (USD) ACC 
// 15 LU0724618946  BGF WORLD TECHNOLOGY "D2" (USD) ACC 
// 16 LU0368270509  BGF GLOBAL LONG-HORIZON EQUITY "D2" (USD) ACC 
// 17 LU0329593007  BGF WORLD HEALTHSCIENCE "D2" ACC 
// 18 LU0702159939 FIDELITY ASIAN SMALLER COMPANIES "Y" (USD) ACC
// 19 LU1560650563 FIDELITY GLOBAL TECHNOLOGY "Y" (USD) ACC
// 20 LU1731833213 FIDELITY EUROPEAN DYNAMIC GROWTH "Y" (USDHDG) ACC
// 21 LU0346390510 FIDELITY ASEAN "Y"
// 22 LU0318939179 FIDELITY AMERICA "Y" (USD) ACC
// 23 LU0370789132 FIDELITY FUNDS GLOBAL THEMATIC OPPORTUNITIES "Y" (USD) ACC
// 24 LU0346391245 FIDELITY INDIA FOCUS "Y" (USD)
// 25 LU0346390866 FIDELITY CHINA FOCUS "Y"
// 26 LU0605515963 FIDELITY GLOBAL DIVIDEND "Y" (USD) ACC
// 27 LU0318941159 FIDELITY FUNDS SUSTAINABLE ASIA EQUITY "Y" (USD) ACC
// 28 LU0346391831 FIDELITY PACIFIC "Y" ACC
// 29 LU0792612466 FRANKLIN U.S. OPPORTUNITIES "W" (USD) ACC
// 30 LU0976566736 FRANKLIN TECHNOLOGY "W" (USD) ACC
// 31 LU0792612383 FRANKLIN INDIA "W" (USD) ACC
// 32 LU0959060798 TEMPLETON EMERGING MARKETS "W" (USD) ACC
// 33 LU2404266335 FRANKLIN GOLD & PRECIOUS METALS "W" (USD) ACC
// 34 LU0830625926 GS GLOBAL CORESM EQUITY PORTFOLIO "R" (USD) ACC SNAP
// 35 LU0830624010 GS INDIA EQUITY PORTFOLIO "R" (USD) ACC
// 36 LU0858289241 GOLDMAN GLOBAL MILLENNIALS EQUITY PORTFOLIO "R" (USD) ACC
// 37 LU1981114066 INVESCO JAPANESE EQUITY ADVANTAGE FUND "Z" (USD) ACC 
// 38 LU1590492648 INVESCO GLOBAL CONSUMER TRENDS "Z" (USD) ACC 
// 39 LU1252825630 INVESCO PAN EUROPEAN EQUITY "Z" (USDHDG) ACC 
// 40 IE00BYPC7S51 UTI INDIA DYNAMIC EQUITY "RDR" (USD) ACC 
