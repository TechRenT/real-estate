let state = {
  price: getNumber(document.querySelector('[name="price"]').value),
  loan_years: document.querySelector('[name="loan_years"]').value,
  down_payment: document.querySelector('[name="down_payment"]').value,
  interest_rate: document.querySelector('[name="interest_rate"]').value,
  property_tax: document.querySelector('[name="property_tax"]').value,
  home_insurance: document.querySelector('[name="home_insurance"]').value,
  hoa: document.querySelector('[name="hoa"]').value,
}
let totalLoan,
totalMonths,
monthlyInterest,
monthlyPrincipalInterest,
monthlyPropertyTaxes,
monthlyHomeInsurance,
monthlyHOA,


function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""))
}
console.log(state);