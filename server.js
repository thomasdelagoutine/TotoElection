/**
 * Created by Thomas on 18/09/2016.
 */
/**
 * Created by Thomas on 04/09/2016.
 */
var express = require('express');
var mysql = require('mysql');
var http = require('http');
var bodyParser = require('body-parser')
var app = express();
var port = 8087;
var server = http.createServer(app);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
console.log("Le serveur tourne sur le port 8087 ! <3");
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'election'
});
db.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('Connecte sur la BDD en tant que numero ' + db.threadId);
});
server.listen(port);

app.get("/getAllCandidates", function (req, res) {
    console.log("Demande des candidats");
    var candidats = [];
    //On selectionne les informations concernant les candidats
    var requete = "SELECT * FROM candidat;";
    db.query(requete, function (err, requete) {
        requete.forEach(function (ligne) {
            var candidat = {
                nom: ligne.nom,
                partie: ligne.parti,
                pourcentage: ligne.pourcentage,
                lienPhoto: ligne.lienPhoto,
                lienPhotoParti: ligne.lienPhotoParti
            };
            console.log("Candidat " + candidat.nom + " ajouté");
            candidats.push(candidat);
        });
        res.send(candidats);
    });
});

app.post('/login', function (req, res) {
    console.log(req.body);
    var login = req.body.login;
    var password = req.body.password;
    var requete = "SELECT * FROM user where login='" + login + "' && password='" + password + "';";
    var result = {};
    db.query(requete, function (err, requete) {
        if (requete.length == 0) {
            console.log('Mauvais login');
            var user = {
                name: requete[0].name,
                surname: requete[0].surname
            };
            result.user = user;
            result.status = 403;
            res.send(result);
        }
        //Sinon on dit que c'est bon
        else if (requete.length == 1) {
            var user = {
                name: requete[0].name,
                surname: requete[0].surname
            };
            result.status = 200;
            result.user = user;
            res.send(result)
        }

    });

});