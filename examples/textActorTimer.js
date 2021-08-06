function sleep(t) {
    const start = Date.now();
    while (Date.now() - start < t);
}

var textActor = USpawnTextActor([-122398, -103873, 3962], [0, 0, 0]);

var i = 200;

while (i > 0) {
    var s = i.toString() + " is remaining!";
    USetTextActorText(textActor, s);
    i--;
    sleep(100);
}

USetTextActorText(textActor, "Made you wait LMFAO");
