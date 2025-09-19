function setupFormValidation() {
    function showError(input, errorElem, message) {
        errorElem.textContent = message;
        errorElem.classList.add('visible');
        input.classList.add('input-error');
    }
    function hideError(input, errorElem) {
        errorElem.textContent = '';
        errorElem.classList.remove('visible');
        input.classList.remove('input-error');
    }
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const form = document.getElementById('contactForm');

    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError, 'El nombre es obligatorio.');
        } else {
            hideError(nameInput, nameError);
        }
    });

    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, emailError, 'Introduce un correo válido.');
        } else {
            hideError(emailInput, emailError);
        }
    });

    phoneInput.addEventListener('input', function() {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            showError(phoneInput, phoneError, 'El teléfono debe tener 10 dígitos.');
        } else {
            hideError(phoneInput, phoneError);
        }
    });

    form.addEventListener('submit', function(e) {
        let valid = true;
        if (nameInput.value.trim() === '') {
            showError(nameInput, nameError, 'El nombre es obligatorio.');
            valid = false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, emailError, 'Introduce un correo válido.');
            valid = false;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            showError(phoneInput, phoneError, 'El teléfono debe tener 10 dígitos.');
            valid = false;
        }
        if (!valid) {
            e.preventDefault();
        }
    });
}

document.addEventListener('DOMContentLoaded', setupFormValidation);
