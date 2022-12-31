window.onload = function(){
    placeStars(150);
    if (window.location.pathname == "/"){
        document.getElementById("con-timer").innerText = Math.ceil((new Date("2022/04/29") - new Date()) / (1000 * 60 * 60 * 24));
    }
};