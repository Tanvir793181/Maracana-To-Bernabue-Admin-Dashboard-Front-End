
// Show loader with minimum 3 seconds display
function showLoader() {
    const loader = document.getElementById('loader');
    loader.style.display = 'flex';
    setTimeout(() => { loader.style.opacity = '1' }, 10);
}

// Hide loader after minimum 3 seconds
function hideLoader() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => { loader.style.display = 'none' }, 500);
    }, 100); // Minimum 3 seconds
}

// Initial load control
document.addEventListener('DOMContentLoaded', () => {
    showLoader();
    // Replace this with your actual load completion event
    setTimeout(hideLoader, 100); 
});

// For routing transitions (example)
document.querySelectorAll('[data-route]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        showLoader();
        setTimeout(() => {
            window.location.href = e.target.dataset.route;
        }, 100);
    });
});




// Add toggle functionality
document.querySelector('.sidebar-toggler').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('active');
});

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    const toggler = document.querySelector('.sidebar-toggler');
    
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(event.target) && !toggler.contains(event.target)) {
            sidebar.classList.remove('active');
        }
    }
});




document.addEventListener('DOMContentLoaded', function() {
    // Animate progress rings
    setTimeout(() => {
        const circles = document.querySelectorAll('.progress-ring__fill');
        circles.forEach(circle => {
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const percentage = parseInt(circle.parentElement.querySelector('.percentage').textContent);
            
            circle.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.style.strokeDashoffset = circumference - (percentage / 100 * circumference);
        });
    }, 500);
});


