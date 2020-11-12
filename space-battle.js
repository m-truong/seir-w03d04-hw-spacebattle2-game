//Create your ships class with properties objects and functions(hull value, firepower value, accurracy value, attack function, retreat function)
class Ship {
	constructor(name, hull, firepower, accuracy) {
		this.name = name;
		this.hull = hull;
		this.firepower = firepower;
		this.accuracy = accuracy;
	}
	fire(enemy) {
		if (this.accuracy <= randomDec(0, 1)) {
			enemy.hull -= this.firepower;
			console.log(
				`You hit! ${enemy.name} for ${this.firepower} damage and now ${enemy.name} has ${this
					.hull} hitpoints left`
			);
		} else {
			console.log(`You missed ${enemy.name}!`);
		}
	}
	retreat() {
		console.log('The universe is doomed you coward!!!');
	}
}

//initialize USS ship
const uss = new Ship('USS Bikini Bottom', 20, 5, 0.7);

//create a function to generate a random interger
const randomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//create a function to generate a random decimal
const randomDec = (min, max) => {
	let num = Math.random() * (max - min) + min;
	return Math.round(num * 10) / 10;
};

//creating an empty array of ships
const ships = [];

//create a function to generate 6 random ships
const genShip = () => {
	for (var i = 1; i < 7; i++) {
		let newShip = new Ship(`Alien ship ${i}`, randomInt(3, 6), randomInt(2, 4), randomDec(0.6, 0.8));
		//push new ships to the ships array
		ships.push(newShip);
	}
};

//generate an array of ships
genShip();
// console.log(ships);
// console.log(ships);

// create a battle loop where all actions will take place
const battle = () => {
	if (ships[0].hull > 0 && uss.hull > 0) {
		uss.fire(ships[0]);
		ships[0].fire(uss);
		if (ships[0].hull <= 0) {
			ships.shift();
		} else {
			let choice = prompt('What do you want to do?');
			if (choice.toLowerCase() == 'battle' || choice.toLowerCase() == '') {
				battle();
			} else {
				alert('Coward');
			}
		}
	}
};

// for loop that runs the battle function 6 times for 6 ships
for (var i = 0; i < 6; i++) {
	battle();
	console.log(ships[0]);
	console.log(uss);
	if (ships.length === 0) {
		alert('VICTORY SCREECH!');
	} else if (uss.hull <= 0) {
		alert('LOOOOSER');
	}
}
