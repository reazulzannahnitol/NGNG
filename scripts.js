// Function to open the mobile nav
function openNav() {
    document.querySelector('.navbar-mobile').style.right = '0';
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.navbar-mobile').classList.add('open');
}

// Function to close the mobile nav
function closeNav() {
    document.querySelector('.navbar-mobile').style.right = '-250px';
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.navbar-mobile').classList.remove('open');
}

// Function to toggle submenu visibility and prevent navbar from closing
function toggleMobileSubMenu(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const submenu = event.target.nextElementSibling;

    // Toggle the submenu display
    if (submenu.style.display === "none" || submenu.style.display === "") {
        submenu.style.display = "block"; // Show submenu
    } else {
        submenu.style.display = "none"; // Hide submenu
    }
}

// Function to close the mobile nav when clicking on a normal link
document.querySelectorAll('.navbar-mobile a').forEach(link => {
    link.addEventListener('click', function(event) {
        if (!this.classList.contains('dropdown-toggle')) {
            closeNav(); // Close the navbar only if it's not a dropdown toggle link
        }
    });
});




// JavaScript to toggle call options
const phoneIcon = document.getElementById('phoneIcon');
const callOptions = document.getElementById('callOptions');

phoneIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of anchor tag
    
    // Toggle the display of call options
    if (callOptions.style.display === 'none' || !callOptions.style.display) {
        callOptions.style.display = 'flex'; // Show options
    } else {
        callOptions.style.display = 'none'; // Hide options
    }
});

// Hide options when clicking outside
document.addEventListener('click', function(event) {
    if (!phoneIcon.contains(event.target) && !callOptions.contains(event.target)) {
        callOptions.style.display = 'none'; // Hide options if clicking outside
    }
});





