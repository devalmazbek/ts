/* Домашнее задание №1: Модификация и преобразование ключей с помощью Mapped Types
Создайте интерфейс Profile с полями id, firstName, lastName, и email.
Используя Mapped Types, создайте новый тип SnakeCaseProfile, где все ключи будут преобразованы в snake_case (например, first_name вместо firstName).
Напишите функцию, которая принимает объект Profile и возвращает объект типа SnakeCaseProfile.
 */
// home work 1

// Интерфейс Profile
interface Profile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

// Тип для преобразования в snake_case
type SnakeCase<T extends string> = 
    T extends `${infer First}${infer Rest}`
        ? `${First extends Capitalize<First> ? "_" : ""}${Lowercase<First>}${SnakeCase<Rest>}`
        : "";

// Применение Mapped Types для преобразования ключей Profile в snake_case
type SnakeCaseProfile = {
    [K in keyof Profile as SnakeCase<K & string>]: Profile[K];
};

// Функция для преобразования объекта Profile в SnakeCaseProfile
function toSnakeCaseProfile(profile: Profile): SnakeCaseProfile {
    const result: any = {};
    
    for (const key in profile) {
        const snakeCaseKey = key.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
        result[snakeCaseKey] = profile[key];
    }

    return result;
}

// Пример использования
const profile: Profile = {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com"
};

const snakeCaseProfile = toSnakeCaseProfile(profile);

console.log(snakeCaseProfile);


// end home work1

/*
Домашнее задание №2: Условные типы и сложные проверки
Создайте интерфейс Config с полями debug (boolean) и maxRetries (number).
Используя Conditional Types, создайте новый тип IsBoolean<T>, который проверяет, является ли тип T boolean. Если это так, вернуть "boolean type", иначе "not boolean type".
Напишите функцию, которая принимает любое поле из Config и проверяет, является ли оно типом boolean или нет, используя тип IsBoolean<T>. 
 */
// home work 2

interface Config {
    debug: boolean;
    maxRetries: number;
}

type IsBoolean<T> = T extends boolean ? "boolean type" : "not boolean type";

function checkIsBoolean<T extends keyof Config>(key: T, value: Config[T]): IsBoolean<Config[T]> {
    return (typeof value === 'boolean' ? "boolean type" : "not boolean type") as IsBoolean<Config[T]>;
}

const config: Config = {
    debug: true,
    maxRetries: 10,
};

console.log(checkIsBoolean("debug", config.debug));
console.log(checkIsBoolean("maxRetries", config.maxRetries));

// end home work 2


/*
Домашнее задание №3: Utility Types с Record и динамическими ключами
Создайте интерфейс Country с полями name и code.
Используя утилитарный тип Record, создайте тип CountryMap, который будет отображать код страны (например, "US", "FR") на соответствующий объект Country.
Напишите функцию, которая принимает массив стран и возвращает объект типа CountryMap 
 */

// home work 3
interface Country {
    name: string;
    code: string;
}

type CountryMap = Record<string, Country>;

function createCountryMap(countries: Country[]): CountryMap {
    return countries.reduce<CountryMap>((map, country) => {
        map[country.code] = country;
        return map;
    }, {});
}


const countries: Country[] = [
    { name: "United States", code: "US" },
    { name: "France", code: "FR" },
    { name: "Japan", code: "JP" },
];

const countryMap = createCountryMap(countries);
console.log(countryMap);

// end home work 3


