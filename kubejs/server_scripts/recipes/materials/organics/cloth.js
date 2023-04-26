onEvent('recipes', event => {
    
    event.replaceInput({output: 'sewingkit:sewing_station'}, 'minecraft:stick', '#tfc:lumber')
    event.replaceInput({output: 'sewingkit:sewing_station'}, '#minecraft:planks', '#tfc:lumber')

    //------ Wool ------//

    event.recipes.createDeploying(
        '8x tfc:wool_yarn',
        [
            'tfc:wool',
            'tfc:spindle'
        ]
    ).keepHeldItem()
    .id('kubejs:deploying/wool_yarn')

    event.recipes.createCompacting(
        'tfc:wool_cloth',
        [
            '16x tfc:wool_yarn'
        ]
    ).id('kubejs:compacting/wool_cloth')

    event.remove({id: 'sewingkit:wool_roll_from_carpet'})
    event.remove({id: 'sewingkit:wool_roll_from_wool'})
    event.remove({id: 'sewingkit:wool_trim_from_carpet'})
    event.remove({id: 'sewingkit:wool_trim_from_wool'})
    
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('tfc:wool_cloth').toJson()
        ],
        tool: Ingredient.of('#forge:shears').toJson(),
        result: [
            Item.of('2x sewingkit:wool_roll').toResultJson()
        ]
    }).id('kubejs:cutting/wool_cloth')
    
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('sewingkit:wool_roll').toJson()
        ],
        tool: Ingredient.of('#forge:shears').toJson(),
        result: [
            Item.of('2x sewingkit:wool_trim').toResultJson()
        ]
    }).id('kubejs:cutting/wool_roll')

    event.recipes.createCutting(
        [
            '3x sewingkit:wool_roll'
        ],
        'tfc:wool_cloth'
    ).id('kubejs:create_cutting/wool')

    event.recipes.createCutting(
        [
            '3x sewingkit:wool_trim'
        ],
        'sewingkit:wool_roll'
    ).id('kubejs:create_cutting/wool_roll')

    //------ Slik ------//

    event.remove({id: 'tfc:loom/silk_cloth'})
    event.custom({
        type: 'tfc:loom',
        ingredient: {
            item: 'minecraft:string'
        },
        input_count: 16,
        result: {
            item: 'tfc:silk_cloth'
        },
        steps_required: 16,
        in_progress_texture: 'minecraft:block/white_wool'
    }).id('tfc:loom/silk_cloth')

    event.recipes.createCompacting(
        'tfc:silk_cloth',
        [
            '16x minecraft:string'
        ]
    ).id('kubejs:compacting/silk_cloth')

    //------ Jute ------//

    event.remove({id: 'farmersdelight:canvas_from_rug'})

    event.recipes.createCompacting(
        'tfc:jute_fiber',
        [
            Fluid.of('minecraft:water', 200),
            'tfc:jute'
        ]
    ).id('kubejs:compacting/jute_fiber')

    event.recipes.createCompacting(
        'tfc:burlap_cloth',
        [
            '12x tfc:jute_fiber'
        ]
    ).id('kubejs:compacting/burlap_cloth')

    event.replaceInput({id: 'farmersdelight:rope'}, '#kubejs:unification/straw', 'tfc:jute_fiber')
    event.remove({id: 'quark:building/crafting/rope'})
    event.remove({id: 'farmersdelight:lead_from_rope'})
})