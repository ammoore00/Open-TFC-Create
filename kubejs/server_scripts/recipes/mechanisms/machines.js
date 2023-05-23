onEvent('recipes', event => {
    event.replaceInput({output: 'create:millstone'}, '#forge:stone', 'tfc:quern')
    event.replaceInput({output: 'create:mechanical_press'}, 'minecraft:iron_block', 'tfc:metal/double_sheet/wrought_iron')

    event.remove({output: 'create:empty_blaze_burner'})
    event.shaped(
        'create:blaze_burner',
        [
            ' S ',
            'SFS',
            ' S '
        ],
        {
            S: 'tfc:metal/sheet/steel',
            F: 'tfc:blast_furnace'
        }
    )
    
    event.replaceInput({output: 'create:mechanical_drill'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')
    event.replaceInput({output: 'create:mechanical_saw'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

    event.replaceInput({output: 'create:redstone_contact'}, 'minecraft:cobblestone', '#forge:cobblestone')

    event.replaceInput({output: 'create:mechanical_crafter'}, 'minecraft:crafting_table', '#tfc:workbenches')
    event.remove({output: 'create:crafter_slot_cover'})
    event.shapeless(
        '4x create:crafter_slot_cover',
        ['tfc:metal/sheet/brass']
    )
    
    event.replaceInput({output: 'create:crushing_wheel'}, '#minecraft:planks', '#tfc:lumber')

    event.replaceInput({output: 'create:rope_pulley'}, '#minecraft:wool', 'quark:rope')

    event.remove({output: 'firmalife:climate_station'})
    event.shaped(
        'firmalife:climate_station',
        [
            'LSL',
            'LIL',
            'LSL'
        ],
        {
            L: '#tfc:lumber',
            S: 'firmalife:metal/sheet/stainless_steel',
            I: 'kubejs:integrated_circuit'
        }
    )

    event.replaceInput({output: 'create:mechanical_crafter'}, 'create:electron_tube', 'tfc:brass_mechanisms')

    event.replaceInput({output: 'create_enchantment_industry:printer'}, 'tfc:metal/sheet/wrought_iron', 'firmalife:metal/sheet/stainless_steel')
    event.replaceInput({output: 'create_enchantment_industry:disenchanter'}, '#create:sandpaper', 'createdeco:polished_iron_bars')
})