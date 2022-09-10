import React from "react";
import Photo from "../images/experience.webp";
export default function Why() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <img src={Photo} style={{ width: "100%" }} />
        </div>
        <div className="col-lg-6">
          <h2>Why Choose NIDMM?</h2>
          <p>
            NIDMM is one of the most entrusted institutes for internet
            marketing. Students got trained from us and are now successful in
            the field of digital marketing.
          </p>
          <ul>
            <li>
              <b>Our Curriculum</b>
              <p>
                We provide an interface with Social Media Optimization (SMO),
                Google adwords, and digital marketing coaching in India.
              </p>
            </li>
            <li>
              <b>Training &amp; Culture</b>
              <p>
                Our courses are pre-planned and executed in a way that can
                provide the most to our students.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-3">
          <div
            className="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              className="nav-link active"
              id="v-pills-home-tab"
              data-toggle="pill"
              href="#v-pills-home"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              Something New For You
            </a>
            <a
              className="nav-link"
              id="v-pills-profile-tab"
              data-toggle="pill"
              href="#v-pills-profile"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              Reasonable Course Cost
            </a>
            <a
              className="nav-link"
              id="v-pills-messages-tab"
              data-toggle="pill"
              href="#v-pills-messages"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              Placement Assured
            </a>
            <a
              className="nav-link"
              id="v-pills-settings-tab"
              data-toggle="pill"
              href="#v-pills-settings"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              Job Responsibility
            </a>
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
            >
              <h2 style={{ paddingLeft: "32px" }}>
                We Educate With All You Need
              </h2>
              <ul>
                <li style={{ display: "inline-block", paddingRight: "100px" }}>
                  <h2>New Format Of Contents</h2>
                  <br />
                  <p>Text articles, embedded applications, and quizzes.</p>
                </li>
                <li style={{ display: "inline-block" }}>
                  <h2>Advanced Guidelines</h2>
                  <p>2022 digital marketing concepts are taught in class.</p>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <h2 style={{ paddingLeft: "32px" }}>
                We Educate With All You Need
              </h2>
              <ul>
                <li style={{ display: "inline-block", paddingRight: "100px" }}>
                  <h2>New Format Of Contents</h2>
                  <br />
                  <p>Text articles, embedded applications, and quizzes.</p>
                </li>
                <li style={{ display: "inline-block" }}>
                  <h2>Advanced Guidelines</h2>
                  <p>2022 digital marketing concepts are taught in class.</p>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
            >
              <h2 style={{ paddingLeft: "32px" }}>
                We Educate With All You Need
              </h2>
              <ul>
                <li style={{ display: "inline-block", paddingRight: "100px" }}>
                  <h2>New Format Of Contents</h2>
                  <br />
                  <p>Text articles, embedded applications, and quizzes.</p>
                </li>
                <li style={{ display: "inline-block" }}>
                  <h2>Advanced Guidelines</h2>
                  <p>2022 digital marketing concepts are taught in class.</p>
                </li>
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
            >
              <h2 style={{ paddingLeft: "32px" }}>
                We Educate With All You Need
              </h2>
              <ul>
                <li style={{ display: "inline-block", paddingRight: "100px" }}>
                  <h2>New Format Of Contents</h2>
                  <br />
                  <p>Text articles, embedded applications, and quizzes.</p>
                </li>
                <li style={{ display: "inline-block" }}>
                  <h2>Advanced Guidelines</h2>
                  <p>2022 digital marketing concepts are taught in class.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
