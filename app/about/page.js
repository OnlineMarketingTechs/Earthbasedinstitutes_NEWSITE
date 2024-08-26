"use client";
import CounterUp from "@/components/elements/CounterUp";
import Layout from "@/components/layout/Layout";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import AwardSlider1 from "@/components/slider/AwardSlider1";
// import bg from "@/public/assets/images/EBI-about-earth-based-institue.webp";
import Link from "next/link";
import { useState } from "react";
import ReactCurvedText from "react-curved-text";
import ModalVideo from "react-modal-video";
import classes from "@/public/assets/css/ebi.module.css";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="About"
          pageTitle="About Earth-Based Institute"
          pageImage="/assets/images/EBI-about-earth-based-institue.webp"
        />

        {/* <section className="about-section-seven">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-block">
                  <div className="image-box">
                    <img
                      className="lazy-image owl-lazy"
                      src="/assets/images/resource/image-48.jpg"
                      alt=""
                    />
                  </div>
                  <div className="video-box">
                    <a
                      onClick={() => setOpen(true)}
                      className="overlay-link lightbox-image video-fancybox ripple"
                    >
                      <span className="play-icon flaticon-play" />
                      <ReactCurvedText
                        width="180"
                        height="180"
                        cx="90"
                        cy="90"
                        rx="60"
                        ry="60"
                        startOffset="0"
                        reversed={true}
                        text="World’s #1 Consultancy . Works where it matters"
                        textProps={{ style: { fontSize: "18" } }}
                        textPathProps={{ fill: "#ffffff" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                      />
                    </a>
                  </div>
                  <div className="shape-one">
                    <img src="/assets/images/shape/shape-19.png" alt="" />
                  </div>
                  <div className="shape-two">
                    <img src="/assets/images/shape/shape-20.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title">
                  <h2>
                    Creating a Business with <br /> Authentic Integrity
                  </h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                <div className="text-block">
                  <div className="text">
                    Our power of choices is untrammelled and when nothing
                    prevents to do what we like best principle of selection.
                  </div>
                  <h4>Client Focused</h4>
                  <div className="text">
                    Every pleasures is to welcomed pain avoided owing to the
                    duty the obligations of business it will frequently occur
                    that pleasures have be repudiated and annoyances accepted.
                  </div>
                </div>
                <div className="author-box">
                  <div className="author-info">
                    <img
                      src="/assets/images/resource/author-thumb-4.jpg"
                      alt=""
                    />
                    <h4>Franklin Sinatra</h4>
                    <h5>Manager</h5>
                  </div>
                  <div className="signature">
                    <img src="/assets/images/resource/signature.png" alt="" />
                  </div>
                </div>
                <div className="bottom-content">
                  <h5>Do you need further assistance?</h5>
                  <form action="#">
                    <div className="form-group">
                      <input type="email" placeholder="Enter your email..." />
                      <button className="theme-btn btn-style-one">
                        <span className="btn-title">START HERE</span>
                      </button>
                    </div>
                  </form>
                  <div className="phone-number">
                    or make a call to <Link href="#">+888 445 55 678</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* About Section One */}
        <section className="about-section-seven">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-block">
                  <div className="image-box">
                    <img
                      className="lazy-image owl-lazy"
                      src="/assets/ebi_images/ebi-09.webp"
                      alt=""
                    />
                  </div>
                  {/* <div className="video-box">
                    <a
                      onClick={() => setOpen(true)}
                      className="overlay-link lightbox-image video-fancybox ripple"
                    >
                      <span className="play-icon flaticon-play" />
                      <ReactCurvedText
                        width="180"
                        height="180"
                        cx="90"
                        cy="90"
                        rx="60"
                        ry="60"
                        startOffset="0"
                        reversed={true}
                        text="World’s #1 Consultancy . Works where it matters"
                        textProps={{ style: { fontSize: "18" } }}
                        textPathProps={{ fill: "#ffffff" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                      />
                    </a>
                  </div> */}
                  {/* <div className="shape-one">
                    <img src="/assets/images/shape/shape-19.png" alt="" />
                  </div>
                  <div className="shape-two">
                    <img src="/assets/images/shape/shape-20.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title">
                  <h2>
                    Connecting Humans to
                    <br /> Nature
                  </h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                <div className="text-block">
                  <div className="text">
                    Nature is more than the outside world. <br /> <br />
                    It is in you, of you, around you. <br /> <br />
                    It is physical, neurological, emotional, spiritual, and
                    biological. <br /> <br />
                    It is both prosaic and profound. <br /> <br />
                    Nature provides our only home—nourishes us body and soul.{" "}
                    <br /> <br />
                    It our greatest teacher. <br />
                  </div>
                </div>

                <div className="bottom-content">
                  {/* <h5>Contact Earth Based Institute?</h5> */}
                  <div className={classes.aboutflex}>
                    <Link href="/" className="theme-btn btn-style-four">
                      <span className="btn-title">More Details</span>
                    </Link>
                  </div>
                  {/* <form action="#">
                    <div className="form-group">
                      <input type="email" placeholder="Enter your email..." />
                      <button className="theme-btn btn-style-one">
                        <span className="btn-title">Learn More</span>
                      </button>
                    </div>
                  </form> */}
                  {/* <div className="phone-number">
                    or make a call to <Link href="#">(720)-897-3707</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section Two */}
        <section className="about-section-seven">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="image-block">
                  <div className="image-box">
                    <img
                      className="lazy-image owl-lazy"
                      src="/assets/ebi_images/EBI-11.webp"
                      alt=""
                    />
                  </div>
                  {/* <div className="video-box">
                    <a
                      onClick={() => setOpen(true)}
                      className="overlay-link lightbox-image video-fancybox ripple"
                    >
                      <span className="play-icon flaticon-play" />
                      <ReactCurvedText
                        width="180"
                        height="180"
                        cx="90"
                        cy="90"
                        rx="60"
                        ry="60"
                        startOffset="0"
                        reversed={true}
                        text="World’s #1 Consultancy . Works where it matters"
                        textProps={{ style: { fontSize: "18" } }}
                        textPathProps={{ fill: "#ffffff" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                      />
                    </a>
                  </div> */}
                  {/* <div className="shape-one">
                    <img src="/assets/images/shape/shape-19.png" alt="" />
                  </div>
                  <div className="shape-two">
                    <img src="/assets/images/shape/shape-20.png" alt="" />
                  </div> */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title">
                  <h2>
                    Building Community and
                    <br /> Careers
                  </h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                <div className="text-block">
                  <div className="text">
                    At Earth-Based Institute (EBI), we believe individuals have
                    a unique purpose driven by their connection to nature.
                  </div>
                  {/* <h4>Client Focused</h4> */}
                  <div className="text line-height-lg">
                    Devoted to improving human lives, careers, communities, and
                    businesses, EBI is focused on teaching and learning nature
                    connectedness. Professional instructors and students come
                    together in an experiential learning environment to work
                    toward a future where we live in harmony with nature. <br />
                  </div>
                </div>
                {/* <div className="author-box">
                  <div className="author-info">
                    <img
                      src="/assets/images/resource/author-thumb-4.jpg"
                      alt=""
                    />
                    <h4>Franklin Sinatra</h4>
                    <h5>Manager</h5>
                  </div>
                  <div className="signature">
                    <img src="/assets/images/resource/signature.png" alt="" />
                  </div>
                </div> */}
                <div className="bottom-content">
                  <div className={classes.aboutflex}>
                    <Link href="/" className="theme-btn btn-style-four">
                      <span className="btn-title">More Details</span>
                    </Link>
                  </div>
                  {/* <h5>Contact Earth Based Institute?</h5>
                  <form action="#">
                    <div className="form-group">
                      <input type="email" placeholder="Enter your email..." />
                      <button className="theme-btn btn-style-one">
                        <span className="btn-title">Learn More</span>
                      </button>
                    </div>
                  </form>
                  <div className="phone-number">
                    or make a call to <Link href="#">(720)-897-3707</Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="timeline-section">
          <div
            className="sec-bg"
            style={{
              backgroundImage: "url(assets/ebi_images/EBI-02.webp)",
            }}
          />
          <div className="auto-container">
            <div className="sec-title text-center light">
              <h2>
                PASSIONATE ABOUT NATURE CONNECTION? <br /> Grow your passion
                into a meaningful career
              </h2>
              <div className="text-decoration">
                <span className="left" />
                <span className="right" />
              </div>
            </div>
            {/* <div className="wrapper-box">
              <ul className="timeline-block">
                <li>
                  <div className="shape">
                    <img src="/assets/images/shape/shape-21.png" alt="" />
                  </div>
                  <div className="date">Aug 14, 2016</div>
                  <h4>Started in Houston</h4>
                  <div className="text">
                    {" "}
                    Blinded by desire thety cannot forese belongs to which
                    through shrinking.{" "}
                  </div>
                  <div className="link">
                    <Link href="#" className="theme-btn">
                      <i className="flaticon-right" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="shape">
                    <img src="/assets/images/shape/shape-21.png" alt="" />
                  </div>
                  <div className="date">Jan 01, 2017</div>
                  <h4>Our First Big Project</h4>
                  <div className="text">
                    {" "}
                    To take a trivial example, which of undertakes physical
                    exercise some advantage.
                  </div>
                  <div className="link">
                    <Link href="#" className="theme-btn">
                      <i className="flaticon-right" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="shape">
                    <img src="/assets/images/shape/shape-21.png" alt="" />
                  </div>
                  <div className="date">Mar 06, 2017</div>
                  <h4>International Branch</h4>
                  <div className="text">
                    Right to find fault with a man who chooses to enjoy a
                    pleasure that has no annoying.
                  </div>
                  <div className="link">
                    <Link href="#" className="theme-btn">
                      <i className="flaticon-right" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="shape">
                    <img src="/assets/images/shape/shape-21.png" alt="" />
                  </div>
                  <div className="date">Nov 25, 2017</div>
                  <h4>Company of the Year</h4>
                  <div className="text">
                    Denouncing pleasure and praising pain was born &amp; we will
                    give you a completed.
                  </div>
                  <div className="link">
                    <Link href="#" className="theme-btn">
                      <i className="flaticon-right" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="shape">
                    <img src="/assets/images/shape/shape-21.png" alt="" />
                  </div>
                  <div className="date">Feb 21, 2018</div>
                  <h4>100 Project Milestone</h4>
                  <div className="text">
                    To take a trivial example, which of undertakes physical
                    exercise some advantage.
                  </div>
                  <div className="link">
                    <Link href="#" className="theme-btn">
                      <i className="flaticon-right" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="shape">
                    <img src="/assets/images/shape/shape-21.png" alt="" />
                  </div>
                  <div className="date">May 02, 2018</div>
                  <h4>Best Employee Award</h4>
                  <div className="text">
                    Right to find fault with a man who chooses enjoy too
                    pleasure that has no annoying.
                  </div>
                  <div className="link">
                    <Link href="#" className="theme-btn">
                      <i className="flaticon-right" />
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="shape">
                    <img src="/assets/images/shape/shape-21.png" alt="" />
                  </div>
                  <div className="link">
                    <Link href="#" className="read-more-btn">
                      Click to Read More
                      <i className="flaticon-right" />
                    </Link>
                  </div>
                </li>
              </ul>
            </div> */}
          </div>
        </section>
        {/* Experience Section Two */}
        {/* <section
          className="experience-section-two"
          style={{ backgroundImage: "url(assets/images/background/bg-29.jpg)" }}
        >
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6">
                <div className="wrapper-box">
                  <h2>Our Experience</h2>
                  <div className="column counter-column">
                    <div
                      className="inner wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="content">
                        <div className="counter-title">Projects</div>
                        <div className="count-outer count-box">
                          <CounterUp end={2.5} />
                          <span>K</span>
                        </div>
                        <div className="text">Successful Projects</div>
                        <Link href="#">
                          <i className="flaticon-right" />
                          Our Projects
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="column counter-column">
                    <div
                      className="inner wow fadeInLeft"
                      data-wow-delay="0ms"
                      data-wow-duration="1500ms"
                    >
                      <div className="content">
                        <div className="counter-title">Happy Clients</div>
                        <div className="count-outer count-box">
                          <CounterUp end={99} />
                          <span>%</span>
                        </div>
                        <div className="text">Client Satisfaction</div>
                        <Link href="#">
                          <i className="flaticon-right" />
                          Testimonials
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="sec-title light">
                  <h2>
                    Financially smart. <br /> Our service from the heart
                  </h2>
                  <div className="text-decoration">
                    <span className="left" />
                    <span className="right" />
                  </div>
                </div>
                    {/*Progress Levels */}
        {/* <div className="progress-levels"> */}
        {/*Skill Box*/}
        {/* <div
                    className="progress-box wow fadeIn"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <h5>Finance</h5>
                    <div className="inner">
                      <div className="bar">
                        <div className="bar-innner">
                          <div className="bar-fill" style={{ width: "62%" }}>
                            <div className="percent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
        {/*Skill Box*/}
        {/* <div
                    className="progress-box wow fadeIn"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <h5>Business</h5>
                    <div className="inner">
                      <div className="bar">
                        <div className="bar-innner">
                          <div className="bar-fill" style={{ width: "89%" }}>
                            <div className="percent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
        {/*Skill Box*/}
        {/* <div
                    className="progress-box wow fadeIn"
                    data-wow-delay="100ms"
                    data-wow-duration="1500ms"
                  >
                    <h5>Investment</h5>
                    <div className="inner">
                      <div className="bar">
                        <div className="bar-innner">
                          <div className="bar-fill" style={{ width: "75%" }}>
                            <div className="percent" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  */}
        {/* Testimonial Section Six  */}
        <section className="testimonial-section-six">
          <div className="auto-container">
            <div className="sec-title style-four text-center">
              <h2>
                Earth-Based Institute <br /> Provides:
              </h2>
              <span className="text-decoration-three" />
            </div>
            <div className="wrapper-box">
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">
                    Certification in Nature-Connected Coaching℠ (NCC)
                  </div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                <div className="point">
                  <span />
                </div>
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">
                    Certification in Transformational Wilderness Guiding (TWG)
                  </div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">
                    Online Courses and Continuing Education
                  </div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">
                    Individualized Wilderness Experiences (Wilderness
                    Directions)
                  </div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">Wilderness Quests</div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">
                    Professional Guidance for Those Seeking a Nature-Connected
                    Career
                  </div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">Personalized Life Coaching</div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">Parent and Family Coaching</div>
                  {/* <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4> */}
                </div>
                {/* <div className="point" />
              </div>
              <div className="pointer-block">
                <div className="content">
                  <div className="logo">
                    <img src="/assets/images/resource/client-22.png" alt="" />
                  </div>
                  <div className="text">parent and family coaching</div>
                  <h4>
                    Boris Elbert, <span>Managing Director</span>
                  </h4>
                </div> */}
                <div className="point" />
              </div>
              <img src="/assets/ebi_images/Nature-Coaching-32.webp" alt="" />
            </div>
          </div>
        </section>
        {/* Team Section Six */}
        <section className="team-section-six">
          <div className="auto-container">
            <div className="sec-top row m-0 justify-content-md-between">
              <div className="sec-title light">
                <h2>Our Staff</h2>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>
              {/* <div className="text">
                To provide business planning and marketing services our being{" "}
                <br /> able to do what we like best.
              </div> */}
            </div>
            <div className="row">
              <div className="team-block-three col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-pjcos-headshot-2-1.webp"
                      alt="Image of student mentor Sheri Peterson"
                    />
                  </div>
                  <div className="content">
                    <div className="author-title">
                      <h4>SHERI PETERSON, NCC</h4>
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
              <div className="team-block-three col-lg-3 col-md-6">
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
              <div className="team-block-three col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-maria-ebi-photo.webp"
                      alt="Image of student mentor Maria Rosa Galter"
                    />
                  </div>
                  <div className="content">
                    <div className="author-title">
                      <h4>MARIA ROSA GALTER</h4>
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
              <div className="team-block-three col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-img_0370-scaled.webp"
                      alt="Image of student mentor Jen LeCompte"
                    />
                  </div>
                  <div className="content">
                    <div className="author-title">
                      <h4>JEN LECOMPTE</h4>
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
              <div className="team-block-three col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-20171025_175135.webp"
                      alt="Image of instructor Hannah Tirrell-Wysocki"
                    />
                  </div>
                  <div className="content">
                    <div className="author-title">
                      <h4>HANNAH TIRRELL-WYSOCKI NCC, TWG, MA</h4>
                      <div className="designation">
                        Program Director, Student Mentor, Instructor, Quest
                        Guide
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
              <div className="team-block-three col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-img_2564.webp"
                      alt="Image of instructor David Fontaine"
                    />
                  </div>
                  <div className="content">
                    <div className="author-title">
                      <h4>DAVID FONTAINE, NCC, TWG</h4>
                      <div className="designation">
                        Student mentor, TWG instructor, Quest Guide
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
              <div className="team-block-three col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image">
                    <img
                      src="/assets/home-ebi-staff-and-instructors/Nature-Coaching-dsc_8837-edit-scaled.webp"
                      alt="Image of instructor Daniel Brisbon"
                    />
                  </div>
                  <div className="content">
                    <div className="author-title">
                      <h4>DANIEL BRISBON, NCC, ACC, TWG</h4>
                      <div className="designation">
                        Admissions guide, Instructor, Student Mentor
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
              {/* <div className="team-block-three col-lg-3 col-md-6">
                <div className="inner-box">
                  <div className="image">
                    <img src="/assets/images/resource/team-8.jpg" alt="" />
                  </div>
                  <div className="content">
                    <div className="author-title">
                      <h4>Homer Donnie</h4>
                      <div className="designation">Managing Director</div>
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
              </div> */}
            </div>
          </div>
        </section>
        {/* Award Section Three */}
        {/* <section className="award-section-three">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h2>Our awards and achivements</h2>
              <div className="text-decoration">
                <span className="left" />
                <span className="right" />
              </div>
            </div>
            <div className="row">
              <AwardSlider1 />
            </div>
          </div>
        </section> */}
        {/* Feature Section Two */}

        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="vfhzo499OeA"
          onClose={() => setOpen(false)}
        />
      </Layout>
    </>
  );
}
