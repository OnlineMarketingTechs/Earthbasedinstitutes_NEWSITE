"use client";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
import Breadcrumb_Services from "@/components/layout/breadcrumb-services";
import FaqSection from "@/components/elements/FAQ";
export default function FAQ() {
  return (
    <>
      <Layout headerStyle={6} footerStyle={6} wrapperCls="home_6">
        <Breadcrumb_Services
          breadcrumbTitle="About"
          pageTitle="Frequently Asked Questions"
          pageImage="/assets/images/EBI-about-earth-based-institue.jpeg"
        />
        <div>
          <FaqSection />
          {/* <section className="contact-section style-two pt-0">
          <div className="auto-container"> */}
          {/* Subscribe Newsletter */}
          {/* <div className="subscribe-newsletter">
              <div className="sec-title light text-center">
                <h2>Newsletter Subscription</h2>
                <div className="text">
                  Subscribe us and get news, offers and all updates in Envolve
                  to your inbox directly
                </div>
                <div className="text-decoration">
                  <span className="left" />
                  <span className="right" />
                </div>
              </div>
              <form action="#">
                <div className="form-group">
                  <i className="flaticon-mail" />
                  <input
                    type="text"
                    placeholder="Enter your email address..."
                  />
                  <button type="submit" className="btn-style-four">
                    <span className="btn-title">Subscribe Us</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> */}
        </div>
      </Layout>
    </>
  );
}
