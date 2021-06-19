class Equipo{
    constructor(public nombre:string,
        public tipo:string,
        public dañoF:number,
        public dañoM:number,
        public resistenciaF:number,
        public resistenciaM:number,
        public vida:number){
            this.nombre=nombre;
            this.tipo=tipo;
            this.dañoF=dañoF;
            this.dañoM=dañoM;
            this.resistenciaF=resistenciaF;
            this.resistenciaM=resistenciaM
            this.vida=vida;
        }
}
export default Equipo;