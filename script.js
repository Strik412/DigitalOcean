// script.js
function showMessage() {
  alert('You have deployed your site to DigitalOcean!');
}

// add event listener for button if present
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('alertBtn');
  if (btn) btn.addEventListener('click', showMessage);
});
