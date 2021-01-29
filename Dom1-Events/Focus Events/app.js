// When you enter the input field, a function is triggered which sets the background 
// color to skyBlue. When you leave the input field, 
// a function is triggered which sets the background color to grey.


var color= document.getElementById('myForm');
color.addEventListener('focus', myFocusFunction, true); //add boolean
color.addEventListener('blur', myBlurFunction, true); //add boolean

function myFocusFunction() {
    document.getElementById('text').style.backgroundColor='10px, skyBlue, solid';
    document.getElementById('date').style.backgroundColor= '10px, skyBlue, solid';
}

function myBlurFunction(){
    document.getElementById('text').style.backgroundColor='grey';
    document.getElementById('text').style.backgroundColor='grey';
}
