const inputBill = document.getElementById("billTotalInput");
const tipBill = document.getElementById("tipInput");
const numberOfPeopleDIV = document.getElementById("numberOfPeople");
const perPersonDIV = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDIV.innerText);

// calculate input Bill
const calculateBill = () => {
    // input amount , tip amount ,  total amount
    const inputAmount = Number(inputBill.value);
    const tipPercentage = Number(tipBill.value) / 100;
    const tipAmount = inputAmount * tipPercentage;
    const totalBill = inputAmount + tipAmount;
    const totalPayingAmount = (totalBill) / numberOfPeople;
    
    perPersonDIV.innerText = `$${totalPayingAmount.toFixed(2)}`;
}  

const increasePeople = () => {
    numberOfPeople += 1;
    numberOfPeopleDIV.innerText = `${numberOfPeople}`;
    calculateBill();
}

const decreasePeople = () => {
    numberOfPeople -= 1;
    if(numberOfPeople < 1) {
        alert("number of people should be atleast 1");
        numberOfPeople = 1;
    }
    numberOfPeopleDIV.innerText = numberOfPeople;
    calculateBill();
}