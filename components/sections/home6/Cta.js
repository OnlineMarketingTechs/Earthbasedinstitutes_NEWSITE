export default function Cta() {
  return (
    <>
      <section className="cta-home-6">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5">
              <div className="text">
                <div className="icon-box">
                  <i className="fas fa-envelope-open-text" />
                </div>
                <h2>Subscribe to Our eNewsletter &amp; Get Updates.</h2>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="form-inner">
                <form action="#" method="post" className="subscribe-form">
                  <div className="form-group">
                    <i className="flaticon-mail" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address..."
                      required
                    />
                    <button type="submit">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
