"use client";

import React from "react";

export default function LandingPage() {
  return (
    <>
      <style>{`
        .sig-hero-bg {
          background: linear-gradient(120deg, #e0e7ff 0%, #f1f3f6 100%);
          position: relative;
        }
        .sig-hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(13, 110, 253, 0.08);
          z-index: 1;
        }
        .sig-hero-content {
          position: relative;
          z-index: 2;
        }
        .sig-project-card {
          transition: transform 0.2s, box-shadow 0.2s;
          border: none;
        }
        .sig-project-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px rgba(13,110,253,0.10);
        }
        .sig-value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #0d6efd;
        }
        .sig-section-title {
          letter-spacing: 0.08em;
          font-weight: 700;
          text-transform: uppercase;
        }
      `}</style>
      {/* Hero Section */}
      <div className="container-fluid p-0 sig-hero-bg wow fadeIn" data-wow-delay="0.1s" style={{minHeight: 520, display: 'flex', alignItems: 'center'}}>
        <div className="sig-hero-overlay"></div>
        <div className="container py-5 sig-hero-content">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h1 className="display-1 text-uppercase mb-3">Sigmund Company Limited</h1>
              <p className="fs-5 mb-4">
                Empowering communities through education, innovation, and sustainable development. Discover our flagship projects and join us in shaping a brighter future.
              </p>
              <a className="btn btn-primary py-3 px-4 me-3" href="#projects">Our Projects</a>
              <a className="btn btn-secondary py-3 px-4" href="#contact">Contact Us</a>
            </div>
            <div className="col-lg-6 text-center">
              <img className="img-fluid rounded shadow" src="/img/sigmund/sig (3).jpeg" alt="Sigmund Company" style={{maxHeight: 400, border: '6px solid #fff'}} />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              <img className="img-fluid w-100 rounded shadow" src="/img/about.jpg" alt="About Sigmund" />
            </div>
            <div className="col-lg-6">
              <p className="sig-section-title text-primary mb-2">About Us</p>
              <h1 className="display-6 mb-4">Who We Are</h1>
              <p className="mb-4">
                Sigmund Company Limited is a forward-thinking organization dedicated to transforming lives through impactful projects in education, leadership, and community development. Our mission is to nurture talent, inspire innovation, and create opportunities for all.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Innovative educational programs</li>
                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Community empowerment</li>
                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Leadership and skills development</li>
                <li className="mb-2"><i className="fa fa-check text-primary me-2"></i>Sustainable impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div id="projects" className="container-fluid py-5 bg-light">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
            <p className="sig-section-title text-primary mb-2">Our Projects</p>
            <h1 className="display-6 mb-4">Flagship Initiatives</h1>
            <p>Explore our diverse projects designed to empower, educate, and inspire.</p>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
              <div className="event-item h-100 p-4 bg-white rounded shadow-sm sig-project-card">
                <img className="img-fluid w-100 mb-4 rounded" src="/img/carousel-1.jpg" alt="Trust School" />
                <h3 className="mb-3">Sigmund Trust School</h3>
                <p>Providing quality, value-based education from early childhood to upper primary. Safe, innovative, and inclusive learning environment for future leaders.</p>
                <a className="btn btn-primary btn-sm mt-2" href="#">Learn More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.2s">
              <div className="event-item h-100 p-4 bg-white rounded shadow-sm sig-project-card">
                <img className="img-fluid w-100 mb-4 rounded" src="/img/sigmund/sig (2).jpeg" alt="Academy" />
                <h3 className="mb-3">Sigmund Academy</h3>
                <p>Empowering youth and professionals through leadership, entrepreneurship, and innovation programs. Join our mastermind and certification courses.</p>
                <a className="btn btn-primary btn-sm mt-2" href="#">Learn More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
              <div className="event-item h-100 p-4 bg-white rounded shadow-sm sig-project-card">
                <img className="img-fluid w-100 mb-4 rounded" src="/img/sigmund/sig (5).jpeg" alt="Community" />
                <h3 className="mb-3">Community Initiatives</h3>
                <p>Driving positive change through outreach, sustainability, and skills development projects for the wider community.</p>
                <a className="btn btn-primary btn-sm mt-2" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{maxWidth: 600}}>
            <p className="sig-section-title text-primary mb-2">Our Values</p>
            <h1 className="display-6 mb-4">What Drives Us</h1>
          </div>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-primary p-4 rounded h-100 d-flex flex-column align-items-center justify-content-center">
                <span className="sig-value-icon"><i className="fa fa-star"></i></span>
                <h3 className="text-dark mb-3">Excellence</h3>
                <p className="text-dark">We pursue the highest standards in all our projects and partnerships.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-secondary p-4 rounded h-100 d-flex flex-column align-items-center justify-content-center">
                <span className="sig-value-icon"><i className="fa fa-lightbulb"></i></span>
                <h3 className="text-white mb-3">Innovation</h3>
                <p className="text-white">We embrace creativity and forward-thinking solutions for lasting impact.</p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="bg-primary p-4 rounded h-100 d-flex flex-column align-items-center justify-content-center">
                <span className="sig-value-icon"><i className="fa fa-users"></i></span>
                <h3 className="text-dark mb-3">Empowerment</h3>
                <p className="text-dark">We believe in unlocking potential and creating opportunities for all.</p>
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
                Ready to make a difference? Connect with Sigmund Company Limited to learn more about our projects, partnerships, and opportunities.
              </p>
              <a className="btn btn-secondary py-3 px-4 me-3" href="mailto:info@sigmund.com">Email Us</a>
              <a className="btn btn-outline-dark py-3 px-4" href="#projects">See Our Projects</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
