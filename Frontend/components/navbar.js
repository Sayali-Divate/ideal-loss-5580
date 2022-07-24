let navbar = ()=>{
    return `<div id="navbar">
    <div id="frstd">
      <img
        id="logo"
        src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2"
        alt="logo"
      />
    </div>
    <div class="sel">
      <select class="para" name="More travel" id="sel">
        More travel

        <option class="para" value="More travels">More travels</option>
      </select>
    </div>

    <div id="secdiv">
      <i id="gol" class="fa-solid fa-globe"></i>
      <button id="para1" class="para">English</button>
      <button id="para2" class="para"><a class="a" href="list.html">List your property</a></button>
      <button id="para3" class="para">Support</button>
      <button id="para4" class="para">Trips</button>
      <i id="bell" class="fa-solid fa-bell"></i>

      <button id="para5" class="para">
        <a id="a" href="./signin.html">Sign in</a>
      </button>
    </div>
  </div>
  `
}

export {navbar};