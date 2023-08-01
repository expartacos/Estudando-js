/*let nomeCarro = "Golf"
console.log (nomeCarro)
console.log (typeof nomeCarro)

let precoBolo = 19.99
console.log ( precoBolo)
console.log ( typeof precoBolo)

let cidade = "São paulo"
console.log (cidade)  
console.log (typeof cidade)

let x = 2; 
x = x + 2; 
console.log(x);*/

/*let preco = 82;

if ( preco <= 45) {
    console.log("a carte esta barata");
}else {
    console.log("a carne esta cara")
}
*/

//let fruit = ['maça', 'uva', 'banana'];

/*for( fruta of fruit){
    console.log( fruta);
}*/


/*let cont = 1;

while ( cont <= 100){
    console.log(cont);
    cont++;
}
*/




/*function apertou(){

    
} 

function segurou(){


}

function soltou(e){
console.log(e.key);
console.log('soltou');

}

const input = document.querySelector('input');
input.addEventListener('keyup' , soltou);*/
/*
//Elementos
const input = document.querySelector('input');
const ul = document.querySelector('ul');

//Funções 
function apertar(e){
    if (e.key === 'Enter'){
        let newlista = document.createElement('li');
        newlista.innerHTML = input.value;
        ul.append(newlista)

        input.value = '';
    }
}

input.addEventListener('keyup', apertar);*/


//classes 
/*class Person {

    _age = 0;
    steps = 0;

    constructor(name, age){
        this.name = name;

    }

    takeASteps(){
        this.steps++;
    }

    get age(){
        return this._age;
    }

    set age(newAge){
        if (typeof newAge == "number") {
            this._age = newAge;            
        }
    }

    dizOI(){
        console.log(`${this.name} diz OI`);
    }

}

class Student extends Person{
    
    constructor(name, id){
        super(name);
        this.id = id;
    }
}

let p1 = new Person("rafa", 30);
let p2 = new Person ("bere", 58);
let p3 = new Person ("max", 49);

let p4 = new Student ("rafa", 1);

p4.age = 10;

function creatPerson(name, age){
    let p = new Person(name);
    p.age = age;
    return p;
}

let p5 = creatPerson('rafal', 20);

console.log(p5.name);*/

//estudando for 

let carro = ['ferrari', 'corola', 'fusca'];
let html = '<ul>';

for(let i in carro){
    html += '<li>'+ carro[i] +'</li>';
} 

html += '</ul>';

document.getElementById('demo').innerHTML = html;
 


//studing forEach end map























