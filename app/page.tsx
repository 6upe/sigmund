// src/app/page.tsx
export default function HomePage() {
  return (
    <>
      {/* Carousel Start */}
      <div className="container-fluid p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="owl-carousel header-carousel py-5">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="carousel-text">
                  <h1 className="display-1 text-uppercase mb-3">
                    Welcome to Sigmund Trust School
                  </h1>
                  <p className="fs-5 mb-5">
                    At Sigmund Trust School, we believe that every child is a
                    seed of greatness. We nurture, inspire, and equip learners
                    with the skills, values, and confidence they need to become
                    global leaders.
                  </p>
                  <div className="d-flex">
                    <a
                      className="btn btn-primary py-3 px-4 me-3"
                      href="#admissions"
                    >
                      Apply Now
                    </a>
                    <a className="btn btn-secondary py-3 px-4" href="#about">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="carousel-img">
                  <img
                    className="w-100"
                    src="img/carousel-1.jpg"
                    alt="Welcome"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="carousel-text">
                  <h1 className="display-1 text-uppercase mb-3">
                    Learners of Today, Leaders of Tomorrow
                  </h1>
                  <p className="fs-5 mb-5">
                    Where learning meets innovation. Where values shape
                    character. Where children grow into global citizens. From
                    early childhood to upper primary, we provide a safe,
                    innovative, and inclusive learning environment.
                  </p>
                  <div className="d-flex mt-4">
                    <a
                      className="btn btn-primary py-3 px-4 me-3"
                      href="#academics"
                    >
                      Our Curriculum
                    </a>
                    <a
                      className="btn btn-secondary py-3 px-4"
                      href="#school-life"
                    >
                      School Life
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="carousel-img">
                  <img
                    className="w-100"
                    src="img/carousel-2.jpg"
                    alt="Leaders"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      {/* Video Start */}
      <div
        className="container-fluid bg-primary mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-lg-11">
              <div className="h-100 py-5 d-flex align-items-center">
                <button
                  type="button"
                  className="btn-play"
                  data-bs-toggle="modal"
                  data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                  data-bs-target="#videoModal"
                >
                  <span></span>
                </button>
                <h3 className="ms-5 mb-0">
                  Raising tomorrow's leaders through excellent education and
                  innovation.
                </h3>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-1">
              <div className="h-100 w-100 bg-secondary d-flex align-items-center justify-content-center">
                <span
                  className="text-white"
                  style={{ transform: "rotate(-90deg)" }}
                >
                  Scroll Down
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video End */}

      {/* Video Modal Start */}
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* 16:9 aspect ratio */}
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal End */}

      {/* About Start */}
      <div id="about" className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              <div className="about-img">
                <img
                  className="img-fluid w-100"
                  src="img/sigmund/sig (3).jpeg"
                  alt="Sigmund Trust School"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3">
                About Us
              </p>
              <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">
                Who We Are
              </h1>
              <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
                Sigmund Trust School (S.T.S.) is an innovative learning
                institution dedicated to raising a new generation of thinkers,
                creators, and leaders. Built on strong moral foundations and a
                forward-thinking curriculum, S.T.S. blends academic rigor with
                creativity, innovation, and global exposure.
              </p>
              <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
                <strong>
                  We don't just teach — we inspire, empower, and transform.
                </strong>
              </p>
              <div className="row g-4 pt-2">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="h-100">
                    <h3>
                      <i className="fa fa-eye text-primary me-2"></i>Our Vision
                    </h3>
                    <p className="mb-3">
                      To raise a dynamic workforce of future leaders through
                      excellent education and innovation.
                    </p>
                    <h3 className="mt-4">
                      <i className="fa fa-bullseye text-primary me-2"></i>Our
                      Mission
                    </h3>
                    <p className="mb-2">
                      At Sigmund Trust School, we strive to:
                    </p>
                    <p className="text-dark small">
                      <i className="fa fa-check text-primary me-2"></i>Provide a
                      dynamic, inclusive learning environment
                    </p>
                    <p className="text-dark small">
                      <i className="fa fa-check text-primary me-2"></i>Embrace
                      diversity and empower global thinking
                    </p>
                    <p className="text-dark small mb-0">
                      <i className="fa fa-check text-primary me-2"></i>Equip
                      students with life skills and excellence
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="h-100 bg-primary p-4 text-center">
                    <h3 className="text-dark mb-3">Quick Highlights</h3>
                    <p className="text-dark small mb-2">
                      <i className="fa fa-check text-secondary me-2"></i>Modern
                      classrooms & interactive learning tools
                    </p>
                    <p className="text-dark small mb-2">
                      <i className="fa fa-check text-secondary me-2"></i>Highly
                      qualified, passionate educators
                    </p>
                    <p className="text-dark small mb-2">
                      <i className="fa fa-check text-secondary me-2"></i>STEAM &
                      creativity-focused curriculum
                    </p>
                    <p className="text-dark small mb-2">
                      <i className="fa fa-check text-secondary me-2"></i>
                      Leadership and life-skills programs
                    </p>
                    <p className="text-dark small mb-3">
                      <i className="fa fa-check text-secondary me-2"></i>Safe,
                      nurturing, value-based environment
                    </p>
                    <a
                      className="btn btn-secondary py-2 px-4"
                      href="#admissions"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Features Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="rounded overflow-hidden">
                <div className="row g-0">
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="text-center bg-primary py-5 px-4 h-100">
                      <i className="fa fa-user-graduate fa-3x text-secondary mb-3"></i>
                      <h1 className="display-5 mb-0" data-toggle="counter-up">
                        500
                      </h1>
                      <span className="text-dark">Active Learners</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                    <div className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-chalkboard-teacher fa-3x text-primary mb-3"></i>
                      <h1
                        className="display-5 text-white mb-0"
                        data-toggle="counter-up"
                      >
                        50
                      </h1>
                      <span className="text-white">Qualified Teachers</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="text-center bg-secondary py-5 px-4 h-100">
                      <i className="fa fa-trophy fa-3x text-primary mb-3"></i>
                      <h1
                        className="display-5 text-white mb-0"
                        data-toggle="counter-up"
                      >
                        100
                      </h1>
                      <span className="text-white">Awards Won</span>
                    </div>
                  </div>
                  <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
                    <div className="text-center bg-primary py-5 px-4 h-100">
                      <i className="fa fa-heart fa-3x text-secondary mb-3"></i>
                      <h1 className="display-5 mb-0" data-toggle="counter-up">
                        1000
                      </h1>
                      <span className="text-dark">Happy Parents</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3">
                Our Values
              </p>
              <h1 className="display-6 mb-4 wow fadeIn" data-wow-delay="0.2s">
                Our Core Values (P.U.R.P.L.E.)
              </h1>
              <p className="mb-4 wow fadeIn" data-wow-delay="0.3s">
                These values shape our culture, behavior, and expectations at
                Sigmund Trust School.
              </p>
              <div className="row g-3">
                <div className="col-12 wow fadeIn" data-wow-delay="0.4s">
                  <p className="text-dark mb-2">
                    <strong className="text-primary">P</strong> —
                    <strong>Passionate:</strong> We teach with passion, learn
                    with passion, and inspire passion in everything we do.
                  </p>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                  <p className="text-dark mb-2">
                    <strong className="text-primary">U</strong> —
                    <strong>Unity:</strong> We believe in teamwork, respect, and
                    collaboration. Together, we grow.
                  </p>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.6s">
                  <p className="text-dark mb-2">
                    <strong className="text-primary">R</strong> —
                    <strong>Responsibility:</strong> We encourage
                    accountability, discipline, and strong character in all
                    students.
                  </p>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.7s">
                  <p className="text-dark mb-2">
                    <strong className="text-primary">P</strong> —
                    <strong>Perseverance:</strong> We train learners to keep
                    going, even when things get tough — winners never quit.
                  </p>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.8s">
                  <p className="text-dark mb-2">
                    <strong className="text-primary">L</strong> —
                    <strong>Love:</strong> We build a warm, caring environment
                    where every child feels valued and supported.
                  </p>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.9s">
                  <p className="text-dark mb-0">
                    <strong className="text-primary">E</strong> —
                    <strong>Excellence:</strong> We pursue high standards in
                    academics, behavior, and leadership. Excellence is our
                    culture.
                  </p>
                </div>
              </div>
              <div className="d-flex mt-4 wow fadeIn" data-wow-delay="1.0s">
                <a
                  className="btn btn-primary py-3 px-4 me-3"
                  href="#admissions"
                >
                  Apply Now
                </a>
                <a className="btn btn-secondary py-3 px-4" href="#contact">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* School Life Start */}
      <div id="school-life" className="container-fluid py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              School Life
            </p>
            <h1 className="display-6 mb-4">Beyond the Classroom</h1>
            <p className="mb-4">
              We believe education should be an experience — fun, engaging,
              memorable, and impactful.
            </p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="donation-item d-flex h-100 p-4">
                <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                  <i className="fa fa-chess fa-3x text-secondary mb-3"></i>
                </div>
                <div className="donation-detail">
                  <h3 className="mb-3">Co-Curricular Activities</h3>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Chess
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Music &
                    Choir
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Drama &
                    Public Speaking
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Robotics &
                    Coding (STEAM)
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Sports:
                    Football, Athletics, Netball, Volleyball
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Art &
                    Creativity Workshops
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="donation-item d-flex h-100 p-4">
                <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                  <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                </div>
                <div className="donation-detail">
                  <h3 className="mb-3">Clubs</h3>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Young
                    Leaders Club
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Debate &
                    Literacy Club
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>
                    Environmental & Clean Earth Club
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>Junior
                    Innovators Club
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="donation-item d-flex h-100 p-4">
                <div className="donation-progress d-flex flex-column flex-shrink-0 text-center me-4">
                  <i className="fa fa-calendar-check fa-3x text-secondary mb-3"></i>
                </div>
                <div className="donation-detail">
                  <h3 className="mb-3">Special Programs</h3>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Academic
                    Awards Day
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Leadership
                    Camp
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Culture &
                    Talent Festival
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check text-primary me-2"></i>Reading
                    Challenge Weeks
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-check text-primary me-2"></i>
                    Entrepreneurship Day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* School Life End */}

      {/* Banner Start */}
      <div className="container-fluid banner py-5">
        <div className="container">
          <div
            className="banner-inner bg-light p-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="row justify-content-center">
              <div className="col-lg-8 py-5 text-center">
                <h1 className="display-6 wow fadeIn" data-wow-delay="0.3s">
                  Our Doors Are Always Open to Learners Who Want to Grow and
                  Lead!
                </h1>
                <p className="fs-5 mb-4 wow fadeIn" data-wow-delay="0.5s">
                  We welcome learners from diverse backgrounds who are eager to
                  learn, grow, and lead. Join us in building a future where
                  every child reaches their fullest potential.
                </p>
                <div
                  className="d-flex justify-content-center wow fadeIn"
                  data-wow-delay="0.7s"
                >
                  <a
                    className="btn btn-primary py-3 px-4 me-3"
                    href="#admissions"
                  >
                    Apply Now
                  </a>
                  <a className="btn btn-secondary py-3 px-4" href="#contact">
                    Visit Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* Popular Mastermind Programs Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Popular Mastermind Programs
            </p>
            <h1 className="display-6 mb-4">
              Join Our Most Sought-After Programs
            </h1>
            <p>
              Designed to inspire, empower, and transform young leaders and
              professionals.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="event-item h-100 p-4">
                <img
                  className="img-fluid w-100 mb-4"
                  src="img/sigmund/sig (2).jpeg"
                  alt="Waste Management"
                />
                <a href="#!" className="h3 d-inline-block">
                  Waste Management
                </a>
                <p>
                  Learn sustainable waste management practices and environmental
                  responsibility.
                </p>
                <div className="bg-light p-4">
                  <p className="mb-0">
                    <i className="fa fa-leaf text-primary me-2"></i>
                    Sustainability & Environment
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.2s">
              <div className="event-item h-100 p-4">
                <img
                  className="img-fluid w-100 mb-4"
                  src="img/sigmund/sig (3).jpeg"
                  alt="Circular Economy"
                />
                <a href="#!" className="h3 d-inline-block">
                  Circular Economy
                </a>
                <p>
                  Explore innovative approaches to resource use and economic
                  sustainability.
                </p>
                <div className="bg-light p-4">
                  <p className="mb-0">
                    <i className="fa fa-recycle text-primary me-2"></i>
                    Innovation & Economy
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="event-item h-100 p-4">
                <img
                  className="img-fluid w-100 mb-4"
                  src="img/sigmund/sig (5).jpeg"
                  alt="Leadership Program for Young People"
                />
                <a href="#!" className="h3 d-inline-block">
                  Leadership Program for Young People
                </a>
                <p>
                  Empowering youth with leadership skills, confidence, and
                  vision for the future.
                </p>
                <div className="bg-light p-4">
                  <p className="mb-0">
                    <i className="fa fa-users text-primary me-2"></i>Youth
                    Leadership
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.4s">
              <div className="event-item h-100 p-4">
                <img
                  className="img-fluid w-100 mb-4"
                  src="img/sigmund/sig (10).jpeg"
                  alt="Becoming a Speaker"
                />
                <a href="#!" className="h3 d-inline-block">
                  Becoming a Speaker
                </a>
                <p>
                  Master public speaking, presentation, and communication
                  skills.
                </p>
                <div className="bg-light p-4">
                  <p className="mb-0">
                    <i className="fa fa-microphone text-primary me-2"></i>
                    Communication & Public Speaking
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="event-item h-100 p-4">
                <img
                  className="img-fluid w-100 mb-4"
                  src="img/sigmund/sig (8).jpeg"
                  alt="Entrepreneurship"
                />
                <a href="#!" className="h3 d-inline-block">
                  Entrepreneurship
                </a>
                <p>
                  Develop entrepreneurial mindset, business skills, and
                  innovation strategies.
                </p>
                <div className="bg-light p-4">
                  <p className="mb-0">
                    <i className="fa fa-lightbulb text-primary me-2"></i>
                    Business & Innovation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Popular Mastermind Programs End */}

      {/* Admissions Start */}
      <div id="admissions" className="container-fluid donate py-5">
        <div className="container">
          <div className="row g-0">
            <div
              className="col-lg-7 donate-text bg-light py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div
                className="d-flex flex-column justify-content-center h-100 p-5 wow fadeIn"
                data-wow-delay="0.3s"
              >
                <h1 className="display-6 mb-4">Join Sigmund Trust School</h1>
                <p className="fs-5 mb-3">
                  We welcome learners from diverse backgrounds who are eager to
                  learn, grow, and lead.
                </p>
                <h4 className="mb-3">Why Choose Us?</h4>
                <p className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Safe,
                  child-friendly environment
                </p>
                <p className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Strong
                  academic performance
                </p>
                <p className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Experienced,
                  caring teachers
                </p>
                <p className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Value-based
                  education
                </p>
                <p className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Affordable
                  and flexible fee structures
                </p>
                <p className="mb-0">
                  <i className="fa fa-check text-primary me-2"></i>Balanced
                  academics & extracurriculars
                </p>
              </div>
            </div>
            <div
              className="col-lg-5 donate-form bg-primary py-5 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="h-100 p-5">
                <h3 className="text-dark mb-4">Admissions Inquiry</h3>
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="parentName"
                          placeholder="Parent/Guardian Name"
                        />
                        <label htmlFor="parentName">Parent/Guardian Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="parentEmail"
                          placeholder="Your Email"
                        />
                        <label htmlFor="parentEmail">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          placeholder="Phone Number"
                        />
                        <label htmlFor="phone">Phone Number</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="childName"
                          placeholder="Child's Name"
                        />
                        <label htmlFor="childName">Child's Name</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <select className="form-select" id="grade">
                          <option value="">Select Grade Level</option>
                          <option value="early-childhood">
                            Early Childhood
                          </option>
                          <option value="lower-primary">Lower Primary</option>
                          <option value="upper-primary">Upper Primary</option>
                        </select>
                        <label htmlFor="grade">Grade Level</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-secondary py-3 w-100"
                        type="submit"
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </div>
                </form>
                <p className="text-dark small mt-3 mb-0">
                  Admissions Steps: Visit → Application → Assessment →
                  Enrollment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Admissions End */}

      {/* Team Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Our Team
            </p>
            <h1 className="display-6 mb-4">Meet Our Dedicated Leaders</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="team-item d-flex h-100 p-4">
                <div className="team-detail pe-4">
                  <img
                    className="img-fluid mb-4"
                    src="img/sigmund/sig (1).jpeg"
                    alt="Dr Sylvester Lunda"
                  />
                  <h3>Dr Sylvester Lunda</h3>
                  <span>Chief Executive Officer (CEO)</span>
                </div>
                <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="team-item d-flex h-100 p-4">
                <div className="team-detail pe-4">
                  <img
                    className="img-fluid mb-4"
                    src="img/sigmund/sig (9).jpeg"
                    alt="Mr Munga Mbuyu"
                  />
                  <h3>Mr Munga Mbuyu</h3>
                  <span>Business Development Director</span>
                </div>
                <div className="team-social bg-light d-flex flex-column justify-content-center flex-shrink-0 p-4">
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a className="btn btn-square btn-primary my-2" href="#!">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Contact Start */}
      <div id="contact" className="container-fluid py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </p>
            <h1 className="display-6 mb-4">Get in Touch</h1>
            <p className="mb-4">
              We'd love to hear from you. Visit us, call us, or send us a
              message.
            </p>
          </div>
          <div className="row g-4 mt-2">
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="text-center bg-light p-4 h-100">
                <div
                  className="btn-square bg-primary mx-auto mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fa fa-map-marker-alt fa-3x text-secondary"></i>
                </div>
                <h4>Visit Us</h4>
                <p className="mb-0">[Insert Physical Address]</p>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="text-center bg-light p-4 h-100">
                <div
                  className="btn-square bg-primary mx-auto mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fa fa-phone-alt fa-3x text-secondary"></i>
                </div>
                <h4>Call Us</h4>
                <p className="mb-0">[Insert Phone Number]</p>
              </div>
            </div>
            <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
              <div className="text-center bg-light p-4 h-100">
                <div
                  className="btn-square bg-primary mx-auto mb-3"
                  style={{ width: "80px", height: "80px" }}
                >
                  <i className="fa fa-envelope fa-3x text-secondary"></i>
                </div>
                <h4>Email Us</h4>
                <p className="mb-0">[Insert School Email]</p>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 text-center">
              <p className="mb-2">
                <strong>Office Hours:</strong> Monday–Friday (08:00 – 17:00)
              </p>
              <p className="mb-0">
                <strong>Website:</strong> www.sigmund.com
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}

      {/* Newsletter Start */}
      <div
        className="container-fluid bg-primary py-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-7 text-center wow fadeIn"
              data-wow-delay="0.5s"
            >
              <h1 className="display-6 mb-4">Subscribe to Our Newsletter</h1>
              <p className="mb-3">
                Stay updated with school news, events, and your child's learning
                journey.
              </p>
              <div className="position-relative w-100 mb-2">
                <input
                  className="form-control border-0 w-100 ps-4 pe-5"
                  type="text"
                  placeholder="Enter Your Email"
                  style={{ height: "60px" }}
                />
                <button
                  type="button"
                  className="btn btn-lg-square shadow-none position-absolute top-0 end-0 mt-2 me-2"
                >
                  <i className="fa fa-paper-plane text-primary fs-4"></i>
                </button>
              </div>
              <p className="mb-0">
                Don't worry, we won't spam you with emails.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
    </>
  );
}
