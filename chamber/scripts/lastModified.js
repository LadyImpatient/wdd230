document.addEventListener("DOMContentLoaded", function() {
    var lastModifiedDate = document.lastModified;

    var lastModifiedParagraph = document.getElementById("lastModified");
    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = "Last modified: " + lastModifiedDate;
    }
});
