const minPlayListe = ["Kun for mig", "Falder", "Københavns brunetter", "Replay", "Party in the U.S.A", "Danser", "Vi varme", "Kolo", "Sugarcane", "Gulddans"];

minPlayListe.forEach(visEnAfGangen);

function visEnAfGangen(enSang) {
  console.log(enSang + " er mit yndlings nummer");
  document.querySelector("main").innerHTML += `<li> ${enSang} </li>`;
}
