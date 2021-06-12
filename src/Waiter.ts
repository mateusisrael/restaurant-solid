class Waiter {

  takeOrder(snack: Array<string>, kitchen) {
    const orderId = this._signOrder();
    const order = {
      orderId: orderId,
      snack: snack
    }
    console.log(`
      Taking Order: ${orderId},
      snack: ${snack}
    `);

    return kitchen.newOrder(order);
  }

  _signOrder() {
    return 729
  }
}

export default Waiter;