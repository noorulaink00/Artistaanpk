import React from "react";
import "../css/Services.css";

const Services = ({ servicesData }) => {
  return (
    <div>
      {/*
      <section className="services-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {servicesData.slice(0, 3).map((service) => (
                <div className="service-card" key={service.id}>
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-sm-4">
                      <div className="service-icon">
                        <img src={service.icon} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8">
                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              {servicesData.slice(3, 6).map((service) => (
                <div className="service-card" key={service.id}>
                  <div className="row align-items-center">
                    <div className="col-lg-3 col-md-3 col-sm-4">
                      <div className="service-icon">
                        <img src={service.icon} alt="" />
                      </div>
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-8">
                      <div className="service-content">
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
              </section>*/}

      <div>
        <section className="services-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                {servicesData.slice(0, 3).map((service) => (
                  <div className="service-card" key={service.id}>
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-3 col-sm-4">
                        <div className="service-icon">
                          <img src={service.icon} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-8">
                        <div className="service-content">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-description">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>  
                  </div>
                ))}
              </div>
              <div className="col-lg-6">
                {servicesData.slice(3, 6).map((service) => (
                  <div className="service-card" key={service.id}>
                    <div className="row align-items-center">
                      <div className="col-lg-3 col-md-3 col-sm-4">
                        <div className="service-icon">
                          <img src={service.icon} alt="" />
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-8">
                        <div className="service-content">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-description">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
