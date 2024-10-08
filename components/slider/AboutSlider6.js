"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  // spaceBetween: 30,
  autoplay: {
    delay: 2500,
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

  // breakpoints: {
  //     320: {
  //         slidesPerView: 1,
  //         spaceBetween: 30,
  //     },
  //     575: {
  //         slidesPerView: 2,
  //         spaceBetween: 30,
  //     },
  //     767: {
  //         slidesPerView: 3,
  //         spaceBetween: 30,
  //     },
  //     991: {
  //         slidesPerView: 3,
  //         spaceBetween: 30,
  //     },
  //     1199: {
  //         slidesPerView: 4,
  //         spaceBetween: 30,
  //     },
  //     1350: {
  //         slidesPerView: 4,
  //         spaceBetween: 30,
  //     },
  // }
};

export default function AboutSlider6() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <div className="quote">
                <span className="flaticon-quote" />
              </div>
              <div className="text">
                The program connects people to nature, with a heavy emphasis on
                brain change and neuroscience, and that was a big draw for me.
              </div>
              <div className="author-box">
                {/* <div className="image"><img src="/assets/images/resource/author-thumb-4.jpg" alt="" /></div> */}
                <div className="author-title">Erica</div>
                <div className="designation">
                  Nature Connected-Coaching℠ student
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide-item">
          <div className="testimonial-block-two">
            <div className="inner-box">
              <div className="quote">
                <span className="flaticon-quote" />
              </div>
              <div className="text">
                I’ve gained a new community and that is inspiring—being around
                other people and realizing that nature is all around us all the
                time.
              </div>
              <div className="author-box">
                {/* <div className="image">
                  <img
                    src="/assets/images/resource/author-thumb-4.jpg"
                    alt=""
                  />
                </div> */}
                <div className="author-title">Pete</div>
                <div className="designation">
                  Transformational Wilderness Guide student
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
