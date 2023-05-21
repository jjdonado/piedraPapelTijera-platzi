//1 es piedra, 2 es papel y 3 es tijera 

function aleatorio (min, max){
    return Math.floor((Math.random() * (max - min + 1) + min))
}

function eleccion(jugada){
    let resulatdo = ""
    if (jugada == 1){
        resultado = "Piedra 🥌"
    }
    else if (jugada == 2){
        resultado = "Papel 📰"
    }
    else if (jugada == 3){
        resultado = "Tijera ✂"
    }
    else {
        resultado = "Opción errónea"
    }
    return resultado
}

let jugador = 0
let pc = 0  
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc = aleatorio(1,3)
    jugador = prompt("Escoge 1 = Piedra, 2 = Papel ó 3 = Tijera")

    alert ("PC eligió: " + eleccion(pc))
    alert ("Tú elegiste: " + eleccion(jugador))
    // COMBATE ENTRE JUGADOR Y PC
    if(pc == jugador){
        alert("EMPATE")
    } else if (jugador == 1 && pc ==3){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 2 && pc ==1){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else if (jugador == 3 && pc ==2){
        alert("GANASTE")
        triunfos = triunfos + 1
    } else {
        alert("PERDISTE")
        perdidas = perdidas + 1
    }
}

alert("Ganaste " +triunfos+ " veces y perdite " +perdidas+ " veces")
