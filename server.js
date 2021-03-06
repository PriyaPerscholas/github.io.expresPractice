const express = require('express');
const app = express();
const fs = require('fs')
const res = require('express/lib/response')
const req = require('express/lib/request')

//const { allowedNodeEnvironmentFlags } = require('process');

app.engine('hypatia', (filePath, options, callback) => {

       fs.readFile(filePath, (err, content) => {
              if (err) return callback(err)

              const rendered = content.toString()
                     .replace('#title#', '<title>' + options.title + '</title>')
                     .replace('#message#', '<h1>' + options.message + '</h1>')
                     .replace('#content#', '<div>' + options.content + '</div>')
              return callback(null, rendered)
       })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hypatia') // register the hypatia view engine

app.get('/', function (req, res) {
       res.send('<h1>Hello ALL!</h1>');
});
app.get('/home', function (req, res) {
       res.send('<h2>Welcome to coding</h2>')
});
app.get('/content', function (req, res) {
       res.send('<h3>JAVASCRIPT</h3>')
});
app.get('/functions', function (req, res) {
       res.send('<h3>Functions is very important concepts in javascript<h3>')
});
app.get('/functions', function (req, res) {
       res.send('<p>One function is used as a parameter to other function is called callback function</p>')
});
app.get('/operators', function (req, res) {
       res.send('<p>Arithmetic operators,Boolean operators</p>')
});
app.get('/arrays', function (req, res) {
       res.send('<p>arrays are used for organized the data</p>')
});
app.get('/strings', function (req, res) {
       res.send('<p>strings are passed with double quotes</p>')
});
app.get('/objects', function (req, res) {
       res.send('<p>objects are defined with key value pair</p>')
});
app.get('/loops', function (req, res) {
       res.send('<p>Javascript has for ,while,do while loops</p>')
});

app.get('/about-JS', (req, res) => {
       res.render('template1', { title: 'Hey', message: 'Javascript!', content: 'Most powerful scripting language.JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries' })
})
app.get('/about-HTML', (req, res) => {
       res.render('template2', { title: 'Hey', message: 'HTML', content: 'Backbone of Webpage.HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables.' })
})

app.listen(3000, function () {
       console.log('Listening on port 3000');
});