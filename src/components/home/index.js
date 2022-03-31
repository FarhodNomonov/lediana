import React from "react";
import SliderHome from "./slider";
import InfoBlock1 from "../../assets/img/info-block-1.jpg";
import InfoBlock2 from "../../assets/img/info-block-2.jpg";
import InfoBlock3 from "../../assets/img/info-block-3.jpg";
import InfoBlock4 from "../../assets/img/info-block-4.jpg";
import InfoBlock5 from "../../assets/img/info-block-5.jpg";
import InfoBlock6 from "../../assets/img/info-block-6.jpg";
import InfoBlock7 from "../../assets/img/info-block-7.jpg";
import InfoBlock8 from "../../assets/img/info-block-8.jpg";
import Review from "../../assets/img/review.jpg";
import Avatar from "../../assets/img/avatar.jpg";
import { Star } from "../export";

function Home() {
  return (
    <div className="main-wrapper">
      <section className="main-slider" data-slider="main">
        <SliderHome />
      </section>
      <div className="my-40 md:my-70 xl:my-100">
        <div className="container">
          <ul className="grid lg:grid-cols-2 gap-50 md:gap-20 xl:gap-40">
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">Фотокниги</div>
                  <div className="info-block__price">от 1190 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Фотокнига с&nbsp;вашими фотографиями. Вы&nbsp;сами
                        создаёте свою фотокнигу по&nbsp;готовым шаблонам,
                        прикрепляя фотографии из&nbsp;вашего смартфона.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-1-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock1} alt="" />
                  </picture>
                </div>
              </a>
            </li>
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">
                    Дизайнерские фотокниги
                  </div>
                  <div className="info-block__price">от 2850 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Эта фотокнига с вашими фотографиями по индивидуальному
                        дизайну, выполненная нашими дизайнерами. Из присланных
                        вами фотографий.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-2-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock2} alt="" />
                  </picture>
                </div>
              </a>
            </li>
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">Премиум фотокниги</div>
                  <div className="info-block__price">от 1190 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Это&nbsp;фотокниги из&nbsp;натуральной кожи,
                        с&nbsp;возможностью декорирования обложки, форзацы
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-3-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock3} alt="" />
                  </picture>
                </div>
              </a>
            </li>
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">Фотографии</div>
                  <div className="info-block__price">от 2850 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Печать фотографий и&nbsp;прочий текст для&nbsp;подблока
                        с&nbsp;фотографиями, чтобы&nbsp;создать фидимость
                        некоторого объёма текста
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-4-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock4} alt="" />
                  </picture>
                </div>
              </a>
            </li>
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">Холсты</div>
                  <div className="info-block__price">от 1190 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Холсты и&nbsp;прочий текст для&nbsp;подблока
                        с&nbsp;фотографиями, чтобы&nbsp;создать фидимость
                        некоторого объёма текста
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-5-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock5} alt="" />
                  </picture>
                </div>
              </a>
            </li>
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">Фотокубики</div>
                  <div className="info-block__price">от 1190 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Печать на&nbsp;фотокубиках и&nbsp;прочий текст
                        для&nbsp;подблока с&nbsp;фотографиями,
                        чтобы&nbsp;создать фидимость некоторого объёма текста
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-6-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock6} alt="" />
                  </picture>
                </div>
              </a>
            </li>
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">Открытки</div>
                  <div className="info-block__price">от 190 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Открытки и&nbsp;некий текст для&nbsp;подблока
                        с&nbsp;открытками, чтобы&nbsp;создать фидимость
                        некоторого объёма текста
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-7-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock7} alt="" />
                  </picture>
                </div>
              </a>
            </li>
            <li>
              <a href="/about.html" className="info-block">
                <div className="info-block__info">
                  <div className="info-block__title">Подарочная карта</div>
                  <div className="info-block__price">от 1000 ₽</div>
                  <div className="info-block__desc">
                    <svg aria-hidden="true" className="info-block__icon">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                    <div className="prose">
                      <p>
                        Сертификаты на&nbsp;услуги Ледианы разного номинала
                        от&nbsp;1&nbsp;до&nbsp;100 000&nbsp;₽
                      </p>
                    </div>
                  </div>
                </div>
                <div className="info-block__photo">
                  <picture>
                    <source
                      srcSet="/img/info-block-8-mob.jpg"
                      media="(max-width: 767px)"
                    />
                    <img src={InfoBlock8} alt="" />
                  </picture>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-70 xl:my-100" data-slider="reviews">
        <div className="container">
          <h2 className="text-xl md:text-2xl font-bold md:font-black mb-30 md:mb-35">
            Счастливые отзывы
          </h2>
          <div className="swiper-container pt-20">
            <ul className="reviews-list swiper-wrapper">
              {[1, 2, 3, 4].map((data) => {
                return (
                  <li key={data} each={8} className="swiper-slide">
                    <div class="review">
                      <div class="review__photo">
                        <div class="review__photo-inner">
                          <img src={Review} alt="" />
                        </div>
                      </div>
                      <div class="review-author">
                        <div class="review-author__photo">
                          <img src={Avatar} alt="" />
                        </div>
                        <div class="review-author__info">
                          <div class="review-author__title">
                            Victoria Venernaya
                          </div>
                          <div class="review-author__subtitle">Фотокнига</div>
                        </div>
                      </div>
                      <div class="review__desc prose">
                        <p>
                          3 года со дня свадьбы пролетели, а столько всего
                          пережито и столько всего хорошего ещё предстоит. Люблю
                          тебя! А за замечательный фотобук спасибо @ledianaru
                        </p>
                      </div>
                      <div class="rating">
                        <Star className="rating__icon rating__icon--active" />
                        <Star className="rating__icon rating__icon--active" />
                        <Star className="rating__icon rating__icon--active" />
                        <Star className="rating__icon rating__icon--active" />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="swiper-pagination mt-20" />
          </div>
          <div className="flex gap-24 mt-20 lg:mt-40">
            <button className="btn btn--secondary btn--md flex-grow justify-start btn--no-loader hidden lg:inline-flex">
              {/* <div class="loader wh-24 mr-8"></div> */}
              <svg aria-hidden="true" className="fill-current wh-24 mr-8">
                <use href="/svg/svg.svg#circle-arrow-down" />
              </svg>
              Загрузить ещё
            </button>
            <a
              href="/reviews.html"
              className="btn btn--secondary btn--md w-full lg:w-auto"
            >
              Все отзывы
            </a>
          </div>
        </div>
      </div>
      <div className="home-footer">
        <div className="container home-footer__container">
          <div className="home-footer__title">Не знаете, что&nbsp;выбрать?</div>
          <div className="home-footer__subtitle">Мы подскажем!</div>
          <div className="home-footer__desc">
            По промокоду <span className="text-lg">Lediana2018</span>,<br />
            акция&nbsp;действует до 28 октября 2018
          </div>
          <button className="btn btn--primary btn--md">
            Получить консультацию
            <svg aria-hidden="true" className="fill-current wh-24 ml-8">
              <use href="/svg/svg.svg#circle-arrow-right" />
            </svg>
          </button>
          <div className="home-footer__photo">
            <img src="/img/cubs.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
