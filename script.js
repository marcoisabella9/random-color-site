var root = document.querySelector(':root');
var rootStyles = getComputedStyle(root);
var backColor = rootStyles.getPropertyValue('--backColor');
let colorChoice = '';

function getNum() {
    return Math.floor(Math.random() * 3 + 1);
}

switch(getNum()) {
    case 1:
        colorChoice = 'green';
        break;
    case 2:
        colorChoice = 'red';
        break;
    case 3:
        colorChoice = 'purple';
        break;
    default:
        colorChoice = 'white';
}


root.style.setProperty('--backColor', colorChoice);
console.log('Background Color: ', colorChoice);