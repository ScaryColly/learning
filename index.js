
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const mongoose = require('mongoose');
async function startServer() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ Failed to connect to MongoDB:", err);
    process.exit(1);
  }
}

startServer();


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const moviesRoutes = require('./routes/moviesRoutes'); 
app.use(express.urlencoded({ extended: true }));  
app.use(express.json());
app.use('/movies', moviesRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});