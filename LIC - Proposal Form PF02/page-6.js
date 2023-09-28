const Page_6 = ({
  convertTextToRtl
}) => {
  return {
    layout : "customTableLayout",
    pageMargin : [0, 0, 0, 0],
    pageBreak : "after",
    fontSize : 8.5,
    table : {
      body : [
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                10,30,120,360
              ],
              body: [
                [
                  {
                    text: '16. Certified Proof of Identity and Proof of Residential Address.',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 4
                  },
                  {},{},{}
                ],
                [
                  {text:'A.',style:["cellHeader", "center"]},
                  {text:'Emirates ID (Photocopy both sides)', style:["cellHeader", "left"], colSpan:2},{},
                  {text:'Proposer\t\t\t\t\t\t\t\tLife to be Assured\t\t\t\t\t\t\t\tNominee   ',style:["left"]}
                ],
                [
                  {text:'B.',style:["cellHeader", "center"]},
                  {text:'Passport (photocopy with address page)', style:["cellHeader", "left"], colSpan:2},{},
                  {text:'Proposer\t\t\t\t\t\t\t\tLife to be Assured\t\t\t\t\t\t\t\tNominee   ',style:["left"]}
                ],
                [
                  {text:'C.',style:["cellHeader", "center"]},
                  {text:'Latest Utilities Bill / Telephone Bill', style:["cellHeader", "left"], colSpan:2},{},
                  {text:'Proposer\t\t\t\t\t\t\t\tLife to be Assured\t\t\t\t\t\t\t\tNominee   ',style:["left"]}
                ],
                [
                  {text:'D.',style:["cellHeader", "center"]},
                  {text:'Others', style:["cellHeader", "left"]},
                  {text:'Specify: '},
                  {text:'Proposer\t\t\t\t\t\t\t\tLife to be Assured\t\t\t\t\t\t\t\tNominee   ',style:["left"]}
                ]
              ],
            }
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                50, 
                "*", 
                "*", 
                "*", 
                "*"
              ],
              body: [
                [
                  {
                    text: '17. Declaration and Authorization',
                    style: ['header','defaultStyle',{"fontSize": 10}], 
                    colSpan: 5
                  },
                  {},{},{},{}
                ],
                [
                  { 
                    border: [true, false, true, false],
                    text: [
                      {text: 'I/We  understand  and  agree  that  notwithstanding  this  payment,  I/We  will  continue  to  be  responsible  for  payment  of  required  premiums  to  the Company within the required premium due-dates and that I/We will not hold Life Insurance Corporation (International) B.S.C.(c) (the “Company”) responsible in any manner for any actions initiated by the Company (including lapse/termination of policy) for reasons of any outstanding premium as on such premium due date. I/We confirm that the above filled in details are complete and true and that I/We will not hold the Company responsible in any manner for any premium payment being delayed or not being effected at all. I/We also agree that the Company is not obligated to inform me if any of my premium payment is not realized/received by the Company and that I/We alone will be responsible for consequences of such unpaid  premium  amounts.  In  the  event  of  non-realization  of  first  premium  deposit,  the  policy  if  issued  shall  be  treated  as  cancelled/void  from inception.\n'},
                      {text: 'I/We declare that I/We have clearly understood the terms and conditions of the product I/we am/are applying for and have clearly understood its features  and  benefits including  the  associated  risk factors  and charges.  I/We further  declare that  I/We  have  answered  all the  questions in this proposal form after clearly understanding them and that I/We have duly signed this form at required places. I/We confirm to have fully understood the nature of the questions and the importance of disclosing all information while answering such questions. I/We declare that the answers given by me to all questions in the proposal form are true and complete in every respect and that I/We have not withheld any material information or suppressed  any  material  fact.  I/We  undertake  to  notify  Life  Insurance  Corporation  (International)  B.S.C.(c)  (‘Company’) of any change in any information given by me in this proposal form. I/We confirm that I/We clearly understand that in case of any misstatement, misrepresentation and/or suppression of any data and/or information and/ or where I/We do not inform the Company of any changes in information provided in this proposal form, the Company has the right to repudiate all claim(s) under any policy if issued based on this proposal form and/or at sole discretion of the Company  to consider  any  issued policy  based  on  this  proposal form  as void. I/We  hereby  authorize  Life  Insurance  Corporation  (International) B.S.C.(c) to contact me anytime and through any medium (phone, email, SMS etc.) for purpose of obtaining more information about this proposal form and/or for keeping me/us informed about their other products and/or promotion activities. I/We hereby also authorize my/our past/present employer/business  associates,  medical  practitioner(s)/hospitals/laboratories/medical  providers,  insurance  companies,  financial  institutions  to release to Life Insurance Corporation (International) B.S.C.(c) all details, records, facts and information (including medical details, KYC records, AML-CTF & FATCA details) as required anytime by Life Insurance Corporation (International) B.S.C.(c) for assessment of risk and/or for processing of claims if subsequently an insurance policy is issued based on this proposal form. This proposal form shall be a part of the insurance policy in case of its acceptance by the Company. \n '},
                      {text: 'I/We declare that I/we have met the Financial Professional in person or virtually and that no third parties have been involved in providing the advice or the collection/certification of my/our due diligence documentation (where applicable) at any stage of the policy application process.'}
                    ],
                    style:["justify", "cellHeader"], 
                    colSpan: 5 
                  },
                  {},{},{},{}
                ],
                [
                  {
                    border: [true, false, false, true],
                    text: [
                      {text: '\n', style: ["center"]},
                      {text: 'Date\n', style: ["center"]},
                      {text: 'Place', style: ["center"]}
                    ],
                    style:["cellHeader"] 
                  },
                  {
                    border: [false, false, false, true],
                    text: [
                      {text: '\n'},
                      {text: '\n'},
                      {text: '\n'},
                      {text: ''}
                    ],
                    style: ['readOnly','center'], 
                  },
                  {
                    border: [false, false, false, true],
                    text: [
                      {text: '\n', style: ["center"]},
                      {text: '\n', style: ["center"]},
                      {text: 'Signature', style: ["center"]}
                    ],
                    style:["cellHeader"] 
                  },
                  {
                    border: [false, false, false, true],
                    text: [
                      {text: '\n'},
                      {text: '\n'},
                      {text: 'Proposer\n'},
                    ],
                    style: ['readOnly','center'], 
                  },
                  {
                    border: [false, false, true, true],
                    text: [
                      {text: '\n'},
                      {text: '\n'},
                      {text: 'Life to be Assured\n'},
                    ],
                    style: ['readOnly','center'], 
                  },
                ],
              ],
            },
          }
        ],
        [
          {
            border: [false, false, false, false],
            table: {
              widths: [
                95, 
                120,
                "*",
                190
              ],
              layout: "innerTableLayout",
              body: [
                [
                  {
                    text: '18. Financial Professional’s (Consultant’s) details and declaration. (To be filled by relevant financial professional)',
                    style: ['header','defaultStyle',{"fontSize": 9}], colSpan:4
                  },{},{},{}
                ],
                [
                  { text: "Consultant’s Confidential Report", style:["cellHeader", "left", {"bold": true}], colSpan:2 },{},
                  { text: 'Proposer', style:["cellHeader", "center", {"bold": true}] },
                  { text: 'Life to be Assured', style:["cellHeader", "center", {"bold": true}] }
                ],
                [
                  { text: 'Name of the Proposer/Life Assured ', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'How long do you know the LA/Proposer?', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'Are you related to LA/Proposer? If so, how?', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'Did you personally see the LA/Proposer?', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'Annual Income of LA/Proposer', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'Source of Income (Salary / Business / Other)', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'What is general state of health of LA/Proposer?', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'Do you have knowledge of any risk on health issues?', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: 'Do you have knowledge of any risk on financial issues?', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { text: '', style:["cellHeader"], colSpan:2 },{}, { text: ''}, { text: ''}
                ],
                [
                  { 
                    text: [
                      {text: 'Declaration: \n'},
                      {text: 'I declare that, to the best of my knowledge and belief, the information given is true and shall form the basis of the proposed contract with Life Insurance Corporation (International) B.S.C.(c). \n'},
                      {text: 'I confirm that I have met the customer whether in person or virtually, and that no third parties have been involved in providing the advice or the collection / certification of the customer due diligence documentation (where applicable) at any stage of the policy application process. '}
                    ], colSpan:4,
                    style: ["justify", "cellHeader"]
                  },{},{},{}
                ],
                [
                  { text: 'Name of the Consultant:', style:["cellHeader"] },
                  { text: '', colSpan:3 },{},{}
                ],
                [
                  { text: 'Consultant Code No:', style:["cellHeader"] },
                  {},
                  { text: 'CA / Broker / Bank Code:', style:["cellHeader"] },
                  {}
                ],
                [
                  { text: 'Mobile No:', style:["cellHeader"] },
                  {},
                  { text: 'Email Address:', style:["cellHeader"] },
                  {}
                ],
                [
                  { 
                    text: [
                      {text:"Place:\n"},
                      {text:"Date:"}
                    ], colSpan:2,
                  },{},
                  { 
                    text: [
                      {text:"\n"},
                      {text:"Signature of the Consultant"}
                    ], 
                    style:["readOnly","right"],
                    colSpan:2 
                  },{}
                ]
              ],
            }
          }
        ]
      ]
    }
  }
}

module.exports = Page_6