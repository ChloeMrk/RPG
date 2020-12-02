// Generateur de monstre - Sofiane
class Monstre {
  constructor(nom, pv, defense, atk, vitess,gold) {
    this.nom = nom;
    this.pv = pv;
    this.defense = defense;
    this.atk = atk;
    this.vitesse = vitesse;
    this.gold = gold
  }
}
//Ajouter un exemple de monstre - Sofiane

let Serpent = new Monstre("serpent", 5, 7, 6, 10,50);
let Tigre = new Monstre("Tigre", 10, 7, 6, 10);
//Afficher une liste de Monstre différent - Sofiane
/*
let listeMonstre = [Serpent, Tigre];
const random = Math.floor(Math.random() * listeMonstre.length);
console.log(listeMonstre[random]);
*/
function MonsterRundom(listeMonster){ // appeler cette fonction pour un avoir un monstre different -mathieu
  this.listeMonster = listeMonster;
  const random = Math.floor(Math.random() * listeMonster.length);
  var result = listeMonster[random];
  return result;
}
let Monstres = [Serpent, Tigre];
MonsterRundom(Monstres);

$("#NomAd").html(Tigre.nom);
