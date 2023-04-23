onEvent('recipes', event => {
    event.replaceInput({output: 'create:copper_backtank'}, 'tfc:metal/ingot/copper', 'tfc:metal/sheet/copper')
    event.replaceInput({output: 'create:copper_backtank'}, 'minecraft:copper_block', 'create:fluid_tank')

    event.replaceInput({output: 'quark:abacus'}, '#minecraft:planks', '#tfc:lumber')
    event.replaceInput({output: 'quark:abacus'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

    event.remove({output: 'quark:trowel'})
    event.shaped(
        'quark:trowel',
        [
            'H',
            'W'
        ],
        {
            H: 'kubejs:trowel_head',
            W: '#forge:rods/wooden'
        }
    )

    event.replaceInput({output: 'create:sand_paper'}, 'minecraft:sand', '#minecraft:sand')
})