
var accounts = [{username: "karen", balance: 10}];

/*
 * REFERENCE MATERIAL !!!
 * person.eat = function ( what ) {
 console.log( this.firstName + ‘ eats a ’ + what );
 };
 
 CONSTRUCTOR
 var Account = function (id, name) {
 this.id = id;
 this.name = name;
 this.balance = 0;
 this.numTransactions = 0;
 };
 
 PROTOTYPE
 Account.prototype = {
 deposit: function(amount) {
 this.balance += amount;
 this.numTransactions++;
 },
 // Plus other methods…
 };
 
 */

var Account = function (name, balance)
{
    this.username = name;
    this.balance = balance;

    //functie deposit
    this.deposit = function (amount)
    {
        if (typeof amount === 'number') {                            //https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operatoren/typeof

            this.balance = this.balance + amount;
        } else {
            console.log("geef aub een geldig getal op voor amount.");
        }
    };
    //functie withdraw
    this.withdraw = function (amount)
    {
        if (typeof amount === 'number' && (this.balance - amount) >= 0) {                //mag geen leeg account hebben veronderstel ik .
            this.balance = this.balance - amount;
        } else {
            console.log('geef aub een geldig getal op voor te storten');
        }
    };
};





function getBalance()
{
    return function (account)
    {
        return account.balance;
    };

}

//Standaard gwn (redundant)

function getBalance_std(account) {
    return account.balance;
}

//SOLVED Hier pobleem wordt niet correct opgevuld omdat ik alles in name steek en dususername opvul ....
function createAccount(invulling)
{
    
    accounts.push(invulling);
   
}

//getaccount functie
function getAccount(name) {
    var matchedAccount;

    for (var i = 0; i < accounts.length; i++) {
        if (accounts[i].username === name) {
            matchedAccount = accounts[i]; //matchedAccount = accounts[i].username  !!!! Waarom werkt dit niet ? als ik username mee geef weet die toch ook over welk account ik het heb, kan die zo geen positie bepalen ?
            //console.log(accounts[i].username);   //check if to see karen
            break;
        }
    }

    return matchedAccount;
}
//var creatie voor func (like myfunc voorbeeld)
var balans = getBalance();

//New Account --> object Account ingevuld
var lisa_acc = new Account('lisa', 20);
createAccount(lisa_acc);

//console.log(accounts);


lisa_acc.deposit(60);

console.log(getBalance_std(lisa_acc));

lisa_acc.withdraw(15);


//getAccount check
var existingAccount = getAccount("karen");
console.log(getBalance_std(existingAccount));



console.log(balans(lisa_acc));


