/*
Домашнее задание №1: Mapped Types с модификаторами
Создайте интерфейс Car с полями brand, model, и year.
Используя Mapped Types, создайте новый тип OptionalCar, где все поля объекта Car будут необязательными.
Напишите функцию, которая принимает объект Car и возвращает новый объект типа OptionalCar. 
 */


// home work 1
interface Car {
    brand: string;
    model: string;
    year: number;
}

type OptionalCar = {
    [K in keyof Car]: Car[K] | undefined;
}

// type OptionalCar = Partial<Car>;

function convertToOptionalCarType(car: Car): OptionalCar {
    return {
        brand: car.brand,
        model: car.model,
        year: car.year,
    }
}

const car: Car = {
    brand: 'KIA',
    model: 'K7',
    year: 2024,
}

const convertedCar: OptionalCar = convertToOptionalCarType(car);

console.log(convertedCar);


// end home work 1 

/* 
Домашнее задание №2: Utility Types
Создайте интерфейс Employee с полями id, name, position, и salary.
Используйте утилитарный тип Partial, чтобы создать тип PartialEmployee, где все поля объекта Employee будут необязательными.
Напишите функцию, которая принимает объект Employee и объект с изменениями полей (типа PartialEmployee) и возвращает обновленный объект Employee.
 */

// home work 2

interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

type PartialEmployee = Partial<Employee>;


function convertToPartialEmployee(employee: Employee): PartialEmployee {
    return {
        id: employee.id,
        name: employee.name,
        salary: employee.salary,
    }
}

const employee: Employee = {
    id: 123,
    name: 'Piter',
    position: 'developer',
    salary: 2000,
}

const partialEmployee = convertToPartialEmployee(employee);

console.log(partialEmployee);


// end home work 2

/* Домашнее задание №3: Template Literal Types
Создайте шаблонный строковый тип URL, который создаёт строку формата /api/{Resource}/{Action}, где Resource — это тип с именем сущности, а Action — это строка с названием действия (например, get, post).
Напишите функцию, которая принимает параметры resource и action и возвращает строку в формате, соответствующем типу URL. */

// home work 3

interface Endpoint {
    resource: string;
    action: string;
}

type ApiEndpoints<Resource extends string, Action extends string> = `/api/${Resource}/${Action}`;

function getApiEndpoints<T extends Endpoint>(endpoint: T): ApiEndpoints<T['resource'], T['action']> {
    return `/api/${endpoint.resource}/${endpoint.action}` as ApiEndpoints<T['resource'], T['action']>;
}

const endpoint: Endpoint = {
    resource: 'category',
    action: 'get',
}

const categoryApi = getApiEndpoints(endpoint);

console.log(categoryApi);

// end home work3

/* 
Домашнее задание №1: Mapped Types с модификаторами
Создайте интерфейс User с полями id, username, email, и isVerified.
Используя Mapped Types, создайте новый тип ReadonlyUser, где все поля объекта User будут помечены как readonly.
Напишите функцию, которая принимает объект User и возвращает объект типа ReadonlyUser.
*/

// home work 4

interface User {
    id: number;
    username: string;
    email: string;
    isVerified: boolean;
}

type ReadonlyUser = Readonly<User>;

function getReadOnlyUser(user: User): ReadonlyUser {
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified
    }
}

const user = {
    id: 12,
    username: 'jonh',
    email: 'test@gmail.com',
    isVerified: true,
};

const convertedToReadOnly = getReadOnlyUser(user);

console.log(convertedToReadOnly);

// end home work 4

/* 
Домашнее задание №2: Conditional Types с проверкой типов
Создайте интерфейс Product с полями name, price, и inStock.
Используя Conditional Types, создайте новый тип PriceType, который будет проверять:
Если тип поля price — это number, возвращать строку "numeric".
В противном случае возвращать "non-numeric".
Напишите функцию, которая принимает объект типа Product и возвращает результат проверки типа поля price, используя тип PriceType.
*/

// home work 5

interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

type PriceType<T> = T extends number ? "numeric" : "non-numeric";

