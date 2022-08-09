// initialize object literal with curly brackets
const objectLiteral = {};

// initiale object constructor with new object
const objectConstructor = new Object();

// initialize gimli object
const gimli = {
    name:"Gimli",
    race:"dwarf",
    weapon:"axe",
    greet: function(){
        return `HI my anem is ${this.name}`;
    },
}
console.log( gimli);
