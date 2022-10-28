let txt = document.querySelector('.txt')
let btn = document.querySelector('.btn')

const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const timer = ms => new Promise(res => setTimeout(res, ms))

async function generator() {
    let save = txt.textContent
    for(let i =0; i < alpha.length/6; i++) {
        await timer(50);
        let rand = Math.floor(Math.random() * alpha.length);
        txt.textContent = save + alpha[rand]
    }    
}

btn.addEventListener('click', () => {generator()})