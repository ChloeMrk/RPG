class Person {
  constructor(nom, pv, defense, atk) {
    this.nom = nom;
    this.pv = pv;
    this.defense = defense;
    this.atk = atk;
  }

  static Degats(attaque) {
    if (this.defense <= attaque) {
      this.pv -= attaque - this.defense;
    } else {
      this.defense -= attaque;
    }
  }
}

export default Person;
