const display = document.getElementById("display");
const displayUpdate = (value) => {
    return display.value += value;
};
const clearDisplay = () => {
    return display.value = "";
};
const giveResult = () => {
    return display.value = eval(display.value);
};