/* Домашнее задание №1: Использование Key Remapping в Mapped Types
Создайте интерфейс Order с полями orderId, customerName, и totalAmount.
Используя Mapped Types с переназначением ключей, создайте тип ReadonlyOrder, где все поля из Order будут readonly.
Напишите функцию, которая принимает объект Order и возвращает его копию типа ReadonlyOrder. */

// home work 1

interface Order {
    orderId: number;
    customerName: string;
    totalAmount: number;
}

type ReadonlyOrder = {
    readonly [K in keyof Order]: Order[K];
}

function getOrder(order: Order): ReadonlyOrder {
    return {...order} as ReadonlyOrder;
}

const order: Order = {
    orderId: 123,
    customerName: 'Doe',
    totalAmount: 1000,
};

const readonlyOrder = getOrder(order);

// readonlyOrder.customerName = 'test';

// end home work 1

/*
Домашнее задание №2: Условные типы и создание опциональных полей
Создайте интерфейс Person с полями name, age, и isEmployed.
Используя Mapped Types и Conditional Types, создайте тип OptionalPerson, где:
Если тип поля — string, то оно становится необязательным.
Если тип поля — boolean, то оно становится readonly.
Напишите функцию, которая принимает объект Person и возвращает объект типа OptionalPerson. 
 */

// home work 2

interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
}

type OptionalPerson = {
    [K in keyof Person]: Person[K] extends string ? Person[K] | undefined : Person[K] extends boolean ? Readonly<Person[K]> : Person[K];
}

function transformToOptionalPerson(person: Person): OptionalPerson {
    return {...person} as OptionalPerson;
}

const person: Person = {
    name: 'test',
    age: 13,
    isEmployed: true,
};

const transformedPerson = transformToOptionalPerson(person);

transformedPerson.isEmployed = false;

// end home work 2

/* 
Домашнее задание №3: Расширенные Utility Types с Record и Union
Создайте интерфейс Task с полями taskId и taskDescription.
Используя Utility Types Record, создайте тип TaskRecord, который отображает taskId на объект Task.
Напишите функцию, которая принимает массив объектов Task и возвращает объект типа TaskRecord
 */

// home work 3

interface Task {
    taskId: string;
    taskDescription: string;
}

type TaskRecord = Record<string, Task>;

function createTaskRecord(tasks: Task[]): TaskRecord {
    return tasks.reduce((record, task) => {
        record[task.taskId] = task;
        return record;
    }, {} as TaskRecord);
}

const tasksArray: Task[] = [
    { taskId: "1", taskDescription: "Buy groceries" },
    { taskId: "2", taskDescription: "Clean the house" },
];

const taskRecord = createTaskRecord(tasksArray);

console.log(taskRecord);

// end home work3

/*

Отлично! Вот новые задания, чтобы углубить знания в Mapped Types, Conditional Types, и Utility Types.

Домашнее задание №1: Динамическое изменение типов с использованием Conditional Types
Создайте интерфейс Product с полями id, name, и price.
Используя Conditional Types, создайте тип IsNumber<T>, который:
Возвращает строку "number type", если передан тип T — число.
Возвращает строку "not number type", если передан любой другой тип.
Напишите функцию, которая принимает любое поле из объекта Product и возвращает "number type" или "not number type" в зависимости от типа переданного значения. 
 */

// home work 4

interface Product {
    id: string;
    name: string;
    price: number;
}

type IsNumber<T> = T extends number ? "number type" : "not number type";

function checkNumberType<T>(value: T): IsNumber<T> {
    return (typeof value == 'number' ? "number type" : "not number type") as IsNumber<T>;
}

const product: Product = {
    id: '123',
    name: 'string',
    price: 123,
};

console.log(checkNumberType(product.name));
console.log(checkNumberType(product.price));

// end homew work 4

/* Домашнее задание №2: Работа с Record и Array для создания сопоставлений
Создайте интерфейс Country с полями name и code.
Используя утилиту Record, создайте тип CountryDirectory, где ключ — это код страны (code), а значение — объект Country.
Напишите функцию, которая принимает массив объектов типа Country и возвращает объект типа CountryDirectory. */

// home work 5

interface Country {
    name: string;
    code: string;
}

type CountryDirectory = Record<string, Country>;

function transformToCountryDirectory(countries: Country[]): CountryDirectory {
    return countries.reduce((record, country) => {
        record[country.code] = country;
        return record;
    }, {} as CountryDirectory);
}


const counties: Country[] = [
    {name: 'Kyrgyzstan', code: 'KG'},
    {name: 'Kazahstan', code: 'KZ'},
];

const transdormedCountries = transformToCountryDirectory(counties);

console.log(transdormedCountries);

// home work 5

/*
Домашнее задание №3: Дополнительное преобразование полей с Record и Mapped Types
Создайте интерфейс Task с полями taskId и taskDescription.
Используя утилиту Record и Mapped Types, создайте тип TaskRecord, который будет сопоставлять taskId с объектом Task.
Напишите функцию, которая принимает массив Task и возвращает объект типа TaskRecord.*/

// home work 6

interface Tasks {
    taskId: number;
    taskDescription: string;
} 

type TasksRecord = Record<number, Tasks>;

function createTasksRecord(tasks: Tasks[]): TasksRecord {
    return tasks.reduce((record, task) => {
        record[task.taskId] = task;
        return record;
    }, {} as TasksRecord);
}

const tasks: Tasks[] = [
    { taskId: 1, taskDescription: "Buy groceries" },
    { taskId: 1, taskDescription: "Clean the house" },
];

const tasksRecord = createTaskRecord(tasksArray);
console.log(tasksRecord);

// end home work 6