
function nuevo_mensaje(tipo_mensaje){

    /*
    El parametro 'tipo_mensaje' simplemente nos dice si estamos ante un envio o un mensaje recibido
    pudiendo asi unificar 2 funciones en 1
    */

    let entrada = document.getElementById("entrada");
        if(entrada.value === ""){ /* en caso de que la entrada sea vacia */
            alert("vacio!")
        }else{ /* si la entrada contenia algun mensaje */
            let chat = document.getElementsByClassName("chat");    
            let texto = entrada.value; //guardo el texto de la entrada en una variable
            let nuevo_bloque = document.createElement("nuevo_bloque"); //creo un bloque generico para almacenar la burbuja
            let nuevo_mensaje = document.createElement("nuevo_mensaje"); //creo una burbuja de texto generica
            let nueva_hora = document.createElement("nueva_hora"); // creo una nueva hora de mensaje generica

            nuevo_mensaje.innerHTML = texto;

            if(tipo_mensaje === "recibir"){
                nuevo_bloque.className = "bloque-recibido";
                nuevo_mensaje.className = "mensaje-recibido"
                nueva_hora.className = "hora-recibido";
            }else{
                nuevo_bloque.className = "bloque-enviado";
                nuevo_mensaje.className = "mensaje-enviado";
                nueva_hora.className = "hora-enviado";
            }
            
            nuevo_bloque.append(nuevo_mensaje);
            chat[0].appendChild(nuevo_bloque);

            let fecha = new Date();
            let hora = fecha.getHours();
            let minutos = fecha.getMinutes();

            if(minutos < 10){
                nueva_hora.innerHTML = hora + ":" + "0" + minutos;
            }else{
                nueva_hora.innerHTML = hora + ":" + minutos;
            }
            
            chat[0].appendChild(nueva_hora);
            entrada.value = "";
            
        }
    
}

function abrir_configuracion(){
    let cfg_panel = document.getElementsByClassName("config");
    cfg_panel[0].style.visibility = 'visible';
}

function cerrar_configuracion(){
    let cfg_panel = document.getElementsByClassName("config");    
    cfg_panel[0].style.visibility = 'hidden';
}
