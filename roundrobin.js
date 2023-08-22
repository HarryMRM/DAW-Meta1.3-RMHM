/*
	Desarrollo de Aplicaciones Web
	Meta 1.3 Ejercicio Round Robin
	Código por: Harry Manuel Reynozo Magallanes
*/

let lineasDeEjemplo = [
    "console.log(x)",
    "x = x - y",
    "let x = 5",
    "console.log(y)",
    "console.log(x+y)"];

/*
    Prototipo y función constructora de los procesos
    Tiene como atributos:
    -	numeroDeProceso: int
    -	líneas: string[]
*/
let protoProceso = {};
function constructorProceso(numeroDeProceso) {
    let proceso = Object.create(protoProceso);
    proceso.numeroDeProceso = numeroDeProceso;
    proceso.lineas = [];
    return proceso;
}

function elegirLineaDeCodigoAleatoria(){
    return lineasDeEjemplo[Math.floor((Math.random()*5))];
}

/*
    Inicializador de procesos.
    Devuelve un array con instancias únicas del Objeto 
    Proceso, la numeración empieza desde el 0 y las líneas 
    del proceso son elegidas aleatoriamente con posibilidad 
    de tener de 2 a 6 líneas dentro del array de líneas del Proceso.
*/
function initProcesos(procesosDeseados){
    let procesos = [];
    let numeroAleatorio = -1;
    for (let i = 0; i < procesosDeseados; i++) {
        procesos[i]= constructorProceso(i);
        numeroAleatorio = Math.floor((Math.random()*5))+2;
        for (let j = 0; j < numeroAleatorio; j++) {
            procesos[i].lineas.push(elegirLineaDeCodigoAleatoria());
        }
    }
    return procesos;
}

/*
    Simulador de Round Robin
    Se realiza una simulación simplificada del algoritmo 
    Round Robin obedeciendo los siguientes pasos:
        1.	Se recorrerán los procesos por su número de proceso
        2.	Se muestra el número de proceso (sumado +1) y la línea
        que se esta ejecutando en esa vuelta
        3.	Se verifica que no sea la última línea del proceso, si lo es
        se elimina el proceso y se reduce en uno la variable i para
        seguir la consistencia del proceso
        4.	Al terminar de recorrer todos los procesos se verifica si aun 
        quedan procesos a realizar, si no quedan se da por finalizada
        la simulación, en otro caso se repite de nuevo hasta el paso 1
*/
function roundRobin(procesos){
    while (procesos.length>0) {
        for (let i = 0; i < procesos.length; i++) {
            resultado += "<p>Proceso " + (procesos[i].numeroDeProceso + 1) + "</p>";
            resultado += "<p>" + procesos[i].lineas.shift() + "</p><p>------------------------------------</p>";
            if(procesos[i].lineas.length == 0){
                procesos.splice(i,1);
                i--;
            }
        }
    }
}

//Ejecución (Pseudomain)
let resultado = "";
let link = document.getElementById("texto1");
let procesosDeseados = prompt("Procesos a realizar:");
procesos = initProcesos(procesosDeseados);
roundRobin(procesos);
link.innerHTML += resultado;