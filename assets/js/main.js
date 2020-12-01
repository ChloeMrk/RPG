import { default as Person } from "person";

$("#Joueur").click(function (e) {
  e.preventDefault();
  $("#car").toggleClass("none");
});

const J1 = new Person("Marvin", 10, 5, 8);

console.log(J1);
