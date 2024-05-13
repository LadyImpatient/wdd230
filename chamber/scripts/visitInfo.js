const lastVisit = localStorage.getItem('lastVisit');
if (!lastVisit) {
    document.write("<p>Welcome! Let us know if you have any questions.</p>");
} else {
    const currentDate = Date.now();
    const daysSinceVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
    if (daysSinceVisit < 1) {
        document.write("<p>Back so soon! Awesome!</p>");
    } else {
        document.write(`<p>You last visited ${daysSinceVisit} ${daysSinceVisit === 1 ? 'day' : 'days'} ago.</p>`);
    }
}
localStorage.setItem('lastVisit', Date.now());