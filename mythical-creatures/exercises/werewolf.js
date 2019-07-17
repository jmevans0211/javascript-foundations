class Werewolf{
	constructor(name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}

	change() {
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = this.wolf;
	}

	eat(victim) {
		if (this.human === true){
			return
		}
		victim.alive = false;
		// this.human = true;
		this.change();
	}
}

module.exports = Werewolf;







































// 	constructor(name, location){
// 		this.name = name
// 		this.location = location;
// 		this.human = true;
// 		this.wolf = false;
// 		// this.changes = 0;
// 		this.hungry = false;
// 	}

// 	change() {
// 		// this.wolf = true;
// 		this.wolf = !this.wolf; 
// 		this.hungry = !this.hungry;
// 		// this.changes++;
// 		this.human = !this.human;
// 		// if(this.human){
// 		// 	this.wolf = true;
// 		// 	this.human = false;
// 		// } else {
// 		// 	this.wolf = false;
// 		// 	this.human = true;
// 		// }
// 	}

// 	eat(victim) {
// 		this.human = true;
// 	}

// }