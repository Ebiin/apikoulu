const express = require('express')
const app = express()
const port = 3000
const timestamp = require("time-stamp")

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

 
let items = [
    {
        id: 1,
        username: "Juho",
        price: 666,
        title: "leipa",
        category: "evas",
        location: "Oulu",
        date: "12.12.2020",
        phoneNumber: "000000",
        description: "evasta",
        deliveryType: "Pickup"
    }]

app.get ("/items", (req,res) => {
    res.send(items)
})

app.post ("/items", (req,res) => {
    const item = {
        id: items.length+1,
        username: req.body.username,
        price: req.body.price,
        title: req.body.title,
        category: req.body.category,
        location: req.body.location,
        date: timestamp('DD.MM.YYYY HH:mm:ss'),
        phoneNumber: req.body.phoneNumber,
        description: req.body.description,
        deliveryType: req.body.deliveryType
    }
    items.push(item);
    res.status(201).send(item);
  
})



 
app.listen(3000)