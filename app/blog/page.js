import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Blog"
          pageTitle="Earth-Based Institute Blog"
          pageImage="/assets/images/EBI-about-earth-based-institue.jpeg"
        />

        <div>
          <section className="sidebar-page-container">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side order-lg-2">
                  <div className="news-block-six">
                    <div className="inner-box">
                      <div className="image">
                        <Link href="/blog-details">
                          <img
                            className="lazy-image owl-lazy"
                            src="/assets/images/resource/news-27.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <div className="category">Business</div>
                        <ul className="post-meta">
                          <li>
                            <Link href="#">14 February, 2020</Link>
                          </li>
                          <li>/</li>
                          <li>By Raana irave </li>
                          <li>/</li>
                          <li>
                            <i className="far fa-comment-alt" />2 Comments
                          </li>
                        </ul>
                        <h4>
                          <Link href="/blog-details">
                            How to Manage Business’s Online Reputation
                          </Link>
                        </h4>
                        <div className="text">
                          Nor again is there anyone who loves or pursues or
                          desires to obtain pain of itself, because it is pain,
                          but because occasionally circumstances occur in which
                          toil and pain can procure him some great pleasure...
                        </div>
                        <div className="bottom-content">
                          <Link
                            href="/blog-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">READ MORE</span>
                          </Link>
                          <div className="post-share-btn">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="news-block-six">
                    <div className="inner-box">
                      <div className="image">
                        <Link href="/blog-details">
                          <img
                            className="lazy-image owl-lazy"
                            src="/assets/images/resource/news-28.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <div className="category">Business</div>
                        <ul className="post-meta">
                          <li>
                            <Link href="#">21 January, 2020 </Link>
                          </li>
                          <li>/</li>
                          <li>By Brendan Duke</li>
                          <li>/</li>
                          <li>
                            <i className="far fa-comment-alt" />3 Comments
                          </li>
                        </ul>
                        <h4>
                          <Link href="/blog-details">
                            Is Your Business Ready For <br />
                            Integration?
                          </Link>
                        </h4>
                        <div className="text">
                          To take a trivial example, which of us ever undertakes
                          laborious physical exercise, except to obtain some
                          advantage from it? But who has any right to find fault
                          with to enjoy a consequences,..
                        </div>
                        <div className="bottom-content">
                          <Link
                            href="/blog-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">READ MORE</span>
                          </Link>
                          <div className="post-share-btn">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="news-block-six">
                    <div className="inner-box">
                      <div className="image">
                        <Link href="/blog-details">
                          <img
                            className="lazy-image owl-lazy"
                            src="/assets/images/resource/news-29.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <div className="category">Business</div>
                        <ul className="post-meta">
                          <li>
                            <Link href="#">04 January, 2020 </Link>
                          </li>
                          <li>/</li>
                          <li>By Garrett Ford</li>
                          <li>/</li>
                          <li>
                            <i className="far fa-comment-alt" />3 Comments
                          </li>
                        </ul>
                        <h4>
                          <Link href="/blog-details">
                            That Should You Include In <br /> Your Marketing
                            Plan
                          </Link>
                        </h4>
                        <div className="text">
                          Ever undertakes laborious physical exercise, except to
                          obtain some advantage for it but who has any right to
                          find fault with a man who chooses to enjoy a pleasure
                          that has no one who avoids a pain that produces...{" "}
                        </div>
                        <div className="bottom-content">
                          <Link
                            href="/blog-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">READ MORE</span>
                          </Link>
                          <div className="post-share-btn">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="news-block-six">
                    <div className="inner-box">
                      <div className="image">
                        <Link href="/blog-details">
                          <img
                            className="lazy-image owl-lazy"
                            src="/assets/images/resource/news-30.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <div className="category">Business</div>
                        <ul className="post-meta">
                          <li>
                            <Link href="#">14 February, 2020</Link>
                          </li>
                          <li>/</li>
                          <li>By Raana irave </li>
                          <li>/</li>
                          <li>
                            <i className="far fa-comment-alt" />2 Comments
                          </li>
                        </ul>
                        <h4>
                          <Link href="/blog-details">
                            How to Manage Business’s Online Reputation
                          </Link>
                        </h4>
                        <div className="text">
                          Nor again is there anyone who loves or pursues or
                          desires to obtain pain of itself, because it is pain,
                          but because occasionally circumstances occur in which
                          toil and pain can procure him some great pleasure...
                        </div>
                        <div className="bottom-content">
                          <Link
                            href="/blog-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">READ MORE</span>
                          </Link>
                          <div className="post-share-btn">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="news-block-six">
                    <div className="inner-box">
                      <div className="image">
                        <Link href="/blog-details">
                          <img
                            className="lazy-image owl-lazy"
                            src="/assets/images/resource/news-31.jpg"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="lower-content">
                        <div className="category">Business</div>
                        <ul className="post-meta">
                          <li>
                            <Link href="#">21 January, 2020 </Link>
                          </li>
                          <li>/</li>
                          <li>By Brendan Duke</li>
                          <li>/</li>
                          <li>
                            <i className="far fa-comment-alt" />3 Comments
                          </li>
                        </ul>
                        <h4>
                          <Link href="/blog-details">
                            Is Your Business Ready For <br />
                            Integration?
                          </Link>
                        </h4>
                        <div className="text">
                          To take a trivial example, which of us ever undertakes
                          laborious physical exercise, except to obtain some
                          advantage from it? But who has any right to find fault
                          with to enjoy a consequences,..
                        </div>
                        <div className="bottom-content">
                          <Link
                            href="/blog-details"
                            className="theme-btn btn-style-one"
                          >
                            <span className="btn-title">READ MORE</span>
                          </Link>
                          <div className="post-share-btn">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pagination-wrapper text-center">
                    <ul className="pagination clearfix">
                      <li>
                        <Link href="#">
                          <i className="fas fa-angle-left" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="active">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link href="#">2</Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fas fa-angle-right" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <aside className="col-lg-4 sidebar">
                  <div className="blog-sidebar">
                    <div className="widget widget_search">
                      <form
                        action="blog-2"
                        method="post"
                        className="search-form"
                      >
                        <div className="form-group">
                          <input
                            type="search"
                            name="search-field"
                            placeholder="Your Keyword ..."
                            required
                          />
                          <button type="search">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="widget widget_categories">
                      <h3 className="widget-title">Categories</h3>
                      <div className="widget-content">
                        <ul className="categories-list clearfix">
                          <li>
                            <Link href="#">
                              Audit &amp; Advisory <span>12</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              Business Enterprises <span>05</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              Banking Awareness <span>07</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              Design &amp; Multimedia <span>14</span>
                            </Link>
                          </li>
                          <li>
                            <Link href="#">
                              Self Development <span>15</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/*Popular Posts*/}
                    <div className="widget widget_popular_post">
                      <h3 className="widget-title">Popular Post</h3>
                      <article className="post">
                        <figure className="post-thumb">
                          <Link href="/blog-details">
                            <img
                              src="/assets/images/resource/news-32.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog-details">
                            How to Manage Business Online Reputation
                          </Link>
                        </h5>
                        <div className="post-info">14 February, 2020</div>
                      </article>
                      <article className="post">
                        <figure className="post-thumb">
                          <Link href="/blog-details">
                            <img
                              src="/assets/images/resource/news-33.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog-details">
                            Your Business Ready for Integration
                          </Link>
                        </h5>
                        <div className="post-info">21 January, 2020 </div>
                      </article>
                      <article className="post">
                        <figure className="post-thumb">
                          <Link href="/blog-details">
                            <img
                              src="/assets/images/resource/news-34.jpg"
                              alt=""
                            />
                          </Link>
                        </figure>
                        <h5>
                          <Link href="/blog-details">
                            That Should You Include In Marketing Plan
                          </Link>
                        </h5>
                        <div className="post-info">May 10, 2018</div>
                      </article>
                    </div>
                    {/* Instagram Widget */}
                    <div className="widget instagram-widget">
                      <h3 className="widget-title">Projects</h3>
                      <div className="inner-box">
                        <div className="wrapper-box">
                          <div className="image">
                            <img
                              className="lazy-image owl-lazy loaded"
                              src="/assets/images/gallery/gallery-6.jpg"
                              data-bg="/assets/images/gallery/gallery-6.jpg"
                              alt=""
                              data-was-processed="true"
                            />
                            <div className="overlay-link">
                              <Link
                                href="/assets/images/gallery/gallery-6.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <span className="fa fa-plus" />
                              </Link>
                            </div>
                          </div>
                          <div className="image">
                            <img
                              className="lazy-image owl-lazy loaded"
                              src="/assets/images/gallery/gallery-7.jpg"
                              data-bg="/assets/images/gallery/gallery-7.jpg"
                              alt=""
                              data-was-processed="true"
                            />
                            <div className="overlay-link">
                              <Link
                                href="/assets/images/gallery/gallery-7.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <span className="fa fa-plus" />
                              </Link>
                            </div>
                          </div>
                          <div className="image">
                            <img
                              className="lazy-image owl-lazy loaded"
                              src="/assets/images/gallery/gallery-8.jpg"
                              data-bg="/assets/images/gallery/gallery-8.jpg"
                              alt=""
                              data-was-processed="true"
                            />
                            <div className="overlay-link">
                              <Link
                                href="/assets/images/gallery/gallery-8.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <span className="fa fa-plus" />
                              </Link>
                            </div>
                          </div>
                          <div className="image">
                            <img
                              className="lazy-image owl-lazy loaded"
                              src="/assets/images/gallery/gallery-9.jpg"
                              data-bg="/assets/images/gallery/gallery-9.jpg"
                              alt=""
                              data-was-processed="true"
                            />
                            <div className="overlay-link">
                              <Link
                                href="/assets/images/gallery/gallery-9.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <span className="fa fa-plus" />
                              </Link>
                            </div>
                          </div>
                          <div className="image">
                            <img
                              className="lazy-image owl-lazy loaded"
                              src="/assets/images/gallery/gallery-10.jpg"
                              data-bg="/assets/images/gallery/gallery-10.jpg"
                              alt=""
                              data-was-processed="true"
                            />
                            <div className="overlay-link">
                              <Link
                                href="/assets/images/gallery/gallery-10.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <span className="fa fa-plus" />
                              </Link>
                            </div>
                          </div>
                          <div className="image">
                            <img
                              className="lazy-image owl-lazy loaded"
                              src="/assets/images/gallery/gallery-11.jpg"
                              data-bg="/assets/images/gallery/gallery-11.jpg"
                              alt=""
                              data-was-processed="true"
                            />
                            <div className="overlay-link">
                              <Link
                                href="/assets/images/gallery/gallery-11.jpg"
                                className="lightbox-image"
                                data-fancybox="gallery"
                              >
                                <span className="fa fa-plus" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        {/* /.gallery-wrapper */}
                      </div>
                    </div>
                    {/* Tag-cloud Widget */}
                    <div className="widget widget_tag_cloud">
                      <h3 className="widget-title">Tag Cloud</h3>
                      <ul className="clearfix">
                        <li>
                          <Link href="#">#Analytics</Link>
                        </li>
                        <li>
                          <Link href="#">#Business</Link>
                        </li>
                        <li>
                          <Link href="#">#Consult</Link>
                        </li>
                        <li>
                          <Link href="#">#Data</Link>
                        </li>
                        <li>
                          <Link href="#">#Design</Link>
                        </li>
                        <li>
                          <Link href="#">#Idea</Link>
                        </li>
                        <li>
                          <Link href="#">#Industry</Link>
                        </li>
                        <li>
                          <Link href="#">#Target</Link>
                        </li>
                        <li>
                          <Link href="#">#Technology</Link>
                        </li>
                      </ul>
                    </div>
                    {/* Archive Widget */}
                    <div className="widget widget_archive">
                      <h3 className="widget-title">Archives</h3>
                      <div className="select-box">
                        <form action="#">
                          <div className="form-group">
                            <select className="custom-select" name="subject">
                              <option value="*">January 2020</option>
                              <option value=".category-1">Februay 2020</option>
                              <option value=".category-2">March 2020</option>
                              <option value=".category-3">April 2020</option>
                              <option value=".category-4">May 2020</option>
                              <option value=".category-5">June 2020</option>
                            </select>
                            <select className="custom-select" name="subject">
                              <option value="*"> By Brendan Duke</option>
                              <option value=".category-1">
                                By Raana irave
                              </option>
                              <option value=".category-2">
                                By Garrett Ford
                              </option>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Newsletter Widget */}
                    <div className="widget widget_newsletter">
                      <h3 className="widget-title">
                        Don’t miss anything <br /> keep update.
                      </h3>
                      <div className="widget-content">
                        <form action="#">
                          <div className="form-group">
                            <i className="flaticon-mail" />
                            <input
                              type="text"
                              placeholder="Enter your email address..."
                            />
                            <button type="submit" className="theme-btn">
                              <span className="flaticon-right" />
                            </button>
                          </div>
                        </form>
                        <h5>* Email will not be shared</h5>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
