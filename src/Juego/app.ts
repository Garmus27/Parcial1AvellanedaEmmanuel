// inicio exportando las clases necesarias
import Equipo from "./Equipamiento"
import Caballero from "./Caballero"
import Hechicero from  "./Hechicero"
import Paladin from "./Paladin"
// Creo equipamiento
const cascoDragon=new Equipo(`Dragon`,`Casco`,0,0,15,30,100);
const armaduraDragon=new Equipo(`Dragon`,`Armadura`,0,0,30,60,300);
const espadaDragon=new Equipo(`Dragon`,`Espada`,80,0,0,10,0);
const cascoMistico=new Equipo(`Mistico`,`Casco`,0,0,45,15,100);
const armaduraMistico=new Equipo(`Mistico`,`Armadura`,0,0,50,15,400);
const baculoMistico=new Equipo(`Mistico`, `Baculo`,10,120,0,0,0);
//Creo personajes y les asigno sus pasivas de clase
const Zophrabi=new Paladin(`ZOPHRABI`)
Zophrabi.pasivaDeClase();
const sabu=new Caballero(`SABU`);
sabu.pasivaDeClase();
const garmus=new Hechicero(`GARMUS`);
garmus.pasivaDeClase();
// Equipo los personajes
garmus.AgregarEquipo(baculoMistico);
garmus.AgregarEquipo(cascoMistico);
garmus.AgregarEquipo(armaduraMistico);
sabu.AgregarEquipo(armaduraDragon);
sabu.AgregarEquipo(cascoDragon);
sabu.AgregarEquipo(espadaDragon);
sabu.mostrarEquipamiento()
// que comienzen los combates!!!
garmus.atacarDistancia(sabu);
sabu.atacarMelee(Zophrabi);
Zophrabi.atacarDistancia(garmus);
// uso el get para saber la vida restante de un personaje por ejemplo
garmus.vidaActual
// uso el set pata cambiar el nombre del personaje
garmus.Renombrar=`G4armu5`;


