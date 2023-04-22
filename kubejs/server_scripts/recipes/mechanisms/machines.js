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

    event.replaceInput({output: 'create:deployer'}, 'create:electron_tube', 'create:polished_rose_quartz')
    
    event.replaceInput({output: 'create:crushing_wheel'}, '#minecraft:planks', '#tfc:lumber')
})