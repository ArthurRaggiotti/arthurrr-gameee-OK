//game states
var GameState1 = 1 , GameState2 = 2 , GameState3 = 3 , GameState4 = 4 , GameState5 = 5;
var GameState6 = 6 , GameState7  = 7 , GameState8 = 8;

//botões iniciais
var pauseSprite , pauseImg;
var startSprite , startImg;
var NoPauseSprite , NoPauseImg;
var NblueSprite , NblueImg;
var NpurpleSprite , NpurpleImg;
var NyellowSprite , NyellowImg;

//personagens
var NittiAndaSprite , NittiAndaImg;
var NittiParaSprite , NittiParaImg;
var NittiAnda2Sprite , NittiAnda2Img;
var SkeletonSprite , SkeletonImg;
var FantasmaSprite , FantasmaImg;
var BolaSprite , BolaImg;
var ChuvaSprite , ChuvaImg;
var PoderSprite , PoderImg;

//cenários
var cenar1Sprite , cenar1Img; 
var cenar2Sprite , cenar2Img;
var cenar3Sprite , cenar3Img;
var cenar4Sprite , cenar4Img
var cenar5Sprite , cenar5Img; 
var cenar6Sprite , cenar6Img;
var cenar7Sprite , cenar7Img;
var cenar8Sprite , cenar8Img

//sons
var MusicSprite;
var JumpSprite;


function preload(){
//animação vilões
SkeletonImg = loadAnimation ("Skelet.gif");
FantasmaImg = loadAnimation ("Fantasma.gif");
ChuvaImg = loadImage ("ChuvaRed.png");
BolaImg = loadAnimation ("VilaoBola.gif");

//animação personagem
NittiAndaImg = loadAnimation ("NittiAnda.gif");
NittiAnda2Img = loadAnimation ("NittiAnda2.gif");
NittiParaImg = loadImage ("NittiPara.png");
PoderImg = loadImage ("poder.png");

//imagem botões iniciais
startImg = loadImage ("botaoStart.png");
pauseImg = loadImage("botaopause.png");
NoPauseImg = loadImage ("botaoDespause.png");
NblueImg = loadImage ("NittiBlue.png");
NpurpleImg = loadImage ("NittiPurple.png");
NyellowImg = loadImage ("NittiYellow.png");

//cenarios

cenar1Img = loadImage ("cenarios/cenario-1-vazio.png")
cenar2Img = loadImage ("cenarios/cenario-5-arvore.png")
cenar3Img = loadImage ("cenarios/cenario-6-casa-madeira.png")
cenar4Img = loadImage ("cenarios/cenario-7-neve.png")
cenar5Img = loadImage ("cenarios/cenario-8-neve-plano.png")
cenar6Img = loadImage ("cenarios/cenario-9-parkour-neve.png")
cenar7Img = loadImage ("cenarios/cenario-10-casa-nevada.png")
cenar8Img = loadImage ("cenarios/cenario-11-abismo-cave.png")
//som
JumpSprite = loadSound ("SomPula.mp3");






}





function setup(){
  createCanvas (600,600);

//botões iniciais
pauseSprite = createSprite (200,300,20,20);
pauseSprite.addImage ("pause" , pauseImg);
}




function draw() {

drawSprites();
}

