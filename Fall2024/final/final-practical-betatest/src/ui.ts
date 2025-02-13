interface Creature {
  // provide types for picture, name, breed, and location (all strings)
  picture:string;
  name:string;
  breed:string;
  location:string;
}


// Updates the DOM to display the fetched data
// - data: An array of objects containing creature details
export function renderResults(data:Creature) {
    const resultsContainer = document.querySelector("#results");
    resultsContainer.innerHTML = ""; // Clear existing results

    let columnContainer = document.createElement("div");
    columnContainer.className = "columns";
  
    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card column is-one-quarter";
  
      // Add content to the card
      card.innerHTML = `
      <div class="card-image">
        <figure class="image is-square">
          <img src="${item.picture}" alt="${item.name}">
        </figure>
      </div>

      <div class="media-content">
        <p class="title is-4">${item.name}</p>
        <p class="subtitle is-6"><strong>Breed:</strong> ${item.breed}</p>
      </div>

      <div class="content">
        <p><strong>Location:</strong> ${item.location}</p>
      </div>
      `;
  
        // ADD THE LINE OF CODE HERE THAT WILL ADD THE CARD 
        // TO END OF THE RESULTS CONTAINER
        columnContainer.appendChild(card);
        

      
    }); 

    resultsContainer.appendChild(columnContainer);
  }
  
  // Displays an error message on the page
  // - message: The error message to show
  export function showError(message) {
    console.log("show error");
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden"); // Make the error visible
  }
  
  // Clears any visible error message from the page
  export function clearError() {
    console.log("clear error");
    const errorMessage = document.querySelector("#errorMessage");
    errorMessage.textContent = "";
    errorMessage.classList.add("hidden"); // Hide the error
  }
  