import Equipo from "./Equipamiento"
import Personaje from  "./Personaje"
class Paladin extends Personaje{
    protected tipo:string
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
            super(nombre)
            this.tipo=`paladin`;
            this.dañoFisico=10;
            this.dañoMagico=120;
            this.resistenciaFisica=25;
            this.resistenciaMagica=25;
            this.nombre=nombre;
            this.ataqueMelee=15;
            this.ataqueDistancia=100;
            this.equipamiento=[]
            this.vidaTotal=400;
        }
    pasivaDeClase():void{
        if(this.tipo===`caballero`){
            this.vidaTotal+=300;
        }else if(this.tipo===`Hechicero`){
            this.dañoMagico+= 250;
        }else if(this.tipo===`paladin`){
            this.dañoFisico+=30;
            this.dañoMagico+=180;
            this.vidaTotal+=200;}
    }
    atacarMelee(objetivo:any):void{
        console.info(`Has atacado a ${objetivo.nombre}`)
        if(objetivo.dañoMagico<this.dañoFisico){
            objetivo.vidaTotal=objetivo.vidaTotal-(this.dañoFisico+(0.50*this.dañoMagico))
            return console.info(`Has ganado el combate`)
        }else if(objetivo.dañoFisico>this.dañoFisico){
            this.vidaTotal=this.vidaTotal-objetivo.dañoFisico;
            return console.info(`Has perdido el combate`)
        }
    }
    atacarDistancia(objetivo:any):void{
        console.info(`Has atacado a ${objetivo.nombre}`)
        if(objetivo.dañoMagico<this.dañoMagico){
            objetivo.vidaTotal=objetivo.vidaTotal-(this.dañoMagico+(0.50*this.dañoFisico))
            return console.info(`Has ganado el combate`)
        }else if(objetivo.dañoMagico>this.dañoMagico){
            this.vidaTotal=this.vidaTotal-objetivo.dañoMagico;
            return console.info(`Has perdido el combate`)
        }
    }  
    AgregarEquipo(nuevoEquipo:Equipo):void{
        this.equipamiento.push(nuevoEquipo)
        this.dañoFisico+=nuevoEquipo.dañoF;
        this.dañoMagico+=nuevoEquipo.dañoM;
        this.resistenciaFisica+=nuevoEquipo.resistenciaF;
        this.resistenciaMagica+=nuevoEquipo.resistenciaM;
        this.vidaTotal=+nuevoEquipo.vida;
    }
    mostrarEquipamiento():void{
        for (let i=0;i<this.equipamiento.length;i++){
            console.info(this.equipamiento[i])       
        }
    }
}  
export default Paladin;