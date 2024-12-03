const countdown = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmasDate = new Date(`December 25, ${currentYear} 00:00:00`);
    
    if (now > christmasDate) {
        christmasDate.setFullYear(currentYear + 1);
    }

    const totalSeconds = (christmasDate - now) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
};

setInterval(countdown, 1000);
