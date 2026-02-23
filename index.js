const input1 = document.getElementById("a1");
const input2 = document.getElementById("a2");
const para1 = document.getElementById("para");

function same() {
    let value1 = Number(input1.value);
    let value2 = Number(input2.value);

    para1.textContent = "The total of bill is " + 
        (value1 + (value1 * (value2 / 100)));

    para1.style.fontSize = "30px";
    para1.style.marginTop = "30px";
    para1.style.fontWeight = "700";
    para1.style.textAlign = "center";
    para1.style.color = "white";
}