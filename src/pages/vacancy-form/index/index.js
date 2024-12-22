import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/svg-icon';
import 'modules/common/promo-card';
import './style.less';

const form = document.getElementById('resumeForm');
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const phoneInput = document.getElementById('phone');

if (form && dropZone && fileInput) {
        // Validation patterns
        const patterns = {
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            phone: /^\+7 \(\d{4}\) \d{3}-\d{3}$/,
            name: /^[а-яА-ЯёЁ\s-]{2,}$/,
            resumeLink: /^(https?:\/\/)?(www\.)?(hh\.ru|superjob\.ru)\/.+$/i
        };

        // Show error for a field
        function showError(input, message) {
            const formGroup = input.closest('.form-group') || input.parentElement;
            const errorElement = formGroup.querySelector('.error-message') ||
                document.getElementById(`${input.id}Error`);

            input.classList.add('error');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.classList.add('visible');
            }
        }

        // Hide error for a field
        function hideError(input) {
            const formGroup = input.closest('.form-group') || input.parentElement;
            const errorElement = formGroup.querySelector('.error-message') ||
                document.getElementById(`${input.id}Error`);

            input.classList.remove('error');
            if (errorElement) {
                errorElement.classList.remove('visible');
            }
        }

        // Validate single field
        function validateField(input) {
            const value = input.value.trim();

            if (input.required && !value) {
                showError(input, 'Это поле обязательно для заполнения');
                return false;
            }

            if (value && input.id === 'email' && !patterns.email.test(value)) {
                showError(input, 'Пожалуйста, введите корректный email');
                return false;
            }

            if (value && input.id === 'phone' && !patterns.phone.test(value)) {
                showError(input, 'Пожалуйста, введите корректный номер телефона');
                return false;
            }

            if (value && (input.id === 'firstName' || input.id === 'lastName') &&
                !patterns.name.test(value)) {
                showError(input, 'Допустимы только русские буквы, пробел и дефис');
                return false;
            }

            if (value && input.id === 'resumeLink' && !patterns.resumeLink.test(value)) {
                showError(input, 'Укажите корректную ссылку на hh.ru или superjob.ru');
                return false;
            }

            hideError(input);
            return true;
        }

        // Phone mask
        phoneInput.addEventListener('input', function(e) {
            let x = e.target.value.replace(/\D/g, '')
                .match(/(\d{0,1})(\d{0,4})(\d{0,3})(\d{0,3})/);
            e.target.value = !x[2] ? x[1] : '+7 (' + x[2] + ') ' +
                (x[3] ? x[3] : '') +
                (x[4] ? '-' + x[4] : '');

            validateField(e.target);
        });

        // Real-time validation
        form.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]')
            .forEach(input => {
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
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let isValid = true;

            // Validate all required fields
            form.querySelectorAll('input[required]').forEach(input => {
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

            // Validate that either file or link is provided
            const resumeLink = document.getElementById('resumeLink');
            if (!fileInput.files.length && !resumeLink.value) {
                showError(resumeLink, 'Необходимо загрузить файл резюме или указать ссылку');
                isValid = false;
            }

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

