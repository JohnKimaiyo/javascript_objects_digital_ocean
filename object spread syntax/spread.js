// example 1
const react = {
    name : "john",
    age  :30
}

const copied = { ...react,age:35,occupation:"React Developer"};

console.log(copied);

// example 2

const angular = {
    name :"janet",
    age:32
}

const addangular = {...angular,age: 34,occupation:"Anguar Developer"}
console.log(addangular);

// example 3

const vue = {
    name:"sharon",
    age:42
}
const addvue = {...vue,age:44,occupation:"Vue Developer"}
console.log(addvue);

// example 4

const flutter = {

    name:"brian",
    age:45
}
const addflutter = {...flutter,age:47,occupation:'Mobile Developer'}
console.log(addflutter);

// example 5
const django = {
    name:"jane",
    age:49
}
const adddjango = {...django,age:50 ,occupation:"Django Developer"}
console.log(adddjango);

//example 6
const flask = {
    name:"peter",
    age:50
}
const addflask ={...flask,age:52,occupation:"Flask Developer"}
console.log(addflask);


// example 7
const solidity ={
    name:"paul",
    age:60
}
const addsolodity={...solidity,age:65,occupation:"Solidity Developer"}
console.log(addsolodity);

// example 8
const web3 = {
    name:"susan",
    age:70
}
const addweb3={...web3,age:75,occupation:"web3 developer"}
console.log(addweb3);


// example 9
const rust = {
    name:"liz",
    age:80
}
const addrust = {...rust,age:85,occupation:"liz developer"}
console.log(addrust);

// example 10
const ruby ={
    name:"evans",
    age:90
}
const addruby ={...ruby,age:95,occupation:"Ruby Developer"}
console.log(addruby);