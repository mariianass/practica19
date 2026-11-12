export default class Persona{
    constructor(nombre = "", edad = 0){
        this.nombre = nombre;
        this.edad = edad;
        this.id = this.#generarId();
    }

    //método privado
    #generarId(){
        return Math.floor(Math.random() * 1000);
    }

    //método público
    saludar(){
        return `Hola, soy ${this.nombre}`
    }
}