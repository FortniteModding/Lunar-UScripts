const x = -122398;
const y = -103873;
const z = 3962;
const object = 'BlueprintGeneratedClass /Game/Athena/BuildingActors/Props/Building/ActorBlueprints/Containers/Athena_Prop_Bathroom_Toilet_01.Athena_Prop_Bathroom_Toilet_01_C';

var actorClass = UFindObject(object);
var actor = USpawnActor(actorClass, [x, y, z], [0, 0, 0]);
var scale = 0.001;

while (true) {
    UScaleActor(actor, scale, scale, scale);
    scale += 0.001;
}