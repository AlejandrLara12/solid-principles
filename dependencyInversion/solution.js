import Stripe from './shared/Stripe.js';
import Paypal from './shared/Paypal.js';

class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    subscribeToHiphop(hours) {
        this.paymentProcessor.pay(hours * 10);
    }

    subscribeToBellydance(hours) {
        this.paymentProcessor.pay(hours * 20);
    }
}

// interface PaymentProcessor {
//     constructor(user) {
//         this.user = user;
//     }
//     pay(amount) {}
// }

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(amount) {
        this.stripe.makePayment(amount * 100);
    }
}
const empireStore = new Store(new StripePaymentProcessor('John Doe'));
empireStore.subscribeToHiphop(2);
empireStore.subscribeToBellydance(3);


// * when trying to use the Paypal
class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(amount) {
        this.paypal.charge(this.user, amount);
    }
}
const empireStore2 = new Store(new PaypalPaymentProcessor('John Doe'));
empireStore2.subscribeToHiphop(2);
empireStore2.subscribeToBellydance(3);