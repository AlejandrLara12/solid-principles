export default class Stripe {
    constructor(user) {
        this.user = user;
    }

    makePayment(amountInCents) {
        console.log(`success: ${this.user} paid $${amountInCents / 100} with Stripe`);
    }
}