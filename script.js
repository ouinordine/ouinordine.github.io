document.addEventListener('DOMContentLoaded', function() {
    // Update current year in footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Project Filtering Logic ---
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');

    // Function to show/hide projects based on filter
    function filterProjects(category) {
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'flex'; // Show the card (using flex as per CSS)
            } else {
                card.style.display = 'none'; // Hide the card
            }
        });
    }

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Get the filter category from the data-filter attribute
            const filterCategory = this.getAttribute('data-filter');

            // Call the filter function
            filterProjects(filterCategory);
        });
    });

    // Initialize: Show all projects when the page loads
    filterProjects('all');
});