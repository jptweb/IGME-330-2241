// Fetches data from the Adoptable Creatures API
// - type: The type of creature to fetch (e.g., "cats", "dogs", "dragons")
// - callback: Function to run with the fetched data if successful
// - errorCallback: Function to run with an error message if the request fails
export function getData(type, callback, errorCallback) {
    const API_URL = "https://people.rit.edu/anwigm/330/practical/api.php";
    console.log("GET DATA");
    
    let adjusted_api_url = `${API_URL}?type=${type}`
    fetch(adjusted_api_url) // api for the get request
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => errorCallback("Error fetching data from the server."));
    
  
  }
  