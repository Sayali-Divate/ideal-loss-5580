let LOGIN = async () => {
  let logindata = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  let url = "https://masai-api-mocker.herokuapp.com/auth/login";

  let res = await fetch(url, {
    method: "POST",

    body: JSON.stringify(logindata),

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();
  console.log(data);

   let  username= document.getElementById("username").value;

  if(data.token){
    alert("Login successful");
    window.location.href = "./";
    getprofile(username, token);
  }
  else{
    alert("Invalid login credentials");
  }  
};

// getprofile part

let  getprofile=async (username, token)=>{
        console.log(username, token);git

        let profile_url=`https://masai-api-mocker.herokuapp.com/user/${username}`

        let response= await fetch(profile_url,{
            method:"GET",
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        let data= await response.json();
        // console.log(data);
        localStorage.setItem("user", JSON.stringify(data));
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
