// src/app/page.tsx

import Link from "next/link"

export default function Academy() {
  return (
    <>

      {/* Popular Mastermind Programs Start */}
        <div className="container-fluid py-5">
        <div className="container">
            <div
            className="text-center mx-auto wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
            >
            <p className="section-title bg-white text-center text-primary px-3">
                Our Training & Development Programs
            </p>
            <h1 className="display-6 mb-4">
                Professional Training and Development Center
            </h1>
            <p>
                As a professional Training and Development Center, we are committed to empowering individuals, youth, professionals, and organizations with practical leadership, management, language, and life skills.
            </p>
            </div>

            <div className="row g-4">
            {/* Waste Management */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="event-item h-100 p-4">
                <img className="img-fluid w-100 mb-4" src="/img/sigmund/sig (2).jpeg" alt="Waste Management" />
                <Link href="/academy/leadership-and-management" className="h3 d-inline-block">
                    Waste Management
                </Link>
                <p>Learn sustainable waste management practices and environmental responsibility.</p>
                <div className="bg-light p-4">
                    <p className="mb-0">
                    <i className="fa fa-leaf text-primary me-2"></i>
                    Sustainability & Environment
                    </p>
                </div>
                </div>
            </div>

            {/* Circular Economy */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.2s">
                <div className="event-item h-100 p-4">
                <img className="img-fluid w-100 mb-4" src="/img/sigmund/sig (3).jpeg" alt="Circular Economy" />
                <Link href="/academy/leadership-and-management" className="h3 d-inline-block">
                    Circular Economy
                </Link>
                <p>Explore innovative approaches to resource use and economic sustainability.</p>
                <div className="bg-light p-4">
                    <p className="mb-0">
                    <i className="fa fa-recycle text-primary me-2"></i>
                    Innovation & Economy
                    </p>
                </div>
                </div>
            </div>

            {/* Leadership Program */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="event-item h-100 p-4">
                <img className="img-fluid w-100 mb-4" src="/img/sigmund/sig (5).jpeg" alt="Leadership Program" />
                <Link
                    href="/academy/leadership-and-management"
                    className="h3 d-inline-block"
                >
                    Leadership Program for Young People
                </Link>
                <p>Empowering youth with leadership skills, confidence, and vision.</p>
                <div className="bg-light p-4">
                    <p className="mb-0">
                    <i className="fa fa-users text-primary me-2"></i>
                    Youth Leadership
                    </p>
                </div>
                </div>
            </div>

            {/* Becoming a Speaker */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.4s">
                <div className="event-item h-100 p-4">
                <img className="img-fluid w-100 mb-4" src="/img/sigmund/sig (10).jpeg" alt="Becoming a Speaker" />
                <Link href="/academy/leadership-and-management" className="h3 d-inline-block">
                    Becoming a Speaker
                </Link>
                <p>Master public speaking, presentation, and communication skills.</p>
                <div className="bg-light p-4">
                    <p className="mb-0">
                    <i className="fa fa-microphone text-primary me-2"></i>
                    Communication & Public Speaking
                    </p>
                </div>
                </div>
            </div>

            {/* Entrepreneurship */}
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="event-item h-100 p-4">
                <img className="img-fluid w-100 mb-4" src="/img/sigmund/sig (8).jpeg" alt="Entrepreneurship" />
                <Link href="/academy/mastermind-programs" className="h3 d-inline-block">
                    Entrepreneurship
                </Link>
                <p>Develop entrepreneurial mindset, business skills, and innovation strategies.</p>
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

    </>
  );
}
