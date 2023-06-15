
function verificarNumero(){
    let number = parseFloat(document.getElementById("numberInput").value)
    let resultElement = document. getElementById ("Respuesta")

    //comenzamos con condicional
    if(number > 0) {
        resultElement.textContent = "el numero es positivo"
    }
    
    else  if(number < 0) {
        resultElement.textContent = "el numero es negativo"
    }

    else {
        resultElement.textContent = "el numero es cero"
    }
}
