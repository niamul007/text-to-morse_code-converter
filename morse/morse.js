function textToMorse(text) {
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....',
        '6': '-....', '7': '--...', '8': '---..', '9': '----.', '0': '-----',
        ' ': '/'
    };
    const upperCase = text.toUpperCase();
    let morseResult = '';
    for (let i = 0; i < upperCase.length; i++) {
        let char = upperCase[i];
        if (morseCode[char]) {
            morseResult += morseCode[char] + ' ';
        } else {
            morseResult += '';
        }
    }
    return morseResult;
}

// Function to get the input value and call textToMorse
function getvlue() {
    var inputValue = document.querySelector("input").value;
    let convert = textToMorse(inputValue);
    return convert;
}

// Assign the function, don't invoke it immediately
let para= document.getElementById("para");
let btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    let p=getvlue();
    para.innerText="Text to morse code is: "+ p;
})
