//ARROW FUNCTIONS EN LA FUNCION DE REPRODUCTOR

const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () => console.log('Pausando la reproduccion'),
    borrar: id => console.log(`Borrando la reproduccion con el id ${id}`),
    crear: playlist => playlist,
    reproduciendo: nombre => console.log(`reproduciendo la playlist ${nombre}`)
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
const nombre = reproductor.crear('avici');
reproductor.reproduciendo(nombre)
// console.log(reproductor);