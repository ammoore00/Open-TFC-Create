onEvent('recipes', event => {
    event.recipes.createMixing(
        '16x tfc:mortar',
        [
            Fluid.of('tfc:limewater', 100),
            '#minecraft:sand'
        ]
    )
    
    event.recipes.createMixing(
        'tfc:alabaster/raw',
        [
            Fluid.of('tfc:limewater', 100),
            'tfc:ore/gypsum'
        ]
    )
    
    event.recipes.createMixing(
        'tfc:glue',
        [
            Fluid.of('tfc:limewater', 100),
            'minecraft:bone_meal'
        ]
    )

    event.remove({id: 'farmersdelight:canvas'})
})