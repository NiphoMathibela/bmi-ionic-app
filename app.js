const calcButton = document.getElementById("calc");
const height = document.getElementById("height-input");
const weight = document.getElementById("weight-input");
const resetBtn = document.getElementById("reset");
const resultArea = document.getElementById("result");


const calaculateBMI = () => {
    const enteredHeight = +height.value;
    const enteredWeight = +weight.value;

    const bmi = enteredWeight / (enteredHeight * enteredHeight)
    console.log(bmi)

    if(isNaN(bmi)){
        alert("Please enter a number!")
        return;
    }

    const resultElement = document.createElement("ion-card");
    resultElement.innerHTML = `<ion-card-content><h2>${bmi}</h2></ion-card-content>`;

    resultArea.innerHTML = "";
    resultArea.appendChild(resultElement)
}


const resetValues = () => {
    height.value = "";
    weight.value = "";
}

calcButton.addEventListener('click', calaculateBMI)
resetBtn.addEventListener("click", resetValues)