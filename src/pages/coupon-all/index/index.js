import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/promo-card';
import 'modules/common/lookbook-card';
import 'modules/common/coupon-card';
import './style.less';


class Tabs {
    constructor(tabs) {
        this.tabs = tabs

        this.tabs.addEventListener('click', this.handleClick.bind(this));
    }


    handleClick(e) {
        const clicked = e.target.closest('.j-tab-coupon');
        if (!clicked) return;

        const tabIndex = clicked.dataset.tabId;
        document.querySelectorAll('.j-tab-coupon').forEach(content => {
            content.classList.remove('page-coupon-all__tab_active');
        });
        document.querySelector(`.j-tab-coupon[data-tab-id="${tabIndex}"]`).classList.add('page-coupon-all__tab_active');
    }
}



const nodes = document.querySelectorAll('.j-tabs-coupon')

nodes.forEach((node) => {
    new Tabs(node);
})