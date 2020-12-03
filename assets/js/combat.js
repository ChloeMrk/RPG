function Combat() {
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
      } else {
        Monstre1.pv = 0;
        Player.pv = 0;
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
    console.log("test");
    $("#enemyHealthBar").width(Monstre1.pv + "%");
  }

  //La fin du round
  function fight(id) {
    addRound();
    enemyMove(id);
    healthChange();
    gameOver();
    console.log(Player.pv);
  }
  //La loose
  function gameOver() {
    if (Player.pv === 0 || Monstre1.pv === 0) {
      res = "gameOver!";
      roundResults(res);
      attackButton.disabled = true;
      counterButton.disabled = true;
    }
  }
  //Demarrage
  window.onload = enableButtons();

  $("#atq").click(function (e) {
    e.preventDefault();
    fight("attack");
    console.log("Attaque");
  });

  $("#counter").click(function (e) {
    e.preventDefault();
    fight("counter");
  });
}
// import Monstre from "./monstre";

//les variables dont j'ai besoin pour les combats
// let Monstre1 = new Monstre("Monstre", 50, 10, 20, 6)
