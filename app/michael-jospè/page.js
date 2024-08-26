import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Certifications"
          pageTitle="ALIGNING CAREERS WITH VALUES"
          pageImage="/assets/ebi_images/guide-training-e1507589914836.webp"
        />
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
                  <div className="text line-height-lg">
                    Devoted to improving human lives, careers, communities, and
                    businesses, EBI is focused on teaching and learning nature
                    connectedness. Professional instructors and students come
                    together in an experiential learning environment to work
                    toward a future where we live in harmony with nature. <br />
                  </div>
                </div>

                <div className="bottom-content">
                  <div className={classes.aboutflex}>
                    <Link href="/" className="theme-btn btn-style-four">
                      <span className="btn-title">More Details</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
