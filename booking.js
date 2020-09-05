class Booking {
    constructor() {

        //Paramètres affichage Canvas
        this.buttonShowCanvas = document.getElementById("showCanvas").addEventListener("click", this.showCanvas);
        this.buttonSendBooking = document.getElementById("sendBooking").addEventListener("click", this.showBooking);

        this.buttonReturn = document.getElementById("return").addEventListener("click", this.showUser);
    }

    showCanvas() {
        document.getElementById("canvas").style.display = "inline-block";
        document.getElementById("buttonsCanvas").style.display = "flex";
        document.getElementById("buttonsCanvas").style.flexDirection = "row";
        document.getElementById("user").style.display = "none";
        document.getElementById("showCanvas").style.display = "none";
    }

    showBooking() {
        document.getElementById("timerContainer").style.display = "flex";
        document.getElementById("timerContainer").style.justifyContent = "center";
    }

    showUser() {
        document.getElementById("canvas").style.display = "none";
        document.getElementById("buttonsCanvas").style.display = "none";
        document.getElementById("user").style.display = "block";
        document.getElementById("showCanvas").style.display = "inline-block";
    }
}

let reserver = new Booking();