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
var userData = { name: "Alice", age: 25 };
function processUserData(userData, callback) {
    callback(userData);
    console.log(userData);
}
function incrementAge(userData) {
    userData.age += 1;
}
function changeName(userData) {
    userData.name = 'test';
}
console.log(processUserData(userData, incrementAge));
console.log(processUserData(userData, incrementAge));
console.log(processUserData(userData, changeName));
function updateProduct(product, updates) {
    return __assign(__assign({}, product), updates);
}
var initialProduct = {
    name: 'Laptop',
    price: 1200,
    available: true,
};
var update = updateProduct(initialProduct, { price: 1500 });
console.log(update);
var newUser = {
    id: 12,
    name: 'almaz',
    position: 'dev',
};
// newUser.id = 15;
function descriptionEmployee(employee) {
    return "".concat(employee.id, ", ").concat(employee.name, ", ").concat(employee.position);
}
console.log(descriptionEmployee(newUser));
