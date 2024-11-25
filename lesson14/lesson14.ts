/*Создайте функцию describe, которая принимает string | number | boolean. Если это строка — выведите её длину, если число — округлите, если булево значение — выведите "Истина" или "Ложь".
Создайте классы Bird и Fish, оба с методом move(). У Bird есть метод fly(), а у Fish — swim(). Создайте функцию moveAnimal, которая принимает Bird | Fish и вызывает fly() или swim() в зависимости от типа животного.*/

function describe(value: string | number | boolean): boolean | number | string | null {
    if(typeof value === 'string') {
        return value.length;
    }

    if(typeof value === 'number') {
        return value.toFixed();
    } 

    if(typeof value === 'boolean') {
        return value;
    }

    else return null
}

console.log(describe('test'));
console.log(describe(123));
console.log(describe(true));


class Bird {
    move() {
        console.log('bird moved');
    }

    fly() {
        console.log('bird is flying');
    }
}

class Fish {
    move() {
        console.log('fish moved');
    }

    swim() {
        console.log('fish is swimming');
    }
}


function moveAnimal(animal: Fish | Bird) {
    if(animal instanceof Fish) {
        animal.swim()
    } else if(animal instanceof Bird) {
        animal.fly();
    }
}

const bird = new Bird();
const fish = new Fish();

moveAnimal(bird);
moveAnimal(fish);


/*
Практическое задание
Создайте интерфейсы для разных транспортных средств: Car, Bike, и Boat, с дискриминатором type.
В каждом интерфейсе добавьте уникальные методы: например, для Car — метод drive, для Bike — метод pedal, а для Boat — метод sail.
Создайте функцию moveVehicle, которая принимает объединение этих типов и вызывает соответствующий метод в зависимости от значения type. 
 */

interface Car {
    type: 'car';
    drive: () => void;
}

interface Bike {
    type: 'bike';
    pedal: () => void;
}

interface Boat {
    type: 'boat';
    sail: () => void;
}

function moveVehicle(venicle: Car | Bike | Boat) {
    switch(venicle.type) {
        case 'car': {
            venicle.drive();
            break;
        }
        case 'bike': {
            venicle.pedal();
            break;
        }
        case 'boat': {
            venicle.sail();
            break;
        }
    }
}

const car: Car = {
    type: 'car',
    drive: () => console.log('Car is driving')
};

const bike: Bike = {
    type: 'bike',
    pedal: () => console.log('Bike is pedaling')
};

const boat: Boat = {
    type: 'boat',
    sail: () => console.log('Boat is sailing')
};

moveVehicle(car);
moveVehicle(bike); 
moveVehicle(boat);



