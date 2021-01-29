//  Caps Lock Activated?
// Write some text in the input field,
//  using the Cap Lock key on and off in the input field:

// Hint: The getModifierState() method

// caps lock activated?


function myCaps(event)
var x= event.getModifierState ("CapsLock");
document.getElementById ('caps').innterHTML= "The Caps is On!" + x;

function myCaps(event)
var x= event.getModifierState ("CapsLock");
document.getElementById ('caps').innterHTML= "Caps Lock Activated" + x;