const detail_rows = [
  {
    english_title : "Chapter I : ",
    english_value : "Definitions",
    page_no : "3",
    arabic_title : "الفصل الأول",
    arabic_value : "التعريفات"
  },
  {
    english_title : "Chapter II : ",
    english_value : "General Terms and Conditions",
    page_no : "7",
    arabic_title : "الفصل الثاني",
    arabic_value : "الشروط والأحكام العامة"
  },
  {
    english_title : "Chapter III : ",
    english_value : "Claims Administration",
    page_no : "11",
    arabic_title : "الفصل الثالث",
    arabic_value : "إدارة المطالبات"
  },
  {
    english_title : "Chapter IV : ",
    english_value : "Exclusions",
    page_no : "13",
    arabic_title : "الفصل الرابع",
    arabic_value : "الاستثناءات"
  },
  {
    english_title : "Annexure No. 1 : ",
    english_value : "Policy Schedule",
    page_no : "17",
    arabic_title : " الملحق رقم 1",
    arabic_value : "جدول الوثيقة"
  },
  {
    english_title : "Annexure No. 2 : ",
    english_value : "Insurance Proposed",
    page_no : "18",
    arabic_title : " الملحق رقم 2",
    arabic_value : "طلب التأمين "
  },
  {
    english_title : "Annexure No. 3 : ",
    english_value : "Optional Benefits Schedule",
    page_no : "20",
    arabic_title : " الملحق رقم 3",
    arabic_value : "جدول المزايا الاختيارية"
  },
  {
    english_title : "Annexure No. 4 : ",
    english_value : "Table of Basic Health Benefits",
    page_no : "21",
    arabic_title : "الملحق رقم 4",
    arabic_value : "جدول المنافع الصحية الأساسية"
  }
]

const Page_2 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    margin : [0, 60, 0, 0],
    pageBreak : "after",
    fontSize : 12,
    table : {
      widths : ["*", 25, 25, "*"],
      body : [
        [
          {
            text : "Policy Format Contents",
            bold : true,
            alignment : "center",
            colSpan : 2,
            border : [false, false, false, false],
            margin : [0, 0, 0, 30]
          },
          {},
          {
            text : convertTextToRtl("محتوى الوثيقة"),
            bold : true,
            alignment : "center",
            colSpan : 2,
            style : "arabic",
            border : [false, false, false, false],
            margin : [0, 0, 0, 30]
          },
          {}
        ],
        [
          {
            text : "",
            border : [false, false, false, false]
          },
          {
            text : "Page",
            fontSize : 9,
            alignment : "center",
            margin : [0, 2, 0, 0]
          },
          {
            text : convertTextToRtl("الصفحة"),
            fontSize : 9,
            alignment : "center",
            style : "arabic",
            margin : [0, 2, 0, 0]
          },
          {
            text : "",
            border : [false, false, false, false]
          }
        ],
        ...detail_rows.map((row) => {
          return [
            {
              text : [
                {
                  text : row.english_title,
                  bold : true
                },
                row.english_value
              ]
            },
            {
              text : row.page_no,
              alignment : "center",
              colSpan : 2,
              fontSize : 9,
              margin : [0, 3, 0, 0]
            },
            {},
            {
              text : [
                {
                  text : convertTextToRtl(row.arabic_value)
                },
                {
                  text : ` : ${convertTextToRtl(row.arabic_title)}`,
                  bold : true
                }
              ],
              style : "arabic",
              alignment : "right"
            }
          ]
        }),
        [
          {
            text : [
              {
                text : "Annexure No. 5 : ",
                bold : true,
                lineHeight : 1.3
              },
              "Treatment Preauthorization"
            ],
          },
          {
            text : "26",
            alignment : "center",
            colSpan : 2,
            fontSize : 9,
            margin : [0, 3, 0, 0]
          },
          {},
          {
            text : [
              {
                text : ` : ${convertTextToRtl("الملحق رقم 5")}\n`,
                bold : true
              },
              {
                text : convertTextToRtl("التفويض المسبق للموافقة عىل العالج")
              }
            ],
            style : "arabic",
            alignment : "right"
          }
        ]
      ]
    }
  }
}

module.exports = Page_2