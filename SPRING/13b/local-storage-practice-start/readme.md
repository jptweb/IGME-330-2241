# 🧪 LocalStorage Practice – 25 Minute JS Lesson Plan

This guided coding lesson teaches students how to persist a list of items using `localStorage`, working only inside the `src/main.js` file. The rest of the setup (HTML, `storage.js`) is provided.

---

### 🏁 Setup

Students are working in a folder with:

```
local-storage-practice-start/
├── storage-list.html
└── src/
    ├── main.js          ← YOU ONLY EDIT THIS FILE
    └── storage.js       ← Helper functions for localStorage
```

Key HTML elements already on the page:

- `<input id="thing-text" />`
- `<button id="btn-add">Add</button>`
- `<button id="btn-clear">Clear List</button>`
- `<ol></ol>` to display items

---

## 🧑‍🏫 Instructor Live Coding (15–20 min)

> This version focuses on **adding data first**, so there’s something to display and debug against before printing the list.

---

### ✅ Step 1: Load or Initialize Items Array

In `main.js`, start with this:

```js
import * as storage from "./storage.js";

let items = storage.readFromLocalStorage("items");
if (!Array.isArray(items)) {
  items = [];
  storage.writeToLocalStorage("items", items);
}
```

---

### ✅ Step 2: Add Item Functionality

Next, let’s implement the logic to add an item:

```js
const addItem = str => {
  if (str.trim().length > 0) {
    items.push(str.trim());
    storage.writeToLocalStorage("items", items);
  }
};
```

Now wire up the event listener for the Add button:

```js
document.querySelector("#btn-add").addEventListener("click", () => {
  const input = document.querySelector("#thing-text");
  addItem(input.value);
  input.value = "";
  input.focus();
});
```

---

### ✅ Step 3: Show Items on the Page

Now that we have data in the array, we can safely display it:

```js
const showItems = () => {
  document.querySelector("ol").innerHTML = items
    .map(item => `<li>${item}</li>`)
    .join("");
};

showItems(); // Show items on initial load
```

---

### ✅ Step 4: Clear List Button

Allow students to reset the entire list:

```js
document.querySelector("#btn-clear").addEventListener("click", () => {
  items = [];
  storage.writeToLocalStorage("items", items);
  showItems();
});
```

---

## ⏸️ Stopping Point (Around 20–25 Min)

At this point, the app:

- ✅ Adds new items to the list
- ✅ Saves items to `localStorage`
- ✅ Loads previously saved items on refresh
- ✅ Can clear the list

---

### 🧪 Student Challenge / Follow-Up Task

Have students continue from here with enhancements like:

- Adding a delete (🗑️) button next to each list item
- Toggling a "done" state with a checkmark
- Styling the list with CSS or Bootstrap
- Showing timestamps
- Sorting alphabetically

> Encourage experimentation and help debug any issues during this phase.

---

### ✅ Summary

Students learned how to:

- Read/write from `localStorage`
- Dynamically update the DOM
- Persist data across refreshes
- Break logic into manageable functions

Only `main.js` was edited — a realistic scenario where frontend logic is separated from data access (via `storage.js`).

---
