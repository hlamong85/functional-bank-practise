document.getElementById('deposit').addEventListener('click', function () {
    console.log('deposit button clicked');
    const inputText = document.getElementById('deposit-amount');
    const getInputText = inputText.value;
    const getInputValue = parseFloat(getInputText);
    console.log(getInputText);
    //------------------
    const depositInputText = document.getElementById('deposit-total');
    const depositInputTextValue = depositInputText.innerText;
    depositInputText.innerText = getInputText;
    //...............
    inputText.value = '';
    //update blance total 
    const updatebalanceTotalText = document.getElementById('balance-total');
    const updateText = updatebalanceTotalText.innerText;
    const updateTotal = parseFloat(updateText);
    const totalUpdate = getInputValue + updateTotal;
    updatebalanceTotalText.innerText = totalUpdate;







});
document.getElementById('withdraw').addEventListener('click', function () {
    console.log('button clicked');
    const withdrawText = document.getElementById('withdraw-amount');
    const withdrawTextInput = withdrawText.value;
    const withdrawInutAmount = parseFloat(withdrawTextInput);
    // withdrawText.value = withdrawTextInput;


    console.log(withdrawTextInput);
    //show button
    const withdrawTotal = document.getElementById('withdraw-total');
    const getWithdrawText = withdrawTotal.innerText;
    const getWithdrawAmount = parseFloat(getWithdrawText);
    const totalWithdraw = getWithdrawAmount + withdrawInutAmount;
    // withdrawTotal.innerText = withdrawInutAmount;
    withdrawTotal.innerText = totalWithdraw;
    withdrawText.value = '';
    //update blance
    const getUpdateText = document.getElementById('balance-total');
    const updateWithdrawTexValue = getUpdateText.innerText;
    const updateInfo = parseFloat(updateWithdrawTexValue);
    const totalGet = updateInfo - withdrawInutAmount;
    getUpdateText.innerText = totalGet;

    //  const showWithdrawUpdateText = getUpdateWithdraText.innerText;
    // const showWithdrawUpdateAmount = parseFloat(showWithdrawUpdateText);
    // const totalUpdateIs = showWithdrawUpdateAmount - getWithdrawAmount;
    // getUpdateWithdraText.innerText = totalUpdateIs;











})