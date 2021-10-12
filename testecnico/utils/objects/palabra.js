class Palabra {
    constructor(nombre, definicion) {
        this.nombre = nombre;
        this.definicion = definicion;
    }
    setNombre(nombre) {
        this.nombre = nombre
    }
    getNombre() {
        return this.nombre
    }
    setDefinicion(definicion) {
        this.definicion = definicion
    }
    getDefinicion() {
        return this.definicion
    }
}
module.exports = Palabra;