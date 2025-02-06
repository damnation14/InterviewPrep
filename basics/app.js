let counter = 0;

const counterDiv = document.querySelector(".counter");

const headerDiv = document.querySelector(".header");

const increaseButton = document
  .querySelector(".increase")
  .addEventListener("click", () => {
    counter++;
    counterDiv.innerText = counter;
  });

const resetButton = document
  .querySelector(".reset")
  .addEventListener("click", () => {
    counter = 0;
    counterDiv.innerText = counter;
  });

const changeColorButton = document
  .querySelector(".changeColor")
  .addEventListener("click", () => {
    console.log("hehe");
    headerDiv.classList.add("headerColor");
  });

const sample3 = document
  .querySelector(".sample3")
  .addEventListener("click", (e) => {
    console.log("hehe3");
    e.stopPropagation();
  });

const sample2 = document
  .querySelector(".sample2")
  .addEventListener("click", (e) => {
    console.log("hehe2");
    e.stopPropagation();
  });

const sample1 = document
  .querySelector(".sample1")
  .addEventListener("click", () => {
    console.log("hehe1");
  });

const fetchInfo = (url) =>
  new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const success = true; // Simulate success/failure
      if (success) {
        console.log(resolve);
        resolve("Operation completed successfully"); // Resolve with a value
      } else {
        reject(new Error("Operation failed")); // Reject with an error
      }
    }, 2000); // Simulate a 2-second delay
  });

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayAge() {
    console.log(`${this.name} says ${this.age}`);
  }
}

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayMeow() {
    console.log(`${this.name} says meow`);
  }
}

class Dog extends Animal {
  constructor(name, age, lives) {
    super(name, age);
    this.lives = lives;
  }
  sayBark() {
    console.log(` ${this.name} says bark`);
  }
}
