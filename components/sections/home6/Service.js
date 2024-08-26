import ServiceSlider6 from "@/components/slider/ServiceSlider6";

export default function Service() {
  return (
    <>
      <section
        className="service-home-6"
        style={{
          backgroundImage: "url(/assets/ebi_images/EBI-01.webp)",
        }}
      >
        <div className="auto-container">
          <div className="sec-title style-four text-center light">
            <h2>Our Staff and Instructors</h2>
            <span className="text-decoration-four" />
          </div>
          {/*Service Carousel*/}
          <ServiceSlider6 />
        </div>
      </section>
    </>
  );
}
