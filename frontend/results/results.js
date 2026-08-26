document.addEventListener('DOMContentLoaded', () => {
    
    // Set Movie name from winners.js
    if(typeof eventDetails !== 'undefined') {
        document.getElementById('movie-tag').innerText = eventDetails.movie;
        document.getElementById('venue-tag').innerText = eventDetails.venue;}

    // TARGET DATE: August 27, 2026, 5:00 PM IST
    // Indian Standard Time is UTC + 5.5 hours
    // We define the target in ISO format for maximum accuracy
    const targetDate = new Date("2026-08-27T20:00:00+05:30").getTime();

    const timerSection = document.getElementById('timer-section');
    const winnersSection = document.getElementById('winners-section');
    const winnersGrid = document.getElementById('winners-grid');

    const updateTimer = () => {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            // TIME IS UP
            clearInterval(timerInterval);
            showWinners();
            return;
        }

        // Time calculations
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        // Update DOM
        document.getElementById('days').innerText = d.toString().padStart(2, '0');
        document.getElementById('hours').innerText = h.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
    };

    const showWinners = () => {
        timerSection.style.display = "none";    // Hides the timer
        winnersSection.style.display = "block"; // FORCES the winner section to show
        winnersGrid.innerHTML = "";
       

        if (winnersGrid.innerHTML === "" && typeof luckyWinners !== 'undefined') {
            luckyWinners.forEach((name, index) => {
                const card = document.createElement('div');
                card.className = 'winner-card';
                // Staggered animation delay
                card.style.animationDelay = (index * 0.1) + "s";
                card.innerHTML = `
                    <span style="font-size:0.6rem; opacity:0.3; display:block; margin-bottom:5px;">#${(index + 1).toString().padStart(2, '0')}</span>
                    <span style="letter-spacing:1px; font-weight:400;">${name}</span>
                `;
                winnersGrid.appendChild(card);
            });
        }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Call once immediately
});