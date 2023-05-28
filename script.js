const display = document.getElementById("display");
const displayUpdate = (value) => {
    return display.value += value;
};
const clearDisplay = () => {
    return display.value = "";
};
const removeLastCharacter = () => {
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}
const giveResult = () => {
    return display.value = eval(display.value);
};