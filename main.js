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


function createMarkUp(response) {
    return `
    <li class="list-group-item my-1">
        <a href="#" class="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover">${response}</a>
    </li>
    `
}


function replaceEmails() {
    for (let i = 0; i < 10; i++) {

        const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

        fetch(endpoint)
            .then(response => response.json())
            .then(data => {
                const { response } = data

                listEl.innerHTML += createMarkUp(response)

            })
            .catch(error => {
                error
            })

    }
}



let listEl = document.getElementById('emailList')
console.log(listEl);

const btnEl = document.getElementById('regen')
console.log(btnEl);


for (let i = 0; i < 10; i++) {

    const endpoint = 'https://flynn.boolean.careers/exercises/api/random/mail'

    fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            const { response } = data

            listEl.innerHTML += createMarkUp(response)

        })
        .catch(error => {
            error
        })

}





btnEl.addEventListener('click', () => {
    listEl.innerHTML = ''
    replaceEmails()
})