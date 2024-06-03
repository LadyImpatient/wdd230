document.addEventListener("DOMContentLoaded", function () {
    const spotlightContainer = document.querySelector(".spotlight-container");

    function fetchMemberData() {
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => {
                displaySpotlights(data);
            })
            .catch(error => console.error("Error fetching member data:", error));
    }

    function displaySpotlights(members) {
        spotlightContainer.innerHTML = ""; 

        const spotlightMembers = members.filter(member => member.membership_level === "Gold");

        spotlightMembers.forEach(member => {
            const spotlightItem = document.createElement("div");
            spotlightItem.classList.add("spotlight-ad"); // Correct class name
            spotlightItem.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <img src="images/${member.image}" alt="${member.name}">
            `;
            spotlightContainer.appendChild(spotlightItem);
        });
    }

    fetchMemberData();
});
