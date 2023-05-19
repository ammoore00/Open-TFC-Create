onEvent('recipes', event => {
    event.remove({id: 'tfc:anvil/wrought_iron_grill'})
    event.remove({id: 'tfc:heating/grill'})

    event.remove({id: 'tfc:clay_knapping/pot'})
    event.remove({id: 'tfc:heating/fired_pot'})

    event.remove({output: 'farmersdelight:stove'})
    event.shaped(
        'farmersdelight:stove',
        [
            'CCC',
            'B B',
            'BLB'
        ],
        {
            C: 'tfc:metal/ingot/cast_iron',
            B: '#kubejs:clay_bricks',
            L: '#minecraft:logs'
        }
    ).id('kubejs:stove')

    event.replaceInput({output: 'farmersdelight:skillet'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/cast_iron')
    event.replaceInput({output: 'farmersdelight:skillet'}, 'minecraft:brick', '#kubejs:clay_bricks')

    event.remove({output: 'farmersdelight:cooking_pot'})
    event.shaped(
        'farmersdelight:cooking_pot',
        [
            'B B',
            'C C',
            'CCC'
        ],
        {
            B: '#kubejs:clay_bricks',
            C: 'tfc:metal/ingot/cast_iron'
        }
    ).id('kubejs:cooking_pot')
})