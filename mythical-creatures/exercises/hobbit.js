class Hobbit {
  constructor(name) {
    this.name = name;
    this.disposition = 'homebody';
    this.age = 0;
    this.adult = false;
    this.isShort = true;
    this.old = false;

    if(this.name === 'Frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }

celebrateBirthday() {
  this.age++;
if (this.age >= 33){
  this.adult = true;
}
if (this.age >= 101){
  this.old = true;
}

} 


}















module.exports = Hobbit;


// celebrateBirthday() {
// 	this.age++;
// 	if(this.age >= 33) {
// 		this.adult = true;
// 	}
// 	if(this.age >=101){
// 		this.old = true;
// 	}

//   }





// Questions: 


// npm test mythical-creatures/test/hobbit-test.js


// class Hobbit {
// 	constructor(name) {
// 		this.name = name;
// 		this.disposition = this.disposition || 'homebody';
// 		this.age = 0;
// 		this.adult = false;
// 		this.isShort = true;
// 		this.old = false;
// if (this.name === 'Frodo') {
// 	this.hasRing = true;
// } else {
// 	this.hasRing = false;
// }

// 	}

// celebrateBirthday() {
// 	this.age++;
// 	if(this.age >= 33) {
// 		this.adult = true;
// 	}
// 	if(this.age >=101){
// 		this.old = true;
// 	}

//   }


// };

// module.exports = Hobbit;

// 	celebrateBirthday() {
// 		this.age = this.age +1;
// 		console.log(this.age)
// };
