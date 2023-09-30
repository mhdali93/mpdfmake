// const generateMTRFPdf = require("./MTRF");
// const generatePF1Document = require("./ULIP_PROPOSAL_FORM");
const generateLICPF02Document = require("./LIC_Proposal_Form_PF02");

// generateMTRFPdf().then(() => {
//   console.log("Done");
// })

// generatePF1Document().then(() => {
//   console.log("ULIP_PROPOSAL_FORM Generated")
// })

generateLICPF02Document().then(() => {
  console.log("LIC_Proposal_Form_PF02 Generated")
})