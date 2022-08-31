class Producto{
    constructor(nombre,precio,año){
        this.nombre=nombre;
        this.precio=precio;
        this.año=año;
    }
}

class UI{ // esta es la clase de la interfaz
    
    //Agregar Producto
    agregarProducto(producto){
        const lista=document.getElementById('listaProductos')
        const elemento=document.createElement('div')
        elemento.innerHTML=`
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${producto.nombre} -
                    <strong>Precio</strong>: ${producto.precio} - 
                    <strong>Año</strong>: ${producto.año}
                    <a href="#" class="btn btn-danger" name="borrar">Borrar</a>
                </div>
            </div>
        `;
    lista.appendChild(elemento); //aqui agrego los valores de los inputs a este div de la constante elemento
    }


    //Resetear formulario
    resetear(){
        document.getElementById("formularioProductos").reset();
    }


    //Borrar Producto
    borrarProducto(elemento){
        if (elemento.nombre=== "borrar") {
            elemento.parentElement.parentElement.remove();
            this.mostrarMensaje("Producto Borrado", "danger");
          }
    }

    //Mostrar los mensajes en la interfaz
    mostrarMensaje(mensaje, cssClass){
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(mensaje));
        
        // Mostrar en el DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
        container.insertBefore(div,app);


        // Remove the Message after 3 seconds
        setTimeout(function () {
        document.querySelector(".alert").remove();
      }, 3000)
    }
}


// Eventos del DOM
document.getElementById('formularioProductos').addEventListener('submit',function(e){


        // Obtener los valores de los inputs
        const nombre=document.getElementById('nombreProducto').value;
        const precio=document.getElementById('precioProducto').value;
        const año=document.getElementById('añoProducto').value;

        
        const producto=new Producto(nombre,precio,año); // en esta constante estoy agregando los valores de los inputs al objeto que creamos de la Clase Producto
        
        //Llamo a la clase UI
        const UI=new UI(); // llamo a la clase Ui para poder ejecutar sus metodos
        if(nombre==='' || precio==='' || año===''){
            return UI.mostrarMensaje('Completar los campos porfavor','danger')
        }
        
        
        UI.agregarProducto(producto);
        UI.resetear();
        UI.mostrarMensaje("Producto Agregado", "success");
        
        e.preventDefault(); // evtita que la pagina se recargue en el navegador
    })
        
    document.getElementById('listaProductos').addEventListener('click',function(e){
            const ui=new UI();
            ui.borrarProducto(e.target);
    
});

