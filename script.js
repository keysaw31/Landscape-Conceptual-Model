function toggleMenu(x) {
   x.classList.toggle("change");
   var menuDropdown = document.getElementById("menuDropdown");
   menuDropdown.style.display = (menuDropdown.style.display === "block") ? "none" : "block";
}


    // navigate to the main content after animation
    setTimeout(function() {
        window.location.href = '#main-content'; 
    }, 3000); // Adjust the delay (in milliseconds) as needed


   
    