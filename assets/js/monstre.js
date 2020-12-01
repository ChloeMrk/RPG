// Generateur de monstre - Sofiane
class Monstre {
  constructor(nom, pv, defense, atk, vitesse) {
    this.nom = nom;
    this.pv = pv;
    this.defense = defense;
    this.atk = atk;
    this.vitesse = vitesse;
  }
}
//Ajouter un exemple de monstre - Sofiane

let Serpent = new Monstre("serpent", 5, 7, 6, 10);
let Tigre = new Monstre("Tigre", 10, 7, 6, 10);
//Afficher une liste de Monstre différent
let listeMonstre = [Serpent, Tigre];
const random = Math.floor(Math.random() * listeMonstre.length);
console.log(listeMonstre[random]);

$("#NomAd").html(Tigre.nom);
