onEvent('recipes', event => {
    event.replaceInput({output: 'create:fluid_tank'}, 'tfc:metal/sheet/copper', 'tfc:metal/double_sheet/copper')
    event.replaceInput({output: 'create:fluid_tank'}, 'minecraft:barrel', '#forge:glass/colorless')

    event.replaceInput({output: 'create:basin'}, 'create:andesite_alloy', 'tfc:metal/ingot/cast_iron')

    event.shapeless(
        'createaddition:straw',
        [
            'create:mechanical_pump',
            'create:precision_mechanism'
        ]
    ).id('kubejs:fuel_pump')
})