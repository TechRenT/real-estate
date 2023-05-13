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
labels = ["Principal & Interest", "Property Taxes", "Home Insurance", "HOA"],
backgroundColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)"
],

borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)"
];


function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""))
}

const ctx = document.getElementById('myChart').getContext('2d');

let myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
console.log(state);