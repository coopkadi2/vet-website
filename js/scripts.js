function toTitleCase(str) {
    return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

function updateDateTime() {
    const now = new Date();

    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/New_York',
        timeZoneName: 'short'
    };

    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'America/New_York'
    };

    let time = now.toLocaleTimeString('en-US', timeOptions);
    time = time.replace(/\bEDT\b/, 'EST'); // Force "EST" even in daylight time

    const date = toTitleCase(now.toLocaleDateString('en-US', dateOptions));
    const location = toTitleCase('Cincinnati, Ohio');

    document.getElementById('datetime-container').innerHTML = `
        ${location}<br>
        ${date}<br>
        ${time}
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
