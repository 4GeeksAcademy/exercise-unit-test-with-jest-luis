// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Función para convertit dolares a yenes.
const fromDollarToYen = (dolars) =>{
    const euros = dolars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
}

// Función para convertit Euros a Dolares
const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD;
}

// Función para convertit Yenes a Libras Esterlinas
const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const pounds = euros * oneEuroIs.GBP;
    return pounds;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };