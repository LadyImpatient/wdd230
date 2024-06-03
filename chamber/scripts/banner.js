document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const closeBannerBtn = document.getElementById("closeBannerBtn");

    // Function to check if today is Monday, Tuesday, or Wednesday
    function isWeekday() {
        const today = new Date().getDay();
        return today >= 1 && today <= 3; // Monday: 1, Tuesday: 2, Wednesday: 3
    }

    // Show the banner if today is Monday, Tuesday, or Wednesday
    if (isWeekday()) {
        banner.style.display = "block";
    }

    // Close the banner when the close button is clicked
    closeBannerBtn.addEventListener("click", function () {
        banner.style.display = "none";
    });
});
