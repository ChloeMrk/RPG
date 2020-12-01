function loot(name, price, value ) {
    this.nom = nom;
    this.price=price;
    this.value = value;
}


function potions(nom, price, type, value, uses) {
    loot.call(this, nom);
    loot.call(this, price);
    loot.call(this, value);
    var typeOf = {
        heal: 'heal',
        atkBoost: 'atkBoost',
        defBoost: 'defBoost',
    }
    this.type = typeOf;
    this.uses = uses;
}

potions.prototype.constructor = potions;

potions.prototype.use = function(stat_joueur){
    switch (typeOf) {
        case 'heal':
            stat_joueur.hp+= value;
            break;
        case 'atkBoost':
            stat_joueur.atck+= value;
            break;
        case 'defBoost':
            stat_joueur.def+= value;
            break;
      }
      uses--;
};



function weapons(nom, price, value) {
    loot.call(this, nom);
    loot.call(this, price);
    loot.call(this, value);
}

weapons.prototype.constructor = weapons;

weapons.prototype.equip = function(stat_joueur){
    stat_joueur.atck+=value;
};

function shields(nom, price, value) {
    loot.call(this, nom);
    loot.call(this, price);
    loot.call(this, value);
}

shields.prototype.constructor = shields;

weapons.prototype.equipDef = function(stat_joueur){
    stat_joueur.def+=value;
};

var potion_heal = new potions('potion_heal',10,heal,50,1 );
var potion_atk = new potions('potion_atk',10,atkBoost,25,1 );
var potion_def = new potions('potion_def',10,defBoost,25,1)
potion_heal.use(stat_joueur);

var weapons1 = new weapons('sabre', 10, 50);
var weapons2 = new weapons('katana', 15, 75);
weapons1.equip(stat_joueur);

var shields1 = new shields('armure',10,50);
var shields2 = new shields('armure en or',20,75);
shields1.equipDef(stat_joueur);


var ArrayWeapons = new Array(weapons1,weapons2);
var ArrayShields = new Array(shields1,shields2);
var ArrayPotions = new Array(potion_heal,potion_atk,potion_def);

function shop(weapons,shields,potions){
    this.weapons=ArrayWeapons;
    this.shields=ArrayShields;
    this.potions=ArrayPotions;
}

shop.prototype.acheter = function(joueur){
    
}
shop.prototype.vendre = function(joueur){
    
}




