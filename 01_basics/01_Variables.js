const accountId=144553
let accountEmail="athar@google.com"
var accountPassword="12345"
accountCity="Delhi"
let accountState;

//accountId=2 //not allowed
accountEmail="mj@yahoo.com"
accountPassword="x123z"
accountCity="patna"

console.log(accountId);
/*
prefer not to use var
because of issue in block scope ({block scope}) and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
