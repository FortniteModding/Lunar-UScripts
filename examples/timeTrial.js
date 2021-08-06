//Spawning a marker on the finish line.
var markerClass = UFindObject("BlueprintGeneratedClass /Game/Athena/HUD/Actors/B_AthenaPlayerMarker_WithCustomization.B_AthenaPlayerMarker_WithCustomization_C");

var marker = USpawnActor(markerClass, [15000, 11000, 800], [0, 0, 0]);

//Spawning the time counter at the finish line.
var textActor = USpawnTextActor([15000, 11000, 700], [0, 180, 0]);

var myPawn = UGetLocalPlayer();

//Either works
//var actorClass = UFindObject('BlueprintGeneratedClass /Game/Athena/PlayerPawn_Athena.PlayerPawn_Athena_C');
//var myPawn = UGetActorOfClass(actorClass, 0);

var isFinished = false;

const startTime = Date.now();

while (!isFinished && ((Date.now() - startTime) > 1000)) {

    //This is a very basic location detection,
    //Will be replaced with trigger boxes in future.
    var currentPawnX = UGetActorLocation(myPawn, 1);
    var currentPawnY = UGetActorLocation(myPawn, 2);

    if (currentPawnX > 13000 && currentPawnX > 9000) {
        isFinished = true;
    }

    var s = ((Date.now() - startTime)).toString();
    USetTextActorText(textActor, s);
}

USetTextActorText(textActor, "Congrats!");