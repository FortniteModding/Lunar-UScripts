
//Spawning the bot and setting it's health to 900
var bot = USpawnBot([0, 0, 3000], [0, 0, 0]);
USetPlayerMaxHealth(bot, 900);
USetPlayerHealth(bot, 900);

var myPlayer = UGetLocalPlayer();

//Set the movement target of the bot to our location
while(true){
    var currentPawnX = UGetActorLocation(myPlayer, 1);
    var currentPawnY = UGetActorLocation(myPlayer, 2);
    var currentPawnZ = UGetActorLocation(myPlayer, 3);
    
    UMoveBotToTarget(bot, currentPawnX, currentPawnY, currentPawnZ);
}