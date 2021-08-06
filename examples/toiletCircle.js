var x0 = -122398;
var y0 = -103873;
var pi = 3.1415;
var radius = 1000;

var actorClass = UFindObject('BlueprintGeneratedClass /Game/Athena/BuildingActors/Props/Building/ActorBlueprints/Containers/Athena_Prop_Bathroom_Toilet_01.Athena_Prop_Bathroom_Toilet_01_C');

var i = 0;
while (i <= 2 * pi) {
    var x = x0 + radius * Math.cos(2 * Math.PI * i);
    var y = y0 + radius * Math.sin(2 * Math.PI * i);

    USpawnActor(actorClass, [x, y, 3962], [0, 0, 0]);

    i += 0.03;
}