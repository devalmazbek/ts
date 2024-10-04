// home work 1

interface Circle {
    type: 'circle';
    radius: number;
}

interface Square {
    type: 'square';
    side: number;
}

interface Rectangle {
    type: 'rectangle';
    width: number;
    height: number;
}

function isCircle(figure: Circle | Square | Rectangle): figure is Circle  {
    return figure.type === 'circle';
}

function isSquare(figure: Circle | Square | Rectangle): figure is Square  {
    return figure.type === 'square';
}

function isRectangle(figure: Circle | Square | Rectangle): figure is Rectangle  {
    return figure.type === 'rectangle';
}


// Напишите функцию calculateArea, которая принимает объект типа Circle | Square | Rectangle и возвращает площадь фигуры на основе её типа.

function calculateArea(figure: Rectangle | Square | Circle): number {
    if(isCircle(figure)) {
        return Math.PI * figure.radius * figure.radius;
    }

    if(isSquare(figure)) {
        return figure.side * figure.side;
    }

    if(isRectangle(figure)) {
        return figure.width * figure.height;
    }

    throw new Error('unkonown type');
}

const circle: Circle = {type: 'circle', radius: 23};
const square: Square = {type: 'square', side: 50};
const rectangle: Rectangle = {type: 'rectangle', width: 20, height: 18};

console.log(calculateArea(circle));

// home work 2

// Домашнее задание №2: Conditional Types (Условные типы)
// Создайте условный тип IsArray<T>, который проверяет, является ли тип массивом. Если это массив, возвращайте строку "array", иначе — "not an array".
// Напишите функцию, которая принимает аргумент любого типа и использует этот условный тип для проверки, является ли аргумент массивом, возвращая соответствующую строку.

type IsArray<T> = T extends Array<any> ? "array" : "not an array";

function checkIfArray<T>(value: T): IsArray<T> {
    return (Array.isArray(value) ? 'array' : 'not array') as IsArray<T>;
}

console.log(checkIfArray([1, 2, 3]));

// end home work 2