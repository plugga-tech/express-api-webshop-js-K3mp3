fetch("http://localhost:3000/api/users")
.then(res => res.json())
.then(data => {
    console.log(data);
});

let loggedinUser = localStorage.getItem("username");
if(loggedinUser) {
    console.log(`Good morning ${loggedinUser}`);
}

function createLoginDesign() {
    const loginForm = document.createElement("form");
    const loginHeading = document.createElement("h1");
    const createPassword = document.createElement("input");
    const createEmail = document.createElement("input");
    const createUserBtn = document.createElement("button");

    loginHeading.innerHTML= "Sign in";
    createPassword.placeholder = "Password";
    createPassword.type = "password";
    createEmail.placeholder = "Email"
    createUserBtn.innerHTML = "Sign in";

    createPassword.classList.add("login-password");
    createEmail.classList.add("login-email");

    document.body.appendChild(loginForm)
    loginForm.appendChild(loginHeading);
    loginForm.appendChild(createEmail);
    loginForm.appendChild(createPassword);
    loginForm.appendChild(createUserBtn);

    createUserBtn.addEventListener("click", loginUser);
}

createLoginDesign();


function loginUser(e) {
  e.preventDefault();
  const inputPassword = document.querySelector(".login-password");
  const inputEmail = document.querySelector(".login-email");


  let loginUser = {
    email: inputEmail.value,
    password: inputPassword.value,
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
            alert("hej");
            console.log("result", result);
            //userGreeting.innerText = `Good morning ${result.username}`;
            localStorage.setItem("username", result.username);
            localStorage.setItem("id", result.id);

            console.log("username", result.username, "id", result.id);

            showProducts(loginUser);
        } else {
            console.log("Failed login attempt, please check your username and password!");
        }
    })

    username.innerHTML = "";
    password.innerHTML = "";
    email.innerHTML = "";
}

function showProducts(loginUser) {
    console.log("loginUser", loginUser);
}

