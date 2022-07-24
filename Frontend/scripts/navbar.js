let arr=localStorage.getItem("sign")
let append=document.getElementById("a")
  
append.innerText=arr

   if(arr==null) {
    append.innerText="Sign in"
  }