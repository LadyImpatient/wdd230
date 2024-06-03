document.addEventListener("DOMContentLoaded", function () {
    const gridButton = document.getElementById("grid-view-btn");
    const listButton = document.getElementById("list-view-btn");
    const membersContainer = document.querySelector(".members-container");

    function fetchMemberData() {
        fetch("data/members.json")
            .then(response => response.json())
            .then(data => displayMembers(data))
            .catch(error => console.error("Error fetching member data:", error));
    }

    function displayMembers(members) {
        membersContainer.innerHTML = ""; 

        members.forEach(member => {
            const memberItem = document.createElement("div");
            memberItem.classList.add("member-item");
            memberItem.innerHTML = `
                <h3>${member.name}</h3>
                <p>${member.address}</p>
                <p>Phone: ${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <p>Membership Level: ${member.membership_level}</p>
                <p>${member.other_info}</p>
            `;
            membersContainer.appendChild(memberItem);
        });
    }

    fetchMemberData();

    gridButton.addEventListener("click", function () {
        membersContainer.classList.remove("list-view");
        membersContainer.classList.add("grid-view");
    });

    listButton.addEventListener("click", function () {
        membersContainer.classList.remove("grid-view");
        membersContainer.classList.add("list-view");
    });
});
