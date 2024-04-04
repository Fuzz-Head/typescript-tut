let car: { brand: string; year: number } = { brand: 'toyota', year: 2020 };

car.brand = 'ford';
// car.color = 'red';

let car1: { brand: string; year: number } = { brand: 'audi', year: 2022 };

let book = { title: 'book', cost: 20 };
let pen = { title: 'pen', cost: 10 };
let notebook = { title: 'notebook' };


//optional cost denoted with '?'
// readonly title 

let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

// items[0].title = 'newBook';



function calculateDiscount(price: number) {
    const hasDiscount = true;
    if (hasDiscount){
        return 'Discount applied';
    }
    return price * 0.9;
}

const finalPrice = calculateDiscount(200);

