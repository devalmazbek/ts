var VehicleType;
(function (VehicleType) {
    VehicleType["Car"] = "Car";
    VehicleType["Truck"] = "Truck";
    VehicleType["Motorcycle"] = "Motorcycle";
})(VehicleType || (VehicleType = {}));
function descriptionType(text) {
    return ("type of parameter is ".concat(typeof (text)));
}
function describeVehicle(vehicleType) {
    switch (vehicleType) {
        case VehicleType.Car:
            return "This is a car, a four-wheeled motor vehicle typically used for transportation.";
        case VehicleType.Truck:
            return "This is a truck, a large motor vehicle designed to transport goods.";
        case VehicleType.Motorcycle:
            return "This is a motorcycle, a two-wheeled motor vehicle that is fast and agile.";
        default:
            return "Unknown vehicle type.";
    }
}
function firstElement(item) {
    return item[0];
}
var user = { name: "Alice", age: 25 };
function processUserData(user, callback) {
    callback(user);
    console.log(user);
}
function incrementAge(user) {
    user.age += 1;
}
function changeName(user) {
    user.name = 'test';
}
console.log(processUserData(user, incrementAge));
console.log(processUserData(user, incrementAge));
console.log(processUserData(user, changeName));
