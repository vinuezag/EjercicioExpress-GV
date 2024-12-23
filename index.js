const express = require('express');
const app = express();
app.use(express.json());

var lista = [{
    id: '1',
    nombre: 'Artemisa'
}, {
    id: '2',
    nombre: 'Apolo'
}, {
    id: '3',
    nombre: 'Hermes'
}];

// Usio de app, Web service de tipo GET
app.get('/nombre', (req, resp) => {
    resp.json(lista);
});

app.get('/Greta', (req, resp) => {
    resp.send("Hola mi nombre es Greta Vinueza, Soy estudiante de la carrera de Desarrollo de Software.");
});

app.get('/suma', (req, resp) => {
    let a = 10; 
    let b = 5;
    let n = a + b; 
    resp.send("Total:" + n);
});

app.get('/suma/:n1', (req, resp) => {
    let a = parseInt(req.params.n1); 
    let b = 5;
    let n = a + b; 
    resp.send("Total:" + n);
});

// Nueva solicitud para calcular área y perímetro de un rectángulo
app.get('/figura/rectangulo/:base/:altura', (req, resp) => {
    let base = parseFloat(req.params.base);
    let altura = parseFloat(req.params.altura);

    let area = base * altura;
    let perimetro = 2 * (base + altura);

    resp.send("Perímetro:" + perimetro +"Área: "+area);

});

// Nueva solicitud para calcular área y perímetro de un trapecio
app.get('/figura/trapecio/:baseMayor/:baseMenor/:altura/:lado1/:lado2', (req, resp) => {
    let baseMayor = parseFloat(req.params.baseMayor);
    let baseMenor = parseFloat(req.params.baseMenor);
    let altura = parseFloat(req.params.altura);
    let lado1 = parseFloat(req.params.lado1);
    let lado2 = parseFloat(req.params.lado2);

    let area = ((baseMayor + baseMenor) * altura) / 2;
    let perimetro = baseMayor + baseMenor + lado1 + lado2;

    resp.send("Perímetro:" + perimetro +"Área: "+area);
});

// Nueva solicitud para calcular área y perímetro de un triángulo
app.get('/figura/triangulo/:base/:altura/:lado1/:lado2', (req, resp) => {
    let base = parseFloat(req.params.base);
    let altura = parseFloat(req.params.altura);
    let lado1 = parseFloat(req.params.lado1);
    let lado2 = parseFloat(req.params.lado2);

    let area = (base * altura) / 2;
    let perimetro = base + lado1 + lado2;

    resp.send("Perímetro:" + perimetro +"Área: "+area);
});
//Factorizar un Trinomio Cuadrado Perfecto
app.get('trinomio/Factorizar/:num1/:sim1/:num3', (req, resp) => {
    let num1 = parseInt(req.params.num1); 
    let num3 = parseInt(req.params.num3); 
    let sim1 = req.params.sim1; 
    // Validar el signo y construir la factorización correcta
    let factorized;
    let result;

    if (sim1 === "+") {
        factorized = `( ${num1} + ${num3} )^2`;
        result = Math.pow(num1 + num3, 2);
    } else if (sim1 === "-") {
        factorized = `( ${num1} - ${num3} )^2`;
        result = Math.pow(num1 - num3, 2);
    } else {
        resp.status(400).send("Error: Signo no válido. Use '+' o '-'.");
        return;
    }

    // Responder con la factorización y el resultado
    resp.send(`Factorización: ${factorized}, Resultado: ${result}`);

});
//Factorizar un Trinomio Cuadrado Perfecto
app.get('/trinomio/Expandir/:numA/:sim3/:numB', (req, resp) => {
    let numA = parseInt(req.params.numA); 
    let numB = parseInt(req.params.numB); 
    let sim3 = req.params.sim3; 

    if (sim3 !== "+" && sim3 !== "-") {
        resp.status(400).send("Error: Signo no válido. Use '+' o '-'.");
        return;
    }

    // Expandir la factorización
    let trinomio;
    if (sim3 === "+") {
        trinomio = `${numA}^2 + 2*${numA}*${numB} + ${numB}^2`;
    } else {
        trinomio = `${numA}^2 - 2*${numA}*${numB} + ${numB}^2`;
    }

    // Calcular los valores del trinomio
    let termA = Math.pow(numA, 2); // a^2
    let termB = 2 * numA * numB; // 2ab
    let termC = Math.pow(numB, 2); // b^2

    // Ajustar el signo del término del medio
    let expandedTrinomio = `${termA} ${sim3 === "+" ? "+" : "-"} ${Math.abs(termB)} + ${termC}`;

    // Responder con el trinomio generado y sus términos
    resp.send(`Factorización: ( ${numA} ${sim3} ${numB} )^2, Trinomio: ${expandedTrinomio}`);


});

app.listen(3000, () => {
    console.log('La solicitud fue realizada por el puerto 3000'); // Notificación del inicio del server
});
