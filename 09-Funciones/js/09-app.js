//Agregar funciones a un objeto

const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function(){
        console.log('Pausando la reproduccion');
    },
    borrar: function(id){
        console.log(`Borrando la reproduccion con el id ${id}`);
    },
    crear: function(playlist){
        return playlist;
    },
    reproduciendo: function(nombre){
        console.log(`reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
const nombre = reproductor.crear('avici');
reproductor.reproduciendo(nombre)
// console.log(reproductor);