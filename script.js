let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let i = a.getDay()
let d = a.getDate()
let j = a.getMonth()
let k = a.getFullYear()

console.log(h, m, s, i, d, j, k)

const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
]

const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
]


function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    
    document.getElementById('hour').textContent = hours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;
    
    changebackground(hours);
}

function changebackground(hours){
    if (hours >= 18 || hours < 6) {
        document.body.style.transition = "all 3s ease"
        document.body.style.backgroundColor = "#00203FFF"
    }
    else{
        document.body.style.backgroundColor = "rgb(52, 128, 204)"
    }
}

setInterval(updateClock, 1000)

function updateDay(){
    let a = new Date();
    let day = a.getDay();
    let date = a.getDate();
    let month = a.getMonth();
    let year = a.getFullYear();

    document.getElementById("day").textContent = days[day];
    document.getElementById("date").textContent = date + "  ";
    document.getElementById("month").textContent = months[month] + "  ";
    document.getElementById("year").textContent = year;
}

updateDay()
setInterval(updateDay, 86400000)