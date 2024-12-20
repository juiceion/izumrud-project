import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/svg-icon';
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import './style.less';


 const swiperGallery = new Swiper('.gallery-swiper', {
     spaceBetween: 30,
     slidesPerView: 2.2,
     initialSlide: 1,
     centeredSlides: true,
     updateOnWindowResize: true,
     modules: [
             Navigation,
         ],
         direction: 'horizontal',
         loop: false,
         autoplayDisableOnInteraction: false,
         navigation: {
             nextEl: '.gallery-swiper-button-next',
             prevEl: '.gallery-swiper-button-prev',
         },
        breakpoints: {
             320: {
                 spaceBetween: 110,
             },
            340: {
                spaceBetween: 100,
            },
            400: {
                spaceBetween: 110,
            },
            440: {
                spaceBetween: 80,
            },
            480: {
                spaceBetween: 90,
            },
            550: {
                spaceBetween: 110,
            },
            650: {
                spaceBetween: 80,
            },
            900: {
                spaceBetween: 100,
            },
        },
    }
);

function change(){
    const offer = document.querySelector('.j-counter-gallery');
    if (offer) {
        offer.innerHTML = ( swiperGallery.activeIndex + 1 ) + '/' + (swiperGallery.slides.length);
    }
}

change();


const next = document.querySelector(".gallery-swiper-button-next")
const prev = document.querySelector(".gallery-swiper-button-next")

if (next) {
    next.addEventListener("click", change);
}

if (prev) {
    prev.addEventListener("click", change);
}
