function readText() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const text = e.target.result;
            const speech = new SpeechSynthesisUtterance(text);
            speech.lang = 'es-ES';
            window.speechSynthesis.speak(speech);
        };
        reader.readAsText(file);
    } else {
        alert('Por favor, selecciona un archivo de texto.');
    }
}