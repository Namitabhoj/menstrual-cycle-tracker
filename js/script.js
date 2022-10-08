function MobileNavBar() {
    var x = document.getElementById("navbar__menu__id");
    if (x.className === "navbar__menu") {
        x.className += "_responsive";
        console.log(x.className);
    } else {
        x.className = "navbar__menu";
    }
}

// function getVal() {
//     var x = document.getElementById("date_picker").value;
//     console.log(x);
//   }
