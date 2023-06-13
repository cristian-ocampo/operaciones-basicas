function division(){
    let numero1 = parseInt(document.getElementById("num1").value)
    //se le da un valor a numero1
    let numero2 = parseInt(document.getElementById("num2").value)
    //las varaiables y los id no se pueden repetir              
    let dividir = numero1 / numero2
    //mostrar el resultado
    document.getElementById("resultado").textContent = "la division es:" + dividir;
}