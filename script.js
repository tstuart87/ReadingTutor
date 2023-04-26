// Highlighted selector and display

const left = document.getElementById("left");
const right = document.getElementById("right");

const clearButton = document.getElementById("clear-button");
const formatButton = document.getElementById("format-button");
const capitalizeButton = document.getElementById("capitalize-button");
const lineBreakButton = document.getElementById("singleWordLines-button");
const resetButton = document.getElementById("reset-button");

const readAloundButtonFast = document.getElementById("speak-button-fast");
const readAloundButton = document.getElementById("speak-button");
const readAloundButtonSlow = document.getElementById("speak-button-slow");

const smallFontButton = document.getElementById("small-font-button");
const mediumFontButton = document.getElementById("medium-font-button");
const largeFontButton = document.getElementById("large-font-button");

const highlightedText = document.getElementById("highlighted-text");

let currentHighlightedText;
let formattedText;

let isCaps = false;
let isDotted = false;
let isBreakLined = false;

//DISPLAY HIGHLIGHTED TEXT
right.addEventListener("mouseup", () => {
  const selection = window.getSelection().toString().trim();
  if (selection !== "") {
    left.innerHTML = selection;
    currentHighlightedText = selection;
  }
});

//CLEAR HIGHLIGHTED TEXT
clearButton.addEventListener("click", function () {
  left.innerHTML = "";
});

//DOTS BETWEEN LETTERS FORMATTING
formatButton.addEventListener("click", function () {
  const originalText = currentHighlightedText;
  let formattedText = "";

  if (isDotted) {
    left.innerHTML = currentHighlightedText;
    isDotted = false;
  } else {
    for (let i = 0; i < originalText.length; i++) {
      const currentChar = originalText[i];
      const nextChar = originalText[i + 1];
      const prevChar = originalText[i - 1];

      if (currentChar === " ") {
        formattedText += '<span class="spaceChar">&nbsp;&nbsp;</span>';
        formattedText += " ";
      } else if (
        currentChar !== " " &&
        nextChar !== " " &&
        /[^\w\s]/.test(nextChar) === false
      ) {
        if (/[^\w\s]/.test(currentChar)) {
          formattedText += currentChar;
        } else {
          formattedText += currentChar + '<span class="dotChar">·</span>';
        }
      } else {
        formattedText += currentChar;
      }
    }
    left.innerHTML = formattedText;
    isDotted = true;
  }
});

//CAPITALIZE HIGHLIGHTED TEXT
capitalizeButton.addEventListener("click", function () {
  const originalText = currentHighlightedText;
  let formattedText = "";

  if (isCaps) {
    left.innerHTML = currentHighlightedText;
    isCaps = false;
  } else {
    for (let i = 0; i < originalText.length; i++) {
      const currentChar = originalText[i];
      formattedText += currentChar.toUpperCase();
    }

    left.innerHTML = formattedText;
    isCaps = true;
  }
});

//ONE WORD PER LINE FORMATTING
lineBreakButton.addEventListener("click", function () {
  const originalText = currentHighlightedText;
  let formattedText = "";

  if (isBreakLined) {
    left.innerHTML = currentHighlightedText;
    isBreakLined = false;
  } else {
    for (let i = 0; i < originalText.length; i++) {
      const currentChar = originalText[i];
      const nextChar = originalText[i + 1];
      const prevChar = originalText[i - 1];

      if (currentChar === " ") {
        formattedText += "</br>";
      } else {
        formattedText += currentChar;
      }
    }

    left.innerHTML = formattedText;
    isBreakLined = true;
  }
});

//RESET FORMATTING OF HIGHLIGHTED TEXT
resetButton.addEventListener("click", function () {
  left.innerHTML = currentHighlightedText;
});

//READ ALOUND HIGHLIGHTED TEXT
readAloundButton.addEventListener("click", () => {
  const selection = window.getSelection().toString().trim();
  if (selection !== "") {
    const speech = new SpeechSynthesisUtterance(selection);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  } else if (currentHighlightedText !== "") {
    const speech = new SpeechSynthesisUtterance(selection);
    speech.lang = "en-US";
    speech.rate = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  }
});

readAloundButtonSlow.addEventListener("click", () => {
  const selection = window.getSelection().toString().trim();
  if (selection !== "") {
    const speech = new SpeechSynthesisUtterance(selection);
    speech.lang = "en-US";
    speech.rate = 0.3;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  } else if (currentHighlightedText !== "") {
    const speech = new SpeechSynthesisUtterance(selection);
    speech.lang = "en-US";
    speech.rate = 0.3;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  }
});

readAloundButtonFast.addEventListener("click", () => {
  const selection = window.getSelection().toString().trim();
  if (selection !== "") {
    const speech = new SpeechSynthesisUtterance(selection);
    speech.lang = "en-US";
    speech.rate = 1.9;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  } else if (currentHighlightedText !== "") {
    const speech = new SpeechSynthesisUtterance(selection);
    speech.lang = "en-US";
    speech.rate = 1.9;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  }
});

smallFontButton.addEventListener("click", () => {
  left.style.fontSize = 22 + "px";
  right.style.fontSize = 18 + "px";
});

mediumFontButton.addEventListener("click", () => {
  left.style.fontSize = 29 + "px";
  right.style.fontSize = 25 + "px";
});

largeFontButton.addEventListener("click", () => {
  left.style.fontSize = 37 + "px";
  right.style.fontSize = 31 + "px";
});

$(".clickable").click(function (e) {
  s = window.getSelection();
  var range = s.getRangeAt(0);
  var node = s.anchorNode;
  while (range.toString().indexOf(" ") != 0) {
    range.setStart(node, range.startOffset - 1);
  }
  range.setStart(node, range.startOffset + 1);
  do {
    range.setEnd(node, range.endOffset + 1);
  } while (range.toString().indexOf(" ") == -1 && range.toString().trim() != "");
  var str = range.toString().trim();
  //alert(str);
});
