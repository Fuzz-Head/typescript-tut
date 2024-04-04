let discount: number | string = 20;
discount = '20%';
//discount = true;

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';



//challenge #3

let temperatures: number[] = [20, 25, 30];
// temperatures.push('hot');

let colors: string[] = ['red', 'green', 'blue'];
//  colors.push(false);


let mixedArray: (number | string)[] = [1, 'two', 3, 'four'];

//challenge #4

let bike: { brand: string; year: number } = { brand: 'Ducati', year: 2021 };

let laptop: { brand: string; year: number } = { brand: 'Apple', year: 2020 };

let product1 = { title: 'shirt', price: 20 };
let product2 = { title: 'pant' };

let products: { title: string; price?: number }[] = [product1, product2];

products.push({ title: 'shoes' });
// products.push({ title: 'socks', price: 'cheap' });


//Challenge #5

const names: string[] = ['john', 'james', 'jill', 'henry'];

function isNameInList(name: string): boolean {
    return names.includes(name);
}

let nameToCheck = 'jane';

if (isNameInList(nameToCheck)) {
    console.log(`${nameToCheck} is in the list`);
} else {
    console.log(`${nameToCheck} is not in the list`);
}


//1:23:19 - 26/03

//handling optional parameters 
function calculatePrice(price: number, discount?: number): number {
    return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100, 20);


//default parameters 

function calculateScore(initialScore: number, penaltyPoints: number = 0): number {
    return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateScore(12, 4);
let scoreWithoutPenalty = calculateScore(300);

//rest parameters 

function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled);

    let total = numbers.reduce((previous, current) => {
        return previous + current;
    }, 0);
    return `${message}${total}`;
}

let result = sum('The total is: ', 1, 2, 3, 4, 5, 6, 7);


//challenge #6 

function processInput(input: string | number) {
    if (typeof input === 'number') {
        console.log(input);
    } else {
        console.log(input.toUpperCase());
    }
}

processInput(10);
processInput('Hello');

//
function createEmployee({ id }: { id: number }): { id: number; isActive: boolean } {
    return { id, isActive: id % 2 === 0 };
};

const first = createEmployee({ id: 1 });
const second = createEmployee({ id: 2 });

console.log(first, second);

// alternative 

function createStudent(student: { id: number; name: string }): void {
    console.log(`Welcome to the course ${student.name.toUpperCase()}`);

}

const firstStudent = {
    id: 5,
    name: 'anna',
    email: 'anna@gmail.com', //this wont cause issues 
};

createStudent(firstStudent);

//createStudent({ id: 1, name: 'bob', email: 'bobo@gmail.com' }); //here it will 

//Challenge #7 

function processData(input: string | number, config: { reverse: boolean } = { reverse: false }): number | string {
    if (typeof input === 'number') {
        return input * input;
    }
    else {
        return config.reverse
            ? input.toUpperCase().split('').reverse().join('')
            : input.toUpperCase();
    }

}

console.log(processData(10));
console.log(processData('hello'));
console.log(processData('Hello', { reverse: true }));


//1:55:00 

//Aliases and interfaces 

type User = {
    id: number;
    name: string;
    isActive: boolean;
}

// const john: { id: number; name: string; isActive: boolean } = {
//     id: 1,
//     name: 'john',
//     isActive: true,
// };

const john: User = {
    id: 1,
    name: 'john',
    isActive: true,
};


const susan: User = {
    id: 1,
    name: 'susan',
    isActive: false,
};

function createUser(user: User): User {
    console.log(`Hello there ${user.name.toUpperCase()} !!!`);

    return user;
}

//use it everywhere 

type StringOrNumber = string | number;

let value: StringOrNumber;
value = 'Hello';
value = 123;

type Theme = 'Light' | 'Dark';

let setTheme: Theme;
setTheme = 'Light';
//setTheme = 'Green';

//challenge #8 

type Employee = {
    id: number;
    name: string;
    department: string;
}

type Manager = {
    id: number;
    name: string;
    employees: Employee[];
}

