class Diapo {
	constructor(){
		this.i = 0;
		this.slide = document.querySelectorAll(".slide");
		this.timer = setInterval(() => this.next(), 5000);
		this.buttonpause = document.getElementById("buttonpause").addEventListener('click',() => this.pause());
		this.buttonplay = document.getElementById("buttonplay").addEventListener('click',() => this.play());
		this.buttonprevious = document.getElementById("buttonprev").addEventListener('click', () => this.previous());
		this.buttonnext = document.getElementById("buttonnext").addEventListener('click', () => this.next());
	}

	play(){
		this.timer = setInterval(() => this.next(), 5000);
	}

	pause(){
		clearInterval(this.timer);
	}

	previous(){
		this.slide[this.i].classList.remove("visible");
		if (this.i == 0) {
			this.i = 3;
		}
		this.slide[this.i - 1].classList.add("visible");
		this.i--;
	}

	next(){
		this.slide[this.i].classList.remove("visible");
		if(this.i == 2){
			this.i= this.i - 3;
		}
		this.slide[this.i + 1].classList.add("visible");
		this.i++;
	}
}

let newDiapo = new Diapo();
newDiapo.timer;

