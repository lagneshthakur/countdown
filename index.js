console.log('Countdown');


function getHumanFriendlyDateDiff(toDate, fromDate) {
    const dateDiff = toDate - fromDate;
    const seconds = dateDiff/1000;
    const secondsToDisplay = (seconds%60).toFixed(1);
    const minutes = seconds/60;
    const minutesToDisplay = Math.floor(minutes%60);
    const hours = minutes/60;
    const hoursToDisplay = Math.floor(hours%24);
    const days = hours/24;
    const daysToDisplay = Math.floor(days);
    const humanFriendlyDifference = {
        days: daysToDisplay,
        hours: hoursToDisplay,
        minutes: minutesToDisplay,
        seconds: secondsToDisplay
    };
    return humanFriendlyDifference;
}

let intervalRef = null;

function restartCountdown() {
    const toDate = new Date(document.getElementById("toDate").value);
    console.log(toDate);
    clearInterval(intervalRef);
    intervalRef = setInterval(() => {
        const fromDate = new Date();
        const diff = getHumanFriendlyDateDiff(toDate,fromDate)
        document.getElementById("Days").innerHTML = diff.days;
        document.getElementById("Hours").innerHTML = diff.hours;
        document.getElementById("Minutes").innerHTML = diff.minutes;
        document.getElementById("Seconds").innerHTML = diff.seconds;
    }, 100);
}
