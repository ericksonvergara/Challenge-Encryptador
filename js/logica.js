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