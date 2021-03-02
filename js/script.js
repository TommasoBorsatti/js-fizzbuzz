
/*
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
*/

// 1. Inizializzo un ciclo For che vada da 1 a 100. Una Variabile Numero è definita in base al contatore i.


for ( i = 1; i < 101; i++) {

  var numero = i ;

  //2. SE la variabile Numero è SIA divisibile per 3 CHE divisibile per 5, numero scrive FizzBuzz.

  if (numero % 3 == 0 && numero % 5 == 0) {
    var numero = "FizzBuzz !!!"
  }

  //3. SE numero è solo divisibile per 3, numero scrive Fizz.

  if (numero % 3 == 0){
    var numero = "Fizz !"
  }

  //4. SE numero è solo divisibile per 5, numero scrive Buzz.

  if (numero % 5 == 0){
    var numero = "Buzz !!"
  }

  //5. ALTRIMENTI, in nessun caso dei precedenti, numero renderà i come stabilito all'inizio.

  // 6. il controllo del ciclo termina con la stampa, prima di ripetersi per l'i successivo.
  console.log(numero)
  document.getElementById('lista').innerHTML += "<li>" + numero +"</li>"

}
