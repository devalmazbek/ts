// first homework
function sum(firstParam, secondParam) {
    return firstParam + secondParam;
}
function showStringLength(text) {
    return text.length;
}
function describeUser(user) {
    return "User ".concat(user.name, " is ").concat(user.age, " years old");
}
var user = { name: 'almaz', age: 30 };
console.log(describeUser(user));
console.log(sum(10, 10));
console.log(showStringLength('almaz'));
function showCarDescription(car) {
    return "car brand ".concat(car.brand, ", model: ").concat(car.model, ", year: ").concat(car.model, ", electric: ").concat(car.electric);
}
/*END HW@*/
var porsh = {
    brand: 'Porshe',
    model: 'Cayman',
    year: 2020,
    electric: true,
};
console.log(showCarDescription(porsh));
