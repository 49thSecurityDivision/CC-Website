window.onload = function(){
    placeStars(150);
    if (window.location.pathname == "/"){
        document.getElementById("con-timer").innerText = Math.ceil((new Date("2022/04/29") - new Date()) / (1000 * 60 * 60 * 24));
        document.getElementById("cfp-timer").innerText = Math.ceil((new Date("2022/03/20") - new Date()) / (1000 * 60 * 60 * 24));
    }
};

function placeStars(starCount){
    stardiv = document.getElementById("stardiv");
    for(i=0; i<starCount; i++){
        star = document.createElement("div");
        star.className = 'star-' + Math.floor(Math.random() * 7);
        star.style = 'top:' + Math.floor(Math.random() * (document.body.scrollHeight*0.90)) + 'px;left:' + Math.floor(Math.random() * 100) + '%;position: absolute;z-index: -2'
        stardiv.appendChild(star);
    }
}