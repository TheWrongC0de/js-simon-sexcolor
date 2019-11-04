/*  2.  Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
Sulla pagina html deve apparire “Ciao <nome>“, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito. */

//Nomino le var
var nome , sesso , id;
var elementi = [];

//collego l'id con lo script

id = document.getElementById('id');

//apro un ciclo while per i prompt
while(elementi.length < 2){
  nome = prompt("Inserisca il suo nome");
  sesso = prompt("Sei uomo o donna?");

  //creo una condizione per far corrispondere il colore con il sesso
  if (sesso == "uomo" || sesso == "donna");{
   if (sesso == "uomo") {
      elementi.push(nome);
      elementi.push(sesso);
      id.style.color = "blue"
      id.innerHTML = "Ciao " + nome;
    }
   else if (sesso == "donna") {
    elementi.push(nome);
    elementi.push(sesso);
    id.style.color = "pink"
    id.innerHTML = "Ciao " + nome;
   }
   else {
          alert("Non hai capito o sei UOMO O SEI DONNA!!!");
    }
}
