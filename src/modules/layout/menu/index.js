import './style.less'
import Swiper from "swiper";
import {Autoplay, FreeMode} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const runningLineSwiper = new Swiper('.running-line-swiper', {
    modules: [Autoplay, FreeMode],
    freeMode: true,
    loop: true,
    loopedSlides: 3,
    allowTouchMove: false,
    slidesPerView: "auto",
    spaceBetween: 32,
    autoplay: {
        enabled: true,
        delay: 0,
    },
    speed: 2000,
});