function updateClock() {
    const now = new Date();
    
    // Analog clock hands
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hourDegrees = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    document.querySelector('.sec-hand').style.transform = `rotate(${secondDegrees}deg)`;
    document.querySelector('.min-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;

    // Digital clock
    const timeString = now.toLocaleTimeString('en-GB', { hour12: false });
    document.getElementById('time').textContent = timeString;
}


setInterval(updateClock, 1000);
updateClock();
