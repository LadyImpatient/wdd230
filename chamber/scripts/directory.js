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
    
        // Filter and shuffle the members array
        const spotlightMembers = members.filter(member => member.membership_level === "Gold");
        shuffleArray(spotlightMembers);
    
        spotlightMembers.forEach(member => {
            const spotlightItem = document.createElement("div");
            spotlightItem.classList.add("spotlight-ad");
            spotlightItem.innerHTML = `
                <h3>${member.name}</h3>
                <div class="card-content">
                    <p>${member.address}</p>
                    <p>Phone: ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                </div>
            `;
            spotlightContainer.appendChild(spotlightItem);
        });
    }    

    // Function to shuffle an array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    fetchMemberData();
});
