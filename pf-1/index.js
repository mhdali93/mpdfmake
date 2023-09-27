const PdfPrinter = require('pdfmake');
const fonts = {
  OpenSans: {
    normal: './static/fonts/Open-Sans/OpenSans-Regular.ttf',
    bold: './static/fonts/Open-Sans/OpenSans-Bold.ttf',
    italics: './static/fonts/Open-Sans/OpenSans-Italic.ttf',
    bolditalics: './static/fonts/Open-Sans/OpenSans-BoldItalic.ttf'
  },
  arabic_fonts : {
    normal: './static/fonts/Noto_Naskh_Arabic/NotoNaskhArabic-Regular.ttf',
    bold: './static/fonts/Noto_Naskh_Arabic/NotoNaskhArabic-Bold.ttf',
  }
};
const printer = new PdfPrinter(fonts);
const fs = require('fs');

const Page_1 = require("./page-1");
const Page_2 = require("./page-2");
const Page_3 = require("./page-3");
const Page_4 = require("./page-4");

const convertTextToRtl = (text) => {
  return text.split(" ").reverse().join(" ");
}

const generatePF1Document = () => {

  return new Promise((resolve, reject) => {
    const docDefinition = {
      header: [
        {
          image: './static/images/uhip-header-left.png',
          width:50,
          absolutePosition: {x:30, y:30}
        }, 
        {
          image: './static/images/uhip-header-right.jpg',
          width:70,
          absolutePosition: {x: 500, y: 20}
        }
      ],
      footer: function(currentPage) {
        return [
          { text: currentPage, alignment: 'center' },
          {
            image: './static/images/uhip-footer.png',
            width: 150,
            absolutePosition: {x: 425, y: -10}
          },
        ]
      },
      content: [
        Page_1({ convertTextToRtl }),
        Page_2({ convertTextToRtl }),
        Page_3({ convertTextToRtl }),
        Page_4({ convertTextToRtl }),
      ],
      defaultStyle: {
        font: 'OpenSans',
        fontSize : 10
      },
      styles : {
        arabic : {
          font : "arabic_fonts"
        }
      }
    };
    
    const customTableLayouts = {
      customTableLayout: {
        hLineWidth: function (i, node) {
          return 0.25;
        },
        vLineWidth: function (i, node) {
          return 0.25;
        }
      }
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinition, { tableLayouts : customTableLayouts });
    let stream  = pdfDoc.pipe(fs.createWriteStream(`./pf-1.pdf`));
    pdfDoc.end();

    stream.on('finish', () => {
      resolve("Done");
    });
  })
}

module.exports = generatePF1Document;