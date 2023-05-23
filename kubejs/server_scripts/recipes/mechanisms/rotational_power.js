onEvent('recipes', event => {
    event.replaceInput({output: 'create:cogwheel'}, '#minecraft:planks', '#tfc:lumber')
    event.replaceInput({output: 'create:large_cogwheel'}, '#minecraft:planks', '#tfc:lumber')

    event.remove({output: 'create:encased_chain_drive'})
    event.shapeless(
        'create:encased_chain_drive',
        [
            'create:andesite_casing',
            '#kubejs:chains'
        ]
    )

    event.replaceInput({output: 'create:water_wheel'}, '#minecraft:wooden_slabs', '#tfc:lumber')
    event.replaceInput({output: 'create:hand_crank'}, '#minecraft:planks', '#tfc:lumber')
    
    event.replaceInput({output: 'create:chute'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

    event.replaceInput({output: 'create:wooden_bracket'}, '#tfc:can_be_lit_on_torch', '#tfc:lumber')
    event.replaceInput({output: 'create:metal_bracket'}, 'minecraft:iron_nugget', 'tfc:metal/rod/wrought_iron')
    event.replaceInput({output: 'create:metal_bracket'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

    event.remove({output: 'create:white_sail'})
    event.shaped(
        'create:sail_frame',
        [
            ' L ',
            'L L',
            ' L '
        ],
        {
            L: '#tfc:lumber'
        }
    )
    event.shapeless(
        'create:white_sail',
        [
            'create:sail_frame',
            '#tfc:high_quality_cloth'
        ]
    )
    
    event.replaceInput({output: 'create:flywheel'}, 'tfc:metal/ingot/brass', 'tfc:metal/rod/brass')

    event.replaceInput({output: 'create:steam_engine'}, 'minecraft:copper_block', 'create:fluid_tank')
    event.replaceInput({output: 'create:steam_engine'}, 'create:andesite_alloy', 'tfc:metal/rod/steel')
    event.replaceInput({output: 'create:steam_engine'}, 'tfc:metal/sheet/gold', 'tfc:metal/sheet/brass')
})