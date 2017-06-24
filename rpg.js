function Characters (name, profession, gender, age, strength, HP) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.HP = HP;
	this.PrintStats = function () {
		console.log("This character's name is " + this.name);
		console.log("This character's profession is " + this.profession);
		console.log("This character's gender is " + gender);
		console.log("This character's age is " + this.age);
		console.log("This character's strength is " + this.strength);
		console.log("This character's HP is " + this.HP);
	};
	this.IsAlive = function () {
		if(this.HP > 0) {
		return true
		}
		else {
			return false
		}
	};
	this.Attack = function (otherCharacter) {
		otherCharacter.HP = otherCharacter.HP - this.strength;
	}
	this.LevelUp = function () {
		this.age = this.age + 1;
		this.strength = this.strength + 5;
		this.strength = this.HP + 25;
	}
}

var character1 = new Characters("Unicorn Marshmellows", "an archer", "non-binary", 38, 75, 200);
var character2 = new Characters("Albezia Jufafa", "a witch doctor", "female", 103, 34, 500);


// character1.Attack(character2);
// character2.LevelUp();
character2.PrintStats();
character1.PrintStats();