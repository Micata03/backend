class Usuario {
    constructor (nombre, apellido,libros, mascotas){
        this.nombre = nombre
        this.apellido = apellido
        this.libros = []
        this.mascotas = []

    }
    getFullName() {
        return `${this.nombre + this.apellido}`
    }
   
    
    addMascotas(mascota){
         return this.mascotas.push(mascota)
    }
countMascotas() {
       return this.mascotas.length; 
    }
    addBook(libro){
        return this.libros.push(libro)
    }
    getBooksNames(){
        let nombreLibro  = new Array();
        for (const libro of this.libros){
            nombreLibro.push(libro.nombre)
        }
        return nombreLibro
    }
};

const newUsuario = new Usuario ('Jhon', 'Doe')

newUsuario.addMascotas('topo');
newUsuario.addMascotas('perro');
newUsuario.addMascotas('gato');

console.log(newUsuario.countMascotas());
newUsuario.addBook({nombre: 'libro1', autor: 'autor1'});
newUsuario.addBook({nombre: 'libro2', autor: 'autor2'});

console.log(newUsuario.getBooksNames());
console.log(newUsuario.getFullName());
console.log(newUsuario);