/* Задание 1: Проверка на массив
Создайте условный тип IsArray<T>, который будет возвращать 'array', если тип T является массивом, и 'not array' — если это не массив. Затем создайте функцию, которая использует этот тип для определения, является ли переданный параметр массивом. */
function checkArray(value) {
    return (Array.isArray(value) ? "array" : "not array");
}
console.log(checkArray([1, 2, 3]));
console.log(checkArray('test'));
console.log(checkArray(1));
function getElementType(element) {
    if (Array.isArray(element) && element.length > 0) {
        return element[0];
    }
    return null;
}
console.log(getElementType([1, 2, 3]));
console.log(getElementType(['string', '2', '3']));
console.log(getElementType('test'));
