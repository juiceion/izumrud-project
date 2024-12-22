import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/svg-icon';
import 'modules/common/promo-card';
import './style.less';


const form = document.getElementById('promoForm');
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const phoneInput = document.getElementById('phone');


if (form && dropZone && fileInput) {

// Validation patterns
    const patterns = {
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        phone: /^\+7\(\d{3}\)\d{3}\d{2}\d{2}$/,
        name: /^[а-яА-ЯёЁ\s-]{2,}$/
    };

// Show error for a field
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        input.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('visible');
    }

// Hide error for a field
    function hideError(input) {
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.error-message');

        input.classList.remove('error');
        errorElement.classList.remove('visible');
    }

// Validate single field
    function validateField(input) {
        const value = input.value.trim();

        if (!value) {
            showError(input, 'Пожалуйста, заполните все обязательные поля');
            return false;
        }

        if (input.id === 'email' && !patterns.email.test(value)) {
            showError(input, 'Пожалуйста, введите корректный email');
            return false;
        }

        if (input.id === 'phone' && !patterns.phone.test(value)) {
            showError(input, 'Пожалуйста, введите корректный номер телефона');
            return false;
        }

        if (input.id === 'name' && !patterns.name.test(value)) {
            showError(input, 'ФИО должно содержать только русские буквы');
            return false;
        }

        hideError(input);
        return true;
    }

// Phone mask
    phoneInput.addEventListener('input', function (e) {
        let x = e.target.value.replace(/\D/g, '')
            .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + ') - ' +
            (x[3] ? x[3] : '') +
            (x[4] ? ' - ' + x[4] : '') +
            (x[5] ? '-' + x[5] : '');

        validateField(e.target);
    });

// Real-time validation
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => validateField(input));
    });

// File handling
    function handleFile(file) {
        const fileError = document.getElementById('fileError');

        if (file.size > 10 * 1024 * 1024) {
            fileError.textContent = 'Файл слишком большой. Максимальный размер 10 МБ';
            fileError.classList.add('visible');
            dropZone.classList.add('error');
            return false;
        }

        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
        if (!allowedTypes.includes(file.type)) {
            fileError.textContent = 'Недопустимый формат файла. Разрешены только jpg, jpeg, png, pdf';
            fileError.classList.add('visible');
            dropZone.classList.add('error');
            return false;
        }

        fileError.classList.remove('visible');
        dropZone.classList.remove('error');
        dropZone.innerHTML = `
                    <p>Выбран файл: ${file.name}</p>
                    <p>(Нажмите чтобы выбрать другой файл)</p>
                `;
        return true;
    }

// File drop handling
    dropZone.addEventListener('click', () => fileInput.click());

    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = '#513973';
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = '#E5E7EB';
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.style.borderColor = '#E5E7EB';

        const files = e.dataTransfer.files;
        if (files.length) {
            handleFile(files[0]);
        }
    });

    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });

// Form submission
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Validate all fields
        form.querySelectorAll('input, textarea').forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (!isValid) {
            return;
        }

        // Here you would typically send the form data to your server
        console.log('Form submitted with data:', {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            description: document.getElementById('description').value,
            file: fileInput.files[0]
        });

        alert('Форма успешно отправлена!');
        form.reset();
        dropZone.innerHTML = `
                    <p>Выберите на компьютере или перетащите файл сюда</p>
                    <p>(не более 10 МБ)</p>
                    <p>Допустимые форматы: jpg, jpeg, png, pdf</p>
                `;
    });
}