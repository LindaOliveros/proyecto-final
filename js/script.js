const ingresoTexto = document.getElementById("ingresoTexto")
const botonEncriptar = document.getElementById("botonEncriptar")
const ibotonDesencriptar = document.getElementById("botonDesencriptar")
const botonCopiar = document.getElementById("botonCopiar")
const mensajeFinal = document.getElementById("mensajeFinal")

//e - enter
//o - ober
//i - imes
//a - ai
//u - ufat

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],

]

botonEncriptar.addEventListener("click", () =>{
    const texto = ingresoTexto.value.toloweCase()
    function encriptar(newTexto) {
        
    }
    console.log(ingresoTexto.value)
})