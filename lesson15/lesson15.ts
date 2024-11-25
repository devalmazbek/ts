/* Задание 1: Проверка на массив
Создайте условный тип IsArray<T>, который будет возвращать 'array', если тип T является массивом, и 'not array' — если это не массив. Затем создайте функцию, которая использует этот тип для определения, является ли переданный параметр массивом. */

type IsArray<T> = T extends any[] ? "array" : "not array";

function checkArray<T>(value: T): IsArray<T> {
    return (Array.isArray(value) ? "array" : "not array") as IsArray<T>;
}
console.log(checkArray([1, 2, 3]));
console.log(checkArray('test'));
console.log(checkArray(1));

/* 
Задание 2: Извлечение типа элемента массива
Создайте условный тип ArrayElement<T>, который возвращает тип элемента массива, если T — это массив, и сам тип T в других случаях. Напишите функцию getElementType, которая принимает массив и возвращает тип его элемента.
*/

type ArrayElement<T> = T extends (infer U)[] ? U : never;

function getElementType<T>(element: T): ArrayElement<T> | null {
    if(Array.isArray(element) && element.length > 0) {
        return element[0] as ArrayElement<T>;
    }

    return null;
}

console.log(getElementType([1, 2, 3]));
console.log(getElementType(['string', '2', '3']));
console.log(getElementType('test'));
