import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/svg-icon';
import 'modules/common/promo-card';
import './style.less';

    const form = document.getElementById('feedbackForm');
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const phoneInput = document.getElementById('phone');

    if (form && dropZone && fileInput) {

        const patterns = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            phone: /^\+7\(\d{3}\)\d{3}\d{2}\d{2}$/,
            name: /^[а-яА-ЯёЁ\s-]{2,}$/
        };

        const errorMessages = {
            email: {
                pattern: 'Пожалуйста, введите корректный email адрес',
                required: 'Пожалуйста, заполните email'
            },
            phone: {
                pattern: 'Пожалуйста, введите корректный номер телефона',
                required: 'Пожалуйста, заполните номер телефона'
            },
            name: {
                pattern: 'ФИО должно содержать только русские буквы, пробелы и дефисы',
                required: 'Пожалуйста, заполните ФИО'
            }
        };

        function showError(input, message) {
            const formGroup = input.closest('.form-group');
            const errorElement = formGroup.querySelector('.error-message');
            const errorIcon = formGroup.querySelector('.error-icon');

            input.classList.add('error');
            errorElement.textContent = message;
            errorElement.classList.add('visible');
            if (errorIcon) errorIcon.classList.add('visible');
        }

        function hideError(input) {
            const formGroup = input.closest('.form-group');
            const errorElement = formGroup.querySelector('.error-message');
            const errorIcon = formGroup.querySelector('.error-icon');

            input.classList.remove('error');
            errorElement?.classList.remove('visible');
            if (errorIcon) errorIcon.classList.remove('visible');
        }

        function validateField(input) {
            const id = input.id;
            const value = input.value.trim();

            if (!value) {
                showError(input, errorMessages[id]?.required || 'Это поле обязательно для заполнения');
                return false;
            }

            if (patterns[id] && !patterns[id].test(value)) {
                showError(input, errorMessages[id].pattern);
                return false;
            }

            hideError(input);
            return true;
        }

        // phoneInput.addEventListener('input', function(e) {
        //     let x = e.target.value.replace(/\D/g, '')
        //         .match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        //     e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + ') - ' +
        //         (x[3] ? x[3] : '') +
        //         (x[4] ? ' - ' + x[4] : '') +
        //         (x[5] ? '-' + x[5] : '');
        //
        //     validateField(e.target);
        // });

        form?.querySelectorAll('input, textarea, select').forEach(input => {
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
            dropZone.style.borderColor = '#ddd';
        });

        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.style.borderColor = '#ddd';

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
            form?.querySelectorAll('input, textarea, select').forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            // Validate consent
            const consent = document.getElementById('consent');
            const consentError = document.getElementById('consentError');
            if (!consent.checked) {
                consentError.classList.add('visible');
                isValid = false;
            } else {
                consentError.classList.remove('visible');
            }

            if (!isValid) {
                return;
            }

            // alert('Форма успешно отправлена!');
            form.reset();
            dropZone.innerHTML = `
                    <p>Выберите на компьютере или перетащите файл сюда</p>
                    <p>(не более 10 МБ)</p>
                    <p>Допустимые форматы: jpg, jpeg, png, pdf</p>
                `;
        });
    }
