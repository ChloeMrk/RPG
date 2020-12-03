import Player from "./player.js";

$("#senData").click(function (e) {
  e.preventDefault();
  let player = $("#choix").serializeArray();

  $.ajax({
    url: "../php/choix.php",
    method: "POST",
    data: player,
    sucess: function (response) {
      getJoueur();
    },
  });
});

function getJoueur() {
  let i = 0;

  $.ajax({
    url: "../php/choix.php",
    dataType: "json",
    sucess: function (response) {
      response.forEach((player) => {
        var saisie = document.getElementById("nomJoueur");
        Player.name = Player.saisie;

        console.log(saisie);
      });
    },
  });
}
