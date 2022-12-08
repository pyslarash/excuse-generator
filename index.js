let who = ['My cat','My computer','His parrot','The apocalypse','Nickelback'];
let action = ['destroyed','ate','vomited','exploded'];
let what = ['my notes', 'my homework', 'the tickets', 'the bus'];
let when = ['before the class','when I was planning to do it','when I finished','during my lunch','while I was having coffee'];

function randomGuess(array) {
        let guess;
        guess = array[Math.floor(Math.random()*array.length)];
        return guess;
}

function excuseGenerator(who,action,what,when) {
        let excuse = "";
        excuse = randomGuess(who) + " " + randomGuess(action) + " " + randomGuess(what) + " " + randomGuess(when) + ".";
        return excuse;
}

let myExcuse = excuseGenerator(who,action,what,when);

document.getElementById("excuse").innerHTML = myExcuse;