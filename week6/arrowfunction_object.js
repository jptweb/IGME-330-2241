let a = new Object();
a.name = "Alice";

a.greet = function() {
  setTimeout(function() {
    console.log(`Hello, my name is ${this.name}`);
  }.bind(this), 1000);  // Bind `this` to ensure it refers to object `a`
};

a.greet();  // Output: Hello, my name is Alice




let a = new Object();
a.name = "Alice";

a.greet = function() {
  setTimeout(() => {
    console.log(`Hello, my name is ${this.name}`);
  }, 1000);  // Arrow function automatically captures `this`
};

let a = new Object();
a.name = "Alice";

let d3 = {
  "name": "Denny",
  sayHello: () => {
    console.log(`Hello - my name is ${this.name}`); 
  },
  job: "Ding-dong Ditcher"
};

// this.name will be undefined
console.log(d3.sayHello()); // Hello - my name is 