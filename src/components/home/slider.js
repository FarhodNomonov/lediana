import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectFade, Pagination } from "swiper";

export default function SliderHome() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;фотокниги!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-8-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-8.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>

        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;открытки!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-7-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-7.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>

        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;кубики!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-6-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-6.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>

        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;холсты!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-5-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-5.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>

        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;фотокниги!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-4-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-4.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>

        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;фотокниги!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-3-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-3.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>

        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;фотокниги!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-2-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-2.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>

        <SwiperSlide>
          <li className="swiper-slide main-slide">
            <div className="container">
              <div className="main-slide__title">
                Скидка 15%
                <br />
                на&nbsp;все&nbsp;фотокниги!
              </div>
              <div className="main-slide__desc">
                По промокоду Lediana2018,
                <br />
                акция&nbsp;действует до 28 октября 2018
              </div>
              <div className="main-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-1-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-1.png" alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
