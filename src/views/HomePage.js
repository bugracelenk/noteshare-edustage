import React, { Component } from "react";
import Header from "components/Header";
import { Banner, EventCard } from "components/HomePage";
import { Title, Feature, Note, Card } from "components/Utils";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getHomePageData } from "actions/homePageActions";

class HomePage extends Component {
  componentWillMount() {
    this.props.getHomePageData();
  }
  // renderEvents() {
  //   this.props.homePageData.events.map(event => (
  //     <EventCard
  //       timeStart={event.startTime}
  //       timeEnd={event.endTime}
  //       day={event.day}
  //       month={event.month}
  //       place={event.place}
  //       desc={event.desc}
  //       image={event.image}
  //     />
  //   ));
  // }

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <section class="feature_area section_gap_top">
          <div class="container">
            <Title title="Awesome Project" desc="helloworld" />
            <div class="row">
              {this.props.homePageData.features.map(feature => {
                return (
                  <Feature
                    title={feature.title}
                    icon={feature.icon}
                    desc={feature.desc}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <div class="popular_courses">
          <div class="container">
            <Title
              title="Our Popular Courses"
              desc="Replenish man have thing gathering lights yielding shall you"
            />
            <div class="row">
              <div class="col-lg-12">
                <div class="owl-carousel active_course">
                  <Note
                    courseType="Design"
                    courseName="Custom Product Design"
                    courseDesc="One make creepeth man bearing their one firmament won't fowl meat over sea"
                    likes="25"
                    downloads="35"
                    profilePic="https://randomuser.me/api/portraits/women/57.jpg"
                    profileName="Cameron"
                  />
                  <Note
                    courseType="Design"
                    courseName="Social Media Network"
                    courseDesc="One make creepeth man bearing their one firmament won't fowl meat over sea"
                    likes="25"
                    downloads="35"
                    profilePic="https://randomuser.me/api/portraits/men/11.jpg"
                    profileName="Cameron"
                  />
                  <Note
                    courseType="Design"
                    courseName="Computer Engineering"
                    courseDesc="One make creepeth man bearing their one firmament won't fowl meat over sea"
                    likes="25"
                    downloads="35"
                    profilePic="https://randomuser.me/api/portraits/women/34.jpg"
                    profileName="Cameron"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section class="trainer_area section_gap_top">
          <div class="container">
            <Title
              title="Our Expert Trainers"
              desc="Replenish man have thing gathering lights yielding shall you"
            />
            <div class="row justify-content-center d-flex align-items-center">
              <Card
                name="Mated Nithan"
                image="https://picsum.photos/250"
                type="Sr. web designer"
                social={true}
                twitter="https://twitter.com/bugraceleenk"
                desc="If you are looking at blank cassettes on the web, you may be very confused at the."
              />
              <Card
                name="David Cameron"
                image="https://picsum.photos/250"
                type="Sr. web designer"
                social={true}
                twitter="https://twitter.com/bugraceleenk"
                desc="If you are looking at blank cassettes on the web, you may be very confused at the."
              />
              <Card
                name="Jain Redmel"
                image="https://picsum.photos/250"
                type="Sr.Faculty Data Science"
                social={true}
                twitter="https://twitter.com/bugraceleenk"
                desc="If you are looking at blank cassettes on the web, you may be very confused at the."
              />
              <Card
                name="Nathan Macken"
                image="https://picsum.photos/250"
                type="Sr.Web "
                social={true}
                twitter="https://twitter.com/bugraceleenk"
                desc="If you are looking at blank cassettes on the web, you may be very confused at the."
              />
            </div>
          </div>
        </section>

        <div class="events_area">
          <div class="container">
            <Title
              title="Upcoming Events"
              desc="Replenish man have thing gathering lights yielding shall you"
              color="#fff"
            />
            <div class="row">
              {this.props.homePageData.events.map(event => {
                return (
                  <EventCard
                    timeStart={event.startTime}
                    timeEnd={event.endTime}
                    day={event.day}
                    month={event.month}
                    place={event.place}
                    desc={event.desc}
                    image={event.image}
                  />
                );
              })}

              <div class="col-lg-12">
                <div class="text-center pt-lg-5 pt-3">
                  <a href="http://localhost:300" class="event-link">
                    View All Event <img src="img/next.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  getHomePageData: PropTypes.func
};

function mapStateToProps(state) {
  return { homePageData: state.homePage };
}

export default connect(
  mapStateToProps,
  { getHomePageData }
)(HomePage);
