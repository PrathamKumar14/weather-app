import React, { useState } from "react";
import Weather from "./components/Weather";

function App() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (city === "" || country === "") {
      alert("Oops!! Something is wrong");
    }

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => data);

    setWeather({
      data: data,
    });
    setCity("");
    setCountry("");
  }

  return (
    <div className="wrapper">
      {weather.data !== undefined ? (
        <Weather key={weather.data} data={weather.data} />
      ) : (
        <form onSubmit={handleFormSubmit}>
          <div className="label-input-cn">
            <label>Country</label>
            <input
              required
              type="text"
              placeholder="India"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </div>
          <div className="label-input-cn">
            <label>City</label>
            <input
              required
              type="text"
              placeholder="Delhi"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
          <div className="label-input-cn">
            <button type="submit">Go</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
