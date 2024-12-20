import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/svg-icon';
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';
import './style.less';


 const swiperGallery = new Swiper('.gallery-swiper', {
     spaceBetween: 30,
     slidesPerView: 'auto',
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
                spaceBetween: 0,
            },
            360: {
                spaceBetween: 0,
            },
            960: {
                spaceBetween: 0,
            },
            1280: {
                spaceBetween: 30,
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0,
            }
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