import React from "react";

const EventCard = ({ name, date, location, link }) => {
      return (
        <div className="event-card">
            <h2>{name}</h2>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Location:</strong> {location}</p>
            <button onClick = {() => window.open(link, "_blank", "noopener, noreferrer")}>More Info</button>
        </div>
      );
};

export default EventCard;