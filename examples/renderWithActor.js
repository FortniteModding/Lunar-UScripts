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