import Person from "./person.js";
import Monstre from "./monstre.js";

let Monstre1 = new Monstre("Monstre", 50, 10, 20, 2, 6);

//Lorsque l'on clique sur le joueurs les information complémentaire
$("#Joueur").click(function (e) {
  e.preventDefault();
  $("#car").toggleClass("none");
  $("#car").addClass("transition");
  $(".adversaire").toggleClass("none");
  $(".adversaire").addClass("transition");
});

var choice = sessionStorage.getItem("choice");

let Player = new Person("Marvin", choice);

//Permet de Recharger les informations sans refresh la page - Marvin
setInterval(() => {
  $(".numberPlayerShield").html(Player.defense);
  $(".numberPlayerMana").html(Player.mana);
  $(".numberPlayerHp").html(Player.pv);
  $(".numberPlayerGold").html(Player.gold);
  $(".numberPlayerAtk").html(Player.atk);
}, 1);

$("#sort").click(function () {
  location.reload();
});

$(".playerName").html("Nom : " + Player.nom);
$("#NomAd").html(Monstre1.nom);

//#region Fonction de combat

///////////////////////// FONCTION DE COMBAT : Sofiane ///////////////////////////

///////////////////////////////////////////////////////////////
var monsterHpBase = Monstre1.pv;
var playerShield = Player.defense;
console.log(playerShield);
var playerMove;
var savedEnemyMove;
var totRounds = 0;
var res;
var playByPlay = $("#historique");
var attackButton = $("#atq");
var counterButton = $("#counter");

//Activer les boutons
function enableButtons() {
  attackButton.disabled = false;
  counterButton.disabled = false;
}

//Ajout de round à chaque fin de tour si il reste un des deux en vie
function addRound() {
  totRounds += 1;
}

//L'historique des attaques !
function roundResults(res) {
  playByPlay.append(res + "<br>");
}

//Les contres
function counter(y, c) {
  var move = Math.floor(Math.random() * 5);
  if (move >= 3 && y === "attack") {
    res = "Contre ennemi! Tu perds 10 PV";
    Player.pv -= 10;
  } else if (move >= 3 && y === "counter") {
    res = "Superbe contre! Ennemi perd 10 PV";
    Monstre1.pv -= 10;
  } else if (move < 3 && y === "attack") {
    res = "Echec du contre ennemi! Tu enlève 15 PV !";
    Monstre1.pv -= 15;
  } else if (move < 3 && y === "counter") {
    res = "Tu rate le contre! Tu perds 15 PV !";
    Player.pv -= 15;
  }
}

//Choix aléatoire de l'ennemi
function enemyMove(id) {
  var move = Math.floor(Math.random() * 4 + 1);
  if (move <= 3) {
    savedEnemyMove = "attack";
  } else {
    savedEnemyMove = "counter";
  }
  res =
    "Tu choisis <span>" +
    id +
    "</span> et ennemi choisit <span>" +
    savedEnemyMove +
    "</span> au tour " +
    totRounds;
  damageStep(id, savedEnemyMove);
  roundResults(res);
}

//Les attaques par tour
function damageStep(y, c) {
  if (y === "attack" && c === "attack") {
    res = "Vous vous blessez mutuellement";
    if (Monstre1.pv >= 10 && Player.pv >= 10) {
      Monstre1.pv -= 10;
      Player.pv -= 10;
    } else if (Player.pv <= 10) {
      Player.pv = 0;
    } else if (Monstre1.pv <= 10) {
      Monstre1.pv = 0;
    }
  } else if (y === "counter" && c === "counter") {
    res = "Defense en vain";
  } else if (y === "attack" && c === "counter") {
    res = "Ennemi contre";
    counter(y, c);
  } else if (y === "counter" && c === "attack") {
    res = "Tu contre";
    counter(y, c);
  }
}

function healthChange() {
  //On définit les hp du monstre en %
  let hp = (Monstre1.pv / monsterHpBase) * 100;
  $("#enemyHealthBar").width(hp + "%");
}

//La fin du round
function fight(id) {
  addRound();
  enemyMove(id);
  healthChange();
  gameOver();
}
//La loose
function gameOver() {
  if (Player.pv == 0) {
    res = "gameOver!";
    roundResults(res);
    $("#atq").prop("disabled", true);
    $("#counter").prop("disabled", true);
  } else if (Monstre1.pv <= 0) {
    res = "Vous avez battus le monstre!";
    roundResults(res);
    $("#atq").prop("disabled", true);
    $("#counter").prop("disabled", true);
  }
}
//Demarrage
window.onload = enableButtons();

$("#atq").click(function (e) {
  e.preventDefault();
  fight("attack");
});

$("#counter").click(function (e) {
  e.preventDefault();
  fight("counter");
});

//#endregion

//Sauvegarde

//Stocker un objet

var user = JSON.parse(localStorage.getItem("player", Player));

//Convertir l'objet en une chaîne
localStorage.setItem(
  "user",
  JSON.stringify({
    Player,
  })
);
