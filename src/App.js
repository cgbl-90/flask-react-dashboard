import axios from "axios";
import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [source, setSource] = useState(String);
  const [country, setCountry] = useState(String);
  const [results, setResults] = useState({});

  function sendRequest(event) {
    event.preventDefault();
    console.log(source, country);
    axios.post(PATH, (source = { source }), (country = { country })).then(
      (response) => {
        setResults(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  function updateCountry(event) {
    setCountry(event.target.value);
  }

  function updateSource(event) {
    setSource(event.target.value);
  }

  return (
    <div className="App">
      <div className="col">
        <h2>FILTERS</h2>
        <form>
          <label for="media">Choose the source:</label>
          <select
            name="media"
            id="media-list"
            defaultValue="google-trends"
            onChange={updateSource}
          >
            <option value="google-trends">Google Trends</option>
            <option value="google-news">Google News</option>
            <option value="instagram">Instragam</option>
            <option value="twitter">Twitter</option>
            <option value="facebook">Facebook</option>
            <option value="tiktok">Tiktok</option>
          </select>
          <label for="countries">Country:</label>
          <select
            name="countries"
            id="countries-list"
            defaultValue="au"
            onChange={updateCountry}
          >
            <option value="au">Australia</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States</option>
            <option value="nz">New Zealand</option>
          </select>
          <button className="btn" onClick={sendRequest}>
            SELECT
          </button>
        </form>
      </div>
      <div className="col">
        <PrintResults country={results} />
      </div>
    </div>
  );
}

export default App;
