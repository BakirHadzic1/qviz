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


// window.addEventListener("DOMContentLoaded", () => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     const loginBtn = document.querySelector(".login-button");
//     const registerBtn = document.querySelector(".register-button");

//     if (loginBtn) loginBtn.style.display = "none";
//     if (registerBtn) registerBtn.style.display = "none";
//   }
// });

// const logoutBtn = document.querySelector(".odajvi-se");

// if (token && odajvise) {
//   logoutBtn.style.display = "inline-block";

//   logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("token");
//     window.location.href = "login.html"; 
//   });
// }

function logRespons(response) {
  response.json().then((data) => {
    console.log(data);
  });
}

function logError(error) {
  console.log(error);
}

function logFinally() {
  console.log("Hello world, from finally");
}


