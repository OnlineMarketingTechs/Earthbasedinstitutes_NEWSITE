import ServiceTabs1 from "@/components/elements/ServiceTabs1";
import Layout from "@/components/layout/Layout";
import AuditSlider1 from "@/components/slider/AuditSlider1";
import ServiceSlider1 from "@/components/slider/ServiceSlider1";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import classes from "@/public/assets/css/ebi.module.css";
import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="Programs"
          pageTitle="Wilderness Quest"
          pageImage="/assets/ebi_images/EBI-green-and-grey-simple-nature-traveller-linkedln-banner-4.webp"
        />
        <div>
          <section className="services-details">
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8 content-side">
                  {/*Theme Carousel*/}
                  <div className="image-slide">
                    <img src="/assets/ebi_images/EBI-33611.webp" alt="" />
                  </div>
                  <h2>WHAT IS A WILDERNESS QUEST</h2>
                  <div className={`text ${classes.ptext}`}>
                    The wilderness is a highly effective medium for
                    self-discovery, rites of passage, and spiritual renewal. Its
                    rhythms, beauty, and harsh realities act as perfect mirrors
                    that reflect deep truths about who we are as individuals.
                    <br /> <br />
                    By marking transitions such as, career change, relationship
                    change, and overall “inertia,” we are empowered to seek
                    direction, purpose, and commitment to our higher callings.
                    <br /> <br />
                    On all of our quests, participants are supported in
                    developing a strong, clear intention through, pre-trip
                    coaching, nature awareness, contemplative exercises, group
                    council, ceremony and ritual, and reflective inquiry.
                    <br /> <br />
                    This 10-day wilderness experience includes a four-day solo
                    fasting ceremony or wilderness rite of passage ceremony
                    focused on your specific intention.
                    <br /> <br />
                  </div>
                  <div className="row mb-5">
                    <div className="col-md-5">
                      <h2>WHAT YOU CAN EXPECT FROM AN EBI WILDERNESS QUEST</h2>
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <ul className="list">
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Ceremony and ritual
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check " />
                          Information on how to prepare for, participate in, and
                          integrate a Wilderness Quest
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Community and Friendship
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />A supportive environment
                          for your process
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Deeper connection to nature
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />A greater sense of self
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Tools for living the new version of yourself that you
                          have become during quest
                        </li>
                        <br/>
                      </ul>
                    </div>
                  </div>

                  <div className="row mb-5">
                    <div className="col-md-5">
                      <h2>PROGRAM OUTLINE</h2>
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="text">
                        <p className={classes.ptext}>
                          Once you apply and subsequently register for quest,
                          you’ll be invited to write an intention letter for
                          your quest: Why are you questing? How will you use the
                          time? What will your focus be?
                          <br />
                          <br />
                        </p>
                        <p className={classes.ptext}>
                          This letter will be submitted to your guide for review
                          and discussion. The remaining flow of the program is
                          as follows:
                        </p>
                      </div>
                      <ul className="list">
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Suggested reading to better understand quest and to
                          hone your intention for questing
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          One pre-trip call to talk about logistics and ask
                          questions 
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          10 day quest trip (includes a 4-day solo) 
                        </li>
                        <br/>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />3 post-trip integration
                          calls with the group
                        </li>
                      </ul>
                    </div>

                    <div className={`image-slide ${classes.width}`}>
                      <img
                        src="/assets/ebi_images/ebi-introduction-to-nature-connected-coaching.webp"
                        alt=""
                        className="mt-5"
                      />
                    </div>
                  </div>

                  <div className="row mb-5">
                    {/* <div className="col-md-5">
                      <h2>10-DAY QUEST TRIP SNAPSHOT</h2>
                      <div className="icon">
                        <span className="flaticon-chart" />
                      </div>
                    </div> */}
                    <div className={classes.width}>
                      <div className="text">
                        <p className={classes.ptext}>
                          Quest is a 10-day wilderness ceremony that begins with
                          your travel day to the basecamp location. The group
                          will convene at basecamp and orient to the land,
                          connect with Nature and begin learning more about what
                          is to come. <br />
                        </p>
                        <p className={classes.ptext}>
                          <br />
                          We will provide ample space for learning, questions,
                          discussion and time with the land to deepen into your
                          experience. Here is a breakdown of how the 10 days are
                          structured.
                          <br /> <br />
                          DAYS 1-3
                        </p>
                      </div>
                      <ul className="list">
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Together as a group in the basecamp area
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Logistics around basecamp
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Continue to work on clarifying your intention for your
                          quest
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          How to erect tarp shelters during solo days
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          What to do during quest solo (ceremonies, rituals,
                          tools)
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Finding your solo site
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Discussion on fasting
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Discussion on safety
                        </li>
                      </ul>
                      <div className="text mt-5">DAYS 4-7</div>
                      <ul className="list">
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          4-day/4 night solo in your quest location
                        </li>
                      </ul>

                      <div className="text mt-5">DAYS 8-10</div>
                      <ul className="list">
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Back together as a group in the basecamp area
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Breaking the fast from food
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Story sharing of your quest experience
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Mirroring of your story by your guide
                        </li>
                        <li className={classes.ptext}>
                          <i className="fa fa-check" />
                          Incorporation work (how to take your experience home)
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*Theme Carousel*/}
                  {/* <ServiceSlider1 /> */}
                  <h2>
                    LOGISTICAL DETAILS
                    <br />
                  </h2>

                  <div className={`text ${classes.ptext}`}>
                    LOCATIONS
                    <br /> <br />
                    Summer: Gunnison, Colorado in the Gunnison National Forest
                    (10,500ft of elevation)
                    <br /> <br /> <br />
                    TRAVEL AND LODGING
                    <br /> <br />
                    We recommend that you arrive in the general area the day
                    before the quest begins, unless you are “local”. You are
                    responsible for any travel associated with getting yourself
                    to and from the quest location. There may be opportunities
                    to carpool or share expenses with other questers. We’ll set
                    up a discussion forum for you to connect with each other.
                    <br /> <br /> <br />
                    MEALS DURING BASECAMP DAYS
                    <br /> <br />
                    We provide breakfast and dinner on the days we are together
                    as a group on the land in basecamp. Our chefs take any of
                    your food allergies and preferences into account when
                    creating a menu and put a high level of care in preparing
                    your meals. When you break your fast on the morning you
                    return from your solo, our staff brings you back into eating
                    slowly and methodically with foods that will best support
                    your return. You will be responsible for bringing food for
                    your lunches on those days and for solo days if you choose
                    not to fast. More details available upon registration.
                  </div>
                </div>
                <aside className="col-lg-4">
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
                    <h2 className="text-center pb-4">YOUR GUIDES</h2>
                    <div className="team-block-four ">
                      <div className="inner-box">
                        <div className="image">
                          <img
                            src="/assets/ebi-staff-and-instructors/Nature-Coaching-20171025_175135.webp"
                            alt="Image of EBI student mentor Hannah Tirrell-Wysocki"
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
                        </div>
                        <div className="lower-content">
                          <div className="author-title">
                            <h4>
                              HANNAH
                              <br />
                              TIRRELL-WYSOCKI
                            </h4>
                            <div className="designation">Student Mentor</div>
                          </div>
                          {/* <div className="text">
                            Earth-Based Institute (EBI) was Founded by Michael
                            Jospé. As a professional coach, educator and
                            wilderness guide, Michael is passionate about
                            helping people learn about themselves while being
                            out in nature.
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="team-block-four ">
                      <div className="inner-box">
                        <div className="image">
                          <img
                            src="/assets/ebi-staff-and-instructors/Nature-Coaching-img_2564.webp"
                            alt="Image of student mentor David Fontaine"
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
                        </div>
                        <div className="lower-content">
                          <div className="author-title">
                            <h4>DAVID FONTAINE</h4>
                            <div className="designation">Student Mentor</div>
                          </div>
                          {/* <div className="text">
                            Earth-Based Institute (EBI) was Founded by Michael
                            Jospé. As a professional coach, educator and
                            wilderness guide, Michael is passionate about
                            helping people learn about themselves while being
                            out in nature.
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div
                      className="widget widget_brochur"
                      style={{
                        backgroundColor: "rgb(37, 43, 60)",
                        // backgroundImage:
                        //   "url(assets/images/background/bg-27.jpg)",
                      }}
                    >
                      {/* <div className="widget-content">
                        <div className="icon">
                          <img src="/assets/images/icons/icon-60.png" alt="" />
                        </div> */}
                      <h2 className="text-white">
                        SIGN UP FOR OUR FREE "FIRST STEPS TO QUESTING" GUIDE
                      </h2>
                      <Image
                        src="/assets/ebi_images/ebi-first-steps-to-quest.png"
                        height="200"
                        width="200"
                        className="ml-5"
                      />
                      <h4 className="text-center text-white">
                        This 4-part series will walk you through the important
                        quest preparation steps to help you determine if
                        questing is the right next step for you.
                      </h4>
                      <div className="link-btn ml-5 mt-5">
                        <Link
                          href="#"
                          className="theme-btn btn-style-one text-white"
                        >
                          <span className="btn-title">GET MORE DETAILS</span>
                        </Link>
                      </div>
                      {/* </div> */}
                    </div>
                    <h2 className="text-center pb-4 pt-5">QUEST-IMONIALS</h2>
                    <div
                      className="widget widget_brochur"
                      style={{
                        backgroundColor: "rgb(37, 43, 60)",
                        // backgroundImage:
                        //   "url(assets/images/background/bg-27.jpg)",
                      }}
                    >
                      {/* <div className="widget-content">
                        <div className="icon">
                          <img src="/assets/images/icons/icon-60.png" alt="" />
                        </div> */}
                      <div className={`text text-center text-white ${classes.ptext}`}>
                        Whatever words I choose, they will fall far short of the
                        lived experience I had on the Land while on this
                        Wilderness Quest. My lived experience while on Quest was
                        profoundly restructuring, full of mystery, soul searing,
                        and viscerally healing. I came back intrinsically
                        different than when I left. I am so grateful to the EBI
                        team for their authentic holding of this Sacred and
                        ancient Ceremony. I felt so held, so cared for, and so
                        seen and heard. The guides are gifted midwives whose
                        ability to hold this sacred container allowed for lives
                        to be truly transformed. As I said to them prior to
                        coming back home, ‘This is the real deal.’"
                      </div>
                      <h4 className="text-center text-white">
                        Maria Rosa Galter <br />
                        EBi Quest Participant
                      </h4>
                      {/* </div> */}
                    </div>
                    <div
                      className="widget widget_brochur"
                      style={{
                        backgroundColor: "rgb(37, 43, 60)",
                        // backgroundImage:
                        //   "url(assets/images/background/bg-27.jpg)",
                      }}
                    >
                      {/* <div className="widget-content">
                        <div className="icon">
                          <img src="/assets/images/icons/icon-60.png" alt="" />
                        </div> */}
                      <div className={`text text-center text-white ${classes.ptext}`}>
                        " "The EBI Wilderness Quest was one of the most
                        important experiences of my life. I had struggled for
                        years before the quest to make some major changes in
                        both my inner experience of life as well as the way I
                        show up for others. The guides, the other questers, and
                        the wilderness itself all had their hand in making this
                        experience even more powerful than I knew it could be. I
                        felt something very deep in me shift towards a way of
                        being that totally broke through some chains that I
                        thought might hold me back for the rest of my life. It
                        was amazing to witness the powers of expert guidance,
                        group comradery, and deep connection with wilderness -
                        I'm still astounded by the level of deep and meaningful
                        change that could be achieved in such a short amount of
                        time, and I feel the support of the guides and the group
                        as we re-incorporate with our daily lives. The total
                        experience of the quest was both humbling and
                        empowering. I feel more in touch with (and in love
                        with!) my humanity than I ever have before. Thank you."
                        "
                      </div>
                      <h4 className="text-center text-white">
                        Amy Fleming <br />
                        EBI Quest Participant
                      </h4>
                      {/* </div> */}
                    </div>
                    <div
                      className="widget widget_brochur"
                      style={{
                        backgroundColor: "rgb(37, 43, 60)",
                        // backgroundImage:
                        //   "url(assets/images/background/bg-27.jpg)",
                      }}
                    >
                      {/* <div className="widget-content">
                        <div className="icon">
                          <img src="/assets/images/icons/icon-60.png" alt="" />
                        </div> */}
                      <div className={`text text-center text-white ${classes.ptext}`}>
                        "I answered the call to Quest with EBI from a place of
                        no formal training or certification. I was greeted by a
                        competent team of EBI leadership and guides who provided
                        the support and encouragement I needed every step of the
                        way. From the time I made the quest commitment to the
                        moment that we said goodbye and left the land, the
                        information and education needed to prepare and
                        participate were provided to me at every turn. It is
                        apparent that there is a long lineage of nature
                        connected knowledge being shared into the students and
                        staff of EBI and it is golden. What a beautiful
                        experience and ceremony to be witness to and part of.
                        Abundantly blessed by the experience!"
                      </div>
                      <h4 className="text-center text-white">
                        Annette Turner Koppenhaver <br />
                        EBI Quest Participant
                      </h4>
                      {/* </div> */}
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
