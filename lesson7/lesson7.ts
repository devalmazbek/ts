/* Тогда давайте познакомимся с новой темой — Indexed Access Types (Типы доступа по индексу) и Key Remapping in Mapped Types (Переназначение ключей в сопоставленных типах). Это важные аспекты TypeScript, которые позволят вам глубже управлять типами данных.

Тема 1: Indexed Access Types (Типы доступа по индексу)
Indexed Access Types позволяют вам получить тип конкретного свойства объекта или массива. Они работают так же, как доступ к элементам объекта с использованием квадратных скобок, но на уровне типов. */

/* 
пример
interface Person {
    name: string;
    age: number;
    location: string;
}

type NameType = Person['name']; // string 
Здесь Person['name'] означает, что мы берем тип свойства name из интерфейса Person. В результате NameType станет string.

Это особенно полезно, если вы хотите создать обобщенные типы, которые зависят от ключей других типов.

*/

/* 
Тема 2: Key Remapping in Mapped Types (Переназначение ключей в сопоставленных типах)
Переназначение ключей в сопоставленных типах позволяет изменять ключи объекта при создании нового типа. Это мощная техника, которая помогает создавать новые типы на основе существующих.

Пример:
ts
Копировать код
type Person = {
  name: string;
  age: number;
};

type RenamedPerson = {
  [K in keyof Person as `new_${K}`]: Person[K];
};

// Результат:
{
  new_name: string;
  new_age: number;
}
Здесь мы переименовали ключи объекта Person, добавив префикс new_. Это может быть полезно при создании типов с измененными ключами на основе оригинального объекта. */

/*

Домашнее задание №1: Indexed Access Types
Создайте интерфейс Product с полями name, price, и category.
Создайте тип ProductNameType, который будет представлять тип поля name из интерфейса Product.
Напишите функцию, которая принимает объект Product и возвращает его имя, используя тип ProductNameType.

 */

// home work 1

interface Product {
    name: string;
    price: number;
    category: string;
}

type ProductNameType = Product['name'];


function getProductName(product: Product): ProductNameType {
    return product.name;
}

const product: Product = {
    name: "Smartphone",
    price: 699,
    category: "Electronics",
};

console.log(getProductName(product));

// end home work 1


// home work 2

/*
Домашнее задание №2: Key Remapping in Mapped Types
Создайте интерфейс User с полями id, name, и email.
Используйте сопоставленные типы для создания нового типа PrivateUser, где все ключи будут переназначены с префиксом private_ (например, private_id, private_name, и т.д.).
Напишите функцию, которая принимает объект User и возвращает новый объект типа PrivateUser.
 */

interface User {
    id: number;
    name: string;
    email: string;
}

type PrivateUser = {
    [K in keyof User as `private_${K}`]: User[K];
}


function transformToPrivateUser(user: User): PrivateUser {
    return {
        private_id: user.id,
        private_name: user.name,
        private_email: user.email
    };
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
}

const privateUser = transformToPrivateUser(user);

console.log(privateUser);



// end home work 2



/* 
Домашнее задание №1: Indexed Access Types
Создайте интерфейс Employee с полями name, position, и salary.
Создайте типы EmployeeNameType и EmployeeSalaryType, которые будут представлять типы полей name и salary соответственно.
Напишите функцию, которая принимает объект Employee и возвращает строку с именем и зарплатой, используя типы EmployeeNameType и EmployeeSalaryType.

*/

// home work 3

interface Employee {
    name: string;
    position: string;
    salary: number;
}

type EmployeeNameType = Employee['name'];
type EmployeeSalaryType = Employee['salary'];

function getEmployeeNameSalary(employee: Employee): string {
    return `name: ${employee.name}, salary: ${employee.salary}`;
}

const jonh: Employee = {name: 'jonh', position: 'developer', salary: 1500};

console.log(getEmployeeNameSalary(jonh));

// end home work 3

/* 
Домашнее задание №2: Key Remapping in Mapped Types
Создайте интерфейс Order с полями orderId, customerName, и totalAmount.
Используя сопоставленные типы, создайте новый тип ReadonlyOrder, где все поля объекта Order будут помечены как readonly.
Напишите функцию, которая принимает объект Order и возвращает объект типа ReadonlyOrder.
*/

// home work 4

interface Order {
    orderId: number;
    customerName: string;
    totalAmount: number;
}

