//
// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
//
// function studentInfo(studentdate){
//
//   for(var key in  studentdate){
//   var showDateStudent = console.log(key + ' ha valore: ' + studentdate[key])
//   return showDateStudent;
//   }
//
// }


//QUESTA FUNZIONE MI PERMETTE DI INSERIRE IL NOME DELLA LISTA E LA POSIZIONE DELLE STUDENTE PER SAPERNE LE INFORMAZIONI;

function infoStudent(studentsList, positionStudent){
  for (var i = 0; i < studentsList.length; i++) {
    studentsList[i];
  }
for(var key in positionStudent.nomeCognome)
 var resultReserch = console.log( 'Il ' + key + " dello studente è : " + positionStudent.nomeCognome[key]);

return resultReserch;
}





var primoStudente = {
  'nome': 'Angelo',
  'cognome': 'Pintus',
  'eta': 20,
};                                 //PRIMO ESERCIZIO


for(var key in primoStudente){
  console.log("Dato dello studente : " + primoStudente[key]);
}





console.log('Dopodichè');




var studentsList = [                    //SECONDO ESERCIZIO

  firstStudent = {
    'nomeCognome': {
      'nome':'Mario',
      'cognome':'Rubino'
    },
    'età':20,                  //CREO UN ARRAY DI OGGETTI CONTENENTE INFORMAZIONI
  },


   secondStudent = {
     'nomeCognome': {
       'nome':'Carmine',
       'cognome':'Rossi'
     },
     'età':18,
   },


   tirdStudent = {
     'nomeCognome': {
       'nome':'Mattia',
       'cognome':'Foscolo'
     },
     'età':24,
   }

];


//
// for (var i = 0; i < studentsList.length; i++) {       //UNA VOLTA CICLATO L'ARRAY PADRE CHE CONTIENE LE INFORMAZIONI
//   studentsList[i];                                    //MOSTRO I DATI AL SUO INTERNO
// };
//
//  TODO:  //MIGLIORABILE CON AGGIUNTA DI UNA FUNZIONE
// console.log('PRIMO');
// for(var key in firstStudent.nomeCognome){
//   console.log( 'Il ' + key + " dello studente è : " + firstStudent.nomeCognome[key]);
// };
//
//
// console.log('SECONDO');
// for(var key in secondStudent.nomeCognome){
//   console.log( 'Il ' + key + " dello studente è : " + secondStudent.nomeCognome[key]);
// };
//
//
// console.log('TERZO');
// for(var key in tirdStudent.nomeCognome){
//   console.log( 'Il ' + key + " dello studente è : " + tirdStudent.nomeCognome[key]);
// };



infoStudent(studentsList  , firstStudent);
infoStudent(studentsList  , secondStudent);  //IN UN SECONDO MOMENTO HO SOSTITUITO IL TUTTO CON LA FUNZIONE infoStudent;
infoStudent(studentsList  , tirdStudent);






//                                                  TERZO ESERCIZIO




var fourthStudent = {};
fourthStudent.nome = prompt("Qual'è il tuo nome?");
fourthStudent.Cognome = prompt("qual'è il tuo cognome?") //CREO UN OGGETTO VUOTO CHE VIENE POPOLATO DALL'INPUT UTENTE
fourthStudent.eta = prompt("qual'è la tua età?")

                                                            //SUCCESIVAMENTE L'ARRAY fourthStudent VIENE INSERITO NELLA studentsList;


studentsList.push(fourthStudent);
console.log(fourthStudent);
