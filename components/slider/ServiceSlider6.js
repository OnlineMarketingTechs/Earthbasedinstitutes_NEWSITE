"use client";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 4,
  spaceBetween: 30,
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
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
};
export default function ServiceSlider6() {
  return (
    <>
      <Swiper {...swiperOptions} className="theme_carousel owl-theme">
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-img_0447.webp"
                  alt="Image of Ceo & Founder Michael Jospé"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>MICHAEL JOSPÉ, MA, PCC</h4>
                  <div className="designation">Ceo &amp; Founder</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="overlay-content">
                            <figure className="image-box">
                                <img src="/assets/images-2/service/service-5.jpg" alt="" />
                                <div className="text">
                                    <p>Avoided owing to the duty the obligations of business will occur.</p>
                                </div>
                            </figure>
                            <div className="lower-content">
                                <span>Traffic Law</span>
                                <h3><Link href="/audit-assurance">Auto Accidents</Link></h3>
                                <div className="link"><Link href="/audit-assurance">More Details</Link></div>
                            </div>
                        </div>
                    </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-img_0448.webp"
                  alt="Image of instructor Derek Schmidt"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Derek Schmidt, MA, LPC</h4>
                  <div className="designation">Gestalt Therapy Instructor</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-img_0450.webp"
                  alt="Image of instructor Katie Asmus"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Katie Asmus, MA, LPC, BMP</h4>
                  <div className="designation">
                    Trauma and Somatic Therapy Instructor
                  </div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-dsc_8837-edit-scaled.webp"
                  alt="Image of instructor Daniel Brisbon"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Daniel Brisbon, NCC, ACC, TWG</h4>
                  <div className="designation">
                    Admissions Guide, Instructor, Student Mentor
                  </div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-julie-mahoeny-4-scaled.webp"
                  alt="Image of instructor Julie Thomas"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Julie Thomas, MA, LPC</h4>
                  <div className="designation">Grief and Loss Instructor</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-20171025_175135.webp"
                  alt="Image of instructor Hannah Tirrell-Wysocki"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Hannah Tirrell-Wysocki NCC, TWG, MA</h4>
                  <div className="designation">
                    Program Director, Student Mentor, Instructor, Quest Guide{" "}
                  </div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-pjcos-headshot-2-1.webp"
                  alt="Image of student mentor Sheri Peterson"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Sheri Peterson, NCC</h4>
                  <div className="designation">Student Mentor</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-maria-ebi-photo.webp"
                  alt="Image of student mentor Maria Rosa Galter"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Maria Rosa Galter</h4>
                  <div className="designation">Student Mentor</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-img_2564.webp"
                  alt="Image of instructor David Fontaine"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>David Fontaine, NCC, TWG</h4>
                  <div className="designation">
                    Student Mentor, TWG Instructor, Quest Guide
                  </div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-img_0370-scaled.webp"
                  alt="Image of student mentor Jen LeCompte"
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>Jen LeCompte</h4>
                  <div className="designation">Student Mentor</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_0447.jpeg"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>MICHAEL JOSPÉ, MA, PCC</h4>
                  <div className="designation">Ceo &amp; Founder</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="team-block-three">
            <div className="inner-box">
              <div className="image">
                <img
                  src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_0447.jpeg"
                  alt=""
                />
              </div>
              <div className="content">
                <div className="author-title">
                  <h4>MICHAEL JOSPÉ, MA, PCC</h4>
                  <div className="designation">Ceo &amp; Founder</div>
                </div>
                <ul className="social-links">
                  <li>
                    <Link href="#">
                      <span className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <span className="fab fa-google-plus-g" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
