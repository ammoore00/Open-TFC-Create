onEvent('recipes', event => {
    event.recipes.createMixing(
        Fluid.of('tfc:curdled_milk', 125),
        [
            Fluid.of('tfc:milk_vinegar', 125)
        ]
    ).heated()
    .id('kubejs:mixing/curdled_milk')

    event.recipes.createCompacting(
        'tfc:food/cheese',
        [
            Fluid.of('tfc:curdled_milk', 250)
        ]
    ).id('kubejs:compacting/cheese')

    event.remove({id: 'tfc:barrel/cheese'})
    event.recipes.tfc.barrel_sealed(
        '2x tfc:food/cheese',
        [
            Fluid.of('tfc:curdled_milk', 500)
        ],
        8000
    )
})