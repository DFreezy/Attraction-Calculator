document.getElementById('attraction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const communication = parseInt(document.getElementById('communication').value);
    const empathy = parseInt(document.getElementById('empathy').value);
    const shared_interests = parseInt(document.getElementById('shared_interests').value);
    const trust = parseInt(document.getElementById('trust').value);

    // Simple formula to calculate emotional attraction
    const attractionScore = (communication * 0.3) + (empathy * 0.3) + (shared_interests * 0.2) + (trust * 0.2);
    const attractionPercentage = (attractionScore / 10) * 100;

    document.getElementById('result').textContent = `Emotional Attraction Score: ${attractionPercentage.toFixed(2)}%`;
});
