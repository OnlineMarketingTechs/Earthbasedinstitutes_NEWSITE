import Link from "next/link";
// import { useRouter } from "next/router"

export default function Menu() {
  // const router = useRouter()

  return (
    <>
      {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

      <ul className="navigation clearfix">
        <li className="dropdown">
          <Link href="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link href="/about">About</Link>
          <ul>
            <li>
              <Link href="/staff">Staff</Link>
            </li>
            <li>
              <Link href="/instructors">Instructors</Link>
            </li>
            <li>
              <Link href="/tuition-financial-aid">Tuition Financial Aid</Link>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/nature-connected-coaching">Programs</Link>
          <ul>
            <li>
              <Link href="/nature-connected-coaching">
                Nature-Connected Coaching
              </Link>
            </li>
            <li>
              <Link href="/nature-connected-leadership">
                Nature-Connected Leadership
              </Link>
            </li>
            <li>
              <Link href="/wilderness-quest">Wilderness Quest </Link>
            </li>
            <li>
              <Link href="/ebi-community-adventure">
                EBI Community Adventure
              </Link>
            </li>
            <li>
              <Link href="/other-programs">Other Programs</Link>
            </li>
            {/* <li>
              <Link href="/software-research">Software &amp; Research</Link>
            </li>
            <li>
              <Link href="/support-maintenance">Support &amp; Maintenance</Link>
            </li> */}
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/certifications">Certifications</Link>
          <ul>
            <li>
              <Link href="/nature-connected-coaching">
                Nature-Connected Coaching
              </Link>
            </li>
            {/* <li className="dropdown"> */}
            <li>
              <Link href="/certifications">Guide Training</Link>
              {/* <ul>
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
            </li>
            <li>
              <Link href="/certification-and-education-credits">
                Certification and Education Credits
              </Link>
            </li>
            <li>
              <Link href="/transformational-wilderness-guiding">
                Transformational Wilderness Guiding
              </Link>
              {/* <ul>
                <li>
                  <Link href="/pricing-1">Pricing Style 01</Link>
                </li>
                <li>
                  <Link href="/pricing-2">Pricing Style 02</Link>
                </li>
              </ul> */}
            </li>
            <li>
              <Link href="/admissions">Admissions</Link>
              {/* <ul>
                <li>
                  <Link href="/testimonial-1">Testimonial Style 01</Link>
                </li>
                <li>
                  <Link href="/testimonial-2">Testimonial Style 02</Link>
                </li>
                <li>
                  <Link href="/testimonial-3">Testimonial Style 03</Link>
                </li>
                <li>
                  <Link href="/testimonial-4">Testimonial Style 04</Link>
                </li>
              </ul> */}
            </li>
            {/* <li>
              <Link href="/404">404</Link>
            </li> */}
          </ul>
        </li>
        <li className="dropdown">
          <Link href="/coaching">Coaching</Link>
          <ul>
            <li>
              <Link href="/wilderness-directions">
                Wilderness Direction Trips
              </Link>
            </li>
            {/* <li>
              <Link href="/life-coaching-services">Life Coaching Services</Link>
            </li> */}
            <li>
              <Link href="/intensive-business-mentoring">
                Intensive Business Mentoring
              </Link>
            </li>
            {/* <li>
              <Link href="/checkout">Checkout</Link>
            </li>
            <li>
              <Link href="/account">My Account</Link>
            </li> */}
          </ul>
        </li>
        <li>
          <Link href="#">Blog</Link>
          {/* <ul>
            <li className="dropdown">
              <Link href="#">Portfolio Grid</Link>
              <ul>
                <li>
                  <Link href="/portfolio-1">Grid View 01</Link>
                </li>
                <li>
                  <Link href="/portfolio-2">Grid View 02</Link>
                </li>
                <li>
                  <Link href="/portfolio-3">Grid View 03</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/portfolio-4">Portfolio Masonry</Link>
            </li>
            <li>
              <Link href="/portfolio-details">Portfolio Details</Link>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="#">Contact Us</Link>
          {/* <ul>
            <li className="dropdown">
              <Link href="#">Blog Default</Link>
              <ul>
                <li>
                  <Link href="/blog-1">Full Width</Link>
                </li>
                <li>
                  <Link href="/blog-2">Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog-3">Right Sidebar</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">Blog Grdi View</Link>
              <ul>
                <li>
                  <Link href="/blog-4">Left Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog-5">Right Sidebar</Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link href="#">Blog List View</Link>
              <ul>
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
            </li>
            <li className="dropdown">
              <Link href="#">Single Post</Link>
              <ul>
                <li>
                  <Link href="/blog-details">With Sidebar</Link>
                </li>
                <li>
                  <Link href="/blog-details-2">Without Sidebar</Link>
                </li>
              </ul>
            </li>
          </ul> */}
        </li>
        <li>
          <Link href="#">Login</Link>
          {/* <ul>
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
        </li>
      </ul>
    </>
  );
}
