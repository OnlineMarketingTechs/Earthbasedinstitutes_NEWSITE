import Link from "next/link";
import classes from "@/public/assets/css/ebi.module.css";

export default function Breadcrumb_Services_blt({
  breadcrumbTitle,
  pageTitle,
  pageImage,
  bltTitle,
  listItemOne,
  listItemTwo,
  listItemThree,
  listItemFour,
}) {
  return (
    <>
      <section
        className={`page-title ${classes.bcsection1}`}
        style={{ backgroundImage: `url(${pageImage})` }}
      >
        {" "}
        {/* Use pageImage for background */}
        <div className="auto-container">
          <div className="content-box">
            <div className="content-wrapper">
              <div className={`title ${classes.container1}`}>
                <h1>{pageTitle}</h1>
              </div>
              <ul className="bread-crumb clearfix">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {/* <li>
                  <Link href="#">Services</Link>
                </li> */}
                <li>{breadcrumbTitle}</li>
              </ul>

              <div className={classes.bulletpoints}>
                <div className={classes.blttext}>
                  {bltTitle}
                  <ul className={classes.bcul}>
                    <li className={classes.listitem}>{listItemOne}</li>
                    <li className={classes.listitem}>{listItemTwo}</li>
                    <li className={classes.listitem}>{listItemThree}</li>
                    <li className={classes.listitem}>{listItemFour}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
