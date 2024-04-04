import newStudent, { sayHello, person, type Student } from "./actions";

sayHello('typescript');
console.log(newStudent);
console.log(person);


const anotherStudent: Student = {
    name: 'bob',
    age: 23,
}

console.log(anotherStudent);



type ValueType = string | number | boolean;

let value: ValueType;
const random = Math.random();
value = random < 0.33 ? 'hello' : random < 0.66 ? 123.456 : true;

function checkValue(value: ValueType): void {
    if (typeof value === 'string') {
        console.log(value.toLowerCase());
        return;
    }
    if (typeof value === 'number') {
        console.log(value.toFixed(2));
        return;
    }
    console.log(`boolean: ${value}`);
}

checkValue(value);



type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;

// function makeSound(animal: Animal) {
//     if (animal.type === 'dog') {
//         animal.bark();
//     } else {
//         animal.meow();
//     }
// }


function makeSound(animal: Animal) {
    if ('bark' in animal) {
        animal.bark();
    } else {
        animal.meow();
    }
}


function printLength(str: string | null | undefined) {
    if (str) {
        console.log(str.length)
    } else {
        console.log('no string provided');
    }
}

//4:09:00 28/03

printLength('hello GO');
printLength('');
printLength(null);
printLength();
printLength(undefined);




try {
    throw new Error('This is an error');
} catch (error) {
    if (error instanceof Error) {
        console.log(`Caught an Error object: ${error.message}`);
    } else {
        console.log('unknown error...');

    }
}



function checkInput(input: Date | string): string {
    if (input instanceof Date) {
        return input.getFullYear().toString();
    }
    return input;
}

const year = checkInput(new Date);
const random1 = checkInput('2022-01-09');

console.log(year);
console.log(random1);



//challenge 12

type Student1 = {
    name: string;
    study: () => void;
};

type User = {
    name: string;
    login: () => void;
};

type Person1 = Student1 | User;

const randomPerson = (): Person1 => {
    return Math.random() > 0.5
        ? { name: 'john', study: () => console.log('Studying') }
        : { name: 'mary', login: () => console.log('logging in ') };
};

const personOne = randomPerson();


function isStudent(person1: Person1): person1 is Student1 {
    //return 'study' in person
    //only asserting is not complete logic as it can be undefined
    return (person1 as Student1).study !== undefined;
}

if (isStudent(personOne)) {
    personOne.study();
} else {
    personOne.login();
}

//other case 
const personTwo: Person1 = {
    name: 'anna',
    study: () => console.log('study...'),
};

if (isStudent(personTwo)) {
    personTwo.study();
} else {
    personTwo.login();//no way personTwo is a User  
}

//

type IncrementAction = {
    type: 'increment',
    amount: number;
    timestamp: number;
    user: string;
};

type DecrementAction = {
    type: 'decrement',
    amount: number;
    timestamp: number;
    user: string;
};

type Action = IncrementAction | DecrementAction;


function reducer(state: number, action: Action) {
    switch (action.type) {
        case 'increment':
            return state + action.amount;
        case 'decrement':
            return state - action.amount;
        default:
            const unexpectedAction: never = action;
            throw new Error(`Unexpected action : ${unexpectedAction}`);
    }

}

const newState = reducer(15, {
    type: 'increment',
    user: 'john',
    amount: 5,
    timestamp: 12345,
});


//generics 


let array1: string[] = ['apple', 'banana', 'mango'];
let array2: number[] = [1, 2, 3];
let array3: boolean[] = [true, false, true];

let array11: Array<string> = ['apple', 'banana', 'mango'];



function createString(args: string): string {
    return args;
}

function genericFunction<T>(args: T): T {
    return args;
}

let someStringValue = genericFunction<string>('Hello');
let someNumberValue = genericFunction<number>(100);


interface GenericInterface<T> {
    value: T;
    getValue: () => T;
}

const genericString: GenericInterface<string> = {
    value: 'Hello World',
    getValue() {
        return this.value;
    }
}

//4:45:30  01/04

//challenge 14

function generateStringArray(length: number, value: string): string[] {
    let result: string[] = [];
    result = Array(length).fill(value);
    return result;
}

function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    result = Array(length).fill(value);
    return result;
}

let arrayStrings = createArray<string>(10, 'hello');
let arrayNumbers = createArray<number>(10, 12);
let arrayBooleans = createArray<boolean>(10, true);

console.log(arrayBooleans);
console.log(arrayNumbers);
console.log(arrayStrings);



function pair<T, U>(param1: T, param2: U): [T, U] {
    return [param1, param2];
}

let result = pair<number, string>(123, 'world');


function processValue<T extends string | number>(value: T): T {
    console.log(value);
    return value;
}

processValue('hello');
processValue(23);


type Car = {
    brand: string;
    model: string
};

const car: Car = {
    brand: 'ford',
    model: 'mustang',
};

type Product = {
    name: string;
    price: number;
};

const product: Product = {
    name: 'shoes',
    price: 29.99,
};

type Student = {
    name: string;
    age: number;
};

const student: Student = {
    name: 'peter',
    age: 21,
};



function printName<T extends { name: string }>(input: T): void {
    console.log(input.name);
}

printName(student);
printName(product);
// function printName<T extends | Student>(input: T): void
// doesnt work even though product has name 



interface StoreData<T> {
    data: T[];
}

//5:12:00
