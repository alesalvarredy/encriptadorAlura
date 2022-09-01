const inputTxt = document.querySelector(".inputText");
const mensaje = document.querySelector(".inputText2");
const containerImage = document.querySelector(".container__content-rigth-image");
const inputTextResult = document.querySelector(".inputText2");


function encriptar(stringEncriptar){
    let matriz = [["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"], ["a","ai"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for(var i=0; i< matriz.length; i++){
        
        if(stringEncriptar.includes(matriz[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringEncriptar;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTxt.value);
    mensaje.value=textoEncriptado;
    containerImage.classList.add("active");
    inputTextResult.classList.add("active");
    inputTxt.value="";
}


function desencriptar(stringDesencriptar){
    let matriz =[["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(var i=0; i< matriz.length; i++){
        if(stringDesencriptar.includes(matriz[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return stringDesencriptar;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(inputTxt.value);
    mensaje.value=textoDesencriptado;
    inputTxt.value="";
}

function btnCopiar(){
    let input2 = document.getElementById("salida");
    input2.select();
    document.execCommand("cut")
    inputTextResult.value="";
}