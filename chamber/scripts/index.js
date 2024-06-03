// index.js

document.addEventListener('DOMContentLoaded', function() {
    const eventsContainer = document.querySelector('.event-calendar-section');

    const events = [
        { title: "Summer Festival", date: "July 10, 2024", description: "Join us for a day of music, food, and fun in the sun!" },
        { title: "Art Exhibition", date: "August 5, 2024", description: "Explore the works of local artists in our annual art exhibition." },
        { title: "Community Cleanup", date: "September 15, 2024", description: "Help keep our community clean and green by participating in the cleanup event." }
        // Add more events as needed
    ];

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');

        const eventTitle = document.createElement('h3');
        eventTitle.classList.add('event-title');
        eventTitle.textContent = event.title;

        const eventDate = document.createElement('p');
        eventDate.classList.add('event-date');
        eventDate.textContent = event.date;

        const eventDescription = document.createElement('p');
        eventDescription.classList.add('event-description');
        eventDescription.textContent = event.description;

        eventCard.appendChild(eventTitle);
        eventCard.appendChild(eventDate);
        eventCard.appendChild(eventDescription);

        eventsContainer.appendChild(eventCard);
    });
});