// type ReadonlyOrder = {
//     readonly [K in keyof Order]: Order[K];
//   };

type ReadonlyOrder = Readonly<Order>;


function transformToReadOnlyType(order: Order): ReadonlyOrder {
    return {...order};
}

const order: Order = {orderId: 12, customerName: 'Jonh', totalAmount: 200};

const readonlyOrder = transformToReadOnlyType(order);

console.log(readonlyOrder);

// home work 4

/* Домашнее задание №3: Key Remapping with Conditional Types
Создайте интерфейс Person с полями name, age, и isEmployed.
Используйте сопоставленные типы и условные типы, чтобы создать новый тип OptionalPerson, где:
Если поле имеет тип string, оно должно стать необязательным.
Если поле имеет тип boolean, оно должно стать readonly.
Напишите функцию, которая принимает объект Person и возвращает объект типа OptionalPerson. */

// home work 5


interface Persons {
    name: string;
    age: number;
    isEmployed: boolean;
}

type OptionalPerson = {
    [K in keyof Persons]: 
      Persons[K] extends string ? Persons[K] | undefined : // если тип string, поле станет необязательным
      Persons[K] extends boolean ? Readonly<Persons[K]>  : // если тип boolean, поле станет readonly
      Persons[K]; // для остальных типов
};


function createOptionalPerson(person: Persons): OptionalPerson {
    return {
        name: person.name,
        age: person.age,
        isEmployed: person.isEmployed as Readonly<boolean>
    };
}

const newPerson: Persons = { name: "John", age: 30, isEmployed: true };

const optionalPerson: OptionalPerson = createOptionalPerson(newPerson);

console.log(optionalPerson);

// end home work 5

/* Домашнее задание №1: Indexed Access Types
Создайте интерфейс Vehicle с полями make, model, и year.
Создайте типы VehicleMakeType и VehicleYearType, которые будут представлять типы полей make и year соответственно.
Напишите функцию, которая принимает объект Vehicle и возвращает строку формата "Make: {make}, Year: {year}", используя типы VehicleMakeType и VehicleYearType. */

// home work 6

interface Vehicle {
    make: string;
    model: string;
    year: number;
}

type VehicleMakeType = Vehicle['make'];
type VehicleYearType = Vehicle['year'];


function getVenicleType(vehicle: Vehicle): string {
    // const make: VehicleMakeType = vehicle.make;
    // const year: VehicleYearType = vehicle.year;
    // const make = vehicle.make as VehicleMakeType;  // Явно указываем, что это VehicleMakeType
    // const year = vehicle.year as VehicleYearType;  // Явно указываем, что это VehicleYearType

    return `Make: ${vehicle.make}, Year: ${vehicle.year}`
};


const vehicle = {make: 'home work', model: 'ts', year: 2024};
console.log(getVenicleType(vehicle));


// end home work 6

/* Домашнее задание №2: Key Remapping in Mapped Types
Создайте интерфейс Product с полями productId, productName, и price.
Используя сопоставленные типы, создайте новый тип UppercaseProduct, где все ключи объекта Product будут в верхнем регистре (например, PRODUCT_ID, PRODUCT_NAME, PRICE).
Напишите функцию, которая принимает объект Product и возвращает объект типа UppercaseProduct. */


// home work 7

interface Products {
    productId: number;
    productName: string;
    price: number;
}

type UppercaseProduct = {
    [K in keyof Products as Uppercase<K & string>]: Products[K];
};

function transformToUppercase(products: Products): UppercaseProduct {
    return {
        PRODUCTID: products.productId,
        PRODUCTNAME: products.productName,
        PRICE: products.price,
    };
}

const products: Products = {
    productId: 12,
    productName: 'milk',
    price: 100,
};

console.log(transformToUppercase(products));

// end home work 7

/*
Домашнее задание №3: Key Remapping with Conditional Types
Создайте интерфейс UserProfile с полями username, age, и isAdmin.
Используйте сопоставленные типы и условные типы, чтобы создать новый тип TransformedUserProfile, где:
Если поле имеет тип string, оно становится необязательным.
Если поле имеет тип boolean, оно становится readonly.
Если поле имеет тип number, оно остается без изменений.
Напишите функцию, которая принимает объект UserProfile и возвращает объект типа TransformedUserProfile.

 */

// home work 8
interface UserProfile {
    username: string;
    age: number;
    isAdmin: boolean;
}

