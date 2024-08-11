//1. Contraseña válida
//Escribir una función llamada contrasenaValida
//que reciba un string y retorne true si el string
//es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false.

function contrasenaValida (password) {
  // Comparar el password con las contraseñas válidas
  if (password === '2Fj(jjbFsuj' || password === 'eoZiugBf&g9') {
    return true
  } else {
    return false
  }
}
// código de prueba
console.log(contrasenaValida('2Fj(jjbFsuj'))
console.log(contrasenaValida('eoZiugBf&g9'))
console.log(contrasenaValida('hola'))

/*2.Calcular impuestos
Escribir una función llamada calcularImpuestos que reciba
dos argumentos numéricos: edad e ingresos. 
Si edad es igual o mayor a 18 y los ingresos son 
 iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0.*/

console.log("----\n")
function calcularImpuestos(edad, ingresos){
    if (edad >= 18 && ingresos >= 1000){
        return ingresos * 0.4

    }else{
        return 0
    }
}
// código de prueba
console.log(calcularImpuestos(18, 1000)) 
console.log(calcularImpuestos(40, 10000)) 
console.log(calcularImpuestos(17, 5000)) 
console.log(calcularImpuestos(30, 500)) 

/*3. IMC (ïndice de masa corporal)
El índice de masa corporal (IMC), o BMI por sus siglas en inglés, 
es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula: peso / altura^2
Escribir una función llamada bmi que reciba dos argumentos: peso y
altura, y retorne un string con las siguientes posibilidades:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

console.log("----\n")
function bmi(peso, altura) {
    
    const indiceMC = peso / (altura * altura);
    
    if (indiceMC < 18.5) {
        return "Bajo de peso";
    } else if (indiceMC >= 18.5 && indiceMC <= 24.9) {
        return "Normal";
    } else if (indiceMC >= 25 && indiceMC <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}

// código de prueba
console.log(bmi(65, 1.8)) 
console.log(bmi(72, 1.6)) 
console.log(bmi(52, 1.75)) 
console.log(bmi(135, 1.7)) 

/*4. Imprimir un arreglo
Escribir una función llamada imprimirArreglo que reciba
un arreglo e imprima cada elemento en una línea a parte:*/

console.log("----\n")
function imprimirArreglo(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

// código de prueba
imprimirArreglo([1, "Hola", 2, "Mundo"]);


/*5. Número de Likes
Escribe una función llamada likes que reciba un número y 
retorne un string utilizando el formato de K para miles y M para millones.
Por ejemplo:
1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo número como un string.*/
console.log("----\n")
function likes(number) {
    if (number < 1000) {
        return number.toString();
    } else if (number >= 1000 && number < 1000000) {
        return Math.floor(number / 1000) + 'K';
    } else {
        return Math.floor(number / 1000000) + 'M';
    }
}
// código de prueba
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"

/*6. FizzBuzz
Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a lo siguiente:
"fizz" si el número es múltiplo de 3.
"buzz" si el número es múltiplo de 5.
"fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número.*/
console.log("----\n")
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero.toString();
    }
}
// código de prueba
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8

console.log("----\n")
/*7. Contar rango de números
Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):
Nota: Utiliza un ciclo en tu solución. Puedes asumir que el primer número va a ser menor que el segundo.*/
function contarRango(num1, num2) {
    let count = 0;
    
    for (let i = num1 + 1; i < num2; i++) {
        count++;
    }
    
    return count;
}
// código de prueba
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0

/*8.Sumar rango de números
Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos).
Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.*/
console.log("----\n")
function sumarRango(inicial, final) {
    let suma = 0;

    for (let i = inicial; i <= final; i++) {
        suma += i;
    }

    return suma;
}
// código de prueba
console.log(sumarRango(0, 10)) // 55
console.log(sumarRango(12, 14)) // 39
console.log(sumarRango(5, 5)) // 5

/*9. Número de aes (letra "a")
Escribir una función llamada numeroDeAes que reciba un string y
retorne el número de veces que aparece la letra "a":*/
console.log("----\n")
function numeroDeAes(cadena) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === 'a') {
            contador++;
        }
    }

    return contador;
}
// código de prueba
console.log(numeroDeAes("abracadabra")) // 5
console.log(numeroDeAes("etinol")) // 0
console.log(numeroDeAes("")) // 0

/*10. Número de caracteres
Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter).
La función debe retornar el número de veces que aparece el caracter en el string.*/
console.log("----\n")
function numeroDeCaracteres(cadena, caracter) {
    let contador = 0;

    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            contador++;
        }
    }

    return contador;
}
// código de prueba
console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
console.log(numeroDeCaracteres("MMMMM", "m")) // 0
console.log(numeroDeCaracteres("eeee", "e")) // 4