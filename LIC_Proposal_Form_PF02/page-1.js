const Page_1 = ({
  convertTextToRtl,
  innerTableLayouts
}) => {
  return {
    // layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    border: [false, false, false, false],
    pageBreak : "after",
    fontSize : 8.5,
    style: {fillColor: '#f8eff2'},
    table : {
      widths : ["*"],
      body : [
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 120,
              paddingBottom: (i, node) => 150
            },
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    image : "./assets/images/logo2.png",
                    width: 350,
                    alignment: 'center',
                  }
                ],
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => 40,
              paddingBottom: (i, node) => 0
            },
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl("طلب للتأمين على الحياة"),
                        style: ["center", {fontSize: 25}, "arabic", "bold"]
                      },
                      {
                        text:"\nProposal for Life Insurance",
                        style: ["center", {fontSize: 25}, "Times", "bold"]
                      },
                    ]
                  }
                ],
              ]
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            layout:{
              paddingTop: (i, node) => -10,
              paddingBottom: (i, node) => 160
            },
            margin: [0,15],
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:[
                      {
                        text:convertTextToRtl(")نموذج طلب بوليصة تأمين مشترك أو بوالص تأمين على حياة القاصرين("),
                        style: ["center", {fontSize: 15}, "arabic", "bold"]
                      },
                      {
                        text:"\n(Proposal Form for Joint life or policies on the lives of minors)",
                        style: ["center", {fontSize: 15}, "Times", "bold"]
                      },
                    ]
                  }
                ]
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: ["*"],
              body: [
                [
                  {
                    border: [false, false, false, false],
                    text:"Form No. PF 02",
                    style: ["right", {fontSize: 10}, "bold", "Times"]
                  }
                ]
              ],
            },
          }
        ]
      ]
    }
  }
}

module.exports = Page_1