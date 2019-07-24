class Stark {
	constructor(name, location, safe) {
		this.name = name;
		this.location = location || 'Winterfell';
		this.safe = safe || false;
	}

	houseWords() {
		if (this.safe === true){
			return 'The North Remembers';
		} else {
		return 'Winter is Coming';
	}
	}

}



module.exports = Stark