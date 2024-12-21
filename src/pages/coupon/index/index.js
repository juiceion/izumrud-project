import 'modules/layout/footer';
import 'modules/layout/header';
import 'modules/layout/layout';
import 'modules/common/promo-card';
import 'modules/common/lookbook-card';
import 'modules/common/coupon-card';
import './style.less';
import Swiper from "swiper";

const couponsSwiper = new Swiper('.page-coupon__coupons-swiper', {
        slidesPerView: 2.4,
        spaceBetween: 10,
        slidesOffsetAfter: 20,
        slidesOffsetBefore: 20,
        breakpoints: {
            320: {
                slidesPerView: 1.7,
            },

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