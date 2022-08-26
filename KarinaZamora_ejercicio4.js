class Persona {
    nombre;
    apellido;
    edad;
    Detalles;

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this._Detalles= Detalles;

    }

    get getDetalles() {
        return this._Detalles;
    }

    set setDetalles(Detalles) {
        this._Detalles = Detalles;
    }

}

class Empleado {
    C;
    S;
    
    constructor(C, S) {
        this.C = C;
        this.S = S;
        
    }

    get getDetalles() {
        return this._Detalles;
    }    

    set setDetalles(Detalles) {
        this._Detalles = Detalles;
    }
    
    }

class Nomina extends Empleado {
    
    constructor(nombre, apellido, edad ) {
        super (nombre, apellido, edad);
    }  
        
    }

    static sueldoS(350, 0.10){
        return 350-(350*0.10);

    }
    
    static sueldosC (500, 0,13){
        return 500-(500*0.13);
    }
    let objetoPersona = new Persona("María", "Carvajal", 33);
    console.log (objetoPersona.nombre, apellido, edad);

    /*let calcularNomina=();
console.log (calcularNomina.sueldosS)*/



