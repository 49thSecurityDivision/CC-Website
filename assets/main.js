window.onload = function(){
    placeStars(150);
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