onEvent('recipes', event => {
    event.remove({id: 'minecraft:sugar_from_sugar_cane'})
    event.remove({id: 'minecraft:sugar_from_honey_bottle'})
    event.replaceInput({output: 'minecraft:sugar'}, 'minecraft:sugar_cane', 'tfc:food/sugarcane')
    event.recipes.tfc.quern(
        '2x minecraft:sugar',
        'tfc:food/sugarcane'
    ).id('kubejs:sugar_from_sugarcane')

    event.remove({id: 'firmalife:pot/beet_sugar'})
    event.remove({id: 'firmalife:vat/beet_sugar'})
    event.recipes.createMixing(
        '3x minecraft:sugar',
        [
            '6x tfc:food/beet',
            Fluid.of('tfc:salt_water', 1000)
        ]
    ).heated()
    .id('kubejs:mixing/sugar')
})