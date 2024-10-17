/* Домашнее задание №1: Модификация и преобразование ключей с помощью Mapped Types
Создайте интерфейс Profile с полями id, firstName, lastName, и email.
Используя Mapped Types, создайте новый тип SnakeCaseProfile, где все ключи будут преобразованы в snake_case (например, first_name вместо firstName).
Напишите функцию, которая принимает объект Profile и возвращает объект типа SnakeCaseProfile.
 */
// home work 1
// Функция для преобразования объекта Profile в SnakeCaseProfile
function toSnakeCaseProfile(profile) {
    var result = {};
    for (var key in profile) {
        var snakeCaseKey = key.replace(/[A-Z]/g, function (letter) { return "_".concat(letter.toLowerCase()); });
        result[snakeCaseKey] = profile[key];
    }
    return result;
}
// Пример использования
var profile = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
};
var snakeCaseProfile = toSnakeCaseProfile(profile);
console.log(snakeCaseProfile);
function checkIsBoolean(key, value) {
    return (typeof value === 'boolean' ? "boolean type" : "not boolean type");
}
var config = {
    debug: true,
    maxRetries: 10,
};
console.log(checkIsBoolean("debug", config.debug));
console.log(checkIsBoolean("maxRetries", config.maxRetries));
function createCountryMap(countries) {
    return countries.reduce(function (map, country) {
        map[country.code] = country;
        return map;
    }, {});
}
var countries = [
    { name: "United States", code: "US" },
    { name: "France", code: "FR" },
    { name: "Japan", code: "JP" },
];
var countryMap = createCountryMap(countries);
console.log(countryMap);
function toUppercasePerson(person) {
    var result = {};
    for (var key in person) {
        if (person.hasOwnProperty(key)) {
            var upperKey = key.toUpperCase();
            result[upperKey] = person[key];
        }
    }
    return result;
}
var new_user = {
    name: 'Doe',
    age: 30,
    address: 'test address',
};
var convertedPersons = toUppercasePerson(new_user);
console.log(convertedPersons);
// end home work 4
