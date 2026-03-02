const input1 = document.getElementById("a1");
const input2 = document.getElementById("a2");
const para1 = document.getElementById("para");

function calculate() {
    const bill = Number(input1.value.trim());
    const tip = Number(input2.value.trim());

    if (bill <= 0 || isNaN(bill)) {
        para1.textContent = "Enter valid bill amount";
        para1.style.color = "red";
        return;
    }

    if (tip < 0 || isNaN(tip)) {
        para1.textContent = "Enter valid tip %";
        para1.style.color = "red";
        return;
    }

    const total = bill + bill * tip / 100;
    para1.textContent = `Total bill with tip: $${total.toFixed(2)}`;
    para1.style.color = "white";
}

// Backward-compatibility for older HTML using onclick="same()"
function same() {
    calculate();
}
