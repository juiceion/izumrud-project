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
            640: {
                spaceBetween: 45,
            },
            960: {
                spaceBetween: 60,
            },
        },
    }
);

function change(){
    const offer = document.querySelector('.j-counter-gallery');
    offer.innerHTML = ( swiperGallery.activeIndex + 1 ) + '/' + (swiperGallery.slides.length);
}

change();

document.querySelector(".gallery-swiper-button-next").addEventListener("click", change);
document.querySelector(".gallery-swiper-button-prev").addEventListener("click", change);