onEvent('item.registry', event => {
    event.create('trowel_head')
    event.create('incomplete_trowel_head', 'create:sequenced_assembly').texture('trowel_head')

    let smithingTypes = [
        'pickaxe_head',
        'propick_head',
        'axe_head',
        'shovel_head',
        'hoe_head',
        'chisel_head',
        'hammer_head',
        'saw_blade',
        'javelin_head',
        'sword_blade',
        'mace_head',
        'knife_blade',
        'scythe_blade',
        'shears',
        'fish_hook',
        'tuyere',

        'helmet',
        'chestplate',
        'greaves',
        'boots',
        'shield',

        'chain',
        'lamp',
        'trapdoor'
    ]

    let toolMetals = [
        'bismuth_bronze',
        'black_bronze',
        'bronze',
        'copper',
        'wrought_iron',
        'steel',
        'black_steel',
        'blue_steel',
        'red_steel'
    ]

    for (const type of smithingTypes) {
        event.create('kubejs:' + type + '_smithing_plan').texture('kubejs:smithing_plans/' + type)

        for (const metal of toolMetals) {
            event.create('kubejs:incomplete_' + metal + '_' + type, 'create:sequenced_assembly').texture('kubejs:item/incomplete_tools/' + type + '/' + metal)
        }
    }
})