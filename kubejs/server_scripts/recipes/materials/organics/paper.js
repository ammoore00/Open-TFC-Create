onEvent('recipes', event => {
    event.remove({id: 'minecraft:paper'})
    event.remove({id: 'farmersdelight:paper_from_tree_bark'})
    event.remove({id: 'create:pressing/sugar_cane'})

    //------ Paper from papyrus ------//

    event.remove({id: 'tfc:crafting/papyrus_strips'})
    event.custom({
        type: 'farmersdelight:cutting',
        ingredients: [
            Ingredient.of('tfc:papyrus').toJson()
        ],
        tool: Ingredient.of('#tfc:knives').toJson(),
        result: [
            Item.of('4x tfc:papyrus_strip').toResultJson()
        ]
    }).id('kubejs:cutting/papyrus')

    /*
    event.recipes.createMixing(
        'tfc:soaked_papyrus_strip',
        [
            Fluid.of('minecraft:water', 200),
            'tfc:papyrus_strip'
        ]
    ).id('kubejs:mixing/soaked_papyrus_strip')
    */

    event.recipes.createCompacting(
        'tfc:unrefined_paper',
        [
            '4x tfc:soaked_papyrus_strip'
        ]
    ).id('kubejs:compacting/unrefined_paper')

    //------ Paper from wood ------//

    event.recipes.tfc.barrel_sealed(
        'kubejs:wood_pulp',
        [
            Fluid.of('minecraft:water', 200),
            'kubejs:sawdust'
        ],
        8000
    )

    event.recipes.createMixing(
        'kubejs:wood_pulp',
        [
            Fluid.of('minecraft:water', 200),
            'kubejs:sawdust'
        ]
    ).id('kubejs:mixing/wood_pulp')

    event.recipes.createCompacting(
        'tfc:unrefined_paper',
        [
            '4x kubejs:wood_pulp'
        ]
    ).id('kubejs:compacting/wood_pulp')
    
    //------ Refining ------//

    event.recipes.createDeploying(
        'minecraft:paper',
        [
            'tfc:unrefined_paper',
            '#tfc:knives'
        ]
    )
})