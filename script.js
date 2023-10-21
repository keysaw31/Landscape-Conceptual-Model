function toggleMenu(x) {
   x.classList.toggle("change");
   var menuDropdown = document.getElementById("menuDropdown");
   menuDropdown.style.display = (menuDropdown.style.display === "block") ? "none" : "block";
}


function toggleMenu() {
   var menuDropdown = document.getElementById("menuDropdown");
   menuDropdown.classList.toggle("active");
}
