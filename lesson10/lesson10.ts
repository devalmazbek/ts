/*
Домашнее задание №1: Динамическое изменение ключей с помощью Mapped Types
Создайте интерфейс Person с полями name, age, и address.
Используя Mapped Types, создайте тип UppercasePerson, где все ключи будут преобразованы в верхний регистр.
Напишите функцию, которая принимает объект Person и возвращает объект типа UppercasePerson. 
 */

// home work 1

interface Person {
    name: string;
    age: number;
    address: string;
}

type UppercasePerson = {
    [K in keyof Person as Uppercase<K & string>]: Person[K];
};


function toUppercasePerson(person: Person): UppercasePerson {
    const result: any = {};
    
    for (const key in person) {
        if (person.hasOwnProperty(key)) {
            const upperKey = key.toUpperCase() as Uppercase<keyof Person & string>;;
            result[upperKey] = person[key];
        }
    }

    return result;
}

const new_user: Person = {
    name: 'Doe',
    age: 30,
    address: 'test address',
}

const convertedPersons = toUppercasePerson(new_user);

console.log(convertedPersons);

// end home work 1

/* 
Домашнее задание №2: Условные типы для проверки массивов
Создайте интерфейс InventoryItem с полями id, name, и quantity.
Используя Conditional Types, создайте тип IsArray<T>, который проверяет, является ли переданный тип массивом. Если да — вернуть "array", иначе — "not array".
Напишите функцию, которая проверяет, является ли поле quantity массивом, используя тип IsArray<T>
*/

// home work 2

interface InventoryItem {
    id: number;
    name: string;
    quantity: string[],
}

type IsArray<T> = T extends Array<any> ? 'array' : 'not array';

function checkIfArray<T>(value: T): IsArray<T> {
    return (Array.isArray(value) ? 'array' : 'not array') as IsArray<T>;
}

const item: InventoryItem = {
    id: 123,
    name: 'test',
    quantity: [
        'test',
        'test1',
        'test3',
    ],
};


console.log(checkIfArray(item.quantity));


// end home work2

/* 
Домашнее задание №3: Utility Types с Partial и вложенными объектами
Создайте интерфейс OrderDetails с полями orderId, items, и shipping.
Поле items должно быть массивом строк, а shipping — объектом с полями address и method.
Используя Utility Types, создайте тип PartialOrderDetails, где все поля, включая вложенные объекты, будут необязательными.
Напишите функцию, которая принимает объект OrderDetails и возвращает его копию типа PartialOrderDetails
*/

// home work 3
interface OrderDetails {
    orderId: number;
    items: string[];
    shipping: {
        address: string;
        method: string;
    };
}

type PartialNested<T> = {
    [K in keyof T]?: T[K] extends object ? PartialNested<T[K]> : T[K];
};

type PartialOrderDetails = PartialNested<OrderDetails>;

function getOrderDetails(order: OrderDetails): PartialOrderDetails {
    return {
        orderId: order.orderId,
        shipping: {
            address: order.shipping.address,
            method: order.shipping.method,
        }
    };
}

const order: OrderDetails = {
    orderId: 123,
    items: ['test', 'test'],
    shipping: {
        address: 'test address',
        method: 'delivery payment',
    }
};

const convertedOrderDetails = getOrderDetails(order);

console.log(convertedOrderDetails);

// end home work 3

/*
Домашнее задание №1: Динамическое создание типов с вложенными объектами
Создайте интерфейс UserSettings с полями userId, preferences (вложенный объект с полями theme и language).
Используя Mapped Types, создайте новый тип OptionalUserSettings, где все поля, включая вложенные, будут опциональными.
Напишите функцию, которая принимает объект UserSettings и возвращает его копию типа OptionalUserSettings
*/

// home work 4

interface UserSettings {
    userId: number;
    preference: {
        theme: string;
        language: string;
    }
}

type UserSettingsNested<T> = {
    [K in keyof T]?: T[K] extends object ? UserSettingsNested<T[K]> : T[K];
};

type OptionalUserSettings = UserSettingsNested<UserSettings>;

function getUserSettings(settings: UserSettings): OptionalUserSettings {
    return {
        preference: {
            theme: settings.preference.theme,
            language: settings.preference.language,
        }
    }
}

const settings: UserSettings = {
    userId: 23,
    preference: {
        theme: 'light',
        language: 'ru',
    }
};

const userSettings: OptionalUserSettings = getUserSettings(settings);

console.log(userSettings);

// end home work 4


/* 
Домашнее задание №2: Условные типы с проверкой и изменением значений
Создайте интерфейс Response с полями status (число) и data (массив строк).
Используя Conditional Types, создайте тип Normalize<T>, который преобразует:
Если передан массив — вернуть T[number] (тип элементов массива).
Если передан не массив — вернуть сам T.
Напишите функцию, которая принимает поле data из Response и возвращает типизированное значение в соответствии с правилом.
*/

// home work 5
interface Responses {
    statuses: number;
    data: string[];
}

type Normalize<T> = T extends Array<any> ? T[number] : T;

function getResponse<T>(response: T): Normalize<T> {
    if(Array.isArray(response)) {
        return response.map((item: Responses)=> item) as Normalize<T>
    }

    return response as Normalize<T>
}

const response: Responses = {
    statuses: 200,
    data: ['Success', 'Error']
};

console.log(getResponse(response.data));

// home work 5


/*
Домашнее задание №3: Использование Record и динамическое создание объектов
Создайте интерфейс Product с полями id и name.
Используя утилитарный тип Record, создайте тип ProductCatalog, который будет отображать id продукта на соответствующий объект Product.
Напишите функцию, которая принимает массив продуктов и возвращает объект типа ProductCatalog. 
 */

// home work 6
interface Product {
    id: string;
    name: string;
}

type ProductCatalog = Record<string, Product>;


function createProductCatalog(products: Product[]): ProductCatalog {
    return products.reduce((catalog, product) => {
        catalog[product.id] = product;
        return catalog;
    }, {} as ProductCatalog)
}

const products: Product[] = [
    { id: "1", name: "Laptop" },
    { id: "2", name: "Smartphone" },
    { id: "3", name: "Tablet" }
];

const catalog = createProductCatalog(products);
console.log(catalog);

// end home work 6






