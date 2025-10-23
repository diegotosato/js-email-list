console.log('JS-EMAIL-LIST');


/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

//PSEUDO CODE
/*
# create an empty list in html
# assign an ID to the list
# isolate into variable with getElementById
# create a function to create markup to add list items
    - into the markup insert variable for emails to generate
# isolate the endpoint into a variable
# fetch API -> then: parsing/then: data/catch: err
# into second then
    - destructuring API object to isolate the mail creation
# initialize for loop
    - loop 10 times
    - variable isolate by id += API mail creation
*/


function createMarkUp () {
    return `
    <li>
        <a href="#">email</a>
    </li>
    `
}




const emailList = document.getElementById('emailList')
console.log(emailList);


const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

fetch(endpoint)
.then(response => response.json())
.then(data => {
    console.log(data);
    
})
.catch(error => {
    error
})