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
}*/
//1.- Del siguiente arreglo de strings retornar otro arreglo con todo a mayúsculas.
let pokeones = ['Pikachu','Charmander','Bulbasaur','Squirtle']
let poke = pokeones.toString();
console.log(poke.toUpperCase());

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
console.log(fuego);