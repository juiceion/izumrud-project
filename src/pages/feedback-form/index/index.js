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

        function initSelect() {
            document.querySelectorAll('.form-control-select').forEach(function(selectElement) {
                // Store references and initial variables
                const selectOptions = selectElement.querySelectorAll('option');
                const selectOptionsLength = selectOptions.length;
                const selectedOption = selectElement.querySelector('option:checked');
                const duration = 100; // animation duration

                // Hide original select
                selectElement.style.display = 'none';

                // Create wrapper
                const wrapper = document.createElement('div');
                wrapper.className = 'select';
                selectElement.parentNode.insertBefore(wrapper, selectElement);
                wrapper.appendChild(selectElement);

                // Create new select head
                const selectHead = document.createElement('div');
                selectHead.className = 'new-select';
                selectHead.textContent = selectElement.querySelector('option[disabled]').textContent;
                selectHead.style.color = '#808080';
                wrapper.appendChild(selectHead);

                // Create select list
                const selectList = document.createElement('div');
                selectList.className = 'new-select__list';
                wrapper.appendChild(selectList);



                    selectElement.addEventListener("blur", () => selectEvent());
                    selectElement.addEventListener("click", () => selectEvent());

                for (let i = 1; i < selectOptionsLength; i++) {
                    const selectItem = document.createElement('div');
                    selectItem.className = 'new-select__item';
                    selectItem.setAttribute('data-value', selectOptions[i].value);

                    const span = document.createElement('span');
                    span.textContent = selectOptions[i].textContent;
                    selectItem.appendChild(span);

                    selectList.appendChild(selectItem);
                }

                const selectItems = selectList.querySelectorAll('.new-select__item');

                selectList.style.display = 'none';

                selectHead.addEventListener('click', function() {
                    if (!this.classList.contains('on')) {
                        this.classList.add('on');

                        // Animate dropdown
                        slideDown(selectList, duration, selectHead);

                        // Handle item selection
                        selectItems.forEach(item => {
                            item.addEventListener('click', function() {
                                const chooseItem = this.getAttribute('data-value');
                                selectElement.value = chooseItem;
                                selectHead.textContent = this.querySelector('span').textContent;
                                selectHead.style.color = '#000';
                                slideUp(selectList, duration, selectHead);
                                selectHead.classList.remove('on');
                            }, { once: true }); // Use once to prevent multiple event listeners
                        });
                    } else {
                        this.classList.remove('on');
                        slideUp(selectList, duration, selectHead);

                    }
                });


                const selectEvent = (event) => {

                    if (event.type) {
                        if (event.type === "click") {
                            if (selectElement.classList.contains("change")) {
                                selectElement.classList.remove("change");
                            } else {
                                selectElement.classList.add("change");
                            }
                        }

                        if (event.type === "blur") {
                            selectElement.classList.remove("change");
                        }
                    }
                };
            });

            function slideUp(element, duration, headElement) {
                element.style.transitionProperty = 'height, margin, padding, opacity';
                element.style.transitionDuration = duration + 'ms';
                element.style.height = element.offsetHeight + 'px';
                element.offsetHeight; // Force repaint
                element.style.overflow = 'hidden';
                element.style.opacity = 0;
                element.style.height = 0;
                element.style.paddingTop = 0;
                element.style.paddingBottom = 0;
                element.style.marginTop = 0;
                element.style.marginBottom = 0;

                setTimeout(() => {
                    element.style.display = 'none';
                    element.style.removeProperty('height');
                    element.style.removeProperty('padding-top');
                    element.style.removeProperty('padding-bottom');
                    element.style.removeProperty('margin-top');
                    element.style.removeProperty('margin-bottom');
                    element.style.removeProperty('overflow');
                    element.style.removeProperty('transition-duration');
                    element.style.removeProperty('opacity');
                    element.style.removeProperty('transition-property');
                    headElement.classList.remove('new-select__br');
                }, duration);


                    headElement.classList.remove('new-select__br');
            }

            function slideDown(element, duration, headElement) {
                element.style.removeProperty('display');
                let display = window.getComputedStyle(element).display;
                if (display === 'none') display = 'block';
                element.style.display = display;

                let height = element.offsetHeight;
                element.style.overflow = 'hidden';
                element.style.height = 0;
                element.style.paddingTop = 0;
                element.style.paddingBottom = 0;
                element.style.marginTop = 0;
                element.style.marginBottom = 0;
                element.offsetHeight; // Force repaint

                element.style.transitionProperty = 'height, margin, padding';
                element.style.transitionDuration = duration + 'ms';
                element.style.height = height + 'px';
                element.style.removeProperty('padding-top');
                element.style.removeProperty('padding-bottom');
                element.style.removeProperty('margin-top');
                element.style.removeProperty('margin-bottom');

                setTimeout(() => {
                    element.style.removeProperty('height');
                    element.style.removeProperty('overflow');
                    element.style.removeProperty('transition-duration');
                    element.style.removeProperty('transition-property');
                }, duration);

                setTimeout(() => {
                    headElement.classList.add('new-select__br');
                }, 0)
            }



        }


        initSelect()


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
