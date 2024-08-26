import Layout from "@/components/layout/Layout";
import Link from "next/link";
import StaffInstructors from "@/components/elements/StaffandInstructorsPopUp";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="about"
          pageTitle="Earth-Based Institute Instructors"
          pageImage="/assets/images/EBI-about-earth-based-institue.webp"
        />
        <div>
          <section className="team-section-five">
            <div className="auto-container">
              <div className="row">
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_0447.webp"
                        alt="Image of EBI founder and CEO Michael Jospé"
                      />
                      <div className="social-links-wrapper">
                        <div className="icon">
                          <span className="flaticon-share-1" />
                        </div>
                        {/* <ul className="social-links">
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
                          </ul> */}
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>MICHAEL JOSPÉ, MA, PCC</h4>
                        <div className="designation">Ceo &amp; Founder</div>
                      </div>
                      <div className="text">
                        Earth-Based Institute (EBI) was Founded by Michael
                        Jospé. As a professional coach, educator and wilderness
                        guide, Michael is passionate about helping people learn
                        about themselves while being out in nature.
                        {/* <StaffInstructors
                          name="Michael Jospé, MA, PCC"
                          jobTitle="Founder, CEO, Instructor"
                          bio="Earth-Based Institute (EBI) was Founded by Michael Jospé. As a professional coach, educator and wilderness guide, Michael is passionate about helping people learn about themselves while being out in nature. Michael has a BA in Outdoor Recreation Leadership through Western State College in Colorado, an MA in Transformational Learning through Prescott College in Arizona, a certificate in Gestalt Psychology through the Boulder Psychotherapy Institute, and a certificate in Evidence-Based Coaching through Fielding Graduate Institute. Michael is also certified as a Professional Coach through the International Coach Federation and as Wilderness First Responder through Wilderness Medicine Institute.

Michael’s approach to working with people has been greatly influenced by his studies under authors and educators, Tom Brown, Jr. and Jon Young, and gestalt therapist, Dr. Roger Strachan.

Michael believes each person has a unique purpose in life, a purpose that is important to the health and balance of our society, as well as the environment. EBI was created as a venue for people to enhance their lives by working through the beliefs and patterns that get in the way of following dreams and living a life of passion and meaning. Michael has been coaching, guiding people into the wilderness, and teaching students to be outdoor leaders and guides since 2004. Michael loves to mountain bike, backpack, and backcountry ski. He lives in Boulder with his wife, two sons, and way too many pets."
                        /> */}
                      </div>
                    </div>
                  </div>
                </div>

                {/* <StaffInstructors> */}
                  <div className="team-block-four col-lg-4 col-md-6">
                    <div className="inner-box">
                      <div className="image">
                        <img
                          src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_0450.webp"
                          alt="Image of EBI Trauma and somatic therapy instructor"
                        />
                        {/* <div className="social-links-wrapper">
                          <div className="icon">
                            <span className="flaticon-share-1" />
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
                        </div> */}
                      </div>
                      <div className="lower-content">
                        <div className="author-title">
                          <h4>
                            KATIE ASMUS, MA,
                            <br />
                            LPC, BMP
                          </h4>
                          <div className="designation">
                            Trauma and somatic therapy instructor
                          </div>
                        </div>
                        <div className="text">
                          Katie Asmus, MA, , BMP, is a counselor, life coach,
                          educator, mentor, workshop facilitator, and founder of
                          NamastéHealing Arts Center, LLC, a multi-dimensional
                          therapeutic and educationally-based organization
                          incorporating Wilderness and
                        </div>
                      </div>
                    </div>
                  </div>
                {/* </StaffInstructors> */}
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-julie-mahoeny-4-scaled.webp"
                        alt="Image of EBI grief and loss instructor Julie Thomas"
                      />
                      {/* <div className="social-links-wrapper">
                        <div className="icon">
                          <span className="flaticon-share-1" />
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
                      </div> */}
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>JULIE THOMAS, MA, LPC</h4>
                        <div className="designation">
                          Grief and Loss Instructor
                        </div>
                      </div>
                      <div className="text">
                        Julie Thomas is a licensed professional counselor and
                        has been in the field of death, dying, grief and loss
                        for over 20 years. She has been working with hospice for
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-20171025_175135.webp"
                        alt="Image of EBI instuctor Hannah Tirrell-Wysocki"
                      />
                      {/* <div className="social-links-wrapper">
                        <div className="icon">
                          <span className="flaticon-share-1" />
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
                      </div> */}
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>
                          {" "}
                          HANNAH
                          <br /> TIRRELL-WYSOCKI NCC,
                          <br /> TWG, MA
                        </h4>
                        <div className="designation">Instructor</div>
                      </div>
                      <div className="text">
                        Hannah is a teaching assistant and mentor to students in
                        the Nature Connected Coaching program at Earth-Based
                        Institute.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_0448.webp"
                        alt="Image of EBI gestalt therapy instructor Derek Schmidt"
                      />
                      {/* <div className="social-links-wrapper">
                        <div className="icon">
                          <span className="flaticon-share-1" />
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
                      </div> */}
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>DEREK SCHMIDT, MA, LPC</h4>
                        <div className="designation">
                          Gestalt Therapy Instructor
                        </div>
                      </div>
                      <div className="text">
                        Derek Schmidt is the owner, founder, and clinical
                        director of Reach, Inc., a therapeutic counseling agency
                        in Denver, Colorado. Derek holds a Masters Degree in
                        Transpersonal Counseling Psychology and is an
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-dsc_8837-edit-scaled.webp"
                        alt="Image of EBI instructor Daniel Brisbon"
                      />
                      {/* <div className="social-links-wrapper">
                        <div className="icon">
                          <span className="flaticon-share-1" />
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
                      </div> */}
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>
                          DANIEL BRISBON, NCC,
                          <br /> ACC, TWG
                        </h4>
                        <div className="designation">Instructor</div>
                      </div>
                      <div className="text">
                        Daniel Brisbon is a teaching assistant and student
                        mentor in the Nature Connected Coaching NCC and
                        Transformational Wilderness Guiding TWG programs at
                        Earth Based Institute. He is a certified Nature
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
