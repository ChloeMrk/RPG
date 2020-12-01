import Person from "./person.js";

$("#Joueur").click(function (e) {
  e.preventDefault();
  $("#car").toggleClass("none");
  $("#car").addClass("transition");
  $(".adversaire").toggleClass("none");
  $(".adversaire").addClass("transition");
});

let Player = new Person("Marvin", 1, 2, 7, 3, 4, 5, 6, 100);
setInterval(() => {}, 1000);
$(".numberPlayerShield").html(Player.defense);
$(".numberPlayerMana").html(Player.mana);
$(".numberPlayerHp").html(Player.pv);
$(".numberPlayerGold").html(Player.gold);
$(".playerName").html("Nom : " + Player.nom);

$("#atq").click(function (e) {
  e.preventDefault();
  Player.pv -= 5;
  $(".numberPlayerHp").html(Player.pv);
  if (Player.pv <= 0) {
    $("#historique").append("<p>Vous avez perdu 5 hp</p>");
  }
});
