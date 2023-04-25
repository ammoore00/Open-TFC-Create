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

    event.recipes.createMixing(
        'tfc:soaked_papyrus_strip',
        [
            Fluid.of('minecraft:water', 200),
            'tfc:papyrus_strip'
        ]
    ).id('kubejs:mixing/soaked_papyrus_strip')

    //------ Paper from wood ------//

    
    
    //------ Refining ------//

    event.recipes.createCompacting(
        'tfc:unrefined_paper',
        [
            '4x tfc:soaked_papyrus_strip'
        ]
    ).id('kubejs:compacting/unrefined_paper')

    event.recipes.createDeploying(
        'minecraft:paper',
        [
            'tfc:unrefined_paper',
            '#tfc:knives'
        ]
    )
})