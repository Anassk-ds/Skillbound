// Skillbound Academy — small interactivity layer (no framework, plain JS)
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('nlContactForm');
  if (!form) return;

  var successBox = document.getElementById('nlFormSuccess');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }

    // No backend on this static build — simulate a successful submission
    // so the form flow can still be reviewed end to end.
    successBox.classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
});
