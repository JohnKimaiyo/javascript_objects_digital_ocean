// example 1
const buffet = {
  occupation: "investor",
};

const clonedbuffet = { ...buffet };
clonedbuffet.occupation = "insurance investor";
console.log(clonedbuffet);

// example 2
const dyalio = {
  occupation: "trader",
};

const cloneddyalio = { ...dyalio };
cloneddyalio.occupation = "forex trader";

console.log(cloneddyalio);

// example 3
const tudor = {
  occupation: "banker",
};
const clonedtudor = { ...tudor };
clonedtudor.occupation = "commodities trader";
console.log(clonedtudor);

// example 4
const janet ={
    occupataion:"commisioner",
};
const clonedjanet = {...janet};
clonedjanet.occupataion="federal reserver chairlady";