
// ? Sample RAWG API links for reference
// Full list of games - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea 
// Games list with filters - https://api.rawg.io/api/games?key=5e68bfa8ec8141a990c74c4ebefb01ea&dates=2019-09-01,2019-09-30&platforms=18,1,7
// Borderlands 3 game details - https://api.rawg.io/api/games/borderlands-3?key=5e68bfa8ec8141a990c74c4ebefb01ea
// how to get the rawg genres on for the chart data -> 
// var rawgKey ='9291f496b0954cfd85fdd080b9cd538f' this is ryans api key;
// var rawgKey ='5e68bfa8ec8141a990c74c4ebefb01ea' this is shawns api key;
// var rawgKey ='9ebbf9679be0432fb3bc33d2de55d998' this is gios api key;
var modalWindow = document.getElementById('modalWindow');
function showModal(){
    modalWindow.style.display = 'block';
}
function hideModal(){
    modalWindow.style.display = 'none';
}
var rawgAPIKey = "9ebbf9679be0432fb3bc33d2de55d998";

var input = document.getElementById('query');
function searchBar(event){
    event.preventDefault();
    var inputVal = input.value;
    searchGame(inputVal);
}
// List of games object on console log

// Targeting Search button element
var searchEl = document.querySelector("#SearchBtn")

//! Code that runs when Search button is pressed (almost all code should go here)
function searchGame(inputVal) {
    console.log(inputVal);
    var specificGameURL = "https://api.rawg.io/api/games/"+ inputVal.replace(/\s+/g, '-').toLowerCase() + "?key=" + rawgAPIKey;
    // Collect user input for the game search and store it in a variable
    fetch(specificGameURL)
    .then(function (res) {
        return res.json()
    })
    .then(function (data) {
        console.log(data);
        console.log(data.redirect);
        if(data.redirect === true){
           showModal();
        }
        var genreString ="";
        for(i = 0; i < data.genres.length; i++){
            console.log(data.genres[i].id);
            genreString+= (data.genres[i].id + ",")
        }
        genreString = genreString.slice(0, -1);
        console.log(genreString);
        var genreURL = 'https://api.rawg.io/api/games'  + '?key=' + rawgAPIKey+ '&genres='+ genreString;
        fetch(genreURL)
        .then(function(res){
            return res.json();
        })
        .then(function(ratingData){
            console.log(ratingData);

            
        })
    }); // TODO - Loop through fullGameList object and check for match with user input
    

}


// Add event listener to Search button element
searchEl.addEventListener("click", searchBar);