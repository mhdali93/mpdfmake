// const generateMTRFPdf = require("./MTRF");
const generatePF1Document = require("./ULIP_PROPOSAL_FORM");

// generateMTRFPdf().then(() => {
//   console.log("Done");
// })

generatePF1Document().then(() => {
  console.log("ULIP_PROPOSAL_FORM Generated")
})