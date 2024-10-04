// home work 1

interface HasId {
    id: number;
}


function printId<T extends HasId>(obj: T) : void {
    console.log(obj.id);
}

printId({id: 123});


// home work 2

interface Person {
    name: string;
    age: number;
    email: string;
}

type OptionalPerson = Partial<Person>;

function getPersonInfo(person: OptionalPerson): string {
    const name = person.name ?? 'Unknown';
    const age = person.age ?? 0;
    const email = person.email ?? 'Unkonown'

    return `Name ${name}, age ${age}, email ${email}`;
}

const almaz: OptionalPerson = {name: 'almaz'};
const adilet: OptionalPerson = {name: 'adilet', age: 15, email: 'test@gmail.com'};

console.log(getPersonInfo(almaz));
console.log(getPersonInfo(adilet));


// home work 3

function isString(value: unknown): value is string {
    return typeof value === 'string';
  }
  
function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }
  
function processValue(value: string | number): string {
    if (isString(value)) {
        return `The string has length: ${value.length}`;
    } else if (isNumber(value)) {
        return `The square of the number is: ${value * value}`;
    }

    return `Invalid value`;;
  }


  


  





