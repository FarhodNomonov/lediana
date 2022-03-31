import React from "react";
import { NavLink } from "react-router-dom";

function Photos() {
  return (
    <>
      <div className="main-wrapper bg-divider">
        <div className="my-32 sm:my-64">
          <div className="container">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-8 sm:mb-16">
              Выберите размер фотографий
            </h2>
            <div className="text-mob-lg md:text-lg prose mb-50 sm:mb-0">
              <p>
                Все&nbsp;размеры указаны в&nbsp;сантиметрах, ориентацию
                <br className="below-sm:hidden" />
                фотографий можно сменить на&nbsp;следующем шаге
              </p>
            </div>
            <div className="mb-40">
              <ul className="flex items-end flex-wrap gap-y-65 gap-x-20 lg:gap-x-40">
                <li
                  className="size below-sm:size-w-devider--1.2"
                  style={{ "--w": 10, "--h": -10, "--max-w": "10rem" }}
                >
                  <NavLink to="/photos-editor" className="size__inner">
                    <span>10×10</span>
                  </NavLink>
                  <span className="absolute inset-x-0 -bottom-25 sm:-bottom-30 text-tiny sm:text-base">
                    Инстаграм
                  </span>
                </li>
                <li
                  className="size below-sm:size-w-devider--1.2"
                  style={{ "--w": 7.9, "--h": 7.9, "--max-w": "9rem" }}
                >
                  <NavLink to="/photos-editor" className="size__inner">
                    <span>7,9×7,9</span>
                  </NavLink>
                  <span className="absolute inset-x-0 -bottom-25 sm:-bottom-30 text-tiny sm:text-base">
                    Полароид
                  </span>
                </li>
                <li
                  className="size below-sm:size-w-devider--1.2"
                  style={{ "--w": 10.5, "--h": 15.2, " --max-w": "10.5rem" }}
                >
                  <NavLink to="/photos-editor" className="size__inner">
                    <span>10,5×15,2</span>
                  </NavLink>
                </li>
                <div className="w-full flex sm:contents items-end gap-x-20">
                  <li
                    className="size"
                    style={{
                      "--w": 15.2,
                      "--h": 21.6,
                      "--max-w": "15.2rem",
                    }}
                  >
                    <NavLink to="/photos-editor" className="size__inner">
                      <span>15,2×21,6</span>
                    </NavLink>
                  </li>
                  <li
                    className="size"
                    style={{
                      "--w": 20.3,
                      "--h": 30.5,
                      "--max-w": "20.3rem",
                    }}
                  >
                    <NavLink to="/photos-editor" className="size__inner">
                      <span>20.3×30,5</span>
                    </NavLink>
                  </li>
                  <li
                    className="size"
                    style={{ "--w": 21, "--h": 30.5, "--max-w": "20.5rem" }}
                  >
                    <NavLink to="/photos-editor" className="size__inner">
                      <span>21×30,5</span>
                    </NavLink>
                  </li>
                </div>
              </ul>
            </div>
            <ul className="flex items-end gap-20 lg:gap-40">
              <li
                className="size"
                style={{ "--w": 30.5, "--h": "40.6", "--max-w": "30.5rem" }}
              >
                <NavLink to="/photos-editor" className="size__inner">
                  <span>30,5×40,6</span>
                </NavLink>
              </li>
              <li
                className="size"
                style={{ "--w": 30.5, "--h": 42, "--max-w": "30.5rem" }}
              >
                <NavLink to="/photos-editor" className="size__inner">
                  <span>30,5×42</span>
                </NavLink>
              </li>
              <li
                className="size"
                style={{ "--w": 30.5, "--h": "45.7", "--max-w": "30.5rem" }}
              >
                <NavLink to="/photos-editor" className="size__inner">
                  <span>30,5×45,7</span>
                </NavLink>
              </li>
            </ul>
            <button className="btn btn--md btn--primary mt-24 lg:mt-40 w-full sm:w-auto">
              Далее
              <svg aria-hidden="true" className="wh-16 fill-current ml-5 mt-2">
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.59706 15L6 13.3991L10.2026 9.19608L6 4.99358L7.59706 3.3927L13.4023 9.19608L7.59706 15Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Photos;
