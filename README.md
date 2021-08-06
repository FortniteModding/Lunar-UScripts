# UScript Documenation

### Overall:

- This an embeded [ECMAScript E5/E5.1](https://262.ecma-international.org/5.1/) using [Duktape](https://duktape.org/) Javascript engine, extended with a set of native Lunar functions bindings.

- Inside the fortnite win64 dir, create a folder called `uscripts`,
inside that folder you are free to place 
  - `startup.js`: this file gets executed once a player is loaded into a match.
  - `f7.js`: this file gets executed once the user press the key `f7` on their keyboard.

### Functions:

- ```js
  UObject * UFindObject("ObjectName");
  ```

  Finds an object instance by name.

  - Usage:
    ```js
    var object = UFindObject(
      "Class /Script/FortniteGame.FortGameplayAbility_Sprint"
    );
    ```

---

- ```js
  void UDisplayObjectName(ObjectPointer);
  ```

  Displays a MessageBox with the object name.

  - Usage:
    ```js
    var object = UFindObject(
      "Class /Script/FortniteGame.FortGameplayAbility_Sprint"
    );
    UDisplayObjectName(object);
    ```

---

- ```js
  UObject * USpawnActor(ClassObject, [X, Y, Z], [Pitch, Yaw, Roll]);
  ```

  Spawns an actor at the specified coords with the specified rotations.

  - Usage:

    ```js
    var actorClass = UFindObject(
      "BlueprintGeneratedClass /Game/Athena/BuildingActors/Props/Building/ActorBlueprints/Containers/Athena_Prop_Bathroom_Toilet_01.Athena_Prop_Bathroom_Toilet_01_C"
    );

    USpawnActor(actorClass, [-122398, -103873, 3962], [0, 0, 0]);
    ```

---

- ```js
  void UDestroyActor(actorPointer);
  ```

  Destroys an actor

---


- ```js
  UObject * UGetActorOfClass(actorClass, index);
  ```

  Gets all actors of a class and returns the one at the specified index.

  - Usage:

    ```js
    var actorClass = UFindObject(
      "BlueprintGeneratedClass /Game/Athena/PlayerPawn_Athena.PlayerPawn_Athena_C"
    );

    var playerPawn = UGetActorOfClass(actorClass, 0);
    ```

---

- ```js
  UObject* UGetLocalPlayer();
  ```

  Returns the local player's pawn.

---

- ```js
  int UGetActorLocation(actorPointer, index);
  ```

  Gets the actor's location, indexs: 1 for X, 2 for Y, 3 for Z.

  - Usage:

    ```js
    var myPlayer = UGetLocalPlayer();

    var currentX = UGetActorLocation(myPlayer, 1);
    var currentY = UGetActorLocation(myPlayer, 2);
    var currentZ = UGetActorLocation(myPlayer, 3);
    ```

---

- ```js
  void UScaleActor(actorPointer, [x, y, z]);
  ```

  Scales an actor with 3d scale values

---

- ```js
  void UTeleportActor(objectPointer, [X, Y, Z], [Pitch, Yaw, Roll]);
  ```

  Teleports an actor to the specified coords with the specified rotations.

---

- ```js
  void UAddItemToInventory(weaponObject, slot);
  ```

  Adds a weapon item definition object to the current player's inventory.

  - Usage:

    ```js
    var weaponDef = UFindObject(
      "FortWeaponRangedItemDefinition /Game/Items/Weapons/Ranged/WIP/GnomeGun2.GnomeGun2"
    );

    UAddItemToInventory(weaponDef, 4);
    ```

---


- ```js
  void USpawnPickupAtLocation(weaponObject, x, y, z);
  ```

  Spawns a weapon item definition object as a pickup at specified coords.


---


- ```js
  UObject* USpawnTextActor([X, Y, Z], [Pitch, Yaw, Roll]);
  ```

  Spawns a text render actor at the specified coords with the specified rotations.

---


- ```js
  void USetTextActorText(actorPointer, "New text");
  ```

  Change the text displayed on a text render actor.

  - Usage:

    ```js
    var textActor = USpawnTextActor([-122398, -103873, 3962], [0, 0, 0]);
    USetTextActorText(textActor, "Hello world!");
    ```

---

- ```js
  void UActivateAbility(abilityClass);
  ```

  Grants an ability to the current player.

  - Usage:

    ```js
    var sprintClass = UFindObject("Class /Script/FortniteGame.FortGameplayAbility_Sprint");
    UActivateAbility(sprintClass);
    ```

---

- ```js
  void URenderASCIIWithActor(objectPointer, ASCIIMap, lineLength, itemWidth, itemWidth, [X, Y, Z], [Pitch, Yaw, Roll]);
  ```

  Renders an ASCII Map using the specified actor at the specified coords with the specified rotations.

  - Usage:

    ```js
    var actor = UFindObject("BlueprintGeneratedClass /Game/Building/ActorBlueprints/Player/Wood/L1/PBWA_W1_WindowSide.PBWA_W1_WindowSide_C");

    var map =
        ".##.....##.##.......########.####.##.....##....###....##....##.####.########.########" +
        ".##.....##.##..........##.....##..###...###...##.##...###...##..##.....##....##......" +
        ".##.....##.##..........##.....##..####.####..##...##..####..##..##.....##....##......" +
        ".##.....##.##..........##.....##..##.###.##.##.....##.##.##.##..##.....##....######.." +
        ".##.....##.##..........##.....##..##.....##.#########.##..####..##.....##....##......" +
        ".##.....##.##..........##.....##..##.....##.##.....##.##...###..##.....##....##......" +
        "..#######..########....##....####.##.....##.##.....##.##....##.####....##....########"

    //For this example we are drawing the word ultimanite with wooden windowed building actor each line of the art is 85 characters and we are spawning each actor after the space of 300 units both vertically and horizontally.
    URenderASCIIWithActor(actor, map, 85, 300, 300, [-122398, -95000, 15000], [0, 0, 0]);
    ```
  
  - You can use [this website](https://cloudapps.herokuapp.com/imagetoascii/) to convert images to a map, make sure to set the charset to `#.`.

---

- ```js
  WebClientInstance UWebClient("Host");
  ```

  Constructs a Http\s web client for the specified host, you are only allowed to have **one** web client on each script.

---

- ```js
  String UWebClientGet(WebClientInstance, "Path");
  ```

  Does a get request to the webclient's host + path and returns the response as a string.

  - Usage:

    ```js
    var cli = UWebClient("artii.herokuapp.com");
    var response = UWebClientGet(cli, "/make?text=Ultimanite&font=banner4");
    ```

---

- ```js
  String UWebClientPost(Client, "Path", "Body", "Content-Type");
  ```

  Does a get request to the webclient's host + path and returns the response as a string.

  - Usage:

    ```js
    var cli = UWebClient("artii.herokuapp.com");
    var response = UWebClientPost(cli, "/make", "text=Ultimanite&font=banner4", "application/x-www-form-urlencoded");
    ```

---

- ```js
  UObject* USpawnBot([X, Y, Z], [Pitch, Yaw, Roll]);
  ```

  Spawns a controllable bot pawn.

---

- ```js
  void UMoveBotToTarget(playerPawnPointer, X, Y, Z);
  ```

  Moves the bot pawn to the specified location.

---

- ```js
  void USetPlayerMaxHealth(playerPawnPointer, newMaxHealth);
  ```

  Sets the player pawn's max health.

---

- ```js
  void USetPlayerMaxShield(playerPawnPointer, newMaxShield);
  ```

  Sets the player pawn's max shield.

---

- ```js
  void USetPlayerHealth(playerPawnPointer, newHealth);
  ```

  Sets the player pawn's health.

---

- ```js
  void USetPlayerShield(playerPawnPointer, newMaxShield);
  ```

  Sets the player pawn's shield.

---

- ```js
  void UExecuteConsoleCommand("Command");
  ```

  Executes the passed string as a console command.

  - Usage:

    ```js
    UExecuteConsoleCommand("fov 120");
    ```

---

- ```js
  String UGetGamePath();
  ```

  Returns the current fortnite instance's path.

---

- ```js
  String UReadFileAsString("Path");
  ```

  Reads a file contents and returns it as a string.

---

- ```js
  void UPrint("Hello World!");
  ```

  Prints a message in both consoles.

---
