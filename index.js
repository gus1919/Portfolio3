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

app.get('/about.hbs', (req, res) => {
    res.render("about", {title:'About Me'});
});

app.get('/contact.hbs', (req, res) => {
    res.render("contact");
});

app.get('/portfolio.hbs', (req, res) => {
    res.render("portfolio");
});

app.get('/*', (req, res) => {
    res.render("notfound");
});
