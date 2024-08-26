import Link from "next/link";
import classes from "@/public/assets/css/ebi.module.css";

export default function Chooseus() {
  return (
    <>
      <section className="chooseus-home-6">
        <div className="bg-layer">
          <div
            className={`bg-1 ${classes.chooseusbg}`}
            // className="bg-1"
            // style={{
            //   backgroundImage: "url(assets/images-2/background/chooseus-1.jpg)",
            // }}
          />
          <div
            className="bg-2"
            style={{
              backgroundImage: "url(assets/ebi_images/EBI-02.webp)",
            }}
          />
        </div>
        <div className="auto-container">
          <div className="row align-items-center clearfix">
            <div className="col-lg-5 col-md-12">
              <div
                className="left-column wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="author-box">
                  <figure className="author-thumb">
                    <img
                      src="/assets/images/EBI_NEW_LOGO.webp"
                      alt="Earth-Based Institute Logo"
                    />
                  </figure>
                  <h6>Contact Earth-Based Institute</h6>
                  <h3>
                    <Link href="tel:8884455567889"> (720)-897-3707</Link>
                  </h3>
                </div>
                <div className="text">
                  <p>
                    Send mail on:{" "}
                    <Link href="mailto:support@example.com">
                      info@earthbasedinstitute.org
                    </Link>
                  </p>
                  <p>
                    Monday - Friday:
                    <br />
                    9.00 - 6.00
                    <br />
                    Sunday &amp; Public Holidays (Closed)
                  </p>
                </div>
                <div className="support-box">
                  <Link href="#">Get Call Back</Link>
                </div>
                <figure className="icon-box">
                  {/* <img src="/assets/images-2/icons/icon-1.png" /> */}
                </figure>
              </div>
            </div>
            <div className="col-lg-7 col-md-12">
              <div className="right-column">
                <div className="single-item">
                  <div className="icon-box">
                    <i className="flaticon-support" />
                  </div>
                  <h3>Guide Training</h3>
                  <p>
                    Earth Based Institute (EBI) is global leadership development
                    organization dedicated to helping people connect to nature.
                  </p>
                </div>
                <div className="single-item">
                  <div className="icon-box">
                    <i className="flaticon-brainstorm" />
                  </div>
                  <h3>Tranformational Wilderness Guiding</h3>
                  <p>
                    EBI offers professional coaching certification for
                    Nature-Connected Coaches and experiential learning for
                    everyone.
                  </p>
                </div>
                <div className="single-item">
                  <div className="icon-box">
                    <i className="flaticon-exam " />
                  </div>
                  <h3>Certification</h3>
                  <p>
                    EBI offers professional coaching certification for
                    Nature-Connected Coaches and experiential learning for
                    everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
