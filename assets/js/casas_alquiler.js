const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: 2000,
    smoke: false,
    pets: true,
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar.',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: true,
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    costo: 2200,
    smoke: false,
    pets: false,
    },
    {
    nombre: 'Penthouse de lujo grande',
    src: 'https://media.revistagq.com/photos/5cfa20d7cb3e974d1a5fc3dd/16:9/w_2560%2Cc_limit/GettyImages-525440005.jpg',
    descripcion: 'Este penthouse de lujo ofrece una piscina y vistas espectaculares.',
    ubicacion: '1122 Skyline Avenue, Skyview City, CA 66785',
    habitaciones: 5,
    costo: 2800,
    smoke: false,
    pets: true, 
    }
];

function verCasasAlquiler() {
    const contenedorCasasAlquiler = document.getElementById('propiedades-alquiler');

    propiedades_alquiler.forEach(casa => {
        contenedorCasasAlquiler.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img class="card-img-top" src="${casa.src}" alt="${casa.nombre}" class="imagen">
                <div class="card-body">
                    <h3 class="card-title">${casa.nombre}</h3>
                    <p class="card-text">${casa.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i>${casa.ubicacion}</p>
                    <p><i class="fas fa-bed"></i>${casa.habitaciones} habitaciones</p>
                    <p><i class="fas fa-dollar-sign"></i>${casa.costo}</p>
                    <p class="${casa.smoke ? 'verde' : 'rojo'}">${casa.smoke ? '<i class="fa-solid fa-smoking"></i> Si se permite fumar' : '<i class="fa-solid fa-ban-smoking"></i> No se permite fumar'}   
                    </p>${casa.pets ? '<p class="verde"><i class="fa-solid fa-paw"></i> Mascotas permitidas</p>' : '<p class="rojo"><i class="fa-regular fa-circle-xmark"></i> Mascotas no permitidas</p>'}
                </div>
            </div>
        </div>`;
    });


}

verCasasAlquiler();