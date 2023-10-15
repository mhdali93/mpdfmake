// const generateMTRFPdf = require("./MTRF");
const generatePF1Document = require("./ULIP_PROPOSAL_FORM");
const generateLICPF01Document = require("./LIC_Proposal_Form_PF01");
const generateLICPF02Document = require("./LIC_Proposal_Form_PF02");
const generatePlan260Document = require("./Plan 260 Proposal Form UAE");

// generateMTRFPdf().then(() => {
//   console.log("Done");
// })

generatePF1Document().then(() => {
  console.log("ULIP_PROPOSAL_FORM Generated")
})

generateLICPF01Document().then(() => {
  console.log("LIC_Proposal_Form_PF01 Generated")
})


generateLICPF02Document().then(() => {
  console.log("LIC_Proposal_Form_PF02 Generated")
})

generatePlan260Document().then(() => {
  console.log("Plan_360_Proposal_Form_UAE Generated")
})