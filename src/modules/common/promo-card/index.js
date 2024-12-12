import './styles.less';

class PromoCard {
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

const nodes = document.querySelectorAll('.promo-card');

nodes.forEach((node) => {
    new PromoCard(node);
})