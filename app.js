
document.getElementById("resultado-texto").style.display = "none";  

let textoArmazenado = '';

function criptografar() {
    const resultadoTexto = document.getElementById('resultado-texto');
    const textoDigitado = document.getElementById('texto-inserido').value;  

    if (textoDigitado) {
        var resultCripto = textoDigitado.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        textoArmazenado = resultCripto ;
        const campoNome = document.querySelector('#visualizar-texto');
        campoNome.value  = textoArmazenado;
    } 

    if (resultadoTexto.style.display === 'none') {
        resultadoTexto.style.display = 'block';
        document.getElementById("resultado").style.display = "none";
        const campoNome = document.querySelector('#texto-inserido');
        campoNome.value  = '';
    }else{
        const campoNome = document.querySelector('#texto-inserido');
        campoNome.value  = '';
    }
}

function descriptografar() {
    const resultadoTexto = document.getElementById('resultado-texto');
    const textoDigitado = document.getElementById('texto-inserido').value;  

    if (textoDigitado) {
        var resultDescripto = textoDigitado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        textoArmazenado = resultDescripto ;
        const campoNome = document.querySelector('#visualizar-texto');
        campoNome.value  = textoArmazenado;
    } 

    if (resultadoTexto.style.display === 'none') {
        resultadoTexto.style.display = 'block';
        document.getElementById("resultado").style.display = "none";
        const campoNome = document.querySelector('#texto-inserido');
        campoNome.value  = '';
    }else{
        const campoNome = document.querySelector('#texto-inserido');
        campoNome.value  = '';
    }
}

function copiarTexto(){        
        navigator.clipboard.writeText(textoArmazenado);
        const campoNome = document.querySelector('#visualizar-texto');
        campoNome.value  = '';

}