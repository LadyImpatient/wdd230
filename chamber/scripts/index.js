document.addEventListener("DOMContentLoaded", function () {
    const spotlightContainer = document.querySelector(".spotlight-container");

    function fetchDirectoryData() {
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => displaySpotlightAds(data))
            .catch(error => console.error("Error fetching directory data:", error));
    }

    function displaySpotlightAds(members) {
        // Filter members with silver or gold membership levels for spotlight advertisements
        const spotlightMembers = members.filter(member => member.membership_level === 'Silver' || member.membership_level === 'Gold');
        
        // Shuffle the spotlight members
        const shuffledSpotlightMembers = shuffle(spotlightMembers);

        // Display the first two to three spotlight members
        const spotlightAds = shuffledSpotlightMembers.slice(0, Math.floor(Math.random() * 2) + 2);

        // Dynamically create HTML for spotlight advertisements
        spotlightAds.forEach(member => {
            const spotlightAd = document.createElement("div");
            spotlightAd.classList.add("spotlight-ad");
            spotlightAd.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.other_info}</p>
            `;
            spotlightContainer.appendChild(spotlightAd);
        });
    }

    // Function to shuffle array
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    fetchDirectoryData();
});
