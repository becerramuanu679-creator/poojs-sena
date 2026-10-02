// los //son para explicart pqei pasa en cada parte 
//definir clase 
//la palabra reservada class crea molde. aqui dsolo definimos atriburto y metodos va a tener

class Persona {
    // contructor es un matro espacia que se ejecuta autoaticamente cada  vez que creamos un objeto con la palabra  "new"
    // sirve tambien para inicializar las propiedades o los datos del objeto 
     constructor (nombre, edad, profesion ){
        //usaremos this para referirnos a este objeto que se esta creando 
        this .nombre = nombre;
        this .edad= edad;
        this.profesion= profesion;
    }
   
    //2metodo
    //un metodo es una fincion que pertenece a la clase es decir una accion que el objeto puede hacer, los metodos al finall simpre llevan parentesis ()

     saludar (){
        return ` mi nombre es ${this.nombre} y tengo ${this.edad}años`;
        
     }
     describirprofesion (){
        return `${this.nombre} trabajo como ${this.profesion}.`;

    }
     es_mayor_edad(){
        return this.edad >=18;
     }
}
      //3 arreglos para guardar los objetos creados 
      //cada vez que el flrmilario se envie crear un objetos persona y se guarda aca 
        const Persona = []
       

      //4 conexxion del DOM
        const formulario = document.getElementById(`formPersona`);
        const listPersona = document.getElementById (`listaPersonas`);
    
        formulario.addEventListener (`submit`, function(evento){
        evento.preventDefault();   //evita que la pagina se recarge
        
        //leemos 
        const nombre = document. getElementById(`nombre`).value;
        const edad = Number (document.getElementById (`edad`).value);
        const profesion = document.getElementById (`profesion`).value;

        //5 creacion de un objeto ( instacciona)
        //new persona ejecita la construccion nos entrega un objeto nuevo, independiente de todo

        const nuevaPersona =new Persona ( nombre, edad, profesion);
        //guardamos el arreglo en persona
        Persona. push(nuevaPersona);
        //volvemos a pintar las lista de ccompleta en pantalla
        renderizacionPersona();
        formulario.reset();
    })
     // 6 fucion para mostrar los objetos en el dom
     //aca vamos a usar los metodos de la clase persona (saludar, descripcionprofesion)
     //utilizaremos estos metodos para generar la salida  y aprovexhas las vetajas del encasular


    function renderizacionPersona(){ 
        listperasona.innerHTML = ``;
        renderizacionPersona (){
        Persona.forEach (function (Persona,indice) {
            const tarjeta = document.createElement(`div`);
            tarjeta.className = `tarjeta-Persona`;
        
            tarjeta.innerHTML = `
              <strong>objeto # ${indice +1} </strong><br>
              ${Persona.saludar()} <br>
              ${Persona.describirprofesion()} <br>
              es mayor de edad ? ${Persona.es_mayor_edad() ?`si`:`no`}
            `;
            listaPersona.appendChild(tarjeta);
        });
       };
    }