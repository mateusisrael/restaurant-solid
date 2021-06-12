class Table {
  _id: number;

  constructor(id: number, ) {
    this._id = id;
  }

  makeAWish(snack: Array<string>, waiter: any) {
    waiter.takeOrder(snack);
  }

  // generateId() {
  //   return 121
  // }

}

export default Table;