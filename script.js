var root = document.querySelector(':root'); //declare root from styles
var rootStyles = getComputedStyle(root); //get styles from root

var backColor = rootStyles.getPropertyValue('--backColor');
var colorText = rootStyles.getPropertyValue('--colorText');

let colors = ['red', 'blue', 'green']; //randomizing site starting color between r,g,b
let numColors = colors.length;

function getColor() {
    var num = Math.floor(Math.random() * numColors);
    
    return colors[num];
}

let chosenColor = getColor();

let header = document.getElementById('colorText'); //getting header text
header.innerHTML = "Current Color is " + chosenColor; //setting header text

root.style.setProperty('--backColor', chosenColor); //setting background to chosenColor
console.log('Background Color: ', chosenColor); 

var newColor = '';
const acceptableColors = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','navyblue','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];

function colorChange(newColor) { //repeating above steps every time user wants
    if (acceptableColors.includes(newColor)) {
        root.style.setProperty('--backColor', newColor);
        header.innerHTML = "Current Color is " + newColor;
        
        //if background color is black change text color to white
        if (newColor == 'black') {
            root.style.setProperty('--colorText', 'white');
            console.log('text color changed to white');
            console.log('New Background Color: ', newColor);
        }
    }
    else if (newColor == 'marco' || newColor == 'josh' || newColor == 'san') { //Easter Egg :)
        console.log('YOU FOUND THE EASTER EGG!');
        header.innerHTML = 'YOU FOUND THE EASTER EGG!';
    }
    else {
        console.log(newColor + " is not an accepted color, check 'All Colors'.");
        header.innerHTML = newColor + " is not an accepted color, check 'All Colors'.";
    }
}