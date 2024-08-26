"use client";
import Link from "next/link";
import { useState } from "react";
export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
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
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="icon flaticon-remove" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <img src="/assets/images/EBI_NEW_LOGO.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/">Home</Link>
                  {/* <ul
                    style={{
                      display: `${isActive.key == 1 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/">Home </Link>
                    </li>
                    <li>
                      <Link href="/index-2">Home Consulting</Link>
                    </li>
                    <li>
                      <Link href="/index-3">Home Corporate</Link>
                    </li>
                    <li>
                      <Link href="/index-4">Home Software</Link>
                    </li>
                    <li>
                      <Link href="/index-5">Home Finance</Link>
                    </li>
                    <li>
                      <Link href="/index-6">Home Law Firm</Link>
                    </li>
                    <li>
                      <Link href="/index-7">Home Insurance</Link>
                    </li>
                    <li>
                      <Link href="/index-8">Home Psychologist</Link>
                    </li>
                    <li>
                      <Link href="/index-9">Home Auto Repai</Link>
                    </li>
                    <li>
                      <Link href="/index-10">Home Movers and Packers</Link>
                    </li>
                    <li>
                      <Link href="/index-11">Home Visa Consultant</Link>
                    </li>
                    <li>
                      <Link href="/index-12">Home Online Course</Link>
                    </li>
                    <li>
                      <Link href="/index-13">Home Construction</Link>
                    </li>
                    <li>
                      <Link href="/index-14">Home Architecture</Link>
                    </li>
                    <li>
                      <Link href="/index-15">Home Digital Agency</Link>
                    </li>
                  </ul> */}
                  {/* <div
                    className={
                      isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(1)}
                  >
                    <span className="fa fa-angle-right" />
                  </div> */}
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/about">About</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li
                      className={
                        isActive.key == 8 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/staff">Staff</Link>

                      {/* <ul
                        style={{
                          display: `${isActive.key == 8 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/about-1">About Style 01</Link>
                        </li>
                        <li>
                          <Link href="/about-2">About Style 02</Link>
                        </li>
                        <li>
                          <Link href="/about-3">About Style 03</Link>
                        </li>
                      </ul> */}
                      {/* <div
                        className={
                          isActive.key == 8
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(8)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    </li>
                    <li
                      className={
                        isActive.key == 9 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/instructors">Instructors</Link>
                    </li>

                    <li
                      className={
                        isActive.key == 10 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/tuition-financial-aid">
                        Tuition and Financial Aid
                      </Link>
                      {/* <ul
                        style={{
                          display: `${isActive.key == 9 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/team-1">Team Style 01</Link>
                        </li>
                        <li>
                          <Link href="/team-2">Team Style 02</Link>
                        </li>
                        <li>
                          <Link href="/team-3">Team Style 03</Link>
                        </li>
                        <li>
                          <Link href="/team-4">Team Style 04</Link>
                        </li>
                        <li>
                          <Link href="/team-details">Team Details</Link>
                        </li>
                      </ul> */}
                      {/* <div
                        className={
                          isActive.key == 9
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(9)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 3 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/nature-connected-coaching">Programs</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 3 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/">NEW COURSE- Bee-Line Strategy</Link>
                    </li>
                    <li>
                      <Link href="/nature-connected-coaching">
                        NATURE CONNECTED COACHING
                      </Link>
                    </li>
                    <li>
                      <Link href="/nature-connected-leadership">
                        Nature Connected Leadership
                      </Link>
                    </li>
                    <li>
                      <Link href="/wilderness-quest">Wilderness Quest</Link>
                    </li>
                    <li>
                      <Link href="/ebi-community-adventure">
                        EBI Community Adventure
                      </Link>
                    </li>
                    <li>
                      <Link href="/other-programs">Other Programs</Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(3)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 4 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/certifications">Certifications</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 4 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/nature-connected-coaching">
                        NATURE-CONNECTED COACHING
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 10 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/certifications">Guide Training</Link>
                      {/* <ul
                        style={{
                          display: `${isActive.key == 10 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/contact-1">Contact Style 01</Link>
                        </li>
                        <li>
                          <Link href="/contact-2">Contact Style 02</Link>
                        </li>
                        <li>
                          <Link href="/contact-3">Contact Style 03</Link>
                        </li>
                        <li>
                          <Link href="/contact-4">Contact Style 04</Link>
                        </li>
                      </ul> */}
                      {/* <div
                        className={
                          isActive.key == 10
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(10)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    </li>
                    <li>
                      <Link href="/certification-and-education-credits">
                        Certification and education credits
                      </Link>
                    </li>
                    <li
                      className={
                        isActive.key == 11 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/transformational-wilderness-guiding">
                        Transformational Wilderness Guiding
                      </Link>
                      {/* <ul
                        style={{
                          display: `${isActive.key == 11 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/pricing-1">Pricing Style 01</Link>
                        </li>
                        <li>
                          <Link href="/pricing-2">Pricing Style 02</Link>
                        </li>
                      </ul> */}
                      {/* <div
                        className={
                          isActive.key == 11
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(11)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    </li>
                    <li
                      className={
                        isActive.key == 12 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/admissions">Admissions</Link>
                      {/* <ul
                        style={{
                          display: `${isActive.key == 12 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/testimonial-1">
                            Testimonial Style 01
                          </Link>
                        </li>
                        <li>
                          <Link href="/testimonial-2">
                            Testimonial Style 02
                          </Link>
                        </li>
                        <li>
                          <Link href="/testimonial-3">
                            Testimonial Style 03
                          </Link>
                        </li>
                        <li>
                          <Link href="/testimonial-4">
                            Testimonial Style 04
                          </Link>
                        </li>
                      </ul> */}
                      {/* <div
                        className={
                          isActive.key == 12
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(12)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(4)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 5 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Coaching</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 5 ? "block" : "none"}`,
                    }}
                  >
                    <li
                      className={
                        isActive.key == 13 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/wilderness-directions">
                        Wilderness Directions Trips
                      </Link>
                      {/* <ul
                        style={{
                          display: `${isActive.key == 13 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/portfolio-1">Grid View 01</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-2">Grid View 02</Link>
                        </li>
                        <li>
                          <Link href="/portfolio-3">Grid View 03</Link>
                        </li>
                      </ul> */}
                      {/* <div
                        className={
                          isActive.key == 13
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(13)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    </li>
                    <li>
                      <Link href="/life-coaching-services">
                        Life Coaching Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/intensive-business-mentoring">
                        Intensive Business Mentoring
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(5)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li
                  className={
                    isActive.key == 6 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#">Blog</Link>
                  <ul
                    style={{
                      display: `${isActive.key == 6 ? "block" : "none"}`,
                    }}
                  >
                    {/* <li
                      className={
                        isActive.key == 14 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/blog">Blog</Link> */}
                    {/* <ul
                        style={{
                          display: `${isActive.key == 14 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/blog-1">Full Width</Link>
                        </li>
                        <li>
                          <Link href="/blog-2">Left Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-3">Right Sidebar</Link>
                        </li>
                      </ul> */}
                    {/* <div
                        className={
                          isActive.key == 14
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(14)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    {/* </li>
                    <li
                      className={
                        isActive.key == 14 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/#">Blog Grdi View</Link>
                      <ul
                        style={{
                          display: `${isActive.key == 14 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/blog-4">Left Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-5">Right Sidebar</Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.key == 14
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(14)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li
                      className={
                        isActive.key == 15 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/#">Blog List View</Link>
                      <ul
                        style={{
                          display: `${isActive.key == 15 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/blog-6">Full Width</Link>
                        </li>
                        <li>
                          <Link href="/blog-7">Left Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-8">Right Sidebar</Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.key == 15
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(15)}
                      >
                        <span className="fa fa-angle-right" />
                      </div>
                    </li>
                    <li
                      className={
                        isActive.key == 16 ? "dropdown current" : "dropdown"
                      }
                    >
                      <Link href="/#">Single Post</Link>
                      <ul
                        style={{
                          display: `${isActive.key == 16 ? "block" : "none"}`,
                        }}
                      >
                        <li>
                          <Link href="/blog-details">With Sidebar</Link>
                        </li>
                        <li>
                          <Link href="/blog-details-2">Without Sidebar</Link>
                        </li>
                      </ul>
                      <div
                        className={
                          isActive.key == 16
                            ? "dropdown-btn open"
                            : "dropdown-btn"
                        }
                        onClick={() => handleToggle(16)}
                      >
                        <span className="fa fa-angle-right" />
                      </div> */}
                    {/* </li> */}
                  </ul>
                  {/* <div
                    className={
                      isActive.key == 6 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(6)}
                  >
                    <span className="fa fa-angle-right" />
                  </div> */}
                </li>
                <li
                  className={
                    isActive.key == 7 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/contact">Contact Us</Link>
                  {/* <ul
                    style={{
                      display: `${isActive.key == 7 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link href="/shop">Products</Link>
                    </li>
                    <li>
                      <Link href="/product-details">Product Details</Link>
                    </li>
                    <li>
                      <Link href="/shopping-cart">Shopping Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link href="/account">My Account</Link>
                    </li>
                  </ul> */}
                  {/* <div
                    className={
                      isActive.key == 7 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(7)}
                  >
                    <span className="fa fa-angle-right" />
                  </div> */}
                </li>

                <li
                  className={
                    isActive.key == 8 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/contact">Login</Link>
                </li>
              </ul>
            </div>
          </div>
          {/*Social Links*/}
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/#">
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
