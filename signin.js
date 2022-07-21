let LOGIN = async () => {
  let logindata = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  if (logindata.username == "") {
    document.getElementById("use").innerHTML = "Email is required !";
    document.getElementById("use").style.color = "red";
    return false;
  }
  if (logindata.password == "") {
    document.getElementById("passi").innerHTML = "Password is required !";
    document.getElementById("passi").style.color = "red";
    return false;
  }
  logindata = JSON.stringify(logindata);

  let url = "https://masai-api-mocker.herokuapp.com/auth/login";

  let res = await fetch(url, {
    method: "POST",

    body: logindata,

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);
  getprofile(data, logindata);

  if(data.error==true){
    alert('Invalid login creadentials')
    window.location.href="signin.html"
  } else if(data.error==false){
    alert("Login Successful")
    window.location.href="navbar.html"
  }
};

// getprofile part

async function getprofile({ token }, { username }) {
  let url = `https://masai-api-mocker.herokuapp.com/user/${username}`;
  let res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
  });
  let data = await res.json();
  console.log(data);
}
//function cs
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
  let name = document.getElementById("username");
  let pass = document.getElementById("password");

  if (name.value.length > 0 && pass.value.length > 0) {
    document.getElementById("btn").removeAttribute("disabled");
    document.getElementById("btn");
  } else {
    document.getElementById("btn").setAttribute("disabled", "disabled");
    document.getElementById("btn").style.backgroundColor = "#3662d8";
  }
};
