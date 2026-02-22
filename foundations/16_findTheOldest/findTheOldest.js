function addDeath(person) {
    if(!("yearOfDeath" in person)){
        person.yearOfDeath = new Date().getFullYear();
    }
}

const findTheOldest = function(people) {
    people.forEach(person => addDeath(person));
    let ages = people.map((person) => ({...person, age: person.yearOfDeath - person.yearOfBirth}));
    return ages.reduce((oldest, person) => {
        if(oldest.age < person.age) return person;
        return oldest;
    }, {age: -1})
};

// Do not edit below this line
module.exports = findTheOldest;
