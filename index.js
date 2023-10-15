// const generateMTRFPdf = require("./MTRF");
const generatePF1Document = require("./ULIP_PROPOSAL_FORM");
const generateLICPF01Document = require("./LIC_Proposal_Form_PF01");

// generateMTRFPdf().then(() => {
//   console.log("Done");
// })

generatePF1Document().then(() => {
  console.log("ULIP_PROPOSAL_FORM Generated")
})

generateLICPF01Document().then(() => {
  console.log("LIC_Proposal_Form_PF01 Generated")
})