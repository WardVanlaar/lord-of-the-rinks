// if user selects figure skates

// function figureSkatesHandler() {
//     document.getElementById('mySkates').innerHTML = "Figure skates"
// }

// function hockeySkatesHandler() {
//     document.getElementById('mySkates').innerHTML = "Hockey skates"
// }

// function raceSkatesHandler() {
//     document.getElementById('mySkates').innerHTML = "Race skates"
// }

// function touringSkatesHandler() {
//     document.getElementById('mySkates').innerHTML = "Touring skates"

function selectedSkates (event) {
    event.preventDefault();

    alert(skate);
    document.getElementById('my_skates').innerHTML = "Figure skates"
    console.log("Figure skates")
}