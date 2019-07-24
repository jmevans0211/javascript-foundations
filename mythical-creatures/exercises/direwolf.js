class Direwolf {
	constructor(name, home, size) {
		this.name = name;
		this.home = home || 'Beyond the Wall';
		this.size = size || 'Massive';
		this.starksToProtect = [];
		this.huntsWhiteWalkers = true;
	}

	protect(stark){
		this.huntsWhiteWalkers = false;
		if(this.home === stark.location) {
		this.starksToProtect.push(stark);
		stark.safe = true;
		}
		if (this.starksToProtect.length > 2){
			this.starksToProtect.pop(stark);
		}
	}

	leave(stark) {
		this.starksToProtect.shift(stark);
		stark.safe = false;
		console.log(stark.safe)
	}
}


module.exports = Direwolf