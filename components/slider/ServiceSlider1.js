"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 3,
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

  breakpoints: {
    320: {
      slidesPerView: 1,
      // spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    991: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },
    1199: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
    1350: {
      slidesPerView: 3,
      // spaceBetween: 30,
    },
  },
};
export default function ServiceSlider1() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme mb-4">
        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <div className="icon" style={{ lineHeight: "0" }}>
                <img src="/assets/images/icons/icon-19.png" alt="" />
              </div>
              <h4>TRANSFORMATION</h4>
              <div className="text">
                Through experiential education and nature immersion our
                curriculum will guide you into a greater sense of of direction
                and confidence as a leader. Our focus is on helping you realize
                your goals and take conscious action on turning them into
                reality.
                <br />
                No more being a passive bystander! Become an active player.{" "}
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <div className="icon" style={{ lineHeight: "0" }}>
                <img src="/assets/images/icons/icon-20.png" alt="" />
              </div>
              <h4>1:1 COACHING</h4>
              <div className="text">
                Coaching is a perfect compliment to this training and
                collaborating with one of our qualified Nature-Connected coaches
                will be available throughout the training at a discounted rate.
                The hardest person to see is yourself and having a
                Nature-Connected Coach working with you will help you see
                solutions and opportunities that may have been hidden from your
                awareness
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <div className="service-block-seven">
            <div className="inner-box">
              <div className="icon" style={{ lineHeight: "0" }}>
                <img src="/assets/images/icons/icon-21.png" alt="" />
              </div>
              <h4>COMMUNITY</h4>
              <div className="text">
                This program is community-focused. Outside of the live
                instructional sessions, you will work together with other
                like-hearted members in small groups focused on supporting each
                other’s success. Some of the greatest transformational
                experiences and breakthroughs for past students have been during
                these small group gatherings. Trust, compassion, and
                authenticity are the key to this wonderful opportunity.
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
