type UserType = {
    name: string;
    age: number;
}

interface Product {
    name: string;
    price: number;
    available: boolean;
}

interface Employee {
    readonly id: number;
    name: string;
    position: string;
}



const userData: UserType = { name: "Alice", age: 25 };

function processUserData(userData: UserType, callback: (user: UserType) => void): void {
  callback(userData);
  console.log(userData);
}

function incrementAge(userData: UserType): void {
    userData.age += 1;
}

function changeName(userData: UserType): void {
    userData.name = 'test';
}

console.log(processUserData(userData, incrementAge));
console.log(processUserData(userData, incrementAge));
console.log(processUserData(userData, changeName));




function updateProduct(product: Product, updates: Partial<Product>): Product {
    return { ...product, ...updates } 
}

const initialProduct = {
    name: 'Laptop',
    price: 1200,
    available: true,
} 

const update = updateProduct(initialProduct, {price: 1500});
console.log(update);


const newUser: Employee = {
    id: 12,
    name: 'almaz',
    position: 'dev',
}

// newUser.id = 15;

function descriptionEmployee(employee: Employee): string {
    return `${employee.id}, ${employee.name}, ${employee.position}`;
}

console.log(descriptionEmployee(newUser));




