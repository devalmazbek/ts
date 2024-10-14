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
function createOptionalPerson(person) {
    return {
        name: person.name,
        age: person.age,
        isEmployed: person.isEmployed
    };
}
var newPerson = { name: "John", age: 30, isEmployed: true };
var optionalPerson = createOptionalPerson(newPerson);
console.log(optionalPerson);
function getVenicleType(vehicle) {
    // const make: VehicleMakeType = vehicle.make;
    // const year: VehicleYearType = vehicle.year;
    // const make = vehicle.make as VehicleMakeType;  // Явно указываем, что это VehicleMakeType
    // const year = vehicle.year as VehicleYearType;  // Явно указываем, что это VehicleYearType
    return "Make: ".concat(vehicle.make, ", Year: ").concat(vehicle.year);
}
;
var vehicle = { make: 'home work', model: 'ts', year: 2024 };
console.log(getVenicleType(vehicle));
function transformToUppercase(products) {
    return {
        PRODUCTID: products.productId,
        PRODUCTNAME: products.productName,
        PRICE: products.price,
    };
}
var products = {
    productId: 12,
    productName: 'milk',
    price: 100,
};
console.log(transformToUppercase(products));
// function isString(value: unknown): value is string {
//     return typeof value === 'string';
// }
// function isNumber(value: unknown): value is number {
//     return typeof value === 'number';
// }
// function isBoolean(value: unknown): value is boolean {
//     return typeof value === 'boolean';
// }
function createTransformedUserProfile(userProfile) {
    return {
        username: userProfile.username,
        age: userProfile.age,
        isAdmin: userProfile.isAdmin,
    };
}
var userProfile = {
    username: 'jonh',
    age: 23,
    isAdmin: false,
};
console.log(createTransformedUserProfile(userProfile));
function getBookType(book) {
    var title = book.title;
    var publishedYear = book.publishedYear;
    return "title: ".concat(title, " published year: ").concat(publishedYear);
}
var book = {
    title: 'JS',
    author: 'Kelian',
    publishedYear: 2019,
};
console.log(getBookType(book));
function transformToCamelCase(person) {
    return {
        FirstName: person.firstName,
        LastName: person.lastName,
        Age: person.age,
    };
}
var new_person = {
    firstName: 'Jonh',
    lastName: 'Doe',
    age: 25,
};
var tranformedPerson = transformToCamelCase(new_person);
console.log(tranformedPerson);
function convertToProfileModifier(employee) {
    return {
        fullName: employee.fullName,
        age: employee.age,
        isManager: employee.isManager,
    };
}
var employeePerson = {
    fullName: 'Jonh Doe',
    age: 30,
    isManager: true,
};
var convertedToProfileModifier = convertToProfileModifier(employeePerson);
convertedToProfileModifier.age = 33;
console.log(convertedToProfileModifier);
console.log(convertToProfileModifier(employeePerson));
// end home work 11
