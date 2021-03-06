var accounts = [{username: "karen", balance: 10}];

// Add validation to the deposit and withdraw functions
//− Only accept numbers as amount
function deposit(account, amount)
{
    if (typeof amount === 'number') {                            //https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Operatoren/typeof

        account.balance = account.balance + amount;
    } else {
        console.log("geef aub een geldig getal op voor amount.");
    }       //window.alert("geef aub een geldig getal op.")
}

function withdraw(account, amount)
{
    if (typeof amount === 'number' && (account.balance - amount) >= 0) {                //mag geen leeg account hebben veronderstel ik .
        account.balance = account.balance - amount;
    } else {
        console.log('geef aub een geldig getal op voor te storten');
    }
}


/*function makeAdder( basenumber ) {
 return function ( numtoadd ) {
 return numtoadd + basenumber;
 }
 }
 */
//anon func
function getBalance()
{
    return function (account)
    {
        return account.balance;
    };

}

//Standaard gwn

function getBalance_std(account) {
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

//account creator + check
var lisa_acc = createAccount('lisa', 20);
console.log(accounts);

//deposit,withdraw check --> ook mogelijk natuurlijk console.log(balans(lisa_acc));
deposit(lisa_acc, 60);
console.log(getBalance_std(lisa_acc));
withdraw(lisa_acc, 15);
console.log(getBalance_std(lisa_acc));
console.log(balans(lisa_acc));

//getAccount check
var existingAccount = getAccount("karen");
console.log(getBalance_std(existingAccount));

//validation checker deposit
//deposit(lisa_acc, 'az');
//console.log(getBalance(lisa_acc));

//validation checker withdraw
//withdraw(lisa_acc,'bf');
withdraw(lisa_acc, 66); // kom normaal -1 uit zien of hij zegt dat het niet klopt en gwn de vorige balance teruggeven.
console.log(getBalance_std(lisa_acc));

console.log(balans(lisa_acc));
