// const createUser = () => {
//     fetch("https://600d-77-239-14-36.ngrok-free.app", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         email: "salcceee.dela11@gmail.com",
//         password: "murdzo11982",
//         firstName: "Salih",
//         lastName: "Delic",
//       }),
//     })
//       .then((response) => {
//         response.json().then((data) => {
//           console.log(data);
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// createUser();

// document.getElementsByClassName("register-button")
// addEventListener("click",createUser)

function logRespons(response) {
  response.json().then((data) => {
    console.log(data);
  });
}

function logError(error) {
  console.log(error);
}

//   fetch('https://jsonplaceholder.typicode.com/users/1')
//    .then(logRespons)
//    .catch(logError)

//   fetch('https://jsonplaceholder.typicode.com/users',{
//     method: "POST",
//     headers:{
//       "Concent-Type":"application/json",
//     },
//     body: JSON.stringify({
//       name: "John Doe",
//       email: "john.fo@example.com",
//     })
//   })
//    .then(logRespons)
//    .catch(logError);

//   fetch('https://jsonplaceholder.typicode.com/users/1',{
//     method: "PATCH",
//     headers:{
//       "Concent-Type":"application/json",
//     },
//     body: JSON.stringify({
//       name: "Bakir",
//       email: "bake.fo@example.com",
//     })
//   })
//    .then(logRespons)
//    .catch(logError)
//    .finally();

//    fetch('https://jsonplaceholder.typicode.com/users/1')
//    .then(logRespons)
//    .catch(logError)

//   fetch('https://jsonplaceholder.typicode.com/users/1',{
//     method: "DELETE",
//   })
//    .then(logRespons)
//    .catch(logError);

// fetch("https://jsonplaceholder.typicode.com/users")

// async function getUsers() {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     } finally {
//       console.log("Finally");
//     }
//   }

//   getUsers();

function logFinally() {
  console.log("Hello world, from finally");
}

// fetch("https://600d-77-239-14-36.ngrok-free.app/users",{
//     method:"POST",
//     headers:{
//         "Concent-Type":"application/json",
//     },
//     body: JSON.stringify({
//         firstName: "Bake",
//         lastName: "Hadzic",
//         email: "bakir@test.com",
//         password: "123456",
//     }),
// })
//  .then(logRespons)
//  .catch(logError)
//  .finally(logFinally);

// async function registerUser() {
//   try {
//     const response = await fetch(
//       "https://600d-77-239-14-36.ngrok-free.app/users",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           firstName: "Johnn",
//           lastName: "Joshh",
//           email: "bake@test.com",
//           password: 1234556,
//         }),
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Finally");
//   }
// }
const registerButton = document.getElementsByClassName("register-button")[0];

registerButton?.addEventListener("click", () => {
  registerUser();
});

const loginButton = document.getElementsByClassName("login-button")[0];

