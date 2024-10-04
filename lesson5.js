// home work 1
function isCat(animal) {
    return animal.type === 'cat';
}
function isDog(animal) {
    return animal.type === 'dog';
}
function idBird(animal) {
    return animal.type === 'bird';
}
function describeAnimals(animal) {
    if (isCat(animal)) {
        return "type ".concat(animal.type, " name - ").concat(animal.name);
    }
    if (isDog(animal)) {
        return "type ".concat(animal.type, " name - ").concat(animal.name);
    }
    if (idBird(animal)) {
        return "type ".concat(animal.type, " name - ").concat(animal.name);
    }
    return 'Unknown animal';
}
var cat = { type: 'cat', name: 'cat', model: 'test', year: 2021 };
var dog = { type: 'dog', name: 'dog', kind: 'pitbul' };
var bird = { type: 'bird', name: 'kuw', butterfly: true, age: 15 };
console.log(describeAnimals(cat));
console.log(describeAnimals(dog));
console.log(describeAnimals(bird));
function checkTypeNumber(value) {
    return (typeof value === 'number' ? 'number' : "not a number");
}
console.log(checkTypeNumber('string'));
console.log(checkTypeNumber(42));
console.log(checkTypeNumber(true));
// end home work 2
