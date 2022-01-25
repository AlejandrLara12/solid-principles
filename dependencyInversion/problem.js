import Stripe from './shared/Stripe.js';
import Paypal from './shared/Paypal.js';

class Store {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    subscribeToHiphop(hours) {
        // 10 bucks per hour
        this.stripe.makePayment(hours * 10 * 100);
    }
    
    subscribeToBellydance(hours) {
        // 20 bucks per hour
        this.stripe.makePayment(hours * 20 * 100);
    }
}

const empireStore = new Store('John Doe');
empireStore.subscribeToHiphop(2);
empireStore.subscribeToBellydance(3);


// * when trying to use the Paypal
class StoreRefactor {
    constructor(user) {
        // this.stripe = new Stripe(user);
        this.user = user;
        this.paypal = new Paypal();
    }

    subscribeToHiphop(hours) {
        // this.stripe.makePayment(hours * 10 * 100);
        this.paypal.charge(this.user, hours * 10);
    }
    
    subscribeToBellydance(hours) {
        // this.stripe.makePayment(hours * 10 * 100);
        this.paypal.charge(this.user, hours * 10);
    }
}
const empireStore2 = new Store('John Doo');
empireStore2.subscribeToHiphop(2);
empireStore2.subscribeToBellydance(3);