/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * Initializes the page after the DOM has loaded.
   * Sets up the click event listeners for the "Encrypt-It!" and "Reset" buttons.
   */
  function init() {
    // Select the "Encrypt-It!" button and add a click event listener
    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    // Select the "Reset" button and add a click event listener
    const resetButton = document.getElementById("reset");
    resetButton.addEventListener("click", handleReset);
  }

  /**
   * Encrypts the input text using a shift cipher and displays the result in the output paragraph.
   */
  function handleEncrypt() {
    const inputText = document.getElementById("input-text").value;
    const encryptedText = shiftCipher(inputText); // Call the cipher function
    const resultText = document.getElementById("result");
    resultText.textContent = encryptedText; // Display the encrypted text in the #result paragraph
  }

  /**
   * Clears the input text area and the result paragraph when the "Reset" button is clicked.
   */
  function handleReset() {
    const inputText = document.getElementById("input-text");
    const resultText = document.getElementById("result");

    inputText.value = ""; // Clear the input text area
    resultText.innerHTML = ""; // Clear the result paragraph

    console.log("Reset button clicked!"); // Log a message to confirm the reset
  }

  /**
   * Applies a basic shift cipher to the given text, shifting each letter forward by one alphabetically.
   * Non-alphabetical characters are left unchanged. Uppercase and lowercase letters are treated equally.
   * @param {string} text - The input text to be encrypted.
   * @returns {string} The encrypted text.
   */
  function shiftCipher(text) {
    text = text.toLowerCase(); // Convert text to lowercase for simplicity
    let result = "";

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char >= 'a' && char <= 'z') {
        // Shift character by 1, handling 'z' wrapping around to 'a'
        const shiftedChar = char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
        result += shiftedChar;
      } else {
        // Non-alphabetical characters remain unchanged
        result += char;
      }
    }

    return result; // Return the encrypted result
  }
})();
