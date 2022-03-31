import React from "react";

function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div
            className="modal modal--default bg-white/80"
            hidden
            data-modal
            id="ask-question"
          >
            {/* <div class="modal-backdrop" data-modal-backdrop></div> */}
            <div className="modal-content w-600 bg-divider" data-modal-content>
              <button
                className="btn-base btn-close modal-close"
                aria-label="Закрыть"
                data-close-modal
              >
                <svg aria-hidden="true">
                  <use href="/svg/svg.svg#close" />
                </svg>
              </button>
              <div className="px-32 pt-48 pb-64 space-y-16 sm:space-y-32">
                <h2 className="text-lg font-bold">Вопрос</h2>
                <label className="field-wrapper">
                  <span className="field-wrapper__title below-sm:sr-only">
                    Вопрос
                  </span>
                  <textarea
                    className="field sm:field--outlined-dark"
                    rows={4}
                    placeholder="Вопрос"
                    defaultValue={""}
                  />
                </label>
                <label className="field-wrapper">
                  <span className="field-wrapper__title below-sm:sr-only">
                    Телефон
                  </span>
                  <input
                    className="field sm:field--outlined-dark"
                    placeholder="Телефон"
                  />
                </label>
                <label className="field-wrapper">
                  <span className="field-wrapper__title below-sm:sr-only">
                    Вотсап
                  </span>
                  <input
                    className="field sm:field--outlined-dark"
                    placeholder="Вотсап"
                  />
                </label>
                <label className="field-wrapper">
                  <span className="field-wrapper__title below-sm:sr-only">
                    E-mail
                  </span>
                  <input
                    className="field sm:field--outlined-dark"
                    placeholder="E-mail"
                  />
                </label>
                <div>
                  <button className="btn btn--md btn--primary w-full">
                    Задать
                  </button>
                  <div className="text-secondary text-sm mt-8">
                    <p>
                      Нажимая кнопку «Задать», я соглашаюсь с
                      <a href="#politika" rel="noopener noreferrer">
                        политикой конфиденциальности
                      </a>
                      и согласием на
                      <a href="#politika" rel="noopener noreferrer">
                        обработку персональных данных
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container py-40 lg:h-80 lg:flex items-center justify-between">
            <ul className="col-count-2 md:flex md:flex-wrap -mx-4 md:-mx-12">
              <li>
                <a
                  href="/photobooks.html"
                  className="block p-4 md:p-12 transition hover:text-primary"
                >
                  Фотокниги
                </a>
              </li>
              <li>
                <a
                  href="/photos.html"
                  className="block p-4 md:p-12 transition hover:text-primary"
                >
                  Фотографии
                </a>
              </li>
              <li>
                <a
                  href="/canvas.html"
                  className="block p-4 md:p-12 transition hover:text-primary"
                >
                  Холсты
                </a>
              </li>
              <li>
                <a
                  href="/cube.html"
                  className="block p-4 md:p-12 transition hover:text-primary"
                >
                  Фотокубики
                </a>
              </li>
              <li>
                <a
                  href="/card.html"
                  className="block p-4 md:p-12 transition hover:text-primary"
                >
                  Открытки
                </a>
              </li>
              <li>
                <a
                  href="/cert-editor.html"
                  className="block p-4 md:p-12 transition hover:text-primary"
                >
                  Подарочная карта
                </a>
              </li>
            </ul>
            <div className="soc-links mt-20 lg:mt-0">
              <div className="soc-links__title w-full mb-8 md:mb-0 md:w-auto mr-12 lg:hidden xl:block">
                Мы в соцмедиа
              </div>
              <ul className="soc-links__list">
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soc-links__link soc-links__link--facebook"
                    aria-label="Facebook"
                  >
                    <svg aria-hidden="true">
                      <use href="/svg/svg.svg#facebook" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soc-links__link soc-links__link--youtube"
                    aria-label="Youtube"
                  >
                    <svg aria-hidden="true">
                      <use href="/svg/svg.svg#youtube" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soc-links__link soc-links__link--vk"
                    aria-label="VK"
                  >
                    <svg aria-hidden="true">
                      <use href="/svg/svg.svg#vk" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soc-links__link soc-links__link--instagram"
                    aria-label="Instagram"
                  >
                    <svg aria-hidden="true">
                      <use href="/svg/svg.svg#instagram" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-divider">
          <div className="container grid grid-cols-2 sm:block pt-40 sm:pt-15 pb-80 sm:pb-24 text-tiny text-secondary">
            <ul className="inline-flex flex-col sm:flex-row gap-14 sm:gap-24 sm:mr-24">
              <li className="font-bold">
                <a href="# " className="transition hover:text-primary">
                  Качество
                </a>
              </li>
              <li className="font-bold">
                <a href="# " className="transition hover:text-primary">
                  Отзывы
                </a>
              </li>
              <li className="font-bold">
                <a href="# " className="transition hover:text-primary">
                  Оплата и Доставка
                </a>
              </li>
              <li className="font-bold">
                <a href="/faq.html" className="transition hover:text-primary">
                  Вопросы и Ответы
                </a>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row xl:inline-flex gap-12 sm:gap-24 sm:mt-8 xl:mt-0">
              <a href="# " className="transition hover:text-primary">
                lediana@mail.ru
              </a>
              <div className="inline-flex gap-8 sm:gap-16">
                <svg aria-hidden="true" className="w-18 h-18">
                  <use href="/svg/svg.svg#phone" />
                </svg>
                <div className="space-y-4 sm:space-y-0 sm:contents">
                  <a href="# " className="transition hover:text-primary">
                    89033405807
                  </a>
                  <a href="# " className="transition hover:text-primary">
                    89033405807
                  </a>
                </div>
              </div>
              <a
                className="font-bold transition hover:text-primary"
                href="#requisites"
              >
                Реквизиты
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-24 mt-28 sm:mt-8 col-span-full">
              <div className="copyrights">
                ©2021 www.lediana.ru, Все права защищены
              </div>
              <a href="# " className="transition hover:text-primary">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
