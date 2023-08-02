function calculateTip(){
    const  billAmount=parseFloat(document.getElementById("billAmount").value)
    const tipPercentage=parseFloat(document.getElementById("tipPercentage").value)
if(isNaN(billAmount)||isNaN(tipPercentage) ){
    alert("input valid number")
return;
}
else if(isNaN(billAmount)||isNaN(tipPercentage) ){
alert("This is a valid number")
return;
}
const tipAmount=billAmount*tipPercentage
const totalBill=billAmount+tipAmount

document.getElementById("totalbill").textContent="ksh"+Math.ceil (totalBill)

}


