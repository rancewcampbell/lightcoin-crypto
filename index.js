class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];

  }

  get balance() {
    let balance = 0;
    for (const t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }

  addTransatcion(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {

    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransatcion(this);
      return true;
    }
    return false;

  }



}


class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

  isAllowed() {
    return (this.account.balance + this.value >= 0)
  }
}

class Deposit extends Transaction {

  get value() {
    return this.amount;
  }

  isAllowed() {return true}
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');

const t1 = new Deposit(100.00, myAccount);
t1.commit();


const t2 = new Withdrawal(101, myAccount);
t2.commit();


const t3 = new Deposit(500.00, myAccount);
t3.commit();


console.log(myAccount.balance);
