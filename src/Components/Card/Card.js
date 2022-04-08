import React from "react";

import "./style.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--left">
        <div
          style={{ backgroundImage: `url(${props.item.imageUrl})` }}
          className="left--img"
        />
      </div>
      <div className="card--right">
        <div className="card--content">
          <div className="maps">
            <img src="./images/map.svg" alt="map marker" />
            <p>{props.item.location}</p>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className="title">
            <h2>{props.item.title}</h2>
          </div>
          <div className="date">
            {props.item.startDate} - {props.item.endDate}{" "}
          </div>
          <div className="description">
            <p>{props.item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
