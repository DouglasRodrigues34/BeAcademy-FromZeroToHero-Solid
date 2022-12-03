// Dependency Inversion
// Código desacoplado
class Store {

    constructor(brand) {
        this.paymentProcess = new this.PaymentProcess(brand)
    }
}

class PaymentProcess {
    constructor(brand) {
        this.brand = brand
    }

    payment() {
        console.log(`Pagou com ${this.brand}`);
    }
}


/* class Visa {
    constructor() {
        this.brand = 'Visa'
    }
} */

const bike = new Store(new PaymentProcess('Visa').payment())