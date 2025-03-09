'use strict';

const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const emailValue = form.elements.email.value.trim();
    const passwordValue = form.elements.password.value.trim();
    const formData = {email: emailValue, password: passwordValue};
    emailValue === '' || passwordValue === ''
         ? alert('All form fields must be filled in')
         : (console.log(formData), form.reset());
};

