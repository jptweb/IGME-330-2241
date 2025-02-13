import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// app "globals" and utils
const baseurl = "https://www.amiiboapi.com/api/amiibo/?name=";

const loadXHR = (url, callback) => {
  // set up the connection
  // when the data loads, invoke the callback function and pass it the `xhr` object
  const xhr = new XMLHttpRequest();
  xhr.onload = () => callback(xhr);
  xhr.open('GET',url, true);
  xhr.send();
};

const parseAmiiboResult = xhr => {
  // get the `.responseText` string
  const responseString = xhr.responseText;

  // declare a json variable
  let json = JSON;
 
  // try to parse the string into a json object
  json = json.parse(responseString);
  
  // log out number of results (length of `json.amiibo`)
  console.log(`Number of results=${json.amiibo.length}`);
  
  // loop through `json.amiibo` and log out the character name
};

const searchAmiibo = (name, callback) => {
  loadXHR( `${baseurl}${name}`, callback);
};

// // call searchAmiibo() with "mario" and our callback function
// searchAmiibo("mario", parseAmiiboResult); // DONE

const App = () => {

  console.log("App rendered");

  const [term,setTerm] = useState();

  return <>
    <header>
      <h1>Amiibo Finder</h1>
    </header>
    <hr />
    <main>
      <button>Search</button>
      <label>
        Name: 
        <input value={term} onChange={(e)=>setTerm(e.target.value) }  />
      </label>
    </main>
    <hr />
    <footer>
      <p>&copy; 2023 Ace Coder</p>
    </footer>
  </>;
};

export default App
