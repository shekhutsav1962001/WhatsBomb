function makeid(length) {
    var result           = [];
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * 
 charactersLength)));
   }
   return result.join('');
}

var myVar = setInterval(sendMessage,200);
var myMessage = "Hey bro how are you ? testing automatic scripting"
let c = 0
let max = 100
function sendMessage() {
  document.execCommand("insertText", false, makeid(7));
  // document.execCommand("insertText", false, myMessage);
  document.getElementsByClassName("_1E0Oz")[0].click();
  c++
  if(c>=max)
  {
    stopMessage()
  }
}

function stopMessage() {
  clearInterval(myVar);
}
