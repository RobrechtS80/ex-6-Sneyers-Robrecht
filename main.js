var accounts = [{username: "karen", Balance: 10}];


var account = new Object();

account.Balance = 20;

function deposit(account, amount)
{
    account.Balance = account.Balance + amount;
}

function withdraw(account, amount)
{
    account.Balance = account.Balance - amount;
}

function getBalance(account, amount)
{
    console.log('uw balans is:' + account.Balacne);
    return account.Balance;
}

/*function createAccount(account)
 {
 accounts.push(account);
 }*/

function createAccount(name, waarde)
{
    var account = {};
    account.username = name;
    account.Balance = waarde;
    accounts.push(account);
}
createAccount('lisa', 20);
//createAccount({username:"karen",Balance:10});
//createAccount({username:"karel",Balance:5});
deposit(account, 50);
console.log(account.Balance);
console.log(account);
console.log(accounts);

//als je in een functie zit en je wilt een vairbale declareren en enkel lokaal dan var ervoor, ander niet dan declareerd ge die in global.
