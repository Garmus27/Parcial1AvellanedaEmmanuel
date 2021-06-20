import Equipo from "./Equipamiento"
/* Creo una clase abstracta "Personajes", esta clase hara referencia a los personajes
de un video juego clasico de rol, donde los personajes pueden equiparse con armaduras
o armas y peliar entre ellos*/ 
abstract class Personaje{
    //estas estadisiticas son bases, cada clase de personaje contara con estadisticas bases distintas
    protected clase:string
    protected dañoFisico:number
    protected dañoMagico:number
    protected resistenciaFisica:number
    protected resistenciaMagica:number
    protected vidaTotal:number
    protected ataqueMelee:number
    protected ataqueDistancia:number
    protected equipamiento:Equipo[]
    // solo pediremos por constructor el nombre que se le asignara al personaje
    constructor(
        protected nombre: string){
            this.clase=``;
            this.dañoFisico=0;
            this.dañoMagico=0;
            this.resistenciaFisica=0;
            this.resistenciaMagica=0;
            this.nombre=nombre;
            this.ataqueMelee=0;
            this.ataqueDistancia=0;
            this.equipamiento=[]
            this.vidaTotal=0
        }
//Las clases abstractas que deberan estar si o si presentes en cada personaje
    abstract pasivaDeClase():void;
    abstract atacarMelee(objetivo:any):void;
    abstract atacarDistancia(objetivo:any):void;
//con este metodo los personajes podran equipar objetos y aumentar sus estadisticas
// bien podria ser un metodo fun abstract pero queria mostrar uno que no lo fuera.
    AgregarEquipo(nuevoEquipo:Equipo):void{
        this.equipamiento.push(nuevoEquipo)
        this.dañoFisico+=nuevoEquipo.dañoF;
        this.dañoMagico+=nuevoEquipo.dañoM;
        this.resistenciaFisica+=nuevoEquipo.resistenciaF;
        this.resistenciaMagica+=nuevoEquipo.resistenciaM;
        this.vidaTotal=+nuevoEquipo.vida;
    }
    // el set en este caso tiene la funcion de cambiar el nombre del personaje
    set Renombrar(nuevoNombre:string){
        this.nombre=nuevoNombre
    }
    // El get devuelve la vida actutal del personaje, es muy util cuando hay una pelea
    get vidaActual(){
        return console.log(`tienes ${this.vidaTotal} puntos de vida`)
    }
    // Este metodomuestra todo el equipamiento con el que cuenta actualemente el persoanej
    mostrarEquipamiento():void{
        for (let i=0;i<this.equipamiento.length;i++){
            console.info(this.equipamiento[i])       
        }
    }

}

export default Personaje