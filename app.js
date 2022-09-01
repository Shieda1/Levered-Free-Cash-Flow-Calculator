// https://www.omnicalculator.com/finance/levered-free-cash-flow

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const leveredfreecashflowRadio = document.getElementById('leveredfreecashflowRadio');
const EBITDARadio = document.getElementById('EBITDARadio');
const capitalexpendituresRadio = document.getElementById('capitalexpendituresRadio');
const netchangeinworkingcapitalRadio = document.getElementById('netchangeinworkingcapitalRadio');
const mandatorydebtrepaymentsRadio = document.getElementById('mandatorydebtrepaymentsRadio');

let leveredfreecashflow;
let EBITDA = v1;
let capitalexpenditures = v2;
let netchangeinworkingcapital = v3;
let mandatorydebtrepayments = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

leveredfreecashflowRadio.addEventListener('click', function() {
  variable1.textContent = 'EBITDA';
  variable2.textContent = 'Capital expenditures';
  variable3.textContent = 'Net change in working capital';
  variable4.textContent = 'Mandatory debt repayments';
  EBITDA = v1;
  capitalexpenditures = v2;
  netchangeinworkingcapital = v3;
  mandatorydebtrepayments = v4;
  result.textContent = '';
});

EBITDARadio.addEventListener('click', function() {
  variable1.textContent = 'Levered free cash flow';
  variable2.textContent = 'Capital expenditures';
  variable3.textContent = 'Net change in working capital';
  variable4.textContent = 'Mandatory debt repayments';
  leveredfreecashflow = v1;
  capitalexpenditures = v2;
  netchangeinworkingcapital = v3;
  mandatorydebtrepayments = v4;
  result.textContent = '';
});

capitalexpendituresRadio.addEventListener('click', function() {
  variable1.textContent = 'Levered free cash flow';
  variable2.textContent = 'EBITDA';
  variable3.textContent = 'Net change in working capital';
  variable4.textContent = 'Mandatory debt repayments';
  leveredfreecashflow = v1;
  EBITDA = v2;
  netchangeinworkingcapital = v3;
  mandatorydebtrepayments = v4;
  result.textContent = '';
});

netchangeinworkingcapitalRadio.addEventListener('click', function() {
  variable1.textContent = 'Levered free cash flow';
  variable2.textContent = 'EBITDA';
  variable3.textContent = 'Capital expenditures';
  variable4.textContent = 'Mandatory debt repayments';
  leveredfreecashflow = v1;
  EBITDA = v2;
  capitalexpenditures = v3;
  mandatorydebtrepayments = v4;
  result.textContent = '';
});

mandatorydebtrepaymentsRadio.addEventListener('click', function() {
  variable1.textContent = 'Levered free cash flow';
  variable2.textContent = 'EBITDA';
  variable3.textContent = 'Capital expenditures';
  variable4.textContent = 'Net change in working capital';
  leveredfreecashflow = v1;
  EBITDA = v2;
  capitalexpenditures = v3;
  netchangeinworkingcapital = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(leveredfreecashflowRadio.checked)
    result.textContent = `Levered free cash flow = ${computeleveredfreecashflow().toFixed(2)}`;

  else if(EBITDARadio.checked)
    result.textContent = `EBITDA = ${computeEBITDA().toFixed(2)}`;

  else if(capitalexpendituresRadio.checked)
    result.textContent = `Capital expenditures = ${computecapitalexpenditures().toFixed(2)}`;

  else if(netchangeinworkingcapitalRadio.checked)
    result.textContent = `Net change in working capital = ${computenetchangeinworkingcapital().toFixed(2)}`;

  else if(mandatorydebtrepaymentsRadio.checked)
    result.textContent = `Mandatory debt repayments = ${computemandatorydebtrepayments().toFixed(2)}`;
})

// calculation

// LFCF = EBITDA + Δ(NWC) - CapEx - Mandatory debt payment

function computeleveredfreecashflow() {
  return Number(EBITDA.value) + Number(netchangeinworkingcapital.value) - Number(capitalexpenditures.value) - Number(mandatorydebtrepayments.value);
}

function computeEBITDA() {
  return Number(leveredfreecashflow.value) - Number(netchangeinworkingcapital.value) + Number(capitalexpenditures.value) + Number(mandatorydebtrepayments.value);
}

function computecapitalexpenditures() {
  return Number(EBITDA.value) + Number(netchangeinworkingcapital.value) - Number(leveredfreecashflow.value) - Number(mandatorydebtrepayments.value);
}

function computenetchangeinworkingcapital() {
  return Number(leveredfreecashflow.value) - Number(EBITDA.value) + Number(capitalexpenditures.value) + Number(mandatorydebtrepayments.value);
}

function computemandatorydebtrepayments() {
  return Number(EBITDA.value) + Number(netchangeinworkingcapital.value) - Number(capitalexpenditures.value) - Number(leveredfreecashflow.value);
}