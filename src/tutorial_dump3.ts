import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
    id: z.string(),
    name: z.string(),
    info: z.string(),
    image: z.string(),
    price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status:${response.status}`);
        }
        const rawData: Tour[] = await response.json();

        const result = tourSchema.array().safeParse(rawData);
        console.log(result);

        if (!result.success) {
            throw new Error(`Invalid data: ${result.error}`);
        }
        console.log(result.data);
        return result.data;
    } catch (error) {
        const errorMsg =
            error instanceof Error ? error.message : 'an error occurred';
        console.log(errorMsg);
        return [];
    }
}

const tours = await fetchData(url);
tours.map((tour) => {
    console.log(tour.info);
});

export { };




class Book {
    // public readonly title: string;
    // public author: string;
    private checkedOut: boolean = false;
    //checkedOut = false;

    constructor(readonly title: string, public author: string) {
        // this.title = title;
        // this.author = author;
    }

    // public checkOut() {
    //     this.checkedOut = true;
    // }

    // public isCheckedOut() {
    //     return this.checkedOut;
    // }

    // private toggleCheckedOutStatus() {
    //     return !this.checkedOut;
    // }

    get info() {
        return `${this.title} by ${this.author}`
    }

    set checkOut(checkedOut: boolean) {
        this.checkedOut = checkedOut;
    }
}

const deepWork = new Book('Deep work', 'Cal Newport');
console.log(deepWork.info);
deepWork.checkOut = true;

// little more jargon 

//interfaces and classes

interface IPerson {
    name: string;
    age: number;
    greet(): void;
}

class Person implements IPerson {
    constructor(public name: string, public age: number) { }
    greet(): void {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);

    }
}

const hipster = new Person('shakeAndBake', 69);
hipster.greet();
