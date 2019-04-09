import React from "react";

export default ({
  social,
  name,
  image,
  desc,
  type,
  twitter,
  facebook,
  instagram
}) => {
  return (
    <div class="col-lg-3 col-md-6 col-sm-12 single-trainer">
      <div class="thumb d-flex justify-content-sm-center">
        {image ? <img class="img-fluid" src={image} alt="" /> : null}
      </div>
      <div class="meta-text text-sm-center">
        {name ? <h4>{name}</h4> : null}
        {type ? <p class="designation">{type}</p> : null}
        {desc ? <div class="mb-4">
          <p>
            {desc}
          </p>
        </div> : null}
        {social ? (
          <div class="align-items-center justify-content-center d-flex">
            {facebook ? <a href={facebook}>
              <i class="ti-facebook" />
            </a> : null}
            {twitter ? <a href={twitter}>
              <i class="ti-twitter" />
            </a> : null}
            {instagram ? <a href={instagram}>
              <i class="ti-instagram" />
            </a> : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};
