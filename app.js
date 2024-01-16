const express = require ('express');
const mongoose = require('mongoose');
const bookRoute = require('./Route/bookRoute')

require('dotenv/config');

const app = express();

// Middleware
app.use(express.json());

// Default route
app.get('/',(req, res)=>{
    res.send("This is Deafult route");
})

app.use('/api/book1', bookRoute)

async function main() {
    const data = await mongoose.connect(process.env.DB);
    console.log(data.default.STATES.connected);
}
main()

app.listen(process.env.PORT)