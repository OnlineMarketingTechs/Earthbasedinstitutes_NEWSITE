import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="About"
          pageTitle="Earth-Based Institute Staff"
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
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-pjcos-headshot-2-1.webp"
                        alt="Image of student mentor Sheri Peterson"
                      />
                      <div className="social-links-wrapper">
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
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>SHERI PETERSON, NCC</h4>
                        <div className="designation">Student Mentor</div>
                      </div>
                      <div className="text">
                        Sheri is a graduate of EBI’s Nature-Connected Coaching
                        program and continues as a student mentor. Sheri coaches
                        clients through her company, Your PATH Coach, LLC, where
                        PATH stands for Personal Accountability To Harmony.
                      </div>
                    </div>
                  </div>
                </div>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-maria-ebi-photo.webp"
                        alt="
                      Image of EBI student mentor Maria Rosa Galter"
                      />
                      <div className="social-links-wrapper">
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
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>MARIA ROSA GALTER</h4>
                        <div className="designation">Student Mentor</div>
                      </div>
                      <div className="text">
                        Maria is a graduate of EBI’s Nature-Connected Coaching
                        program and a current EBI student mentor. Through her
                        coaching practice, Wild Wisdom Coaching, Maria guides
                        clients to seek Nature’s guidance as
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_0370-scaled.webp"
                        alt="Image of EBI student mentor Jen Lecompte"
                      />
                      <div className="social-links-wrapper">
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
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>JEN LECOMPTE</h4>
                        <div className="designation">Student Mentor</div>
                      </div>
                      <div className="text">
                        Jen is a graduate of EBI’s Nature Connected Coaching
                        Program and is currently a student mentor. She seeks to
                        offer space and safe passage while clients explore their
                        inner and
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-20171025_175135.webp"
                        alt="Image of EBI student mentor Hannah Tirrell-Wysocki"
                      />
                      <div className="social-links-wrapper">
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
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>
                          HANNAH <br />
                          TIRRELL-WYSOCKI NCC,
                          <br />
                          TWG, MA
                        </h4>
                        <div className="designation">Student Mentor</div>
                      </div>
                      <div className="text">
                        Hannah is a teaching assistant and mentor to students in
                        the Nature Connected Coaching program at Earth-Based
                        Institute. She is a certified Nature-Connected Coach who
                        uses mindfulness and land-based practices
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_2564.webp"
                        alt="Image of student mentor David Fontaine"
                      />
                      <div className="social-links-wrapper">
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
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>
                          DAVID FONTAINE, NCC, <br /> TWG
                        </h4>
                        <div className="designation">Ceo &amp; Founder</div>
                      </div>
                      <div className="text">
                        David is a graduate of EBI’s Nature Connected Coaching
                        program and a Certified Transformational Wilderness
                        Guide. He is a Student Mentor for our NCC program and an
                        instructor for our
                      </div>
                    </div>
                  </div>
                </div>
                <div className="team-block-four col-lg-4 col-md-6">
                  <div className="inner-box">
                    <div className="image">
                      <img
                        src="/assets/ebi-staff-and-instructors/Nature-Coaching-dsc_8837-edit-scaled.webp"
                        alt="Image of student mentor Daniel Brisbon"
                      />
                      <div className="social-links-wrapper">
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
                      </div>
                    </div>
                    <div className="lower-content">
                      <div className="author-title">
                        <h4>
                          DANIEL BRISBON, NCC,
                          <br /> ACC, TWG
                        </h4>
                        <div className="designation">Chief Executive</div>
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
