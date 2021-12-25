let time1 = document.getElementById('clock1');
let time2 = document.getElementById('clock2');
let time3 = document.getElementById('clock3');

class Clock {
    constructor(el) {
        this.el = el;
        this.fullFormat = true;

        this.el.addEventListener('click', () => {
            this.toggleFormat();
        });
    }

    toggleFormat() {
        this.fullFormat = !this.fullFormat;
    }

    getTime() {
        let date = new Date();
        let hours = editedTime(date.getHours());
        let minutes = editedTime(date.getMinutes());
        let seconds = editedTime(date.getSeconds());
        let milliSec = date.getMilliseconds();
        let year = date.getFullYear();

        return   [hours, minutes, seconds, milliSec, year];
    }

    timeFormat() {
        let isFullFormat = `${this.getTime()[0]}:${this.getTime()[1]}:${this.getTime()[2]}`;
        let isShortFormat = `${this.getTime()[0]}:${this.getTime()[1]}`;
        return this.fullFormat === true ? isFullFormat : isShortFormat;
    }

    render() {
        this.el.innerText = this.timeFormat(); 
    }

    startClock() {
        setInterval(() => this.render(), 250);
    }
}

class ClockWithMs extends Clock {
    timeFormat() {
        let isFullFormat = `${this.getTime()[0]}:${this.getTime()[1]}:${this.getTime()[2]}:${this.getTime()[3]}`;
        let isShortFormat = `${this.getTime()[0]}:${this.getTime()[1]}`;
        return this.fullFormat === true ? isFullFormat : isShortFormat;
    }
}

class ClockWithYear extends Clock {
    timeFormat() {
        let isFullFormat = `${this.getTime()[0]}:${this.getTime()[1]}:${this.getTime()[2]} ${this.getTime()[4]}-рiк`;
        let isShortFormat = `${this.getTime()[0]}:${this.getTime()[1]}`;
        return this.fullFormat === true ? isFullFormat : isShortFormat;
    }
}

function editedTime(timeElement) {
    return timeElement < 10 ? "0" + timeElement : timeElement;
}

let parenntClock = new Clock(time1);
parenntClock.startClock();

let clockWithMs = new ClockWithMs(time2);
clockWithMs.startClock();

let clockWithYear = new ClockWithYear(time3);
clockWithYear.startClock();
