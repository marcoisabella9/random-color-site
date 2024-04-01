var root = document.querySelector(':root'); //declare root from styles
var rootStyles = getComputedStyle(root); //get styles from root

var card = document.querySelector('.container .card'); //get card class from html

//get values of style variables
var backColor = rootStyles.getPropertyValue('--backColor');
var colorText = rootStyles.getPropertyValue('--colorText');

//randomizing site starting color between r,g,b
let colors = ['red', 'blue', 'green']; 
let numColors = colors.length;

var eggCompletion = 0; //easter egg (eggCompletion/3) text

//function to choose one of the three initial colors
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

//table filled with all acceptable color values, this is referenced when validating user input
const acceptableColors = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgreen','lightgrey','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','navyblue','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];

//function to create a new element of an image
function showImage(src, width, height, alt) {
    if (eggCompletion > 0) {
        try {
            document.body.removeChild(img);
        }
        catch {

        }
    }
    var img = document.createElement('img');
    img.src = src;
    img.width = width;
    img.height = height;
    img.alt = alt;

    card.appendChild(img);
}

//variables keeping track of individual easter egg completions
var marCompletion = false;
var joshCompletion = false;
var sanCompletion = false;


function colorChange(newColor) { //repeating above steps every time user inputs a new color
    if (acceptableColors.includes(newColor.toLowerCase())) {
        root.style.setProperty('--backColor', newColor.toLowerCase());
        header.innerHTML = "Current Color is " + newColor;
        
        //if background color is black change text color to white, and vice versa
        if (newColor.toLowerCase() == 'black') {
            root.style.setProperty('--colorText', 'white');
            console.log('text color changed to white');
            console.log('New Background Color: ', newColor);
        }
        else if (newColor.toLowerCase() == 'white') {
            root.style.setProperty('--colorText', 'black');
            console.log('text color changed to black');
            console.log('New Background Color: ', newColor);
        }
    }
    else if (newColor.toLowerCase() == 'marco') { //Easter Eggs:)
        if (eggCompletion < 3 && marCompletion == false) { //checks conditions on whether to add to the completion, as to not count duplicate completions, or go over total possible completions
            eggCompletion++;
            marCompletion = true;
            showImage('images/HARD.jpg', 500, 300, 'marqito goat');
            console.log('YOU FOUND AN EASTER EGG! (' + eggCompletion + '/3)');
            header.innerHTML = 'YOU FOUND AN EASTER EGG! (' + eggCompletion + '/3)';
        }
    }
    else if (newColor.toLowerCase() == 'josh') {
        if (eggCompletion < 3 && joshCompletion == false) {
            eggCompletion++;
            joshCompletion = true;
            showImage('images/FullSizeRender.jpg', 500, 300, 'joshie');
            console.log('YOU FOUND AN EASTER EGG! (' + eggCompletion + '/3)');
            header.innerHTML = 'YOU FOUND AN EASTER EGG! (' + eggCompletion + '/3)';
        }
    }
    else if (newColor.toLowerCase() == 'san') {
        if (eggCompletion < 3 && sanCompletion == false) {
            eggCompletion++;
            sanCompletion = true;
            console.log('YOU FOUND AN EASTER EGG! (' + eggCompletion + '/3)');
            header.innerHTML = 'YOU FOUND AN EASTER EGG! (' + eggCompletion + '/3)';
            showImage('images/eugene.jpg', 300, 500, 'san');
        }
    }
    else {
        console.log(newColor + " is not an accepted color, check 'All Colors'.");
        header.innerHTML = newColor + " is not an accepted color, check 'All Colors'.";
    }
}