const gimli = {
	name: "Gimli",
	race: "dwarf",
	weapon: "axe",
	greet: function() {
		return `Hi, my name is ${this.name}!`;
	},
};
// Retrieve the value of the weapon property
console.log(gimli.weapon);
//Similar to how you might index and access a string, the syntax for bracket notation is two square brackets ([]) encasing the property name.
console.log["weapon"];
gimli.greet();

// Add new age property to gimli
gimli.age = 139;
console.log(gimli.age);

// Add new fight method to gimli
gimli.fight = function(){
    return `Gimli attacks with an ${this.waeponds}.`;
}

gimli.fight();