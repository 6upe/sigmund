// src/app/page.tsx

import ApplicationForm from "@/components/ApplicationForm";
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
      <ApplicationForm/>
      {/* Admissions End */}

    </>
  );
}
