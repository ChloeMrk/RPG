function Combat(i) {
  console.log(i);
}

let i = 0;

$("#atq").click(function (e) {
  e.preventDefault;
  i += 5;
  Combat(i);
});
