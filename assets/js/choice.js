$(".guerrier").click(function (e) {
  e.preventDefault();
  sessionStorage.setItem("choice", "Guerrier");
  $(location).attr("href", "combat.html");
});

$(".mage").click(function (e) {
  e.preventDefault();
  sessionStorage.setItem("choice", "Mage");
  $(location).attr("href", "combat.html");
});

$(".voleur").click(function (e) {
  e.preventDefault();
  sessionStorage.setItem("choice", "Voleur");
  $(location).attr("href", "combat.html");
});
