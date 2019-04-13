import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="banner_content text-center">
                  <p className="text-uppercase">
                    Best online education service In the world
                  </p>
                  <h2 className="text-uppercase mt-4 mb-5">
                    One Step Ahead This Season
                  </h2>
                  <div>
                    <a href="#" className="primary-btn2 mb-3 mb-sm-0">
                      learn more
                    </a>
                    <a href="#" className="primary-btn ml-sm-3 ml-0">
                      see course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;
