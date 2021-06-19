import Equipo from "./Equipamiento"
import Personaje from  "./Personaje"
import Caballero from "./Caballero"
import Hechicero from  "./Hechicero"
import Paladin from "./Paladin"

const cascoDragon=new Equipo(`Dragon`,`Casco`,0,0,15,30,100);
const armaduraDragon=new Equipo(`Dragon`,`Armadura`,0,0,30,60,300);
const espadaDragon=new Equipo(`Dragon`,`Espada`,80,0,0,10,0);
const cascoMistico=new Equipo(`Mistico`,`Casco`,0,0,45,15,100);
const armaduraMistico=new Equipo(`Mistico`,`Armadura`,0,0,50,15,400);
const baculoMistico=new Equipo(`Mistico`, `Baculo`,10,120,0,0,0);
const sabu=new Caballero(`SABU`);
const garmus=new Hechicero(`GARMUS`);
garmus.AgregarEquipo(baculoMistico);
garmus.AgregarEquipo(cascoMistico);
garmus.AgregarEquipo(armaduraMistico);
sabu.AgregarEquipo(armaduraDragon);
sabu.AgregarEquipo(cascoDragon);
sabu.AgregarEquipo(espadaDragon);

garmus.atacarDistancia(sabu);
