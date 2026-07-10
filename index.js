function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Greeting logic
    let greeting = "Good Night! 🌙";
    if (hours >= 5 && hours < 12) {
        greeting = "Good Morning! ☀️";
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon! 🌤️";
    } else if (hours >= 17 && hours < 22) {
        greeting = "Good Evening! 🌆";
    }
    
    // 12-hour format conversion
    hours = hours % 12;
    hours = hours ? hours : 12; // '0' should be '12'
    const hoursStr = String(hours).padStart(2, '0');

    // Update DOM
    document.getElementById('clock').textContent = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('greeting').textContent = greeting;
}

// Run clock immediately and then every second
updateClock();
setInterval(updateClock, 1000);
