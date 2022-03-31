import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Pagination } from "swiper";
import Mainbanner8 from "../../assets/img/main-banner-8-mob.png";
import Mainbanner7 from "../../assets/img/main-banner-7-mob.png";
import Mainbanner6 from "../../assets/img/main-banner-6-mob.png";
import Mainbanner5 from "../../assets/img/main-banner-5-mob.png";
import Mainbanner4 from "../../assets/img/main-banner-4-mob.png";
import Mainbanner3 from "../../assets/img/main-banner-3-mob.png";
import Mainbanner2 from "../../assets/img/main-banner-2-mob.png";
import Mainbanner1 from "../../assets/img/main-banner-1-mob.png";

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
                  <img src={Mainbanner8} alt="..." />
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
                  <img src={Mainbanner7} alt="..." />
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
                  <img src={Mainbanner6} alt="..." />
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
                  <img src={Mainbanner5} alt="" />
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
                  <img src={Mainbanner4} alt="" />
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
                  <img src={Mainbanner3} alt="" />
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
                  <img src={Mainbanner2} alt="" />
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
                  <img src={Mainbanner1} alt="" />
                </picture>
              </div>
            </div>
          </li>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
