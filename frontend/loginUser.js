
/*let userList = document.querySelector(".userList");
let newUser = document.querySelector(".newUser");
let newUserPassword = document.querySelector(".newUserPassword");
let saveUserBtn = document.querySelector(".saveUserBtn");
let loginUsername = document.querySelector(".loginUsername");
let loginPassword = document.querySelector(".loginPassword");
let loginUserBtn = document.querySelector(".loginUserBtn");
let userGreeting = document.querySelector(".userGreeting");*/

fetch("http://localhost:3000/api/users")
.then(res => res.json())
.then(data => {
    console.log(data);
});

function createLoginDesign() {
    const loginForm = document.createElement("form");
    const loginHeading = document.createElement("h1");
    const createUserName = document.createElement("input");
    const createPassword = document.createElement("input");
    const createEmail = document.createElement("input");
    const createUserBtn = document.createElement("button");

    loginHeading.innerHTML= "Sign in";
    createUserName.placeholder = "Username";
    createPassword.placeholder = "Password";
    createPassword.type = "password";
    createEmail.placeholder = "Email"
    createUserBtn.innerHTML = "Sign in";

    createUserName.classList.add("create-username");
    createPassword.classList.add("create-password");
    createEmail.classList.add("create-email");

    document.body.appendChild(loginForm)
    loginForm.appendChild(loginHeading);
    loginForm.appendChild(createUserName);
    loginForm.appendChild(createPassword);
    loginForm.appendChild(createEmail);
    loginForm.appendChild(createUserBtn);

    createUserBtn.addEventListener("click", loginUser);
}

createLoginDesign();


function loginUser(e) {
  e.preventDefault();
  const inputUsername = document.querySelector(".create-username");
  const inputPassword = document.querySelector(".create-password");
  const inputEmail = document.querySelector(".create-email");

  let loginUser = {
    username: inputUsername.value,
    password: inputPassword.value,
    email: inputEmail.value
  };

  console.log("loginUser", loginUser);

  fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser)
    })
    .then(res => res.json())
    .then(result => {
        if (result) {
            console.log("result", result);
            userGreeting.innerText = `Good morning ${result.username}`;
            localStorage.setItem("username", result.username);
            localStorage.setItem("id", result.id);
        } else {
            userGreeting.innerText = "Failed login attempt, please check your username and password!"
        }
    })

    loginUsername.innerHTML = "";
    loginPassword.innerHTML = "";
}