onEvent('recipes', event => {
    event.replaceInput({output: 'createaddition:electric_motor'}, 'tfc:metal/sheet/brass', 'tfc:metal/sheet/red_steel')
    event.replaceInput({output: 'createaddition:electric_motor'}, 'createaddition:capacitor', 'kubejs:integrated_circuit')
    event.replaceInput({output: 'createaddition:electric_motor'}, '#forge:rods/iron', 'create:brass_casing')
    
    event.replaceInput({output: 'createaddition:alternator'}, 'tfc:metal/sheet/wrought_iron', 'tfc:metal/sheet/blue_steel')
    event.replaceInput({output: 'createaddition:alternator'}, 'createaddition:capacitor', 'kubejs:integrated_circuit')
    event.replaceInput({output: 'createaddition:alternator'}, '#forge:rods/iron', 'create:brass_casing')
    
    event.replaceInput({output: 'createaddition:tesla_coil'}, 'tfc:metal/sheet/brass', 'tfc:metal/sheet/blue_steel')
    event.replaceInput({output: 'createaddition:tesla_coil'}, 'create:electron_tube', 'kubejs:integrated_circuit')

    event.replaceInput({output: 'createaddition:accumulator'}, '#forge:rods/copper', 'tfc:metal/rod/red_steel')
    event.remove({id: 'createaddition:crafting/accumulator_conversion'})
})