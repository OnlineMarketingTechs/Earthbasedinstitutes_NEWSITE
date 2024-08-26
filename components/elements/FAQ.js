
"use client";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";

export default function FaqSection(){
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
      });
    
      const handleToggle = (key) => {
        if (isActive.key === key) {
          setIsActive({
            status: false,
          });
        } else {
          setIsActive({
            status: true,
            key,
          });
        }
      };
    return (
        <section className="faq-section-two">
            <div className="auto-container">
              {/* <div className="top-content text-center">
              <div className="icon">
                <img src="/assets/images/icons/icon-40.png" alt="" />
              </div>
              <h2>How can we help you</h2>
              <form action="#">
                <input type="email" placeholder="Enter Your Keyword" />
                <button className="fa fa-search" />
              </form>
              <div className="text">
                Have your own questions? <Link href="mailto:info@example.com" />{" "}
                (or) <Link href="tel:+321 55 666 7890">+321 55 666 7890</Link>
              </div>
            </div> */}
              <div className="row">
                <div className="col-lg-6">
                  <ul className="accordion-box style-two mb-30">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 1 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(1)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        What is the time commitment?
                      </div>
                      <div
                        className={
                          isActive.key == 1
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            Building your career as a coach will take time,
                            energy and commitment. It is possible to hold a full
                            time job while you are obtaining your coaching
                            certification and building your business, however,
                            you can expect about 5-10 hours of online course
                            work, reading, mentoring, and additional webinars
                            per week on top of the intensives. Weekly webinars
                            are live and recorded so you can participate at your
                            pace.
                            <br /> <br />
                            There are 6 intensives over the course of the first
                            year. Each are 4 days long (Thursday-Sunday). The
                            first two are 1 month apart and the remaining 4 are
                            typically 3 months apart. Live participation during
                            these intensives is required.
                            <br /> <br />
                            When you start building your business you can expect
                            your workload to increase.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 2 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(2)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        What are the prerequisites?
                      </div>
                      <div
                        className={
                          isActive.key == 2
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            There are no prior learning or experience
                            requirements to attend our Nature-Connected Coaching
                            program. Our program is designed to support both the
                            beginner and the seasoned coach or therapist master
                            the skills of NCC and obtain their professional
                            coaching credential.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 3 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(3)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        When does the program start?
                      </div>
                      <div
                        className={
                          isActive.key == 3
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            The next cohort is scheduled to start October 12th ,
                            2023. Take a look at our full schedule of
                            intensives.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 7 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(7)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        What is the tuition and do you offer financing?
                      </div>
                      <div
                        className={
                          isActive.key == 7
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            NCC is a comprehensive professional training program
                            that includes over 2 years of close support. It is
                            for those who are looking to transform their lives
                            and careers and establish themselves as Professional
                            Nature-Connected Coaches.
                            <br /> <br />
                            We do offer payment plans, but since we are always
                            working to improve the curriculum and rise to the
                            changing goals of our students, the tuition can
                            change slightly each time we open registration for a
                            new cohort.
                            <br /> <br />
                            To find out the current tuition, when the next start
                            date is, and get the most up-to-date details, apply
                            and set up a coaching session with an Admissions
                            Guide to find out if NCC is a perfect fit for you.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* End Block */}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="accordion-box style-two mb-30">
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 4 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(4)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        How is this program delivered?
                      </div>
                      <div
                        className={
                          isActive.key == 4
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            NCC is a live, online training delivered in the
                            English language. EBI is located in Colorado, USA
                            and operates on Mountain Standard Time (Denver).
                            <br /> <br />
                            During intensives, students are expected to be in a
                            quiet, confidential location with strong internet
                            and quick access to the outdoors.
                            <br /> <br />
                            NCC is a hands-on, experiential education. We blend
                            lectures with practice to foster a positive learning
                            environment grounded in integration of the
                            curriculum. During the intensives we use online
                            breakout rooms to practice coaching skills. Mentors
                            and instructors are present in these virtual rooms
                            to observe and provide live, in-the-moment feedback
                            that ensures your understanding and builds your
                            confidence.
                            <br /> <br />
                            We have mastered the art of delivering
                            Nature-Connected Coaching through Zoom, making this
                            program accessible to people outside of Colorado and
                            the United States. This includes breaking up screen
                            time with time spent in nature and structuring our
                            program to create connection and build community.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 5 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(5)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        What is an ICF credential?
                      </div>
                      <div
                        className={
                          isActive.key == 5
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            ICF offers three levels of credentialing to coaches:
                            ACC (Associate Certified Coach), PCC (Professional
                            Certified Coach), and MCC (Master Certified Coach).
                            Each level requires a certain amount of education
                            hours, mentoring hours, as well as professional
                            experience hours.
                            <br /> <br />
                            Our NCC program meets and exceeds all the standards
                            for issuing PCC level certification and sets our
                            students up for pursuing MCC.
                            <br /> <br />
                            Due to the amount of professional experience hours
                            required for credentialing, most students achieve
                            ACC level credentialing before the end of year 2.
                            <br /> <br />
                            These credentials are internationally recognized,
                            which allows you to work with clients all over the
                            world. The core competencies of Professional
                            Coaching are the gold standard in the coaching field
                            and can be applied into many modalities, including
                            Nature-Connected Coaching.These credentials are
                            internationally recognized, which allows you to work
                            with clients all over the world. The core
                            competencies of Professional Coaching are the gold
                            standard in the coaching field and can be applied
                            into many modalities, including Nature-Connected
                            Coaching.
                            <br /> <br />
                            Did you know that in January of 2023, there were
                            over 1.5 million searches for a coach (i.e. life
                            coach, business coach, wellness coach)? That is just
                            one month of data. And, according to the Ask Method
                            Company, 8 out of 10 businesses intend to hire a
                            coach! The coaching industry is booming and
                            credentialing is a way to stand out in the crowd.
                            <br /> <br />
                            NCC is a niche approach to coaching. Credentialing
                            adds tremendous legitimacy to your practice and
                            continues to strengthen the field of Professional
                            Coaching as a whole.
                            <br /> <br />
                            Everything you need to obtain your ICF credential is
                            included in your tuition. It will be up to you to
                            cross that finish line, but we will be right next to
                            you the whole way.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/*Accordion Block*/}
                    <li className="accordion block">
                      <div
                        className={
                          isActive.key == 6 ? "acc-btn active" : "acc-btn"
                        }
                        onClick={() => handleToggle(6)}
                      >
                        <div className="icon-outer">
                          <span className="icon icon_plus flaticon-right" />{" "}
                          <span className="icon icon_minus flaticon-right" />
                        </div>
                        Will you help me start my coaching business?
                      </div>
                      <div
                        className={
                          isActive.key == 6
                            ? "acc-content current"
                            : "acc-content"
                        }
                      >
                        <div className="content">
                          <div className="text">
                            Absolutely! We are 100% invested in you reaching
                            your goals! We can't do it for you, but we will work
                            hard to support you. <br /> <br />
                            We are extremely proud of the business coaching and
                            mentoring that is included in your tuition. We
                            regularly update the program to meet the demands and
                            changes in the field. If you are willing to work
                            hard, follow our business development curriculum,
                            and lean into all the coaching that is included, you
                            will start generating clients.
                            <br /> <br />
                            While it is different for each person and their
                            unique situation, generally, it can take 3+ years to
                            grow your coaching practice into a sustainable size.
                            Our business coaching starts on day 1 and continues
                            for 2 years. Our goal during that time is to teach
                            you the entrepreneurial skills you need to run your
                            business, generate clients, and set you up for
                            long-term success. From year 3 on you will find that
                            our alumni community is super active and focused on
                            supporting each other's growth.
                            <br /> <br />
                            EBI hosts regular alumni gatherings and
                            accountability groups.
                            <br /> <br />
                          </div>
                          <div className="text text-center">
                            Apply now and set up a coaching session with an
                            Admissions Guide to find out if NCC is a perfect fit
                            for you.
                          </div>
                        </div>
                      </div>
                    </li>

                    {/* End Block */}
                  </ul>
                </div>
              </div>
            </div>
          </section>
    )
}