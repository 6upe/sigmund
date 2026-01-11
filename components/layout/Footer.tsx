export default function Footer() {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 py-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Contact Us</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>[Insert Physical Address]
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>[Insert Phone Number]
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>[Insert School Email]
              </p>
              <p className="mb-2">
                <i className="fa fa-globe me-3"></i>www.sigmund.com
              </p>
              <div className="d-flex pt-3">
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a className="btn btn-square btn-primary me-2" href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <a className="btn btn-link" href="#about">About Us</a>
              <a className="btn btn-link" href="#academics">Academics</a>
              <a className="btn btn-link" href="#school-life">School Life</a>
              <a className="btn btn-link" href="#admissions">Admissions</a>
              <a className="btn btn-link" href="#parents">Parents</a>
              <a className="btn btn-link" href="#contact">Contact</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Office Hours</h4>
              <p className="mb-1">Monday - Friday</p>
              <h6 className="text-light">08:00 am - 05:00 pm</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 am - 12:00 pm</h6>
              <p className="mb-1">Sunday</p>
              <h6 className="text-light">Closed</h6>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Gallery</h4>
              <div className="row g-2">
                <div className="col-4">
                  <img className="img-fluid w-100" src="img/sigmund/sig (7).jpeg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src="img/sigmund/sig (2).jpeg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src="img/sigmund/sig (3).jpeg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src="img/sigmund/sig (10).jpeg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src="img/sigmund/sig (5).jpeg" alt="" />
                </div>
                <div className="col-4">
                  <img className="img-fluid w-100" src="img/sigmund/sig (6).jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="copyright pt-5">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; <a className="fw-semi-bold" href="index.html">Sigmund Trust School</a>, All Right Reserved.
                <p className="mt-2 mb-0 small">"Raising tomorrow's leaders today."</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <p className="mb-0 small">Learners of Today, Leaders of Tomorrow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}

      {/* Back to Top */}
      <a href="#!" className="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  )
}
