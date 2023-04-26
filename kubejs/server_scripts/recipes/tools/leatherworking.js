onEvent('recipes', event => {
    event.remove({type: 'tfc:leather_knapping'})
    event.remove({output: 'sewingkit:wood_sewing_needle'})
    event.remove({output: 'sewingkit:bone_sewing_needle'})
    event.remove({output: 'sewingkit:stone_sewing_needle'})
    event.remove({output: 'sewingkit:iron_sewing_needle'})
    event.remove({output: 'sewingkit:gold_sewing_needle'})
    event.remove({output: 'sewingkit:diamond_sewing_needle'})
    event.remove({output: 'sewingkit:netherite_sewing_needle'})
    
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('minecraft:bone').toJson()
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('sewingkit:bone_sewing_needle').toResultJson()
        ]
    }).id('kubejs:cutting/bone')

    event.recipes.tfc.anvil(
        'sewingkit:iron_sewing_needle',
        'tfc:metal/rod/wrought_iron',
        [
            'draw_last',
            'shrink_any',
            'hit_any'
        ]
    ).applyBonus()
    .id('kubejs:anvil/iron_sewing_needle')

    event.recipes.createPressing(
        Item.of('sewingkit:iron_sewing_needle', '{"tfc:forging_bonus":2}'),
        'tfc:metal/rod/wrought_iron'
    ).id('kubejs:pressing/iron_sewing_needle')

    event.remove({id: 'sewingkit:leather_chestplate_via_sewing'})
    event.remove({id: 'sewingkit:leather_leggings_via_sewing'})
    event.remove({id: 'sewingkit:leather_horse_armor_via_sewing'})

    let sewing = (output, inputs) => {
        return event.custom({
            type: 'sewingkit:sewing',
            materials: inputs,
            tool: {
                type: 'sewingkit:tool_ingredient',
                tool_type: 'sewingkit_sew'
            },
            result: Item.of(output).toResultJson()
        })
    }

    sewing(
        'minecraft:leather_chestplate',
        [
            {ingredient: {item: 'sewingkit:leather_sheet'}, count: 4},
            {ingredient: {item: 'sewingkit:leather_strip'}, count: 2},
            {ingredient: {tag: 'bookshelf:strings'}, count: 1},
        ]
    ).id('kubejs:sewing/leather_chestplate')

    sewing(
        'minecraft:leather_leggings',
        [
            {ingredient: {item: 'sewingkit:leather_sheet'}, count: 3},
            {ingredient: {item: 'sewingkit:leather_strip'}, count: 2},
            {ingredient: {tag: 'bookshelf:strings'}, count: 1},
        ]
    ).id('kubejs:sewing/leather_leggings')

    sewing(
        'minecraft:leather_horse_armor',
        [
            {ingredient: {item: 'sewingkit:leather_sheet'}, count: 8},
            {ingredient: {item: 'sewingkit:leather_strip'}, count: 4},
            {ingredient: {tag: 'bookshelf:strings'}, count: 1},
        ]
    ).id('kubejs:sewing/leather_horse_armor')

    event.remove({id: 'toolbelt:belt_via_sewing'})
    event.remove({id: 'toolbelt:pouch_via_sewing'})

    event.remove({output: 'quark:backpack'})

    sewing(
        'toolbelt:belt',
        [
            {ingredient: {item: 'sewingkit:leather_sheet'}, count: 2},
            {ingredient: {item: 'sewingkit:leather_strip'}, count: 3},
            {ingredient: {tag: 'bookshelf:strings'}, count: 2},
            {ingredient: {tag: 'kubejs:sheets_for_belt'}, count: 1},
        ]
    ).id('kubejs:sewing/belt')

    sewing(
        'toolbelt:pouch',
        [
            {ingredient: {item: 'sewingkit:leather_sheet'}, count: 1},
            {ingredient: {item: 'sewingkit:leather_strip'}, count: 1},
            {ingredient: {tag: 'bookshelf:strings'}, count: 1},
            {ingredient: {tag: 'kubejs:rods_for_belt'}, count: 1},
        ]
    ).id('kubejs:sewing/pouch')

    sewing(
        'quark:backpack',
        [
            {ingredient: {item: 'sewingkit:leather_sheet'}, count: 4},
            {ingredient: {item: 'sewingkit:leather_strip'}, count: 2},
            {ingredient: {item: 'toolbelt:pouch'}, count: 2},
            {ingredient: {tag: 'bookshelf:strings'}, count: 2},
        ]
    ).id('kubejs:sewing/backpack')

    for (let i = 1; i < 8; i++) {
        event.remove({id: 'toolbelt:pouch_upgrade_' + i + '_via_sewing'})

        event.custom({
            type: 'sewingkit:sewing',
            materials: [
                {ingredient: {type: 'toolbelt:belt_upgrade_level', upgrade_level: i - 1}, count: 1},
                {ingredient: {item: 'toolbelt:pouch'}, count: 1},
                {ingredient: {tag: 'bookshelf:strings'}, count: 1},
            ],
            tool: {
                type: 'sewingkit:tool_ingredient',
                tool_type: 'sewingkit_sew'
            },
            result: {item: "toolbelt:belt", nbt: {Size: i + 2}}
        }).id('kubejs:sewing/tool_belt_upgrade_' + i)
    }
})