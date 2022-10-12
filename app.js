const display = document.querySelector('.time');

function formatTime(value) {
    return value < 10 ? `0${value}` : value;
}

function getTens(value) {
    return parseInt(value / 10);
    // 28/10 = 2.8 --> parseInt devuelve 2
}

function getUnits(value) {
    return value % 10;
    // 28/8 = 2.8 --> el resto es 8
};

function getValue(time, valueType) {
    const currentTime = formatTime(time);

    return valueType == 'tens' ? getTens(currentTime) : getUnits(currentTime);
}

function createDigit(value, type) {
    const valueDisplayed = value ? getValue(value, type) : ':';
    const element = document.createElement('p');
    const textValue = document.createTextNode(valueDisplayed);
    element.setAttribute('class', 'digit')
    element.appendChild(textValue);
    return element;
}


// function displayTime() {
//     const currentTime = new Date();
//     const hour = currentTime.getHours()
//     const minutes = currentTime.getMinutes();
//     const seconds = currentTime.getSeconds();

//     clearDisplay();
//     display.append(createDigit(hour, 'tens'));
//     display.append(createDigit(hour));
//     display.append(createDigit());
//     display.append(createDigit(minutes, 'tens'));
//     display.append(createDigit(minutes));
//     display.append(createDigit());
//     display.append(createDigit(seconds, 'tens'));
//     display.append(createDigit((seconds)));
//}

function displayTime() {
    const currentTime = new Date();
    const hour = currentTime.getHours()
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    display.innerHTML = `
    <p class="digit">${getValue(hour, 'tens')}</p>
    <p class="digit">${getValue(hour,)}</p>
    <p class="digit">:</p>
    <p class="digit">${getValue(minutes, 'tens')}</p>
    <p class="digit">${getValue(minutes)}</p>
    <p class="digit">:</p>
    <p class="digit">${getValue(seconds, 'tens')}</p>
    <p class="digit">${getValue(seconds)}</p>
    `;
}



function clearDisplay() {
    display.innerHTML = '';
}

setInterval(displayTime, 1000);