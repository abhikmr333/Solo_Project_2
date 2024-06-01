import React from "react";

//destructuring the received props object
export default function DestinationCard({ props }) {
    return (
        <section className="destination-card">
            <img
                className="destination-card--image"
                src={`/images/${props.destinationImg}`}
            />
            <div className="destination-card--info">
                <span className="destination-card--location">
                    <img
                        className="destination-card--ping"
                        src="/images/ping.png"
                    />
                    {props.location}
                </span>
                <span>
                    <a className="destination-card--link" href={props.link}>
                        View on Google Maps
                    </a>
                </span>
                <p className="destination-card--name">
                    {props.destinationName}
                </p>
                <p className="destination-card--date">
                    {props.startDate} - {props.endDate}
                </p>
                <p className="destination-card--description">
                    {props.description}
                </p>
            </div>
        </section>
    );
}
