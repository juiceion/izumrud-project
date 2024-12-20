import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/svg-icon';
import 'modules/common/promo-card';
import './style.less';


class Tabs {
    constructor(tabs) {
        this.tabs = tabs

        this.tabs.addEventListener('click', this.handleClick.bind(this));
    }


    handleClick(e) {
        const clicked = e.target.closest('.j-tab');
        if (!clicked) return;

        const tabIndex = clicked.dataset.tabId;
            // Убираем активные классы
        document.querySelectorAll('.j-tab').forEach(content => {
            content.classList.remove('page-shares-all__tab_active');
        });
        // Добавляем активные классы для выбранного таба
        document.querySelector(`.j-tab[data-tab-id="${tabIndex}"]`).classList.add('page-shares-all__tab_active');
    }
}



const nodes = document.querySelectorAll('.j-tabs')

nodes.forEach((node) => {
    new Tabs(node);
})


class GalleryCard {
    constructor(card) {
        this.card = card;

        this.observer = new ResizeObserver((entries) => {
            const target = entries[0];
            const width = target.contentRect.width;

            this.card.style.setProperty('--width', `${width}px`);
        });

        this.observer.observe(this.card);
    }
}

const nodesCards = document.querySelectorAll('.j-gallery-card');

nodesCards.forEach((node) => {
    new GalleryCard(node);
})