async function fetchEventData() {
    try {
        const response = await fetch('data/events.json'); // Adjust the file path here
        const eventData = await response.json();
        return eventData;
    } catch (error) {
        console.error('Error fetching event data:', error);
        return [];
    }
}

// Function to generate HTML for an event card
function generateEventCard(event) {
    return `
        <div class="event-card">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-date">${event.date}</p>
            <p class="event-description">${event.description}</p>
        </div>
    `;
}

// Function to populate the "Upcoming Events" section with event cards
async function populateUpcomingEvents() {
    const eventContainer = document.getElementById('event-container');

    // Clear any existing content in the event container
    eventContainer.innerHTML = '';

    // Fetch event data
    const eventData = await fetchEventData();

    // Loop through the event data and generate HTML for each event card
    eventData.forEach(event => {
        const eventCardHTML = generateEventCard(event);
        eventContainer.insertAdjacentHTML('beforeend', eventCardHTML);
    });
}

// Call the populateUpcomingEvents function to populate the "Upcoming Events" section when the page loads
populateUpcomingEvents();
