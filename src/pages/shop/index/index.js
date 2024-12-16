import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/promo-card';
import './style.less';
import Swiper from "swiper";
import {Autoplay, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper1 = new Swiper('.first-slider', {
        modules: [Autoplay, FreeMode],
        freeMode: true,
        loop: true,
        allowTouchMove: false,
        slidesPerView: 2,
        spaceBetween: 15,
        autoplay: {
            enabled: true,
            delay: 0,
        },
        speed: 4000,
        breakpoints: {
            640: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            960: {
                slidesPerView: 4,
            }
        }
    }
);

const imageItem = document.querySelector('.page-shop__desktop-photos-container__img');
const container = document.querySelector('.page-shop__desktop-photos-container');
if (imageItem && container) {
    container.style.setProperty('--height', `${imageItem.clientWidth * 2 + 50}px`);

    const observer = new ResizeObserver((entries) => {
        const target = entries[0];
        const height = target.contentRect.height;

        container.style.setProperty('--height', `${height * 2 + 30}px`);
    });

    observer.observe(imageItem);
}

