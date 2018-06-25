var express = require ('express');
var server = express();
var port = "4002";

server.use(express.static(__dirname));

server.set('view engine', 'ejs');


server.get('/', function (req, res) {
    var test = "Je suis la page d'accueil";
    res.render('index', {
        message: test
    });
});

server.get("/competences",function(req, res){
    res.sendFile(__dirname +"/competences.json");
});


// server.get("data/competences",function(req, res){
//     res.sendFile(__dirname +"/competences.json");
// });


server.listen(port, function(){
    console.log('the port is on')
});