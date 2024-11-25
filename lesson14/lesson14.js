/*Создайте функцию describe, которая принимает string | number | boolean. Если это строка — выведите её длину, если число — округлите, если булево значение — выведите "Истина" или "Ложь".
Создайте классы Bird и Fish, оба с методом move(). У Bird есть метод fly(), а у Fish — swim(). Создайте функцию moveAnimal, которая принимает Bird | Fish и вызывает fly() или swim() в зависимости от типа животного.*/
function describe(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    if (typeof value === 'number') {
        return value.toFixed();
    }
    if (typeof value === 'boolean') {
        return value;
    }
    else
        return null;
}
console.log(describe('test'));
console.log(describe(123));
console.log(describe(true));
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.move = function () {
        console.log('bird moved');
    };
    Bird.prototype.fly = function () {
        console.log('bird is flying');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish() {
    }
    Fish.prototype.move = function () {
        console.log('fish moved');
    };
    Fish.prototype.swim = function () {
        console.log('fish is swimming');
    };
    return Fish;
}());
function moveAnimal(animal) {
    if (animal instanceof Fish) {
        animal.swim();
    }
    else if (animal instanceof Bird) {
        animal.fly();
    }
}
var bird = new Bird();
var fish = new Fish();
moveAnimal(bird);
moveAnimal(fish);
function moveVehicle(venicle) {
    switch (venicle.type) {
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
var car = {
    type: 'car',
    drive: function () { return console.log('Car is driving'); }
};
var bike = {
    type: 'bike',
    pedal: function () { return console.log('Bike is pedaling'); }
};
var boat = {
    type: 'boat',
    sail: function () { return console.log('Boat is sailing'); }
};
moveVehicle(car);
moveVehicle(bike);
moveVehicle(boat);
