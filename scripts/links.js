const baseURL = 'https://ladyimpatient.github.io/wdd230/';
const linksURL = 'data/links.json';
const learningActivities = document.getElementById('learning-activities');

const fetchLinks = async () => {
    try {
        const response = await fetch(linksURL);
        if (response.ok) {
            const data = await response.json();
            displayLinks(data.weeks);
        } else {
            console.error('Error fetching links data');
        }
    } catch (error) {
        console.error('Error:', error);
    }
};

const displayLinks = (weeks) => {
    learningActivities.innerHTML = ''; // Clear existing content
    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = week.week;

        const linkList = document.createElement('ul');
        week.links.forEach(link => {
            const linkItem = document.createElement('li');
            const anchor = document.createElement('a');
            anchor.href = `${baseURL}${link.url}`;
            anchor.textContent = link.title;
            linkItem.appendChild(anchor);
            linkList.appendChild(linkItem);
        });

        weekItem.appendChild(linkList);
        learningActivities.appendChild(weekItem);
    });
};

fetchLinks();
