const messagebutton = document.getElementById('messagebutton');
const buttonmessage = document.getElementById('buttonmessage');

const messages = ["Give Up", "You Suck", "You Smell like Farts."]

var messageChosen
var lastMessage

function setMessage() {
    messageChosen = Math.floor(Math.random() * 3)
    
    if (messageChosen != lastMessage) {
        
        console.log(messages[messageChosen]);
        buttonmessage.textContent = messages[messageChosen];
        lastMessage = messageChosen

    } else {
        setMessage()
    }
}

messagebutton.addEventListener('click', function() {
    buttonmessage.textContent = "...";
    setTimeout(setMessage, 1000)
});