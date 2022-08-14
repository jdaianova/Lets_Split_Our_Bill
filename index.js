const button = document.querySelector('#btn');
const buttonTip = document.querySelector('#addTip');

button.addEventListener('click', calculateAmount);
buttonTip.addEventListener('click', showTip);

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector('#bill').value;
    const people = document.querySelector('#people').value;
    const tip = document.querySelector('#tip').value;

    if (bill === "" || people === "" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information.',
          })
    };

    // let billSplit = Number(bill / people).toFixed(2);
    // let totalTip = Number(bill * tip / people).toFixed(2);
    // let totalAmount = (Number(totalTip) + Number(billSplit)).toFixed(2);

    let billSplit = bill / people;
    let totalTip = bill * tip / people;
    let totalAmount = totalTip + billSplit;

    document.querySelector('#dividedBill').textContent = billSplit.toFixed(2);
    document.querySelector('#dividedTip').textContent = totalTip.toFixed(2);
    document.querySelector('#billAndTip').textContent = totalAmount.toFixed(2);
};

function showTip(e) {
    e.preventDefault();
    tip.style.display = "block";
};
