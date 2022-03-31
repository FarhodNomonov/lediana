import React from "react";

function Home() {
  return (
    <div>
      <div className="main-wrapper">
        <section className="about-slider">
          <div className="about-slide">
            <div className="container">
              <div className="about-slide__info">
                <div className="about-slide__title">Фотокниги</div>
                <div className="about-slide__desc">
                  Фотокнига - это отличный способ сохранить ваши воспоминания
                </div>
                <div className="md:flex md:items-center mt-10 lg:mt-40">
                  <div className="text-mob-2xl lg:text-2xl font-bold mb-24 md:mb-0 md:mr-25">
                    от 990 ₽
                  </div>
                  <a href className="btn btn--md btn--primary">
                    Создать свою фотокнигу
                    <svg aria-hidden="true" className="wh-24 ml-8 fill-current">
                      <use href="/svg/svg.svg#circle-arrow-right" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="about-slide__photo">
                <picture>
                  <source
                    srcSet="/img/main-banner-8-mob.png"
                    media="(max-width: 767px)"
                  />
                  <img src="/img/main-banner-8.png" alt />
                </picture>
              </div>
            </div>
          </div>
        </section>
        <div className="about">
          <div className="container">
            <div className="about__photo">
              <img src="/img/about-us.jpg" alt />
            </div>
            <div className="about__info">
              <h2 className="about__title">Что&nbsp;такое фотокнига?</h2>
              <div className="about__desc">
                <p>
                  Это&nbsp;фотокнига с&nbsp;вашими фотографиями в&nbsp;твёрдом
                  переплёте. Вы&nbsp;сами создаёте свою фотокнигу
                  по&nbsp;готовым шаблонам, прикрепляя фотографии из&nbsp;вашего
                  смартфона, компьютера или&nbsp;любых цифровых носителей.
                  Вы&nbsp;можете сохранять все&nbsp;ваши лучшие фотографии
                  в&nbsp;красивых и&nbsp;стильных фотоальбомах, посвящая
                  их&nbsp;разным событиям в&nbsp;вашей жизни!
                </p>
              </div>
              <div className="about-stats">
                <div className="about-stats__cell">
                  <svg aria-hidden="true">
                    <use href="/svg/svg.svg#photobook" />
                  </svg>
                  <div>
                    Размеры
                    <br />
                    от 15×15
                    <br />
                    до 29×29
                  </div>
                </div>
                <div className="about-stats__cell">
                  <svg aria-hidden="true">
                    <use href="/svg/svg.svg#pages" />
                  </svg>
                  <div>
                    20-60
                    <br />
                    редактируемых
                    <br />
                    страниц
                  </div>
                </div>
                <div className="about-stats__cell">
                  <svg aria-hidden="true">
                    <use href="/svg/svg.svg#thumbnail" />
                  </svg>
                  <div>
                    8 стильных
                    <br />
                    обложек
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-50 lg:mt-100 xl:mt-150">
          <div className="container">
            <h2 className="text-xl sm:text-2xl mb-16 font-bold">
              Доступные размеры
            </h2>
            <div className="text-mob-lg md:text-lg prose">
              <p>Все размеры указаны в сантиметрах</p>
            </div>
            <div className="avaliable-sizes-wrapper avaliable-sizes-wrapper--1">
              <div className="avaliable-sizes-list-wrapper avaliable-sizes-list-wrapper--1">
                <ul className="avaliable-sizes-list">
                  <li className="size size--15-15">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>15×15</span>
                    </a>
                  </li>
                  <li className="size size--15-20">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>15×20</span>
                    </a>
                  </li>
                  <li className="size size--20-15">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>20×15</span>
                    </a>
                  </li>
                </ul>
                <div className="avaliable-sizes-title">
                  <span>Instabook</span>
                </div>
              </div>
              <div className="avaliable-sizes-list-wrapper avaliable-sizes-list-wrapper--2">
                <ul className="avaliable-sizes-list">
                  <li className="size size--15-15">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>15×15</span>
                    </a>
                  </li>
                  <li className="size size--20-20">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>20×20</span>
                    </a>
                  </li>
                  <li className="size size--22-22">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>22×22</span>
                    </a>
                  </li>
                  <li className="size size--25-25">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>25×25</span>
                    </a>
                  </li>
                  <li className="size size--29-29">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>29×29</span>
                    </a>
                  </li>
                </ul>
                <div className="avaliable-sizes-title">
                  <span>Квадратные</span>
                </div>
              </div>
            </div>
            <div className="avaliable-sizes-wrapper avaliable-sizes-wrapper--2">
              <div className="avaliable-sizes-list-wrapper avaliable-sizes-list-wrapper--1">
                <ul className="avaliable-sizes-list">
                  <li className="size size--15-20">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>15×20</span>
                    </a>
                  </li>
                  <li className="size size--20-29">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>20×29</span>
                    </a>
                  </li>
                </ul>
                <div className="avaliable-sizes-title">
                  <span>Вертикальные</span>
                </div>
              </div>
              <div className="avaliable-sizes-list-wrapper avaliable-sizes-list-wrapper--2">
                <ul className="avaliable-sizes-list">
                  <li className="size size--20-15">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>20×15</span>
                    </a>
                  </li>
                  <li className="size size--25-20">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>25×20</span>
                    </a>
                  </li>
                  <li className="size size--29-20">
                    <a href="/photobooks-editor.html" className="size__inner">
                      <span>29×20</span>
                    </a>
                  </li>
                </ul>
                <div className="avaliable-sizes-title">
                  <span>Горизонтальные</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-blocks">
          <div className="container">
            <ul className="service-blocks__list">
              <li className="service-blocks__item">
                <div className="service-block">
                  <div className="service-block__info">
                    <div className="service-block__title">
                      Дизайнерские фотокниги
                    </div>
                    <div className="service-block__desc">
                      <p>
                        Мы&nbsp;сами за&nbsp;вас&nbsp;разработаем дизайн
                        фотокниги, Мы&nbsp;сами за&nbsp;вас&nbsp;разработаем
                        дизайн фотокниги…
                      </p>
                    </div>
                    <div className="service-block__price">
                      <span>от 2990 ₽</span>
                      <a href="#" className="btn btn--md btn--primary">
                        Подробнее
                        <svg
                          aria-hidden="true"
                          className="wh-24 ml-8 fill-current"
                        >
                          <use href="/svg/svg.svg#circle-arrow-right" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="service-block__photo">
                    <img src="/img/service-block-1.png" alt />
                  </div>
                </div>
              </li>
              <li className="service-blocks__item">
                <div className="service-block">
                  <div className="service-block__info">
                    <div className="service-block__title">
                      Премиум фотокниги
                    </div>
                    <div className="service-block__desc">
                      <p>
                        Это&nbsp;фотокниги из&nbsp;натуральной кожи,
                        с&nbsp;возможностью декорирования обложки, форзацы
                      </p>
                    </div>
                    <div className="service-block__price">
                      <span>от 2990 ₽</span>
                      <a href="#" className="btn btn--md btn--primary">
                        Подробнее
                        <svg
                          aria-hidden="true"
                          className="wh-24 ml-8 fill-current"
                        >
                          <use href="/svg/svg.svg#circle-arrow-right" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  <div className="service-block__photo">
                    <img src="/img/service-block-2.png" alt />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="photo-gallery">
          <div className="photo-gallery__name">#lediana</div>
          <ul className="photo-gallery__list">
            <li>
              <img src="/img/photo-gallery-1.jpg" alt />
            </li>
            <li>
              <img src="/img/photo-gallery-2.jpg" alt />
            </li>
            <li>
              <img src="/img/photo-gallery-3.jpg" alt />
            </li>
            <li>
              <img src="/img/photo-gallery-4.jpg" alt />
            </li>
            <li>
              <img src="/img/photo-gallery-5.jpg" alt />
            </li>
            <li>
              <img src="/img/photo-gallery-6.jpg" alt />
            </li>
            <li>
              <img src="/img/photo-gallery-7.jpg" alt />
            </li>
          </ul>
          <div className="container">
            <div className="overflow-x-auto overflow-y-hidden disable-scrollbars px-container -mx-container mt-60 lg:mx-0 lg:p-0 md:w-full lg:w-auto">
              <div className="multi-switcher multi-switcher--primary w-max">
                <div
                  className="multi-switcher__inner"
                  data-menu='{"mode": "radio"}'
                >
                  <label className="multi-switcher__btn" data-menu-link>
                    <input
                      type="radio"
                      defaultValue={0}
                      name="switcher-type"
                      className="radio-sr-only"
                      defaultChecked
                    />
                    Все фотокниги
                  </label>
                  <label className="multi-switcher__btn" data-menu-link>
                    <input
                      type="radio"
                      defaultValue={1}
                      name="switcher-type"
                      className="radio-sr-only"
                    />
                    Фотокниги
                  </label>
                  <label className="multi-switcher__btn" data-menu-link>
                    <input
                      type="radio"
                      defaultValue={1}
                      name="switcher-type"
                      className="radio-sr-only"
                    />
                    Премиум фотокниги
                  </label>
                  <div className="multi-switcher__marker" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-reviews" data-slider="reviews">
          <div className="container">
            <h2 className="text-xl md:text-2xl font-bold md:font-black mb-30 md:mb-35">
              Счастливые отзывы
            </h2>
            <div className="swiper-container pt-20">
              <ul className="reviews-list swiper-wrapper">
                <li each={8} className="swiper-slide">
                  <include src="/include/review.html" />
                </li>
              </ul>
              <div className="swiper-pagination mt-20" />
            </div>
            <div className="flex gap-24 mt-20 lg:mt-40">
              <button className="btn btn--white btn--md flex-grow justify-start btn--no-loader hidden lg:inline-flex">
                {/* <div class="loader wh-24 mr-8"></div> */}
                <svg aria-hidden="true" className="fill-current wh-24 mr-8">
                  <use href="/svg/svg.svg#circle-arrow-down" />
                </svg>
                Загрузить ещё
              </button>
              <a
                href="/reviews.html"
                className="btn btn--white btn--md w-full lg:w-auto"
              >
                Все отзывы
              </a>
            </div>
          </div>
        </div>
        <div className="calc-sm">
          <div className="container">
            <h2 className="section-title">Калькулятор фотокниги</h2>
            <div className="calc-sm-title f">
              <svg aria-hidden="true">
                <use href="/svg/svg.svg#photobook" />
              </svg>
              Размер фотокниги, см
              <select
                name=""
                id=""
                className="sr-only"
                data-select
                data-select-classes="select--sm w-auto select--rounded-sm select--no-border ml-auto lg:hidden"
              >
                <option value="20×20">20×20 см</option>
                <option value="30×30">30×30 см</option>
                <option value="40×40">40×40 см</option>
                <option value="50×50">50×50 см</option>
              </select>
            </div>
            <div className="multi-switcher multi-switcher--sm w-max bg-divider mt-16 hidden lg:flex">
              <div
                className="multi-switcher__inner"
                data-menu='{"mode": "radio"}'
              >
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={0}
                    name="switcher"
                    className="radio-sr-only"
                    defaultChecked
                  />
                  15×15
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  15×20
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  20×15
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  15×15
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  20×20
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  22×22
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  25×25
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  29×29
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  15×20
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  20×29
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  20×15
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  25×20
                </label>
                <label className="multi-switcher__btn" data-menu-link>
                  <input
                    type="radio"
                    defaultValue={1}
                    name="switcher"
                    className="radio-sr-only"
                  />
                  29×20
                </label>
                <div className="multi-switcher__marker" />
              </div>
            </div>
            <div className="calc-sm-title mt-20 lg:mt-40">
              <svg aria-hidden="true">
                <use href="/svg/svg.svg#pages" />
              </svg>
              Количество разворотов
            </div>
            <div className="mb-55 sm:flex items-center gap-24 relative">
              <div
                className="range-slider w-full sm:w-350"
                style={{ "-progress": "0.2" }}
              >
                <input
                  type="range"
                  min={10}
                  max={30}
                  defaultValue={15}
                  step={1}
                />
                <div className="range-slider__thumb">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="range-slider__steps">
                  <span className="range-slider__step range-slider__step--lg">
                    <span>10</span>
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step range-slider__step--lg">
                    <span>15</span>
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step range-slider__step--lg">
                    <span>20</span>
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step range-slider__step--lg">
                    <span>25</span>
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step">
                    <span />
                  </span>
                  <span className="range-slider__step range-slider__step--lg">
                    <span>30</span>
                  </span>
                </div>
              </div>
              <input
                type="text"
                className="field below-sm:field--sm below-sm:absolute below-sm:-top-45 below-sm:right-0 border w-85"
                defaultValue={15}
              />
            </div>
            <ul className="flex flex-wrap lg:flex-nowrap gap-32 max-w-700">
              <li each={3}>
                <div className="flex">
                  <label className="block wh-80 relative rounded-sm overflow-hidden flex-shrink-0 cursor-pointer">
                    <input
                      type="checkbox"
                      name="package"
                      defaultValue={1}
                      className="checkbox absolute top-8 right-8"
                    />
                    <img
                      src="/img/package.jpg"
                      className="image-full"
                      alt="..."
                    />
                  </label>
                  <div className="pl-8 pt-8">
                    <div className="flex items-center">
                      Глянцевая обложка
                      <button className="btn-base wh-24 flex-shrink-0 rounded bg-primary hover:bg-black text-sm text-white ml-8 self-start">
                        ?
                      </button>
                    </div>
                    <div className="font-bold">+500 ₽</div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="mt-40 bg-divider pt-24 pb-32 md:pb-24 md:mr-48 px-16 md:px-40 rounded md:flex items-center max-w-800">
              <div className="md:mr-48">
                Вам нужно будет отправить
                <br />
                нам не меньше 10 фотографий
              </div>
              <div className="mt-8 md:mt-0 md:mr-24 text-md font-bold">
                3450 ₽
              </div>
              <button className="btn btn--md btn--primary mt-8 md:mt-0">
                Заказать фотокнигу{" "}
                <svg
                  aria-hidden="true"
                  className="wh-16 fill-current ml-5 mt-2"
                >
                  <use href="/svg/svg.svg#arrow-right" />
                </svg>
              </button>
            </div>
            <div className="text-secondary mt-24 md:mt-16 max-w-800">
              Срок изготовления макета — 3-5 дней, после составления дизайна мы
              свяжемся с вами и согласуем с вами макет, и только после
              распечатаем Вашу фотокнигу.
            </div>
          </div>
        </div>
        <div className="service-create">
          <div className="container">
            <div className="service-create__info">
              <h2 className="service-create__title">Создание фотокниги</h2>
              <div className="service-create__desc prose">
                <p>
                  В&nbsp;простом редакторе вы&nbsp;сами выбираете дизайн страниц
                  и&nbsp;обложки. Загружаете фотографии с&nbsp;устройства
                  или&nbsp;из&nbsp;инстаграм и&nbsp;на&nbsp;этом&nbsp;всё.
                </p>
                <p>Просто и быстро!</p>
              </div>
              <a className="btn btn--md btn--primary">
                Создать свою фотокнигу
                <svg aria-hidden="true" className="wh-24 ml-8 fill-current">
                  <use href="/svg/svg.svg#circle-arrow-right" />
                </svg>
              </a>
            </div>
            <div className="service-create__photo">
              <picture>
                <source
                  srcSet="/img/photobook-editor-mob.png"
                  media="(max-width: 550px)"
                />
                <img src="/img/photobook-editor-desk.png" alt />
              </picture>
            </div>
          </div>
        </div>
        <div className="service-gift">
          <div className="container">
            <div className="service-gift__info">
              <div className="service-gift__title">Хотите сделать подарок?</div>
              <div className="service-gift__desc">
                Закажите InstaBook в подарочной упаковке
              </div>
              <a href className="btn btn--md btn--primary">
                InstaBook в подарок
                <svg aria-hidden="true" className="wh-24 ml-8 fill-current">
                  <use href="/svg/svg.svg#circle-arrow-right" />
                </svg>
              </a>
            </div>
            <div className="service-gift__photo">
              <img src="/img/gift.png" alt />
            </div>
          </div>
        </div>
        <div className="service-advantages">
          <div className="container">
            <h2 className="text-xl sm:text-2xl mb-16 font-bold">
              Почему мы делаем хорошо
            </h2>
            <ul className="grid md:grid-cols-3 gap-0 lg:gap-40">
              <li>
                <div className="px-24 lg:px-40 mb-20 pt-50">
                  <img
                    src="/img/icon-calendar.svg"
                    className="wh-55 object-contain mb-10"
                    alt
                  />
                  <div className="font-bold">
                    Работаем в фотопечати
                    <br />
                    более 10 лет
                  </div>
                </div>
                <img src="/img/advantage-1.png" alt />
              </li>
              <li>
                <div className="px-24 lg:px-40 mb-20 pt-50">
                  <img
                    src="/img/icon-factory.svg"
                    className="wh-55 object-contain mb-10"
                    alt
                  />
                  <div className="font-bold">
                    Печатаем сами, на&nbsp;своём производстве.
                    Это&nbsp;позволяет нам&nbsp;устанавливать одни из&nbsp;самых
                    низких цен&nbsp;на&nbsp;рынке, сохраняя премиум-качество
                    и&nbsp;сжатые сроки
                  </div>
                </div>
                <img src="/img/advantage-2.png" alt />
              </li>
              <li>
                <div className="px-24 lg:px-40 mb-20 pt-50">
                  <img
                    src="/img/icon-palette.svg"
                    className="wh-55 object-contain mb-10"
                    alt
                  />
                  <div className="font-bold">
                    Ежедневно калибруем аппаратуру по цветам
                  </div>
                </div>
                <img src="/img/advantage-3.png" alt />
              </li>
            </ul>
          </div>
        </div>
        <div className="service-shipping">
          <div className="container lg:grid grid-cols-[1.2fr,.8fr] gap-48">
            <div>
              <h2 className="text-mob-2xl lg:text-xl md:text-2xl font-bold mb-16">
                Оплата и&nbsp;доставка
              </h2>
              <div className="text-mob-lg lg:text-lg prose mb-24 lg:mb-48">
                <p>
                  Заказ принимается только при&nbsp;полной оплате
                  за&nbsp;InstaBook
                </p>
              </div>
              <ul className="grid grid-cols-fill-min-60 lg:grid-cols-fill-min-70 gap-20 lg:gap-24">
                <li>
                  <img src="/img/alfa.png" alt="..." />
                </li>
                <li>
                  <img src="/img/mastercard.png" alt="..." />
                </li>
                <li>
                  <img src="/img/qiwi.png" alt="..." />
                </li>
                <li>
                  <img src="/img/robokassa.png" alt="..." />
                </li>
                <li>
                  <img src="/img/sber.png" alt="..." />
                </li>
                <li>
                  <img src="/img/visa.png" alt="..." />
                </li>
                <li>
                  <img src="/img/webmoney.png" alt="..." />
                </li>
              </ul>
              <div className="mt-16 prose text-secondary">
                <p>
                  Банковские карты, WebMoney, Qiwi, Юмани и ещё более{" "}
                  <a href="#">50 видов</a>
                </p>
              </div>
            </div>
            <div className="mt-24 lg:mt-0">
              <svg aria-hidden="true" className="wh-24 mb-16">
                <use href="/svg/svg.svg#airplane" />
              </svg>
              <div className="prose">
                <p>
                  Срок изготовления инстбука 7 рабочих дней. Доставка Почтой
                  России на территории РФ бесплатная. Также мы можем доставить
                  ваш инстабук в любую точку мира. Для выяснения сроков и
                  стоимости доставки в другую страну, пожалуйста, обратитесь к
                  нам.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-footer home-footer--dark-top">
          <div className="container home-footer__container">
            <div className="home-footer__title">
              Не знаете, что&nbsp;выбрать?
            </div>
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
              <img src="/img/cubs.png" alt="..." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
