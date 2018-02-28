moment.locale('fr');
$('#date').text(moment().format('LL'));

var url = ('http://api.openweathermap.org/data/2.5/weather?q=Pamiers&units=metric&lang=fr&appid=58ce3ab8d36bf722c61f295b05a59805')

$('#bouton').click(function(){
    var ville = $('#champ').val();
    var url = ('http://api.openweathermap.org/data/2.5/weather?q='+ville+'&units=metric&lang=fr&appid=58ce3ab8d36bf722c61f295b05a59805')

//On prépare la requête avec un windows fetch 
window.fetch(url)
    //On transforme les données en format json
    .then(res => res.json())
    //On effectue nos requêtes en indiquant ou les afficher avec les id
    .then(resJson => $('#degrés').text(resJson.main.temp + '°'))

window.fetch(url)
    .then(res => res.json())
    .then(resJson => $('#temp_max').text('Temp. max :' + ' ' + resJson.main.temp_max + ' ' + '°'))

window.fetch(url)
    .then(res => res.json())
    .then(resJson => $('#temp_min').text('Temp. min :' + ' ' + resJson.main.temp_min + ' ' + '°'))

window.fetch(url)
    .then(res => res.json())
    .then(resJson => $('#pres_atm').text('Pres. atmosphérique :' + ' ' +resJson.main.pressure))

window.fetch(url)
    .then(res => res.json())
    .then(resJson => $('#vit_ven').text('Vitesse du vent :' + ' ' + resJson.wind.speed + ' ' + 'km/h'))

window.fetch(url)
    .then(res => res.json())
    .then(resJson => $('#humid').text('Humidité :' + ' ' + resJson.main.humidity + '%'))

window.fetch(url)
    .then(res => res.json())
    .then(resJson => $('#long').text('Longitude :' + ' ' + resJson.coord.lon))

window.fetch(url)
    .then(res => res.json())
    .then(resJson => $('#lati').text('Latitude :' + ' ' + resJson.coord.lat))
});

//Carte
// var mapObj = new GMaps({
//   el: '#map',
//   lat: -12.043333,
//   lng: -77.028333
// });

// Affichage de la date en français via le moment.js
moment.locale('fr');
$("#date").text(moment().format('LL'));
// On récupère la valeur définie par défault dans le champs "Entrer une ville". Ici, la ville de Pamiers
    // var ville = $("#champsVille").val();
    // console.log(ville);
    // $.ajax({
    //     url: 'http://api.openweathermap.org/data/2.5/weather?q=' + ville + "&units=metric" + "&APPID=693847a822e4a79db242ae4969159f0e",
    //     type: "GET",
    //     dataType: "jsonp",
    //     success: function(data) {
    //         var tempCourante = tempData(data);
    //         var autresValeurs = otherDatas(data);
    //         var affichageCarte = map(data);
    //         var affichageCoordo = coordo(data);
    //         $("#cadreTemp").html(tempCourante);
    //         $("#autresDonnees").html(autresValeurs);
    //         $("#carte").html(affichageCarte);
    //         $("#coordonnees").html(affichageCoordo);
    //     }
    // });
$(document).ready(function() {
    $("#valider").click(function() {

        // On récupère la valeur entrée par l'utilisateur dans le champs "Entrer une ville".
        var ville = $("#champsVille").val();
        console.log(ville);
        // On fait appelle à la méthode Ajax pour récupérer le
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + ville + "&units=metric" + "&APPID=693847a822e4a79db242ae4969159f0e",
            type: "GET",
            dataType: "jsonp",
            success: function(data) {
                // variables suivantes récupèrent les différents éléments à afficher dans le code HTML
                var tempCourante = tempData(data);
                var autresValeurs = otherDatas(data);
                var affichageCarte = map(data);
                var affichageCoordo = coordo(data);
                // On affiches ces éléments dans les "div" définie pour cela
                $("#cadreTemp").html(tempCourante);
                $("#autresDonnees").html(autresValeurs);
                $("#carte").html(affichageCarte);
                $("#coordonnees").html(affichageCoordo);
            }
        });
    });
});

// Récupération de la température actuelle de la ville & intégration dans l'adresse Google Map 
function tempData(data) {
    return + Math.ceil(data.main.temp) + "°";
}

// Récupération des autres données météo de la ville & intégration dans l'adresse Google Map 
function otherDatas(data) {
    return "Temp. max : " + data.main.temp_max + "°<br/>" +
    "Temp. min : " + data.main.temp_min + "°<br/>" +
    "Pres. atmosphérique : " + data.main.pressure + "<br/>" +
    "Vitesse du vent : " + Math.ceil(data.wind.speed) + "km/h<br/>" +
    "Humidité : " + data.main.humidity + "%";
}

// Récupération des coordonnées GPS de la ville
function coordo(data) {
    return "Longitude : " + data.coord.lon + "  Latitude : " + data.coord.lat;
}

// Récupération de la latitude et la longitude de la ville & intégration dans l'adresse Google Map 
function map(data) {
    return "<iframe width='100%' height='100%' src='https://www.google.com/maps/embed/v1/view?key=AIzaSyCBdOfwbLBMGhe9K77dPqD0x849yNQim3E&center=" + data.coord.lat +"," + data.coord.lon + "&zoom=11&maptype=satellite'></iframe>";
}