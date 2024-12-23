import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/promo-card';
import 'modules/common/lookbook-card';
import 'modules/common/coupon-card';
import './style.less';

const storiesSwiper = new Swiper('.stories-swiper', {
    slidesPerView: 3.6,
    spaceBetween: 2,
    slidesOffsetAfter: 12,
    slidesOffsetBefore: 12,
});

const mainSwiper = new Swiper('.main-swiper', {
    modules: [Pagination, Autoplay],
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        enabled: true,
        delay: 5000,
        disableOnInteraction:false,
    },
    speed: 2000,
    }
);

const promoMobileSwiper = new Swiper('.promo-mobile-swiper', {
    slidesPerView: 2.4,
    spaceBetween: 2,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 20,
    breakpoints: {
        640: {
            slidesPerView: 3.2,
        },
        960: {
            slidesPerView: 4,
        }
    }
    }
);

const couponsSwiper = new Swiper('.coupons-swiper', {
        slidesPerView: 2.4,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        breakpoints: {
            640: {
                slidesPerView: 3.2,
            },
            960: {
                slidesPerView: 4,
            },
            1280: {
                spaceBetween: 20,
                slidesPerView: 4,
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0,
            }
        }
    }
);

const goodwinMobileSwiper = new Swiper('.goodwin-swiper', {
        slidesPerView: 2.3,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
    }
);

const goodwinDesktopSwiper= new Swiper('.goodwin-desktop-swiper', {
        spaceBetween: 10,
        slidesPerView: 4,
        modules: [
            Navigation,
        ],
        navigation: {
            nextEl: '.goodwin-swiper-button-next',
            prevEl: '.goodwin-swiper-button-prev',
        },
        allowSlideNext: true,
        allowSlidePrev: true
    }
);



const lookbooksSwiper = new Swiper('.lookbooks__swiper', {
        slidesPerView: 2.4,
        spaceBetween: 2,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1280: {
                slidesPerView: 3,
                spaceBetween: 15,
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0
            }
        }
    }
);
