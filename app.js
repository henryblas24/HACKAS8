// Pregunta  1
function suma(a, b){ //parametros
    return a + b;
}

 // argumentos
console.log(suma(4, 6))

// Pregunta  2

function promedio(c, d, f, g) { //parametros
    return (c + d + f + g)/4;
}
// muestra resultado 
console.log(promedio(15, 16, 17, 18))

// Pregunta  3

function arearectangulo(c, d) { //parametros
    return c * d;
}
// muestra resultado
console.log(arearectangulo(20, 15))

// Pregunta  4

function areatriangulo(c, d) { //parametros
    return (c * d)/2;
}
// muestra resultado
console.log(areatriangulo(30, 20))

// Pregunta  5

function area_circunferencia(d) { //parametros
    return (Math.PI * d*d);
}
// muestra resultado
console.log(area_circunferencia(20))

// Pregunta  6

function sueldo_semanal(horas, pago_hora) { //parametros
    return ( (horas*pago_hora)*7);
}
// argumentos
horas = 8;
pago_hora = 10;
// muestra resultado
console.log(sueldo_semanal(horas, pago_hora))


// Pregunta  7

function pedido_tela(pulgadas, m_tela) { //parametros
    return ( (pulgadas*m_tela));
}
// argumentos  
pulgadas = 0.0254;
m_tela = 4000;

// muestra resultado
console.log(sueldo_semanal(pulgadas, m_tela))


// Pregunta 8

function compra_dolares(dolar, cant_soles) { //parametros
    return  (cant_soles/dolar);
}
// argumentos  
dolar = 3.70;
cant_soles = 4000;

// muestra resultado
console.log(compra_dolares(dolar, cant_soles))


// Pregunta 9

function edad_trabajador(ano_nacimiento) { //parametros
    return 'la edad del trabajador es' + ' '+ (2023-ano_nacimiento);
}
// argumentos  
ano_nacimiento = 2000;

// muestra resultado edad
console.log(edad_trabajador(ano_nacimiento))



// Pregunta 10

function persona_menor(edad1, edad2, edad3) { //parametros
    if (edad1<edad2 && edad1<edad3) {
        return 'la persona menor tiene' + ' '+ edad1};
    if (edad2<edad1 && edad2<edad3) {
        return 'la persona menor tiene' + ' '+ edad2};
    if (edad3<edad1 && edad3<edad2) {
        return 'la persona menor tiene' + ' '+ edad3};
    }
// argumentos  

edad1 = 30;
edad2 = 20;
edad3 = 50;

// muestra resultado edad
console.log(persona_menor(edad1, edad2, edad3))



// Pregunta 11

let a = 0;
function bono_antiguedad(a) { //parametros
    if a = 1 {
        return 'su bono es '+ 100};
    else if a = 2 {
        return 'su bono es '+ 200};
    else if a = 3 {
        return 'su bono es '+ 300};
    else if a = 4 {
        return 'su bono es '+ 400};
    else if a = 5 {
        return 'su bono es '+ 500};
    else {
        return 'su bono es '+ 1000};
    };
   
// muestra resultado del bono de 400
console.log(bono_antiguedad(4))


// Pregunta 12

let salario = 1500;
let ano = 0;

function salario(ano) { //parametros
    if (ano=1) {
        salario1 = salario + ((salario * 10)/100);
    };
    if (ano=2) {
        salario2 = salario1 + ((salario1 * 10)/100);
    };
    if (ano=3) {
        salario3 = salario2 + ((salario2 * 10)/100);
    };
    if (ano=4) {
        salario4 = salario3 + ((salario3 * 10)/100);
    };
    if (ano=5) {
        salario5 = salario4 + ((salario4 * 10)/100);
    };
    if (ano=6) {
        salario6 = salario5 + ((salario5 * 10)/100);
    };
    };

// muestra resultado del salario x año
console.log('Su salario en su primer año es '+ salario1)
console.log('Su salario en su segundo año es '+ salario2)
console.log('Su salario en su tercer año es '+ salario3)
console.log('Su salario en su cuarto año es '+ salario4 )
console.log('Su salario en su quinto año es '+ salario5)
console.log('Su salario en su sexto año es '+ salario6)


// Pregunta 13

let alumnos = 0;
let nota = 0;
let aprobados = 0 ;
let desaprobados = 0;

function aprobados_desaprobados(alumnos, nota)  {// Parametros
    if ( alumnos > 0 && nota > 10 ) {
        aprobados++ }
    else if ( alumnos>0 && nota < 10 ) {
        desaprobados++
    };
};

console.log(aprobados_desaprobados(20,15)) // se pasa datos
console.log('el numero de aprobados es ' + aprobados)
console.log('el numero de desaaprobados es ' + desaprobados)


// Pregunta 14


let totalverde = 0;
let totalblanco = 0;
let totalrojo = 0;

function focos_color(color) { // Parametros
    if color = verde {
        totalverde++};
    if color = blanco {
        totalblanco++};
    if color = rojo {
        totalrojo++};
};

console.log(focos_color(verde)) // Pasamos argumnentos
console.log('total focos color verde ' +  totalverde)
console.log('total focos color blanco ' +  totalblanco)
console.log('total focos color rojo ' +  totalrojo)


// Pregunta 15

function votacion(edad)  { // Parametros
        if edad >= 18 {
                return 'Usted si puede votar' };
        else {
            return 'Usted no puede votar por ser menor de edad'
        };
    };

console.log(votacion(16)) // Se para argumento


// ¿ cual fue la razon de crear Javascript ?
//
//   Por que las aplicaciones web eran complejas y la velocidad de navegacion era lenta.
//
// Quien fue el creador de Javascript ?
//
//  Brendan Eich
//
// ¿Por que se llamo Javascript ?
//
//   en un princio se denomino LiveScript y la razon del cambio fue exclusivamente por 
//   Marketing ya que Java era la palabra de moda en el mundo informatico y de internet 
//   de la epoca.    