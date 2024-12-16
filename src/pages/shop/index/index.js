import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/promo-card';
import './style.less';

class catalogItem {
    constructor(elem) {
        this.elem = elem;

        this.elem.children[0].addEventListener('click', () => {
            this.elem.classList.toggle('active');
        })
    }
}

const mobileNodes = document.querySelectorAll('.page-catalog__mobile-item');

mobileNodes.forEach((node) => {
    new catalogItem(node);
})

const desktopNodes = document.querySelectorAll('.page-catalog__desktop-menu-item');

desktopNodes.forEach((node) => {
    new catalogItem(node);
})

