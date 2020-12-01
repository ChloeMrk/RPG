// Generateur joueur - Evan
class Person {
  constructor(nom, pv, mana, defense, atk, vitesse, crit, esq, gold) {
    this.nom = nom;
    this.pv = pv;
    this.mana = mana;
    this.defense = defense;
    this.atk = atk;
    this.vitesse = vitesse;
    this.crit = crit;
    this.esq = esq;
    this.gold = gold;
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
