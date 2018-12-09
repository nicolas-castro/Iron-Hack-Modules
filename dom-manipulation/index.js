console.log("JS connected");
const theCatDiv = document.getElementById("cat");
// const theCatDiv = document.querySelector("div");
console.log(" = = == ", theCatDiv);
// put the text on the DOM => innerHTML
theCatDiv.innerHTML = "Hey, there! I'm a cat."

// removing element from DOM
// theCatDiv.remove();

// JS methods for style manipulation
theCatDiv.style.backgroundColor = "yellow";
theCatDiv.style.fontSize = "50px";
theCatDiv.style.padding = "20px";
theCatDiv.style.borderBottom = "3px solid green";

// create DOM element
const theLink = document.createElement("a");
theCatDiv.appendChild(theLink);

// add the attributes to DOM elements
theLink.setAttribute("href", "http://google.com");
theLink.innerHTML = "Go to Google!";
theLink.target = "_blank";

const theSuperDiv = document.createElement("div");
document.body.appendChild(theSuperDiv);
const theScriptEl = document.querySelector("script");
// console.log(theScriptEl);
//  position theSuperDiv before script element on the DOM
document.body.insertBefore(theSuperDiv, theScriptEl);

// remove child element
// theCatDiv.removeChild(theLink);

// add ID to superDiv

// theSuperDiv.setAttribute("id", "super-id");
theSuperDiv.id = "super-id";

// create h1 element on the DOM
const theh1 = document.createElement("h1");

// append h1 as child of superDiv
theSuperDiv.appendChild(theh1);

// add text inside h1
theh1.innerHTML = "I";

// add background color 
theh1.style.backgroundColor = "green";

theh1.style.textAlign = "center";

function getRandomColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
// const theColor = getRandomColor();
// console.log(theColor);
function changeBGcolor(){
   return theh1.style.backgroundColor = getRandomColor();
}

function changeText(){
    if(theh1.innerHTML === "I"){
        theh1.innerHTML = "LOVE";
    } else if(theh1.innerHTML === "LOVE"){
        theh1.innerHTML = "JASMINE";
    } else if(theh1.innerHTML === "JASMINE"){
        theh1.innerHTML = "I";
    }
}

// changeText();

function update(){
    changeBGcolor();
    changeText();
}

// setInterval(update, 300);

const theInput = document.createElement("input");
document.body.appendChild(theInput);
document.body.insertBefore(theInput, theScriptEl);

const theButton = document.createElement("button");
document.body.appendChild(theButton);
document.body.insertBefore(theButton, theScriptEl);
theButton.innerHTML = "Send"

theButton.onclick = function(){
    // console.log("I'm clicking!!");
    const userName = theInput.value;
    // console.log(userName);
    const theWelcomeNote = document.createElement("h2");
    document.body.appendChild(theWelcomeNote);
    document.body.insertBefore(theWelcomeNote, theScriptEl);
    theWelcomeNote.innerHTML = `Welcome, ${userName}!`;
    theButton.disabled = true;

    setTimeout(function (){
        theWelcomeNote.innerHTML = `Bye ${userName}!!!`;
        theButton.disabled = false;
    }, 2000);
}

const theCoolDivs = document.getElementsByClassName("cool-class");
console.log(theCoolDivs); // => here you get HTMLCollection which looks like array but it's not an array
// we can use spread operator to turn it to the array
const newCoolDivs = [...theCoolDivs];
// after this point we are manipulating with the array and we can apply all the array methods
newCoolDivs.forEach((theDiv) => {
    console.log("the elements of this array are: ", theDiv);
})