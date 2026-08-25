/*Adjust Navbar Depending on Screen Size*/
function adjustNavBar() {
    var x = document.getElementById("global-navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
