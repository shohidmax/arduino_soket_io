const express = require('express');
const cors = require('cors'); 
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
 const dbpass= 'LX93bxZyzVwMxlEX';

const app = express();
const port = process.env.PORT || 3009;


app.use(cors());
app.use(express.json());




const uri = "mongodb+srv://shohidmax:LX93bxZyzVwMxlEX@pcesp8266.b133e5r.mongodb.net/?retryWrites=true&w=majority&appName=pcesp8266";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    


async function run() {
  try{
      await client.connect();
      const productData = client.db('pcesp8266').collection('products');
      


    app.get('/orders',   async(req, res) =>{
      // const query = {};
      // const cursor = products.find(query);
      // const order = await cursor.toArray();
      res.send(" data not ready");
   });

 
 
   
     
    app.post('/products',  async (req, res) => {
      const Productdata = req.body;
      const result = await productData.insertOne(Productdata);
      res.send(result);
    });
     
    app.put('/users/admin/:email', async (req, res) => {
      const email = req.params.email;
      const filter = { email: email };
       
      res.send("result");
    })
     
    app.patch('/order/:id',  async(req, res) =>{
      const id  = req.params.id;
      // const payment = req.body;
      // const filter = {_id: ObjectId(id)};
      // const updatedDoc = {
      //   $set: {
      //     paid: true,
      //     transactionId: payment.transactionId
      //   }
      // }
      // const result = await paymentData.insertOne(payment);
      // const updatedorder = await orderData.updateOne(filter, updatedDoc);
      res.send("updatedorder");
    })
     
    }
    finally{


    }
   
}
run().catch(console.dir);




app.get("/", (req, res) => {
    res.send(`<h1 style="text-align: center;
      color: red;"> Server is Running at <span style="color: Blue;">${port}</span></h1>`);
  });


app.listen(port, () => {
  console.log("Trayal server Running at Port : ", port);
});
