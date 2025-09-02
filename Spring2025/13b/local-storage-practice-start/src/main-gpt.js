import * as storage from "./storage.js";

let items = storage.readFromLocalStorage("items");
if (!Array.isArray(items)) {
  items = [];
  storage.writeToLocalStorage("items", items);
}

// Show items in the <ol>
const showItems = () => {
  document.querySelector("ol").innerHTML = items
    .map(item => `<li>${item}</li>`)
    .join("");
};

showItems();

// Add an item and update localStorage
const addItem = str => {
  if (str.trim().length > 0) {
    items.push(str.trim());
    storage.writeToLocalStorage("items", items);
    showItems();
  }
};

// Add event listener for the Add button
document.querySelector("#btn-add").addEventListener("click", () => {
  const thingText = document.querySelector("#thing-text");
  addItem(thingText.value);
  thingText.value = "";
  thingText.focus();
});

// BONUS: Clear list functionality
document.querySelector("#btn-clear")?.addEventListener("click", () => {
  items = [];
  storage.writeToLocalStorage("items", items);
  showItems();
});
