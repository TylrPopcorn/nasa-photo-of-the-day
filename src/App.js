import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import styled, { keyframes } from 'styled-components'

import NasaPhoto from "../src/Components/NasaPhoto" // "./Components/NasaPhoto"

const test = {
  date: "2",
  hdurl: "https://cdn.discordapp.com/attachments/805958742457057311/980553923553288222/unknown.png?size=4096",
  title: "THIS IS MY TITLE",
}

const AppStyle = styled.div`
  height: 100vh;



  transition: all 0.2s ease-in-out;
  &:hover{
    background-color: grey;
  }

`


//TEST EXAMPLE:
const StyledFriend = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-borrom: 2px solid white;


   transition: all 0.2s ease-in-out;
  &:hover{
    background-color: ${pr => pr.theme.secondaryColor}
    color: ${pr => pr.theme.primaryColor}
  }
`

function App() {
  const [data, setData] = useState(test)

  /*
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
   */

  return (
    <AppStyle className="App">
      {data && <NasaPhoto data={data} />}
    </AppStyle>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY