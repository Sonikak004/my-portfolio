 // hamburger menu open
 function hambar() {
    document.querySelector("#mobile").style.display = "block";
  }

// hamburger menu close

  function close() {
    document.getElementById('mobile').style.display = 'none';
  }
  document.getElementById('close-menu').addEventListener('click', close);