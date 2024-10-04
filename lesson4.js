// home work 1
function printId(obj) {
    console.log(obj.id);
}
printId({ id: 123 });
function getPersonInfo(person) {
    var _a, _b, _c;
    var name = (_a = person.name) !== null && _a !== void 0 ? _a : 'Unknown';
    var age = (_b = person.age) !== null && _b !== void 0 ? _b : 0;
    var email = (_c = person.email) !== null && _c !== void 0 ? _c : 'Unkonown';
    return "Name ".concat(name, ", age ").concat(age, ", email ").concat(email);
}
var almaz = { name: 'almaz' };
var adilet = { name: 'adilet', age: 15, email: 'test@gmail.com' };
console.log(getPersonInfo(almaz));
console.log(getPersonInfo(adilet));
// home work 3
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return typeof value === 'number';
}
function processValue(value) {
    if (isString(value)) {
        return "The string has length: ".concat(value.length);
    }
    else if (isNumber(value)) {
        return "The square of the number is: ".concat(value * value);
    }
    return "Invalid value";
    ;
}
