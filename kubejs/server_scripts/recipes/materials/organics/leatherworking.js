onEvent('recipes', event => {
    event.remove({id: 'minecraft:leather'})
    event.remove({output: 'minecraft:leather', type: 'farmersdelight:cutting'})
    event.remove({output: 'minecraft:leather', type: 'create:milling'})
    event.remove({output: 'minecraft:leather', type: 'create:crushing'})
    event.remove({id: 'sewingkit:leather_sheet_from_rabbit_hide'})

    let fluidCounts = {
        small: 300,
        medium: 400,
        large: 500
    }

    let leatherCounts = {
        small: 1,
        medium: 2,
        large: 3
    }

    for (const [size, fluidCount] of Object.entries(fluidCounts)) {
        event.recipes.createDeploying(
            [
                'tfc:' + size + '_raw_hide',
                Item.of('tfc:wool', leatherCounts[size])
            ],
            [
                'tfc:' + size + '_sheepskin_hide',
                '#tfc:knives'
            ]
        )

        event.recipes.createMixing(
            'tfc:' + size + '_soaked_hide',
            [
                Fluid.of('tfc:limewater', fluidCount),
                'tfc:' + size + '_raw_hide'
            ]
        )

        event.recipes.createDeploying(
            'tfc:' + size + '_scraped_hide',
            [
                'tfc:' + size + '_soaked_hide',
                '#tfc:knives'
            ]
        )

        event.recipes.createMixing(
            'tfc:' + size + '_prepared_hide',
            [
                Fluid.of('minecraft:water', fluidCount),
                'tfc:' + size + '_scraped_hide'
            ]
        )

        event.recipes.createMixing(
            Item.of('minecraft:leather', leatherCounts[size]),
            [
                Fluid.of('tfc:tannin', fluidCount),
                'tfc:' + size + '_prepared_hide'
            ]
        )
    }
})