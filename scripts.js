let contador = 0
let intervalo = setInterval(actualizarContador, 1000)

    function actualizarContador() {
        contador++;
        document.getElementById("contador").innerHTML = contador;
    }
    
    function incrementar() {
        contador++
        document.getElementById("contador").innerHTML = contador;
    }
    
    function decrementar() {
        contador--
        document.getElementById("contador").innerHTML = contador;
    }
    
    function reiniciar() {
        contador = 0;
        document.getElementById("contador").innerHTML = 0;
    }
