onEvent('item.tags', event => {
    event.add('forge:tools/knives', '#tfc:knives')

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
        for (const metal of toolMetals) {
            event.add('kubejs:' + type + 's', 'tfc:metal/' + type + '/' + metal)
        }
    }
})