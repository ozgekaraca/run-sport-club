import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="text-center">
          <h3 className="section-subheading">
            NOT JUST IN SPORTS, WHERE YOU COME TO YOURSELF.
          </h3>
        </div>

        <div className="texts">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="service-item">
                <h6 className="my-3">Healthy Lifestyle</h6>
                <p className="text-muted">
                  Join the club and start living well.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <h6 className="my-3">Extensive Exercise Library</h6>
                <p className="text-muted">
                  Join the club and start living well.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-item">
                <h6 className="my-3">Training Programs</h6>
                <p className="text-muted">
                  Join the club and start living well.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
