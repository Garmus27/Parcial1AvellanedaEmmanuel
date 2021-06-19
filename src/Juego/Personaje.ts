
import Equipo from "./Equipamiento"
abstract class Personaje{
    protected clase:string
    protected dañoFisico:number
    protected dañoMagico:number
    protected resistenciaFisica:number
    protected resistenciaMagica:number
    protected vidaTotal:number
    protected ataqueMelee:number
    protected ataqueDistancia:number
    protected equipamiento:Equipo[]
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

    abstract pasivaDeClase():void;
    abstract atacarMelee(objetivo:any):void;
    abstract atacarDistancia(objetivo:any):void;
    AgregarEquipo(nuevoEquipo:Equipo):void{
        this.equipamiento.push(nuevoEquipo)
        this.dañoFisico+=nuevoEquipo.dañoF;
        this.dañoMagico+=nuevoEquipo.dañoM;
        this.vidaTotal=+nuevoEquipo.vida;
    }
}   

export default Personaje