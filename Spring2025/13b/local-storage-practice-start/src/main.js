import * as storage from "./storage.js"
// When the page loads:
// - load in the `items` array from storage.js and display the current items
// you might want to double-check that you loaded an array ...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// ... and if you didn't, set `items` to an empty array
let items = storage.readFromLocalStorage("items");

if(!Array.isArray(items)){

  // ... and if you didn't, set `items` to an empty array
  storage.writeToLocalStorage("items",[]);

}

// I. declare and implement showItems()
// - this will show the contents of the items array in the <ol>
const showItems = () => {
  // loop though items and stick each array element into an <li>
  let itemsListHtml = "";
  // use array.map()!
  items.map((item)=>{ itemsListHtml+= `<li>${item}</li>` });
  // update the innerHTML of the <ol> already on the page
  document.querySelector("ol").innerHTML = itemsListHtml;
};

showItems();

// II. declare and implement addItem(str)
// - this will add `str` to the `items` array (so long as `str` is length greater than 0)
const addItem = str => {
  //console.log("add " + str);
  items.push(str);
  storage.writeToLocalStorage("items",items);
  showItems();
};


//add event listener for add Item
document.querySelector("#btn-add").addEventListener("click",()=>{

  //get the value from the input
  let thingText = document.querySelector("#thing-text");
  if (thingText.value != ""){
    addItem(thingText.value);
    thingText.value = "";
  }

});



// Also:
// - call `addItem()`` when the button is clicked, and also clear out the <input>
// - and be sure to update .localStorage by calling `writeToLocalStorage("items",items)`



// Got it working? 
// - Add a "Clear List" button that empties the items array
