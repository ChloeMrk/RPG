// Generateur joueur - Evan
class Person {
  constructor(nom, classe) {
    this.nom = nom;
    switch (classe) {
      case "Guerrier":
        this.pv = 100;
        this.vitesse = 100;
        this.mana = 100;
        this.defense = 75;
        this.atk = 10;
        this.vitesse = 5;
        this.crit = 10;
        this.gold = 10;
        break;

      case "Mage":
        this.pv = 75;
        this.vitesse = 100;
        this.mana = 200;
        this.defense = 50;
        this.atk = 10;
        this.vitesse = 5;
        this.crit = 10;
        this.gold = 50;
        break;

      case "Voleur":
        this.pv = 50;
        this.vitesse = 100;
        this.mana = 50;
        this.defense = 0;
        this.atk = 10;
        this.vitesse = 5;
        this.crit = 10;
        this.gold = 200;
        break;

      default:
        break;
    }
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
