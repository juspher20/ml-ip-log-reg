const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express() 
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/api',async(req, res)=>{
  res.send("welcome server-side")
});

app.get("/register", (req, res) =>{
  res.send
})

app.listen(PORT, () => {
      console.log(`Server started on port${PORT}`);
    });











