let counterColor = 0;
let btn1= document.querySelector('#btn1');
let h1= document.querySelector('h1');
let colors = [ 'red','black', 'green', 'blue', 'yellow'];


btn1.addEventListener('click', () => {
    h1.style.color = colors[counterColor];
    console.log(colors[counterColor]);
    
    if (counterColor < colors.length - 1) {        
        counterColor++;        
    } else {
        counterColor = 0;
    }

})