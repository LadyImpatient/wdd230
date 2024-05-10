// Initialize display element variable
const visitsDisplay = document.createElement("span");
visitsDisplay.classList.add("visits");

// Get the stored value for the numVisits-ls key in localStorage if it exists. If the numVisits key is missing, then assign 0 to the numVisits variable.
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
    visitsDisplay.textContent = `Total Visits: ${numVisits}`;
} else {
    visitsDisplay.textContent = `This is your first visit. Welcome!`;
}

// Increment the number of visits by one.
numVisits++;

// Store the new visit total into localStorage, key=numVisits-ls
window.localStorage.setItem("numVisits-ls", numVisits);

// Append the visit counter to the information card in the main section
const informationCard = document.querySelector(".card:nth-child(2)"); // Assuming the information card is the second card
informationCard.appendChild(visitsDisplay);
