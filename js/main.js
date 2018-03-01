moment.locale('fr');
$('#date').text(moment().format('LL'));

var ville = $("#champ").val();
function meteo(ville){
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q="+ ville +"&units=metric&lang=fr&appid=58ce3ab8d36bf722c61f295b05a59805",
        type: "POST",
        dataType: "jsonp",
        success: function(data){
            $('#degrés').text(parseInt(data.main.temp) + '°');
            $('#temp_max').text('Temp. max :' + ' ' + (data.main.temp_max) + ' ' + '°');
            $('#temp_min').text('Temp. min :' + ' ' + data.main.temp_min + ' ' + '°');
            $('#pres_atm').text('Pres. atmosphérique :' + ' ' +data.main.pressure);
            $('#vit_ven').text('Vitesse du vent :' + ' ' + data.wind.speed + ' ' + 'km/h');
            $('#humid').text('Humidité :' + ' ' + data.main.humidity + '%');
            $('#long').text('Longitude :' + ' ' + data.coord.lon);
            $('#lati').text('Latitude :' + ' ' + data.coord.lat);
            $("#map").html("<iframe src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDv-spiEhDJZfoGge7NAxMECClWHHbxd2Q&q="+ville+"&zoom=12&maptype=roadmap' width='100%' height='100%' frameborder='0'></iframe>");
    }
})
}

$(document).ready(function(){
    meteo(ville);
    $("#bouton").click(function(){
        ville = $("#champ").val();
        meteo(ville);
    })
})

