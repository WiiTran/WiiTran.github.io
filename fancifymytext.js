// Initial alert to verify JS linkage
function makeTextBigger() {
    alert("Hello, world!");
    // Get the text area and increase font size
    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Function to apply fancy or boring styles
function applyFancyStyle() {
    let textArea = document.getElementById("textArea");
    let fancyShmancy = document.getElementById("fancyShmancy");

    if (fancyShmancy.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Function to modify text to add Moo
function mooText() {
    let textArea = document.getElementById("textArea");
    textArea.value = textArea.value.toUpperCase();
    let sentences = textArea.value.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
        sentences[i] = sentences[i] + "-Moo";
    }
    textArea.value = sentences.join(".");
}