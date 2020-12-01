import "./person.js";

$("#Joueur").click(function (e) {
  e.preventDefault();
  $("#car").toggleClass("none");
  $("#car").addClass("transition");
  $(".adversaire").toggleClass("none");
  $(".adversaire").addClass("transition");
  $(".adversaireTitle").toggleClass("noneDisplay");
});

console.log(Marvin.name);
console.log(Tigre.nom);
