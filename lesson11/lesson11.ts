/*
Домашнее задание №1: Динамическое изменение типов с помощью Mapped и Conditional Types
Создайте интерфейс User с полями id, name, email, и isActive.
Используя Mapped Types и Conditional Types, создайте тип NullableUser, где:
Если поле имеет тип string, оно может быть либо строкой, либо null.
Все остальные поля остаются без изменений.
Напишите функцию, которая принимает объект типа User и возвращает его копию типа NullableUser. 
 */

// home work 1

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

type NullableUser = {
    [K in keyof User]: User[K] extends string  ? string | null : User[K];
};

function createNullableUser(user: User): NullableUser {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}

const user: NullableUser = {
    id: 1,
    name: null,
    email: "test@example.com",
    isActive: true,
  };


console.log(createNullableUser(user));


// end home work 1


/* Домашнее задание №2: Обратное преобразование с помощью Readonly и Mutable
Создайте интерфейс Settings с полями theme, notificationsEnabled, и language.
Создайте два типа:
ReadonlySettings — все поля становятся readonly.
MutableSettings — все поля становятся изменяемыми.
Напишите функции:
Одна функция принимает объект Settings и возвращает его копию типа ReadonlySettings.
Другая функция принимает объект ReadonlySettings и возвращает его копию типа MutableSettings. */

// home work 2
interface Settings {
    themes: string;
    notificationsEnabled: boolean;
    languages: string;
}

type ReadonlySettings = Readonly<Settings>;

type MutableSettings  = {
    -readonly[K in keyof ReadonlySettings]: ReadonlySettings[K];
}


function createReadOnlySettings(settings: Settings): ReadonlySettings {
    return {
        themes: settings.themes,
        notificationsEnabled: settings.notificationsEnabled,
        languages: settings.languages,
    };
}

function createMutableSettings(settings: Settings): MutableSettings {
    return {
        themes: settings.themes,
        notificationsEnabled: settings.notificationsEnabled,
        languages: settings.languages,
    };
}

const settings: Settings = {
    themes: 'dark',
    notificationsEnabled: false,
    languages: "RU",
};

const convertedToReadOnly = createReadOnlySettings(settings);
const convertedToMutableSettings = createMutableSettings(settings);

// convertedToReadOnly.themes = 'light';

convertedToMutableSettings.themes = 'light';

console.log(convertedToReadOnly);
console.log(convertedToMutableSettings);
// end home work 2

/* Домашнее задание №3: Расширенные Utility Types с Pick и Exclude
Создайте интерфейс Post с полями id, title, content, и published.
Используя Utility Types, создайте два типа:
PublishedPost — тип содержит только id и published.
UnpublishedPost — тип содержит все поля, кроме published.
Напишите функцию, которая принимает объект Post и возвращает его как PublishedPost или UnpublishedPost в зависимости от значения поля published*/

// home work 3

interface Post {
    id: number;
    title: string;
    content: string;
    isPublished: boolean;
}

type PublishedPost = Pick<Post, 'id' | 'isPublished'>;

type UnpublishedPost = Omit<Post, 'isPublished'>;


function getPostStatus(post: Post): PublishedPost | UnpublishedPost {
    if(post.isPublished) {
        return {
            id: post.id,
            isPublished: post.isPublished
        }
    }
    else {
        return {
            id: post.id,
            title: post.title,
            content: post.content,
        }
    }
}


const post1: Post = {
    id: 1,
    title: "Introduction to TypeScript",
    content: "Learn the basics of TypeScript.",
    isPublished: true,
  };
  
  const post2: Post = {
    id: 2,
    title: "Draft Post",
    content: "This post is still in progress.",
    isPublished: false,
  };

  const result1 = getPostStatus(post1);
  console.log(result1);
  
  const result2 = getPostStatus(post2);
  console.log(result2);

// end home work 3

/* 
Домашнее задание №1: Динамическое изменение вложенных типов с DeepReadonly
Создайте интерфейс Profile с полями id, name, и вложенным объектом settings с полями theme и language.
Используя Mapped Types, создайте рекурсивный тип DeepReadonly<T>, который сделает все поля объекта и его вложенных объектов readonly.
Напишите функцию, которая принимает объект Profile и возвращает его копию типа DeepReadonly<Profile>
*/

// home work 4

interface Profile {
    id: number;
    name: string;
    settings: {
        theme: string;
        language: string;
    }
}

type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]>: T[K]; 
}

function createDeepReadOnlyType(profile: Profile): DeepReadonly<Profile> {
    return JSON.parse(JSON.stringify(profile)) as DeepReadonly<Profile>;
}

const profile: Profile = {
    id: 123,
    name: 'test',
    settings: {
        theme: 'dark',
        language: 'ru'
    }
};

const covertedProfile = createDeepReadOnlyType(profile);

// covertedProfile.id = 123;
// covertedProfile.settings.theme = 'light';

// end home work 4

/* Домашнее задание №2: Условные типы и динамические типы с Flatten
Создайте интерфейс NestedArray с полем values, которое содержит массив строк или чисел.
Используя Conditional Types, создайте тип Flatten<T>, который, если передан массив, возвращает тип его элементов, а если нет — возвращает сам тип.
Напишите функцию, которая принимает массив строк или чисел и возвращает первый элемент в соответствии с типом Flatten<T>. */

// home work 5
interface NestedArray {
    values: (string | number)[];
}


// Conditional Type для Flatten<T>
type Flatten<T> = T extends Array<infer U> ? U : T;

type FlattenedStringArray = Flatten<string[]>;
type FlattenedNumberArray = Flatten<number[]>;
type FlattenedMixedArray = Flatten<(string | number)[]>;
type FlattenedNonArray = Flatten<string>;


function getFirstElement<T extends Array<unknown>>(arr: T): Flatten<T> | undefined {
    return arr.length > 0 ? arr[0] as Flatten<T> : undefined;
  }
  
  // Примеры использования
  const stringArray = ["apple", "banana", "cherry"];
  const numberArray = [1, 2, 3];
  const mixedArray = [1, "hello", 2];
  
  // Получаем первый элемент из разных массивов
  const firstString = getFirstElement(stringArray);
  const firstNumber = getFirstElement(numberArray);
  const firstMixed = getFirstElement(mixedArray);

console.log(firstString);
console.log(firstNumber);
console.log(firstMixed);

// end home work 5

/* Домашнее задание №3: Расширенные Utility Types с Intersection и Union
Создайте два интерфейса: Admin с полем role и User с полями id и name.
Используя Utility Types, создайте тип AdminUser, который будет пересечением типов Admin и User.
Напишите функцию, которая принимает объект AdminUser и возвращает строку, содержащую его роль и имя. */

// home work 6

interface Admin {
    role: string;
}

interface Users {
    id: number;
    name: string;
}

type AdminUser = Admin & Users;

function getAdminUser(user: AdminUser): string {
    return `user role is ${user.role}, user name is ${user.name}`;
}

const users: AdminUser = {
    id: 123,
    name: 'David',
    role: 'manager',
}

console.log(getAdminUser(users));

// end home work 6



