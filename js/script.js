
// Menu Toggle

var NavElement = document.querySelector('header > button:last-of-type');
var Navigation = document.querySelector('nav');

// Verhaal Downloaden

var SaveButton = document.querySelector('body > header > div > button');
var SaveBackground = document.querySelector('body > header > div');
var SaveText = document.querySelector('body > header > small:first-of-type');

var StorySaved = false;

// Verhaal Liken

var LikeButton = document.querySelector('body > header > button:first-of-type');

// Filter Interactie

var SearchResult1 = document.querySelector('body > div > main > article:nth-child(3)');
var SearchResult2 = document.querySelector('body > div > main > article:nth-child(4)');
var SearchResult3 = document.querySelector('body > div > main > article:nth-child(5)');
var SearchResult4 = document.querySelector('body > div > main > article:nth-child(2)');
var SearchButton = document.querySelector('body > div > main > form > button');

// Gedownloade Verhalen Check

var ZombieStory = document.querySelector('body > div > main > article:nth-child(2)');
var NicoStory = document.querySelector('body > div > main > article:nth-child(3)');
var NeerslachtigStory = document.querySelector('body > div > main > article:nth-child(4)');
var DecockStory = document.querySelector('body > div > main > article:nth-child(5)');

//Lees de naam van de pagina om later op te slaan.

var path = window.location.pathname;
var page = path.split("/").pop();
var StoryName = page.slice(0, -5);

// Check of een verhaal is opgeslagen

window.onload = function(){
    if (localStorage.getItem(StoryName) == "Saved"){
        StorySaved = true;
        SaveButton.classList.toggle("SaveBackground");
        SaveBackground.classList.toggle("StartSaveAnimation");
        ChangeSaveBackground();
        SaveText.innerHTML = "Offline Beschikbaar";
    }

    if (page == "mijnverhalen.html"){
        CheckSavedStories();
    }
}

function ToggleMenu() {
    Navigation.classList.toggle("show");
}

function SaveStory() {

    SaveButton.classList.toggle("SaveBackground");
    SaveBackground.classList.toggle("StartSaveAnimation");

    if (StorySaved == false ) {
            StorySaved = true;
            setTimeout(ChangeSaveBackground, 1500);
            localStorage.setItem(StoryName, "Saved");
            SaveText.innerHTML = "";
    }
    else {
        StorySaved = false;
        SaveBackground.classList.toggle("SaveCompleted");
        localStorage.setItem(StoryName, "Deleted");
        SaveText.innerHTML = "Download";
    }

}

function LikeStory() {
    LikeButton.classList.toggle("HeartBackGround");
}

function ChangeSaveBackground() {

    SaveBackground.classList.toggle("SaveCompleted");
    SaveText.innerHTML = "Offline Beschikbaar";

}

function SearchStories() {
    SearchResult1.classList.toggle("LoadResult");
    SearchResult2.classList.toggle("LoadResult");
    SearchResult3.classList.toggle("LoadResult");
    SearchResult4.classList.toggle("LoadResult");
    SearchButton.innerHTML = "ZOEK OPNIEUW";
}

function CheckSavedStories(){
    if (localStorage.getItem("Zombie") == "Saved"){
        ZombieStory.classList.add("show");
    }
    else {
        ZombieStory.classList.add("hide");
    }
}


NavElement.addEventListener('click', ToggleMenu);

if (StoryName == "zoeken"){
    SearchButton.addEventListener('click', SearchStories);
}

if (StoryName == "Zombie"){
    SaveButton.addEventListener('click', SaveStory);
    LikeButton.addEventListener('click', LikeStory);
}

console.log(SearchResult1);
console.log(SearchResult2);
console.log(SearchResult3);
console.log(SearchResult4);


