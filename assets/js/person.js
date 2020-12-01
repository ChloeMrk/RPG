// Generateur joueur - Evan 
class Person {
  constructor(nom, pv, defense, atk, vitesse, crit, esq) {
    this.nom = nom;
    this.pv = pv;
    this.defense = defense;
    this.atk = atk;
    this.vitesse = vitesse
    this.crit = crit
    this.esq = esq   
  }


//Ajouter les 3 classes de personnages (guerrier, voleur, mage) > Evan 



// Fonction Attaque / Combat? - Evan 
  static Degats(attaque) {
    if (this.defense <= attaque) {
      this.pv -= attaque - this.defense;
    } else {
      this.defense -= attaque;
    }
  }
}

export default Person;
