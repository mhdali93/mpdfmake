const detail_rows = [
  {
    english_title : "The Policy :",
    english_details : "Unified Health Insurance Policy and its  Annexures.",
    arabic_title : "لوثيقة",
    arabic_details : ["الوثيقة الموحّدة للتأمين الصحي وملاحقها"]
  },
  {
    english_title : "Insurance Application :",
    english_details : "Application by the policyholder in accordance with the details specified in Annexure No. (2) attached with this policy.",
    arabic_title : "طلب التأمين",
    arabic_details : [
      "لطلبالذي يتولى المؤمن له تعبئته وفقالبيانات المحددة",
      "بالملحق رقم (2) المرفق في هذا النموذج"
    ]
  },
  {
    english_title : "The Insured :",
    english_details : "The worker or dependent or domestic workers to whom the insurer renders its obligations under the provisions of the policy.",
    arabic_title : "",
    arabic_details : [
      "المؤمن عليه: العامل أو المعال أو المستخدمين داخل",
      "المنازل أو خارجها الذين يؤدي إليهم المؤمن ما التزم به",
      "بموجب أحكام الوثيقة"
    ]
  },
  {
    english_title : "Policyholder :",
    english_details : "Natural or juristic person who pays the insurance premium and in whose name the policy is issued in favour of the insured.",
    arabic_title : "لمؤمن له",
    arabic_details : [
      "الشخص الطبيعي أو الاعتباري الذي يلتزم بدفع قسط",
      "التأمين وتصدر الوثيقة باسمه لصالح المؤمن عليه"
    ]
  },
  {
    english_title : "Insurer :",
    english_details : "Insurance company licensed to carry out health insurance business in Oman",
    arabic_title : "المؤمن",
    arabic_details : [
      "شركة التأمين المرخص لها بمزاولة نشاط التأمين",
      "الصحي في السلطنة"
    ]
  },
  {
    english_title : "Domestic workers :",
    english_details : "Every person who performs works inside or outside the house such as driver or maid or cook and the like.",
    arabic_title : "لمستخدمون داخل المنازل أو خارجها",
    arabic_details : [
      "كل شخص يؤدي عملاً داخل المنزل أو خارجه، مثل",
      "السائق أو المربية أو الطباخ ومَن في حكمهم"
    ]
  },
  {
    english_title : "Premium :",
    english_details : "Amount of money the policyholder undertakes to pay in consideration of the insurer bearing costs of health care for the Insured under the policy.",
    arabic_title : "قسط التأمين",
    arabic_details : [
      "مبلغ من المال يلتزم المؤمن له بسداده مقابل التزام المؤمن",
      "تحمل تكاليف الرعاية الصحية للمؤمن عليه بموجب الوثيقة"
    ]
  },
  {
    english_title : "Insurance Coverage :",
    english_details : "Basic health benefits and optional benefits are available and agreed in details between the insurer and the policyholder in favour of the Insured under the policy.",
    arabic_title : "التغطية التأمينية",
    arabic_details : [
      "المنافع الصحية الأساسية والمزايا الاختيارية المتاحة",
      "والمتفق عليها تفصيلا بين المؤمن والمؤمن له لصالح",
      "المؤمن عليه بموجب الوثيقة"
    ]
  },
  {
    english_title : "Basic Health Benefits :",
    english_details : "Health services available to the Insured under health insurance services in accordance with Annexure No. (4) attached with this policy.",
    arabic_title : "لمنافع الصحية الأساسية",
    arabic_details : [
      "الخدمات الصحية المتاحة من خدمات التأمين الصحي",
      "للمؤمن عليه وفقا للمحلق رقم 4 المرفق في هذا النموذج"
    ]
  },
  {
    english_title : "Licensed Doctor :",
    english_details : "A Clinician licensed by the Ministry of Health to practice the Medical profession.",
    arabic_title : "لطبيب المرخص",
    arabic_details : [
      "الطبيب المرخص له بمزاولة مهنة الطب من وزارة الصحة"
    ]
  },
  {
    english_title : "Consultant :",
    english_details : "A Clinician licensed by the Ministry of Health to practice medicine in the capacity of a Consultant Doctor.",
    arabic_title : "الاستشاري",
    arabic_details : [
      "الطبيب المستوفي لشروط شغل وظيفة طبيب استشاري"
    ]
  },
]

const Page_3 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    margin : [0, 60, 0, 0],
    pageBreak : "after",
    table : {
      widths : [20, "*", "*", 20],
      body : [
        [
          {
            text : "Chapter I: Definitions",
            bold : true,
            colSpan : 2,
            margin : [5,5,5,3]
          },
          {},
          {
            text : `${convertTextToRtl("الفصل الأول: التعريفات")} \t-`,
            alignment : "right",
            bold : true,
            colSpan : 2,
            margin : [5,5,5,3],
            style : "arabic"
          },
          {}
        ],
        ...detail_rows.map((detail_row, ind) => [
          {
            text : `${ind + 1})`,
            bold : true
          },
          {
            text : [
              {
                text : `${detail_row.english_title}\n`,
                bold : true
              },
              {
                text : detail_row.english_details
              }
            ],
            fontSize : 9.5
          },
          {
            text : [
              {
                text : detail_row.arabic_title ? `: ${convertTextToRtl(detail_row.arabic_title)}\n` : "",
                bold : true
              },
              ...detail_row.arabic_details.map((arabic_detail) => {
                return {
                  text : `${convertTextToRtl(arabic_detail)}\n`
                }
              })
            ],
            style : "arabic",
            alignment : "right"
          },
          {
            text : `${ind + 1})`,
            bold : true,
            alignment : "right"
          }
        ])
      ]
    }
  }
}

module.exports = Page_3;