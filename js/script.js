
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas varras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas varras minúsculas
Não permite acentuação     
*/


//Botão Criptografar
var clicCripto = document.querySelector("#btn-cripto");
clicCripto.addEventListener("click", function(event){
    event.preventDefault();
    var texto = document.querySelector("#input-texto");
    var textonCod = texto.value;
    var textoLowCase = textonCod.toLowerCase();

    //Codificação das palavras
    var frase = textoLowCase;
    var novaFrase = frase.replace(/e|é|ê|è|ë/gi, "enter")
                         .replace(/i|í|ì|î|ï/gi, "imes")
                         .replace(/a|ã|â|á|à|ä/gi, "ai")
                         .replace(/o|ô|ó|ò|õ|ö/gi, "ober")
                         .replace(/u|ú|ù|û|ü/gi, "ufat");
    console.log(novaFrase);
    document.getElementById("msg").value = novaFrase;
    console.log("Botão de Criptografar clicado!");
});

//Botão Descriptografar  
var clicDescripto = document.querySelector("#btn-descripto");
clicDescripto.addEventListener("click", function(event){
    event.preventDefault();
    //Decodificação das palavras
    var novaFrase = document.querySelector("#input-texto");
    var textoCripto = novaFrase.value;
    console.log(textoCripto);
    var novaFraseDecod = textoCripto.replace(/enter/gi, "e")
                                    .replace(/imes/gi, "i")
                                    .replace(/ai/gi, "a")
                                    .replace(/ober/gi, "o")
                                    .replace(/ufat/gi, "u");
    console.log(novaFraseDecod);
    console.log("Botão de Descriptografar clicado!");
    document.getElementById("msg").value = novaFraseDecod;
});

//Botão Copiar, onde armazena o texto codificado e limpa os campos após o seu clique
var clicCopia = document.querySelector("#btn-copy");
    clicCopia.addEventListener("click", function(event){
    event.preventDefault();
    var textoCripto = document.querySelector("#msg").value;
    navigator.clipboard.writeText(textoCripto);
    document.getElementById("msg").value = '';
    document.getElementById("input-texto").value = '';
    console.log("Frase copiada!");
    console.log(textoCripto);
    alert ("Texto copiado!");
});
    

