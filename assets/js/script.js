// Fetch api rawg.api
// GET https://api.rawg.io/api/platforms?key=9ebbf9679be0432fb3bc33d2de55d998
// var querySelector = "https://api.rawg.io/api/games?key="
var apiKey = "9ebbf9679be0432fb3bc33d2de55d998";

fetch('https://api.rawg.io/api/games?key=9ebbf9679be0432fb3bc33d2de55d998', {
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });