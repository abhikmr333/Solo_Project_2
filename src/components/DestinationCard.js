import React from "react";

export default function DestinationCard() {
    return (
        <>
            <section className="destination-card">
                <img
                    className="destination-card--image"
                    src="/images/mount_fuji.png"
                />
                <div className="destination-card--info">
                    <span className="destination-card--location">
                        <img
                            className="destination-card--ping"
                            src="/images/ping.png"
                        />
                        JAPAN
                    </span>
                    <span>
                        <a
                            className="destination-card--link"
                            href="somewhere.com"
                        >
                            Somewhere.com
                        </a>
                    </span>
                    <p className="destination-card--name">Mount Fuji</p>
                    <p className="destination-card--date">
                        12 Jan,2021 - 24 Jan, 2021
                    </p>
                    <p className="destination-card--description">
                        Mount fuji is blah blah...
                    </p>
                </div>
            </section>
            <hr />
        </>
    );
}
