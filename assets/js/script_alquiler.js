const propiedades_alquiler = [
    {
        imagen: 'https://www.almagro.cl/images/landing-comunas/card-san_eugenio-2.jpg',
        titulo: 'Departamento en zona exclusiva',
        descripcion: 'Este departmento está ubicado en una exclusiva zona residencial.',
        ubicacion: 'San Eugenio 509, Ñuñoa.',
        habitaciones: '4 Habitaciones',
        banos: '4 Baños ',
        precio: '$750.000',
        smoke: false,
        pets: false
    },
    {   
        imagen: 'https://www.almagro.cl/images/landing-comunas/card-san_eugenio.jpg',
        titulo: 'Departamento en Providencia',
        descripcion: 'Facilidad de conexión a ciclovías, transporte y el metro a 400m, enriqueciendo tu estilo de vida.',
        ubicacion: 'Ricardo Lyon 1887, Providencia',
        habitaciones: '3 Habitaciones',
        banos: '3 Baños ',
        precio: '$1.000.000',
        smoke: true,
        pets: true
    },
    {   
        imagen: 'https://www.almagro.cl/images/landing-comunas/card-huascar.jpg',
        titulo: 'Acogedor departamento con terraza',
        descripcion: 'Huáscar es un edificio de baja densidad con más exclusividad y calidad. Su fachada destaca desde el primer momento.',
        ubicacion: 'Huáscar 1300, Providencia.',
        habitaciones: '2 Habitaciones',
        banos: '3 Baños',
        precio: '$850.000',
        smoke: false,
        pets: true},
    ]
    
    const listaArriendo = document.querySelector('.arriendo-lista')
    
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
    
    
    for(let alquiler of propiedades_alquiler){
        const planilla = `
        <article class='card'>
        <img src=${alquiler.imagen} alt="">
        <div class="texto-card"> 
        <h2 class='titulo-card'> ${alquiler.titulo}</h2>
        <p> ${alquiler.descripcion}</p>
        <p> <i class="fa-solid fa-location-dot"> </i> ${alquiler.ubicacion} </p>
        <p> <i class="fa-solid fa-bed"></i>  ${alquiler.habitaciones}| <i class="fa-solid fa-bath"></i> ${alquiler.banos}</p>
        <p> ${alquiler.precio}</p>
        <p> ${fumar(alquiler.smoke)}</p>
        <p> ${mascotas(alquiler.pets)}</p>
       </article>
        `;
      
        listaArriendo.innerHTML += planilla  
    
    
    }
    