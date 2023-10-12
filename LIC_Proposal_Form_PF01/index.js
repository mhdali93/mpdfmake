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

const Page_2 = require("./page-2");
const Page_3 = require("./page-3");
const Page_4 = require("./page-4");
const Page_5 = require("./page-5");
const Page_6 = require("./page-6");
const Page_7 = require("./page-7");
const Page_8 = require("./page-8");
const Page_9 = require("./page-9");
const Page_10 = require("./page-10");
const Page_11 = require("./page-11");
const Page_12 = require("./page-12");
const Page_13 = require("./page-13");
const Page_14 = require("./page-14");
const Page_15 = require("./page-15");
const Page_16 = require("./page-16");
const Page_17 = require("./page-17");
const Page_18 = require("./page-18");
const Page_19 = require("./page-19");

const convertTextToRtl = (text) => {
  return text.split(" ").reverse().join(" ");
}

const innerTableLayouts = {
  zeroPadding:{
    paddingTop: (i, node) => 0,
    paddingBottom: (i, node) => 0
  }
};

const generateLICPF01Document = () => {

  return new Promise((resolve, reject) => {
    const docDefinition = {
      pageMargins : [15,18,18,18],
      content: [
        Page_2({ convertTextToRtl }),
        Page_3({ convertTextToRtl }),
        Page_4({ convertTextToRtl }),
        Page_5({ convertTextToRtl }),
        Page_6({ convertTextToRtl }),
        Page_7({ convertTextToRtl }),
        Page_8({ convertTextToRtl }),
        Page_9({ convertTextToRtl }),
        Page_10({ convertTextToRtl }),
        Page_11({ convertTextToRtl }),
        Page_12({ convertTextToRtl }),
        Page_13({ convertTextToRtl }),
        Page_14({ convertTextToRtl }),
        Page_15({ convertTextToRtl }),
        Page_16({ convertTextToRtl }),
        Page_17({ convertTextToRtl }),
        Page_18({ convertTextToRtl }),
        Page_19({ convertTextToRtl }),
      ],
      defaultStyle: {
        font: 'Arial',
        fontSize : 9,
        color: '#8e0f6c'
      },
      styles : {
        arabic : {
          font : "arabic_fonts"
        },
        header: {
          fillColor: "#f8eff2"
        },
        bold: { bold: true },
        arial: { font: 'Arial' },
        times: { font: 'Times' },
        sans: { font: 'OpenSans' },
        cellHeader: { fillColor:"#C5D9F0" },
        center: { alignment: 'center' },
        left: { alignment: 'left' },
        justify: { alignment: 'justify' },
        right: { alignment: 'right' },
        readOnly: { color: "#AAA" }
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
    let stream  = pdfDoc.pipe(fs.createWriteStream(`./LIC_Proposal_Form_PF01.pdf`));
    pdfDoc.end();

    stream.on('finish', () => {
      resolve("Done");
    });
  })
}

module.exports = generateLICPF01Document;