const accountId = 144553 // cann't be modify
let accountEmail = "darshu@gmail.com" 
var accountPassword = "12345"
accountCity = "Ahmedabad"
let accountState;

// accountId = 2 // not allowed


accountEmail = "darshana@gmail.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])