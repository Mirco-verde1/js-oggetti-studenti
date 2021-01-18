//
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.



var primoStudente = {
  'nome': 'Angelo',
  'cognome': 'Pintus',
  'eta': 20,
};                                 //PRIMO ESERCIZIO


for(var key in primoStudente){
  console.log("Dati dello studente : " + primoStudente[key]);
}






var studentsList = [                    //SECONDO ESERCIZIO

  firstStudent = {
    'eta': 22,                          //CREO UN ARRAY DI OGGETTI
    'nome':'Angelo',                    //SUCCESSIVAMENTE LI CICLO
                                        // LI STAMPO PER VISUALIZZARNE IL CONENUTO
  },
   secondStudent = {
     'eta': 17,
     'nome':'Quintilio',

   },

   tirdStudent = {
     'eta': 19,
     'nome':'Emanuele',

   }

];
