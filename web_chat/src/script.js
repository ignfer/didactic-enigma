
function enviar(){
    let entrada = document.getElementById("entrada");
        if(entrada.value === ""){
            alert("vacio!")
        }else{
            let texto = entrada.value;
            let bloque_enviado = document.createElement("bloque-enviado");
            bloque_enviado.className = "bloque-enviado";
            document.getElementsByClassName("chat").appendChild(bloque_enviado);
            entrada.value = "";
        }
    
}

function recibir(){
    alert("recibido!");
}