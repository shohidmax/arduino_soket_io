const express = require('express');
const cors = require('cors'); 
// const bodyParser = require('body-parser');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
 const dbpass= 'LX93bxZyzVwMxlEX';

const app = express();
const port = process.env.PORT || 3009;


app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());



const uri = "mongodb+srv://shohidmax:LX93bxZyzVwMxlEX@pcesp8266.b133e5r.mongodb.net/?retryWrites=true&w=majority&appName=pcesp8266";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

    


async function run() {
  try{
      await client.connect();
      console.log("db connected");
      const productData = client.db('pcesp8266').collection('products');
      


    app.get('/orders',   async(req, res) =>{
      // const query = {};
      // const cursor = products.find(query);
      // const order = await cursor.toArray();
      res.send(" data not ready");
   }); 

  
 
   
      
    app.post('/led',  async (req, res) => { 
      const res2 = "lol";
      const newData = req.body;  
      console.log(newData);
      const result = await productData.insertOne(newData);
      res.send(result);
    });
    app.post('/qqq', (req, res) => {
      const { status } = req.body;
      console.log('D3 status received:', status);
      // Do whatever you want with the received status
      res.send('Status received successfully');
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
  console.log("Arduino server Running at Port : ", port);
});
