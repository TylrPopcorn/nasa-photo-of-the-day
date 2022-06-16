import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';

import NasaPhoto from "../src/Components/NasaPhoto" // "./Components/NasaPhoto"

const test = {
  date: "2",
  hdurl: "34",
  title: "set",
}

function App() {
  const [data, setData] = useState(test)

  useEffect(function () {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .then(function (value) {
        console.log(value)
        setData(value);
      })
      .catch(function (err) {
        console.log(err)
      })
  }, [])


  return (
    <div className="App">
      {data && <NasaPhoto data={data} />}
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY