import AboutSlider6 from "@/components/slider/AboutSlider6";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="about-section-two alternat-2">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="image-box wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <img
                  className="lazy-image owl-lazy"
                  src="/assets/ebi_images/EBI-who-we-are-earth-based-institute.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-box">
                <div className="sec-title style-four">
                  <h2>Who We Are</h2>
                  <span className="text-decoration-four" />
                </div>
                <div className="content-block">
                  <div className="text">
                    Earth Based Institute (EBI) is global leadership development
                    organization dedicated to helping people connect to nature.
                    <br /> EBI offers professional coaching certification for
                    Nature-Connected Coaches and experiential learning for
                    everyone.
                  </div>
                  {/* <h4>Client Focused</h4> */}
                  <div className="text light">
                    EBI IS A SUPPORTIVE PLACE FOR PEOPLE WITH A PASSION FOR
                    NATURE TO GROW THAT PASSION INTO A MEANINGFUL CAREER
                  </div>
                </div>
                {/*Testimonial Carousel*/}
                <AboutSlider6 />
                <Link href="/" className="theme-btn btn-style-four">
                  <span className="btn-title">More Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
