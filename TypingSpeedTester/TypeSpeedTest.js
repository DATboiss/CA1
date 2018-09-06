//Typeracer text
var typetexts = ["During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon. Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy.",
    "The Earth is a world, the world is a ball, a ball in a game with no rules at all. And just as I wonder at the beauty of it all, you go and drop it and it breaks and falls.",
    "In the casino, the cardinal rule is to keep them playing and to keep them coming back. The longer they play, the more they lose, and in the end, we get it all. Running a casino is like robbing a bank with no cops around.",
    "A glooming peace this morning with it brings. The sun for sorrow will not show its head. Go hence to have more talk of these sad things. Some shall be pardoned and some punished. For never was a story of more woe than this of Juliet and her Romeo.",
    "A little boy went out to play. When he opened his door, he saw the world. As he passed through the doorway, he caused a reflection. Evil was born, and followed the boy.",
    "If I have to hear one more time that you did this for the family...",
    "Did you know a young boy drowned the year before those two others were killed? The counselors weren't paying any attention... They were making love while that young boy drowned. His name was Jason. I was working the day that it happened. Preparing meals... here. I was the cook. Jason should've been watched. Every minute. He was... he wasn't a very good swimmer. We can go now, dear.",
    "I'm a beatbox rocker. And you're dancing to my beat. I'm a beatbox rocker. And you're dancing to my beat. I'm a beatbox rocker. And you're dancing to my beat. I'm a beatbox rocker. And I never sound the same.",
    "All time is all time. It does not change. It does not lend itself to warnings or explanations. It simply is. Take it moment by moment, and you will find that we are all, as I've said before, bugs in amber.",
    "The time I waited seemed endless, and I felt doubts and fears crowding upon me. What sort of place had I come to, and among what kind of people? What sort of grim adventure was it on which I had embarked?",
];

//Get elements
const resetButton = document.getElementById("reset");
const typingArea = document.getElementById("typing-area");
const timerElement = document.querySelector(".timer");
const originText = document.querySelector("#origin-text p");
const testWrapper = document.querySelector(".test-wrapper");
const CPMElement = document.querySelector("#CPM");

var timer = [0, 0, 0, 0];
var interval;


//Reset run
resetButton.addEventListener("click", newText)

function newText() {
    clearInterval(interval);
    interval = null;
    timer = [0, 0, 0, 0];
    timerRunning = false;

    typingArea.value = "";
    timerElement.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    
    var item = typetexts[Math.floor(Math.random() * typetexts.length)];
    originText.innerHTML = item;
}


//Compare text
typingArea.addEventListener("keypress", start)
typingArea.addEventListener("keyup", compare)

function compare() {
    var writtenText = typingArea.value;
    var textMatch = originText.innerHTML.substring(0, writtenText.length)
    
    
    if (writtenText == originText.innerHTML) {
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
        CPMcalc();
    } else {
        if (writtenText == textMatch) {
            testWrapper.style.borderColor = "#65CCf3";
        } else {
            testWrapper.style.borderColor = "#E95D0F";
        }
    }
    // }
}


function start() {
    var writtenTextLength = typingArea.value.length;
    if (writtenTextLength === 0) {
        interval = setInterval(runTimer, 10)
    }
    
}

//timer
function runTimer() {
    let currentTime = addZero(timer[0]) + ":" + addZero(timer[1]) + ":" + addZero(timer[2]);
    timerElement.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

function addZero(time)
{
    if(time < 10) 
    {
        time = "0" + time;
    }
        
    return time;
}

function CPMcalc()
{
    var text = typingArea.value;
    var textLength = text.length;
    var CPM = textLength/timer[1]*60;
    CPMElement.innerHTML = "Characters per minute: " + CPM
    
}