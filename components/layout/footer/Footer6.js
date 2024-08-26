import CounterUp from "@/components/elements/CounterUp";
import Link from "next/link";
export default function Footer6() {
  return (
    <>
      <footer className="footer-style-six">
        <div className="auto-container">
          <div className="footer-top">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget logo-widget">
                  <figure className="footer-logo">
                    <Link href="/">
                      <img src="/assets/images/EBI_NEW_LOGO.webp" alt="" />
                    </Link>
                  </figure>
                  <div className="text">
                    <p>
                      Earth Based Institute (EBI) is global leadership
                      development organization dedicated to helping people
                      connect to nature.
                    </p>
                  </div>
                  {/* <div className="download-box">
                    <Link href="/">
                      <i className="far fa-arrow-to-bottom" />
                    </Link>
                    <h5>
                      Download Firm <br />
                      Profile
                    </h5>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget links-widget">
                  <div className="widget-title">
                    <h3>Useful Links</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/about">About</Link>
                      </li>
                      <li>
                        <Link href="/nature-connected-leadership">
                          Leadership
                        </Link>
                      </li>
                      <li>
                        <Link href="/nature-connected-coaching">Programs</Link>
                      </li>
                      <li>
                        <Link href="/staff">Staff</Link>
                      </li>
                      <li>
                        <Link href="/certifications">Certifications</Link>
                      </li>
                      <li>
                        <Link href="/instructors">Instructors</Link>
                      </li>
                      <li>
                        <Link href="/nature-connected-coaching">Coaching</Link>
                      </li>
                      <li>
                        <Link href="/faq">FAQ’s</Link>
                      </li>
                      <li>
                        <Link href="#">Blog</Link>
                      </li>
                      <li>
                        <Link href="/other-programs">Other Programs</Link>
                      </li>
                      <li>
                        <Link href="#">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget counter-widget">
                  <div className="widget-title">
                    <h3>Contact</h3>
                  </div>
                  <div className="inner-content">
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="fas fa-phone" />
                      </div>
                      <div className="count-outer count-box">
                        {/* <CounterUp end={4} /> */}
                        <span> 720-897-3707</span>
                      </div>
                      <h6>Phone</h6>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="fas fa-bookmark" />
                      </div>
                      <div className="count-outer count-box">
                        {/* <CounterUp end={100} /> */}
                        <span>881 Niwot, CO 80544</span>
                      </div>
                      <h6>PO Box </h6>
                    </div>
                    <div className="single-item">
                      <div className="icon-box">
                        <i className="fas fa-user" />
                      </div>
                      <div className="count-outer count-box">
                        {/* <CounterUp end={28} /> */}
                        <span>eNewsletter</span>
                      </div>
                      <h6>Sign Up</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 footer-column">
                <div className="footer-widget location-widget">
                  <div className="widget-title">
                    <h3>Our Location</h3>
                  </div>
                  <div className="map-outer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.8814313550893!2d-105.16792488871019!3d39.96640357139676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876bf3258b427caf%3A0xa874c99d16a82282!2sEarth-Based%20Institute!5e0!3m2!1sen!2sus!4v1719444807976!5m2!1sen!2sus"
                      height={250}
                      style={{ border: 0, width: "100%" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom clearfix">
            <div className="copyright pull-left">
              <p>
                © {new Date().getFullYear()}{" "}
                <Link href="/">Earth-Based Institute</Link>, All Rights
                Reserved.
              </p>
            </div>
            <ul className="footer-nav clearfix pull-right">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms &amp; Conditions</Link>
              </li>
              <li>
                <Link href="/">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
