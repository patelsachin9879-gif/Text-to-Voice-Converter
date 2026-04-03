let speech = new SpeechSynthesisUtterance(); // creating speech object  --  it will hold text + voice + setting

let voices = []; // voices array -- empty array to store all available voices

let voiceSelect = document.querySelector("select");  // selecting -- dropdown from  html of voices


window.speechSynthesis.onvoiceschanged = () => { //event for voices are loaded
    voices = window.speechSynthesis.getVoices(); //get all available voices from browser
    speech.voice = voices[0]; //set the first voice as default

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name,i))); //add voice to dropdown
};

voiceSelect.addEventListener("change", () => {  //change voice event -- user selected new voice 
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{  //button click event -- speech start
    speech.text = document.querySelector("textarea").value;  //get text from textArea
    window.speechSynthesis.speak(speech); //speak text -- makes browser speak the text aloud
});

