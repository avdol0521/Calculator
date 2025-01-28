const display = document.getElementById("display");
let currentval = "";
let standby = "";
let standbyLastValue = standby.charAt(standby.length - 1);
let isEvalSuccessful = false;
const allowedValues = ['*', '(', ')', '/', '+', '-', '.'];
const numbercaller = (value) => {
    if (display.value === "Syntax Error :(") {
            display.value = "";
        }
    currentval += value.toString();
    displayUpdate(value);
    console.log(currentval);
}
const operatorcaller = (value) => {
    let currentLastValue = currentval.charAt(currentval.length - 1);
    standbyLastValue = standby.charAt(standby.length - 1);
    if (allowedValues.includes(standbyLastValue) && currentval === "") {
        return;
    } else {
        if (display.value === "Syntax Error :(") {
            display.value = "";
        }
        currentval += value.toString();
        standby += currentval;
        currentval = "";
        displayUpdate(value);
    }
}
const displayUpdate = (value) => {
    return display.value += value;
};
const clearDisplay = () => {
    display.value = "";
    currentval = "";
    standby = "";
};
const removeLastCharacter = () => {
    if (display.value === "Syntax Error :(") {
        display.value = "";
    }
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1);
    standbyLastValue = standbyLastValue.slice(0, -1);
}
const giveResult = () => {
    try {
        display.value = eval(display.value);
        isEvalSuccessful = true;
    } catch (error) {
        display.value = "Syntax Error :("
    }
};
// .     .       .  .   . .   .   . .    +  .
//   .     .  :     .    .. :. .___---------___.
//        .  .   .    .  :.:. _".^ .^ ^.  '.. :"-_. .
//     .  :       .  .  .:../:            . .^  :.:\.
//         .   . :: +. :.:/: .   .    .        . . .:\
//  .  :    .     . _ :::/:               .  ^ .  . .:\
//   .. . .   . - : :.:./.                        .  .:\
//   .      .     . :..|:                    .  .  ^. .:|
//     .       . : : ..||        .                . . !:|
//   .     . . . ::. ::\(                           . :)/
//  .   .     : . : .:.|. ######              .#######::|
//   :.. .  :-  : .:  ::|.#######           ..########:|
//  .  .  .  ..  .  .. :\ ########          :######## :/
//   .        .+ :: : -.:\ ########       . ########.:/
//     .  .+   . . . . :.:\. #######       #######..:/
//       :: . . . . ::.:..:.\           .   .   ..:/
//    .   .   .  .. :  -::::.\.       | |     . .:/
//       .  :  .  .  .-:.":.::.\             ..:/
//  .      -.   . . . .: .:::.:.\.           .:/
// .   .   .  :      : ....::_:..:\   ___.  :/
//    .   .  .   .:. .. .  .: :.:.:\       :/
//      +   .   .   : . ::. :.:. .:.|\  .:/|
//      .         +   .  .  ...:: ..|  --.:|
// .      . . .   .  .  . ... :..:.."(  ..)"
//  .   .       .      :  .   .: ::/  .  .::\