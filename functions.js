function showMenu() {
  var menuLinks = document.getElementById("menuLinks");
  menuLinks.style.right = "0";
}

function hideMenu() {
  var menuLinks = document.getElementById("menuLinks");
  menuLinks.style.right = "-200px";
}

function init() {
  //Mobile show.hide menu buttons
  var btnShowMenu = document.getElementById("hideMenu");
  btnShowMenu.onclick = hideMenu;
  var btnHideMenu = document.getElementById("showMenu");
  btnHideMenu.onclick = showMenu;
  //Hide/Show Tiles
  var demo_text = document.getElementById("demos_text");
  var acc_text = document.getElementById("acc_text");
  demo_text.style.display = "none";
  acc_text.style.display = "none";
  var demo_tile = document.getElementById("demos_tile");
  var acc_tile = document.getElementById("acc_tile");
  var demos_title = document.getElementById("demos_title");
  var acc_title = document.getElementById("acc_title");
  demo_tile.onclick = function () {
    if (demo_text.style.display == "none") {
      demos_title.innerHTML = "Demos <br> (&#8593)";
      acc_title.innerHTML = "Accounts <br> (&#8593)";
      demo_text.style.display = "block";
      acc_text.style.display = "block";
    }
    else {
      demos_title.innerHTML = "Demos <br> (&#8595)";
      acc_title.innerHTML = "Accounts <br> (&#8595)";
      demo_text.style.display = "none";
      acc_text.style.display = "none";
    }
  }
  acc_tile.onclick = function () {
    if (acc_text.style.display == "none") {
      demos_title.innerHTML = "Demos <br> (&#8593)";
      acc_title.innerHTML = "Accounts <br> (&#8593)";
      demo_text.style.display = "block";
      acc_text.style.display = "block";
    }
    else {
      demos_title.innerHTML = "Demos <br> (&#8595)";
      acc_title.innerHTML = "Accounts <br> (&#8595)";
      demo_text.style.display = "none";
      acc_text.style.display = "none";
    }
  }
  //Game Tile Handlers
  var game1tile = document.getElementById("game1_tile");
  var game1_text = document.getElementById("game1_text");
  var game1_check = document.getElementById("game1_check");
  game1tile.onclick = function () {
    addLibrary(game1_text,game1_check);
  }
  var game2tile = document.getElementById("game2_tile");
  var game2_text = document.getElementById("game2_text");
  var game2_check = document.getElementById("game2_check");
  game2tile.onclick = function () {
    addLibrary(game2_text,game2_check);
  }
  var game3tile = document.getElementById("game3_tile");
  var game3_text = document.getElementById("game3_text");
  var game3_check = document.getElementById("game3_check");
  game3tile.onclick = function () {
    addLibrary(game3_text,game3_check);
  }
  var game4tile = document.getElementById("game4_tile");
  var game4_text = document.getElementById("game4_text");
  var game4_check = document.getElementById("game4_check");
  game4tile.onclick = function () {
    addLibrary(game4_text,game4_check);
  }
  var game5tile = document.getElementById("game5_tile");
  var game5_text = document.getElementById("game5_text");
  var game5_check = document.getElementById("game5_check");
  game5tile.onclick = function () {
    addLibrary(game5_text,game5_check);
  }
  var game6tile = document.getElementById("game6_tile");
  var game6_text = document.getElementById("game6_text");
  var game6_check = document.getElementById("game6_check");
  game6tile.onclick = function () {
    addLibrary(game6_text,game6_check);
  }
  var game7tile = document.getElementById("game7_tile");
  var game7_text = document.getElementById("game7_text");
  var game7_check = document.getElementById("game7_check");
  game7tile.onclick = function () {
    addLibrary(game7_text,game7_check);
  }
  var game8tile = document.getElementById("game8_tile");
  var game8_text = document.getElementById("game8_text");
  var game8_check = document.getElementById("game8_check");
  game8tile.onclick = function () {
    addLibrary(game8_text,game8_check);
  }
  var game9tile = document.getElementById("game9_tile");
  var game9_text = document.getElementById("game9_text");
  var game9_check = document.getElementById("game9_check");
  game9tile.onclick = function () {
    addLibrary(game9_text,game9_check);
  }
  var game10tile = document.getElementById("game10_tile");
  var game10_text = document.getElementById("game10_text");
  var game10_check = document.getElementById("game10_check");
  game10tile.onclick = function () {
    addLibrary(game10_text,game10_check);
  }
}

window.onload = init;

//-----Slideshow Functions-----
let cycleIndex = 0;
cycleSlides();

function cycleSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("indicator");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  cycleIndex++;
  if (cycleIndex > slides.length) { cycleIndex = 1 }
  slides[cycleIndex - 1].style.display = "block";
  dots[cycleIndex - 1].className += " active";
  setTimeout(cycleSlides, 5000); // Change image every 5 seconds
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("indicator");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Adds Game to Library (Just text change for now)
function addLibrary(game_num,check) {
  if (game_num.innerHTML == "Add to Library") {
    game_num.innerHTML = "Remove from Library";
    check.style.display = "contents";
    //Add code to actually add to library here
  }
  else {
    game_num.innerHTML = "Add to Library";
    check.style.display = "none";
    //Add code to remove from library here
  }
}