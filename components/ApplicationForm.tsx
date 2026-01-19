"use client";

import React, { useState } from "react";

export default function ApplicationForm() {
  const [applicantType, setApplicantType] = useState("student");
  const [form, setForm] = useState({
    studentName: "",
    email: "",
    phone: "",
    programme: "",
    guardianName: "",
    guardianEmail: "",
    guardianPhone: "",
    studentAge: "",
    studentGender: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div id="admissions" className="container-fluid donate py-5">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-7 donate-text bg-light py-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column justify-content-center h-100 p-5 wow fadeIn" data-wow-delay="0.3s">
              <h1 className="display-6 mb-4">Join Sigmund Trust School</h1>
              <p className="fs-5 mb-3">
                We welcome learners from diverse backgrounds who are eager to learn, grow, and lead.
              </p>
              <h4 className="mb-3">Why Choose Us?</h4>
              <p className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>Safe, child-friendly environment
              </p>
              <p className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>Strong academic performance
              </p>
              <p className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>Experienced, caring teachers
              </p>
              <p className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>Value-based education
              </p>
              <p className="mb-2">
                <i className="fa fa-check text-primary me-2"></i>Affordable and flexible fee structures
              </p>
              <p className="mb-0">
                <i className="fa fa-check text-primary me-2"></i>Balanced academics & extracurriculars
              </p>
            </div>
          </div>
          <div className="col-lg-5 donate-form bg-primary py-5 text-center wow fadeIn" data-wow-delay="0.5s">
            <div className="h-100 p-5">
              <h3 className="text-dark mb-4">Admissions Inquiry</h3>
              {/* Toggle for applicant type */}
              <div className="mb-4 d-flex justify-content-center gap-4">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="applicantType"
                    id="studentRadio"
                    value="student"
                    checked={applicantType === "student"}
                    onChange={() => setApplicantType("student")}
                  />
                  <label className="form-check-label" htmlFor="studentRadio">
                    I am the Student
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="applicantType"
                    id="guardianRadio"
                    value="guardian"
                    checked={applicantType === "guardian"}
                    onChange={() => setApplicantType("guardian")}
                  />
                  <label className="form-check-label" htmlFor="guardianRadio">
                    I am a Guardian
                  </label>
                </div>
              </div>
              <form>
                <div className="row g-3">
                  {applicantType === "student" ? (
                    <>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="studentName"
                            name="studentName"
                            placeholder="Student Name"
                            value={form.studentName}
                            onChange={handleChange}
                          />
                          <label htmlFor="studentName">Student Name</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email">Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                          />
                          <label htmlFor="phone">Phone Number</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="programme"
                            name="programme"
                            value={form.programme}
                            onChange={handleChange}
                          >
                            <option value="">Select Programme</option>
                            <option value="project1">Dummy Project 1</option>
                            <option value="project2">Dummy Project 2</option>
                          </select>
                          <label htmlFor="programme">Programme</label>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="guardianName"
                            name="guardianName"
                            placeholder="Guardian Name"
                            value={form.guardianName}
                            onChange={handleChange}
                          />
                          <label htmlFor="guardianName">Name of Guardian</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="guardianEmail"
                            name="guardianEmail"
                            placeholder="Guardian Email Address"
                            value={form.guardianEmail}
                            onChange={handleChange}
                          />
                          <label htmlFor="guardianEmail">Guardian Email Address</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="tel"
                            className="form-control"
                            id="guardianPhone"
                            name="guardianPhone"
                            placeholder="Guardian Phone Number"
                            value={form.guardianPhone}
                            onChange={handleChange}
                          />
                          <label htmlFor="guardianPhone">Guardian Phone Number</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="studentName"
                            name="studentName"
                            placeholder="Student Name"
                            value={form.studentName}
                            onChange={handleChange}
                          />
                          <label htmlFor="studentName">Student Name</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="studentAge"
                            name="studentAge"
                            value={form.studentAge}
                            onChange={handleChange}
                          >
                            <option value="">Select Student Age</option>
                            {Array.from({ length: 15 }, (_, i) => 4 + i).map((age) => (
                              <option key={age} value={age}>{age}</option>
                            ))}
                          </select>
                          <label htmlFor="studentAge">Student Age</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="studentGender"
                            name="studentGender"
                            value={form.studentGender}
                            onChange={handleChange}
                          >
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                          <label htmlFor="studentGender">Student Gender</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select
                            className="form-select"
                            id="programme"
                            name="programme"
                            value={form.programme}
                            onChange={handleChange}
                          >
                            <option value="">Select Programme</option>
                            <option value="pre-school">Pre-School</option>
                            <option value="lower-primary">Lower Primary</option>
                            <option value="upper-primary">Upper Primary</option>
                          </select>
                          <label htmlFor="programme">Programme</label>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="col-12">
                    <button className="btn btn-secondary py-3 w-100" type="submit">
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-dark small mt-3 mb-0">
                Admissions Steps: Fill Application → Assessment → Enrollment
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}