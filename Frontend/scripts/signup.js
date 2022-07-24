let myfun = () => {
  let x = document.getElementById("password");
  let y = document.getElementById("hide2");
  let z = document.getElementById("hide1");

  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
};

let isempty = () => {
  let name = document.getElementById("email");
  let pass = document.getElementById("password");

  if (name.value.length > 0 && pass.value.length > 0) {
    document.getElementById("btn").removeAttribute("disabled");
    document.getElementById("btn");
  } else {
    document.getElementById("btn").setAttribute("disabled", "disabled");
    document.getElementById("btn").style.backgroundColor = "#3662d8";
  }
};

let SIGN = async () => {
  let signdata = {
    username: document.getElementById("username").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("decription").value,
  };
  if (signdata.name == "") {
    document.getElementById("nam").innerHTML = "Name is required !";
    document.getElementById("nam").style.color = "red";
    return false;
  }

  if (signdata.username == "") {
    document.getElementById("unam").innerHTML = "UserName is required !";
    document.getElementById("unam").style.color = "red";
    return false;
  }
 
  if (signdata.mobile == "") {
    document.getElementById("mbnam").innerHTML = "Mobile Number is required !";
    document.getElementById("mbnam").style.color = "red";
    return false;
  }
  if (signdata.description == "") {
    document.getElementById("dnam").innerHTML = "Description is required !";
    document.getElementById("dnam").style.color = "red";
    return false;
  }
  if (signdata.email == "") {
    document.getElementById("enam").innerHTML = "Email is required !";
    document.getElementById("enam").style.color = "red";
    return false;
  }
  if (signdata.password == "") {
    document.getElementById("pnam").innerHTML = "Password is required !";
    document.getElementById("pnam").style.color = "red";
    return false;
  }
  signdata = JSON.stringify(signdata);

  let signup_api = "https://masai-api-mocker.herokuapp.com/auth/register";

  let res = await fetch(signup_api, {
    method: "POST",

    body: signdata,

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);

  if (data.error == true) {
    alert("Already");
  }
  if (data.error == false) {
    window.location.href = "signin.html";
  }
};