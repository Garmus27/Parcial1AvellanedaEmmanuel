import Equipo from "./Equipamiento"
import Personaje from  "./Personaje"
class Caballero extends Personaje{
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
            this.tipo=`caballero`;
            this.dañoFisico=80;
            this.dañoMagico=10;
            this.resistenciaFisica=50;
            this.resistenciaMagica=50;
            this.nombre=nombre;
            this.ataqueMelee=30;
            this.ataqueDistancia=5;
            this.equipamiento=[]
            this.vidaTotal=500;
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
        if(objetivo.dañoFisico<this.dañoFisico){
            objetivo.vidaTotal=objetivo.vidaTotal-(this.dañoFisico*(this.dañoFisico*0.50))
            return console.info(`Has ganado el combate`)
        }else if(objetivo.dañoFisico>this.dañoFisico){
            this.vidaTotal=this.vidaTotal-objetivo.dañoFisico;
            return console.info(`Has perdido el combate`)
        }
    }
    atacarDistancia(objetivo:any):void{
        console.info(`Has atacado a ${objetivo.nombre}`)
        if(objetivo.dañoMagico<this.dañoMagico){
            objetivo.vidaTotal=objetivo.vidaTotal-(this.dañoMagico)
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
export default Caballero;