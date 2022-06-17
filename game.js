let keydown = false;
let upkey = false;
let temel = document.getElementById(temel);
let einfugen = temel.getContext('2d');
let backgroundimage = new Image();





let spaceschiff =  {
    x: 100,
    y: 200,
    width: 64,
    height: 64,
    src:'images melforen/Spieler original.png'
};

document.onkeydown = function(x) {
    if (x.keyCode == 38) {
        upkey = true;
    }
    if (x.keyCode == 40) {
        keydown = true;
    }
}

document.onkeyup = function(x) {
    if (x.keyCode == 38) {
        upkey = false;
    }
    if (x.keyCode == 38) {
        keydown = false;
    }
} 

function startgame(){
    loadimage();
    draw();


}
    

function loadimage(){
    backgroundimage.src = 'images melforen/miliky way.jpg';
    spaceschiff.img =   new Image();
    spaceschiff.img.src = spaceschiff.src
}


function zeichnen(){
    
    requestAnimationFrame(zeichnen);

}