document.getElementById('attraction-form').addEventListener('submit', function(event) {
   event.preventDefault();

   const conversation = parseInt(document.getElementById('conversation').value);
   const emotionalSupport = parseInt(document.getElementById('emotionalSupport').value);
   const frequencyOfContact = parseInt(document.getElementById('frequencyOfContact').value);
   const trust = parseInt(document.getElementById('trust').value);

   // Simple formula to calculate emotional attraction
   const attractionScore = (conversation * 0.3) + (emotionalSupport * 0.3) + (frequencyOfContact * 0.2) + (trust * 0.2);
   const attractionPercentage = (attractionScore / 10) * 100;

   // Adjusted conditions for emotional attraction score
   if (attractionPercentage < 40) {
       document.getElementById('result').textContent = `Emotional Attraction Score: ${attractionPercentage.toFixed(2)}% | The relationship might be more casual or distant.`;
   } else if (attractionPercentage >= 40 && attractionPercentage < 60) {
       document.getElementById('result').textContent = `Emotional Attraction Score: ${attractionPercentage.toFixed(2)}% | The relationship is more neutral, not strongly emotional.`;
   } else if (attractionPercentage >= 60 && attractionPercentage < 80) {
       document.getElementById('result').textContent = `Emotional Attraction Score: ${attractionPercentage.toFixed(2)}% | Strong bond with emotional attraction likely.`;
   } else if (attractionPercentage >= 80) {
       document.getElementById('result').textContent = `Emotional Attraction Score: ${attractionPercentage.toFixed(2)}% | Deep emotional connection and strong mutual attraction.`;
   }
});

// Help modal functionality
const helpBtn = document.getElementById('help');
const helpModal = document.getElementById('helpModal');
const closeIt = document.getElementById('closeIt');

helpBtn.addEventListener('click', () => {
   helpModal.showModal();
});

closeIt.addEventListener('click', () => {
   helpModal.close();
});
