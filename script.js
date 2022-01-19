console.log('JS OK!');

/*

Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!

*/

// * Recupero a schermo dove scrivere

const writeElement = document.getElementById('student');
const clas = document.getElementById('class');

// ! Creo un oggetto 
const student = {
   name: 'Matteo',
   cognome: 'Imbimbo',
   eta: 30,
}
console.log(student);



// * Eseguo ciclo per stampare a schermo 

let totKey = '';
for (let key in student) {
   
   totKey += [key] + ':' + student[key] + ' ';
   
};

 writeElement.innerHTML = `<div>${totKey}</div>`;
 

//  ! ----------------------------------------------------------------

// * Creo un array di oggetti

const classes = [
   {name: 'Matteo', cognome: 'Imbimbo', eta: 30},
   {name: 'Marco', cognome: 'neri', eta: 35},
   {name: 'Giovanni', cognome: 'Rossi', eta: 21},
   {name: 'Anna', cognome: 'Biaggi', eta: 25},
];
console.log(classes);

// * Faccio il ciclo per prendere tutti gli alunni della classe 

let print = '';
for(let i = 0; i < classes.length; i++) {
   let clasStudent = classes[i];
      
      for(let key in clasStudent){
         if(key !== 'eta'){

            print += [key] + ':' + clasStudent[key] + ' ';
         }
      }

      clas.innerText = print;
console.log(print);

}