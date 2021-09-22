//on load, box will be created
window.onload = function(){
    //create grey box in corner
    const divBox = document.createElement('div');
    divBox.style.position = "fixed";
    divBox.style.right = "10px";
    divBox.style.top = "10px";
    divBox.style.width = "20vw";
    divBox.style.height = "20vh";
    divBox.style.background = "grey";
    divBox.style.display = "flex";
    divBox.style.flexDirection = "column";
    divBox.style.justifyContent = "center";
    divBox.style.alignItems = "center";
    divBox.style.borderRadius = "20px";
    divBox.style.padding = "10px";
    divBox.style.zIndex = "2";
    //create h1 tag
    const header = document.createElement('h1');
    const headerText = document.createTextNode("omegleChatBot");
    header.appendChild(headerText);
    divBox.appendChild(header);
    header.style.fontSize = "20px";
    //create input area
    const inputArea = document.createElement('textarea');
    divBox.appendChild(inputArea);
    inputArea.classList.add('chatBotInput'); //CLASS: chatBoxInput
    inputArea.setAttribute("type", "text");
    inputArea.style.height = "5vh";
    inputArea.style.width = "20vw";
    inputArea.style.resize = "none";
    inputArea.style.flex = "0 0 5vw";
    inputArea.setAttribute("placeholder", "Paste message, then click 'Start'!")
    //create start button
    const startButton = document.createElement('button');
    const startButtonText = document.createTextNode("Start");
    startButton.appendChild(startButtonText);
    divBox.appendChild(startButton);
    startButton.classList.add('startBtn'); //CLASS: startBtn
    startButton.style.color = "white";
    startButton.style.background = "green";
    startButton.style.width = "5vw";
    startButton.style.height = "3vw";
    startButton.style.display = "flex";
    startButton.style.justifyContent = "center";
    startButton.style.alignItems = "center";
    //create stop button
    const stopButton = document.createElement('button');
    const stopButtonText = document.createTextNode("Stop");
    stopButton.appendChild(stopButtonText);
    divBox.appendChild(stopButton);
    stopButton.classList.add('stopBtn'); //CLASS: stopBtn
    stopButton.style.color = "white";
    stopButton.style.background = "red";
    stopButton.style.width = "5vw";
    stopButton.style.height = "3vw";
    stopButton.style.display = "flex";
    stopButton.style.justifyContent = "center";
    stopButton.style.alignItems = "center";

    //fix entire window to top right of screen
    document.body.appendChild(divBox);

    //start of script
let userMessage = "Please insert a custom message using the extension's GUI.";
const startFuncBtn = document.querySelector('.startBtn');
const stopFuncBtn = document.querySelector('.stopBtn')
// console.log(startFuncBtn); // returns good
// console.log(userMessage) // returns default message
    startFuncBtn.addEventListener('click', function chatBot(){
        userMessage = divBox.children[1].value;
        // console.log(userMessage) // returns what is typed in textarea by user
        var chatBotInterval = setInterval(chatBot, 3000)
        function chatBot(){
            const dscn = document.querySelector('.disconnectbtn');
            const messageBox = document.querySelector('.chatmsg');
            const send = document.querySelector('.sendbtn');
            messageBox.innerHTML = userMessage;
            send.click();
            setTimeout(function(){ dscn.click(); }, 1000);
        };
        // console.log(userMessage) //good output
        stopFuncBtn.addEventListener('click', function(){
            clearInterval(chatBotInterval);
        });
    });
};