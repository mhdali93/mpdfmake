const PdfPrinter = require('pdfmake');
const fonts = {
  OpenSans: {
    normal: './assets/fonts/Open-Sans/OpenSans-Regular.ttf',
    bold: './assets/fonts/Open-Sans/OpenSans-Bold.ttf',
    italics: './assets/fonts/Open-Sans/OpenSans-Italic.ttf',
    bolditalics: './assets/fonts/Open-Sans/OpenSans-BoldItalic.ttf'
  },
  Arial: {
    normal: './assets/fonts/Arial/Arial-Regular.ttf',
    bold: './assets/fonts/Arial/Arial-Bold.ttf',
    italics: './assets/fonts/Arial/Arial-Italic.ttf',
    bolditalics: './assets/fonts/Arial/Arial-Bold-Italic.ttf'
  },
  arabic_fonts : {
    normal: './assets/fonts/Noto_Naskh_Arabic/NotoNaskhArabic-Regular.ttf',
    bold: './assets/fonts/Noto_Naskh_Arabic/NotoNaskhArabic-Bold.ttf',
  },
  Times:{
    normal: './assets/fonts/Times/Times-New-Roman.ttf',
    bold: './assets/fonts/Times/Times-New-Roman-Bold.ttf',
    italics: './assets/fonts/Times/Times-New-Roman-Italic.ttf',
    bolditalics: './assets/fonts/Times/Times-New-Roman-Bold-Italic.ttf'
  }
};
const printer = new PdfPrinter(fonts);
const fs = require('fs');

const Page_1 = require("./page-1");
const Page_2 = require("./page-2");
const Page_3 = require("./page-3");
const Page_4 = require("./page-4");
const Page_5 = require("./page-5");
const Page_6 = require("./page-6");
const Page_7 = require("./page-7");
const Page_8 = require("./page-8");
const Page_9 = require("./page-9");

const convertTextToRtl = (text) => {
  return text.split(" ").reverse().join(" ");
}

const innerTableLayouts = {
  zeroPadding:{
    paddingTop: (i, node) => 0,
    paddingBottom: (i, node) => 0
  }
};

const generatePF1Document = () => {

  return new Promise((resolve, reject) => {
    const docDefinition = {
      pageMargins : [15,18,18,18],
      content: [
        Page_1({ convertTextToRtl, innerTableLayouts }),
        Page_2({ convertTextToRtl }),
        Page_3({ convertTextToRtl }),
        Page_4({ convertTextToRtl }),
        Page_5({ convertTextToRtl }),
        Page_6({ convertTextToRtl }),
        Page_7({ convertTextToRtl, innerTableLayouts }),
        Page_8({ convertTextToRtl }),
        Page_9({ convertTextToRtl }),
      ],
      defaultStyle: {
        font: 'Arial',
        fontSize : 9
      },
      styles : {
        arabic : {
          font : "arabic_fonts"
        },
        header: {
          bold: true,
          color: "#FFF",
          fillColor: "#006FC0"
        },
        cellHeader: {
          fillColor:"#C5D9F0"
        },
        center: {
          alignment: 'center'
        },
        left: {
          alignment: 'left'
        },
        justify: {
          alignment: 'justify'
        },
        right: {
          alignment: 'right'
        },
        readOnly: {
          color: "#AAA"
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
    let stream  = pdfDoc.pipe(fs.createWriteStream(`./ULIP_PROPOSAL_FORM.pdf`));
    pdfDoc.end();

    stream.on('finish', () => {
      resolve("Done");
    });
  })
}

module.exports = generatePF1Document;