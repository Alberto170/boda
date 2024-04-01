const year = (new Date().getFullYear());
const weddingDate = new Date(2024, 4, 5).getTime();

// countdown
let timer = setInterval(function () {

    // get today's date
    const today = new Date().getTime();

    // get the difference
    const diff = weddingDate - today;

    // math
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // display
    document.getElementById("timer").innerHTML =
        "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>dias</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>horas</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutos</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>segundos</div> \
</div>";

}, 1000);