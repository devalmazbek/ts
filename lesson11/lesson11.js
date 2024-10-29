/*
Домашнее задание №1: Динамическое изменение типов с помощью Mapped и Conditional Types
Создайте интерфейс User с полями id, name, email, и isActive.
Используя Mapped Types и Conditional Types, создайте тип NullableUser, где:
Если поле имеет тип string, оно может быть либо строкой, либо null.
Все остальные поля остаются без изменений.
Напишите функцию, которая принимает объект типа User и возвращает его копию типа NullableUser.
 */
function createNullableUser(user) {
    return {
        id: user.id,
        name: user.name,
        email: user.email,
        isActive: user.isActive
    };
}
var user = {
    id: 1,
    name: null,
    email: "test@example.com",
    isActive: true,
};
console.log(createNullableUser(user));
function createReadOnlySettings(settings) {
    return {
        themes: settings.themes,
        notificationsEnabled: settings.notificationsEnabled,
        languages: settings.languages,
    };
}
function createMutableSettings(settings) {
    return {
        themes: settings.themes,
        notificationsEnabled: settings.notificationsEnabled,
        languages: settings.languages,
    };
}
var settings = {
    themes: 'dark',
    notificationsEnabled: false,
    languages: "RU",
};
var convertedToReadOnly = createReadOnlySettings(settings);
var convertedToMutableSettings = createMutableSettings(settings);
// convertedToReadOnly.themes = 'light';
convertedToMutableSettings.themes = 'light';
console.log(convertedToReadOnly);
console.log(convertedToMutableSettings);
function getPostStatus(post) {
    if (post.isPublished) {
        return {
            id: post.id,
            isPublished: post.isPublished
        };
    }
    else {
        return {
            id: post.id,
            title: post.title,
            content: post.content,
        };
    }
}
var post1 = {
    id: 1,
    title: "Introduction to TypeScript",
    content: "Learn the basics of TypeScript.",
    isPublished: true,
};
var post2 = {
    id: 2,
    title: "Draft Post",
    content: "This post is still in progress.",
    isPublished: false,
};
var result1 = getPostStatus(post1);
console.log(result1);
var result2 = getPostStatus(post2);
console.log(result2);
function createDeepReadOnlyType(profile) {
    return JSON.parse(JSON.stringify(profile));
}
var profile = {
    id: 123,
    name: 'test',
    settings: {
        theme: 'dark',
        language: 'ru'
    }
};
var covertedProfile = createDeepReadOnlyType(profile);
function getFirstElement(arr) {
    return arr.length > 0 ? arr[0] : undefined;
}
// Примеры использования
var stringArray = ["apple", "banana", "cherry"];
var numberArray = [1, 2, 3];
var mixedArray = [1, "hello", 2];
// Получаем первый элемент из разных массивов
var firstString = getFirstElement(stringArray);
var firstNumber = getFirstElement(numberArray);
var firstMixed = getFirstElement(mixedArray);
console.log(firstString);
console.log(firstNumber);
console.log(firstMixed);
function getAdminUser(user) {
    return "user role is ".concat(user.role, ", user name is ").concat(user.name);
}
var users = {
    id: 123,
    name: 'David',
    role: 'manager',
};
console.log(getAdminUser(users));
// end home work 6