type Staff = Employee | Manager;


function printStaffDetails(staff: Staff): void {
    if ('employees' in staff) {
        console.log(`${staff.name} is an manager for ${staff.employees.length} employees.`);
    }
    else {
        console.log(`${staff.name} is an employee in the ${staff.department} department.`);
    }
}


const alice: Employee = {
    id: 1,
    name: 'alice',
    department: 'sales'
}

const steve: Employee = {
    id: 2,
    name: 'steve',
    department: 'HR'
}

const bob: Manager = {
    id: 1,
    name: 'bob',
    employees: [alice, steve]
}

printStaffDetails(alice);
printStaffDetails(bob);

//


type Book = { id: number; name: string; price: number };
//type discountedBook = Book & { discount: number }

const book1: Book = {
    id: 1,
    name: 'how to cook a dragon',
    price: 15
};

const book2: Book = {
    id: 2,
    name: 'the secret life of unicorns',
    price: 10
};
//const discountedBook: DiscountedBook = { 
const discountedBook: Book & { discount: number } = {
    id: 3,
    name: 'Gnomes vs. Goblins',
    price: 25,
    discount: 0.15
};
//

const propName = 'age';

type Animal = {
    [propName]: number
};

let tiger: Animal = { [propName]: 5 };

//interfaces

interface Books {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    // method 
    printAuthor(): void;
    printTitle(message: String): string;
    printSomething: (someValue: number) => number;
}

const deepWork: Books = {
    isbn: 123,
    title: 'deep work',
    author: 'Cal Newport',
    genre: 'self-help',
    // printAuthor() {
    //     console.log(this.author);
    // },
    printTitle(message) {
        return `${this.title} ${message}`;
    },
    //first option
    printSomething: function (someValue) {
        return someValue;
    },
    //second option
    // printSomething: (someValue) => {
    //     // console.log(this.);
    //     console.log(deepWork.author);
    //     return someValue;
    // },
    //third option 
    // printSomething(someValue) {
    //     return someValue;
    // },
    printAuthor: () => {
        console.log(deepWork.author);
    },
}

// deepWork.isbn = 111;
deepWork.printAuthor();
const result1 = deepWork.printTitle('is a great book');
console.log(result1);

console.log(deepWork.printSomething(12));

//challenge #9 

interface Computer {
    readonly id: number;
    brand: string;
    ram: number;
    upgradeRam(increase: number): number;
    storage?: number;
}

const laptop1: Computer = {
    id: 1,
    brand: 'razer',
    ram: 8,
    upgradeRam(amount) {
        this.ram += amount;
        return this.ram
    },
}

laptop1.storage = 256;
console.log(laptop1);

//interface merging 

interface Person {
    name: string;
    getDetails(): string;
}

interface DogOwner {
    dogName: string;
    getDogDetails(): string;
}

interface Person {
    age: number;
}

const person1: Person = {
    name: 'john',
    age: 30,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
};

console.log(person1.getDetails());


//2:41:10 27/03

interface Employee1 extends Person {
    employeeId: number;
}

