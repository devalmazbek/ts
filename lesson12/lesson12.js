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
function transformToOptionalEvent(event) {
    return __assign({}, event);
}
var events = {
    id: 123,
    name: 'Nana',
    date: '12.12.2024',
    location: 'ru',
};
console.log(transformToOptionalEvent(events));
function getContentType(content) {
    if (content.hasOwnProperty('isHD'))
        return "video";
    if (content.hasOwnProperty('isPodcast')) {
        return "audio";
    }
    else {
        return "unknow";
    }
}
var firstContent = {
    title: 'test',
    duration: '123',
    isHD: true,
};
var secondContent = {
    title: 'test2',
    duration: '50',
    isPodcast: true,
};
console.log(getContentType(firstContent));
console.log(getContentType(secondContent));
function getRole(role) {
    if (role === "Admin" /* Roles.Admin */)
        return "Welcome ".concat(role);
    if (role === "User" /* Roles.User */)
        return "Welcome ".concat(role);
    if (role === "Guest" /* Roles.Guest */)
        return "Welcome ".concat(role);
    return 'Invalid role';
}
var admin = "Admin" /* Roles.Admin */;
var new_users = "User" /* Roles.User */;
var guest = "Guest" /* Roles.Guest */;
console.log(getRole(admin));
console.log(getRole(new_users));
console.log(getRole(guest));
function getReadOnlyProduct(product) {
    return __assign({}, product);
}
;
var product = {
    id: '123',
    name: 'test',
    price: 500,
    category: 'test',
};
var readonlyProduct = getReadOnlyProduct(product);
function checkIfString(value) {
    return (typeof value === 'string' ? "string type" : "not string type");
}
var employees = { id: 1, name: "Alice", position: "Developer", salary: 5000 };
console.log(checkIfString(employees.id));
function createCountryDirectory(countries) {
    return countries.reduce(function (directory, country) {
        directory[country.code] = country;
        return directory;
    }, {});
}
var countries = [
    { name: "United States", code: "US" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" }
];
var directory = createCountryDirectory(countries);
console.log(directory);
// home work 6
