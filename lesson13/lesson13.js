/* Домашнее задание №1: Использование Key Remapping в Mapped Types
Создайте интерфейс Order с полями orderId, customerName, и totalAmount.
Используя Mapped Types с переназначением ключей, создайте тип ReadonlyOrder, где все поля из Order будут readonly.
Напишите функцию, которая принимает объект Order и возвращает его копию типа ReadonlyOrder. */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function getOrder(order) {
    return __assign({}, order);
}
var order = {
    orderId: 123,
    customerName: 'Doe',
    totalAmount: 1000,
};
var readonlyOrder = getOrder(order);
function transformToOptionalPerson(person) {
    return __assign({}, person);
}
var person = {
    name: 'test',
    age: 13,
    isEmployed: true,
};
var transformedPerson = transformToOptionalPerson(person);
transformedPerson.isEmployed = false;
function createTaskRecord(tasks) {
    return tasks.reduce(function (record, task) {
        record[task.taskId] = task;
        return record;
    }, {});
}
var tasksArray = [
    { taskId: "1", taskDescription: "Buy groceries" },
    { taskId: "2", taskDescription: "Clean the house" },
];
var taskRecord = createTaskRecord(tasksArray);
console.log(taskRecord);
function checkNumberType(value) {
    return (typeof value == 'number' ? "number type" : "not number type");
}
var product = {
    id: '123',
    name: 'string',
    price: 123,
};
console.log(checkNumberType(product.name));
console.log(checkNumberType(product.price));
function transformToCountryDirectory(countries) {
    return countries.reduce(function (record, country) {
        record[country.code] = country;
        return record;
    }, {});
}
var counties = [
    { name: 'Kyrgyzstan', code: 'KG' },
    { name: 'Kazahstan', code: 'KZ' },
];
var transdormedCountries = transformToCountryDirectory(counties);
console.log(transdormedCountries);
function createTasksRecord(tasks) {
    return tasks.reduce(function (record, task) {
        record[task.taskId] = task;
        return record;
    }, {});
}
var tasks = [
    { taskId: "1", taskDescription: "Buy groceries" },
    { taskId: "2", taskDescription: "Clean the house" },
];
var tasksRecord = createTaskRecord(tasksArray);
console.log(tasksRecord);
// end home work 6
