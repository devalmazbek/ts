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
// end home work 3
