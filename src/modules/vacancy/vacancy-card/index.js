import './style.less'

class VacancyCard {
    constructor(item) {
        this.vacancy = item;
        this.toggles = this.vacancy.querySelector('.vacancy-card__arrow');
        this.container = this.vacancy.querySelector('.vacancy-card__expanded-body');
        this.button = this.vacancy.querySelector('.vacancy-card__expanded-body-actions')
        this.buttonArrow = this.vacancy.querySelector('.vacancy-card__arrow-heavy')
        this.toggles.addEventListener('click', this.onClick.bind(this))
        this.button.addEventListener('click', this.onClick.bind(this));
        this.buttonArrow.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        if ( this.container.classList.contains('vacancy-card__expanded-body_show')) {
            this.container.classList.remove('vacancy-card__expanded-body_show')
            this.vacancy.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        } else {
            this.container.classList.add('vacancy-card__expanded-body_show')
        }

        if (this.toggles.classList.contains('vacancy-card__arrow_opened')) {
            this.toggles.classList.remove('vacancy-card__arrow_opened')
        } else {
            this.toggles.classList.add('vacancy-card__arrow_opened')
        }

        if (this.buttonArrow.classList.contains('vacancy-card__arrow_opened')) {
            this.buttonArrow.classList.remove('vacancy-card__arrow_opened')
        } else {
            this.buttonArrow.classList.add('vacancy-card__arrow_opened')
        }
    }
}

const nodeList = document.querySelectorAll('.vacancy-card');

nodeList.forEach(el => {
     new VacancyCard(el);
})