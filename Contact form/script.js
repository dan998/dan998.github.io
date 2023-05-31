document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.Default();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
