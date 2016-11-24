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



function createAccount(name, waarde)
{
    var account = {};
    account.username = name;
    account.Balance = waarde;
    accounts.push(account);
}

//getaccount functie
function getAccount (username) {
	var matchedAccount;

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username === username) {
			matchedAccount = accounts[i];
			break;
		}
	}

	return matchedAccount;
}

createAccount('lisa', 20);
getAccount ('lisa');
deposit(account, 50);
console.log(account.Balance);
console.log(account);
console.log(accounts);

//als je in een functie zit en je wilt een vairbale declareren en enkel lokaal dan var ervoor, ander niet dan declareerd ge die in global.