function checkIsNumber<T>(value: T): PriceType<T> {
    return (typeof value === 'number' ? "numeric" : "non-numeric") as PriceType<T>
}

const phone = {
    name: 'phone',
    price: '23',
    inStock: true,
}

console.log(checkIsNumber(phone.price));

// end home work 5


/*
Домашнее задание №3: Utility Types
Создайте интерфейс Post с полями id, title, content, и published.
Используя утилитарный тип Omit, создайте новый тип DraftPost, где будет отсутствовать поле published.
Напишите функцию, которая принимает объект типа Post и возвращает объект типа DraftPost.

 */

// home work 6

interface Post {
    id: number;
    title: string;
    content: string;
    published: boolean;
}

type DraftPost = Omit<Post, 'published'>;

function convertToDraftPostType(post: Post): DraftPost {
    return {
        id: post.id,
        title: post.title,
        content: post.content
    }
}

const post: Post = {
    id: 123,
    title: 'ts',
    content: 'test content',
    published: false,
};

const convertedToDraftPost = convertToDraftPostType(post);

console.log(convertedToDraftPost);

// home work 6


/* 
Домашнее задание №1: Mapped Types с модификаторами
Создайте интерфейс Settings с полями theme, notificationsEnabled, и language.
Используя Mapped Types, создайте новый тип MutableSettings, где все поля будут изменяемыми (не readonly).
Напишите функцию, которая принимает объект типа Settings и возвращает его копию типа MutableSettings.
 */

// home work 7
interface Settings {
    readonly theme: string;
    readonly notificationsEnabled: boolean;
    readonly language: string;
}

type MutableSettings = {
    -readonly [K in  keyof Settings]: Settings[K];
};

function convertToMutableSetting(settings: Settings): MutableSettings {
    return { ...settings };
}

const settings: Settings = {
    theme: 'dark',
    notificationsEnabled: true,
    language: 'EN',
}

const convertedToMutableSetting = convertToMutableSetting(settings);

convertedToMutableSetting.theme = 'light';

// end home work 7

/* Домашнее задание №2: Conditional Types для проверки вложенных типов
Создайте интерфейс Order с полями orderId, customer, и details.
Поле customer должно быть объектом с полями name и email.
Используя Conditional Types, создайте новый тип IsEmailString, который проверяет, является ли поле email строкой. Если да — вернуть "email is string", если нет — "email is not string".
Напишите функцию, которая проверяет, соответствует ли поле email этому условию.
*/

// home work 8

interface Order {
    orderId: number;
    customer: {
        name: string;
        email: string;
    };
    details: string;
}

type IsEmailString<T> = T extends string ? "email is string" : "email is not string";

function checkIfEmailIsString<T>(value: T): IsEmailString<T> {
    return (typeof value === 'string' ? "email is string" : "email is not string") as IsEmailString<T>;
}

const order: Order = {
    orderId: 123,
    customer: {
        name: 'jonh',
        email: 'test@mail.com'
    },
    details: 'test details',
};

const checkString = checkIfEmailIsString(order.customer.email);

console.log(checkString);

// end home work 8

/* 
Домашнее задание №3: Utility Types с Pick
Создайте интерфейс UserProfile с полями id, username, bio, и avatar.
Используя Utility Types, создайте тип PublicProfile, который содержит только username и avatar из UserProfile.
Напишите функцию, которая принимает объект UserProfile и возвращает объект типа PublicProfile.
*/

// home work 9

interface UserProfiles {
    id: number;
    username: string;
    bio: string;
    avatar: string;
}

type PublicProfile = Pick<UserProfiles, 'avatar' | 'username'>;

function convertToPublicProfileType(user: UserProfiles): PublicProfile {
    return{
        username: user.username,
        avatar: user.avatar,
    }
};

const userProfiles: UserProfiles = {
    id: 12,
    username: 'Doe',
    bio: 'test',
    avatar: 'test',
};

const convertedToPublicProfile = convertToPublicProfileType(userProfiles);

console.log(convertedToPublicProfile);

// home work 9