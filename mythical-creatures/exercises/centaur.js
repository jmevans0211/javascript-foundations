class Centaur{
	constructor(name, breed){
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.shooting = 0;
		this.standing = true;
		this.layingDown = false;
}

	shoot() {
		this.shooting++;
		this.cranky = this.shooting >= 3;
		return this.cranky || this.layingDown ? 'NO!' : 'Twang!!!';
	}

	run() {
		this.shooting++;
		this.cranky = this.shooting >=3;
		return this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
	}


	sleep() {
		if(this.layingDown) {
			this.cranky = false;
			this.shooting = 0;
		}
		return this.layingDown ? 'ZZZZ' : 'NO!';

		
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}

	drinkPotion() {
		this.cranky = !this.cranky;
		if (this.layingDown) {
			return 'Not while I\'m laying down!';
		}
	}

}

module.exports = Centaur