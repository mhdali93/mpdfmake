const detail_rows = [
  {
    english_title : "Coverage Commencement Date :",
    english_details : "The date stated in Annexure No. (1) attached with this policy. This is the date (i.e. time, day, month, and year) when the insurance coverage becomes active",
    arabic_title : "تاريخ بدء التغطية",
    arabic_details : [
      "التاريخ المبيّن في الملحق رقم (1) المرفق في هذا النموذج"
    ]
  },
  {
    english_title : "Maximum Limit of Insurance Coverage :",
    english_details : "The maximum amount of money the Insured may be compensated for covered services as result of receiving appropriate treatment during the policy period.",
    arabic_title : "الحد الأعلى للتغطية التأمينية",
    arabic_details : [
      "إجمالي المبالغ المالية التي قد يطالب بها المؤمن عليه",
      "نتيجة تلقيه العلاج المناسب خلال مدة الوثيقة"
    ]
  },
  {
    english_title : "Worker :",
    english_details : "Every natural person who is actually employed by the policyholder and registered as such in the employer’s registers.",
    arabic_title : "العامل",
    arabic_details : [
      "ي شخص طبيعي يزاول العمل فعلياً لدى المؤمن",
      "له و مسجل بتلك الصفة في سجلاته"
    ]
  },
  {
    english_title : "Dependent :",
    english_details : `a- Every natural person who is a spouse of the worker, is a legal resident in Oman, and is registered as such in the registers of the policyholder.
      b- Children or the spouse of the worker whose ages are not more than 21 years and are registered as such in the registers of the policyholder.
      c- Any natural person who doesn’t belong to (a) or (b) and actually and legally resides in Oman and is dependent to the worker and is registered as such in the registers of the policyholder.`,
    arabic_title : "المُعال",
    arabic_details : [
      "1 ." + "كل من يرتبط بعلاقة زوجية مع العامل، ويقيم إقامة",
      "فعلية وقانونية في السلطنة، على أن يكون مسجلاً بهذه ",
      "الصفة في سجلات المؤمن له",
      "2 ." + "أبناء العامل أو أبناء مَن يرتبط به بعلاقة زوجية، ممن",
      "لا  تزيد أعمارهم على  (21) واحد وعشرون عاما،",
      "ومسجل بهذه الصفة لدى المؤمن له.",
      "3 ." + " أي شخص آخر لا ينتمي إلى أي من الفئتَين )أ( أو",
      ")ب(" + "ويقيم في السلطنة إقامة فعلية وقانونية ويعتمد على",
      "العامل في إعالته، ومسجل بهذه الصفة لدى المؤمن له."
    ]
  },
  {
    english_title : "Coinsurance/ Contribution :",
    english_details : "Percentage borne by the Insured toward the cost of medical expenses in accordance with Annexure No. (4) attached with this form.",
    arabic_title : "المساهمة",
    arabic_details : [
      "نسبة مساهمة المؤمن عليه في تكلفة المصاريف",
      "الطبية وفقاً للملحق رقم (4) المرفق في هذا النموذج"
    ]
  },
  {
    english_title : "Health Service Provider :",
    english_details : "Approved health facility duly licensed by the Ministry of Health to provide health services in Oman in accordance with the applicable laws and regulations.",
    arabic_title : "مقدم الخدمة",
    arabic_details : [
      "المرفق الصحي المعتمد من وزارة الصحة، والمرخص له",
      "وفقاً للأنظمة المعمول بها بتقديم الخدمات الصحية في السلطنة"
    ]
  },
  {
    english_title : "Health Services Providers Network :",
    english_details : "A group of healthcare service providers designated accredited by the insurer to provide healthcare to the Insured.",
    arabic_title : "شبكة مقدمي الخدمة",
    arabic_details : [
      "مجموعة مقدمي الخدمة الصحية المعتمدين والمحددين",
      "من قبل المؤمن لتقديم خدمة الرعاية الصحية للمؤمن عليه"
    ]
  },
  {
    english_title : "Illness :",
    english_details : "Health condition suffered by the Insured, which necessitate health care during the period of the policy",
    arabic_title : "الحساسية",
    arabic_details : [
      "حالة مرضية تنتج عن تحسّس الفرد بصفة خاصة لأنواع معينة",
      "من الغذاء أو الطقس أو غبار الطلع أو أي محدثات أخرى من",
      "النباتات والحشرات والحيوانات والمعادن والكيماويات",
      "والعناصر أو المواد الأخرى"
    ]
  },
  {
    english_title : "Allergy :",
    english_details : "Sensitive to certain types of food, weather or pollen or any allergens of plants, insects, animals, minerals, chemicals or other elements or material",
    arabic_title : "المرض",
    arabic_details : [
      "الحالة الصحية التي يعاني منها المؤمن عليه، وتتطلب",
      "أن يتلقى فيها الرعاية الصحية خلال مدة الوثيقة."
    ]
  },
]

const Page_4 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    margin : [0, 55, 0, 0],
    pageBreak : "after",
    table : {
      widths : [20, "*", "*", 20],
      body : [
        ...detail_rows.map((detail_row, ind) => [
          {
            text : `${ind + 12})`,
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
            fontSize : 9
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
            text : `${ind + 12})`,
            bold : true,
            alignment : "right"
          }
        ])
      ]
    }
  }
}

module.exports = Page_4;