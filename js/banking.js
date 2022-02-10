//handel button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    //get the amount Deposit
    const depositInput = document.getElementById("Deposit-input");
    const newDepositAmount = depositInput.value;
    const newDepositAmount = persefloat(newDepositAmount);

    //update deposit
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepsitTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepsitTotal;
    //update balance Amount
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const prevoiusBalanceTotal = persefloat(balanceTotal);
    const newBalanceTotal = prevoiusBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear Amount
    depositInput.value = "";
  });
