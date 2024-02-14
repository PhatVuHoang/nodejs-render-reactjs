import React from "react";

const Content = () => {
  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        {/* Page Features*/}
        <div className="row gx-lg-5">
          {Array.from({ length: 6 }, (_, i) => {
            return (
              <div className="col-lg-6 col-xxl-4 mb-5" key={i}>
                <div className="card bg-light border-0 h-100">
                  <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
                      <i className="bi bi-collection" />
                    </div>
                    <h2 className="fs-4 fw-bold">Fresh new layout {i}</h2>
                    <p className="mb-0">
                      With Bootstrap 5, we've created a fresh new layout for
                      this template!
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
