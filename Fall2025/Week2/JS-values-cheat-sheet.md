# IGME 110 - JS Values & Falsy Values Lesson Plan

## Game Plan: Teaching JS Values & Falsy Values

### **Opening Hook (5 minutes)**
Start with the **"Falsy Memory Trick"**:
- "There are only **7 falsy values** in JavaScript - it's much easier to remember what's falsy than what's truthy!"
- "Everything else is truthy, so memorize these 7 and you're golden."

### **Core Content Structure (15-20 minutes)**

#### **1. The "Magnificent 7" Falsy Values**
Present them as a memorable list (use the interactive example):
```javascript
const falsyValues = [false, 0, -0, undefined, null, NaN, "", '', ``, 0n];
```

**Memory Device:** "**F**alse **Z**ero **U**ndefined **N**ull **N**aN **E**mpty **B**igInt" 
- **F**alse
- **Z**ero (0, -0)  
- **U**ndefined
- **N**ull
- **N**aN
- **E**mpty strings ("", '', ``)
- **B**igInt zero (0n)

#### **2. Interactive Demo**
Run this live in the console:
```javascript
const values = [false, 0, -0, undefined, null, NaN, "", '', ``, 0n, true, "Ace Coder", 0.00000000000001, "0"];
for (let value of values) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}
```

#### **3. Common Gotchas & Student Traps**
**Address these misconceptions:**
- `"0"` (string) is **truthy** (not falsy like the number 0)
- `"false"` (string) is **truthy** 
- Empty arrays `[]` and empty objects `{}` are **truthy**
- Negative numbers (except -0) are **truthy**

#### **4. Practical Applications**
Connect to real coding scenarios:
```javascript
// Input validation
let userName = document.querySelector("#name").value.trim();
if (userName) {
    // truthy - user entered something
    displayWelcome(userName);
} else {
    // falsy - show error
    showError("Please enter your name");
}
```

#### **5. Connect to Equality Operators**
Bridge to the `==` vs `===` content:
- Show how falsy values behave with equality operators
- Reinforce why `===` is preferred

### **Interactive Activities (10-15 minutes)**

#### **Quick Quiz Game**
Present values and have students call out "truthy" or "falsy":
- `42` (truthy)
- `"0"` (truthy - gotcha!)
- `[]` (truthy - another gotcha!)
- `NaN` (falsy)
- `undefined` (falsy)
- `"hello"` (truthy)
- `0` (falsy)
- `null` (falsy)

#### **Practical Exercise**
Have them modify a simple function to handle falsy input values:
```javascript
function greetUser(name) {
    // Student task: handle falsy name values
    name = name || "Guest"; // Show this solution
    return `Hello, ${name}!`;
}

// Test cases to try:
console.log(greetUser("Alice"));     // "Hello, Alice!"
console.log(greetUser(""));          // "Hello, Guest!"
console.log(greetUser(null));        // "Hello, Guest!"
console.log(greetUser(undefined));   // "Hello, Guest!"
```

### **Advanced Example (if time permits)**
Show multiple ways to handle default values:
```javascript
// Different techniques for default values
function greetUser2(name) {
    // Method 1: Logical OR
    name = name || "Guest";
    
    // Method 2: Ternary operator
    name = name ? name : "Guest";
    
    // Method 3: Check length after trimming
    name = name && name.trim().length ? name.trim() : "Guest";
    
    return `Hello, ${name}!`;
}
```

### **Wrap-up & Connection to Course (5 minutes)**
- **Why this matters:** "When you're building interactive media applications, you'll constantly check user input, API responses, and DOM elements - understanding truthy/falsy helps you write robust code."
- **Preview:** "Next we'll look at template strings for cleaner string building, and comparison operators for reliable conditionals."
- **Real-world connection:** "This is foundational for form validation, API data handling, and preventing errors in your web applications."

### **Assessment Check**
Quick exit ticket: "Name 3 falsy values and explain why `"0"` is truthy but `0` is falsy."

**Sample Answer:** 
- 3 falsy values: `false`, `0`, `null` (or any combination of the 7)
- `"0"` is a non-empty string, so it's truthy; `0` is the number zero, which is falsy

### **Additional Teaching Tips:**
1. **Use the console extensively** - let students see the behavior live
2. **Connect to their Greeter project** - show how input validation uses these concepts  
3. **Emphasize the practical memory trick** - "Remember the 7, assume everything else is truthy"
4. **Address the `NaN` quirks** early since it often confuses students
5. **Use physical gestures** - thumbs up for truthy, thumbs down for falsy during the quiz game

### **Extension Activities** (for faster students)
1. Research `Boolean()` constructor and how it relates to truthy/falsy
2. Explore how falsy values behave in logical operators (`&&`, `||`, `!`)
3. Investigate why `-0` exists and when you might encounter it

### **Common Student Questions to Prepare For:**
- "Why is an empty array truthy?" (Objects are always truthy unless they're `null`)
- "What's the difference between `null` and `undefined`?" (Brief explanation or defer to later lesson)
- "Why does JavaScript have so many falsy values?" (Historical reasons and type coercion flexibility)

---

## References
- [MDN - Falsy Values](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
- [MDN - Truthy Values](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- Course Notes: `more-js-values.md`
