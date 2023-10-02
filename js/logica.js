let values = [
    {
        letra: "e",
        encrypt: "enter"
    },
    {
        letra: "i",
        encrypt: "imes"
    },
    {
        letra: "a",
        encrypt: "ai"
    },
    {
        letra: "o",
        encrypt: "ober"
    },
    {
        letra: "u",
        encrypt: "ufat"
    }
];

function encrypt(message){
    imageHidden();    
    for (let i = 0; i < values.length; i++) {
        message = message.replace(new RegExp(values[i].letra, 'g'), values[i].encrypt);
    }
    document.getElementById('response').value = message;
}

function bycript(message){
    for (let i = 0; i < values.length; i++){        
        message = message.replace(new RegExp(values[i].encrypt, 'g'), values[i].letra);
    }
    document.getElementById('response').value = message;
}

function validateToLowerCase(event) {
    let keyCode = event.keyCode || event.which;
    if ((keyCode < 97 || keyCode > 122) && keyCode !== 32) {
        event.preventDefault();
    }
}

function copyClipboard(message) {
    navigator.clipboard.writeText(message)
        .then(() => {
            console.log("Texto copiado al portapapeles");
        })
        .catch(err => {
            console.error("Error al copiar al portapapeles");
        });
}

function imageHidden() {
    let image = document.getElementById('messageInit');
    let message = document.getElementById('messageResponse');

    if (!image.classList.contains('hidden')) {
        image.classList.add('hidden');
    }

    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    }
}

