var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var backColor = rootStyles.getPropertyValue('--backColor');

let colors = ['red', 'blue', 'green'];
let numColors = colors.length;

let header = document.getElementById('colorText');

function getColor() {
    var num = Math.floor(Math.random() * numColors);
    
    return colors[num];
}

let chosenColor = getColor();

header.innerHTML = "Current Color is " + chosenColor;

root.style.setProperty('--backColor', chosenColor);
console.log('Background Color: ', chosenColor);

var newColor = '';

function colorChange(newColor) {
    header.innerHTML = "Current Color is " + newColor;
    root.style.setProperty('--backColor', newColor);
    console.log('New Background Color: ', newColor);
}

var inputText = document.getElementById('inputText');
