/*
Домашнее задание №1: Динамическое изменение ключей с помощью Mapped Types
Создайте интерфейс Person с полями name, age, и address.
Используя Mapped Types, создайте тип UppercasePerson, где все ключи будут преобразованы в верхний регистр.
Напишите функцию, которая принимает объект Person и возвращает объект типа UppercasePerson.
 */
function toUppercasePerson(person) {
    var result = {};
    for (var key in person) {
        if (person.hasOwnProperty(key)) {
            var upperKey = key.toUpperCase();
            ;
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
function checkIfArray(value) {
    return (Array.isArray(value) ? 'array' : 'not array');
}
var item = {
    id: 123,
    name: 'test',
    quantity: [
        'test',
        'test1',
        'test3',
    ],
};
console.log(checkIfArray(item.quantity));
function getOrderDetails(order) {
    return {
        orderId: order.orderId,
        shipping: {
            address: order.shipping.address,
            method: order.shipping.method,
        }
    };
}
var order = {
    orderId: 123,
    items: ['test', 'test'],
    shipping: {
        address: 'test address',
        method: 'delivery payment',
    }
};
var convertedOrderDetails = getOrderDetails(order);
console.log(convertedOrderDetails);
function getUserSettings(settings) {
    return {
        preference: {
            theme: settings.preference.theme,
            language: settings.preference.language,
        }
    };
}
var settings = {
    userId: 23,
    preference: {
        theme: 'light',
        language: 'ru',
    }
};
var userSettings = getUserSettings(settings);
console.log(userSettings);
function getResponse(response) {
    if (Array.isArray(response)) {
        return response.map(function (item) { return item; });
    }
    return response;
}
var response = {
    statuses: 200,
    data: ['Success', 'Error']
};
console.log(getResponse(response.data));
function createProductCatalog(products) {
    return products.reduce(function (catalog, product) {
        catalog[product.id] = product;
        return catalog;
    }, {});
}
var products = [
    { id: "1", name: "Laptop" },
    { id: "2", name: "Smartphone" },
    { id: "3", name: "Tablet" }
];
var catalog = createProductCatalog(products);
console.log(catalog);
// end home work 
