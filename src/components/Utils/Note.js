import React from "react";

export default ({
  courseName,
  courseType,
  courseDesc,
  likes,
  downloads,
  profileName,
  profilePic
}) => {
  return (
    <div className="single_course">
      <div className="course_head">
        <img className="img-fluid" src="img/courses/c1.jpg" alt="" />
      </div>
      <div className="course_content">
        <span className="tag mb-4 d-inline-block">{courseType}</span>
        <h4 className="mb-3">
          <a href="course-details.html">{courseName}</a>
        </h4>
        <p>
          {courseDesc}
        </p>
        <div className="course_meta d-flex justify-content-lg-between align-items-lg-center flex-lg-row flex-column mt-4">
          <div className="authr_meta">
            <img className="rounded-avatar little-avatar" src={profilePic} alt="" />
            <span className="d-inline-block ml-2">{profileName}</span>
          </div>
          <div className="mt-lg-0 mt-3">
            <span className="meta_info mr-4">
              <a href="#">
                {" "}
                <i className="ti-user mr-2" />
                {downloads}{" "}
              </a>
            </span>
            <span className="meta_info">
              <a href="#">
                {" "}
                <i className="ti-heart mr-2" />
                {likes}{" "}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
