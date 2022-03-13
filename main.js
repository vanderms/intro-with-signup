const form = document.querySelector('.form');
const errorTemplate = document.querySelector('.error-template');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.querySelectorAll('.error-message, .icon-error').forEach((elem) => {
    elem.remove();
  });

  let valid = true;

  form.querySelectorAll('.input').entries.forEach((input) => {
    if (!input.checkValidity()) {
      valid = false;
      let message = input.value ? input.dataset.invalid : input.dataset.empty;
      input.parentElement.appendChild(errorTemplate.content.cloneNode(true));
      input.parentElement.querySelector('.error-message').textContent = message;
    }
  });

  if (valid) {
    form.reset();
  }
});
