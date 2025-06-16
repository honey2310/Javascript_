// module 5 ques2
// Define a class `BankAccount` with private attributes `accountNumber`, `balance`,
// and `ownerName`. Encapsulate these attributes using appropriate access specifiers.
//  Implement public member functions to credit, debit, and display the balance.
//  Demonstrate encapsulation by interacting with the class through its member functions.

class BankAccount { // class is created with the name of bankaccount
  constructor(accountNumber, balance, ownerName) { // special method is called name constructor with the parameters
    this.accountNumber = accountNumber;// global variables is created with this keyword and the local attributes value is assign to gloabal attributes
    this.balance = balance; // global variables is created with this keyword and the local attributes value is assign to gloabal attributes
    this.ownerName = ownerName; // global variables is created with this keyword and the local attributes value is assign to gloabal attributes
  }

  displaybalance(accountNumber) { // display balance method is created to show result with parameter account number
    document.writeln("Your Balance:", +this.balance); // printed the very first balance
  }

  creditbal(accountNumber, amount) { // credit balance method is created to credit the balance with parameter account number and amount(withdrawal amount)
    this.balance = this.balance - amount; // current balance is credited in account 
    document.writeln("<br> Your credit amount: " + amount); // printed credit amount
  }

  debitbal(accountNumber,deposit){ // debit balance  menthod is created to debit the balnce with parametersaccount number and deposit(deposit amount)
    this.balance=this.balance + deposit // current balance is debited in account
    document.writeln("<br> Your debit amount: " + deposit); // printed debited amount
  }

  currbalance(){ // currbalance method is created to see the balance afetr credit and debit amount
    document.writeln("<br>Your current balance: " + this.balance) //printed cuurent after credit and debit amount
  }
}

const bank = new BankAccount(1234567, 1000, "harsh"); // an object is created with name bank and class is access with values
bank.displaybalance(1234567); // display balance is called with parameters
bank.creditbal(1234567, 300);// credit balance is called with credit amount
bank.debitbal(1234567,1000) // debit balance is called with debit amount
bank.currbalance() // this method is called to see current amount after debit and credit amount
