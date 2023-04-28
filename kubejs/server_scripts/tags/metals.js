onEvent('item.tags', event => {
	event.add('forge:sheets/gold', '#forge:plates/gold')
	event.add('forge:sheets/zinc', '#forge:plates/zinc')
	event.add('forge:sheets/copper', '#forge:plates/copper')
	event.add('forge:sheets/brass', '#forge:plates/brass')
    event.add('forge:sheets/wrought_iron', 'create:iron_sheet')

    event.remove('forge:rods/iron', 'createaddition:iron_rod')

    event.add('kubejs:mafic_alloy_components', [
        'tfc:powder/limonite',
        'kubejs:magnetite_powder',
        'tfc:powder/hematite',
        'kubejs:sphalerite_powder',
        'kubejs:garnierite_powder'
    ])

    event.removeAll('tfc:blast_furnace_fuels')
    event.add('tfc:blast_furnace_fuels', 'create:blaze_cake')

    event.add('kubejs:sheets_for_belt', [
        'tfc:metal/sheet/bismuth_bronze',
        'tfc:metal/sheet/black_bronze',
        'tfc:metal/sheet/bronze',
        'tfc:metal/sheet/wrought_iron'
    ])

    event.add('kubejs:rods_for_belt', [
        'tfc:metal/rod/bismuth_bronze',
        'tfc:metal/rod/black_bronze',
        'tfc:metal/rod/bronze',
        'tfc:metal/rod/wrought_iron'
    ])
})