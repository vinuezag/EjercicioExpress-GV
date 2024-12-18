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

app.listen(3000, () => {
    console.log('La solicitud fue realizada por el puerto 3000'); // Notificación del inicio del server
});
