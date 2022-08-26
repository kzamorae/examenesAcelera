class empleadoConfianza {
    nombre;
    apellido;
    edad;
    pago;
    

    constructor(nombre, apellido, edad, pago) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pago = pago;
        
    }

    get getId() {
        return this._id;
    }

    set setId(id) {
        this._id = id;
    }





}

class empleadoSindicato {
    nombre;
    apellido;
    edad;
    pago;
    

    constructor(nnombre, apellido, edad, pago ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pago = pago;
        
    }

    get getId() {
        return this._id;
    }

    set setId(id) {
        this._id = id;
    }





}
