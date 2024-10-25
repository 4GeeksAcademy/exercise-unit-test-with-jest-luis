// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

// Prueba para convertir dólares a yenes
test("Un dólar debería ser aproximadamente 146.26 yenes", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(10);
    const expected = (10 / 1.07) * 156.5;
    expect(yenes).toBeCloseTo(expected, 2); // toBeCloseTo para precisión en decimales
});


// Prueba para convertir yenes a libras esterlinas
test("156.5 yenes debe ser aproximadamente 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(156.5);
    const expected = (156.5 / 156.5) * 0.87;
    expect(pounds).toBeCloseTo(expected, 2);
});