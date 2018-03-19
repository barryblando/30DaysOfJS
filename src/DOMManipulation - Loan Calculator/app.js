// Listen for submit button
document.getElementById('loan-form').addEventListener('submit', function(e) {
  // Hide results
  document.getElementById('results').style.display = 'none';
  //  Show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1000);

  //since it's a form submit we want to prevent default behavior which is redirect to another page
  e.preventDefault();
});

// Calculate Results
function calculateResults() {
  // UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute Monthly Payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = formatNumber(monthly);
    totalPayment.value = formatNumber((monthly * calculatedPayments));
    totalInterest.value = formatNumber(((monthly * calculatedPayments) - principal));

    // Show results
    document.getElementById('results').style.display = 'block';
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please Check Your Numbers');
  }
}

function formatNumber(num) {
  let parts, int;

  // absolute simple removes the sign off the number, let's use the same num 'cause it's only a regular variable, so I'm basically overriding the num argument.
  num = Math.abs(num);
  // Use toFixed method from Number prototype, js automatically converts primitive to object if we want.
  num = num.toFixed(2);
  // split into two parts and will be stored in array
  parts = num.split('.');

  int = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");

  return int;
}

// Show Error
function showError(error) {
  // Show results
  document.getElementById('results').style.display = 'none';
  // Hide loader
  document.getElementById('loading').style.display = 'none';

  // Create  a div
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 2 seconds
  setTimeout(clearError, 2000);
}

// Clear error
function clearError() {
  document.querySelector('.alert').remove();
}