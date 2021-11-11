const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

//Handlebars set up
app.set("view engine", "hbs");
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'index'
 }));

//router set up
const PORT = 3001;
app.listen(PORT);
console.log(`Now listening to Server: http://localhost:${PORT}`);

//landing page
app.get('/', (req, res) => {
    res.render("main");
});