async function registerUser() {
  try {
    const response = await fetch(
      "https://0c6e-77-239-14-36.ngrok-free.app/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "bakir.hadzic1@gmail.com",
          password: "654321",
          firstName: "bakir",
          lastName: "hadzic",
          username: "elbake10",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
}

async function loginUser() {
  try {
    const response = await fetch(
      "https://0c6e-77-239-14-36.ngrok-free.app/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "bakir.hadzic1@gmail.com",
          password: "654321",
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    localStorage.setItem("token", data.user.token);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
}

async function getUsers() {
  const token = localStorage.getItem("token");
  console.log(token);
  try {
    const response = await fetch(
      "https://0c6e-77-239-14-36.ngrok-free.app/users",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();
    console.log(data);
    const userList = document.getElementById("list-users");
    userList.innerHTML = "";
    data.forEach((user) => {
      const listOfUsers = document.createElement("p");
      listOfUsers.textContent = `Id: ${user.id} - ${user.username} - ${user.email}`;
      userList.appendChild(listOfUsers);
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally");
  }
}

loginButton?.addEventListener("click", getUsers);

// class User {
//   constructor(name, age, score) {
//     this.name = name;
//     this.age = age;
//     this.score = score;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if(value.lenght <3){
//         console.log("Name must be at least 3 carata")
//         return;
//     }
//     this._name = value
//   }
//   get age(){
//     return this._age
//   }

//   set age(age){
//     if(age <18){
//         console.log("You must be 18")
//         return;
//     }
//     this._age= age
//   }

//   get score(){
//     return this._score;
//   }

//   set score(scor){

//   }

//   getInfo() {
//     return ` ${this.name} ${this.age}`;
//   }
// }

// const user = new User("Jhon", 30);
// const userInfo = user.getInfo();
// console.log(userInfo);

// user.city = "Sarajevo"
// user.score

// class Animal{
//     constructor(name){
//         this.speed = 0;
//         this.name  =name;
//     }

//     run(speed){
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}`);
//     }

//     stop(){
//         console.log(`${this.name} hides!`);

//     }
// };

// class Rabbit extends Animal{
//     hide() {
//         console.log(`${this.name} hides`);
//     }
//     stop(){
//         console.log(`${this.name} stands still but  `);
//         super.stop()
//     }
// }

// const rabbit = new Rabbit ("White rabbit")


// // Car Class
// // Task: Create a class named Car with properties like make, model, and year.
// // Method: Add a method called displayInfo() that prints the car's details.
// // Practice: Create an instance of Car and call displayInfo().

// class Car{
//     constructor(brand, model, year){
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }

//     getInfo(){
//         return `${this.brand} ${this.model} ${this.year}`
//     }
// }

// const myCar = new Car("BMW","X5",2024)
// const carInfo = myCar.getInfo();

// // Dog Class
// // Task: Create a class named Dog with properties such as name and breed.
// // Method: Add a method bark() that prints a simple message like "Woof! Woof!".
// // Practice: Instantiate a Dog and call the bark() method.

// class Dog{
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }
//     bark(){
//         console.log(`${this.name} Woof! Woof!`);
//     }
//     getInfo(){
//         console.log(`${this.name},${this.breed}`);
//     }
// }
// const myDog = new Dog("Klinton","")
// myDog.getInfo();

// // Calculator Class
// // Task: Create a class called Calculator with methods for basic operations.
// // Methods: Implement methods add(a, b), subtract(a, b), multiply(a, b), and divide(a, b) 
// // that each return the result of the operation.
// // Practice: Create an instance of Calculator and test each method with a couple of numbers.

// class Calculator {
//     add(a, b) {
//         return a + b;
//     }

//     subtract(a, b) {
//         return a - b;
//     }

//     multiply(a, b) {
//         return a * b;
//     }

//     divide(a, b) {
//         if (b === 0) {
//             return "Devision by zero not allowed";
//         }
//         return a / b;
//     }
// }

// const myCalculator = new Calculator();

// console.log(myCalculator.add(10, 5));       
// console.log(myCalculator.subtract(10, 5));  
// console.log(myCalculator.multiply(10, 5));  
// console.log(myCalculator.divide(10, 5));   
// console.log(myCalculator.divide(10, 0));    


// // Person and Student Classes
// // Task: First, create a Person class with properties name and age and a method introduce() 
// // that prints a greeting like "Hi, I'm [name] and I'm [age] years old."
// // Extension: Create a Student class that extends Person. Add an extra property such as grade and a new method study() that prints something like "[name] is studying."
// // Practice: Instantiate a Student object and call both the introduce() and study() methods.

// class Person {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`Hi,I'm ${this.name} and I'm ${this.age} years old.`)
//     }
// }
// class Student{
//     constructor(grade, study){
//         this.grade = grade
//     }
//     study(){
//         console.log(`${this.name} is studuing`)
//     }
// }
// const Student = new Student ("Bakir", 15, "9th grade")
// Student.introduce()
// Student.study()

// // Book Class
// // Task: Create a class called Book with properties title and author.
// // Method: Add a method describe() that prints the book's title and author.
// // Practice: Instantiate a Book and call describe().

// class Book {
//     constructor(title, author) {
//         this.title = title;
//         this.author = author;
//     }

//     describe() {
//         console.log(`"${this.title}" by ${this.author}`);
//     }
// }

// const myBook = new Book("Bzv", "Ivo Andric");


// myBook.describe();  