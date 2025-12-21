require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose');

const app = express()
const PORT = process.env.PORT || 3002; 
const url = process.env.MONGO_URL;

// Connect to MongoDB Atlas
mongoose.connect(url)
  .then(() => {
      console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
      console.error("MongoDB connection error:", err);
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
