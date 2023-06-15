function verificarNumero(){
    let number = parseFloat(document.getElementById("numberInput").value)
    let resultElement = document. getElementById ("Respuesta")

    //comenzamos con condicional
    if(number > 5) {
        resultElement.textContent = "El pago debe ser realizado con tajeta de credito"
    }
    
    else  if(number <= 5) {
        resultElement.textContent = "El pago debe ser realizado en efectivo"
    }

}