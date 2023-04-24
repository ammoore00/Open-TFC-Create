onEvent('recipes', event => {
    let colors = [
        'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ]

    for (const color of colors) {
        event.recipes.createMixing(
            Fluid.of('tfc:' + color + '_dye', 1000),
            [
                Fluid.of('minecraft:water', 1000),
                '#forge:dyes/' + color
            ]
        ).heated()
        .id('kubejs:mixing/' + color + '_dye')

        event.replaceInput({id: 'tfc:pot/' + color + '_dye'}, 'minecraft:' + color + '_dye', '#forge:dyes/' + color)
    }
})