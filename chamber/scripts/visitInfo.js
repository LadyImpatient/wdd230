document.addEventListener("DOMContentLoaded", function() {
    // Get the current date
    const currentDate = new Date();

    // Get the last visit date from localStorage
    const lastVisitDate = localStorage.getItem("lastVisitDate");

    // If it's the user's first visit or no last visit date is stored
    if (!lastVisitDate) {
        document.querySelector(".visit-info").textContent = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the difference in milliseconds between current date and last visit date
        const timeDifference = currentDate - new Date(lastVisitDate);

        // Convert milliseconds to days
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        // Display different message based on the days difference
        if (daysDifference === 0) {
            document.querySelector(".visit-info").textContent = "Back so soon! Awesome!";
        } else {
            const message = daysDifference === 1 ? "day" : "days";
            document.querySelector(".visit-info").textContent = `You last visited ${daysDifference} ${message} ago.`;
        }
    }

    // Store the current date as the last visit date in localStorage
    localStorage.setItem("lastVisitDate", currentDate.toISOString());
});
