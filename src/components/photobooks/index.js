import React from "react";

function PhotoBooks() {
  return (
    <div className="main-wrapper bg-divider">
      <div className="my-32 sm:my-64">
        <div className="container">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-8 sm:mb-16">
            Выберите размер фотокниги
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
          <button className="btn btn--md btn--primary mt-24 lg:mt-40 w-full sm:w-auto">
            Далее
            <svg aria-hidden="true" className="wh-16 fill-current ml-5 mt-2">
              <use href="/svg/svg.svg#arrow-right" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PhotoBooks;
