
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

    createUserBtn.addEventListener("click", createUser);
}

createLoginDesign();


function createUser(e) {
  e.preventDefault();
  const inputUsername = document.querySelector(".create-username");
  const inputPassword = document.querySelector(".create-password");
  const inputEmail = document.querySelector(".create-email");

  let username = {username: inputUsername.value};
  let password = {password: inputPassword.value};
  let email = {email: inputEmail.value};

  let createUser = {
    username: username,
    password: password,
    email: email
  }

  console.log(username, password, email);

  createUserInServer(createUser);
}


function createUserInServer(createUser) {
  console.log("createUser", createUser);
  JSON.stringify(createUser);
  console.log("stringify", createUser);
  console.log(createUser.username);
    fetch("http://localhost:3000/api/users/add", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(createUser),
        })
        .then(res => res.json())
        .then(createUser => {
            console.log(createUser);
        })
        .catch(console.log("fel"));
}