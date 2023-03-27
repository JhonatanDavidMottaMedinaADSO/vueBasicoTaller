export default {

    data() {
        return {
            // Array
            myArray: null,
            nombres: null,
            // Object
            myObject: null,
            arrayObjetos: null,
            arrayNomMasc: []
        }
    },
    methods: {
        // los metodos del array
        crearArray() {
            this.myArray = []
            console.log(this.myArray);
        },
        addArray() {
            if (this.nombres != null) {
                this.myArray.push(this.nombres),
                    this.nombres = null
            }
        },
        addArrayBegining() {
            if (this.nombres != null) {
                this.myArray.unshift(this.nombres),
                    this.nombres = null
            }
        },
        removeArray(eliminar) {
            this.myArray.indexOf(eliminar)
            this.myArray.splice(this.myArray.indexOf(eliminar), 1)
        },
        // Los metodos del objecto
        crearObjeto() {
            this.myObject = {
                nomMasco: '',
                razaMasco: ''
            }
        },
        //Agrega los datos del formulario al objeto
        submitForm() {
            if (this.nomPet != null && this.razaPet != null) {

                this.myObject = {
                    nomMasco: this.nomPet,
                    razaMasco: this.razaPet
                }
                if (this.arrayObjetos == null) {
                    this.arrayObjetos = []
                }

                this.arrayObjetos.push(this.myObject)
                this.nomPet = null
                this.razaPet = null

            }
        },
        metodoMap() {
            this.arrayNomMasc = []
            this.arrayObjetos.map(objetos => this.arrayNomMasc.push(objetos.nomMasco))
        }
    }
}


