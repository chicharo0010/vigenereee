function vigenereCipher(plainText, key) {
    let result = '';
    const keyLength = key.length;

    // Convertir todo a mayúsculas
    plainText = plainText.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < plainText.length; i++) {
        const char = plainText[i];

        // Solo cifrar letras
        if (char >= 'A' && char <= 'Z') {
            const plainCharCode = char.charCodeAt(0) - 'A'.charCodeAt(0);
            const keyCharCode = key[j % keyLength].charCodeAt(0) - 'A'.charCodeAt(0);
            const cipherCharCode = (plainCharCode + keyCharCode) % 26;
            result += String.fromCharCode(cipherCharCode + 'A'.charCodeAt(0));
            j++; // Solo incrementamos j si se cifra una letra
        } else {
            result += char; // No ciframos caracteres que no son letras
        }
    }

    return result;
}

// Manejar el evento de envío del formulario
document.getElementById('cipherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const plainText = document.getElementById('plainText').value;
    const key = document.getElementById('key').value;
    const encryptedText = vigenereCipher(plainText, key);
    
    document.getElementById('encryptedText').textContent = encryptedText;
});
