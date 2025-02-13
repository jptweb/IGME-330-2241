import { useState } from "react";
import './App.css'

// app "globals" and utils
const baseurl = "https://www.amiiboapi.com/api/amiibo/?name=";



const loadXHR = (url, callback) => {
  // set up the connection

  /*
  A bit longer of a method but more like we maybe did earlier in year?
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  // when the data loads, invoke the callback function and pass it the `xhr` object
  xhr.onload = function() {
    if (xhr.status === 200) {
      //console.log(xhr);
      callback(xhr);
    } else {
      console.error('Error reading the shape data');
    }
  };

  xhr.send();
  */

  //A more verbose method:
  const xhr = new XMLHttpRequest();
  xhr.onload = () => callback(xhr);
  xhr.open("GET", url);
  xhr.send();


};

//NOTE: This needs to be moved out and modified!
// const searchAmiibo = (name, callback) => {
//   loadXHR( `${baseurl}${name}`, callback);
// };

// const parseAmiiboResult = xhr => {
  
//   // get the `.responseText` string
//   const dataString = xhr.responseText

//   // declare a json variable
//   let json = JSON;
 
//   // try to parse the string into a json object
//   json = json.parse(dataString); 

//   // log out number of results (length of `json.amiibo`)
//   console.log(`Number of results=${json.amiibo.length}`);

  
//   // loop through `json.amiibo` and log out the character name
//   const results = json.amiibo;

//   // loop through `json.amiibo` and log out the character name
//   for (let obj of json.amiibo) {
//     console.log(obj.character);
//   }
//   // results.map(amiibo => (
//   //   console.log(amiibo.name)
//   // ));
  
// };

// call searchAmiibo() with "mario" and our callback function
//searchAmiibo("mario", parseAmiiboResult); // DONE

const App = () => {

  const [term,setTerm] = useState("");

  const [results,setResults] = useState([]);

  const searchAmiibo = (name, callback) => {
    loadXHR( `${baseurl}${name}`, callback);
  };
  
  const parseAmiiboResult = xhr => {
    
    // get the `.responseText` string
    const dataString = xhr.responseText
  
    // declare a json variable
    let json = JSON;
   
    // try to parse the string into a json object
    json = json.parse(dataString); 
  
    // log out number of results (length of `json.amiibo`)
    console.log(`Number of results=${json.amiibo.length}`);
  
    //We took out the for loop and replaced it with this instead!
    setResults(json.amiibo);
    
  };

  return <>
    <header>
      <h1>Amiibo Finder</h1>
    </header>
    <hr />
    <main>
      <button onClick={()=>searchAmiibo(term,parseAmiiboResult)}>Search</button>
      <label>
        Name: 
        <input value={term} onChange={(e)=>setTerm(e.target.value)} />
      </label>
    </main>
    <hr />
    {results.map(amiibo => (
        <span key={amiibo.head + amiibo.tail} style={{color:"green"}}>
          <h4>{amiibo.name}</h4>
          <img 
            width="100" 
            alt={amiibo.character}
            src={amiibo.image}
          />
        </span>
      ))}
    <footer>
      <p>&copy; 2023 Ace Coder</p>
    </footer>
  </>;
};

export default App;