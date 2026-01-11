import Link from 'next/link'

export default function Header() {
  return (
    <>
      
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: '3rem', height: '3rem' }}
        ></div>
      </div>
      {/* Spinner End */}

      {/* Topbar Start */}
      <div
        className="container-fluid bg-secondary top-bar wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row align-items-center h-100">
          <div className="col-lg-4 text-center text-lg-start">
            <Link href="/" className="d-flex align-items-center">
              <img
                src="/img/logo.png"
                alt="Sigmund Trust School"
                className="img-fluid"
                style={{ maxHeight: '60px', width: 'auto' }}
              />
              <div className="ms-2 d-none d-md-block">
                <p className="text-white small m-0 fw-bold">Sigmund Trust School</p>
                <p className="text-white small m-0">
                  Learners of Today, Leaders of Tomorrow
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
                    <h6 className="text-primary mb-0">Call Us</h6>
                    <span className="text-white">[Insert Phone Number]</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex justify-content-end">
                  <div className="flex-shrink-0 btn-square bg-primary">
                    <i className="fa fa-envelope-open text-dark"></i>
                  </div>
                  <div className="ms-2">
                    <h6 className="text-primary mb-0">Email Us</h6>
                    <span className="text-white">[Insert School Email]</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex justify-content-end">
                  <div className="flex-shrink-0 btn-square bg-primary">
                    <i className="fa fa-map-marker-alt text-dark"></i>
                  </div>
                  <div className="ms-2">
                    <h6 className="text-primary mb-0">Visit Us</h6>
                    <span className="text-white">[Insert Physical Address]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div
        className="container-fluid bg-secondary px-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
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
                <a href="#academics" className="nav-item nav-link">Academics</a>
                <a href="#school-life" className="nav-item nav-link">School Life</a>
                <a href="#admissions" className="nav-item nav-link">Admissions</a>
                <a href="#parents" className="nav-item nav-link">Parents</a>
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
      {/* Navbar End */}
    </>
  )
}
