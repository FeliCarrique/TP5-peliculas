/*Crear un array de peliculas
Crear una funcion que agrege una pelicula al array de peliculas
La pelicula debera tener un ID y un Titulo
Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
Crear una funcion que ordene las peliculas por Titulo y por ID
Crear una funcion que elimine una pelicula por su ID. */

var CrearPeliculas = function (id, titulo){
	this.id= id
	this.titulo= titulo
}

pelicula0= new CrearPeliculas(33,"titanic")
pelicula1= new CrearPeliculas(001, "frozen")
pelicula2= new CrearPeliculas(002, "la cordillera")
pelicula3= new CrearPeliculas(003, "schreck")

var libreria= {
	peliculasEnLibreria: ["pelicula0", "pelicula1"],
	IdpeliculasEnLibreria: [33, 001]
}


var validar = function(pelicula, libreria){
    var estadoPelicula = libreria.IdpeliculasEnLibreria.indexOf(pelicula.id)
    return estadoPelicula
}


var agregar = function (pelicula,libreria){
	validar(pelicula,libreria)
	if(validar<0){
    	libreria.peliculasEnLibreria.push(pelicula)
    	libreria.IdpeliculasEnLibreria.push(pelicula.id)
    }
    else{
    	console.log("esta pelicula ya se encuentra en la librería")
    }
}

    








