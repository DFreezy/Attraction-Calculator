document.getElementById('attraction-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const conversation = parseInt(document.getElementById('conversation').value);
    const emotionalSupport = parseInt(document.getElementById('emotionalSupport').value);
    const frequencyOfContact = parseInt(document.getElementById('frequencyOfContact').value);
    const trust = parseInt(document.getElementById('trust').value);

    // Simple formula to calculate emotional attraction
    const attractionScore = (conversation * 0.3) + (emotionalSupport * 0.3) + (frequencyOfContact * 0.2) + (trust * 0.2);
    const attractionPercentage = (attractionScore / 10) * 100;
 if(attractionPercentage < 70){
    document.getElementById('result').textContent = `Emotional Attraction Score: ${attractionPercentage.toFixed(2)}% |She doesn't feel the same`;
 }else if(attractionPercentage > 70){
    document.getElementById('result').textContent = `Emotional Attraction Score: ${attractionPercentage.toFixed(2)}% |She likes you, man!`;
 }
});
