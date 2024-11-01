/* Домашнее задание №1: Создание Partial и фильтрация полей
Создайте интерфейс Event с полями id, name, date, и location.
Используя Mapped Types, создайте новый тип OptionalEvent, где все поля будут опциональными (используйте утилиту Partial).
Напишите функцию, которая принимает объект Event и возвращает его копию типа OptionalEvent. */
// home work 1
interface Events {
    id: number;
    name: string;
    date: string;
    location: string;
}

type OptionalEvent = Partial<Events>;

function transformToOptionalEvent(event: Events): OptionalEvent {
    return {...event};
}

const events: Events = {
    id: 123,
    name: 'Nana',
    date: '12.12.2024',
    location: 'ru',
}

console.log(transformToOptionalEvent(events));

// end home work 1

/* Домашнее задание №2: Условные типы и пересечение типов
Создайте два интерфейса:
VideoContent с полями title, duration, и isHD.
AudioContent с полями title, duration, и isPodcast.
Используя Conditional Types, создайте тип ContentType<T>, который:
Если передан тип VideoContent, вернет строку "video".
Если передан тип AudioContent, вернет строку "audio".
Напишите функцию, которая принимает либо VideoContent, либо AudioContent и возвращает строку типа контента, используя тип ContentType. */

interface VideoContent {
    title: string;
    duration: string;
    isHD: boolean;
}

interface AudioContent {
    title: string;
    duration: string;
    isPodcast: boolean;
}

type ContentType<T> = T extends VideoContent ? "video" : T extends AudioContent ? "audio" : "unknown";

function getContentType<T extends VideoContent | AudioContent>(content: T): ContentType<T> {
    if(content.hasOwnProperty('isHD')) return "video" as ContentType<T>;
    if(content.hasOwnProperty('isPodcast')){
        return "audio" as ContentType<T>
    } else {
        return "unknow" as ContentType<T>;
    }
}

const firstContent: VideoContent = {
    title: 'test',
    duration: '123',
    isHD: true,
}

const secondContent: AudioContent = {
    title: 'test2',
    duration: '50',
    isPodcast: true,
}

console.log(getContentType(firstContent));
console.log(getContentType(secondContent));

/* Домашнее задание №3: Использование Exclude и Extract
Создайте интерфейс UserRoles с полями id, name, и role.
Создайте перечисление (enum) с ролями ADMIN, USER, и GUEST.
Используя утилиты Exclude и Extract, создайте два типа:
AdminRole — содержит только ADMIN.
NonAdminRoles — содержит только USER и GUEST.
Напишите функцию, которая принимает роль и возвращает соответствующее сообщение, используя эти типы. */

// home work 3
interface UserRoles {
    id: number;
    name: string;
    role: Roles;
}

const enum Roles {
    Admin = "Admin",
    User = "User",
    Guest = "Guest",
}

type AdminRole = Extract<Roles, Roles.Admin>;
type NonAdminRoles = Exclude<Roles, Roles.Admin>;


function getRole(role: Roles): string {
    if(role === Roles.Admin) return `Welcome ${role}`;

    if(role === Roles.User) return `Welcome ${role}`;

    if(role === Roles.Guest) return `Welcome ${role}`;

    return 'Invalid role'
}

const admin: AdminRole = Roles.Admin;
const new_users: NonAdminRoles = Roles.User;
const guest: NonAdminRoles = Roles.Guest;

console.log(getRole(admin));
console.log(getRole(new_users));
console.log(getRole(guest));

// end home work3 

/*Домашнее задание №1: Комплексная работа с Mapped Types
Создайте интерфейс Product с полями id, name, price, и category.
Используя Mapped Types, создайте новый тип ReadonlyProduct, где все поля будут readonly.
Напишите функцию, которая принимает объект Product и возвращает его копию типа ReadonlyProduct.*/

// home work 4
interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
}

type ReadonlyProduct = {
    readonly [K in  keyof Product]: Product[K];
}

function getReadOnlyProduct(product: Product): ReadonlyProduct {
    return {...product}
};

const product: Product = {
    id: '123',
    name: 'test',
    price: 500,
    category: 'test',
};

const readonlyProduct = getReadOnlyProduct(product);

// readonlyProduct.id = '456';


// end home work 4

/*Домашнее задание №2: Динамическая проверка типов с помощью Conditional Types
Создайте интерфейс Employee с полями id, name, position, и salary.
Используя Conditional Types, создайте тип IsString<T>, который возвращает "string type", если передан тип T — строка, и "not string type" в противном случае.
Напишите функцию, которая принимает любое поле объекта Employee и возвращает строку "string type" или "not string type" в зависимости от типа поля.*/

// home work 5
interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}

type IsString<T> = T extends string ? "string type" : "not string type";

function checkIfString<T>(value: T): IsString<T> {
    return(typeof value === 'string' ? "string type" : "not string type") as IsString<T>
}

const employees: Employee = { id: 1, name: "Alice", position: "Developer", salary: 5000 };

console.log(checkIfString(employees.id)); 

// end home work 5

/* 
Домашнее задание №3: Использование Record с динамическими ключами
Создайте интерфейс Country с полями name и code.
Используя утилиту Record, создайте тип CountryDirectory, который будет сопоставлять код страны (например, "US", "FR") с объектом Country.
Напишите функцию, которая принимает массив стран и возвращает объект типа CountryDirectory.
*/

// home work 6
interface Country {
    name: string;
    code: string;
}

type CountryDirectory = Record<string, Country>;

function createCountryDirectory(countries: Country[]): CountryDirectory {
    return countries.reduce<CountryDirectory>((directory, country) => {
        directory[country.code] = country;
        return directory;
    }, {});
}

const countries: Country[] = [
    { name: "United States", code: "US" },
    { name: "France", code: "FR" },
    { name: "Germany", code: "DE" }
];

const directory = createCountryDirectory(countries);
console.log(directory);


// home work 6

