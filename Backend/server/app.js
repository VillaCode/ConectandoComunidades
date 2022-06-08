const express = require('express');
const ejs = require('ejs');
const paypal = require('paypal-rest-sdk');
const { json } = require('body-parser');
var bodyParser = require('body-parser');
const app = express();

//Variables y conexion a la base de datos

//usado para almacenar las comunidades sin necesidad de hacer varios requests
var todos=  [];

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Gm278+41",
  database: "web_project"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to Dabase! Start your transaction");
});



// necesito que el front crees variables que contengan el client_id y el client_secret_paypal para poder realizar la transacción
// No es necesario que sean visibles, solo que existan para perdirlas cuando llames el pago
app.post('/paypalConfig', (req, res) => {
    paypal.configure({
        'mode': 'sandbox', //sandbox
        'client_id': req.body.client_id_paypal,
        'client_secret': req.body.client_secret_paypal
      });
      console.log("paypal configured for the community");
});




//app.set('view engine', 'ejs');

//obtener todas las comunidades y sus datos
app.get('/all',(req, res)=>{
    
    
    con.beginTransaction(function (err) {
        
        if(err) throw err;


        
        
        var sql = "SELECT * FROM comunidades" ; 
        connection.query(sql, function(errr, result, fields){

         console.log(result);   
           
         var i= result.length;
         console.log(i);
         
         for (let index = 0; index < i; index++) {
             
            console.log(result[index].nombre_comunidad);
            console.log(result[index].descripcion_comunidad);
            console.log(result[index].imagen_comunidad);
            console.log(result[index].clientid_comunidad);
            console.log(result[index].secret_comunidad);


             todos[index]= {
                nombre_comunidad: result[index].ombre_comunidad,
                descripcion_comunidad:result[index].descripcion_comunidad,
                imagen_comunidad: result[index].imagen_comunidad,
                client_id_paypal: clientid_comunidad,
                secret_comunidad: secret_comunidad
             };
             
             
         }
         
         // se va a pasar un arreglo que contiene jsons con los datos de las comunidades
         res.json({"array": todos});
         console.log(todos);


            

        });
        connection.end;
    });
    connection.end;
     
 });

app.post('/pay', (req, res) => {
  const create_payment_json = {
    "intent": "sale",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",
        "cancel_url": "http://localhost:3000/cancel"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Standard Donation",
                "sku": "001",
                "price": "100.00",
                "currency": "MXN",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "MXN",
            "total": "100.00"
        },
        "description": "Donacion para la comunidad seleccionada"
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
  if (error) {
      throw error;
  } else {
      for(let i = 0;i < payment.links.length;i++){
        if(payment.links[i].rel === 'approval_url'){
          res.redirect(payment.links[i].href);
        }
      }
  }
});

});

app.get('/success', (req, res) => {
  const payerId = req.query.PayerID;
  const paymentId = req.query.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    "transactions": [{
        "amount": {
            "currency": "MXN",
            "total": "100.00"
        }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log(JSON.stringify(payment));
        res.send('Transaccion exitosa! Puedes cerrar esta ventana del navegador. Gracias!');
    }
});
});

app.get('/cancel', (req, res) => res.send('Cancelled'));

app.listen(3000, () => console.log('Server Started'));