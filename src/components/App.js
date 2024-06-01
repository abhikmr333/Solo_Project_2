import React from "react";
import Header from "./Header.js";
import destinations from "../data.js";
import DestinationCard from "./DestinationCard.js";

export default function App() {
    //creating array of components by mapping over the data in data.js file to display it without hard-coding manually
    const destinationCards = destinations.map((destination) => {
        return (
            <DestinationCard
                //passing props prop as object and key prop
                key={destination.id}
                props={destination}
            />
        );
    });

    return (
        <>
            <Header />
            {/* rendering array of components */}
            <main>{destinationCards}</main>
        </>
    );
}
