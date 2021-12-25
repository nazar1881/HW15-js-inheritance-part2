let time1 = document.getElementById('clock1');
let time2 = document.getElementById('clock2');
let time3 = document.getElementById('clock3');

class Clock {
    constructor(el) {
        this.el = el;
        this.format = true;

        this.el.addEventListener('click', () => {
            this.toggleFormat();
        });
    }

    toggleFormat() {
        this.format = !this.format;
    }

    getTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return   this.format ? `${hours}:${minutes}:${seconds}` : `${hours}:${minutes}`;
    }

    render() {
        this.el.innerText = this.getTime(); 
    }


}

class ClockWithMs extends Clock {
    getTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let milliSec = date.getMilliseconds();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return   this.format ? `${hours}:${minutes}:${seconds}:${milliSec}` : `${hours}:${minutes}`;
    }
}

class ClockWithYear extends Clock {
    getTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let year = date.getFullYear();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        return   this.format ? `${hours}:${minutes}:${seconds} - ${year}рiк` : `${hours}:${minutes}`;
    }
}

let parenntClock = new Clock(time1);
setInterval(() => {
    parenntClock.render();
}, 250);

let clockWithMs = new ClockWithMs(time2);
setInterval(() => {
    clockWithMs.render();
}, 250);

let clockWithYear = new ClockWithYear(time3);
setInterval(() => {
    clockWithYear.render();
}, 250);