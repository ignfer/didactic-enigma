
function enviar(){
    let entrada = document.getElementById("entrada");
        if(entrada.value === ""){ /* en caso de que la entrada sea vacia */
            alert("vacio!")
        }else{ /* si la entrada contenia algun mensaje */
            let texto = entrada.value; //guardo el texto de la entrada en una variable
            
            let bloque_recibido = document.createElement("bloque-recibido"); //creo el div del contenedor del mensaje
            bloque_recibido.className = "bloque-recibido"; //le asigno su clase
            let chat = document.getElementsByClassName("chat"); //para achicar codigo
            
            let mensaje_recibido = document.createElement("mensaje-recibido"); //creo el div de la burbuja de texto
            mensaje_recibido.className = "mensaje-recibido"; //le asigno su clase
            mensaje_recibido.innerHTML = texto; //cargo en la burbuja de texto el mensaje sacado de la entrada

            bloque_recibido.append(mensaje_recibido); //appendeo el mensaje al bloque contenedor
            chat[0].appendChild(bloque_recibido); //appendeo el bloque contenedor al chat

            let recibido_hora = document.createElement("recibido-hora");
            recibido_hora.className = "recibido-hora";
            
            
            recibido_hora.innerHTML = "23:52";
            
            
            chat[0].appendChild(recibido_hora);
            entrada.value = ""; //borro el campo de la entrada
        }
    
}

function recibir(){
    let entrada = document.getElementById("entrada");
        if(entrada.value === ""){ /* en caso de que la entrada sea vacia */
            alert("vacio!")
            //crear una funcion que haga que el campo de entrada tome un color rojizo y tiemble
        }else{ /* si la entrada contenia algun mensaje */
            let texto = entrada.value; //guardo el texto de la entrada en una variable
            
            let bloque_enviado = document.createElement("bloque-enviado"); //creo el div del contenedor del mensaje
            bloque_enviado.className = "bloque-enviado"; //le asigno su clase
            let chat = document.getElementsByClassName("chat"); //para achicar codigo
            
            let mensaje_enviado = document.createElement("mensaje-enviado"); //creo el div de la burbuja de texto
            mensaje_enviado.className = "mensaje-enviado"; //le asigno su clase
            mensaje_enviado.innerHTML = texto; //cargo en la burbuja de texto el mensaje sacado de la entrada

            bloque_enviado.append(mensaje_enviado); //appendeo el mensaje al bloque contenedor
            chat[0].appendChild(bloque_enviado); //appendeo el bloque contenedor al chat

            let enviado_hora = document.createElement("enviado-hora");
            enviado_hora.className = "enviado-hora";
            
            
            enviado_hora.innerHTML = "23:52";
            
            
            chat[0].appendChild(enviado_hora);
            entrada.value = ""; //borro el campo de la entrada
        }
}