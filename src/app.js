const ProductManager = require("../ProductManager");
let productManager = new ProductManager();


const express = require (`express`)
const app = express();      //nos da nuestro enotorno de express
app.use(express.json());
app.use(express.urlencoded({extended: true}));


const prod = require ("../database/products.json");


////mostramos los 10 productos//
app.get("/products", (request, response) => {
    response.send(JSON.stringify(prod));
});


///mostramos solo 5 productos 

// app.get("/products/query", (request, response) => {
//     let limit = request.query;
//     const fiveProducts = productManager.getProducts();
//     if(limit){
//         function limitObject (array, limit) {
//             return array.splice (0, limit);
//      }
//      response.send(limitObject(prod, limit));
//     }
//      response.send(products);
// });




///mostramos el id2 ///
app.get("/products/:id", (request, response)=>{
    const products = prod.find(p => p.id = request.params.id)
    if(products){
      response.send(products);
    }
    response.send({message: "User not found"});
  ;})




const SERVER_PORT= 8080;
app.listen(SERVER_PORT, () => { 
    console.log(`Servidor escuchando por el puerto: ${SERVER_PORT}`);
});  