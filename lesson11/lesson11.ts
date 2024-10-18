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





