class Dragon {
	constructor(name, rider, color) {
		this.name = name;
		this.rider = rider;
		this.color = color;
		this.hungry = true;
		this.food = 0;
	
	}

	eat() {
		this.food = this.food +1;
	if (this.food >=3 ){
		this.hungry = false;
	}

	} 

}



module.exports = Dragon;

// npm test mythical-creatures/test/dragon-test.js
// 







// class Dragon {
// 	constructor(name, rider, color){
// 	this.name = name;
// 	this.rider = rider;
// 	this.color = color;
// 	this.hungry = true;
// 	this.meal = 0;

// }
// eat() {
// 	this.meal++;
// 	if (this.meal >= 3) {
// 		this.hungry = false;
// 	}
// }

// }




// module.exports = Dragon;