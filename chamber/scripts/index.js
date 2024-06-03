// index.js

document.addEventListener("DOMContentLoaded", function () {
    // Fetch directory data from members.json
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            // Filter members with silver or gold membership levels
            const qualifiedMembers = data.filter(member => member.membershipLevel === 'silver' || member.membershipLevel === 'gold');
            
            // Randomly select two to three members from qualified members
            const spotlightMembers = shuffle(qualifiedMembers).slice(0, Math.floor(Math.random() * 2) + 2);

            // Display spotlight advertisements
            const spotlightContainer = document.querySelector('.spotlight-container');
            spotlightMembers.forEach(member => {
                const adElement = document.createElement('div');
                adElement.classList.add('spotlight-ad');
                adElement.innerHTML = `
                    <h3>${member.name}</h3>
                    <p>${member.description}</p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                    <p><a href="${member.website}">Visit Website</a></p>
                `;
                spotlightContainer.appendChild(adElement);
            });
        })
        .catch(error => console.error('Error fetching directory data:', error));

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
});
