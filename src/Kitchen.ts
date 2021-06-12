class Kitchen {
  orders: Array<number>
  constructor() {
    this.orders = []
  }
  newOrder(orderId: number) {
    return this.orders.push(orderId)
  }

  returnOrder() {
    return this.orders.pop()
  }
}

export default Kitchen;