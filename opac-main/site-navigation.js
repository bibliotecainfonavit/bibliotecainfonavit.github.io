function myFunction() {
    var x = document.getElementById("main-navigation");
    if (x.className === "site-navigation") {
      x.className += " responsive";
    } else {
      x.className = "site-navigation";
    }
  }

     