// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../../assets/img/banner-1.jpg'
import img2 from '../../assets/img/banner-2.jpg'
import img3 from '../../assets/img/banner-3.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import BannerContent from '../BannerContent/BannerContent';

// import required modules
import { EffectFade, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                modules={[EffectFade, Autoplay]}
            >
                <SwiperSlide>
                    <BannerContent bg={img1} title={'Savor the Sizzle'} text={'Experience the perfect blend of fire and flavor. From smoky grilled delights to gourmet creations, every bite is a masterpiece.'} btn_text={'See Menu'}></BannerContent>
                </SwiperSlide>
                <SwiperSlide>
                    <BannerContent bg={img2} title={'Flavors That Ignite'} text={'At Fork & Flame, we craft dishes that excite your taste buds. Get ready for bold flavors, fresh ingredients, and unforgettable meals.'}></BannerContent>
                </SwiperSlide>
                <SwiperSlide>
                <BannerContent bg={img3} title={'A Feast by the Fire'} text={'Gather around and indulge in sizzling plates, warm ambiance, and handcrafted perfection. Because great food starts with fire.'}></BannerContent>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;