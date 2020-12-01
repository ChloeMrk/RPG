class player{
    // déclaration des variables dans un constructeur
    constructor(hp, atk, def, speed, mana, gold, critic);

    // redirection vers la classe (nommée type pour éviter des soucis de nommage) choisie par l'utilisateur
    static typeSelector(choice) {
        var person;                             // variable servant de constructeur

        if(choice.type == 'mage') {
            person = new mage(settings.name);   //  constructeur
        }

        else if(choice.type == 'voleur') {
            person = new voleur(settings.name);
        }

        else if(choice.type == 'guerrier') {
            person = new guerrier(settings.name);
        }

        return person;                          // renvoie les caractéristiques de la classe sélectionnée (les classes sont dessous)
    }

}

class mage extends player{                      // classe correspondant au type sélectionné dans le formulaire html
    hp = 100;                                   // points de vie initiaux du joueur
    speed = 100;                                // vitesse initiale du joueur
    mana = 100;                                 // points de mana par défaut
    defense = 75;                               // points de défense de base (si defense >= hp alors la défense diminue au lieu des pv)
}

class voleur extends player{
    hp = 75;
    speed = 150;
    mana = 75;
    defense = 50;
    
}

class guerrier extends player{
    hp = 150;
    speed = 50;
    mana = 75;
    defense = 150;
}

var name = formulaire.name.value;               // renvoie le nom entré par l'utilisateur dans le formulaire
var type = formulaire.type.value;               // renvoie le type sélectionné dans le formulaire

typeSelector(type);                             // récupère le type pour récupérer les caractéristiques via les classes ci-dessus 



// j'ai laissé le code initial au cas où, j'ai d'ailleurs pas fait la fct dégâts psq j'étais pas sûr que ça soit à moi de le faire mais si il faut je la fais en de
/*
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
  */
  export default player;
  