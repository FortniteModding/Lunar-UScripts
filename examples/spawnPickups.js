const x = -122398;
const y = -103873;
const z = 3962;
var weapons = [
    "FortWeaponRangedItemDefinition /Game/Athena/Items/Weapons/Prototype/WID_FlareGun_Athena_Prototype.WID_FlareGun_Athena_Prototype",
    "FortWeaponRangedItemDefinition /Game/Athena/Items/Weapons/Prototype/WID_SprayGun_Athena_Prototype.WID_SprayGun_Athena_Prototype"
];

// Spawn
for (idx in weapons) {
    const object = UFindObject(weapons[idx]);
    USpawnPickupAtLocation(object, x, y + (idx + 1) * -40, z);
}