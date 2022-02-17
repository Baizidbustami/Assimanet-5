function Allahuakbar (){
    const incomeButton = document.getElementById('income-btn');
    const incomeButtonText = incomeButton.value;
    const incomeButtonTotal = parseFloat(incomeButtonText);
    incomeButton.value=''
    // food input Button
    const foodButton = document.getElementById('food-btn');
    const foodButtonText = foodButton.value;
    const foodButtonTotal =parseFloat(foodButtonText);
    foodButton.value=''

    // rent Input Button
    const rentButton = document.getElementById('rent-btn');
    const rentButtonText = rentButton.value;
    const rentButtonTotal =parseFloat(rentButtonText);
    rentButton.value=''

    // Clothes Input Button
    const clotheButton = document.getElementById('clothes-btn');
    const clotheButtonText = clotheButton.value;
    const clotheButtonTotal =parseFloat(clotheButtonText);
    clotheButton.value=''
    const allsumTotal = foodButtonTotal+rentButtonTotal+clotheButtonTotal;
    const expenses = document.getElementById('deposit-amount');
    const expensesText = expenses.innerText;
    const totalExpenses = parseFloat(expensesText);
    const mahi = totalExpenses +allsumTotal;
    expenses.innerText = mahi;

    // Total Blance
    const blance = document.getElementById('blance-amount');
    const blanceText = blance.innerText;
    // const blanceTotal = parseFloat(blanceText);
     const blanceButton=incomeButtonTotal - allsumTotal;  
     blance.innerText = blanceButton;

    //  saveButton
     document.getElementById('save-btn').addEventListener('click',function(){
      const percentageButton = document.getElementById('Percentage');
      const percentageText = percentageButton.value;
      const PercentageTotal = parseFloat(percentageText);
      const fahim = blanceButton * PercentageTotal / 100;
      percentageButton.value = fahim;
      percentageButton.value=''

    //   saveAmount
      const savAmount = document.getElementById('amount');
      const savAmountText = savAmount.innerText;
      const savAmountTotal = parseFloat(savAmountText);
      const savAmountTotalBlance = fahim + savAmountTotal;
       savAmount.innerText =savAmountTotalBlance;
    

        // Remaining Balance 
        const remainingButton = document.getElementById('Remaining-blc');
        const remainingButtonText = remainingButton.innerText;
        // const remainingButtonTotal = parseFloat(remainingButtonText);
        // const totalCost = fahim - savAmountTotalBlance
        remainingButton.innerText = blanceButton - savAmountTotalBlance
    })
}
// document.getElementById('save-btn').addEventListener('click',function(){
    
// })

document.getElementById('Calculate-btn').addEventListener('click', function(){
    Allahuakbar ()
 
})