// navigation
function goToCake() {
    document.getElementById("landing").classList.add("hidden");
    document.getElementById("cakePage").classList.remove("hidden");
}

function goToLetter() {
    document.getElementById("cakePage").classList.add("hidden");
    document.getElementById("letterPage").classList.remove("hidden");
    startLetterTyping();
}

// 💌 typing letter (more emotional pacing)
let letterText = `Even if this is a little late, I hope this still made you smile.

Sana nakahabol haha! Just remember to take a moment to acknowledge how far you've come and keep pushing forward.

I'm so proud of you. I love you and miss you. Take care always.`;

let i = 0;

function startLetterTyping() {
    document.getElementById("letterMessage").innerHTML = "";
    i = 0;
    typeLetter();
}

function typeLetter() {
    if (i < letterText.length) {
        document.getElementById("letterMessage").innerHTML += letterText.charAt(i);
        i++;
        setTimeout(typeLetter, 35);
    }
}