type TransformedUserProfile = {
    [K in keyof UserProfile]:
    UserProfile[K] extends string ? UserProfile[K] | undefined : // если тип string, поле станет необязательным
    UserProfile[K] extends boolean ? Readonly<UserProfile[K]>  : // если тип boolean, поле станет readonly
    UserProfile[K];
}

// function isString(value: unknown): value is string {
//     return typeof value === 'string';
// }

// function isNumber(value: unknown): value is number {
//     return typeof value === 'number';
// }

// function isBoolean(value: unknown): value is boolean {
//     return typeof value === 'boolean';
// }

function createTransformedUserProfile(userProfile: UserProfile): TransformedUserProfile {
    return {
        username: userProfile.username,
        age: userProfile.age,
        isAdmin: userProfile.isAdmin as Readonly<boolean>,
    }
}

const userProfile: UserProfile = {
    username: 'jonh',
    age: 23,
    isAdmin: false,
};

console.log(createTransformedUserProfile(userProfile));

// end home work 8


/* 
Домашнее задание №1: Indexed Access Types
Создайте интерфейс Book с полями title, author, и publishedYear.
Используйте Indexed Access Types, чтобы создать типы BookTitleType и BookPublishedYearType, которые будут представлять типы полей title и publishedYear.
Напишите функцию, которая принимает объект типа Book и возвращает его название и год публикации, используя типы, созданные с помощью Indexed Access Types.
*/

// home work 9

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

type BookTitleType = Book['title'];
type BookPublishedYearType = Book['publishedYear'];

function getBookType(book: Book): string {
    const title: BookTitleType = book.title;
    const publishedYear: BookPublishedYearType = book.publishedYear;

    return `title: ${title} published year: ${publishedYear}`;
}


const book: Book = {
    title: 'JS',
    author: 'Kelian',
    publishedYear: 2019,
};

console.log(getBookType(book));

// end home work 9

/* Домашнее задание №2: Key Remapping in Mapped Types
Создайте интерфейс Person с полями firstName, lastName, и age.
Используя Mapped Types, создайте новый тип CamelCasePerson, где все ключи объекта Person будут преобразованы в camelCase (например, first_name станет firstName).
Напишите функцию, которая принимает объект Person и возвращает объект типа CamelCasePerson. */

// home work 10

interface PERSON {
    firstName: string;
    lastName: string;
    age: number;
}

type CamelCasePerson = {
    [K in keyof PERSON as Capitalize<K & string>]: PERSON[K];
}


function transformToCamelCase(person: PERSON): CamelCasePerson {
    return {
        FirstName: person.firstName,
        LastName: person.lastName,
        Age: person.age,
    }
}

const new_person: PERSON = {
    firstName: 'Jonh',
    lastName: 'Doe',
    age: 25,
};

const tranformedPerson = transformToCamelCase(new_person);


console.log(tranformedPerson);

// end home work 10

/*
Домашнее задание №3: Conditional Types
Создайте интерфейс EmployeeProfile с полями fullName, age, и isManager.
Используя Conditional Types, создайте новый тип ProfileModifier, где:
Если поле имеет тип string, оно становится необязательным.
Если поле имеет тип number, оно становится readonly.
Если поле имеет тип boolean, оно становится обязательным (без изменений).
Напишите функцию, которая принимает объект EmployeeProfile и возвращает объект типа ProfileModifier 
 */

// home work 11

interface EmployeeProfile {
    fullName: string;
    age: number;
    isManager: boolean;
}

type ProfileModifier = {
    [K in keyof EmployeeProfile] : 
    EmployeeProfile[K] extends string ? EmployeeProfile[K] | undefined :
    EmployeeProfile[K] extends number ? Readonly<EmployeeProfile[K]> :
    EmployeeProfile[K];
}

function convertToProfileModifier(employee: EmployeeProfile): ProfileModifier {
    return {
        fullName: employee.fullName,
        age: employee.age as Readonly<number>,
        isManager: employee.isManager,
    }
}

const employeePerson: EmployeeProfile = {
    fullName: 'Jonh Doe',
    age: 30,
    isManager: true,
}

const convertedToProfileModifier = convertToProfileModifier(employeePerson);

convertedToProfileModifier.age = 33;

console.log(convertedToProfileModifier);
console.log(convertToProfileModifier(employeePerson));

// end home work 11



