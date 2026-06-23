let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.getElementById("voice-select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(`${voice.name} (${voice.lang})`, i)));}


    voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.getElementById("text-input").value;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
});