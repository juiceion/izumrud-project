import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
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

const couponsSwiper = new Swiper('.coupons-swiper', {
        slidesPerView: 2.4,
        spaceBetween: 2,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
    breakpoints: {
        960: {
            spaceBetween: 40,
            slidesPerView: 4,
        }
    }
    }
);

const goodwinSwiper = new Swiper('.goodwin-swiper', {
        slidesPerView: 2.3,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        breakpoints: {
            960: {
                spaceBetween: 50,
                slidesPerView: 4,
                modules: [
                    Navigation,
                ],
                navigation: {
                    nextEl: '.goodwin-swiper-button-prev',
                    prevEl: '.goodwin-swiper-button-next',
                },
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0,
                allowSlideNext: true,
                allowSlidePrev: true
            }
        }
    }
);

const nextButton = document.querySelector(".goodwin-swiper-button-next");
const prevButton = document.querySelector(".goodwin-swiper-button-prev");

nextButton.addEventListener("click", () => {
    goodwinSwiper.slideNext();
});

prevButton.addEventListener("click", () => {
    goodwinSwiper.slidePrev();
});

const lookbooksSwiper = new Swiper('.lookbooks__swiper', {
        slidesPerView: 2.4,
        spaceBetween: 2,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,

    breakpoints: {
            960: {
                slidesPerView: 3,
                spaceBetween: 28,
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0
            }
    }
    }
);
