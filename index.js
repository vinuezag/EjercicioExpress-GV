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
//Usio de app, Web service de tipo GET

app.get('/nombre',(req,resp)=>{
    resp.json(lista);
});

app.get('/Greta',(req,resp)=>{
    resp.send("Hola mi nombre es Greta Vinueza, Soy estudiante de la carrera de Desarrollo de Software.");
});
app.get('/suma',(req,resp)=>{
    let a = 10; 
    let b = 5;
    let n = a+b; 
    resp.send("Total:"+n);
});
app.get('/suma/:n1',(req,resp)=>{
    let a = parseInt(req.params.n1); 
    let b = 5;
    let n = a+b; 
    resp.send("Total:"+n);
});
app.listen(3000,()=>{
    console.log('La solicitud fue realizada por el puerto 3000');  //Notificación del inicio del server
});