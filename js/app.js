// declared state of form
let state = {
  price: getNumber(document.querySelector('[name="price"]').value),
  loan_years: document.querySelector('[name="loan_years"]').value,
  down_payment: document.querySelector('[name="down_payment"]').value,
  interest_rate: document.querySelector('[name="interest_rate"]').value,
  property_tax: document.querySelector('[name="property_tax"]').value,
  home_insurance: document.querySelector('[name="home_insurance"]').value,
  hoa: document.querySelector('[name="hoa"]').value,
}

// declared variables for calculations
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

// removes characters and returns numbers only
function getNumber(str) {
  return Number(str.replace(/[^0-9\.-]+/g, ""))
}

// Initialize chart.js instance
let ctx = document.getElementById('myChart').getContext('2d');

let myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: labels,
    datasets: [{
      label: '# of Votes',
      data: [
        monthlyPrincipalInterest,
        monthlyPropertyTaxes,
        monthlyHomeInsurance,
        monthlyHOA
      ],
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1
    }]
  }
});

myChart.options.animation = false;

// add event listener to input fields
let i;
let inputTexts = document.getElementsByClassName('form-group__textInput');
for (i = 0; i < inputTexts.length; i++) {
  inputTexts[i].addEventListener('input', updateInputsState);
}

let inputSlides = document.getElementsByClassName('form-group__range-slide');
for (i = 0; i < inputSlides.length; i++) {
  inputSlides[i].addEventListener('input', updateInputsState);
}

function updateInputsState(event) {
  let name = event.target.name;
  let value = event.target.value;
  if (name == 'price') {
    value = getNumber(value);
  }

  if (event.target.type == 'range') {
    let total = (document.getElementsByClassName(`total__${name}`))[0].innerHTML = `${value}%`;
  }

  state = {
    ...state,
    [name]: value
  }
  console.log(state);
}
console.log(inputTexts);