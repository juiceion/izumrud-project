import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import './style.less';

const mainSwiper = new Swiper('.main-swiper', {
        modules: [Pagination],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    }
);

const promoSwiper = new Swiper('.promo-swiper', {
    slidesPerView: 2.4,
    spaceBetween: 2,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 20,
    }
);

promoSwiper.loopCreate()
