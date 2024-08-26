"use client";
import Link from "next/link";

export default function Feature() {
  return (
    <>
      <section className="feature-home-6">
        <div className="auto-container">
          <div className="sec-title style-four text-center">
            <h2>
              We are Fully Committed to the <br />
              Needs of Our Clients
            </h2>
            <span className="text-decoration-four" />
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6">
              <div className="feature-block">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/ebi_images/ebi-13.webp" alt="" />
                    <div className="content-box">
                      {/* <div className="icon-box">
                        <i className="flaticon-global-1" />
                      </div> */}
                      <h3>Nature-Connected Coaching</h3>
                    </div>
                  </figure>
                  <div className="text">
                    <p>
                      Our life coach certification program is a pathway to a
                      nature-connected career.
                    </p>
                    <div className="btn-box">
                      <Link
                        href="#"
                        className="theme-btn btn-style-four mt-3"
                      >
                        <span className="btn-title">
                          Get More Info
                          <i className="fas fa-caret-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-block">
                <div className="inner-box">
                  <figure className="image-box">
                    <img src="/assets/ebi_images/ebi-22.webp" alt="" />
                    <div className="content-box">
                      {/* <div className="icon-box">
                        <i className="flaticon-team-1" />
                      </div> */}
                      <h3>Nature-Connected Leadership</h3>
                    </div>
                  </figure>
                  <div className="text">
                    <p>
                      Already a leader of others, just now feeling called to
                      bring forward more of your gifts to the world, this
                      program will be a great fit.
                    </p>
                    <div className="btn-box">
                      <Link
                        href="#"
                        className="theme-btn btn-style-four mt-3"
                      >
                        <span className="btn-title">
                          Get More Info
                          <i className="fas fa-caret-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="feature-block">
                <div className="inner-box">
                  <figure className="image-box">
                    <img
                      src="/assets/ebi_images/Nature-Coaching-25.webp"
                      alt=""
                    />
                    <div className="content-box">
                      {/* <div className="icon-box">
                        <i className="flaticon-fire" />
                      </div> */}
                      <h3>Wilderness Quests & Adventures</h3>
                    </div>
                  </figure>
                  <div className="text">
                    <p>
                      Master-builder of human happiness no one avoids reject
                      pleasure itself.
                    </p>
                    <div className="btn-box">
                      <Link
                        href="#"
                        className="theme-btn btn-style-four mt-3"
                      >
                        <span className="btn-title">
                          Get More Info
                          <i className="fas fa-caret-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
