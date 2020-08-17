// var sacha = {
//     nombre: 'Sacha',
//     apellido: 'Lifszyc',
//     altura: 1.72
//     cantidadDeLibros: 111
// }

// var alan = {
//     nombre: 'Alan',
//     apellido: 'Perez',
//     altura: 1.86
//     cantidadDeLibros: 78
// }

// var martin = {
//     nombre: 'Martin',
//     apellido: 'Gomez',
//     altura: 1.85
//     cantidadDeLibros: 132
// }

// var dario = {
//     nombre: 'Dario',
//     apellido: 'Juarez',
//     altura: 1.71
//     cantidadDeLibros: 90
// }

// var vicky = {
//     nombre: 'Vicky',
//     apellido: 'Zapata',
//     altura: 1.56
//     cantidadDeLibros: 91
// }

// var paula = {
//     nombre: 'Paula',
//     apellido: 'Barros',
//     altura: 1.76
//     cantidadDeLibros: 182
// }

// const esAlta = (persona) => {
//     return persona.altura > 1.8
// }

// const esBaja = (persona) => {
//     return persona.altura < 1.7
// }

// var personas = [sacha, alan, martin, dario, vicky, paula]

// for (var i = 0; i < personas.length; i++) {
//     var persona = personas[i]
//     console.log(`${persona.nombre} mide ${persona.altura} mts`)
// }

// const pasarAlturaACms = (persona) => {
//     // persona.altura *= 100
//     return {
//         ...persona,
//         altura: persona.altura * 100
//     }
// }

// var personasAltas = personas.filter(esAlta)
// var personasBajas = personas.filter(esBaja)
// var personasCms = personas.map(pasarAlturaACms)


// console.log(personasAltas)
// console.log(personasBajas)
// console.log(personasCms)

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({ altura }) => altura > 1.8

var personas = [sacha, alan, martin, dario, vicky, paula]

var personasAltas = personas.filter(esAlta)

const pasarAlturaACms = persona => ({
  ...persona,
  altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)

const reducer = (acum, persona) => {
    return acum + persona.cantidadDeLibros
}

var totalDeLibros = personas.reduce(reducer, 0)

console.log(`En total todos tienen ${totalDeLibros} libros`)