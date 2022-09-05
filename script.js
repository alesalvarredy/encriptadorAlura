const inputTxt = document.querySelector(".inputText");
const mensaje = document.querySelector(".inputText2");
const containerImage = document.querySelector(".container__content-rigth-image");
const inputTextResult = document.querySelector(".inputText2");
const containerShadowAlert = document.querySelector(".container__alerts-shadow");
const textAlert = document.querySelector(".text__alert");

//Funcion de encriptar
function encriptar(stringEncriptar) {
    let matriz = [["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"], ["a", "ai"]];
    stringEncriptar = stringEncriptar.toLowerCase();

    for (var i = 0; i < matriz.length; i++) {

        if (stringEncriptar.includes(matriz[i][0])) {
            stringEncriptar = stringEncriptar.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return stringEncriptar;
}

//Boton de encriptar
function btnEncriptar() {

    if (inputTxt.value === "") {
        containerShadowAlert.classList.add("active");
        textAlert.textContent = "Por favor ingrese el texto que desea encriptar";
        setTimeout(() => {
            containerShadowAlert.classList.remove("active")
        }, 1400);
    } else {
        const textoEncriptado = encriptar(inputTxt.value);
        mensaje.value = textoEncriptado;
        containerImage.classList.add("active");
        inputTextResult.classList.add("active");
        inputTxt.value = "";
        inputTxt.focus();
    }
}

//FUncion desencriptar
function desencriptar(stringDesencriptar) {
    let matriz = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for (var i = 0; i < matriz.length; i++) {
        if (stringDesencriptar.includes(matriz[i][1])) {
            stringDesencriptar = stringDesencriptar.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return stringDesencriptar;
}

//Boton de desenriptar

function btnDesencriptar() {

    if (inputTxt.value === "") {
        containerShadowAlert.classList.add("active");
        textAlert.textContent = "No hay texto por desencriptar";
        setTimeout(() => {
            containerShadowAlert.classList.remove("active")
        }, 1400);
    } else {
        const textoDesencriptado = desencriptar(inputTxt.value);
        mensaje.value = textoDesencriptado;
        inputTxt.value = "";
        inputTxt.focus();
    }
}

//Boton copiar
function btnCopiar() {
    if (mensaje.value === "") {
        containerShadowAlert.classList.add("active");
        textAlert.textContent = "No hay texto por copiar";
        setTimeout(() => {
            containerShadowAlert.classList.remove("active")
        }, 1400);
    } else {
        let input2 = document.getElementById("salida");
        input2.select();
        document.execCommand("cut")
        inputTextResult.value = "";
        containerShadowAlert.classList.add("active");
        textAlert.textContent = "Texto copiado con exito";
        setTimeout(() => {
            containerShadowAlert.classList.remove("active")
        }, 1400);
        inputTxt.focus();
    }
}

inputTxt.focus();