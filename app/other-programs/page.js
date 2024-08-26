import Layout from "@/components/layout/Layout";
import Link from "next/link";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="About"
          pageTitle="Other Programs"
          pageImage="/assets/images/EBI-about-earth-based-institue.webp"
        />
        <div>
          <section className="sidebar-page-container">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 content-side">
                  <div className="our-shop">
                    <div className="items-sorting row m-0 justify-content-between">
                      <div className="text">
                        <p>Showing all 7 results</p>
                      </div>
                      <form action="#">
                        <div className="form-group">
                          <select className="custom-select" name="subject">
                            <option value="*">Default Sorting</option>
                            <option value=".category-1">By Order</option>
                            <option value=".category-2">By Price</option>
                            <option value=".category-3">New Product</option>
                            <option value=".category-4">Old Product</option>
                            <option value=".category-5">Coming Product</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="row clearfix">
                      <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/ebi_images/EBI-programs-1.webp"
                                alt=""
                              />
                              <span className="category">New</span>
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="#"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">APPLY NOW</span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                              <p>
                                <br />
                              </p>
                              <h3>
                                <Link href="/product-details">
                                  CERTIFICATION PROGRAM: NATURE-CONNECTED
                                  COACHING
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/ebi_images/EBI-programs-2.webp"
                                alt=""
                              />
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="#"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">
                                    GET MORE DETAILS
                                  </span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="far fa-star" />
                                </li>
                              </ul>
                              <p>
                                <br />
                              </p>
                              <h3>
                                <Link href="/product-details">
                                  EBI LIVE: A COLLABORATIVE LEARNING COMMUNITY
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/ebi_images/EBI-programs-3.webp"
                                alt=""
                              />
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="#"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">APPLY NOW</span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                              <p>
                                <br />
                              </p>
                              <h3>
                                <Link href="/product-details">
                                  EBI WILDERNESS QUEST FALL
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/ebi_images/EBI-programs-4.webp"
                                alt=""
                              />
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="#"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">REGISTER</span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="far fa-star" />
                                </li>
                              </ul>
                              <p>$1,497.00</p>
                              <h3>
                                <Link href="/product-details">
                                  NATURE CONNECTED LEADERSHIP -FULL PROGRAM
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/ebi_images/EBI-programs-5.webp"
                                alt=""
                              />
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="#"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">
                                    REGISTER NOW
                                  </span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                              <p>$250.00</p>
                              <h3>
                                <Link href="/product-details">
                                  NATURE-CONNECTED LIVING: APPLYING NATURE
                                  CONNECTION TO YOUR LIFE AND CAREER
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/ebi_images/EBI-programs-6.webp"
                                alt=""
                              />
                              <span className="offer">SALE</span>
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="#"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">
                                    REGISTER NOW
                                  </span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                              <p>
                                $120.00 <del>$27.00</del>
                              </p>
                              <h3>
                                <Link href="/product-details">
                                  GET STARTED WITH NATURE CONNECTION
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/images/shop/product-7.jpg"
                                alt=""
                              />
                              <span className="trending">
                                <span className="flaticon-fire" />
                              </span>
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="/assets/images/shop/product-7.jpg"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">ADD TO CART</span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="far fa-star" />
                                </li>
                              </ul>
                              <p>$34.00</p>
                              <h3>
                                <Link href="/product-details">
                                  Self Confidence
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      <div className="col-md-6 product-block">
                        <div className="product-block-one">
                          <div className="inner-box">
                            <figure className="image-box">
                              <img
                                src="/assets/ebi_images/EBI-programs-4.webp"
                                alt=""
                              />
                              <div className="right-option">
                                <div className="icon">
                                  <span className="flaticon-more" />
                                </div>
                                <ul className="content-box">
                                  <li>
                                    <Link
                                      href="#"
                                      className="lightbox-image"
                                      data-fancybox="gallery"
                                    >
                                      <i className="flaticon-zoom-in" />
                                      <span>Quick View</span>
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="#">
                                      <i className="flaticon-center" />
                                      <span>Add to Whishlist</span>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="cart-btn">
                                <Link
                                  href="#"
                                  className="theme-btn btn-style-one"
                                >
                                  <span className="btn-title">REGISTER</span>
                                </Link>
                              </div>
                            </figure>
                            <div className="lower-content">
                              <ul className="rating clearfix">
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                                <li>
                                  <i className="fas fa-star" />
                                </li>
                              </ul>
                              <p>$497.00</p>
                              <h3>
                                <Link href="/product-details">
                                  NATURE CONNECTED LEADERSHIP
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="pagination-wrapper text-center">
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
                    </div> */}
                  </div>
                </div>
                <aside className="col-lg-4 sidebar">
                  <div className="service-sidebar">
                    <div className="widget widget_categories_two">
                      <div className="widget-content">
                        <ul className="categories-list clearfix">
                          <li>
                            <Link href="/nature-connected-coaching">
                              Nature-Connected Coaching
                              <span />
                            </Link>
                          </li>
                          {/* <li>
                            <Link href="/your-bee-line-strategy">
                              New Course- Your Bee-line strategy
                              <span />
                            </Link>
                          </li> */}
                          <li>
                            <Link href="/nature-connected-leadership">
                              Nature-Connected Leadership <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/wilderness-quest">
                              Wilderness Quest
                              <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/ebi-community-adventure">
                              EBI Community Adventure <span />
                            </Link>
                          </li>
                          <li>
                            <Link href="/other-programs">
                              Other Programs <span />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <h2 className="text-center pb-4">YOUR INSTRUCTORS</h2>
                    <div className="team-block-four ">
                      <div className="inner-box">
                        <div className="image">
                          <img
                            src="/assets/ebi-staff-and-instructors/leadership-instructor-1.jpeg"
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
                        </div> */}
                    {/* </div> */}
                    {/* </div> */}
                  </div>
                </aside>
              </div>
            </div>
          </section>
          {/* sidebar-page-container end */}
        </div>
      </Layout>
    </>
  );
}
