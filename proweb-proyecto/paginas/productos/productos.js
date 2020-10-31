const database = firebase.firestore();

const obtenerProductos = () => database.collection("productos").get();
const obtenerProductos2 = () => database.collection("productos2").get();

const productosContainer = document.getElementById("productos-container");
const productosContainer2 = document.getElementById("productos-container2");


function agregarCarrito(){
  console.log(document.getElementById("nombre-producto").innerHTML);
}

window.addEventListener('DOMContentLoaded' , async (e)=>{



        const productos = await obtenerProductos();
        const productos2 = await obtenerProductos2();

        

        productos.forEach(doc =>{

            productosContainer.innerHTML += `
            <div class="card">
            <img class="card-img-top" src="${doc.data().url}" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" id="nombre-producto">${doc.data().nombre}</h5>
              <p class="card-text"><strong>${doc.data().precio + "$"}</strong></p>
              <button onclick="agregarCarrito()" type="button" class="btn btn-success">Agregar al carrito  
              <span class="fas fa-shopping-cart"></span>
              </button>            
              </div>
            
                `                
        });

        productos2.forEach(doc =>{

            productosContainer2.innerHTML +=  `
            
            <script>
              function agregarCarrito(){
              var nombre = document.getElementById("nombre-producto").innerHTML;
              console.log(nombre);
}
              </script>
            <div class="card">
            <img class="card-img-top" src="${doc.data().url}" alt="Card image cap" style="width: 177.33px;height: 177.33px;">
            <div class="card-body">
              <h5 class="card-title" id="nombre-producto">${doc.data().nombre}</h5>
              <p class="card-text"><strong>${doc.data().precio + "$"}</strong></p>
              <button onclick="agregarCarrito()" type="button" class="btn btn-success">Agregar al carrito  
              <span class="fas fa-shopping-cart"></span>
              </button> 
          
            `

        });

});