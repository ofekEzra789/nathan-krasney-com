import React, { useState, useEffect } from "react";
import "./EventsSlide.css";

const EventsSlide = () => {
  const [EventsSildeArray, setEventsSildeArray] = useState("");
  const eventsSlideJSON = "./data/eventSlide.json";

  const handleSetEventSlideArray = (dataFetch) => {
    setEventsSildeArray(dataFetch);
  };

  useEffect(() => {
    fetch(eventsSlideJSON)
      .then((response) => response.json())
      .then((data) => handleSetEventSlideArray(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="EventsSlide">
      <div className="EventsSlide-container">
        {EventsSildeArray ? EventsSildeArray.map((eventS, index) => (
          <div key={index} className="EventsSlide-text">
            <h4 className="EventsSlide-name">{eventS.eventName}</h4>
            <p className="EventsSlide-date">{eventS.date}</p>
          </div>
        )) : 'Loading...'}
      </div>
    </div>
  );
};

export default EventsSlide;
