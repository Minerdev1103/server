//step1 Imports
const express = require("express");
const app = express();
const morgan = require("morgan");
const { readdirSync } = require("fs");
const cors = require('cors');
// const authRouter = require('./routes/auth');
// const categoryRouter = require('./routes/category');



// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
// app.use('/api', authRouter);
// app.use('/api', categoryRouter);
readdirSync('./routes').map((c) => 
    app.use('/api', require('./routes/'+c)));


//Step3 Router
// app.post('/api', (req,res) => {
//     const {username, password} = req.body;
//     console.log(username,password);
//     res.send("Hello World");
// });


//Step2 start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
