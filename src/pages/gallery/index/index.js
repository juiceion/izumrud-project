import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/svg-icon';
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import './style.less';


 const swiperGallery = new Swiper('.gallery-swiper', {
     spaceBetween: 30,
     slidesPerView: 1.5,
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
            480: {
                slidesPerView: 1.7,
                spaceBetween: 50,
            },
            960: {
                slidesPerView: 2,
                spaceBetween: 60,
            }
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
