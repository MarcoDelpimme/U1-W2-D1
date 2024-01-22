/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//stringa
let name10 = ("Marco")   //tutto cio che si trova dentro i doppi apici ("") o singoli apici (') è ritenuta una stringa
let article = ('Il giornale')

console.log ()
//number
let number1 = 20
let number2 = 12
let width = 11
let height = 10
console.log ()

//boolean

let z = true
let k = false
console.log ()

//Undefined
 let name3 = undefined //undefined rappresenta un'assenza di valore ona variabile inutilizzata



//null

let yourName = null //null rappresenta un valore tolto dalla variabile, quindi vuoto per scelta di uno sviluppatore





/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let myName=("Marco")

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */



console.log ("La somma di 12+20", number1 + number2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(myName)
 myName=("Delpopolo")
console.log (myName)
 

 const shroom = ("fungo")
 console.log(shroom)
 //shroom= ("pianta")
 //console.log (shroom)  Assignment to constant variable.

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log ("4-x=", 4 - x)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = ("jhon");
let name2 = ("Jhon");
console.log("jhon è uguale a Jhon?" ,name1===name2)
console.log ("jhon".toLowerCase())

console.log ("jhon è diverso da Jhon ma con il toLowerCase lo rendiamo uguale ",name1.toLowerCase() === name2.toLowerCase())






