

document.addEventListener("DOMContentLoaded", function() {
    // current year
    var currentYear = new Date().getFullYear();

    // copyright year in  footer
    var copyrightYearSpan = document.getElementById("currentYear");
    if (copyrightYearSpan) {
        copyrightYearSpan.textContent = currentYear;
    }

    // last modified date
    var lastModifiedDate = document.lastModified;

    // Update the last modified date in the footer
    var lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});
