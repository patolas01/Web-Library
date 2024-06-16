document.addEventListener('DOMContentLoaded', () => {
    let team1 = prompt("Enter the initials for the first team:").toUpperCase();
    let team2 = prompt("Enter the initials for the second team:").toUpperCase();
    document.getElementById('team1').innerText = team1 || "NaN";
    document.getElementById('team2').innerText = team2 || "NaN";

    const teamColors = {
        "ESP": "#FF0000",     // Spain - Red
        "CRO": "#FFFFFF",     // Croatia - White
        "ITA": "#0033CC",     // Italy - Blue
        "ENG": "#FFFFFF",     // England - White
        "FRA": "#0055A4",     // France - Blue
        "GER": "#000000",     // Germany - Black
        "POR": "#FF0000",     // Portugal - Red
        "BEL": "#FF0000",     // Belgium - Red
        "SUI": "#FF0000",     // Switzerland - Red
        "SWE": "#FFCC00",     // Sweden - Yellow
        "NED": "#FF6600",     // Netherlands - Orange
        "DEN": "#C60C30",     // Denmark - Red
        "UKR": "#FFD700",     // Ukraine - Yellow
        "RUS": "#0033A0",     // Russia - Blue
        "CZE": "#D7141A",     // Czech Republic - Red
        "TUR": "#E30A17",     // Turkey - Red
        "AUT": "#ED2939",     // Austria - Red
        "POL": "#FFFFFF",     // Poland - White
        "WAL": "#D22828",     // Wales - Red
        "SCO": "#005EB8",     // Scotland - Blue
        "HUN": "#477050",     // Hungary - Dark Green
        "FIN": "#003580",     // Finland - Blue
        "SVK": "#0B4EA2",     // Slovakia - Blue
        "MKD": "#FF0000"      // North Macedonia - Red
    };

    const teamBar1 = document.getElementById('first');
    const teamBar2 = document.getElementById('second');

    teamBar1.style.backgroundColor = teamColors[team1] || "grey";
    teamBar2.style.backgroundColor = teamColors[team2] || "grey";

    let timerElement = document.querySelector('.timer');
    let score1Element = document.getElementById('score1');
    let score2Element = document.getElementById('score2');

    let timer = 0; // Timer in seconds
    let interval;
    let isRunning = false;
    const updateInterval = 1000 / 16; // 16x faster than real-time

    const startTimer = () => {
        if (!isRunning) {
            console.log('Starting timer');
            isRunning = true;
            interval = setInterval(() => {
                timer++;
                let minutes = String(Math.floor(timer / 60)).padStart(2, '0');
                let seconds = String(timer % 60).padStart(2, '0');
                timerElement.innerText = `${minutes}:${seconds}`;
                if (Math.random() < 0.02) { // Adjusted probability for goals
                    let score1 = parseInt(score1Element.innerText);
                    let score2 = parseInt(score2Element.innerText);
                    if (Math.random() < 0.5) {
                        score1Element.innerText = score1 + 1;
                    } else {
                        score2Element.innerText = score2 + 1;
                    }
                }
            }, updateInterval);
        }
    };

    const pauseTimer = () => {
        if (isRunning) {
            console.log('Pausing timer');
            clearInterval(interval);
            isRunning = false;
        }
    };

    const resetTimer = () => {
        console.log('Resetting timer');
        clearInterval(interval);
        isRunning = false;
        timer = 0;
        timerElement.innerText = "00:00";
        score1Element.innerText = "0";
        score2Element.innerText = "0";
    };

    document.addEventListener('keydown', (event) => {
        console.log(`Key pressed: ${event.key}`);
        if (event.key === 'S' || event.key === 's') {
            startTimer();
        } else if (event.key === 'P' || event.key === 'p') {
            pauseTimer();
        } else if (event.key === 'K' || event.key === 'k') {
            resetTimer();
        }
    });
});
