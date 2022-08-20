function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}
function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();
    const inputField = document.getElementById('display-pin');
    inputField.value = pin;
})
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypeNumber = typeNumberField.value;
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypeNumber.split('');
            digits.pop();
            typeNumberField.value = digits.join('');
        }
    }
    else {
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
})
document.getElementById('verify-pin').addEventListener('click', function () {
    const inputField = document.getElementById('display-pin');
    const currentPin = inputField.value;
    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;
    const success = document.getElementById('pin-success');
    const failour = document.getElementById('pin-failure');
    if (currentPin === typeNumber) {
        success.style.display = 'block';
        failour.style.display = 'none';
    }
    else {
        failour.style.display = 'block';
        success.style.display = 'none';
    }

})