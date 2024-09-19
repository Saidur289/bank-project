const loginBtn = document.getElementById('login').addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})
// deposit button hander add 
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function(){
 //   const depositAmmount = document.getElementById('depositAmmount').value;
 //   const depositNumber = parseFloat(depositAmmount);      
//    console.log(depositNumber);
//     const currentDeposit = document.getElementById('currentDeposit').innerText;   
//    const currentDepositNumber  = parseFloat(currentDeposit);
//    const totalDeposit = depositNumber + currentDepositNumber;
//    document.getElementById('currentDeposit').innerText = totalDeposit;
const depositNumber = getInputNumber('depositAmmount'); 
   updateSpanText('currentDeposit', depositNumber);
   updateSpanText('currentBalance', depositNumber);
   document.getElementById('depositAmmount').value = "";
   
})
function updateSpanText(id, addedNumber){
    const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = currentNumber + addedNumber;
   document.getElementById(id).innerText = totalAmount;
}

// alternative way 
const withdrawBtn = document.getElementById('addWithdraw');
 withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    console.log(withdrawAmount);
    updateSpanText('currentWithdraw',withdrawNumber );
    updateSpanText('currentBalance', -1 * withdrawNumber );
    document.getElementById('withdrawAmount').value = "";

 })


//   create funtion for reduce code and make it easiar
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// withdrawBtn event handler
// const withdrawBtn = document.getElementById('addWithdraw');
// withdrawBtn.addEventListener('click', function(){
//     const withdrawAmount = document.getElementById('withdrawAmount').value;
//    const withdrawNumber = parseFloat(withdrawAmount);
//    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
//    const currentWithdrawNumber = parseFloat(currentWithdraw);
//    const totalWithdraw = withdrawNumber + currentWithdrawNumber;
//    document.getElementById('currentWithdraw').innerText = totalWithdraw;
//    const currentBalance = document.getElementById('currentBalance').innerText;
//    const currentBalanceNumber = parseFloat(currentBalance);
//    const balanceLeft = currentBalanceNumber - withdrawNumber;
//    document.getElementById('currentBalance').innerText = balanceLeft;
//    document.getElementById('withdrawAmount').value = "";
// })

