window.onload = function(){
    this.GenerarExcusa();
}

document.getElementById("btn").addEventListener("click", function() {
  GenerarExcusa();
});

function GenerarExcusa(){

    let who = ['The dog', 'My grandma', 'His turtle', 'My bird'];         //0 y 3
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


    let aleatorio1 = Math.floor(Math.random()* who.length );   //genero un numero entre o y 3      
    let aleatorio2 = Math.floor(Math.random()* action.length );
    let aleatorio3 = Math.floor(Math.random()* what.length );
    let aleatorio4 = Math.floor(Math.random()* when.length );

    let excusa = who[aleatorio1]             //his turtle
    let excusa1 = action[aleatorio2]                     //crushed
    let excusa2 = what[aleatorio3]                         //the car
    let excusa3 = when[aleatorio4]                          //when i finished

    let suma = excusa   +  excusa1  +  excusa2 +  excusa3 

    document.getElementById("thegenerator").innerHTML = suma
    console.log(suma)
     
    
}


