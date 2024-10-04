function getFullName(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var person = { firstName: "John", lastName: "Doe" };
var fullName = getFullName(person);
console.log(fullName);
