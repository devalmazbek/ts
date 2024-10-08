/* Тогда давайте познакомимся с новой темой — Indexed Access Types (Типы доступа по индексу) и Key Remapping in Mapped Types (Переназначение ключей в сопоставленных типах). Это важные аспекты TypeScript, которые позволят вам глубже управлять типами данных.

Тема 1: Indexed Access Types (Типы доступа по индексу)
Indexed Access Types позволяют вам получить тип конкретного свойства объекта или массива. Они работают так же, как доступ к элементам объекта с использованием квадратных скобок, но на уровне типов. */
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
function getProductName(product) {
    return product.name;
}
var product = {
    name: "Smartphone",
    price: 699,
    category: "Electronics",
};
console.log(getProductName(product));
function transformToPrivateUser(user) {
    return {
        private_id: user.id,
        private_name: user.name,
        private_email: user.email
    };
}
var user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
};
var privateUser = transformToPrivateUser(user);
console.log(privateUser);
function getEmployeeNameSalary(employee) {
    return "name: ".concat(employee.name, ", salary: ").concat(employee.salary);
}
var jonh = { name: 'jonh', position: 'developer', salary: 1500 };
console.log(getEmployeeNameSalary(jonh));
function transformToReadOnlyType(order) {
    return __assign({}, order);
}
var order = { orderId: 12, customerName: 'Jonh', totalAmount: 200 };
var readonlyOrder = transformToReadOnlyType(order);
console.log(readonlyOrder);
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function createOptionalPerson(person) {
    return {
        name: person.name,
        age: person.age,
        isEmployed: person.isEmployed
    };
}
var person = { name: "John", age: 30, isEmployed: true };
var optionalPerson = createOptionalPerson(person);
console.log(optionalPerson);
// end home work 5
