import React from 'react';

export default ({ day, month, timeStart, timeEnd, place, desc, image}) => {
  return (
    <div class="col-lg-6 col-md-6">
              <div class="single_event position-relative">
                <div class="event_thumb">
                  <img src={image} alt="" />
                </div>
                <div class="event_details">
                  <div class="d-flex mb-4">
                    <div class="date">
                      <span>{day}</span> {month}
                    </div>

                    <div class="time-location">
                      <p>
                        <span class="ti-time mr-2" /> {timeStart} - {timeEnd}
                      </p>
                      <p>
                        <span class="ti-location-pin mr-2" /> {place}
                      </p>
                    </div>
                  </div>
                  <p>
                    {desc}
                  </p>
                  <a href="#" class="primary-btn rounded-0 mt-3">
                    View Details
                  </a>
                </div>
              </div>
            </div>
  )
}