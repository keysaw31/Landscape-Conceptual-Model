function toggleMenu(x) {
   x.classList.toggle("change");
   var menuDropdown = document.getElementById("menuDropdown");
   menuDropdown.style.display = (menuDropdown.style.display === "block") ? "none" : "block";
}


    // navigate to the main content after animation
    setTimeout(function() {
        window.location.href = '#main-content'; 
    }, 3000); // Adjust the delay (in milliseconds) as needed


    // Handling submission
    document.querySelector('.contact-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents the form from actually submitting
    
        var formData = new FormData(this);
    
        fetch('process_form.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            if (data === 'success') {
                alert('Message sent successfully!');
                // You can add more actions for successful submission here
            } else {
                alert('Error sending message. Please try again later.');
                // You can add more actions for error here
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
    