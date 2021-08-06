var actor = UFindObject("BlueprintGeneratedClass /Game/Building/ActorBlueprints/Player/Wood/L1/PBWA_W1_WindowSide.PBWA_W1_WindowSide_C");

//vist the api for more info
var cli = UWebClient("artii.herokuapp.com");
var map = UWebClientGet(cli, "/make?text=shade nuts&font=banner4");

//split by new line and get line size
var lineLength = map.split("\n")[0].length + 1; // for "\n"

URenderASCIIWithActor(actor, map, lineLength, 300, 300, [-122398, -95000, 15000], [0, 0, 0]);