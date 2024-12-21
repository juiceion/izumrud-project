import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/promo-card';
import 'modules/common/lookbook-card';
import 'modules/common/coupon-card';
import './style.less';
import Swiper from "swiper";

const couponsSwiper = new Swiper('.page-coupon__coupons-swiper', {
        slidesPerView: 2,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
            },
            960: {
                slidesPerView: 2.2,
            },
            1280: {
                spaceBetween: 20,
                slidesPerView: 3,
                slidesOffsetAfter: 0,
                slidesOffsetBefore: 0,
            }
        }
    }
);