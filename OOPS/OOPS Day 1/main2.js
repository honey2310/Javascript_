// create class for ATM, with checkBalance, withdraw, deposit

class ATM {
  debitcard;
  pin;
  checkBalance;
  withdraw;
  deposit;

  display(debitcard, pin, checkBalance, withdraw, deposit) {
    this.debitcard = debitcard;
    this.pin = pin;
    this.checkBalance = checkBalance - withdraw + deposit;
    this.withdraw = withdraw;
    this.deposit = deposit;
  }

  checkBalance(debitcard, pin) {
    console.log("Your balance: ", this.checkBalance);
  }
}

const card= new ATM()
card.display("visa","1234", 1000, 500, 500)
document.writeln(card.checkBalance)


