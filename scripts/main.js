let mPrint = document.querySelector("h1");
let mButton = document.querySelector("button");
let result, temperature, tempType;
function calculate() {
    temperature = document.getElementById("temp").value;
    tempType = document.getElementById("tempSel").value;

    if (tempType === "celsius") {
        result = (temperature * (9 / 5)) + 32;
        console.log(result);
        document.getElementById("result").innerHTML = result + " f is the temperature";
    } else {
        result = (temperature - 32) * (5 / 9);
        console.log(result);
        document.getElementById("result").innerHTML = result + " C is the temperature";
    }
}
