import React from "react";

export default ({ icon, title, desc }) => {
  return (
    <div class="col-lg-4 col-md-6">
      <div class="single_feature">
        <div class="icon">
          <span class={icon} />
        </div>
        <div class="desc">
          <h4 class="mt-3 mb-2">{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};
