// home work 1

// 1. Определим интерфейсы для животных
interface Cat {
    type: 'cat';
    name: string;
    breed: string;
  }
  
  interface Dog {
    type: 'dog';
    name: string;
    breed: string;
  }
  
  interface Bird {
    type: 'bird';
    name: string;
    canFly: boolean;
  }
  
  // 2. Функция Type Guard для каждого типа животного
  function isCat(animal: Cat | Dog | Bird): animal is Cat {
    return animal.type === 'cat';
  }
  
  function isDog(animal: Cat | Dog | Bird): animal is Dog {
    return animal.type === 'dog';
  }
  
  function isBird(animal: Cat | Dog | Bird): animal is Bird {
    return animal.type === 'bird';
  }
  
  // 3. Функция для описания животного
  function describeAnimal(animal: Cat | Dog | Bird): string {
    if (isCat(animal)) {
      return `This is a cat named ${animal.name}, breed: ${animal.breed}.`;
    } else if (isDog(animal)) {
      return `This is a dog named ${animal.name}, breed: ${animal.breed}.`;
    } else if (isBird(animal)) {
      return `This is a bird named ${animal.name}. It ${animal.canFly ? 'can fly' : 'cannot fly'}.`;
    }
    return 'Unknown animal';
  }
  
  // Пример использования
  const myCat: Cat = { type: 'cat', name: 'Whiskers', breed: 'Siamese' };
  const myDog: Dog = { type: 'dog', name: 'Buddy', breed: 'Labrador' };
  const myBird: Bird = { type: 'bird', name: 'Tweety', canFly: true };
  
  console.log(describeAnimal(myCat)); 
  console.log(describeAnimal(myDog)); 
  console.log(describeAnimal(myBird)); 
  


// end home work 1

// home work 2

// 1. Условный тип IsNumber<T>
type IsNumber<T> = T extends number ? "number" : "not a number";

// 2. Функция для проверки типа
function checkIfNumber<T>(value: T): IsNumber<T> {
  return (typeof value === "number" ? "number" : "not a number") as IsNumber<T>;
}

// Пример использования
console.log(checkIfNumber(42));        // "number"
console.log(checkIfNumber("hello"));   // "not a number"
console.log(checkIfNumber(true));      // "not a number"
console.log(checkIfNumber(3.14));      // "number"



// end home work 2



// home work 3

type FullName<FirstName extends string, LastName extends string> = `${FirstName}, ${LastName}`;

interface Person {
    firstName: string;
    lastName: string;
} 

function getFullName<T extends Person>(person: T): FullName<T['firstName'], T['lastName']> {
    return `${person.firstName} ${person.lastName}` as FullName<T['firstName'], T['lastName']>
}

const personInfo = { firstName: "John", lastName: "Doe" };

console.log(getFullName(personInfo)); 

// end home work 3