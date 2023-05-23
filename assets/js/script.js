    // Searches dates for specific dates
    function search(city) {
    var date = moment().format("(M/D/YYYY)");
    var date1 = moment().add( 1 , "day").format("(M/D/YYYY)");
    var date2 = moment().add( 2 , "day").format("(M/D/YYYY)");
    var date3 = moment().add( 3 , "day").format("(M/D/YYYY)");
    var date4 = moment().add( 4 , "day").format("(M/D/YYYY)");
    var date5 = moment().add( 5 , "day").format("(M/D/YYYY)");

    // uses weather API
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&APPID=2377d95879fb4746b71140f81c55a449";
    // AJAX call for cities
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#city").text(response.name);
        $("#date").text(date);
        $("#icon").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
        $("#temp").text("Tempature: " + response.main.temp + " F");
        $("#wind").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#humi").text("Humidity: " + response.main.humidity + "%");
        var lat = response.coord.lat;
        var lon = response.coord.lon;
    });