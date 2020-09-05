class Timer {
    constructor() {
        this.timer = setInterval(() => this.timeBooking(), 1000);
        this.timeLeft = 1199;
    }

    timeBooking() {
        this.secondes = this.timeLeft % 60;
        this.minutes = Math.floor(this.timeLeft / 60);
        document.getElementById("secondes").innerHTML = this.secondes;
        document.getElementById("minutes").innerHTML = this.minutes;
        this.timeLeft--;
        console.log(this.secondes);
        console.log(this.minutes);
    }
}

let temps = new Timer();
temps.timeBooking();