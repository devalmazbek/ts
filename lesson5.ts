// home work 1

interface Cat {
    type: 'cat',
    name: string;
    model: string;
    year: number;
}

interface Dog {
    type: 'dog',
    name: string;
    kind: string;
}

interface Bird {
    type: 'bird',
    name: string;
    butterfly: boolean;
    age: number;
}

type Animals = Cat | Dog | Bird; 

function isCat(animal: Animals): animal is Cat {
    return animal.type === 'cat';
}

function isDog(animal: Animals): animal is Dog {
    return animal.type === 'dog';
}

function idBird(animal: Animals): animal is Bird {
    return animal.type === 'bird';
}



function describeAnimals(animal: Animals) {
    if(isCat(animal)) {
        return `type ${animal.type} name - ${animal.name}`;
    }

    if(isDog(animal)) {
        return `type ${animal.type} name - ${animal.name}`;
    }
    if(idBird(animal)) {
        return `type ${animal.type} name - ${animal.name}`;
    }

    return 'Unknown animal';
}


const cat: Cat = {type: 'cat', name: 'cat', model: 'test', year: 2021};
const dog: Dog = {type: 'dog', name: 'dog', kind: 'pitbul'};
const bird: Bird = {type: 'bird', name:'kuw', butterfly: true, age: 15};

console.log(describeAnimals(cat));
console.log(describeAnimals(dog));
console.log(describeAnimals(bird));

// end home work 1

// home work 2
type IsNumber<T> = T extends number ? "number" : "not a number";


function checkTypeNumber<T>(value: T): IsNumber<T> {
    return (typeof value === 'number' ? 'number' : "not a number") as IsNumber<T>;
}

console.log(checkTypeNumber('string'));
console.log(checkTypeNumber(42));
console.log(checkTypeNumber(true));
// end home work 2









