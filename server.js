var express = require ('express');
var server = express();
var request = require ('request');
var port = "4002";

server.use(express.static(__dirname));

server.set('view engine', 'ejs');


server.get('/', function (req, res) {
    getResultat(function(err, data){
        if(!err){
               // res.send(data);
               var comp = JSON.parse(data);
                res.render('index', {
                    competences: comp
                });
        }
        else{
              res.send(err);
        }

    });

    var test = "Je suis la page d'accueil";

});

server.get("/competences",function(req, res){
    res.sendFile(__dirname +"/datas/competences.json");
});

function getResultat(callback){
    //changer url par l'url de la ressource a recuperer.
    var url = "http://localhost:4002/competences";
    
    //appel de la fonction request
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = JSON.stringify(JSON.parse(body));
            return callback(null, result);
        } else {
            return callback(error, null);
        }
    });
}



server.listen(port, function(){
    console.log('the port is on')
});