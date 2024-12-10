import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import './style.less';

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
    }
);

const promoDesktopSwiper = new Swiper('.promo-desktop-swiper', {
        modules: [Autoplay, FreeMode],
        slidesPerView: 2,
        spaceBetween: 30,
        direction: 'vertical',
        slidesOffsetBefore: 20,
        freeMode: true,
        loop: true,
        autoplay: {
            enabled: true,
            delay: 0,
            disableOnInteraction:false,
        },
        speed: 5000,
        allowTouchMove: false,
    }
);

const couponsSwiper = new Swiper('.coupons-swiper', {
        slidesPerView: 2.4,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
    breakpoints: {
        1280: {
            spaceBetween: 20,
            slidesPerView: 4,
            slidesOffsetAfter: 0,
            slidesOffsetBefore: 0,
        }
    }
    }
);

const initGoodwinSwiper = (className) => {
    const goodwinSwiper = new Swiper(className, {
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
}

initGoodwinSwiper('.goodwin-swiper')
initGoodwinSwiper('.goodwin-desktop-swiper')



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
