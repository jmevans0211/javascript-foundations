
class Wizard {
	constructor(wizObj){
		this.name = wizObj.name;
		this.bearded = wizObj.bearded;
		if (this.bearded === undefined) {
			this.bearded = true;
		}
		this.isRested = true;
		this.counter = 0;

	}

	incantation(incant){
		return incant.toUpperCase();
	}

	cast(spell){
		this.counter++
		if(this.counter >3){
			this.isRested = false
		}
		return spell;
	}

}

module.exports = Wizard

// npm test mythical-creatures/test/wizard-test.js




























// class Wizard {
// 	constructor(wizObj) {
// 		this.name = wizObj.name;
// 		this.bearded = wizObj.bearded;
// 		if(this.bearded === undefined) {
// 			this.bearded = true;
// 		}
// 		this.isRested = true;
// 		this.spell = 0;
// 	}


// 	incantation(incant) {
// 		return incant.toUpperCase();
// 	}


// 	cast() {
// 		this.spell++;
// 		if (this.spell > 3) {
// 			this.isRested = false;
// 		}
// 	}

// };

















// class Wizard {
// 	constructor(obj) {
// 		this.name = obj.name;
// 		this.bearded = obj.bearded;
// 		 // this.bearded = this.bearded === undefined;
// 		if (this.bearded === undefined) {
// 			this.bearded = true;
// 		}

// 		this.isRested = true;
// 		this.counter = 0;
// 	}

// 	incantation(spell) {
// 		return spell.toUpperCase();
// 	}

// 	cast(){
// 		this.counter++;
// 		if (this.counter >=3){
// 			this.isRested = false;
// 			return 'I SHALL NOT CAST!'
// 		}
// 		return 'MAGIC BULLET';
// 	}

// }