/*
1. Mostrar en consola la secuencia de Fibonacci:
a. Entre los números 0 y 1000.
b. Números pares entre 0 y 1000.
c. Números impares entre 0 y 1000.
          Hint: Puedes usar recursividad o algún ciclo o método iterador visto en clase
2. Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
3. Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.

      //2.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
      let pokemones = [
          {
              nombre: 'Pikachu',
              tipo: 'Electrico'
          },
          {
              nombre: 'Charmander',
              tipo: 'Fuego',
          },
          {
              nombre: 'Bulbasaur',
              tipo: 'Planta'
          },
          {
              nombre: 'Squirtle',
              tipo: 'Agua'
          },
          {
              nombre: 'Charmeleon',
              tipo: 'Fuego'
          },
          {
              nombre: 'Weedle',
              tipo: 'bicho'
          },
          {
              nombre: 'Charizard',
              tipo: 'Fuego'
          }
]

// Fibonacci de 0 a 1000
let fibo1 = 0;
let fibo2 = 1;
let fibonnacci = 0;
let contador = 0;

while (fibonnacci < 1000) {
    fibonnacci = fibo1 + fibo2;
    fibo1 = fibo2; //ahora fibo1 toma el último valor
    fibo2 = fibonnacci; //ahora fibo2 toma el valor de fibonnacci
    console.log(fibonnacci);
    contador++;
}


// Fibonacci Pares de 0 a 1000
let fibo1 = 0;
let fibo2 = 1;
let fibonnacci = 0;
let contador = 0;
resultadoFibonnacci = [];

while (fibonnacci < 1000) {
    fibonnacci = fibo1 + fibo2;
    fibo1 = fibo2; //ahora fibo1 toma el último valor
    fibo2 = fibonnacci; //ahora fibo2 toma el valor de fibonnacci
    //console.log(fibonnacci);
    contador++;
    if(fibonnacci % 2 == 0){
    let resultadoFibonnacci2 = resultadoFibonnacci.push(fibonnacci)
    console.log(resultadoFibonnacci);
}
}

// Fibonacci Impares de 0 a 1000
let fibo1 = 0;
let fibo2 = 1;
let fibonnacci = 0;
let contador = 0;
resultadoFibonnacci = [];

while (fibonnacci < 1000) {
    fibonnacci = fibo1 + fibo2;
    fibo1 = fibo2; //ahora fibo1 toma el último valor
    fibo2 = fibonnacci; //ahora fibo2 toma el valor de fibonnacci
    //console.log(fibonnacci);
    contador++;
    if(fibonnacci % 2 != 0){
    let resultadoFibonnacci2 = resultadoFibonnacci.push(fibonnacci)
    console.log(resultadoFibonnacci);
}
}
//1.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
//Intento 1 Nivel solución: Muy flaite, idealmente no evaluar
let pokeones = ['Pikachu','Charmander','Bulbasaur','Squirtle']
let poke = pokeones.toString();
console.log(poke.toUpperCase());*/


//Hice muchos intentos, voy a confesar que la solución de convertir el arreglo en un string y luego pasarlo todo a mayúscula era no solo equivocado, sino que hasta vergonzoso, pero quería tanto enviar la tarea pronto.
//Bueno, luego la verguenza me ganó y después de darle vueltas y mil intentos llegué a este que creo que es la solución correcta.
//No me importa que agregar mi solución original reste puntos, pero quería dejar constancia del progreso, para luego sentirme orgullosa de haberlo logrado. 
let pokeones = ['Pikachu','Charmander','Bulbasaur','Squirtle']
let pokeMayus = pokeones.map(pokeones => pokeones.toUpperCase(0));
console.log(pokeMayus);
/*

//2.- Del siguiente arreglo de objetos, retornar otro arreglo con los pokemones tipo fuego.
let pokemones = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego',
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
]
let fuego = pokemones.filter(pokemones => pokemones.tipo == "Fuego");
console.log(fuego);*/
