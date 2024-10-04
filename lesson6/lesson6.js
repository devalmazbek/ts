// home work 1
function isCircle(figure) {
    return figure.type === 'circle';
}
function isSquare(figure) {
    return figure.type === 'square';
}
function isRectangle(figure) {
    return figure.type === 'rectangle';
}
// Напишите функцию calculateArea, которая принимает объект типа Circle | Square | Rectangle и возвращает площадь фигуры на основе её типа.
function calculateArea(figure) {
    if (isCircle(figure)) {
        return Math.PI * figure.radius * figure.radius;
    }
    if (isSquare(figure)) {
        return figure.side * figure.side;
    }
    if (isRectangle(figure)) {
        return figure.width * figure.height;
    }
    throw new Error('unkonown type');
}
var circle = { type: 'circle', radius: 23 };
var square = { type: 'square', side: 50 };
var rectangle = { type: 'rectangle', width: 20, height: 18 };
console.log(calculateArea(circle));
function checkIfArray(value) {
    return (Array.isArray(value) ? 'array' : 'not array');
}
console.log(checkIfArray([1, 2, 3]));
// end home work 2
