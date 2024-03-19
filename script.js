let index=1;
let contacts = [];
let requestURL = 'https://api.parser.name/?api_key=4ec4c916da1c0847958ccf93a30d2d8a&endpoint=generate&country_code=IT&results=10';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function () {
    let nomi = request.response;
    // console.log(nomi);
    contacts = [];
    nomi.data.forEach(nome =>{ contacts.push({'id':index,'name':`${nome.name.firstname.name}`,'surname':`${nome.name.lastname.name}`})
    index++;

    })
    // console.log(contacts);
    
}

let counterColor = 0;
let btn1 = document.querySelector('#btn1');
let h1 = document.querySelector('h1');
let colors = ['red', 'black', 'green', 'blue', 'yellow'];
let btn2nomi = document.querySelector('#btn2-nomi');
let btn2cognomi = document.querySelector('#btn2-cognomi');
let btn3 = document.querySelector('#btn3');
let hide = document.querySelector('#hide');
let wrapper = document.querySelector('.wrapper');

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

btn2nomi.addEventListener('click', () => {

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
        // console.log(contacts);
        isDesc = false;
        btn2nomi.innerHTML = "Ordine nomi ⬇️"
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
        // console.log(contacts);
        isDesc = true;
        btn2nomi.innerHTML = "Ordine nomi ⬆️"
    }
    let article = document.createElement("article");
    contacts.forEach(contact => {
        article.innerHTML += `<p>${contact.name} ${contact.surname}</p>`;
    });
    wrapper.appendChild(article);
    // console.log(article);

})

btn2cognomi.addEventListener('click', () => {

    wrapper.innerHTML="";
    if (isDesc) {
        contacts.sort((a, b) => {
            const nameA = a.surname.toUpperCase(); // ignore upper and lowercase
            const nameB = b.surname.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }

            // names must be equal
            return 0;
        });
        // console.log(contacts);
        isDesc = false;
        btn2cognomi.innerHTML = "Ordine cognomi ⬇️"
    } else {
        contacts.sort((a, b) => {
            const nameA = a.surname.toUpperCase(); // ignore upper and lowercase
            const nameB = b.surname.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }

            // names must be equal
            return 0;
        });
        // console.log(contacts);
        isDesc = true;
        btn2cognomi.innerHTML = "Ordine cognomi ⬆️"
    }
    let article = document.createElement("article");
    contacts.forEach(contact => {
        article.innerHTML += `<p>${contact.surname} ${contact.name} </p>`;
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
        article.innerHTML += `<p>${contact.id}: ${contact.name} ${contact.surname}</p>`;
    });
    wrapper.appendChild(article);
    // console.log(article);

})

hide.addEventListener('click', ()=>{
    wrapper.classList.toggle("d-none")
})