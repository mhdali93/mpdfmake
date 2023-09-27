const PdfPrinter = require('pdfmake');
const fonts = {
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  }
};
const printer = new PdfPrinter(fonts);
const fs = require('fs');

const generateMTRFPdf = () => {

  return new Promise((resolve, reject) => {
    const docDefinition = {
      pageSize : {
        width : 530,
        height : 'auto',
      },
      pageMargins : [18,18,18,18],
      content: [
        {
          image : "./static/images/takaful-oman.jpg",
          width : 494,
          margin : [0,0,0,10]
        },
        {
          table: {
              widths:'*',
              body: [
                [{
                  border: [false, false, false, false],
                  text: 'MEDICAL TEST REQUEST FORM',
                  style: 'header',
                }]
              ]
          }
        },
    
        {
          style : 'detailTable',
          table: {
              widths : [110, '*', 110, '*'],
              body: [
                [
                  {
                    text: 'MTRF No',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "123",
                    style: ['textCenter', 'detailValue'],
                  },
                  {
                    text: 'Office Name',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: 'Head Office',
                    style: ['textCenter', 'detailValue'],
                  },
                ],
                [
                  {
                    text: 'MTRF Date',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "10-9-2023",
                    style: ['textCenter', 'detailValue'],
                  },
                  {
                    text: 'MTRF Valid Upto',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "10-10-2023",
                    style: ['textCenter', 'detailValue'],
                  },
                ]
              ]
          },
          layout: "customTableLayout"
        },
    
        {
          table: {
              widths:'*',
              body: [
                [{
                  border: [false, false, false, false],
                  text: 'DETAILS OF THE APPLICANT',
                  style: 'header',
                }]
              ]
          }
        },
        {
          style : 'detailTable',
          table: {
              widths : [110, '*'],
              body: [
                [
                  {
                    text: 'Name',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "Customer Name",
                    style: ['detailValue'],
                  },
                ],
                [
                  {
                    text: 'DOB',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "10-01-1998",
                    style: ['detailValue'],
                  },
                ],
                [
                  {
                    text: 'SEX',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "MALE",
                    style: ['detailValue'],
                  },
                ],
                [
                  {
                    text: 'Civil ID',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "3322333",
                    style: ['detailValue'],
                  },
                ],
                [
                  {
                    text: 'Mobile No',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "88885555",
                    style: ['detailValue'],
                  },
                ]
              ]
          },
          layout: "customTableLayout"
        },
        {
          table: {
              widths:'*',
              body: [
                [{
                  border: [false, false, false, false],
                  text: 'MEDICAL CENTER DETAILS',
                  style: 'header',
                }]
              ]
          }
        },
        {
          style : 'detailTable',
          table: {
              widths : [110, '*'],
              body: [
                [
                  {
                    text: 'Name of the centre ',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "Alpha",
                    style: ['detailValue'],
                  },
                ],
                [
                  {
                    text: 'Location',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "Beta",
                    style: ['detailValue'],
                  },
                ],
                [
                  {
                    text: 'Contact Person',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "ALI",
                    style: ['detailValue'],
                  },
                ],
                [
                  {
                    text: 'Contact Number',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "88552222",
                    style: ['detailValue'],
                  },
                ],
              ]
          },
          layout: "customTableLayout"
        },
        {
          margin : [0,0,0,10],
          table: {
              widths : [110, '*', 110, 70],
              body: [
                [
                  {
                    text: 'Date of Appointment',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "05-10-2023",
                    style: ['textCenter', 'detailValue'],
                  },
                  {
                    text: 'Time of appointment',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: "10:00 AM",
                    style: ['textCenter', 'detailValue'],
                  },
                ]
              ]
          },
          layout: "customTableLayout"
        },
        {
          margin : [0,0,0,10],
          table: {
              widths : ['*', '*'],
              body: [
                [
                  {
                    text: 'Medical Cost needs to be borne by :',
                    style: ['detailTitle', 'detailValue'],
                  },
                  {
                    text: 'Company (Dhofar Insurance Company)',
                    style: ['textCenter', 'detailValue'],
                  }
                ]
              ]
          },
          layout: "customTableLayout"
        },
        {
          table: {
              widths:'*',
              body: [
                [{
                  border: [false, false, false, false],
                  text: 'DETAILS OF MEDICAL TEST ',
                  style: 'header',
                }]
              ]
          }
        },
        {
          style : 'detailTable',
          table: {
              widths : ['*', 70, '*', 70],
              body: [
                [
                  {
                    text: '1. Medical Examination Report',
                    style: ['detailValue'],
                  },
                  {
                    text: "Yes",
                    style: ['textCenter', 'detailValue'],
                  },
                  {
                    text: '2. Urine Analysis',
                    style: ['detailValue'],
                  },
                  {
                    text: "No",
                    style: ['textCenter', 'detailValue'],
                  }
                ],
                [
                  {
                    text: '3. Lab 1 (Complete Blood Count (Haemogram), HbA1c, Serum Creatinine)',
                    style: ['detailValue'],
                    lineHeight : 1.3,
                    margin : [0, 3, 0, -2]
                  },
                  {
                    text: "Yes",
                    style: ['textCenter', 'detailValue'],
                    margin : [0, 15, 0, 0]
                  },
                  {
                    text: '4. ECG (Electrocardiogram)',
                    style: ['detailValue'],
                    margin : [0, 15, 0, 0]
                  },
                  {
                    text: "Yes",
                    style: ['textCenter', 'detailValue'],
                    margin : [0, 15, 0, 0]
                  }
                ],
                [
                  {
                    text: '5. Lab 2 (Complete Blood Count (Haemogram), HbA1c, Serum Creatinine, Lipid Screening (Total Cholesterol, HDL Cholestrol, LDL Cholestrol and Triglycerides), Liver Function Test (SGPT, SGOT, GGT, Total Bilirubin), HBsAG)',
                    style: ['detailValue'],
                    lineHeight : 1.3,
                    colSpan : 3,
                    margin : [0, 3, 0, -2]
                  },
                  {},{},
                  {
                    text: "No",
                    style: ['textCenter', 'detailValue'],
                    margin : [0, 15, 0, 0]
                  }
                ],
                [
                  {
                    text: '6. TMT',
                    style: ['detailValue'],
                    margin : [0, 9, 0, 0]
                  },
                  {
                    text: "No",
                    style: ['textCenter', 'detailValue'],
                    margin : [0, 9, 0, 0]
                  },
                  {
                    text: '7. HIV (Human Immunodeficiency Virus) & HCV (For Hepatitis C)',
                    style: ['detailValue'],
                    lineHeight : 1.3,
                    margin : [0, 3, 0, -2]
                  },
                  {
                    text: "No",
                    style: ['textCenter', 'detailValue'],
                    margin : [0, 9, 0, 0]
                  }
                ],
                [
                  {
                    text: '8. Others',
                    style: ['detailValue']
                  },
                  {
                    text: "",
                    style: ['detailValue'],
                    colSpan : 3
                  },
                  {},{},
                ],
              ]
          },
          layout: "customTableLayout"
        },
        {
          image : "./static/images/signature.png",
          width : 200
        },
        {
          text : "Authorized Signatory",
          margin : [10,5,0,10],
          fontSize : 10
        },
        {
          table: {
              widths:'*',
              body: [
                [{
                  border: [false, false, false, false],
                  text: 'INSTRUCTIONS FOR THE CUSTOMER',
                  style: 'header',
                }]
              ]
          }
        },
        {
          fontSize : 10,
          ol: [
            {text : 'Kindly carry original Civil ID / Resident ID', style : 'listItem'},
            {text : 'Please wear sports shoes and apparel (dress) for conducting Treadmill test, if applicable', style : 'listItem'}
          ]
        },
        {
          margin : [0,10,0,0],
          table: {
              widths:'*',
              body: [
                [{
                  border: [false, false, false, false],
                  text: 'INSTRUCTIONS TO THE MEDICAL CENTER',
                  style: 'header',
                }]
              ]
          }
        },
        {
          fontSize : 10,
          ol: [
            {
              text : 'Please ensure that all details regarding the customer have been correctly entered in the MER form and reports', style : 'listItem'
            },
            {
              text : "Please verify Applicant's Civil / Resident ID before conducting the test and provided stamped copy with the test reports",
              style : 'listItem'
            },
            {
              text : "Do not perform tests not mentioned in this request",
              style : 'listItem'
            },
            {
              text : "Do not handover the medical reports anyone other than us. Please e-mail scanned copies to : lifeuw@dhofarinsurance.com",
              style : 'listItem'
            },
            {
              text : "ECG Tracings should be signed by the Physician with his / her comments",
              style : 'listItem'
            },
            {
              text : "TMT Tracings should be signed by the Cardiologist with his / her comments",
              style : 'listItem'
            }
          ]
        },
      ],
      defaultStyle: {
        font: 'Helvetica'
      },
      styles : {
        header : {
          fontSize : 15,
          color : '#fff',
          alignment : "center",
          margin : [0,5, 0, 1],
          fillColor: '#70AD47',
        },
        detailTable : {
          margin : [0, 10]
        },
        detailTitle : {
          fillColor : '#70AD47',
          color : '#fff',
          margin : [0, 3, 0, 1]
        },
        detailValue : {
          fontSize : 10,
          margin : [0, 3, 0, 1]
        },
        textCenter : {
          alignment : 'center'
        },
        listItem : {
          margin : [15, 10, 0, 0],
          lineHeight : 1.3
        }
      }
    };
    
    const mtrfTableLayouts = {
      customTableLayout: {
        hLineWidth: function (i, node) {
          return 0.25;
        },
        vLineWidth: function (i, node) {
          return 0.25;
        }
      }
    };
    
    const pdfDoc = printer.createPdfKitDocument(docDefinition, { tableLayouts : mtrfTableLayouts });
    pdfDoc.pipe(fs.createWriteStream("./mtrf-document.pdf"));
    pdfDoc.end();
    resolve("Done");
  })
}

module.exports = generateMTRFPdf;