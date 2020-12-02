const { type } = require("os");

function loot(nom, price, value ) { //constructeur loot (parent) / Mathieu
    this.nom = nom;
    this.price=price;
    this.value = value;
}


function potions(nom, price, type, value, uses) {   //constructeur potions (constructeur fils de loot) / Mathieu
    loot.call(this, nom);                           //appel de la variable nom de loot 
    loot.call(this, price);                         //appel de la variable price de loot 
    loot.call(this, value);                         //appel de la variable value de loot 
    var type = {                                  //recupere le choix du type
        heal: 'heal',
        atkBoost: 'atkBoost',
        defBoost: 'defBoost',
    }
    
    this.uses = uses;                               //nombre d'utilisation de la potion
}

potions.prototype.constructor = potions;

potions.prototype.use = function(stat_joueur){      //fonction pour utiliser une potion / Mathieu
    switch (type) {
        case 'heal':
            stat_joueur.hp+= value;                 //heal le joueur
            break;
        case 'atkBoost':    
            stat_joueur.atck+= value;               //boost l'attaque du joueur 
            break;
        case 'defBoost':
            stat_joueur.def+= value;                //boost la defense du joueur 
            break;
      }
      uses--;                                       //reduire de 1 le nombre d'utilisation de la potion
};



function weapons(nom, price, value) {               //constructeur weapons (constructeur fils de loot) / Mathieu
    loot.call(this, nom);                           //appel de la variable nom de loot 
    loot.call(this, price);                         //appel de la variable price de loot 
    loot.call(this, value);                         //appel de la variable value de loot 
}

weapons.prototype.constructor = weapons;

weapons.prototype.equip = function(stat_joueur){    //fonction qui equipe l'arme sur le joueur / Mathieu
    stat_joueur.atck+=value;
};

function shields(nom, price, value) {               //constructeur shields (constructeur fils de loot) / Mathieu
    loot.call(this, nom);                           //appel de la variable nom de loot 
    loot.call(this, price);                         //appel de la variable price de loot 
    loot.call(this, value);                         //appel de la variable value de loot 
}

shields.prototype.constructor = shields;

weapons.prototype.equipDef = function(stat_joueur){ //fonction qui equipe le bouclier sur le joueur / Mathieu
    stat_joueur.def+=value;
};

var potion_heal = new potions('potion_heal',10,heal,50,1 ); //creation d'une potion de heal / Mathieu
var potion_atk = new potions('potion_atk',10,atkBoost,25,1 );
var potion_def = new potions('potion_def',10,defBoost,25,1)
potion_heal.use(stat_joueur);

var weapons1 = new weapons('sabre', 10, 50);                   //creation d'une arme  / Mathieu
var weapons2 = new weapons('katana', 15, 75);
weapons1.equip(stat_joueur);

var shields1 = new shields('armure',10,50);                     //creation d'un bouclier / Mathieu
var shields2 = new shields('armure en or',20,75);
shields1.equipDef(stat_joueur);


var ArrayWeapons = new Array(weapons1,weapons2);            //liste d'armes
var ArrayShields = new Array(shields1,shields2);            //liste de bouclier
var ArrayPotions = new Array(potion_heal,potion_atk,potion_def);    //liste de potions






