var accounts = [{username: "karen", balance: 10}];


function deposit(account, amount)
{
    account.balance = account.balance + amount;
    
}

function withdraw(account, amount)
{
    account.balance = account.balance - amount;
}

function getBalance(account)
{
    
    return account.balance;
}



function createAccount(name, waarde)
{
    var account = {};
    account.username = name;
    account.balance = waarde;
    accounts.push(account);
return account;
}

//getaccount functie
function getAccount (name) {
	var matchedAccount;

	for (var i = 0; i < accounts.length; i++) {
		if (accounts[i].username === name) {
			matchedAccount = accounts[i]; //matchedAccount = accounts[i].username
                        console.log(accounts[i].username);
			break;
		}
	}

	return matchedAccount;
}

var lisa_acc = createAccount('lisa', 20);

deposit(lisa_acc, 60);
console.log(getBalance(lisa_acc));
withdraw(lisa_acc,15);
console.log(getBalance(lisa_acc));
console.log(accounts);

var existingAccount = getAccount("karen");
console.log(getBalance(existingAccount));



/*Revisit your bank account practice
 Add validation to the deposit and withdraw functions
 Add a function that returns a anonymous function that returns the
balance from the given account
*/