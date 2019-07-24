class Ogre {
	constructor(name, home){
		this.name = name;
		this.home = home || 'Swamp';
		this.swings = 0;
	}

	encounter(human) {
		human.encounterCounter++;
		if (human.encounterCounter % 3 === 0) {
			this.swingAt(human);
		}
	}

	swingAt(human) {
		this.swings++;
		if (this.swings % 2 === 0){
			human.knockedOut = true;
		}
	
	}

	apologize(human) {
		human.knockedOut = false;
	}
}


module.exports = Ogre;