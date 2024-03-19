let counterColor = 0;
let btn1 = document.querySelector('#btn1');
let h1 = document.querySelector('h1');
let colors = ['red', 'black', 'green', 'blue', 'yellow'];
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let hide = document.querySelector('#hide');
let wrapper = document.querySelector('.wrapper');
let contacts = [
    { 'id': 1, 'name': 'Nicola' },
    { 'id': 2, 'name': 'Fabio' },
    { 'id': 3, 'name': 'Luca' },
    { 'id': 4, 'name': 'Giulia' }]
let isDesc = true;
let isDescID = true;


btn1.addEventListener('click', () => {
    h1.style.color = colors[counterColor];
    // console.log(colors[counterColor]);

    if (counterColor < colors.length - 1) {
        counterColor++;
    } else {
        counterColor = 0;
    }

})

btn2.addEventListener('click', () => {

    wrapper.innerHTML="";
    if (isDesc) {
        contacts.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        console.log(contacts);
        isDesc = false;
        btn2.innerHTML = "Ordine alfabetico ⬇️"
    } else {
        contacts.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            // names must be equal
            return 0;
        });
        console.log(contacts);
        isDesc = true;
        btn2.innerHTML = "Ordine alfabetico ⬆️"
    }
    let article = document.createElement("article");
    contacts.forEach(contact => {
        article.innerHTML += `<p>${contact.name}</p>`;
    });
    wrapper.appendChild(article);
    // console.log(article);

})

btn3.addEventListener('click', () => {

    wrapper.innerHTML="";
    if (isDescID) {
        contacts.sort((a, b) => a.id - b.id);
        // console.log(contacts);
        isDescID = false;
        btn3.innerHTML = "Ordine di ID ⬇️"
    } else {
        contacts.sort((a, b) =>  b.id - a.id  );
        // console.log(contacts);
        isDescID = true;
        btn3.innerHTML = "Ordine di ID ⬆️"
    }
    let article = document.createElement("article");
    contacts.forEach(contact => {
        article.innerHTML += `<p>${contact.id}: ${contact.name}</p>`;
    });
    wrapper.appendChild(article);
    // console.log(article);

})

hide.addEventListener('click', ()=>{
    wrapper.classList.toggle("d-none")
})