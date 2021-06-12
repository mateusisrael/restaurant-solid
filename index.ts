import Waiter from './src/Waiter';
import Table from './src/Table';
import Kitchen from './src/Kitchen';

const waiter = new Waiter()
const table = new Table(1)
const kitchen = new Kitchen()

table.makeAWish(["Bife grelhado", "batatas"], waiter);
