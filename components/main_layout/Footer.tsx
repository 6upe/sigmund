export default function Footer() {
  return (
    <>
      <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 py-5">

            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Contact</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>
                20 Chibolya Street, Twibukishe, Kitwe
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>
                +260 964050710 / 0953414582
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>
                info@sigmund.co.zm
              </p>
              <p className="mb-2">
                <i className="fa fa-globe me-3"></i>
                www.sigmund.co.zm
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Company</h4>
              <a className="btn btn-link" href="#about">About Us</a>
              <a className="btn btn-link" href="#services">Services</a>
              <a className="btn btn-link" href="#institutions">Institutions</a>
              <a className="btn btn-link" href="#careers">Careers</a>
              <a className="btn btn-link" href="#contact">Contact</a>
            </div>

            <div className="col-lg-3 col-md-6">
              <h4 className="text-light mb-4">Office Hours</h4>
              <p className="mb-1">Monday – Friday</p>
              <h6 className="text-light">08:00 – 17:00</h6>
              <p className="mb-1">Saturday</p>
              <h6 className="text-light">09:00 – 12:00</h6>
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
              </div>
            </div>

          </div>

          <div className="copyright pt-5">
            <div className="row">
              <div className="col-md-6 text-center text-md-start">
                &copy; {new Date().getFullYear()} Sigmund Company Limited. All Rights Reserved.
              </div>
              <div className="col-md-6 text-center text-md-end">
                Building institutions. Empowering people.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
