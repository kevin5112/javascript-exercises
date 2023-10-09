const findTheOldest = function(people) {
    return people.reduce((person, current) => {
        let oldestAge;
        if('yearOfDeath' in person) oldestAge = person.yearOfDeath - person.yearOfBirth;
        else oldestAge = new Date().getFullYear() - person.yearOfBirth;
        let newAge;
        if('yearOfDeath' in current) newAge = current.yearOfDeath - current.yearOfBirth;
        else newAge = new Date().getFullYear() - current.yearOfBirth;

        console.log(person, current);
        console.log(oldestAge, newAge);
        return oldestAge > newAge ? person : current

    });
};

// Do not edit below this line
module.exports = findTheOldest;
