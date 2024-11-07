
let textoNotificacion = 'Producto agregado al carrito:'

let contenedor_imagenes = document.getElementById("imagenes");

let contenedor_notificacion = document.getElementById("notificacion");

contenedor_imagenes.addEventListener('click', event => {
    let elemento_btn = event.target;
    if (elemento_btn.classList.contains('btn-agregar')) {
        let parrafoProducto = elemento_btn.parentElement.querySelector('h2');
        console.log(parrafoProducto);
        // contenedor_notificacion.style.fontSize='1px';
        contenedor_notificacion.classList.remove('oculto');
        contenedor_notificacion.innerText = textoNotificacion + '\n' + parrafoProducto.innerText;

        /*  
        contenedor_notificacion.style.fontSize='14px';
        contenedor_notificacion.style.transition = 'opacity 0.5s ease';
        contenedor_notificacion.style.opacity = '100%'; 
        */

        setTimeout(() => {
            contenedor_notificacion.classList.add('oculto');
            /* 
            contenedor_notificacion.style.fontSize='1px';
            contenedor_notificacion.style.opacity = '0';            
             */
        },
            1500
        );


    }

});