var temp;
var tempCelsius;
var unit = 1;

//Get lat and lon
$.getJSON("http://ip-api.com/json", function(data) {
  $("#location").html(JSON.stringify(data.city));
  var lat = data.lat;
  var lon = data.lon;

  //get weather at current location
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=d59162717a6625a79b92ed15cbde3999', function(json) {
    temp = json.main.temp;
    tempCelsius = temp - 273;
    temp = ((temp - 273) * 9 / 5) + 32;
    $("#location").html(JSON.stringify("Latitude: " + lat) + "<br>" + JSON.stringify("Longitude: " + lon) + "<br>" + JSON.stringify("Location is " + json.name + ", " + data.region)); //prints latitude and longitude
    $("#temperature").html(JSON.stringify(tempCelsius + " degrees Celsius"));
    //weather icon
    $("#icon").html("<img src=http://openweathermap.org/img/w/" + json.weather[0].icon + ".png>");
  });
});

//switch between Celsius and Fahrenheit
function convert() {
  if (unit == 0) {
    $("#temperature").html(tempCelsius + " degrees Celsius");
    unit = 1;
  } else {
    $("#temperature").html(temp + " degrees Fahrenheit");
    unit = 0;
  }
}
