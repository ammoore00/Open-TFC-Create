onEvent('recipes', event => {
    event.replaceInput({output: 'create:copper_backtank'}, 'tfc:metal/ingot/copper', 'tfc:metal/sheet/copper')
    event.replaceInput({output: 'create:copper_backtank'}, 'minecraft:copper_block', 'create:fluid_tank')

    event.replaceInput({output: 'quark:abacus'}, '#minecraft:planks', '#tfc:lumber')
    event.replaceInput({output: 'quark:abacus'}, 'minecraft:iron_ingot', 'tfc:metal/ingot/wrought_iron')

    event.replaceInput({output: 'create:engineers_goggles'}, 'tfc:metal/sheet/gold', 'tfc:metal/rod/gold')
    event.replaceInput({output: 'create:engineers_goggles'}, '#bookshelf:strings', 'minecraft:leather')

    event.remove({output: 'quark:trowel'})
    event.shaped(
        'quark:trowel',
        [
            'H',
            'W'
        ],
        {
            H: 'kubejs:trowel_head',
            W: '#forge:rods/wooden'
        }
    ).id('kubejs:trowel')

    event.replaceInput({output: 'create:sand_paper'}, 'minecraft:sand', '#minecraft:sand')

    event.replaceInput({output: 'create:filter'}, 'minecraft:iron_nugget', 'tfc:metal/rod/brass')
    event.replaceInput({output: 'create:filter'}, '#minecraft:wool', 'tfc:jute_net')
    event.replaceInput({output: 'create:attribute_filter'}, 'create:brass_nugget', 'tfc:metal/rod/steel')
    event.replaceInput({output: 'create:attribute_filter'}, '#minecraft:wool', 'tfc:jute_net')

    event.remove({output: 'create:super_glue'})
    event.shapeless(
        'create:super_glue',
        [
            'tfc:metal/sheet/zinc',
            'tfc:glue'
        ]
    ).id('kubejs:super_glue')

    event.shapeless(
        'toms_storage:ts.paint_kit',
        [
            'tfc:metal/sheet/zinc',
            '#forge:dyes'
        ]
    ).id('kubejs:paint_kit')
    
    event.remove({output: 'farmersdelight:flint_knife'})
    event.remove({output: 'farmersdelight:iron_knife'})
    event.remove({output: 'farmersdelight:golden_knife'})
    event.remove({output: 'farmersdelight:diamond_knife'})
    event.remove({output: 'farmersdelight:netherite_knife'})

    let nonWhiteColors = [
        'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
    ]

    for (const color of nonWhiteColors) {
        event.remove({id: 'comforts:sleeping_bag_' + color})
        event.remove({id: 'comforts:hammock_' + color})
        event.remove({id: 'minecraft:' + color + '_bed'})
    }

    event.replaceInput({id: 'comforts:sleeping_bag_white'}, 'minecraft:white_wool', '#tfc:high_quality_cloth')
    event.replaceInput({id: 'comforts:hammock_white'}, 'minecraft:white_wool', '#tfc:high_quality_cloth')

    event.remove({output: 'tfc:metal/bucket/red_steel'})
    event.remove({output: 'tfc:metal/bucket/blue_steel'})
    event.remove({output: 'minecraft:bucket'})

    event.replaceInput({output: 'minecraft:lodestone'}, 'minecraft:chiseled_stone_bricks', '#tfc:rock/chiseled_bricks')
    event.replaceInput({output: 'minecraft:lodestone'}, 'minecraft:netherite_ingot', 'tfc:ore/rich_magnetite')

    event.recipes.createMechanicalCrafting(
        'minecraft:elytra',
        [
            'LRSRL',
            'RMIMR',
            'RCSCR',
            'RC CR',
            'R   R'
        ],
        {
            L: 'sewingkit:leather_strip',
            R: 'tfc:metal/rod/brass',
            S: 'create:sturdy_sheet',
            M: 'create:precision_mechanism',
            I: 'kubejs:integrated_circuit',
            C: '#tfc:high_quality_cloth'
        }
    ).id('kubejs:mechanical_crafting/elytra')
})