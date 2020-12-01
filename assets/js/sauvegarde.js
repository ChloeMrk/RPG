function save() {
  //On créer un objet pour sauvegarder ce que vont réutiliser
  var save = {
    player1: player,
    inventory1: inventory,
    level1: level,
  };

  //On sauvegarde en localstorage du navigateur
  localStorage.setItem("save", JSON.stringify(save));
}

function load() {
  var savegame = JSON.parse(localStorage.getItem("save"));

  if (savegame != null && savegame != undefined) {
    inventory = savegame.inventory1;
    player = savegame.player1;
  }
}

$("#sauvegarde").click(function (e) {
  e.preventDefault();

  save();
});

/*<div>
        <button class="btn" id="sauvegarde">Sauvegarder</button>
      </div>*/
