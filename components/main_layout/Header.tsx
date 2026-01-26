import Link from 'next/link'

export default function Header() {
  return (
    <>
      {/* Spinner */}
      {/* <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: '3rem', height: '3rem' }}
        />
      </div> */}

      {/* Topbar */}
      <div className="container-fluid bg-secondary top-bar wow fadeIn" data-wow-delay="0.1s">
        <div className="row align-items-center h-100">
          <div className="col-lg-4 text-center text-lg-start">
            <Link href="/" className="d-flex align-items-center">
              <img
                src="/img/logo.png"
                alt="Sigmund Company Limited"
                className="img-fluid"
                style={{ maxHeight: '60px', width: 'auto' }}
              />
              <div className="ms-2 d-md-block">
                <p className="text-white small m-0 fw-bold">
                  Sigmund Company Limited
                </p>
                <p className="text-white small m-0">
                  Education • Consultancy • Professional Services
                </p>
              </div>
            </Link>
          </div>

          <div className="col-lg-8 d-none d-lg-block">
            <div className="row">
              <div className="col-lg-4">
                <div className="d-flex justify-content-end">
                  <div className="flex-shrink-0 btn-square bg-primary">
                    <i className="fa fa-phone-alt text-dark"></i>
                  </div>
                  <div className="ms-2">
                    <h6 className="text-primary mb-0">Phone</h6>
                    <span className="text-white">
                      +260 964050710 / 0953414582
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex justify-content-end">
                  <div className="flex-shrink-0 btn-square bg-primary">
                    <i className="fa fa-envelope-open text-dark"></i>
                  </div>
                  <div className="ms-2">
                    <h6 className="text-primary mb-0">Email</h6>
                    <span className="text-white">
                      info@sigmund.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="d-flex justify-content-end">
                  <div className="flex-shrink-0 btn-square bg-primary">
                    <i className="fa fa-map-marker-alt text-dark"></i>
                  </div>
                  <div className="ms-2">
                    <h6 className="text-primary mb-0">Head Office</h6>
                    <span className="text-white">
                      20 Chibolya Street, Twibukishe, Kitwe
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid bg-secondary px-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="nav-bar">
          <nav className="navbar navbar-expand-lg bg-primary navbar-dark px-4 py-lg-0">
            <h4 className="d-lg-none m-0">Menu</h4>
            <button
              type="button"
              className="navbar-toggler me-0"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav me-auto">
                <Link href="/" className="nav-item nav-link active">Home</Link>
                <a href="#about" className="nav-item nav-link">About</a>
                <a href="#services" className="nav-item nav-link">Services</a>
                <a href="/academy" className="nav-item nav-link">Academy</a>
                <a href="/trust-school" className='nav-item nav-link'>Trust School</a>
                <a href="#contact" className="nav-item nav-link">Contact</a>
              </div>

              <div className="d-none d-lg-flex ms-auto">
                <a className="btn btn-square btn-dark ms-2" href="#!">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-square btn-dark ms-2" href="#!">
                  <i className="fab fa-instagram"></i>
                </a>
                <a className="btn btn-square btn-dark ms-2" href="#!">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a className="btn btn-square btn-dark ms-2" href="#!">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
