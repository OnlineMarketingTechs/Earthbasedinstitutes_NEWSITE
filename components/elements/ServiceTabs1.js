"use client";
import "@/public/assets/css/ebi.module.css";

import { useState } from "react";

export default function ServiceTabs1() {
  const [activeIndex, setActiveIndex] = useState(1);
  const handleOnClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <ul className="nav nav-tabs tab-btn-style-one mr-md-4" role="tablist">
            <li className="nav-item" onClick={() => handleOnClick(1)}>
              <a className={activeIndex == 1 ? "nav-link active" : "nav-link"}>
                BOOST YOUR EFFECTIVENESS
              </a>
            </li>
            <li className="nav-item" onClick={() => handleOnClick(2)}>
              <a
                className={
                  activeIndex == 2 ? "nav-link active sliderbg" : "nav-link"
                }
              >
                ACCOUNTABILITY THROUGH COMMUNITY
              </a>
            </li>
            <li className="nav-item" onClick={() => handleOnClick(3)}>
              <a className={activeIndex == 3 ? "nav-link active" : "nav-link"}>
                SOMETHING YOU CAN REALLY SINK YOUR TEETH INTO!
              </a>
            </li>
            <li className="nav-item" onClick={() => handleOnClick(4)}>
              <a className={activeIndex == 4 ? "nav-link active" : "nav-link"}>
                STAY GROUNDED THROUGH CHALLENGING TIMES
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-6">
          {/* Tab panes */}
          <div
            className="tab-content wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1200ms"
          >
            <div
              className={
                activeIndex == 1
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <h4>
                REGISTER FOR NATURE-CONNECTED LEADERSHIP AND
                <br />
                LEARN TOOLS AND TECHNIQUES THAT WILL HELP YOU
                <br /> BOOST YOUR IMPACT AS A LEADER.
              </h4>
              <div className="text">
                Learn how to cultivate and maintain a mindset of growth and
                forward-focused vision so you are leading from within yourself
                first and having a positive influence on your environment rather
                than your environment having influence over you.
              </div>
              <img
                src="/assets/images/EBI-adobestock_107360802-scaled.webp"
                alt="Group of hikers helping each other climb a mountian"
              />
            </div>
            <div
              className={
                activeIndex == 2
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <h4>
                GET CONNECTED WITH A COMMUNITY OF SUPPORTIVE AND
                <br />
                UNDERSTANDING INDIVIDUALS WORKING TOGETHER TO STAY <br />
                INSPIRED AND FOLLOW VISION.
              </h4>
              <div className="text">
                This program will utilize the power of the group mind to enhance
                your effectiveness as a leader and bring clarity and inspiration
                to taking action in your life.
              </div>
              <img
                src="/assets/images/EBI-adobestock_240981191-scaled.webp"
                alt=""
              />
            </div>
            <div
              className={
                activeIndex == 3
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <h4>
                ATTEND ALL 3 SESSIONS OF NATURE CONNECTED LEADERSHIP
                <br />
                TO EXPERIENCE THE FULL DEPTH AND EFFECTIVENESS OF THIS PROGRAM.
              </h4>
              <div className="text">
                We don’t want to just give you information, we want to support
                you to apply it and make something happen. We will work closely
                with you through all three levels of this training for a deep
                immersion into becoming the leader you were born to be.
              </div>
              <img
                src="/assets/images/EBI-adobestock_247601566-scaled.webp"
                alt=""
              />
            </div>
            <div
              className={
                activeIndex == 4
                  ? "tab-pane fadeInUp animated show active"
                  : "tab-pane fadeInUp animated"
              }
            >
              <h4>
                DEVELOP A NATURE-CONNECTED PRACTICE THAT STRENGTHENS
                <br />
                YOUR EFFECTIVENESS AS A LEADER AND BRINGS NATURE INTO
                <br />
                YOUR DECISIONS MAKING IN A COLLABORATIVE AND POWERFUL WAY.
              </h4>
              <div className="text">
                The nature awareness and connection exercises we offer will help
                to gain insight and clarity. They also have a profound effect on
                your nervous system. In this way, as a Nature-Connected Leader,
                you literally bring the power of Nature into whatever situation
                you are in through your energy and calming presence.
              </div>
              <img
                src="/assets/images/EBI-adobestock_307495182-scaled.webp"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
