function createBankAccount(accountHolder,initialBalance){
    let balance = initialBalance;
    return{
        getAccountHolder: function (){
            return accountaHolder;
        },
        getBalance:function (){
            return balance;
        },
        deposit: function (amount){
            if(amount>0){
                balance += amount;
                return `Deposited RS${amoount}. New Balance: Rs${balance}`;
            }
            return "Invalid deposite amount";
        },
        withdraw: function (amount) {
            if (amount <= balance && amount > 0){
                balance -= amount;
                return `withdraw Rs${amount}.New Balance: Rs${balance}`;
            }
            return "Insufficeient balance or invalid amount";
        }
    }
}

const myAccount = createBankAccount("Anshika",5000);

console.log(myAccount.getAccountHolder())
console.log(myAccount.getBalance())
console.log(myAccount.getdeposit())