"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 0,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
};

export default function Banner() {
  return (
    <>
      <section className="banner-section style-six">
        <Swiper
          {...swiperOptions}
          className="banner-carousel theme_carousel owl-theme"
        >
          {/* Slide Item */}
          <SwiperSlide className="slide-item">
            <div
              className="image-layer lazy-image"
              data-bg="/assets/images/background/mainbackgroundimage.webp"
            />
            <div className="auto-container">
              <div className="content-box">
                <h2>
                  ARE YOU READY TO TRANSFORM
                  <br /> YOUR PASSION FOR NATURE
                  <br />
                  INTO A CAREER?
                </h2>
                <div className="btn-box">
                  <Link href="/" className="theme-btn btn-style-four">
                    <span className="btn-title">Get More Info</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item">
            <div
              className="image-layer lazy-image"
              data-bg="/assets/images/background/mainbackgroundimage.webp"
            />
            <div className="auto-container">
              <div className="content-box">
                <h2>
                ARE YOU READY TO TRANSFORM
                  <br /> YOUR PASSION FOR NATURE
                  <br />
                  INTO A CAREER?
                </h2>
                <div className="btn-box">
                  <Link href="/" className="theme-btn btn-style-four">
                    <span className="btn-title">More Details</span>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images-2/main-slider/3.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <h2>The Lawyer Who <br />Can Deliver the Results <br />You Need.</h2>
                                <div className="btn-box">
                                    <Link href="/index-6" className="theme-btn btn-style-four"><span className="btn-title">More Details</span></Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
          <div className="owl-nav">
            <button type="button" className="owl-prev h1p">
              <span>‹</span>
            </button>
            <button type="button" className="owl-next h1n">
              <span>›</span>
            </button>
          </div>
        </Swiper>
      </section>
    </>
  );
}
