const propiedades_venta = [
    {
    imagen: 'https://www.almagro.cl/departamentos-entrega-inmediata/assets/img/proyectos/alderete-cook.jpg',
    titulo: 'Condominio privado',
    descripcion: 'Cercano a amplia oferta cultural, áreas verdes y una excelente gastronomía.',
    ubicacion: 'Gran Avenida 509, San Miguel.',
    habitaciones: '2 Habitaciones',
    banos: '1 Baños ',
    precio: '$85.550.000',
    smoke: false,
    pets: true
},{
    imagen: 'https://www.almagro.cl/departamentos-entrega-inmediata/assets/img/proyectos/isabel-la-catolica.jpg',
    titulo: 'Amplio y cómodo departamento ',
    descripcion: 'Solo 4 departamentos por piso. Disfruta de terrazas completamente privadas.',
    ubicacion: 'Av. Macul 1547, Macul.',
    habitaciones: '3 Habitaciones',
    banos: '2 Baños ',
    precio: '$150.000.000',
    smoke: true,
    pets: true
},{
    imagen: 'https://www.almagro.cl/departamentos-entrega-inmediata/assets/img/proyectos/vasco-de-gama.jpg',
    titulo: 'Departamento con amplia terraza',
    descripcion: 'Rodeado de áreas verdes y con múltiples opciones para salir.',
    ubicacion: 'Walker Martinez 1254, La Florida.',
    habitaciones: '4 Habitaciones',
    banos: '4 Baños ',
    precio: '$250.000.000',
    smoke: false,
    pets: false
}];

const listaVenta = document.querySelector('.venta-lista');

mascotas = (pets) =>{
    if(pets === true){
        return `<span style="color: green;"> <i class="fa-solid fa-paw"></i> Permite mascotas </span>`
    }else{
        return '<span style="color: red;"> <i class="fa-solid fa-ban"></i> No permite mascotas</span>'
    };
    };

fumar = (smoke) => {
    if(smoke === true){
        return ` <span style="color: green;"> <i class="fa-solid fa-smoking"></i>  Permitido fumar </span>` 
    }else{
        return ` <span style="color: red;"> <i class="fa-solid fa-ban-smoking"></i> No permite fumar </span>`
    };
};


for(venta of propiedades_venta){
    const planilla = `
    <article class='card'>
    <img src=${venta.imagen} alt="">
    <div class="texto-card"> 
    <h2 class="titulo-card"> ${venta.titulo}</h2>
    <p> ${venta.descripcion}</p>
    <p> <i class="fa-solid fa-location-dot"> </i> ${venta.ubicacion} </p>
    <p> <i class="fa-solid fa-bed"></i>  ${venta.habitaciones}| <i class="fa-solid fa-bath"></i> ${venta.banos}</p>
    <p> ${venta.precio}</p>
    <p> ${fumar(venta.smoke)}</p>
    <p> ${mascotas(venta.pets)}</p>
   </article>
    `;

    listaVenta.innerHTML += planilla
};