import { default as Person } from "person";

$("#Joueur").click(function (e) {
  e.preventDefault();
  $("#car").toggleClass("none");
  $("#car").addClass("transition");
  $(".adversaire").toggleClass("none");
  $(".adversaire").addClass("transition");
  $(".adversaireTitle").toggleClass("noneDisplay");
});

var person = new Person("Marvin", 5, 6, 7, 8, 9, 10);
console.log(person.name);
