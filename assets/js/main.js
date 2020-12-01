import Person from "./person.js";

$("#Joueur").click(function (e) {
  e.preventDefault();
  $("#car").toggleClass("none");
  $("#car").addClass("transition");
  $(".adversaire").toggleClass("none");
  $(".adversaire").addClass("transition");
  $(".adversaireTitle").toggleClass("noneDisplay");
});

let Personne = new Person("Marvin", 1, 2, 3, 4, 5, 6);

$(".numberPlayerShield").html(Personne.defense);
$(".playerName").html("Nom : " + Personne.nom);
