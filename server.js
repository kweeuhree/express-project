const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const uuid = require('uuid');
const port = 3000;

// const exphbs = require('express-handlebars');

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const customersRouter = require('./routes/customers');
const inventoryRouter = require('./routes/inventory');

app.use('/api/customers', customersRouter);
app.use('/api/inventory', inventoryRouter);




//add middleware?
//handlebars middleware
// app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');
// //body parser middleware 
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }))



//-----------------------------------listen
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
})