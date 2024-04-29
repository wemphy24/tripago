import { React, useState, useEffect, useCallback } from "react";

const [trips, setTrips] = useState([]);
const [url, setUrl] = useState("http://localhost:3000/trips");

const fetchTrips = useCallback(async () => {
  const response = await fetch(url);
  const json = await response.json();
  setTrips(json);
}, [url]);

useEffect(() => {
  fetchTrips();
}, [fetchTrips]);

export default function TripList() {
  return (
    <div className="trip-list">
      <h2>TripList</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h3>{trip.name}</h3>
            <h2>{trip.price}</h2>
          </li>
        ))}
      </ul>
      <div className="filter">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          European Trip
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trip
        </button>
      </div>
    </div>
  );
}
