// Open/Closed Principle
// Se mudar alguma coisa fora, não precisa ter que mudar dentro

class Tax1 {
    constructor(product, price) {
        this.product = product,
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de R$${this.price + tax},00`);
    }
}

class Tax2 {
    constructor(product, price) {
        this.product = product
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de R$${this.price + tax},00`);
    }
}

class Tax3 {
    constructor(product, price) {
        this.product = product
        this.price = price
    }

    totalPrice(tax) {
        console.log(`O valor total é de R$${this.price + tax},00`);
    }
}

const taxes = [
    new Tax1('snes', 10),
    new Tax2('Xbox', 20), 
    new Tax3('Playstation', 30) 
]

function calculate(taxes) {
    taxes.forEach(tax => console.log(tax.totalPrice(10)))
}

calculate(taxes)