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


// ! ---------------------------------------------------------------------- 

// * Chiedo all'utente il nome il cognome e l'età 

// const newName = prompt('Inserisci il tuo nome').trim();
// const newSurname = prompt('Inserisci il tuo cognome').trim();
// const newAge = parseInt(prompt('Inserisci la tua età'));
// if(isNaN(newAge)) {
//    newAge = parseInt(prompt('Inserisci la tua età'));
// }


// classes.push({ name:`${newName}`, cognome: `${newSurname}`, eta: newAge});


// ! ----------------- BUNUS ---------------------

const inputName = document.getElementById('name');
const inputSurname = document.getElementById('surname');
const inputEta = document.getElementById('eta');
const generate = document.getElementById('generate');
const write = document.querySelector('.info');

generate.addEventListener('click', function(){
   const inputUserName = inputName.value;
   const inputUserSurname = inputSurname.value;
   const inputUserEta = inputEta.value;

   const paragraph = document.createElement('div');
   paragraph.className = 'clicked';
   write.appendChild(paragraph);

   paragraph.innerText = `il Sign ${inputUserName} ${inputUserSurname}  di età ${inputUserEta} è pregato di spostare l'auto `;

});