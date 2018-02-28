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
