"use client";

import React from "react";

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="container-fluid p-0 wow fadeIn"
        data-wow-delay="0.1s"
        style={{ background: "#f1f3f6" }}
      >
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-1 text-uppercase mb-3">
                Sigmund Company Limited
              </h1>
              <p className="fs-5 mb-4">
                Empowering communities through education, innovation, and
                sustainable development. Discover our flagship projects and join
                us in shaping a brighter future.
              </p>
              <a className="btn btn-primary py-3 px-4 me-3" href="#projects">
                Our Projects
              </a>
              <a className="btn btn-secondary py-3 px-4" href="#contact">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 text-center">
              <img
                className="img-fluid rounded"
                src="/img/sigmund/sig (3).jpeg"
                alt="Sigmund Company"
                style={{ maxHeight: 400 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              <img
                className="img-fluid w-100 rounded"
                src="/img/about.jpg"
                alt="About Sigmund"
              />
            </div>
            <div className="col-lg-6">
              <p className="section-title bg-white text-start text-primary pe-3">
                About Us
              </p>
              <h1 className="display-6 mb-4">Who We Are</h1>
              <p className="mb-4">
                Sigmund Company Limited is a forward-thinking organization
                dedicated to transforming lives through impactful projects in
                education, leadership, and community development. Our mission is
                to nurture talent, inspire innovation, and create opportunities
                for all.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Innovative
                  educational programs
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Community
                  empowerment
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Leadership
                  and skills development
                </li>
                <li className="mb-2">
                  <i className="fa fa-check text-primary me-2"></i>Sustainable
                  impact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Sigmund Academic Calendars */}
      <div className="container-fluid py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "620px" }}
          >
            <p className="section-title bg-white text-primary px-3">
              Academic Information
            </p>
            <h1 className="display-6 mb-3">Calendars & Services</h1>
            <p className="text-muted">
              Official academic schedules and institutional services for
              Sigmund.
            </p>
          </div>

          {/* Tabs */}
          <ul
            className="nav nav-pills justify-content-center mb-4"
            role="tablist"
          >
            <li className="nav-item">
              <button
                className="nav-link active"
                data-bs-toggle="pill"
                data-bs-target="#trust-school"
              >
                Sigmund Trust School
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#academy"
              >
                Sigmund Academy
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                data-bs-toggle="pill"
                data-bs-target="#services"
              >
                Other Services
              </button>
            </li>
          </ul>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Trust School */}
            <div className="tab-pane fade show active" id="trust-school">
              <div className="accordion" id="trustAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#trust-terms"
                    >
                      <i className="fa fa-calendar-alt me-2 text-primary"></i>
                      Term Dates
                    </button>
                  </h2>
                  <div
                    id="trust-terms"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Term 1: Jan 13 – Mar 20</li>
                        <li>Term 2: Apr 7 – Jun 12</li>
                        <li>Term 3: Jul 1 – Sep 18</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#trust-exams"
                    >
                      <i className="fa fa-file-alt me-2 text-primary"></i>
                      Examinations
                    </button>
                  </h2>
                  <div id="trust-exams" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Mid-term: Feb 24 – Feb 28</li>
                        <li>End-term: Jun 8 – Jun 12</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#trust-holidays"
                    >
                      <i className="fa fa-umbrella-beach me-2 text-primary"></i>
                      Holidays
                    </button>
                  </h2>
                  <div
                    id="trust-holidays"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Easter: Mar 21 – Apr 6</li>
                        <li>Winter Break: Jun 13 – Jul 1</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#trust-events"
                    >
                      <i className="fa fa-bullhorn me-2 text-primary"></i>
                      Events
                    </button>
                  </h2>
                  <div
                    id="trust-events"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Sports Day: Apr 15</li>
                        <li>Cultural Festival: Aug 20</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Academy */}
            <div className="tab-pane fade" id="academy">
              <div className="accordion" id="academyAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#academy-terms"
                    >
                      <i className="fa fa-calendar-alt me-2 text-primary"></i>
                      Term Dates
                    </button>
                  </h2>
                  <div
                    id="academy-terms"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Term 1: Jan 10 – Mar 17</li>
                        <li>Term 2: Apr 3 – Jun 9</li>
                        <li>Term 3: Jun 24 – Sep 11</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#academy-exams"
                    >
                      <i className="fa fa-file-alt me-2 text-primary"></i>
                      Examinations
                    </button>
                  </h2>
                  <div
                    id="academy-exams"
                    className="accordion-collapse collapse"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Mid-term: Feb 17 – Feb 21</li>
                        <li>End-term: Jun 1 – Jun 5</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Services */}
            <div className="tab-pane fade" id="services">
              <div className="accordion" id="servicesAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#consultancy"
                    >
                      <i className="fa fa-handshake me-2 text-primary"></i>
                      Consultancy
                    </button>
                  </h2>
                  <div
                    id="consultancy"
                    className="accordion-collapse collapse show"
                  >
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Parent Meetings: Jan 20</li>
                        <li>Progress Reports: Mar 1, May 1, Jul 1</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#library"
                    >
                      <i className="fa fa-book me-2 text-primary"></i>
                      Library
                    </button>
                  </h2>
                  <div id="library" className="accordion-collapse collapse">
                    <div className="accordion-body">
                      <ul className="mb-0">
                        <li>Hours: Mon–Fri, 08:00 – 17:00</li>
                        <li>Book Club: Last Friday of every month</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <p className="section-title bg-white text-center text-primary px-3">
              Our Projects
            </p>
            <h1 className="display-6 mb-4">Flagship Initiatives</h1>
            <p>
              Explore our diverse projects designed to empower, educate, and
              inspire.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="event-item h-100 p-4 bg-white rounded shadow-sm">
                <img
                  className="img-fluid w-100 mb-4 rounded"
                  src="/img/carousel-1.jpg"
                  alt="Trust School"
                />
                <h3 className="mb-3">Sigmund Trust School</h3>
                <p>
                  Providing quality, value-based education from early childhood
                  to upper primary. Safe, innovative, and inclusive learning
                  environment for future leaders.
                </p>
                <a className="btn btn-primary btn-sm mt-2" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.2s">
              <div className="event-item h-100 p-4 bg-white rounded shadow-sm">
                <img
                  className="img-fluid w-100 mb-4 rounded"
                  src="/img/sigmund/sig (2).jpeg"
                  alt="Academy"
                />
                <h3 className="mb-3">Sigmund Academy</h3>
                <p>
                  Empowering youth and professionals through leadership,
                  entrepreneurship, and innovation programs. Join our mastermind
                  and certification courses.
                </p>
                <a className="btn btn-primary btn-sm mt-2" href="#">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="event-item h-100 p-4 bg-white rounded shadow-sm">
                <img
                  className="img-fluid w-100 mb-4 rounded"
                  src="/img/sigmund/sig (5).jpeg"
                  alt="Community"
                />
                <h3 className="mb-3">Community Initiatives</h3>
                <p>
                  Driving positive change through outreach, sustainability, and
                  skills development projects for the wider community.
                </p>
                <a className="btn btn-primary btn-sm mt-2" href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 600 }}>
            <p className="section-title bg-white text-center text-primary px-3">
              Our Values
            </p>
            <h1 className="display-6 mb-4">What Drives Us</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-primary p-4 text-center rounded h-100">
                <h3 className="text-dark mb-3">Excellence</h3>
                <p className="text-dark">
                  We pursue the highest standards in all our projects and
                  partnerships.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-secondary p-4 text-center rounded h-100">
                <h3 className="text-white mb-3">Innovation</h3>
                <p className="text-white">
                  We embrace creativity and forward-thinking solutions for
                  lasting impact.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-primary p-4 text-center rounded h-100">
                <h3 className="text-dark mb-3">Empowerment</h3>
                <p className="text-dark">
                  We believe in unlocking potential and creating opportunities
                  for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA / Contact Section */}
      <div id="contact" className="container-fluid bg-primary py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h1 className="display-6 mb-4 text-dark">Partner With Us</h1>
              <p className="mb-3 text-dark">
                Ready to make a difference? Connect with Sigmund Company Limited
                to learn more about our projects, partnerships, and
                opportunities.
              </p>
              <a
                className="btn btn-secondary py-3 px-4 me-3"
                href="mailto:info@sigmund.com"
              >
                Email Us
              </a>
              <a className="btn btn-outline-dark py-3 px-4" href="#projects">
                See Our Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
