/*Adjust Navbar Depending on Screen Size*/
function adjustNavBar() {
    var x = document.getElementById("globalNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
