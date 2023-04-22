onEvent('item.tags', event => {
	event.add('forge:sheets/iron', '#forge:plates/iron')
	event.add('forge:sheets/gold', '#forge:plates/gold')
	event.add('forge:sheets/zinc', '#forge:plates/zinc')
	event.add('forge:sheets/copper', '#forge:plates/copper')
	event.add('forge:sheets/brass', '#forge:plates/brass')

    // Annoying sheets that didn't want to get detected automatically
    event.add('kubejs:gold_sheets', ['tfc:metal/sheet/gold', 'create:golden_sheet'])
    event.add('kubejs:brass_sheets', ['tfc:metal/sheet/brass', 'create:brass_sheet'])
    event.add('kubejs:copper_sheets', ['tfc:metal/sheet/copper', 'create:copper_sheet'])

    event.add('forge:sheets/wrought_iron', 'create:iron_sheet')

    event.add('kubejs:mafic_alloy_components', [
        'tfc:powder/limonite',
        'kubejs:magnetite_powder',
        'tfc:powder/hematite',
        'kubejs:sphalerite_powder',
        'kubejs:garnierite_powder'
    ])

    event.removeAll('tfc:blast_furnace_fuels')
    event.add('tfc:blast_furnace_fuels', 'create:blaze_cake')
})