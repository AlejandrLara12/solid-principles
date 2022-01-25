export default class Paypal {
    constructor() {}

    charge(user, amount) {
        console.log(`success: ${user} paid $${amount} with Paypal`);
    }
}
