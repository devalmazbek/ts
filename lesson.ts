type User = {
  name: string;
  age: number;
}

// first homework
function sum(firstParam:number, secondParam:number) {
  return firstParam + secondParam;
}

function showStringLength(text: string) {
  return text.length;
}

function describeUser(user: User) {
  return `User ${user.name} is ${user.age} years old`;
}

const user = {name: 'almaz', age: 30}
console.log(describeUser(user))

console.log(sum(10, 10));
console.log(showStringLength('almaz'));

//end first homework

/*HW2*/
interface Car {
  brand: string;
  model: string;
  year: number;
  electric: boolean;
}


function showCarDescription(car: Car) {
  return `car brand ${car.brand},  model: ${car.model}, year: ${car.year}, electric: ${car.electric}`;
}

/*END HW@*/

const porsh = {
  brand: 'Porshe',
  model: 'Cayman',
  year: 2020,
  electric: true,
}

console.log(showCarDescription(porsh));


