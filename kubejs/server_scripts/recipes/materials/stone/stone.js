onEvent('recipes', event => {
    let igneousRocks = [
        'granite',
        'diorite',
        'gabbro',
        'rhyolite',
        'basalt',
        'andesite',
        'dacite'
    ]
    
    for (const rockType of igneousRocks) {
        event.recipes.tfc.heating(
            'tfc:rock/magma/' + rockType,
            '#kubejs:' + rockType,
            1000
        )

        event.recipes.createMixing(
            'tfc:rock/magma/' + rockType,
            [
                '#kubejs:' + rockType
            ]
        ).heated()
    }

    event.replaceInput({id: 'create:crafting/materials/andesite_alloy'}, 'minecraft:iron_nugget', '#kubejs:mafic_alloy_components')
    event.replaceInput({id: 'create:crafting/materials/andesite_alloy'}, 'minecraft:andesite', '#kubejs:magma')
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})

    event.replaceInput({id: 'create:mixing/andesite_alloy'}, 'minecraft:iron_nugget', '#kubejs:mafic_alloy_components')
    event.replaceInput({id: 'create:mixing/andesite_alloy'}, 'minecraft:andesite', '#kubejs:magma')
    event.remove({id: 'create:mixing/andesite_alloy_from_zinc'})
    
    event.recipes.createMilling(
        'kubejs:quartz_powder',
        '#kubejs:felsic_rocks'
    )

    event.recipes.createCrushing(
        [
            'kubejs:quartz_powder',
            Item.of('kubejs:quartz_powder').withChance(0.5)
        ],
        '#kubejs:felsic_rocks'
    )

    event.recipes.createMilling(
        'kubejs:quartz_powder',
        '#minecraft:sand'
    )

    event.recipes.createCrushing(
        [
            'kubejs:quartz_powder',
            Item.of('kubejs:quartz_powder').withChance(0.5)
        ],
        '#minecraft:sand'
    )
})