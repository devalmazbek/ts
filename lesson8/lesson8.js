/*
Домашнее задание №1: Mapped Types с модификаторами
Создайте интерфейс Car с полями brand, model, и year.
Используя Mapped Types, создайте новый тип OptionalCar, где все поля объекта Car будут необязательными.
Напишите функцию, которая принимает объект Car и возвращает новый объект типа OptionalCar.
 */
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
// type OptionalCar = Partial<Car>;
function convertToOptionalCarType(car) {
    return {
        brand: car.brand,
        model: car.model,
        year: car.year,
    };
}
var car = {
    brand: 'KIA',
    model: 'K7',
    year: 2024,
};
var convertedCar = convertToOptionalCarType(car);
console.log(convertedCar);
function convertToPartialEmployee(employee) {
    return {
        id: employee.id,
        name: employee.name,
        salary: employee.salary,
    };
}
var employee = {
    id: 123,
    name: 'Piter',
    position: 'developer',
    salary: 2000,
};
var partialEmployee = convertToPartialEmployee(employee);
console.log(partialEmployee);
function getApiEndpoints(endpoint) {
    return "/api/".concat(endpoint.resource, "/").concat(endpoint.action);
}
var endpoint = {
    resource: 'category',
    action: 'get',
};
var categoryApi = getApiEndpoints(endpoint);
console.log(categoryApi);
function getReadOnlyUser(user) {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified
    };
}
var user = {
    id: 12,
    username: 'jonh',
    email: 'test@gmail.com',
    isVerified: true,
};
var convertedToReadOnly = getReadOnlyUser(user);
console.log(convertedToReadOnly);
function checkIsNumber(value) {
    return (typeof value === 'number' ? "numeric" : "non-numeric");
}
var phone = {
    name: 'phone',
    price: '23',
    inStock: true,
};
console.log(checkIsNumber(phone.price));
function convertToDraftPostType(post) {
    return {
        id: post.id,
        title: post.title,
        content: post.content
    };
}
var post = {
    id: 123,
    title: 'ts',
    content: 'test content',
    published: false,
};
var convertedToDraftPost = convertToDraftPostType(post);
console.log(convertedToDraftPost);
function convertToMutableSetting(settings) {
    return __assign({}, settings);
}
var settings = {
    theme: 'dark',
    notificationsEnabled: true,
    language: 'EN',
};
var convertedToMutableSetting = convertToMutableSetting(settings);
convertedToMutableSetting.theme = 'light';
function checkIfEmailIsString(value) {
    return (typeof value === 'string' ? "email is string" : "email is not string");
}
var order = {
    orderId: 123,
    customer: {
        name: 'jonh',
        email: 'test@mail.com'
    },
    details: 'test details',
};
var checkString = checkIfEmailIsString(order.customer.email);
console.log(checkString);
function convertToPublicProfileType(user) {
    return {
        username: user.username,
        avatar: user.avatar,
    };
}
;
var userProfiles = {
    id: 12,
    username: 'Doe',
    bio: 'test',
    avatar: 'test',
};
var convertedToPublicProfile = convertToPublicProfileType(userProfiles);
console.log(convertedToPublicProfile);
// home work 9
