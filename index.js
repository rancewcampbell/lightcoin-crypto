class Account {

  constructor(username) {
    // Have the account balance start at $0 since that makes more sense
    this.username = username;
    this.balance = 0;
  }
}


class Withdrawal {

  constructor(amount, account) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.balance -= this.amount
  }

}

class Deposit {

  constructor(amount, account) {
    this.account = account;
    this.amount = amount;
  }

  commit() {
    this.account.balance += this.amount;
  }

}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');

t1 = new Deposit(100.00, myAccount);
t1.commit();

t2 = new Withdrawal(50.25, myAccount);
t2.commit();

console.log(myAccount.balance);
