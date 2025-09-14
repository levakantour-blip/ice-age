let layers: number[] = []
let bottomCorner: Position = null
let topCorner: Position = null
let rando: Position = null
player.onItemInteracted(SPAWN_WARDEN, function () {
    layers = [LAVA, GLASS, ICE]
    bottomCorner = pos(10, 0, 10).toWorld()
    topCorner = positions.add(
    bottomCorner,
    pos(10, 10, 10)
    )
    for (let index = 0; index <= layers.length - 1; index++) {
        blocks.fill(
        layers[index],
        positions.add(
        bottomCorner,
        pos(index, index, index)
        ),
        positions.add(
        topCorner,
        pos(0 - index, 0, 0 - index)
        ),
        FillOperation.Replace
        )
    }
    for (let index = 0; index < 20; index++) {
        rando = randpos(
        positions.add(
        bottomCorner,
        pos(2, 2, 2)
        ),
        positions.add(
        topCorner,
        pos(-2, 0, -2)
        )
        )
        blocks.place(WATER, rando)
        mobs.spawn(TROPICAL_FISH, rando)
    }
})
