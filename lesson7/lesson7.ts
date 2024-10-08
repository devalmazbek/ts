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




// end home work 6