const employee = {
    name: 'jane',
    age: 28,
    employeeId: 123,
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Employee ID: ${this.employeeId}`;
    },
};

console.log(employee);

interface Manager1 extends Person, DogOwner {
    managePeople(): void;
}

const manager1 = {
    name: 'bob',
    age: 35,
    dogName: 'rex',
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    },
    getDogDetails() {
        return `Name: ${this.dogName}`;
    },
    managePeople() {
        console.log('Managing People...');
    },
};

manager1.managePeople();

//challenge #10


function getEmployee(): Person5 | DogOwner5 | Manager5 {
    const random = Math.random()

    if (random < 0.33) {
        return {
            name: 'john',
        };
    } else if (random < 0.66) {
        return {
            name: 'sarah',
            dogName: 'rex',
        };
    } else {
        return {
            name: 'bob',
            managePeople() {
                console.log('Managing People...');
            },
            delegateTasks() {
                console.log('Delegating tasks...');
            }
        };
    }
}

interface Person5 {
    name: string;
}

interface DogOwner5 extends Person5 {
    dogName: string;
}

interface Manager5 extends Person5 {
    managePeople(): void;
    delegateTasks(): void;
}

const employee5: Person5 | DogOwner5 | Manager5 = getEmployee();

console.log(employee5);

//console.log(employee5.delegateTasks);

function isManager(obj: Person5 | DogOwner5 | Manager5): obj is Manager5 {
    return 'managePeople' in obj;
}

if (isManager(employee5)) {
    employee5.delegateTasks();
}


//

let person6: [string, number] = ['john', 60];

let date: readonly [number, number, number] = [12, 24, 66];

let sam: [string, number?] = ['sam'];

function getPerson(): [string, number] {
    return ['john', 22];
}

let randomPerson = getPerson();
console.log(randomPerson[0]);
console.log(randomPerson[1]);


enum ServerResponseStatus {
    Success = 200,
    Error = 400,
    Ok = 300,
}

Object.values(ServerResponseStatus).forEach((value) => {
    if (typeof value === 'number') {
        console.log(value);
    }
});

interface ServerResponse {
    result: ServerResponseStatus,
    data: string[];
}

function getServerResponse(): ServerResponse {
    return {
        result: ServerResponseStatus.Success,
        data: ['first item', 'second item'],
    };
}

const response: ServerResponse = getServerResponse();
console.log(response);



//challenge 11

enum UserRole {
    Admin,
    Manager,
    Employee,
}

type User1 = {
    id: number,
    name: string,
    role: UserRole,
    contact: [string, string];
};

function createUser1(user: User1): User1 {
    return user;
}

const user5: User1 = createUser1({
    id: 1,
    name: 'john doe',
    role: UserRole.Admin,
    contact: ['john@gmail.com', '123-456-789'],
});

console.log(user5);

//3:20:13

let someValue: any = 'this is a string';

let strLength: number = (someValue as string).length;


type Bird = {
    name: string;
};

let birdString = '{"name": "Eagle"}';
let dogString = '{"breed": "Poodle"}';

let birdObject = JSON.parse(birdString);
let dogObject = JSON.parse(dogString);

let bird = birdObject as Bird;
let dog = dogObject as Bird;

console.log(bird.name);
console.log(dog.name);

//type assertion making sure the type is right 

enum Status {
    Pending = 'pending',
    Decline = 'decline',
}

type User7 = {
    name: string,
    status: Status,
}

const statusValue = 'pending';

const user: User7 = {
    name: 'john',
    status: statusValue as Status,
};

//type unknown 

let unknownValue: unknown;

unknownValue = 'HELLO';
unknownValue = 12.45;
unknownValue = false;
unknownValue = [1, 2, 3, 4];

console.log((unknownValue as string).toLowerCase);

if (typeof unknownValue === 'number') {
    unknownValue.toFixed(2);
}

function runSomeCode() {
    const random = Math.random();
    if (random < 0.5) {
        throw new Error('there was an error...');
    } else {
        throw 'some error';
    }
}

try {
    runSomeCode();
} catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    } else {
        console.log(error);

    }
}

//type never 

// let someValidValue: never = 0;

type Themes = 'light' | 'dark';

function checkTheme(theme: Themes): void {
    if (theme === 'light') {
        console.log('light theme');
        return;
    }
    if (theme === 'dark') {
        console.log('dark theme');
        return;
    }
    theme;
}


enum Color {
    Red,
    Blue,
    Green,
}

function getColorName(color: Color) {
    switch (color) {
        case Color.Red:
            return 'Red';
        case Color.Blue:
            return 'Blue';
        case Color.Green:
            return 'Green';
        default:
            //at build time
            let unexpectedColor: never = color;
            //at runtime 
            throw new Error(`Unexpected color value: ${color}`)
    }
}

console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Red));

console.log(getColorName(Color.Green)); //silent error





