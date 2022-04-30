window.onload = function () {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  console.log(alphabet);
  // start

  // end

  alphabet.forEach(letter => {
    // start
    let keyButton = document.createElement("input");
    keyButton.type = "button";
    keyButton.value = letter;
    keyButton.classList.add("key");
    keyButton.id = letter;
    keyButton.addEventListener("click", event => {
      highlightLetter(event.target.id);
    });
    // let something = document.getElementById("keyboard");
    // something.appendChild(keyButton);
    keyboard.appendChild(keyButton);
    console.log("hello");

    // end
  });
};

// start

// end

function highlightLetter(letter) {
  // start
  console.log(letter);
  // end
}
